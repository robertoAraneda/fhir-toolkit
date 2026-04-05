import type { FunctionRegistry } from './registry.js';
import { registerAggregateFunctions } from './aggregate.js';
import { registerClinicalFunctions } from './clinical.js';
import { registerDateTimeFunctions } from './datetime.js';
import { registerIntervalFunctions } from './interval.js';
import { registerListFunctions } from './list.js';
import { registerMathFunctions } from './math.js';
import { registerStringFunctions } from './string.js';
import { registerTypeFunctions } from './type.js';

export function registerBuiltins(registry: FunctionRegistry): void {
  registerStringFunctions(registry);
  registerAggregateFunctions(registry);
  registerClinicalFunctions(registry);
  registerDateTimeFunctions(registry);
  registerIntervalFunctions(registry);
  registerListFunctions(registry);
  registerMathFunctions(registry);
  registerTypeFunctions(registry);
}
