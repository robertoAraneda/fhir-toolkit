import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentProvision } from '../../models/backbones/ConsentProvision.js';
import type {
  ConsentProvisionTypeType,
  ICodeableConcept,
  ICoding,
  IConsentProvision,
  IConsentProvisionActor,
  IConsentProvisionData,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * ConsentProvisionBuilder - Fluent builder for ConsentProvision backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentProvision = new ConsentProvisionBuilder()
 *   .setType(value)
 *   .addActor({ ... })
 *   .build();
 */
export class ConsentProvisionBuilder extends BackboneElementBuilder<ConsentProvision, IConsentProvision> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * deny | permit
   */
  setType(type: ConsentProvisionTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set period
   * Timeframe for this rule
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set dataPeriod
   * Timeframe for data controlled by this rule
   */
  setDataPeriod(dataPeriod: IPeriod): this {
    this.data.dataPeriod = dataPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add actor
   * Who|what controlled by this rule (or group, by role)
   */
  addActor(actor: IConsentProvisionActor): this {
    return this.addToArray('actor', actor);
  }

  /**
   * Add action
   * Actions controlled by this rule
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
   * Context of activities covered by this rule
   */
  addPurpose(purpose: ICoding): this {
    return this.addToArray('purpose', purpose);
  }

  /**
   * Add class
   * e.g. Resource Type, Profile, CDA, etc.
   */
  addClass(_class: ICoding): this {
    return this.addToArray('class', _class);
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
   * Data controlled by this rule
   */
  addData(data: IConsentProvisionData): this {
    return this.addToArray('data', data);
  }

  /**
   * Add provision
   * Nested Exception Rules
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
