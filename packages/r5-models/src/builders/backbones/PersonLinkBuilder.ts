import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PersonLink } from '../../models/backbones/PersonLink.js';
import type {
  IPersonLink,
  IReference,
  IdentityAssuranceLevelType,
} from '@fhir-toolkit/r5-types';

/**
 * PersonLinkBuilder - Fluent builder for PersonLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const personLink = new PersonLinkBuilder()
 *   .setTarget(value)
 *   .build();
 */
export class PersonLinkBuilder extends BackboneElementBuilder<PersonLink, IPersonLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set target
   * The resource to which this actual person is associated
   */
  setTarget(target: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Person'>): this {
    this.data.target = target;
    return this;
  }

  /**
   * Set assurance
   * level1 | level2 | level3 | level4
   */
  setAssurance(assurance: IdentityAssuranceLevelType): this {
    this.data.assurance = assurance;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PersonLink instance
   */
  build(): PersonLink {
    return new PersonLink(this.data);
  }

  /**
   * Build and validate the PersonLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PersonLink> {
    const personLink = this.build();
    await personLink.validateOrThrow();
    return personLink;
  }
}
