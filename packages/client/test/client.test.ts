import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { IPatient, IBundle, IOperationOutcome, ICapabilityStatement } from '@fhir-toolkit/r4-types';
import { FhirClient, FhirClientError, extractResources } from '../src/index.js';
import { createMockFetch, type MockResponse } from './helpers/mock-fetch.js';

const BASE_URL = 'https://server.com/fhir';

function setupFetch(handler: (url: string, init?: RequestInit) => MockResponse): void {
  vi.stubGlobal('fetch', createMockFetch(handler));
}

describe('FhirClient', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('constructor', () => {
    it('throws if baseUrl is empty', () => {
      expect(() => new FhirClient({ baseUrl: '' })).toThrow('FhirClient requires a baseUrl');
    });

    it('creates client with valid baseUrl', () => {
      const client = new FhirClient({ baseUrl: BASE_URL });
      expect(client).toBeDefined();
    });
  });

  describe('read', () => {
    it('fetches a resource by type and id', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123', active: true };
      setupFetch(() => ({ status: 200, body: patient }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const result = await client.read<IPatient>('Patient', '123');

      expect(result.resourceType).toBe('Patient');
      expect(result.id).toBe('123');
      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123',
        expect.objectContaining({ method: 'GET' }),
      );
    });

    it('throws FhirClientError on 404', async () => {
      const oo: IOperationOutcome = {
        resourceType: 'OperationOutcome',
        issue: [{ severity: 'error', code: 'not-found' }],
      };
      setupFetch(() => ({ status: 404, body: oo }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await expect(client.read<IPatient>('Patient', '999')).rejects.toThrow(FhirClientError);

      try {
        await client.read<IPatient>('Patient', '999');
      } catch (e) {
        const error = e as FhirClientError;
        expect(error.status).toBe(404);
        expect(error.operationOutcome?.resourceType).toBe('OperationOutcome');
      }
    });
  });

  describe('vread', () => {
    it('fetches a specific version', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123' };
      setupFetch(() => ({ status: 200, body: patient }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.vread<IPatient>('Patient', '123', '2');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123/_history/2',
        expect.objectContaining({ method: 'GET' }),
      );
    });
  });

  describe('readWithResponse', () => {
    it('returns full response with ETag', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123' };
      setupFetch(() => ({ status: 200, body: patient, headers: { ETag: 'W/"2"' } }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const result = await client.readWithResponse<IPatient>('Patient', '123');

      expect(result.resource.resourceType).toBe('Patient');
      expect(result.status).toBe(200);
      expect(result.etag).toBe('W/"2"');
    });
  });

  describe('create', () => {
    it('creates a resource', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123' };
      setupFetch(() => ({
        status: 201,
        body: patient,
        headers: { Location: 'https://server.com/fhir/Patient/123/_history/1' },
      }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const result = await client.create<IPatient>({ resourceType: 'Patient', active: true });

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient',
        expect.objectContaining({ method: 'POST' }),
      );
      expect(result.resourceType).toBe('Patient');
    });
  });

  describe('update', () => {
    it('updates a resource', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123', active: false };
      setupFetch(() => ({ status: 200, body: patient }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.update<IPatient>({ resourceType: 'Patient', id: '123', active: false });

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123',
        expect.objectContaining({ method: 'PUT' }),
      );
    });

    it('throws if resource has no id', async () => {
      const client = new FhirClient({ baseUrl: BASE_URL });
      await expect(
        client.update<IPatient>({ resourceType: 'Patient', active: true }),
      ).rejects.toThrow('Resource must have an id');
    });
  });

  describe('patch', () => {
    it('patches a resource with JSON Patch', async () => {
      const patient: IPatient = { resourceType: 'Patient', id: '123', active: false };
      setupFetch((_url, init) => {
        expect(init?.method).toBe('PATCH');
        const headers = init?.headers as Record<string, string>;
        expect(headers['Content-Type']).toBe('application/json-patch+json');
        return { status: 200, body: patient };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.patch('Patient', '123', [
        { op: 'replace', path: '/active', value: false },
      ]);
    });
  });

  describe('delete', () => {
    it('deletes a resource', async () => {
      setupFetch(() => ({ status: 204 }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.delete('Patient', '123');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123',
        expect.objectContaining({ method: 'DELETE' }),
      );
    });
  });

  describe('search', () => {
    it('searches with query params', async () => {
      const bundle: IBundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        total: 1,
        entry: [{ resource: { resourceType: 'Patient', id: '1' } }],
      };
      setupFetch(() => ({ status: 200, body: bundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const result = await client.search('Patient', { name: 'Smith', _count: 20 });

      expect(result.type).toBe('searchset');
      expect(result.total).toBe(1);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('Patient?'),
        expect.objectContaining({ method: 'GET' }),
      );
    });

    it('searches without params', async () => {
      const bundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };
      setupFetch(() => ({ status: 200, body: bundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.search('Patient');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient',
        expect.objectContaining({ method: 'GET' }),
      );
    });
  });

  describe('searchPost', () => {
    it('searches via POST with form-encoded body', async () => {
      const bundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };
      setupFetch((_url, init) => {
        expect(init?.method).toBe('POST');
        const headers = init?.headers as Record<string, string>;
        expect(headers['Content-Type']).toBe('application/x-www-form-urlencoded');
        return { status: 200, body: bundle };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.searchPost('Patient', { name: 'Smith' });

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/_search',
        expect.anything(),
      );
    });
  });

  describe('pagination', () => {
    it('nextPage follows next link', async () => {
      const page2: IBundle = { resourceType: 'Bundle', type: 'searchset', total: 0 };
      setupFetch(() => ({ status: 200, body: page2 }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const page1: IBundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        link: [{ relation: 'next', url: 'https://server.com/fhir/Patient?_page=2' }],
      };

      const result = await client.nextPage(page1);
      expect(result).not.toBeNull();
      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient?_page=2',
        expect.anything(),
      );
    });

    it('nextPage returns null when no next link', async () => {
      const client = new FhirClient({ baseUrl: BASE_URL });
      const bundle: IBundle = { resourceType: 'Bundle', type: 'searchset' };

      const result = await client.nextPage(bundle);
      expect(result).toBeNull();
    });

    it('prevPage follows previous link', async () => {
      const page0: IBundle = { resourceType: 'Bundle', type: 'searchset' };
      setupFetch(() => ({ status: 200, body: page0 }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const page1: IBundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        link: [{ relation: 'previous', url: 'https://server.com/fhir/Patient?_page=0' }],
      };

      const result = await client.prevPage(page1);
      expect(result).not.toBeNull();
    });

    it('allPages yields all pages', async () => {
      const page1: IBundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: [{ resource: { resourceType: 'Patient', id: '1' } }],
        link: [{ relation: 'next', url: 'https://server.com/fhir/Patient?_page=2' }],
      };
      const page2: IBundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: [{ resource: { resourceType: 'Patient', id: '2' } }],
      };

      let callCount = 0;
      setupFetch(() => {
        callCount++;
        return { status: 200, body: page2 };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      const pages: IBundle[] = [];
      for await (const page of client.allPages(page1)) {
        pages.push(page);
      }

      expect(pages).toHaveLength(2);
      expect(extractResources<IPatient>(pages[0]!)[0]!.id).toBe('1');
      expect(extractResources<IPatient>(pages[1]!)[0]!.id).toBe('2');
    });
  });

  describe('operation', () => {
    it('invokes POST operation with params', async () => {
      const result = { resourceType: 'Parameters', parameter: [] };
      setupFetch(() => ({ status: 200, body: result }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.operation('Patient', 'validate', {
        resourceType: 'Parameters',
        parameter: [{ name: 'resource', resource: { resourceType: 'Patient' } }],
      });

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/$validate',
        expect.objectContaining({ method: 'POST' }),
      );
    });

    it('invokes GET operation at system level', async () => {
      const result = { resourceType: 'Parameters', parameter: [] };
      setupFetch(() => ({ status: 200, body: result }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.operation('', 'meta', undefined, 'GET');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/$meta',
        expect.objectContaining({ method: 'GET' }),
      );
    });

    it('handles $ prefix in operation name', async () => {
      setupFetch(() => ({ status: 200, body: { resourceType: 'Bundle', type: 'searchset' } }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.operation('Patient/123', '$everything', undefined, 'GET');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123/$everything',
        expect.anything(),
      );
    });
  });

  describe('capabilities', () => {
    it('fetches CapabilityStatement from /metadata', async () => {
      const cs: ICapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2024-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
      };
      setupFetch(() => ({ status: 200, body: cs }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const result = await client.capabilities();

      expect(result.resourceType).toBe('CapabilityStatement');
      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/metadata',
        expect.objectContaining({ method: 'GET' }),
      );
    });
  });

  describe('transaction', () => {
    it('posts transaction bundle to base URL', async () => {
      const responseBundle: IBundle = { resourceType: 'Bundle', type: 'transaction-response' };
      setupFetch(() => ({ status: 200, body: responseBundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      const txBundle: IBundle = {
        resourceType: 'Bundle',
        type: 'transaction',
        entry: [
          {
            resource: { resourceType: 'Patient', id: '1' },
            request: { method: 'POST', url: 'Patient' },
          },
        ],
      };

      const result = await client.transaction(txBundle);
      expect(result.type).toBe('transaction-response');
      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir',
        expect.objectContaining({ method: 'POST' }),
      );
    });
  });

  describe('history', () => {
    it('fetches system-level history', async () => {
      const bundle: IBundle = { resourceType: 'Bundle', type: 'history' };
      setupFetch(() => ({ status: 200, body: bundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.history();

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/_history',
        expect.anything(),
      );
    });

    it('fetches type-level history', async () => {
      const bundle: IBundle = { resourceType: 'Bundle', type: 'history' };
      setupFetch(() => ({ status: 200, body: bundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.history('Patient');

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/_history',
        expect.anything(),
      );
    });

    it('fetches instance-level history with params', async () => {
      const bundle: IBundle = { resourceType: 'Bundle', type: 'history' };
      setupFetch(() => ({ status: 200, body: bundle }));

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.history('Patient', '123', { _count: 5 });

      expect(fetch).toHaveBeenCalledWith(
        'https://server.com/fhir/Patient/123/_history?_count=5',
        expect.anything(),
      );
    });
  });

  describe('auth', () => {
    it('sends Bearer token', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['Authorization']).toBe('Bearer my-token');
        return { status: 200, body: { resourceType: 'Patient', id: '1' } };
      });

      const client = new FhirClient({
        baseUrl: BASE_URL,
        auth: { type: 'bearer', token: 'my-token' },
      });
      await client.read<IPatient>('Patient', '1');
    });

    it('sends custom auth header', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['Authorization']).toBe('Basic dXNlcjpwYXNz');
        return { status: 200, body: { resourceType: 'Patient', id: '1' } };
      });

      const client = new FhirClient({
        baseUrl: BASE_URL,
        auth: { type: 'header', value: 'Basic dXNlcjpwYXNz' },
      });
      await client.read<IPatient>('Patient', '1');
    });

    it('setAuthToken changes auth mid-session', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['Authorization']).toBe('Bearer new-token');
        return { status: 200, body: { resourceType: 'Patient', id: '1' } };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      client.setAuthToken('new-token');
      await client.read<IPatient>('Patient', '1');
    });

    it('clearAuth removes auth', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['Authorization']).toBeUndefined();
        return { status: 200, body: { resourceType: 'Patient', id: '1' } };
      });

      const client = new FhirClient({
        baseUrl: BASE_URL,
        auth: { type: 'bearer', token: 'my-token' },
      });
      client.clearAuth();
      await client.read<IPatient>('Patient', '1');
    });
  });

  describe('interceptors', () => {
    it('onRequest interceptor can modify request', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['X-Custom']).toBe('intercepted');
        return { status: 200, body: { resourceType: 'Patient', id: '1' } };
      });

      const client = new FhirClient({
        baseUrl: BASE_URL,
        interceptors: {
          onRequest: (_url, init) => ({
            ...init,
            headers: { ...(init.headers as Record<string, string>), 'X-Custom': 'intercepted' },
          }),
        },
      });
      await client.read<IPatient>('Patient', '1');
    });

    it('onError interceptor is called on error', async () => {
      const onError = vi.fn();
      setupFetch(() => ({
        status: 500,
        body: { resourceType: 'OperationOutcome', issue: [{ severity: 'error', code: 'exception' }] },
      }));

      const client = new FhirClient({
        baseUrl: BASE_URL,
        interceptors: { onError },
      });

      await expect(client.read<IPatient>('Patient', '1')).rejects.toThrow(FhirClientError);
      expect(onError).toHaveBeenCalledOnce();
      expect(onError.mock.calls[0]![0]).toBeInstanceOf(FhirClientError);
    });
  });

  describe('conditional operations', () => {
    it('sends If-Match header on update', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['If-Match']).toBe('W/"2"');
        return { status: 200, body: { resourceType: 'Patient', id: '123' } };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.update<IPatient>(
        { resourceType: 'Patient', id: '123', active: true },
        { ifMatch: 'W/"2"' },
      );
    });

    it('sends If-None-Exist header on conditional create', async () => {
      setupFetch((_url, init) => {
        const headers = init?.headers as Record<string, string>;
        expect(headers['If-None-Exist']).toBe('identifier=http://example.org|12345');
        return { status: 201, body: { resourceType: 'Patient', id: '123' } };
      });

      const client = new FhirClient({ baseUrl: BASE_URL });
      await client.create<IPatient>(
        { resourceType: 'Patient', active: true },
        { ifNoneExist: 'identifier=http://example.org|12345' },
      );
    });
  });
});
