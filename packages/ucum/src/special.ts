/** Handler for converting between a special unit and its canonical base. */
export interface SpecialHandler {
  code(): string;
  units(): string;
  toCanonical(value: number): number;
  fromCanonical(value: number): number;
}

/** Converts via canonical = value + offset (Celsius). */
class OffsetHandler implements SpecialHandler {
  constructor(
    private readonly unitCode: string,
    private readonly unitExpr: string,
    private readonly offset: number,
  ) {}

  code(): string {
    return this.unitCode;
  }
  units(): string {
    return this.unitExpr;
  }
  toCanonical(v: number): number {
    return v + this.offset;
  }
  fromCanonical(v: number): number {
    return v - this.offset;
  }
}

/** Converts via canonical = (value + offset) * scale (Fahrenheit, Reaumur). */
class AffineHandler implements SpecialHandler {
  constructor(
    private readonly unitCode: string,
    private readonly unitExpr: string,
    private readonly scale: number,
    private readonly offset: number,
  ) {}

  code(): string {
    return this.unitCode;
  }
  units(): string {
    return this.unitExpr;
  }
  toCanonical(v: number): number {
    return (v + this.offset) * this.scale;
  }
  fromCanonical(v: number): number {
    return v / this.scale - this.offset;
  }
}

/** Converts via canonical = base^(value*factor) or base^(-value*factor) if negate. */
class LogHandler implements SpecialHandler {
  private readonly effectiveFactor: number;

  constructor(
    private readonly unitCode: string,
    private readonly unitExpr: string,
    private readonly base: number,
    private readonly factor: number = 1,
    private readonly negate: boolean = false,
  ) {
    this.effectiveFactor = factor === 0 ? 1 : factor;
  }

  code(): string {
    return this.unitCode;
  }
  units(): string {
    return this.unitExpr;
  }
  toCanonical(v: number): number {
    if (this.negate) {
      return Math.pow(this.base, -v * this.effectiveFactor);
    }
    return Math.pow(this.base, v * this.effectiveFactor);
  }
  fromCanonical(v: number): number {
    if (this.negate) {
      return -Math.log(v) / (Math.log(this.base) * this.effectiveFactor);
    }
    return Math.log(v) / (Math.log(this.base) * this.effectiveFactor);
  }
}

/** Converts via canonical = arctan(value/factor) (prism diopter, percent slope). */
class TanHandler implements SpecialHandler {
  constructor(
    private readonly unitCode: string,
    private readonly unitExpr: string,
    private readonly factor: number,
  ) {}

  code(): string {
    return this.unitCode;
  }
  units(): string {
    return this.unitExpr;
  }
  toCanonical(v: number): number {
    return Math.atan(v / this.factor);
  }
  fromCanonical(v: number): number {
    return Math.tan(v) * this.factor;
  }
}

/** Converts via canonical = value^2. */
class SqrtHandler implements SpecialHandler {
  constructor(
    private readonly unitCode: string,
    private readonly unitExpr: string,
  ) {}

  code(): string {
    return this.unitCode;
  }
  units(): string {
    return this.unitExpr;
  }
  toCanonical(v: number): number {
    return v * v;
  }
  fromCanonical(v: number): number {
    return Math.sqrt(v);
  }
}

/** Map of special unit codes to their handlers. */
export const SPECIAL_HANDLERS = new Map<string, SpecialHandler>([
  // Temperature (offset units)
  ['Cel', new OffsetHandler('Cel', 'K', 273.15)],
  ['[degF]', new AffineHandler('[degF]', 'K', 5.0 / 9.0, 459.67)],
  ['[degRe]', new AffineHandler('[degRe]', 'K', 5.0 / 4.0, 273.15)],

  // Logarithmic
  ['[pH]', new LogHandler('[pH]', 'mol/l', 10, 1, true)],
  ['Np', new LogHandler('Np', '1', Math.E)],
  ['B', new LogHandler('B', '1', 10)],
  ['B[SPL]', new LogHandler('B[SPL]', '10*-5.Pa', 10, 2)],
  ['B[V]', new LogHandler('B[V]', 'V', 10, 2)],
  ['B[mV]', new LogHandler('B[mV]', 'mV', 10, 2)],
  ['B[uV]', new LogHandler('B[uV]', 'uV', 10, 2)],
  ['B[10.nV]', new LogHandler('B[10.nV]', '10*-9.V', 10, 2)],
  ['B[W]', new LogHandler('B[W]', 'W', 10)],
  ['B[kW]', new LogHandler('B[kW]', 'kW', 10)],
  ['bit_s', new LogHandler('bit_s', '1', 2)],

  // Trigonometric
  ["[p'diop]", new TanHandler("[p'diop]", 'rad', 100)],
  ['%[slope]', new TanHandler('%[slope]', 'deg', 100)],

  // Power
  ['[m/s2/Hz^(1/2)]', new SqrtHandler('[m/s2/Hz^(1/2)]', 'm2/s4/Hz')],

  // Homeopathic
  ["[hp'_X]", new LogHandler("[hp'_X]", '1', 10, 1, true)],
  ["[hp'_C]", new LogHandler("[hp'_C]", '1', 100, 1, true)],
  ["[hp'_M]", new LogHandler("[hp'_M]", '1', 1000, 1, true)],
  ["[hp'_Q]", new LogHandler("[hp'_Q]", '1', 50000, 1, true)],
]);
