import type { CqlValue } from '../types/index.js';

export interface DataProvider {
  retrieve(
    resourceType: string,
    codePath?: string,
    codeComparator?: string,
    codes?: CqlValue | null,
    dateRange?: CqlValue | null,
  ): Promise<unknown[]>;
}
