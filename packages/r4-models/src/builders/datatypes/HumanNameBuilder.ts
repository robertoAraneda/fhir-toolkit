import { ElementBuilder } from '../base/ElementBuilder.js';
import { HumanName } from '../../models/datatypes/HumanName.js';
import type {
  IHumanName,
  IPeriod,
  NameUseType,
} from '@fhir-toolkit/r4-types';

/**
 * HumanNameBuilder - Fluent builder for HumanName datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const humanName = new HumanNameBuilder()
 *   .setUse(value)
 *   .addGiven({ ... })
 *   .build();
 */
export class HumanNameBuilder extends ElementBuilder<HumanName, IHumanName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * usual | official | temp | nickname | anonymous | old | maiden
   */
  setUse(use: NameUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set text
   * Text representation of the full name
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set family
   * Family name (often called 'Surname')
   */
  setFamily(family: string): this {
    this.data.family = family;
    return this;
  }

  /**
   * Set period
   * Time period when name was/is in use
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add given
   * Given names (not always 'first'). Includes middle names
   */
  addGiven(given: string): this {
    return this.addToArray('given', given);
  }

  /**
   * Add prefix
   * Parts that come before the name
   */
  addPrefix(prefix: string): this {
    return this.addToArray('prefix', prefix);
  }

  /**
   * Add suffix
   * Parts that come after the name
   */
  addSuffix(suffix: string): this {
    return this.addToArray('suffix', suffix);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the HumanName instance
   */
  build(): HumanName {
    return new HumanName(this.data);
  }

  /**
   * Build and validate the HumanName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<HumanName> {
    const humanName = this.build();
    await humanName.validateOrThrow();
    return humanName;
  }
}
