import type {
  IResource,
  IBundle,
  ICapabilityStatement,
  IParameters,
} from '@fhir-toolkit/r4-types';
import type {
  FhirClientOptions,
  SearchParams,
  HistoryParams,
  RequestOptions,
  JsonPatch,
  FhirResponse,
} from './types.js';
import { fhirFetch, fhirFetchResource } from './request.js';
import {
  normalizeBaseUrl,
  buildResourceUrl,
  encodeSearchParams,
  encodeHistoryParams,
  findBundleLink,
} from './utils.js';

/**
 * FHIR R4 REST Client.
 *
 * A type-safe, zero-dependency FHIR client that works in both browser and Node.js (18+).
 * Returns plain `@fhir-toolkit/r4-types` interfaces.
 *
 * @example
 * ```typescript
 * import { FhirClient } from '@fhir-toolkit/client';
 * import type { IPatient } from '@fhir-toolkit/r4-types';
 *
 * const client = new FhirClient({ baseUrl: 'https://hapi.fhir.org/baseR4' });
 * const patient = await client.read<IPatient>('Patient', '123');
 * ```
 */
export class FhirClient {
  private readonly options: FhirClientOptions;
  private readonly baseUrl: string;

  constructor(options: FhirClientOptions) {
    if (!options.baseUrl) {
      throw new Error('FhirClient requires a baseUrl');
    }
    this.options = { ...options };
    this.baseUrl = normalizeBaseUrl(options.baseUrl);
  }

  // ─── CRUD ──────────────────────────────────────────────────────────────

  async read<T extends IResource>(
    resourceType: string,
    id: string,
    options?: RequestOptions,
  ): Promise<T> {
    const url = buildResourceUrl(this.baseUrl, resourceType, id);
    return fhirFetchResource<T>(url, 'GET', this.options, options);
  }

  async vread<T extends IResource>(
    resourceType: string,
    id: string,
    versionId: string,
    options?: RequestOptions,
  ): Promise<T> {
    const url = buildResourceUrl(this.baseUrl, resourceType, id, versionId);
    return fhirFetchResource<T>(url, 'GET', this.options, options);
  }

  async readWithResponse<T extends IResource>(
    resourceType: string,
    id: string,
    options?: RequestOptions,
  ): Promise<FhirResponse<T>> {
    const url = buildResourceUrl(this.baseUrl, resourceType, id);
    return fhirFetch<T>(url, 'GET', this.options, options);
  }

  async create<T extends IResource>(
    resource: T,
    options?: RequestOptions,
  ): Promise<T> {
    const url = buildResourceUrl(this.baseUrl, resource.resourceType);
    return fhirFetchResource<T>(url, 'POST', this.options, options, resource);
  }

  async createWithResponse<T extends IResource>(
    resource: T,
    options?: RequestOptions,
  ): Promise<FhirResponse<T>> {
    const url = buildResourceUrl(this.baseUrl, resource.resourceType);
    return fhirFetch<T>(url, 'POST', this.options, options, resource);
  }

  async update<T extends IResource>(
    resource: T,
    options?: RequestOptions,
  ): Promise<T> {
    if (!resource.id) {
      throw new Error('Resource must have an id for update. Use create() for new resources.');
    }
    const url = buildResourceUrl(this.baseUrl, resource.resourceType, resource.id);
    return fhirFetchResource<T>(url, 'PUT', this.options, options, resource);
  }

  async updateWithResponse<T extends IResource>(
    resource: T,
    options?: RequestOptions,
  ): Promise<FhirResponse<T>> {
    if (!resource.id) {
      throw new Error('Resource must have an id for update. Use create() for new resources.');
    }
    const url = buildResourceUrl(this.baseUrl, resource.resourceType, resource.id);
    return fhirFetch<T>(url, 'PUT', this.options, options, resource);
  }

  async patch<T extends IResource>(
    resourceType: string,
    id: string,
    patches: JsonPatch[],
    options?: RequestOptions,
  ): Promise<T> {
    const url = buildResourceUrl(this.baseUrl, resourceType, id);
    return fhirFetchResource<T>(url, 'PATCH', this.options, options, patches);
  }

  async delete(
    resourceType: string,
    id: string,
    options?: RequestOptions,
  ): Promise<void> {
    const url = buildResourceUrl(this.baseUrl, resourceType, id);
    await fhirFetchResource<void>(url, 'DELETE', this.options, options);
  }

  // ─── Search ────────────────────────────────────────────────────────────

  async search(
    resourceType: string,
    params?: SearchParams,
    options?: RequestOptions,
  ): Promise<IBundle> {
    let url = buildResourceUrl(this.baseUrl, resourceType);
    if (params && Object.keys(params).length > 0) {
      url += `?${encodeSearchParams(params)}`;
    }
    return fhirFetchResource<IBundle>(url, 'GET', this.options, options);
  }

