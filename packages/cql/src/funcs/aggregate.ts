/**
 * CQL aggregate functions.
 *
 * Ported from Go: funcs/aggregate.go
 */

import { Decimal } from 'decimal.js';
import type { CqlComparable, CqlValue } from '../types/index.js';
import {
  CqlBoolean,
  CqlDecimal,
  CqlInteger,
} from '../types/index.js';
import { CqlList } from '../types/index.js';
import { asList, numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

/** Safely extract list values from the first argument. */
function listArg(args: (CqlValue | null)[]): CqlValue[] | null {
  return asList(args[0]);
}

export function registerAggregateFunctions(registry: FunctionRegistry): void {
  // Count(list) -> integer
  registry.register('Count', (args) => {
    const list = listArg(args);
    if (list === null) return new CqlInteger(0);
    return new CqlInteger(list.length);
  });

  // Sum(list) -> decimal|integer
  registry.register('Sum', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    let sum = new Decimal(0);
    for (const item of list) {
      sum = sum.plus(numericVal(item));
    }
    return new CqlDecimal(sum);
  });

  // Avg(list) -> decimal
  registry.register('Avg', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    let sum = new Decimal(0);
    for (const item of list) {
      sum = sum.plus(numericVal(item));
    }
    return new CqlDecimal(sum.div(list.length));
  });

  // Min(list) -> value
  registry.register('Min', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (result === null || item === null) continue;
      try {
        const cmp = (result as CqlComparable).compareTo(item);
        if (cmp > 0) result = item;
      } catch {
        // incomparable types — skip
      }
    }
    return result;
  });

  // Max(list) -> value
  registry.register('Max', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (result === null || item === null) continue;
      try {
        const cmp = (result as CqlComparable).compareTo(item);
        if (cmp < 0) result = item;
      } catch {
        // incomparable types — skip
      }
    }
    return result;
  });

  // AllTrue(list) -> boolean
  registry.register('AllTrue', (args) => {
    const list = listArg(args);
    if (list === null) return CqlBoolean.TRUE;
    for (const item of list) {
      if (!(item instanceof CqlBoolean) || !item.value) {
        return CqlBoolean.FALSE;
      }
    }
    return CqlBoolean.TRUE;
  });

  // AnyTrue(list) -> boolean
  registry.register('AnyTrue', (args) => {
    const list = listArg(args);
    if (list === null) return CqlBoolean.FALSE;
    for (const item of list) {
      if (item instanceof CqlBoolean && item.value) {
        return CqlBoolean.TRUE;
      }
    }
    return CqlBoolean.FALSE;
  });

  // PopulationVariance(list) -> decimal
  registry.register('PopulationVariance', (args) => {
    const list = listArg(args);
    if (list === null || list.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of list) sum = sum.plus(numericVal(item));
    const mean = sum.div(list.length);
    let sumSq = new Decimal(0);
    for (const item of list) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    return new CqlDecimal(sumSq.div(list.length));
  });

  // PopulationStdDev(list) -> decimal
  registry.register('PopulationStdDev', (args) => {
    const list = listArg(args);
    if (list === null || list.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of list) sum = sum.plus(numericVal(item));
    const mean = sum.div(list.length);
    let sumSq = new Decimal(0);
    for (const item of list) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    const variance = sumSq.div(list.length);
    return new CqlDecimal(variance.sqrt());
  });

  // Variance(list) -> decimal (sample variance)
  registry.register('Variance', (args) => {
    const list = listArg(args);
    if (list === null || list.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of list) sum = sum.plus(numericVal(item));
    const mean = sum.div(list.length);
    let sumSq = new Decimal(0);
    for (const item of list) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    return new CqlDecimal(sumSq.div(list.length - 1));
  });

  // StdDev(list) -> decimal (sample standard deviation)
  registry.register('StdDev', (args) => {
    const list = listArg(args);
    if (list === null || list.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of list) sum = sum.plus(numericVal(item));
    const mean = sum.div(list.length);
    let sumSq = new Decimal(0);
    for (const item of list) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    const variance = sumSq.div(list.length - 1);
    return new CqlDecimal(variance.sqrt());
  });
}
