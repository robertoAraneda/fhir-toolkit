import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MeasureReportGroup } from '../../models/backbones/MeasureReportGroup.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IMeasureReportGroup,
  IMeasureReportGroupPopulation,
  IMeasureReportGroupStratifier,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MeasureReportGroupBuilder - Fluent builder for MeasureReportGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const measureReportGroup = new MeasureReportGroupBuilder()
 *   .setLinkId(value)
 *   .addPopulation({ ... })
 *   .build();
 */
export class MeasureReportGroupBuilder extends BackboneElementBuilder<MeasureReportGroup, IMeasureReportGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Pointer to specific group from Measure
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set code
   * Meaning of the group
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * What individual(s) the report is for
   */
  setSubject(subject: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.subject = subject;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set measureScore choice type (measureScoreQuantity, measureScoreDateTime, measureScoreCodeableConcept, measureScorePeriod, measureScoreRange, measureScoreDuration)
   * @param type - 'Quantity' | 'DateTime' | 'CodeableConcept' | 'Period' | 'Range' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMeasureScore('Quantity', value)
   */
  setMeasureScore<T extends 'Quantity' | 'DateTime' | 'CodeableConcept' | 'Period' | 'Range' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `measureScore${type}` as keyof IMeasureReportGroup;
    const otherKeys: (keyof IMeasureReportGroup)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('measureScoreQuantity' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScoreQuantity' as keyof IMeasureReportGroup);
    }
    if (type !== 'DateTime') {
      otherKeys.push('measureScoreDateTime' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScoreDateTime' as keyof IMeasureReportGroup);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('measureScoreCodeableConcept' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScoreCodeableConcept' as keyof IMeasureReportGroup);
    }
    if (type !== 'Period') {
      otherKeys.push('measureScorePeriod' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScorePeriod' as keyof IMeasureReportGroup);
    }
    if (type !== 'Range') {
      otherKeys.push('measureScoreRange' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScoreRange' as keyof IMeasureReportGroup);
    }
    if (type !== 'Duration') {
      otherKeys.push('measureScoreDuration' as keyof IMeasureReportGroup);
      otherKeys.push('_measureScoreDuration' as keyof IMeasureReportGroup);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add population
   * The populations in the group
   */
  addPopulation(population: IMeasureReportGroupPopulation): this {
    return this.addToArray('population', population);
  }

  /**
   * Add stratifier
   * Stratification results
   */
  addStratifier(stratifier: IMeasureReportGroupStratifier): this {
    return this.addToArray('stratifier', stratifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MeasureReportGroup instance
   */
  build(): MeasureReportGroup {
    return new MeasureReportGroup(this.data);
  }

  /**
   * Build and validate the MeasureReportGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MeasureReportGroup> {
    const measureReportGroup = this.build();
    await measureReportGroup.validateOrThrow();
    return measureReportGroup;
  }
}
