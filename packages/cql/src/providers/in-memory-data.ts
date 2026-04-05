import type { CqlValue } from '../types/index.js';
import type { DataProvider } from './data.js';

interface FhirBundle {
  resourceType: 'Bundle'
  entry?: Array<{ resource?: Record<string, unknown> }>
}

export class InMemoryDataProvider implements DataProvider {
  private readonly resources: Record<string, unknown[]>

  constructor(bundle: FhirBundle) {
    this.resources = {}
    for (const entry of bundle.entry ?? []) {
      const resource = entry.resource
      if (!resource) continue
      const type = resource['resourceType'] as string
      if (!type) continue
      if (!this.resources[type]) {
        this.resources[type] = []
      }
      this.resources[type]!.push(resource)
    }
  }

  retrieve(
    resourceType: string,
    _codePath?: string,
    _codeComparator?: string,
    _codes?: CqlValue | null,
    _dateRange?: CqlValue | null,
  ): Promise<unknown[]> {
    return Promise.resolve(this.resources[resourceType] ?? [])
  }
}
