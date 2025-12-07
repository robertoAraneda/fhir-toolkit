import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionContraindication } from '../../models/backbones/ClinicalUseDefinitionContraindication.js';
import type {
  IClinicalUseDefinitionContraindication,
  IClinicalUseDefinitionContraindicationOtherTherapy,
  ICodeableReference,
  IExpression,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClinicalUseDefinitionContraindicationBuilder - Fluent builder for ClinicalUseDefinitionContraindication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionContraindication = new ClinicalUseDefinitionContraindicationBuilder()
 *   .setDiseaseSymptomProcedure(value)
 *   .addComorbidity({ ... })
 *   .build();
 */
export class ClinicalUseDefinitionContraindicationBuilder extends BackboneElementBuilder<ClinicalUseDefinitionContraindication, IClinicalUseDefinitionContraindication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set diseaseSymptomProcedure
   * The situation that is being documented as contraindicating against this item
   */
  setDiseaseSymptomProcedure(diseaseSymptomProcedure: ICodeableReference): this {
    this.data.diseaseSymptomProcedure = diseaseSymptomProcedure;
    return this;
  }

  /**
   * Set diseaseStatus
   * The status of the disease or symptom for the contraindication
   */
  setDiseaseStatus(diseaseStatus: ICodeableReference): this {
    this.data.diseaseStatus = diseaseStatus;
    return this;
  }

  /**
   * Set applicability
   * An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements
   */
  setApplicability(applicability: IExpression): this {
    this.data.applicability = applicability;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add comorbidity
   * A comorbidity (concurrent condition) or coinfection
   */
  addComorbidity(comorbidity: ICodeableReference): this {
    return this.addToArray('comorbidity', comorbidity);
  }

  /**
   * Add indication
   * The indication which this is a contraidication for
   */
  addIndication(indication: IReference<'ClinicalUseDefinition'>): this {
    return this.addToArray('indication', indication);
  }

  /**
   * Add otherTherapy
   * Information about use of the product in relation to other therapies described as part of the contraindication
   */
  addOtherTherapy(otherTherapy: IClinicalUseDefinitionContraindicationOtherTherapy): this {
    return this.addToArray('otherTherapy', otherTherapy);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionContraindication instance
   */
  build(): ClinicalUseDefinitionContraindication {
    return new ClinicalUseDefinitionContraindication(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionContraindication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionContraindication> {
    const clinicalUseDefinitionContraindication = this.build();
    await clinicalUseDefinitionContraindication.validateOrThrow();
    return clinicalUseDefinitionContraindication;
  }
}
