/**
 * Terminology Validator
 *
 * Validates coded values against ValueSet bindings.
 */

import type { ValueSet, CodeSystem, ElementDefinitionBinding } from '../core/types.js';
import type { SpecRegistry } from '../core/spec-registry.js';
import { TerminologyService, requiresExternalValidation } from './terminology-service.js';

export interface Coding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface CodeableConcept {
  coding?: Coding[];
  text?: string;
}

export interface TerminologyValidationResult {
  valid: boolean;
  message?: string;
  /** Warning message for display mismatch (code is valid but display doesn't match) */
  displayWarning?: string;
}

/**
 * Format an error message for invalid code in ValueSet
 * Only includes system information if a system is actually provided
 */
function formatCodeNotInValueSetMessage(
  code: string | undefined,
  system: string | undefined,
  valueSetUrl: string,
  bindingStrength: string
): string {
  const codeDisplay = code ? `'${code}'` : '(empty)';
  const systemPart = system ? ` from system '${system}'` : '';
  return `Code ${codeDisplay}${systemPart} is not in the ${bindingStrength} ValueSet '${valueSetUrl}'`;
}

/**
 * Validate a Coding against a ValueSet binding
 */
export async function validateCodingAgainstBinding(
  coding: Coding,
  binding: ElementDefinitionBinding,
  registry: SpecRegistry,
  terminologyService?: TerminologyService
): Promise<TerminologyValidationResult> {
  // No binding means no validation needed
  if (!binding.valueSet) {
    return { valid: true };
  }

  // Get the ValueSet
  const valueSetUrl = binding.valueSet.split('|')[0]; // Remove version if present
  const valueSet = registry.getValueSet(valueSetUrl);

  // Check if we should use external validation
  const shouldUseExternal = terminologyService && coding.system && requiresExternalValidation(coding.system);

  if (!valueSet && !shouldUseExternal) {
    // ValueSet not found and no external service - depends on binding strength what to do
    if (binding.strength === 'required') {
      return {
        valid: false,
        message: `ValueSet '${valueSetUrl}' not found for required binding`,
      };
    }
    // For other strengths, we can't validate so we pass
    return { valid: true };
  }

  // Try external validation first for systems that require it
  if (shouldUseExternal && coding.code) {
    const externalResult = await terminologyService.validateCode({
      code: coding.code,
      system: coding.system,
      valueSetUrl: valueSetUrl,
      display: coding.display,
    });

    if (externalResult.validated) {
      if (!externalResult.result) {
        switch (binding.strength) {
          case 'required':
            return {
              valid: false,
              message: externalResult.message || formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'required'),
            };
          case 'extensible':
            return {
              valid: true,
              message: externalResult.message || formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'extensible'),
            };
          case 'preferred':
            return {
              valid: true,
              message: externalResult.message || formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'preferred'),
            };
          default:
            return { valid: true };
        }
      }
      return { valid: true };
    }
    // If external validation failed (server unreachable), fall through to local validation
  }

  // Fall back to local validation if we have the ValueSet
  if (valueSet) {
    const isValid = isCodeInValueSet(coding, valueSet, registry);

    if (!isValid) {
      switch (binding.strength) {
        case 'required':
          return {
            valid: false,
            message: formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'required'),
          };
        case 'extensible':
          return {
            valid: true,
            message: formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'extensible'),
          };
        case 'preferred':
          return {
            valid: true,
            message: formatCodeNotInValueSetMessage(coding.code, coding.system, valueSetUrl, 'preferred'),
          };
        case 'example':
          return { valid: true };
        default:
          return { valid: true };
      }
    }

    // Code is valid, now validate the display if provided
    const displayWarning = validateCodingDisplay(coding, registry);
    if (displayWarning) {
      return {
        valid: true,
        displayWarning,
      };
    }
  }

  return { valid: true };
}

/**
 * Validate a CodeableConcept against a ValueSet binding
 */
