import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionIndication } from '../../models/backbones/ClinicalUseDefinitionIndication.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClinicalUseDefinitionContraindicationOtherTherapy,
  IClinicalUseDefinitionIndication,
  ICodeableReference,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalUseDefinitionIndicationBuilder - Fluent builder for ClinicalUseDefinitionIndication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionIndication = new ClinicalUseDefinitionIndicationBuilder()
 *   .setDiseaseSymptomProcedure(value)
 *   .addComorbidity({ ... })
 *   .build();
 */
export class ClinicalUseDefinitionIndicationBuilder extends BackboneElementBuilder<ClinicalUseDefinitionIndication, IClinicalUseDefinitionIndication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set diseaseSymptomProcedure
   * The situation that is being documented as an indicaton for this item
   */
  setDiseaseSymptomProcedure(diseaseSymptomProcedure: ICodeableReference): this {
    this.data.diseaseSymptomProcedure = diseaseSymptomProcedure;
    return this;
  }

  /**
   * Set diseaseStatus
   * The status of the disease or symptom for the indication
   */
  setDiseaseStatus(diseaseStatus: ICodeableReference): this {
    this.data.diseaseStatus = diseaseStatus;
    return this;
  }

  /**
   * Set intendedEffect
   * The intended effect, aim or strategy to be achieved
   */
  setIntendedEffect(intendedEffect: ICodeableReference): this {
    this.data.intendedEffect = intendedEffect;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set duration choice type (durationRange, durationString)
   * @param type - 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDuration('Range', value)
   */
  setDuration<T extends 'Range' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `duration${type}` as keyof IClinicalUseDefinitionIndication;
    const otherKeys: (keyof IClinicalUseDefinitionIndication)[] = [];
    if (type !== 'Range') {
      otherKeys.push('durationRange' as keyof IClinicalUseDefinitionIndication);
      otherKeys.push('_durationRange' as keyof IClinicalUseDefinitionIndication);
    }
    if (type !== 'String') {
      otherKeys.push('durationString' as keyof IClinicalUseDefinitionIndication);
      otherKeys.push('_durationString' as keyof IClinicalUseDefinitionIndication);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add comorbidity
   * A comorbidity or coinfection as part of the indication
   */
  addComorbidity(comorbidity: ICodeableReference): this {
    return this.addToArray('comorbidity', comorbidity);
  }

  /**
   * Add undesirableEffect
   * An unwanted side effect or negative outcome of the subject of this resource when being used for this indication
   */
  addUndesirableEffect(undesirableEffect: IReference<'ClinicalUseDefinition'>): this {
    return this.addToArray('undesirableEffect', undesirableEffect);
  }

  /**
   * Add otherTherapy
   * The use of the medicinal product in relation to other therapies described as part of the indication
   */
  addOtherTherapy(otherTherapy: IClinicalUseDefinitionContraindicationOtherTherapy): this {
    return this.addToArray('otherTherapy', otherTherapy);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionIndication instance
   */
  build(): ClinicalUseDefinitionIndication {
    return new ClinicalUseDefinitionIndication(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionIndication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionIndication> {
    const clinicalUseDefinitionIndication = this.build();
    await clinicalUseDefinitionIndication.validateOrThrow();
    return clinicalUseDefinitionIndication;
  }
}
