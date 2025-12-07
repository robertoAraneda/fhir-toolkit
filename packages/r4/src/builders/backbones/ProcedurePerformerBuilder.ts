import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ProcedurePerformer } from '../../models/backbones/ProcedurePerformer.js';
import type {
  ICodeableConcept,
  IProcedurePerformer,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ProcedurePerformerBuilder - Fluent builder for ProcedurePerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const procedurePerformer = new ProcedurePerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ProcedurePerformerBuilder extends BackboneElementBuilder<ProcedurePerformer, IProcedurePerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performance
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * The reference to the practitioner
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>): this {
    this.data.actor = actor;
    return this;
  }

  /**
   * Set onBehalfOf
   * Organization the device or practitioner was acting for
   */
  setOnBehalfOf(onBehalfOf: IReference<'Organization'>): this {
    this.data.onBehalfOf = onBehalfOf;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProcedurePerformer instance
   */
  build(): ProcedurePerformer {
    return new ProcedurePerformer(this.data);
  }

  /**
   * Build and validate the ProcedurePerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProcedurePerformer> {
    const procedurePerformer = this.build();
    await procedurePerformer.validateOrThrow();
    return procedurePerformer;
  }
}
