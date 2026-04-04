/**
 * CQL list functions.
 *
 * Ported from Go: funcs/list_advanced.go
 */

import { Decimal } from 'decimal.js';
import type { CqlValue } from '../types/index.js';
import {
  CqlBoolean,
  CqlDecimal,
  CqlInteger,
} from '../types/index.js';
import { CqlList } from '../types/index.js';
import { asInteger, asList, numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

export function registerListFunctions(registry: FunctionRegistry): void {
  // Flatten(list) -> list
  registry.register('Flatten', (args) => {
    const list = asList(args[0]);
    if (list === null) return null;
    const result: CqlValue[] = [];
    for (const item of list) {
      if (item instanceof CqlList) {
        result.push(...item.values);
      } else if (item !== null) {
        result.push(item);
      }
    }
    return new CqlList(result);
  });

  // Distinct(list) -> list
  registry.register('Distinct', (args) => {
    const list = asList(args[0]);
    if (list === null) return null;
    if (list.length <= 1) return new CqlList(list);
    const seen = new Map<string, CqlValue>();
    const result: CqlValue[] = [];
    for (const item of list) {
      if (item === null) continue;
      const key = item.type + ':' + item.toString();
      if (!seen.has(key)) {
        seen.set(key, item);
        result.push(item);
      }
    }
    return new CqlList(result);
  });

  // Mode(list) -> value
  registry.register('Mode', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length === 0) return null;
    const counts = new Map<string, { count: number; val: CqlValue }>();
    for (const item of list) {
      if (item === null) continue;
      const key = item.type + ':' + item.toString();
      const entry = counts.get(key);
      if (entry) {
        entry.count++;
      } else {
        counts.set(key, { count: 1, val: item });
      }
    }
    if (counts.size === 0) return null;
    let maxCount = 0;
    let maxVal: CqlValue | null = null;
    for (const { count, val } of counts.values()) {
      if (count > maxCount) {
        maxCount = count;
        maxVal = val;
      }
    }
    return maxVal;
  });

  // Median(list) -> decimal
  registry.register('Median', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length === 0) return null;
    const nums: Decimal[] = [];
    for (const item of list) {
      if (item === null) continue;
      if (item instanceof CqlInteger || item instanceof CqlDecimal) {
        nums.push(numericVal(item));
      }
    }
    if (nums.length === 0) return null;
    nums.sort((a, b) => a.comparedTo(b));
    const mid = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
      const avg = nums[mid - 1].plus(nums[mid]).div(2);
      return new CqlDecimal(avg);
    }
    return new CqlDecimal(nums[mid]);
  });

  // GeometricMean(list) -> decimal
  registry.register('GeometricMean', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length === 0) return null;
    let product = 1.0;
    let count = 0;
    for (const item of list) {
      if (item === null) continue;
      const n = numericVal(item).toNumber();
      if (n <= 0) return null;
      product *= n;
      count++;
    }
    if (count === 0) return null;
    const result = Math.pow(product, 1.0 / count);
    return CqlDecimal.of(result);
  });

  // First(list) -> value
  registry.register('First', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length === 0) return null;
    return list[0];
  });

  // Last(list) -> value
  registry.register('Last', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length === 0) return null;
    return list[list.length - 1];
  });

  // SingletonFrom(list) -> value
  registry.register('SingletonFrom', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length !== 1) return null;
    return list[0];
  });

  // Exists(list) -> boolean
  registry.register('Exists', (args) => {
    const list = asList(args[0]);
    if (list === null) return CqlBoolean.FALSE;
    return CqlBoolean.of(list.length > 0);
  });

  // Take(list, count) -> list
  registry.register('Take', (args) => {
    const list = asList(args[0]);
    const n = asInteger(args[1]);
    if (list === null) return null;
    if (n === null || n <= 0) return new CqlList([]);
    return new CqlList(list.slice(0, n));
  });

  // Skip(list, count) -> list
  registry.register('Skip', (args) => {
    const list = asList(args[0]);
    const n = asInteger(args[1]);
    if (list === null) return null;
    if (n === null || n <= 0) return new CqlList(list);
    return new CqlList(list.slice(n));
  });

  // Tail(list) -> list
  registry.register('Tail', (args) => {
    const list = asList(args[0]);
    if (list === null || list.length <= 1) return new CqlList([]);
    return new CqlList(list.slice(1));
  });
}
