import { ElementBuilder } from '../base/ElementBuilder.js';
import { Contributor } from '../../models/datatypes/Contributor.js';
import type {
  ContributorTypeType,
  IContactDetail,
  IContributor,
} from '@fhir-toolkit/r4-types';

/**
 * ContributorBuilder - Fluent builder for Contributor datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const contributor = new ContributorBuilder()
 *   .setType(value)
 *   .addContact({ ... })
 *   .build();
 */
export class ContributorBuilder extends ElementBuilder<Contributor, IContributor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * author | editor | reviewer | endorser
   */
  setType(type: ContributorTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * Who contributed the content
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add contact
   * Contact details of the contributor
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Contributor instance
   */
  build(): Contributor {
    return new Contributor(this.data);
  }

  /**
   * Build and validate the Contributor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Contributor> {
    const contributor = this.build();
    await contributor.validateOrThrow();
    return contributor;
  }
}