  async searchPost(
    resourceType: string,
    params?: SearchParams,
    options?: RequestOptions,
  ): Promise<IBundle> {
    const url = `${buildResourceUrl(this.baseUrl, resourceType)}/_search`;
    const body = params ? encodeSearchParams(params) : '';
    const mergedOptions: RequestOptions = {
      ...options,
      headers: {
        ...options?.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    return fhirFetchResource<IBundle>(url, 'POST', this.options, mergedOptions, body);
  }

  async nextPage(bundle: IBundle): Promise<IBundle | null> {
    const nextUrl = findBundleLink(bundle, 'next');
    if (!nextUrl) return null;
    return fhirFetchResource<IBundle>(nextUrl, 'GET', this.options);
  }

  async prevPage(bundle: IBundle): Promise<IBundle | null> {
    const prevUrl = findBundleLink(bundle, 'previous');
    if (!prevUrl) return null;
    return fhirFetchResource<IBundle>(prevUrl, 'GET', this.options);
  }

  async *allPages(firstBundle: IBundle): AsyncGenerator<IBundle, void, undefined> {
    let current: IBundle | null = firstBundle;
    while (current) {
      yield current;
      current = await this.nextPage(current);
    }
  }

  // ─── Operations ────────────────────────────────────────────────────────

  /**
   * Execute a FHIR operation (e.g., `$validate`, `$everything`, `$expand`).
   *
   * The `body` parameter accepts either a `Parameters` resource or any FHIR resource directly.
   * Some operations like `$validate` accept the resource directly in the body
   * (e.g., `POST /Patient/$validate` with a Patient resource), while others
   * require a `Parameters` wrapper.
   *
   * When using GET with a `Parameters` body, the parameters are converted to query string params.
   * When using GET with a non-Parameters resource, the body is ignored.
   *
   * @example
   * ```typescript
   * // $validate with resource directly in body
   * const outcome = await client.operation<IOperationOutcome>('Patient', '$validate', patient);
   *
   * // $validate with Parameters wrapper
   * const params: IParameters = {
   *   resourceType: 'Parameters',
   *   parameter: [{ name: 'resource', resource: patient }],
   * };
   * const outcome = await client.operation<IOperationOutcome>('Patient', '$validate', params);
   *
   * // $everything
   * const bundle = await client.operation<IBundle>('Patient/123', '$everything');
   * ```
   */
  async operation<T = IParameters>(
    scope: string,
    name: string,
    body?: IParameters | IResource,
    method: 'GET' | 'POST' = 'POST',
    options?: RequestOptions,
  ): Promise<T> {
    const operationName = name.startsWith('$') ? name : `$${name}`;
    const url = scope
      ? `${this.baseUrl}/${scope}/${operationName}`
      : `${this.baseUrl}/${operationName}`;

    if (method === 'GET') {
      // Extract query params only from Parameters resources
      if (body && 'resourceType' in body && body.resourceType === 'Parameters') {
        const asParams = body as IParameters;
        if (asParams.parameter && asParams.parameter.length > 0) {
          const queryParts: string[] = [];
          for (const p of asParams.parameter) {
            const value =
              p.valueString ??
              p.valueInteger?.toString() ??
              p.valueBoolean?.toString() ??
              p.valueCode ??
              '';
            if (p.name && value) {
              queryParts.push(`${encodeURIComponent(p.name)}=${encodeURIComponent(value)}`);
            }
          }
          if (queryParts.length > 0) {
            return fhirFetchResource<T>(`${url}?${queryParts.join('&')}`, 'GET', this.options, options);
          }
        }
      }
      return fhirFetchResource<T>(url, 'GET', this.options, options);
    }

    return fhirFetchResource<T>(url, 'POST', this.options, options, body);
  }

  // ─── Whole System ──────────────────────────────────────────────────────

  async capabilities(options?: RequestOptions): Promise<ICapabilityStatement> {
    const url = `${this.baseUrl}/metadata`;
    return fhirFetchResource<ICapabilityStatement>(url, 'GET', this.options, options);
  }

  async transaction(bundle: IBundle, options?: RequestOptions): Promise<IBundle> {
    return fhirFetchResource<IBundle>(this.baseUrl, 'POST', this.options, options, bundle);
  }

  async batch(bundle: IBundle, options?: RequestOptions): Promise<IBundle> {
    return fhirFetchResource<IBundle>(this.baseUrl, 'POST', this.options, options, bundle);
  }

  async history(
    resourceType?: string,
    id?: string,
    params?: HistoryParams,
    options?: RequestOptions,
  ): Promise<IBundle> {
    let url: string;
    if (resourceType && id) {
      url = `${this.baseUrl}/${resourceType}/${id}/_history`;
    } else if (resourceType) {
      url = `${this.baseUrl}/${resourceType}/_history`;
    } else {
      url = `${this.baseUrl}/_history`;
    }

    if (params) {
      const queryString = encodeHistoryParams(params);
      if (queryString) {
        url += `?${queryString}`;
      }
    }

    return fhirFetchResource<IBundle>(url, 'GET', this.options, options);
  }

  // ─── Auth ──────────────────────────────────────────────────────────────

  setAuthToken(token: string): void {
    this.options.auth = { type: 'bearer', token };
  }

  setAuthHeader(header: string): void {
    this.options.auth = { type: 'header', value: header };
  }

  clearAuth(): void {
    this.options.auth = undefined;
  }
}
