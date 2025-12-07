import { ElementBuilder } from '../base/ElementBuilder.js';
import { Reference } from '../../models/datatypes/Reference.js';
import type {
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ReferenceBuilder - Fluent builder for Reference datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const reference = new ReferenceBuilder()
 *   .setReference(value)
 *   .build();
 */
export class ReferenceBuilder extends ElementBuilder<Reference, IReference> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Literal reference, Relative, internal or absolute URL
   */
  setReference(reference: string): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set type
   * Type the reference refers to (e.g. "Patient") - must be a resource in resources
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set identifier
   * Logical reference, when literal reference is not known
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set display
   * Text alternative for the resource
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Reference instance
   */
  build(): Reference {
    return new Reference(this.data);
  }

  /**
   * Build and validate the Reference instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Reference> {
    const reference = this.build();
    await reference.validateOrThrow();
    return reference;
  }
}
