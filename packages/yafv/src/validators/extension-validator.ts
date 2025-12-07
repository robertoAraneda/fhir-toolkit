/**
 * Extension Validator
 *
 * Validates FHIR extensions against their StructureDefinitions.
 * Handles both simple and complex extensions.
 */

import type {
  OperationOutcomeIssue,
  IssueSeverity,
  StructureDefinition,
  ElementDefinition,
} from '../core/types.js';
import { SpecRegistry } from '../core/spec-registry.js';
import { validatePrimitiveType, isPrimitiveType } from './primitive-types.js';

export interface ExtensionValidationResult {
  /** Whether the extension validation passed */
  valid: boolean;
  /** Issues found during validation */
  issues: OperationOutcomeIssue[];
}

export interface ExtensionValue {
  url: string;
  extension?: ExtensionValue[];
  [key: string]: any;
}

/**
 * Validate an extension against its definition
 */
export function validateExtension(
  extension: ExtensionValue,
  path: string,
  registry: SpecRegistry,
  isModifier: boolean = false
): ExtensionValidationResult {
  const issues: OperationOutcomeIssue[] = [];

  // Check required url
  if (!extension.url) {
    issues.push(
      createIssue(
        'error',
        'required',
        `Extension at '${path}' must have a url`,
        path
      )
    );
    return { valid: false, issues };
  }

  // Basic structural validation: extension can only have one value[x]
  // This applies to ALL extensions, even unknown ones
  const valueKeys = Object.keys(extension).filter((key) => key.startsWith('value'));
  if (valueKeys.length > 1) {
    issues.push(
      createIssue(
        'error',
        'structure',
        `Extension can only have one value[x] element, but found: ${valueKeys.join(', ')}`,
        path
      )
    );
    return { valid: false, issues };
  }

  // Get the extension definition
  const extensionDef = registry.getStructureDefinition(extension.url);

  if (!extensionDef) {
    // Unknown extension - this is a warning, not an error
    issues.push(
      createIssue(
        'warning',
        'not-found',
        `Extension definition not found for '${extension.url}'`,
        `${path}.url`
      )
    );
    return { valid: true, issues };
  }

  // Verify it's actually an extension definition
  if (extensionDef.type !== 'Extension') {
    issues.push(
      createIssue(
        'error',
        'invalid',
        `URL '${extension.url}' does not point to an Extension definition`,
        `${path}.url`
      )
    );
    return { valid: false, issues };
  }

  // Check if modifier extension is used correctly
  if (isModifier && !isModifierExtension(extensionDef)) {
    issues.push(
      createIssue(
        'warning',
        'value',
        `Extension '${extension.url}' is used as a modifier extension but is not defined as one`,
        path
      )
    );
  }

  // Validate extension content
  const contentIssues = validateExtensionContent(extension, extensionDef, path, registry);
  issues.push(...contentIssues);

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Validate an array of extensions
 */
export function validateExtensions(
  extensions: ExtensionValue[],
  basePath: string,
  registry: SpecRegistry,
  isModifier: boolean = false
): ExtensionValidationResult {
  const issues: OperationOutcomeIssue[] = [];

  for (let i = 0; i < extensions.length; i++) {
    const ext = extensions[i];
    const extPath = `${basePath}[${i}]`;

    const result = validateExtension(ext, extPath, registry, isModifier);
    issues.push(...result.issues);
  }

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Check if an extension definition is a modifier extension
 */
function isModifierExtension(extensionDef: StructureDefinition): boolean {
  // Check the context type or isModifier flag
  const elements = extensionDef.snapshot?.element || [];

  for (const element of elements) {
    if (element.path === 'Extension' && element.isModifier) {
      return true;
    }
  }

  return false;
}

/**
 * Validate the content of an extension
 */
function validateExtensionContent(
  extension: ExtensionValue,
  extensionDef: StructureDefinition,
  path: string,
  registry: SpecRegistry
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];
  const elements = extensionDef.snapshot?.element || [];

  // Check if this is a simple or complex extension
  const isComplex = hasNestedExtensions(extensionDef);

  if (isComplex) {
    // Complex extension - should have nested extensions
    if (hasValue(extension)) {
      issues.push(
        createIssue(
          'error',
          'structure',
          `Complex extension '${extension.url}' should not have a value[x] element`,
          path
        )
      );
    }

    // Validate nested extensions
    if (extension.extension) {
      const nestedIssues = validateNestedExtensions(
        extension.extension,
        extensionDef,
        `${path}.extension`,
        registry
      );
      issues.push(...nestedIssues);
    }
  } else {
    // Simple extension - should have a value
    if (extension.extension && extension.extension.length > 0) {
      issues.push(
        createIssue(
          'error',
          'structure',
          `Simple extension '${extension.url}' should not have nested extensions`,
          path
        )
      );
    }

    // Find the value element
    const valueElement = findValueElement(elements);
    if (valueElement) {
      const valueIssues = validateExtensionValue(extension, valueElement, path);
      issues.push(...valueIssues);
    }
  }

  return issues;
}

/**
 * Check if an extension definition has nested extensions
 */
function hasNestedExtensions(extensionDef: StructureDefinition): boolean {
  const elements = extensionDef.snapshot?.element || [];

  // Look for elements with path "Extension.extension" that have slices
  for (const element of elements) {
    if (element.path === 'Extension.extension') {
      // If max is "0", no nested extensions are allowed - this is a simple extension
      if (element.max === '0') {
        return false;
      }
      // If it has slicing with min > 0 slices, it's complex
      if (element.slicing && element.min && element.min > 0) {
        return true;
      }
    }
    // Check for specific sliced extensions (e.g., Extension.extension:tutId)
    // These indicate the extension has required nested sub-extensions
    if (element.path.startsWith('Extension.extension:')) {
      return true;
    }
  }

  return false;
}

/**
 * Check if an extension has a value[x] element
 */
function hasValue(extension: ExtensionValue): boolean {
  const valueKeys = Object.keys(extension).filter((key) => key.startsWith('value'));
  return valueKeys.length > 0;
}

/**
 * Find the value element definition in an extension
 */
function findValueElement(elements: ElementDefinition[]): ElementDefinition | undefined {
  return elements.find((e) => e.path === 'Extension.value[x]');
}

/**
 * Validate the value of a simple extension
 */
function validateExtensionValue(
  extension: ExtensionValue,
  valueElement: ElementDefinition,
  path: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // Find the value in the extension
  const valueKeys = Object.keys(extension).filter((key) => key.startsWith('value'));

  if (valueKeys.length === 0) {
    // Check if value is required
    if (valueElement.min > 0) {
      issues.push(
        createIssue(
          'error',
          'required',
          `Extension '${extension.url}' requires a value`,
          path
        )
      );
    }
    return issues;
  }

  if (valueKeys.length > 1) {
    issues.push(
      createIssue(
        'error',
        'structure',
        `Extension '${extension.url}' has multiple value elements: ${valueKeys.join(', ')}`,
        path
      )
    );
    return issues;
  }

  const valueKey = valueKeys[0];
  const value = extension[valueKey];

  // Get the type from the key (e.g., "valueString" -> "string")
  const typeName = valueKey.replace('value', '');
  const typeCode = typeName.charAt(0).toLowerCase() + typeName.slice(1);

  // Check if this type is allowed
  const allowedTypes = valueElement.type || [];
  const typeAllowed = allowedTypes.some(
    (t) => t.code.toLowerCase() === typeCode.toLowerCase()
  );

  if (!typeAllowed && allowedTypes.length > 0) {
    const allowedTypeNames = allowedTypes.map((t) => t.code).join(', ');
    issues.push(
      createIssue(
        'error',
        'value',
        `Extension '${extension.url}' has value type '${typeCode}' but only allows: ${allowedTypeNames}`,
        `${path}.${valueKey}`
      )
    );
    return issues;
  }

  // Validate the value against its type
  if (isPrimitiveType(typeCode)) {
    const result = validatePrimitiveType(value, typeCode);
    if (!result.valid) {
      issues.push(
        createIssue(
          'error',
          'value',
          result.message || `Invalid ${typeCode} value in extension`,
          `${path}.${valueKey}`
        )
      );
    }
  }

  return issues;
}

/**
 * Validate nested extensions in a complex extension
 */
function validateNestedExtensions(
  extensions: ExtensionValue[],
  parentDef: StructureDefinition,
  path: string,
  registry: SpecRegistry
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];
  const elements = parentDef.snapshot?.element || [];

  // Find defined slices for nested extensions
  // Note: The path is "Extension.extension" but the id has the slice name like "Extension.extension:tutId"
  // We need to filter by path AND look for sliceName
  const sliceElements = elements.filter((e) =>
    e.path === 'Extension.extension' && e.sliceName
  );
  const sliceMap = new Map<string, ElementDefinition>();
  const sliceCounts = new Map<string, number>();

  for (const sliceElement of sliceElements) {
    const sliceName = sliceElement.sliceName;
    if (sliceName) {
      sliceMap.set(sliceName, sliceElement);
      sliceCounts.set(sliceName, 0);
    }
  }

  // Validate each nested extension
  for (let i = 0; i < extensions.length; i++) {
    const ext = extensions[i];
    const extPath = `${path}[${i}]`;

    // Find matching slice
    let matchedSlice: string | undefined;
    let matchedSliceElement: ElementDefinition | undefined;
    for (const [sliceName, sliceElement] of sliceMap) {
      // Match by URL - look for fixed value or pattern
      const urlMatch = matchesSliceUrl(ext.url, sliceElement, elements);
      if (urlMatch) {
        matchedSlice = sliceName;
        matchedSliceElement = sliceElement;
        const count = sliceCounts.get(sliceName) || 0;
        sliceCounts.set(sliceName, count + 1);
        break;
      }
    }

    if (!matchedSlice) {
      // Unknown nested extension
      issues.push(
        createIssue(
          'warning',
          'structure',
          `Nested extension '${ext.url}' does not match any defined slice`,
          extPath
        )
      );
    } else if (matchedSliceElement) {
      // Validate the value type for the matched slice
      const valueIssues = validateNestedExtensionValue(ext, matchedSlice, elements, extPath);
      issues.push(...valueIssues);
    }

    // Recursively validate the nested extension
    const nestedResult = validateExtension(ext, extPath, registry);
    issues.push(...nestedResult.issues);
  }

  // Check cardinality for slices
  for (const [sliceName, sliceElement] of sliceMap) {
    const count = sliceCounts.get(sliceName) || 0;

    if (count < sliceElement.min) {
      issues.push(
        createIssue(
          'error',
          'required',
          `Nested extension slice '${sliceName}' requires at least ${sliceElement.min} item(s) but found ${count}`,
          path
        )
      );
    }

    if (sliceElement.max !== '*') {
      const maxNum = parseInt(sliceElement.max, 10);
      if (count > maxNum) {
        issues.push(
          createIssue(
            'error',
            'value',
            `Nested extension slice '${sliceName}' allows at most ${sliceElement.max} item(s) but found ${count}`,
            path
          )
        );
      }
    }
  }

  return issues;
}

