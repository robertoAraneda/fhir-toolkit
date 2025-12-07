import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ServiceRequestPatientInstruction } from '../../models/backbones/ServiceRequestPatientInstruction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IReference,
  IServiceRequestPatientInstruction,
} from '@fhir-toolkit/r5-types';

/**
 * ServiceRequestPatientInstructionBuilder - Fluent builder for ServiceRequestPatientInstruction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const serviceRequestPatientInstruction = new ServiceRequestPatientInstructionBuilder()
 *   .build();
 */
export class ServiceRequestPatientInstructionBuilder extends BackboneElementBuilder<ServiceRequestPatientInstruction, IServiceRequestPatientInstruction> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instruction choice type (instructionMarkdown, instructionReference)
   * @param type - 'Markdown' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstruction('Markdown', value)
   */
  setInstruction<T extends 'Markdown' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instruction${type}` as keyof IServiceRequestPatientInstruction;
    const otherKeys: (keyof IServiceRequestPatientInstruction)[] = [];
    if (type !== 'Markdown') {
      otherKeys.push('instructionMarkdown' as keyof IServiceRequestPatientInstruction);
      otherKeys.push('_instructionMarkdown' as keyof IServiceRequestPatientInstruction);
    }
    if (type !== 'Reference') {
      otherKeys.push('instructionReference' as keyof IServiceRequestPatientInstruction);
      otherKeys.push('_instructionReference' as keyof IServiceRequestPatientInstruction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ServiceRequestPatientInstruction instance
   */
  build(): ServiceRequestPatientInstruction {
    return new ServiceRequestPatientInstruction(this.data);
  }

  /**
   * Build and validate the ServiceRequestPatientInstruction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ServiceRequestPatientInstruction> {
    const serviceRequestPatientInstruction = this.build();
    await serviceRequestPatientInstruction.validateOrThrow();
    return serviceRequestPatientInstruction;
  }
}
