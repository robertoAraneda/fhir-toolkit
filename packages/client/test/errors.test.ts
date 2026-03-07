import { describe, it, expect } from 'vitest';
import type { IOperationOutcome } from '@fhir-toolkit/r4-types';
import { FhirClientError, FhirTimeoutError } from '../src/errors.js';

describe('FhirClientError', () => {
  it('creates error with all properties', () => {
    const oo: IOperationOutcome = {
      resourceType: 'OperationOutcome',
      issue: [{ severity: 'error', code: 'not-found' }],
    };

    const error = new FhirClientError({
      message: 'Not found',
      status: 404,
      statusText: 'Not Found',
      url: 'https://server.com/fhir/Patient/999',
      method: 'GET',
      operationOutcome: oo,
    });

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(FhirClientError);
    expect(error.name).toBe('FhirClientError');
    expect(error.message).toBe('Not found');
    expect(error.status).toBe(404);
    expect(error.statusText).toBe('Not Found');
    expect(error.url).toBe('https://server.com/fhir/Patient/999');
    expect(error.method).toBe('GET');
    expect(error.operationOutcome).toBe(oo);
  });

  it('creates error without operationOutcome', () => {
    const error = new FhirClientError({
      message: 'Server error',
      status: 500,
      statusText: 'Internal Server Error',
      url: 'https://server.com/fhir/Patient',
      method: 'POST',
    });

    expect(error.operationOutcome).toBeUndefined();
  });

  it('has a stack trace', () => {
    const error = new FhirClientError({
      message: 'test',
      status: 400,
      statusText: 'Bad Request',
      url: 'https://server.com/fhir/Patient',
      method: 'GET',
    });

    expect(error.stack).toBeDefined();
  });
});

describe('FhirTimeoutError', () => {
  it('creates error with correct message', () => {
    const error = new FhirTimeoutError('https://server.com/fhir/Patient', 'GET', 5000);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(FhirTimeoutError);
    expect(error.name).toBe('FhirTimeoutError');
    expect(error.message).toBe('Request timed out after 5000ms: GET https://server.com/fhir/Patient');
    expect(error.url).toBe('https://server.com/fhir/Patient');
    expect(error.method).toBe('GET');
    expect(error.timeoutMs).toBe(5000);
  });
});
