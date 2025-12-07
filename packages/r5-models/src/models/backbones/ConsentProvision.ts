import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoding,
  IConsentProvision,
  IConsentProvisionActor,
  IConsentProvisionData,
  IExpression,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConsentProvision */
const CONSENT_PROVISION_PROPERTIES = [
  'period',
  'actor',
  'action',
  'securityLabel',
  'purpose',
  'documentType',
  'resourceType',
  'code',
  'dataPeriod',
  'data',
  'expression',
  'provision',
] as const;

/**
 * ConsentProvision - Constraints to the base Consent.policyRule/Consent.policy
 *
 * @see https://hl7.org/fhir/R4/consentprovision.html
 *
 * @example
 * const consentProvision = new ConsentProvision({
 *   // ... properties
 * });
 */
export class ConsentProvision extends BackboneElement implements IConsentProvision {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Timeframe for this provision */
  period?: IPeriod;

  /** Who|what controlled by this provision (or group, by role) */
  actor?: IConsentProvisionActor[];

  /** Actions controlled by this provision */
  action?: ICodeableConcept[];

  /** Security Labels that define affected resources */
  securityLabel?: ICoding[];

  /** Context of activities covered by this provision */
  purpose?: ICoding[];

  /** e.g. Resource Type, Profile, CDA, etc */
  documentType?: ICoding[];

  /** e.g. Resource Type, Profile, etc */
  resourceType?: ICoding[];

  /** e.g. LOINC or SNOMED CT code, etc. in the content */
  code?: ICodeableConcept[];

  /** Timeframe for data controlled by this provision */
  dataPeriod?: IPeriod;

  /** Data controlled by this provision */
  data?: IConsentProvisionData[];

  /** A computable expression of the consent */
  expression?: IExpression;

  /** Nested Exception Provisions */
  provision?: IConsentProvision[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentProvision>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_PROVISION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentProvision from a JSON object
   */
  static fromJSON(json: IConsentProvision): ConsentProvision {
    return new ConsentProvision(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentProvision with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentProvision>): ConsentProvision {
    return new ConsentProvision({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentProvision by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentProvision) => Partial<IConsentProvision>): ConsentProvision {
    const currentData = this.toJSON();
    return new ConsentProvision({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentProvision)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentProvision {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_PROVISION_PROPERTIES);
    return result as IConsentProvision;
  }

  /**
   * Create a deep clone of this ConsentProvision
   */
  clone(): ConsentProvision {
    return new ConsentProvision(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentProvision
   */
  toString(): string {
    const parts: string[] = ['ConsentProvision'];
    return parts.join(', ');
  }
}
