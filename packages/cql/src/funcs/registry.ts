import type { CqlValue } from '../types/index.js';
import type { EvalContext } from '../eval/context.js';

export type CqlFunction = (
  args: (CqlValue | null)[],
  ctx: EvalContext,
) => Promise<CqlValue | null> | CqlValue | null;

export class FunctionRegistry {
  private readonly fns = new Map<string, CqlFunction>();

  register(name: string, fn: CqlFunction): void {
    this.fns.set(name.toLowerCase(), fn);
  }

  resolve(name: string): CqlFunction | undefined {
    return this.fns.get(name.toLowerCase());
  }

  has(name: string): boolean {
    return this.fns.has(name.toLowerCase());
  }
}
