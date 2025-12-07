import { ElementBuilder } from '../base/ElementBuilder.js';
import { ExtendedContactDetail } from '../../models/datatypes/ExtendedContactDetail.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtendedContactDetail,
  IHumanName,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExtendedContactDetailBuilder - Fluent builder for ExtendedContactDetail datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const extendedContactDetail = new ExtendedContactDetailBuilder()
 *   .setPurpose(value)
 *   .addName({ ... })
 *   .build();
 */
export class ExtendedContactDetailBuilder extends ElementBuilder<ExtendedContactDetail, IExtendedContactDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set purpose
   * The type of contact
   */
  setPurpose(purpose: ICodeableConcept): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set address
   * Address for the contact
   */
  setAddress(address: IAddress): this {
    this.data.address = address;
    return this;
  }

  /**
   * Set organization
   * This contact detail is handled/monitored by a specific organization
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set period
   * Period that this contact was valid for usage
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add name
   * Name of an individual to contact
   */
  addName(name: IHumanName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add telecom
   * Contact details (e.g.phone/fax/url)
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExtendedContactDetail instance
   */
  build(): ExtendedContactDetail {
    return new ExtendedContactDetail(this.data);
  }

  /**
   * Build and validate the ExtendedContactDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExtendedContactDetail> {
    const extendedContactDetail = this.build();
    await extendedContactDetail.validateOrThrow();
    return extendedContactDetail;
  }
}
