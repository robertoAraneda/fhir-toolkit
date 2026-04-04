import type { CqlCode } from '../types/index.js';

export interface TerminologyProvider {
  inValueSet(code: CqlCode, valueSetUrl: string): Promise<boolean>;
  inCodeSystem(code: CqlCode, codeSystemUrl: string): Promise<boolean>;
  expand(valueSetUrl: string): Promise<CqlCode[]>;
}
