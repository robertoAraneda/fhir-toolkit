import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompositionAttester } from '../../models/backbones/CompositionAttester.js';
import type {
  ICodeableConcept,
  ICompositionAttester,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CompositionAttesterBuilder - Fluent builder for CompositionAttester backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compositionAttester = new CompositionAttesterBuilder()
 *   .setMode(value)
 *   .build();
 */
export class CompositionAttesterBuilder extends BackboneElementBuilder<CompositionAttester, ICompositionAttester> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * personal | professional | legal | official
   */
  setMode(mode: ICodeableConcept): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set time
   * When the composition was attested
   */
  setTime(time: string): this {
    this.data.time = time;
    return this;
  }

  /**
   * Set party
   * Who attested the composition
   */
  setParty(party: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.party = party;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompositionAttester instance
   */
  build(): CompositionAttester {
    return new CompositionAttester(this.data);
  }

  /**
   * Build and validate the CompositionAttester instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompositionAttester> {
    const compositionAttester = this.build();
    await compositionAttester.validateOrThrow();
    return compositionAttester;
  }
}
