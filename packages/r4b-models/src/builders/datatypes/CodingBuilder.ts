import { ElementBuilder } from '../base/ElementBuilder.js';
import { Coding } from '../../models/datatypes/Coding.js';
import type {
  ICoding,
} from '@fhir-toolkit/r4b-types';

/**
 * CodingBuilder - Fluent builder for Coding datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const coding = new CodingBuilder()
 *   .setSystem(value)
 *   .build();
 */
export class CodingBuilder extends ElementBuilder<Coding, ICoding> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set system
   * Identity of the terminology system
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set version
   * Version of the system - if relevant
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set code
   * Symbol in syntax defined by the system
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * Representation defined by the system
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set userSelected
   * If this coding was chosen directly by the user
   */
  setUserSelected(userSelected: boolean): this {
    this.data.userSelected = userSelected;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Coding instance
   */
  build(): Coding {
    return new Coding(this.data);
  }

  /**
   * Build and validate the Coding instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Coding> {
    const coding = this.build();
    await coding.validateOrThrow();
    return coding;
  }
}
