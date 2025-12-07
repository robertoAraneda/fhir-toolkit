import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansion } from '../../models/backbones/ValueSetExpansion.js';
import type {
  IValueSetExpansion,
  IValueSetExpansionContains,
  IValueSetExpansionParameter,
  IValueSetExpansionProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetExpansionBuilder - Fluent builder for ValueSetExpansion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansion = new ValueSetExpansionBuilder()
 *   .setIdentifier(value)
 *   .addParameter({ ... })
 *   .build();
 */
export class ValueSetExpansionBuilder extends BackboneElementBuilder<ValueSetExpansion, IValueSetExpansion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifies the value set expansion (business identifier)
   */
  setIdentifier(identifier: string): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set next
   * Opaque urls for paging through expansion results
   */
  setNext(next: string): this {
    this.data.next = next;
    return this;
  }

  /**
   * Set timestamp
   * Time ValueSet expansion happened
   */
  setTimestamp(timestamp: string): this {
    this.data.timestamp = timestamp;
    return this;
  }

  /**
   * Set total
   * Total number of codes in the expansion
   */
  setTotal(total: number): this {
    this.data.total = total;
    return this;
  }

  /**
   * Set offset
   * Offset at which this resource starts
   */
  setOffset(offset: number): this {
    this.data.offset = offset;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parameter
   * Parameter that controlled the expansion process
   */
  addParameter(parameter: IValueSetExpansionParameter): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add property
   * Additional information supplied about each concept
   */
  addProperty(property: IValueSetExpansionProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add contains
   * Codes in the value set
   */
  addContains(contain: IValueSetExpansionContains): this {
    return this.addToArray('contains', contain);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansion instance
   */
  build(): ValueSetExpansion {
    return new ValueSetExpansion(this.data);
  }

  /**
   * Build and validate the ValueSetExpansion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansion> {
    const valueSetExpansion = this.build();
    await valueSetExpansion.validateOrThrow();
    return valueSetExpansion;
  }
}
