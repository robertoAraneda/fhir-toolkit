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
  CqlLong,
  CqlQuantity,
  CqlNull,
} from '../types/index.js';
import { CqlList } from '../types/index.js';
import { asList, numericVal } from './helpers.js';
import type { FunctionRegistry } from './registry.js';

/** Safely extract list values from the first argument. */
function listArg(args: (CqlValue | null)[]): CqlValue[] | null {
  return asList(args[0]);
}

/** Filter out null and CqlNull values from a list. */
function filterNulls(list: CqlValue[]): CqlValue[] {
  return list.filter(v => v !== null && !(v instanceof CqlNull));
}

export function registerAggregateFunctions(registry: FunctionRegistry): void {
  // Count(list) -> integer
  // CQL spec: Count excludes null values
  registry.register('Count', (args) => {
    const list = listArg(args);
    if (list === null) return new CqlInteger(0);
    return new CqlInteger(filterNulls(list).length);
  });

  // Sum(list) -> decimal|integer|long|quantity
  // CQL spec: Sum excludes nulls and preserves type
  registry.register('Sum', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length === 0) return null;

    // Quantity sum
    if (nonNull[0] instanceof CqlQuantity) {
      let sum = new Decimal(0);
      const unit = (nonNull[0] as CqlQuantity).unit;
      for (const item of nonNull) {
        if (item instanceof CqlQuantity) {
          sum = sum.plus(item.value);
        }
      }
      return new CqlQuantity(sum, unit);
    }

    // Long sum
    if (nonNull[0] instanceof CqlLong) {
      let sum = 0n;
      for (const item of nonNull) {
        if (item instanceof CqlLong) sum += item.value;
        else if (item instanceof CqlInteger) sum += BigInt(item.value);
      }
      return new CqlLong(sum);
    }

    // Integer sum
    if (nonNull.every(v => v instanceof CqlInteger)) {
      let sum = 0;
      for (const item of nonNull) {
        sum += (item as CqlInteger).value;
      }
      return new CqlInteger(sum);
    }

    // Default: Decimal sum
    let sum = new Decimal(0);
    for (const item of nonNull) {
      sum = sum.plus(numericVal(item));
    }
    return new CqlDecimal(sum);
  });

  // Avg(list) -> decimal
  registry.register('Avg', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length === 0) return null;
    let sum = new Decimal(0);
    for (const item of nonNull) {
      sum = sum.plus(numericVal(item));
    }
    return new CqlDecimal(sum.div(nonNull.length));
  });

  // Min(list) -> value
  // CQL spec: Min ignores null values
  registry.register('Min', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const isNullish = (v: CqlValue | null) => v === null || v instanceof CqlNull;
    let result: CqlValue | null = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (isNullish(item)) continue;
      if (isNullish(result)) { result = item; continue; }
      try {
        const cmp = (result as CqlComparable).compareTo(item);
        if (cmp > 0) result = item;
      } catch {
        // incomparable types — skip
      }
    }
    return isNullish(result) ? null : result;
  });

  // Max(list) -> value
  // CQL spec: Max ignores null values
  registry.register('Max', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const isNullish = (v: CqlValue | null) => v === null || v instanceof CqlNull;
    let result: CqlValue | null = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (isNullish(item)) continue;
      if (isNullish(result)) { result = item; continue; }
      try {
        const cmp = (result as CqlComparable).compareTo(item);
        if (cmp < 0) result = item;
      } catch {
        // incomparable types — skip
      }
    }
    return isNullish(result) ? null : result;
  });

  // AllTrue(list) -> boolean
  // CQL spec: AllTrue ignores null values
  registry.register('AllTrue', (args) => {
    const list = listArg(args);
    if (list === null) return CqlBoolean.TRUE;
    for (const item of list) {
      if (item === null || item instanceof CqlNull) continue; // skip nulls
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
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of nonNull) sum = sum.plus(numericVal(item));
    const mean = sum.div(nonNull.length);
    let sumSq = new Decimal(0);
    for (const item of nonNull) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    return new CqlDecimal(sumSq.div(nonNull.length));
  });

  // PopulationStdDev(list) -> decimal
  registry.register('PopulationStdDev', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of nonNull) sum = sum.plus(numericVal(item));
    const mean = sum.div(nonNull.length);
    let sumSq = new Decimal(0);
    for (const item of nonNull) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    const variance = sumSq.div(nonNull.length);
    return new CqlDecimal(variance.sqrt());
  });

  // Variance(list) -> decimal (sample variance)
  registry.register('Variance', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of nonNull) sum = sum.plus(numericVal(item));
    const mean = sum.div(nonNull.length);
    let sumSq = new Decimal(0);
    for (const item of nonNull) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    return new CqlDecimal(sumSq.div(nonNull.length - 1));
  });

  // StdDev(list) -> decimal (sample standard deviation)
  registry.register('StdDev', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length < 2) return null;
    let sum = new Decimal(0);
    for (const item of nonNull) sum = sum.plus(numericVal(item));
    const mean = sum.div(nonNull.length);
    let sumSq = new Decimal(0);
    for (const item of nonNull) {
      const diff = numericVal(item).minus(mean);
      sumSq = sumSq.plus(diff.mul(diff));
    }
    const variance = sumSq.div(nonNull.length - 1);
    return new CqlDecimal(variance.sqrt());
  });

  // Product(list) -> integer|long|decimal|quantity
  // CQL spec: Product excludes nulls and preserves type
  registry.register('Product', (args) => {
    const list = listArg(args);
    if (list === null || list.length === 0) return null;
    const nonNull = filterNulls(list);
    if (nonNull.length === 0) return null;

    // Long product
    if (nonNull[0] instanceof CqlLong) {
      let product = 1n;
      for (const item of nonNull) {
        if (item instanceof CqlLong) product *= item.value;
        else if (item instanceof CqlInteger) product *= BigInt(item.value);
      }
      return new CqlLong(product);
    }

    // Integer product
    if (nonNull.every(v => v instanceof CqlInteger)) {
      let product = 1;
      for (const item of nonNull) {
        product *= (item as CqlInteger).value;
      }
      return new CqlInteger(product);
    }

    // Quantity product
    if (nonNull[0] instanceof CqlQuantity) {
      let product = new Decimal(1);
      const unit = (nonNull[0] as CqlQuantity).unit;
      for (const item of nonNull) {
        if (item instanceof CqlQuantity) product = product.times(item.value);
      }
      return new CqlQuantity(product, unit);
    }

    // Default: Decimal product
    let product = new Decimal(1);
    for (const item of nonNull) {
      product = product.times(numericVal(item));
    }
    return new CqlDecimal(product);
  });
}
