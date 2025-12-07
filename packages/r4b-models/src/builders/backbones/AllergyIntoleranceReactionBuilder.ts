import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AllergyIntoleranceReaction } from '../../models/backbones/AllergyIntoleranceReaction.js';
import type {
  AllergyIntoleranceSeverityType,
  IAllergyIntoleranceReaction,
  IAnnotation,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * AllergyIntoleranceReactionBuilder - Fluent builder for AllergyIntoleranceReaction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const allergyIntoleranceReaction = new AllergyIntoleranceReactionBuilder()
 *   .setSubstance(value)
 *   .addManifestation({ ... })
 *   .build();
 */
export class AllergyIntoleranceReactionBuilder extends BackboneElementBuilder<AllergyIntoleranceReaction, IAllergyIntoleranceReaction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set substance
   * Specific substance or pharmaceutical product considered to be responsible for event
   */
  setSubstance(substance: ICodeableConcept): this {
    this.data.substance = substance;
    return this;
  }

  /**
   * Set description
   * Description of the event as a whole
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set onset
   * Date(/time) when manifestations showed
   */
  setOnset(onset: string): this {
    this.data.onset = onset;
    return this;
  }

  /**
   * Set severity
   * mild | moderate | severe (of event as a whole)
   */
  setSeverity(severity: AllergyIntoleranceSeverityType): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set exposureRoute
   * How the subject was exposed to the substance
   */
  setExposureRoute(exposureRoute: ICodeableConcept): this {
    this.data.exposureRoute = exposureRoute;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add manifestation
   * Clinical symptoms/signs associated with the Event
   */
  addManifestation(manifestation: ICodeableConcept): this {
    return this.addToArray('manifestation', manifestation);
  }

  /**
   * Add note
   * Text about event not captured in other fields
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AllergyIntoleranceReaction instance
   */
  build(): AllergyIntoleranceReaction {
    return new AllergyIntoleranceReaction(this.data);
  }

  /**
   * Build and validate the AllergyIntoleranceReaction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AllergyIntoleranceReaction> {
    const allergyIntoleranceReaction = this.build();
    await allergyIntoleranceReaction.validateOrThrow();
    return allergyIntoleranceReaction;
  }
}