export async function validateCodeableConceptAgainstBinding(
  concept: CodeableConcept,
  binding: ElementDefinitionBinding,
  registry: SpecRegistry,
  terminologyService?: TerminologyService
): Promise<TerminologyValidationResult> {
  // If there are no codings, check if that's okay
  if (!concept.coding || concept.coding.length === 0) {
    // For required bindings, having only text is usually not enough
    if (binding.strength === 'required') {
      if (concept.text) {
        return {
          valid: false,
          message: `CodeableConcept has text but no coding for required binding`,
        };
      }
    }
    return { valid: true };
  }

  // Check each coding
  const results = await Promise.all(
    concept.coding.map((c) =>
      validateCodingAgainstBinding(c, binding, registry, terminologyService)
    )
  );

  // For required bindings, at least one coding must be valid
  if (binding.strength === 'required') {
    const hasValid = results.some((r) => r.valid);
    if (!hasValid) {
      return {
        valid: false,
        message: results.map((r) => r.message).join('; '),
      };
    }
  }

  // Return the first invalid result
  const invalid = results.find((r) => !r.valid);
  if (invalid) {
    return invalid;
  }

  // Collect messages and display warnings from valid results
  const messages = results.filter((r) => r.valid && r.message).map((r) => r.message);
  const displayWarnings = results.filter((r) => r.valid && r.displayWarning).map((r) => r.displayWarning);

  const result: TerminologyValidationResult = { valid: true };

  if (messages.length > 0) {
    result.message = messages.join('; ');
  }

  if (displayWarnings.length > 0) {
    result.displayWarning = displayWarnings.join('; ');
  }

  return result;
}

/**
 * Validate a code (string) against a ValueSet binding
 */
export async function validateCodeAgainstBinding(
  code: string,
  binding: ElementDefinitionBinding,
  registry: SpecRegistry,
  terminologyService?: TerminologyService
): Promise<TerminologyValidationResult> {
  // Create a minimal Coding for validation
  const coding: Coding = { code };
  return validateCodingAgainstBinding(coding, binding, registry, terminologyService);
}

/**
 * Check if a Coding is in a ValueSet
 */
function isCodeInValueSet(
  coding: Coding,
  valueSet: ValueSet,
  registry: SpecRegistry
): boolean {
  if (!coding.code) {
    return false;
  }

  // Check expansion first (most reliable)
  if (valueSet.expansion?.contains) {
    return checkExpansion(coding, valueSet.expansion.contains);
  }

  // Check compose
  if (valueSet.compose) {
    return checkCompose(coding, valueSet.compose, registry);
  }

  // No expansion or compose, can't validate
  return true;
}

/**
 * Check if a code is in the expansion
 */
