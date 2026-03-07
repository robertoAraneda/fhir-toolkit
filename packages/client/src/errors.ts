import type { IOperationOutcome } from '@fhir-toolkit/r4-types';

/**
 * Error class for FHIR client HTTP errors.
 *
 * Extends the standard Error with HTTP status information
 * and an optional FHIR OperationOutcome parsed from the response body.
 *
 * @example
 * ```typescript
 * try {
 *   await client.read<IPatient>('Patient', '123');
 * } catch (error) {
 *   if (error instanceof FhirClientError) {
 *     console.log(error.status); // 404
 *     console.log(error.operationOutcome?.issue);
 *   }
 * }
 * ```
 */
export class FhirClientError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly url: string;
  readonly method: string;
  readonly operationOutcome?: IOperationOutcome;

  constructor(options: {
    message: string;
    status: number;
    statusText: string;
    url: string;
    method: string;
    operationOutcome?: IOperationOutcome;
  }) {
    super(options.message);
    this.name = 'FhirClientError';
    this.status = options.status;
    this.statusText = options.statusText;
    this.url = options.url;
    this.method = options.method;
    this.operationOutcome = options.operationOutcome;
  }
}

/**
 * Error thrown when a request times out.
 */
export class FhirTimeoutError extends Error {
  readonly url: string;
  readonly method: string;
  readonly timeoutMs: number;

  constructor(url: string, method: string, timeoutMs: number) {
    super(`Request timed out after ${timeoutMs}ms: ${method} ${url}`);
    this.name = 'FhirTimeoutError';
    this.url = url;
    this.method = method;
    this.timeoutMs = timeoutMs;
  }
}
