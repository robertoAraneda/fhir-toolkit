import { CqlCode } from '../types/complex.js';
import type { TerminologyProvider } from './terminology.js';

interface CodeEntry {
  system: string;
  code: string;
  display?: string;
  version?: string;
}

interface InMemoryTerminologyProviderOptions {
  valueSets?: Record<string, CodeEntry[]>;
  codeSystems?: Record<string, CodeEntry[]>;
}

export class InMemoryTerminologyProvider implements TerminologyProvider {
  private readonly valueSets: Map<string, CqlCode[]>;
  private readonly codeSystems: Map<string, CqlCode[]>;

  constructor(options: InMemoryTerminologyProviderOptions = {}) {
    this.valueSets = new Map();
    this.codeSystems = new Map();

    for (const [url, entries] of Object.entries(options.valueSets ?? {})) {
      this.valueSets.set(url, entries.map((e) => new CqlCode(e.code, e.system, e.display, e.version)));
    }

    for (const [url, entries] of Object.entries(options.codeSystems ?? {})) {
      this.codeSystems.set(url, entries.map((e) => new CqlCode(e.code, e.system, e.display, e.version)));
    }
  }

  async inValueSet(code: CqlCode, valueSetUrl: string): Promise<boolean> {
    const codes = this.valueSets.get(valueSetUrl);
    if (!codes) return false;
    return codes.some((c) => c.equals(code));
  }

  async inCodeSystem(code: CqlCode, codeSystemUrl: string): Promise<boolean> {
    const codes = this.codeSystems.get(codeSystemUrl);
    if (!codes) return false;
    return codes.some((c) => c.equals(code));
  }

  async expand(valueSetUrl: string): Promise<CqlCode[]> {
    return this.valueSets.get(valueSetUrl) ?? [];
  }
}
