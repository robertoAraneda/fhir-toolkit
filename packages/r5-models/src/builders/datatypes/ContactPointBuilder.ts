import { ElementBuilder } from '../base/ElementBuilder.js';
import { ContactPoint } from '../../models/datatypes/ContactPoint.js';
import type {
  ContactPointSystemType,
  ContactPointUseType,
  IContactPoint,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ContactPointBuilder - Fluent builder for ContactPoint datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const contactPoint = new ContactPointBuilder()
 *   .setSystem(value)
 *   .build();
 */
export class ContactPointBuilder extends ElementBuilder<ContactPoint, IContactPoint> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set system
   * phone | fax | email | pager | url | sms | other
   */
  setSystem(system: ContactPointSystemType): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set value
   * The actual contact point details
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set use
   * home | work | temp | old | mobile - purpose of this contact point
   */
  setUse(use: ContactPointUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set rank
   * Specify preferred order of use (1 = highest)
   */
  setRank(rank: number): this {
    this.data.rank = rank;
    return this;
  }

  /**
   * Set period
   * Time period when the contact point was/is in use
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContactPoint instance
   */
  build(): ContactPoint {
    return new ContactPoint(this.data);
  }

  /**
   * Build and validate the ContactPoint instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContactPoint> {
    const contactPoint = this.build();
    await contactPoint.validateOrThrow();
    return contactPoint;
  }
}
