import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentProvision } from '../../models/backbones/ConsentProvision.js';
import type {
  ICodeableConcept,
  ICoding,
  IConsentProvision,
  IConsentProvisionActor,
  IConsentProvisionData,
  IExpression,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ConsentProvisionBuilder - Fluent builder for ConsentProvision backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentProvision = new ConsentProvisionBuilder()
 *   .setPeriod(value)
 *   .addActor({ ... })
 *   .build();
 */
export class ConsentProvisionBuilder extends BackboneElementBuilder<ConsentProvision, IConsentProvision> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set period
   * Timeframe for this provision
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set dataPeriod
   * Timeframe for data controlled by this provision
   */
  setDataPeriod(dataPeriod: IPeriod): this {
    this.data.dataPeriod = dataPeriod;
    return this;
  }

  /**
   * Set expression
   * A computable expression of the consent
   */
  setExpression(expression: IExpression): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add actor
   * Who|what controlled by this provision (or group, by role)
   */
  addActor(actor: IConsentProvisionActor): this {
    return this.addToArray('actor', actor);
  }

  /**
   * Add action
   * Actions controlled by this provision
   */
  addAction(action: ICodeableConcept): this {
    return this.addToArray('action', action);
  }

  /**
   * Add securityLabel
   * Security Labels that define affected resources
   */
  addSecurityLabel(securityLabel: ICoding): this {
    return this.addToArray('securityLabel', securityLabel);
  }

  /**
   * Add purpose
   * Context of activities covered by this provision
   */
  addPurpose(purpose: ICoding): this {
    return this.addToArray('purpose', purpose);
  }

  /**
   * Add documentType
   * e.g. Resource Type, Profile, CDA, etc
   */
  addDocumentType(documentType: ICoding): this {
    return this.addToArray('documentType', documentType);
  }

  /**
   * Add resourceType
   * e.g. Resource Type, Profile, etc
   */
  addResourceType(resourceType: ICoding): this {
    return this.addToArray('resourceType', resourceType);
  }

  /**
   * Add code
   * e.g. LOINC or SNOMED CT code, etc. in the content
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add data
   * Data controlled by this provision
   */
  addData(data: IConsentProvisionData): this {
    return this.addToArray('data', data);
  }

  /**
   * Add provision
   * Nested Exception Provisions
   */
  addProvision(provision: IConsentProvision): this {
    return this.addToArray('provision', provision);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentProvision instance
   */
  build(): ConsentProvision {
    return new ConsentProvision(this.data);
  }

  /**
   * Build and validate the ConsentProvision instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentProvision> {
    const consentProvision = this.build();
    await consentProvision.validateOrThrow();
    return consentProvision;
  }
}