/**
 * Validate the value of a nested extension against its slice definition
 */
function validateNestedExtensionValue(
  extension: ExtensionValue,
  sliceName: string,
  elements: ElementDefinition[],
  path: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // Find the value[x] element for this slice
  // e.g., Extension.extension:tutId.value[x]
  const valueElementId = `Extension.extension:${sliceName}.value[x]`;
  const valueElement = elements.find(e => e.id === valueElementId);

  if (!valueElement) {
    // No value element defined, skip validation
    return issues;
  }

  // Get allowed types from the value element
  const allowedTypes = valueElement.type || [];
  if (allowedTypes.length === 0) {
    return issues;
  }

  // Find the value in the extension
  const valueKeys = Object.keys(extension).filter((key) => key.startsWith('value'));

  if (valueKeys.length === 0) {
    // Check if value is required
    if (valueElement.min && valueElement.min > 0) {
      issues.push(
        createIssue(
          'error',
          'required',
          `Nested extension '${sliceName}' requires a value`,
          path
        )
      );
    }
    return issues;
  }

  const valueKey = valueKeys[0];

  // Get the type from the key (e.g., "valueString" -> "string", "valueIdentifier" -> "Identifier")
  const typeName = valueKey.replace('value', '');
  // Keep original case for complex types (Identifier, CodeableConcept, etc.)
  const typeCode = typeName.charAt(0).toLowerCase() + typeName.slice(1);

  // Check if this type is allowed
  const typeAllowed = allowedTypes.some(
    (t) => t.code.toLowerCase() === typeCode.toLowerCase()
  );

  if (!typeAllowed) {
    const allowedTypeNames = allowedTypes.map((t) => t.code).join(', ');
    issues.push(
      createIssue(
        'error',
        'value',
        `Nested extension '${sliceName}' has value type '${typeName}' but only allows: ${allowedTypeNames}`,
        `${path}.${valueKey}`
      )
    );
  }

  return issues;
}

