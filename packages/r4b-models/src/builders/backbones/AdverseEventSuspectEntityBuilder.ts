import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventSuspectEntity } from '../../models/backbones/AdverseEventSuspectEntity.js';
import type {
  IAdverseEventSuspectEntity,
  IAdverseEventSuspectEntityCausality,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * AdverseEventSuspectEntityBuilder - Fluent builder for AdverseEventSuspectEntity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventSuspectEntity = new AdverseEventSuspectEntityBuilder()
 *   .setInstance(value)
 *   .addCausality({ ... })
 *   .build();
 */
export class AdverseEventSuspectEntityBuilder extends BackboneElementBuilder<AdverseEventSuspectEntity, IAdverseEventSuspectEntity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set instance
   * Refers to the specific entity that caused the adverse event
   */
  setInstance(instance: IReference<'Immunization' | 'Procedure' | 'Substance' | 'Medication' | 'MedicationAdministration' | 'MedicationStatement' | 'Device'>): this {
    this.data.instance = instance;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add causality
   * Information on the possible cause of the event
   */
  addCausality(causality: IAdverseEventSuspectEntityCausality): this {
    return this.addToArray('causality', causality);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventSuspectEntity instance
   */
  build(): AdverseEventSuspectEntity {
    return new AdverseEventSuspectEntity(this.data);
  }

  /**
   * Build and validate the AdverseEventSuspectEntity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventSuspectEntity> {
    const adverseEventSuspectEntity = this.build();
    await adverseEventSuspectEntity.validateOrThrow();
    return adverseEventSuspectEntity;
  }
}