function checkExpansion(coding: Coding, contains: any[]): boolean {
  for (const item of contains) {
    // Check this item
    if (matchesCoding(coding, item)) {
      return true;
    }

    // Check nested contains
    if (item.contains && checkExpansion(coding, item.contains)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if a Coding matches an expansion item
 */
function matchesCoding(coding: Coding, item: any): boolean {
  // Code must match
  if (coding.code !== item.code) {
    return false;
  }

  // If system is specified, it must match
  if (coding.system && item.system && coding.system !== item.system) {
    return false;
  }

  return true;
}

/**
 * Check if a code is in the compose section
 */
function checkCompose(
  coding: Coding,
  compose: any,
  registry: SpecRegistry
): boolean {
  // Check includes
  if (compose.include) {
    for (const include of compose.include) {
      if (checkInclude(coding, include, registry)) {
        // Check excludes
        if (compose.exclude) {
          for (const exclude of compose.exclude) {
            if (checkInclude(coding, exclude, registry)) {
              return false; // Excluded
            }
          }
        }
        return true;
      }
    }
  }

  return false;
}

/**
 * Check if a code matches an include/exclude clause
 */
function checkInclude(
  coding: Coding,
  include: any,
  registry: SpecRegistry
): boolean {
  // Check system match
  if (include.system && coding.system && include.system !== coding.system) {
    return false;
  }

  // If concept is listed, check explicit codes
  if (include.concept) {
    for (const concept of include.concept) {
      if (concept.code === coding.code) {
        return true;
      }
    }
    return false;
  }

  // If there's a valueSet reference, check that
  if (include.valueSet) {
    for (const vsUrl of include.valueSet) {
      const vs = registry.getValueSet(vsUrl);
      if (vs && isCodeInValueSet(coding, vs, registry)) {
        return true;
      }
    }
    return false;
  }

  // If there's a filter, we can't fully evaluate it without the CodeSystem
  if (include.filter) {
    // Try to get the CodeSystem
    if (include.system) {
      const codeSystem = registry.getCodeSystem(include.system);
      if (codeSystem) {
        return checkFilters(coding, include.filter, codeSystem);
      }
    }
    // Can't evaluate filter, assume it matches
    return true;
  }

  // Include all from system (no concept list)
  if (include.system && !include.concept) {
    // Check if code exists in the CodeSystem
    const codeSystem = registry.getCodeSystem(include.system);
    if (codeSystem) {
      return isCodeInCodeSystem(coding.code!, codeSystem);
    }
    // Can't verify, assume it's valid
    return true;
  }

  return false;
}

/**
 * Check if a code is in a CodeSystem
 */
function isCodeInCodeSystem(code: string, codeSystem: CodeSystem): boolean {
  if (!codeSystem.concept) {
    return false;
  }

  return checkConceptList(code, codeSystem.concept);
}

/**
 * Recursively check a concept list for a code
 */
function checkConceptList(code: string, concepts: any[]): boolean {
  for (const concept of concepts) {
    if (concept.code === code) {
      return true;
    }
    if (concept.concept && checkConceptList(code, concept.concept)) {
      return true;
    }
  }
  return false;
}

/**
 * Check ValueSet filters against a CodeSystem
 */
function checkFilters(
  coding: Coding,
  filters: any[],
  codeSystem: CodeSystem
): boolean {
  // Simplified filter checking
  // Full implementation would require proper hierarchy traversal

  // First check if code exists in CodeSystem
  if (!isCodeInCodeSystem(coding.code!, codeSystem)) {
    return false;
  }

  // For now, if code exists and there are filters, we assume it passes
  // A full implementation would evaluate each filter against the CodeSystem hierarchy
  return true;
}

/**
 * Get the binding strength as a severity level
 */
export function bindingStrengthToSeverity(
  strength: string
): 'error' | 'warning' | 'information' {
  switch (strength) {
    case 'required':
      return 'error';
    case 'extensible':
      return 'warning';
    case 'preferred':
      return 'information';
    default:
      return 'information';
  }
}

/**
 * Validate the display value of a Coding against the CodeSystem
 *
 * Per FHIR spec: "If the display element is populated, the string used in display
 * SHALL be one of the display strings defined for that code by the code system"
 *
 * @returns Warning message if display doesn't match, undefined if valid or can't validate
 */
export function validateCodingDisplay(
  coding: Coding,
  registry: SpecRegistry
): string | undefined {
  // No display to validate
  if (!coding.display || !coding.code || !coding.system) {
    return undefined;
  }

  // Get the CodeSystem
  const codeSystem = registry.getCodeSystem(coding.system);
  if (!codeSystem) {
    // Can't validate without the CodeSystem
    return undefined;
  }

  // Get valid displays for this code
  const validDisplays = getValidDisplaysForCode(coding.code, codeSystem);

  if (validDisplays.length === 0) {
    // Code not found in CodeSystem or no displays defined
    return undefined;
  }

  // Check if the provided display matches any valid display
  // Note: Display comparison should be case-sensitive per FHIR spec
  if (!validDisplays.includes(coding.display)) {
    return `Display '${coding.display}' is not a valid display for code '${coding.code}'. Valid display(s): ${validDisplays.map(d => `'${d}'`).join(', ')}`;
  }

  return undefined;
}

/**
 * Get all valid display values for a code in a CodeSystem
 * This includes the main display and any designations
 */
function getValidDisplaysForCode(code: string, codeSystem: CodeSystem): string[] {
  if (!codeSystem.concept) {
    return [];
  }

  return findDisplaysInConcepts(code, codeSystem.concept);
}

/**
 * Recursively search for a code and return its valid displays
 */
function findDisplaysInConcepts(code: string, concepts: any[]): string[] {
  for (const concept of concepts) {
    if (concept.code === code) {
      const displays: string[] = [];

      // Add the main display
      if (concept.display) {
        displays.push(concept.display);
      }

      // Add designations (alternative displays)
      if (concept.designation && Array.isArray(concept.designation)) {
        for (const designation of concept.designation) {
          if (designation.value) {
            displays.push(designation.value);
          }
        }
      }

      return displays;
    }

    // Check nested concepts
    if (concept.concept) {
      const found = findDisplaysInConcepts(code, concept.concept);
      if (found.length > 0) {
        return found;
      }
    }
  }

  return [];
}