/**
 * Check if an extension URL matches a slice element
 */
function matchesSliceUrl(url: string, sliceElement: ElementDefinition, elements?: ElementDefinition[]): boolean {
  // Check for fixed URL on the slice element itself
  if ((sliceElement as any).fixedUri === url) {
    return true;
  }

  // Check for pattern URL
  if (sliceElement.pattern?.url === url) {
    return true;
  }

  // Check if the slice name matches the URL directly
  // For nested extensions, the URL is often just the slice name (e.g., "tutId")
  if (sliceElement.sliceName === url) {
    return true;
  }

  // Look for fixedUri in the child .url element if elements are provided
  // e.g., Extension.extension:tutId.url has fixedUri: "tutId"
  if (elements && sliceElement.sliceName) {
    const urlElementId = `Extension.extension:${sliceElement.sliceName}.url`;
    const urlElement = elements.find(e => e.id === urlElementId);
    if (urlElement && (urlElement as any).fixedUri === url) {
      return true;
    }
  }

  // Also check if the slice name matches the URL's last segment (for full URLs)
  const urlParts = url.split('/');
  const lastSegment = urlParts[urlParts.length - 1];
  if (sliceElement.sliceName === lastSegment) {
    return true;
  }

  return false;
}

/**
 * Create an OperationOutcomeIssue
 */
function createIssue(
  severity: IssueSeverity,
  code: 'required' | 'value' | 'structure' | 'not-found' | 'invalid',
  message: string,
  path: string
): OperationOutcomeIssue {
  return {
    severity,
    code,
    diagnostics: message,
    expression: [path],
  };
}
