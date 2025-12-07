import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MessageDefinitionFocus } from '../../models/backbones/MessageDefinitionFocus.js';
import type {
  IMessageDefinitionFocus,
} from '@fhir-toolkit/r4b-types';

/**
 * MessageDefinitionFocusBuilder - Fluent builder for MessageDefinitionFocus backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const messageDefinitionFocus = new MessageDefinitionFocusBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MessageDefinitionFocusBuilder extends BackboneElementBuilder<MessageDefinitionFocus, IMessageDefinitionFocus> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of resource
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set profile
   * Profile that must be adhered to by focus
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  /**
   * Set min
   * Minimum number of focuses of this type
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Maximum number of focuses of this type
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MessageDefinitionFocus instance
   */
  build(): MessageDefinitionFocus {
    return new MessageDefinitionFocus(this.data);
  }

  /**
   * Build and validate the MessageDefinitionFocus instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MessageDefinitionFocus> {
    const messageDefinitionFocus = this.build();
    await messageDefinitionFocus.validateOrThrow();
    return messageDefinitionFocus;
  }
}
