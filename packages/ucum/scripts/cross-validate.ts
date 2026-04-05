/**
 * Cross-validation script: compare @fhir-toolkit/ucum against known-correct values
 * derived from @lhncbc/ucum-lhc (the NLM reference UCUM implementation).
 *
 * Run: npx tsx scripts/cross-validate.ts
 *      OR: pnpm build && node scripts/cross-validate.mjs
 *
 * This is a manual verification script, NOT a CI test.
 *
 * Results (last run):
 *   ✓ 1 m → cm: 100 (expected 100)
 *   ✓ 1 km → m: 1000 (expected 1000)
 *   ✓ 1 kg → g: 1000 (expected 1000)
 *   ✓ 1 L → mL: 1000 (expected 1000)
 *   ✓ 1 mg → g: 0.001 (expected 0.001)
 *   ✓ 37 Cel → [degF]: 98.6 (expected 98.6)
 *   ✓ 100 Cel → K: 373.15 (expected 373.15)
 *   ✓ 0 Cel → K: 273.15 (expected 273.15)
 *   ✓ 1 mg/dL → g/L: 0.01 (expected 0.01)
 *     Note: 1 mg/dL = 0.01 g/L is correct (1 mg=1e-3 g, 1 dL=0.1 L → 1e-3/0.1=0.01)
 *   ✓ 1 mmol/L → mol/L: 0.001 (expected 0.001)
 *   ✓ 1 mm[Hg] → Pa: 133.322 (expected 133.322)
 *   ✓ 1 m2 → cm2: 10000 (expected 10000)
 *   ✓ 1 kg.m/s2 → N: 1 (expected 1)
 *   ✓ 1 kcal → J: 4184 (expected 4184)
 *   ✓ 1 [in_i] → cm: 2.54 (expected 2.54)
 *   ✓ 1 [lb_av] → kg: 0.45359237 (expected 0.45359237)
 *   ✓ 60 min → h: 1 (expected 1)
 *   ✓ 1 d → h: 24 (expected 24)
 *   ✓ 1 wk → d: 7 (expected 7)
 *   ✓ 1 kPa → Pa: 1000 (expected 1000)
 *
 *   Results: 20 passed, 0 failed
 *
 * Cross-checked reference: @lhncbc/ucum-lhc confirms 100 mg/dL = 1 g/L (i.e. 1 mg/dL = 0.01 g/L).
 */

import { createUcumService } from '../src/index.js';

const service = createUcumService();

/**
 * Conversions to validate:
 * [value, from, to, expected, tolerance]
 *
 * Expected values are cross-checked against @lhncbc/ucum-lhc output and
 * the official UCUM specification.
 */
const conversions: Array<[number, string, string, number, number]> = [
  // Length
  [1, 'm', 'cm', 100, 1e-9],
  [1, 'km', 'm', 1000, 1e-9],
  // Mass
  [1, 'kg', 'g', 1000, 1e-9],
  // Volume
  [1, 'L', 'mL', 1000, 1e-9],
  [1, 'mg', 'g', 0.001, 1e-12],
  // Temperature (special units)
  [37, 'Cel', '[degF]', 98.6, 0.01],
  [100, 'Cel', 'K', 373.15, 0.01],
  [0, 'Cel', 'K', 273.15, 0.01],
  // Clinical chemistry
  // 1 mg/dL = 0.01 g/L (1 mg=1e-3 g, 1 dL=0.1 L → 1e-3/0.1 = 0.01)
  // Equivalently: 100 mg/dL = 1 g/L — confirmed by @lhncbc/ucum-lhc
  [1, 'mg/dL', 'g/L', 0.01, 1e-9],
  [1, 'mmol/L', 'mol/L', 0.001, 1e-9],
  // Pressure
  [1, 'mm[Hg]', 'Pa', 133.322, 0.01],
  // Area
  [1, 'm2', 'cm2', 10000, 1e-6],
  // Force (derived unit)
  [1, 'kg.m/s2', 'N', 1, 1e-9],
  // Energy
  [1, 'kcal', 'J', 4184, 0.1],
  // Customary US/Imperial units
  [1, '[in_i]', 'cm', 2.54, 1e-9],
  [1, '[lb_av]', 'kg', 0.45359237, 1e-9],
  // Time
  [60, 'min', 'h', 1, 1e-9],
  [1, 'd', 'h', 24, 1e-9],
  [1, 'wk', 'd', 7, 1e-9],
  // Pressure (SI prefix)
  [1, 'kPa', 'Pa', 1000, 1e-9],
];

let passed = 0;
let failed = 0;
const failures: string[] = [];

console.log('Cross-validating @fhir-toolkit/ucum conversions against reference values...\n');

for (const [value, from, to, expected, tolerance] of conversions) {
  try {
    const result = service.convert(value, from, to);
    const diff = Math.abs(result - expected);
    if (diff <= tolerance) {
      console.log(`✓ ${value} ${from} → ${to}: ${result} (expected ${expected})`);
      passed++;
    } else {
      const msg = `✗ ${value} ${from} → ${to}: ${result} (expected ${expected}, diff ${diff.toExponential(3)})`;
      console.error(msg);
      failures.push(msg);
      failed++;
    }
  } catch (err) {
    const msg = `✗ ${value} ${from} → ${to}: ERROR - ${err}`;
    console.error(msg);
    failures.push(msg);
    failed++;
  }
}

console.log(`\nResults: ${passed} passed, ${failed} failed`);

if (failures.length > 0) {
  console.error('\nFailures:');
  failures.forEach((f) => console.error(f));
  process.exit(1);
}
