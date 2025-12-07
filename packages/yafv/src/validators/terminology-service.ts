/**
 * Terminology Service Client
 *
 * Client for external FHIR terminology servers (e.g., tx.fhir.org)
 * Used for validating codes against ValueSets that require expansion
 * (SNOMED CT, LOINC, etc.)
 */

import { LRUCache } from 'lru-cache';

export interface TerminologyServiceOptions {
  /** Base URL of the terminology server (e.g., https://tx.fhir.org/r4) */
  baseUrl: string;
  /** Timeout in milliseconds (default: 10000) */
  timeout?: number;
  /** Cache TTL in milliseconds (default: 3600000 = 1 hour) */
  cacheTTL?: number;
  /** Maximum cache size (default: 1000) */
  cacheSize?: number;
}

export interface ValidateCodeParams {
  /** The code to validate */
  code: string;
  /** The code system URL */
  system?: string;
  /** The ValueSet URL to validate against */
  valueSetUrl: string;
  /** Display text (optional, for validation) */
  display?: string;
}

export interface ValidateCodeResult {
  /** Whether the code is valid */
  result: boolean;
  /** Human-readable message */
  message?: string;
  /** Display text from the terminology server */
  display?: string;
  /** Whether validation was performed (false if server unreachable) */
  validated: boolean;
}

/**
 * Client for external FHIR terminology servers
 */
export class TerminologyService {
  private baseUrl: string;
  private timeout: number;
  private cache: LRUCache<string, ValidateCodeResult>;

  constructor(options: TerminologyServiceOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.timeout = options.timeout || 10000;

    this.cache = new LRUCache<string, ValidateCodeResult>({
      max: options.cacheSize || 1000,
      ttl: options.cacheTTL || 3600000, // 1 hour default
    });
  }

  /**
   * Validate a code against a ValueSet using the $validate-code operation
   */
  async validateCode(params: ValidateCodeParams): Promise<ValidateCodeResult> {
    const cacheKey = this.getCacheKey(params);

    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    try {
      const result = await this.callValidateCode(params);

      // Cache the result
      this.cache.set(cacheKey, result);

      return result;
    } catch (error) {
      // Return unvalidated result on error
      return {
        result: true, // Assume valid when server is unreachable
        message: `Terminology server error: ${(error as Error).message}`,
        validated: false,
      };
    }
  }

  /**
   * Call the $validate-code operation on the terminology server
   */
  private async callValidateCode(params: ValidateCodeParams): Promise<ValidateCodeResult> {
    // Build the URL for $validate-code
    const url = new URL(`${this.baseUrl}/ValueSet/$validate-code`);

    // Add query parameters
    url.searchParams.set('url', params.valueSetUrl);
    url.searchParams.set('code', params.code);

    if (params.system) {
      url.searchParams.set('system', params.system);
    }

    if (params.display) {
      url.searchParams.set('display', params.display);
    }

    // Make the request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/fhir+json',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const parameters = await response.json();

      // Parse the Parameters response
      return this.parseValidateCodeResponse(parameters);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Parse the Parameters response from $validate-code
   */
  private parseValidateCodeResponse(parameters: any): ValidateCodeResult {
    if (parameters.resourceType !== 'Parameters') {
      throw new Error('Invalid response: expected Parameters resource');
    }

    let result = false;
    let message: string | undefined;
    let display: string | undefined;

    for (const param of parameters.parameter || []) {
      switch (param.name) {
        case 'result':
          result = param.valueBoolean === true;
          break;
        case 'message':
          message = param.valueString;
          break;
        case 'display':
          display = param.valueString;
          break;
      }
    }

    return {
      result,
      message,
      display,
      validated: true,
    };
  }

  /**
   * Generate a cache key for a validation request
   */
  private getCacheKey(params: ValidateCodeParams): string {
    return `${params.valueSetUrl}|${params.system || ''}|${params.code}`;
  }

  /**
   * Clear the cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; maxSize: number } {
    return {
      size: this.cache.size,
      maxSize: this.cache.max,
    };
  }
}

/**
 * Check if a system requires external terminology validation
 * These are large code systems that we don't bundle locally
 */
export function requiresExternalValidation(system: string): boolean {
  const externalSystems = [
    'http://snomed.info/sct',
    'http://loinc.org',
    'http://www.nlm.nih.gov/research/umls/rxnorm',
    'http://hl7.org/fhir/sid/icd-10',
    'http://hl7.org/fhir/sid/icd-10-cm',
    'http://hl7.org/fhir/sid/icd-9-cm',
    'http://www.ama-assn.org/go/cpt',
    'http://www.whocc.no/atc',
    'http://unitsofmeasure.org',
    'urn:ietf:bcp:47', // Language codes
    'urn:iso:std:iso:3166', // Country codes
    'urn:iso:std:iso:4217', // Currency codes
  ];

  return externalSystems.some(ext => system.startsWith(ext));
}
