import { ElementBuilder } from '../base/ElementBuilder.js';
import { Identifier } from '../../models/datatypes/Identifier.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  IdentifierUseType,
} from '@fhir-toolkit/r4b-types';

/**
 * IdentifierBuilder - Fluent builder for Identifier datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const identifier = new IdentifierBuilder()
 *   .setUse(value)
 *   .build();
 */
export class IdentifierBuilder extends ElementBuilder<Identifier, IIdentifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * usual | official | temp | secondary | old (If known)
   */
  setUse(use: IdentifierUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set type
   * Description of identifier
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set system
   * The namespace for the identifier value
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set value
   * The value that is unique
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set period
   * Time period when id is/was valid for use
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set assigner
   * Organization that issued id (may be just text)
   */
  setAssigner(assigner: IReference<'Organization'>): this {
    this.data.assigner = assigner;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Identifier instance
   */
  build(): Identifier {
    return new Identifier(this.data);
  }

  /**
   * Build and validate the Identifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Identifier> {
    const identifier = this.build();
    await identifier.validateOrThrow();
    return identifier;
  }
}
