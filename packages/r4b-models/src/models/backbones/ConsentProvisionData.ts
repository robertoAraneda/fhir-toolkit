import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConsentDataMeaningType,
  IConsentProvisionData,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ConsentProvisionData */
const CONSENT_PROVISION_DATA_PROPERTIES = [
  'meaning',
  '_meaning',
  'reference',
] as const;

/**
 * ConsentProvisionData - Data controlled by this rule
 *
 * @see https://hl7.org/fhir/R4/consentprovisiondata.html
 *
 * @example
 * const consentProvisionData = new ConsentProvisionData({
 *   // ... properties
 * });
 */
export class ConsentProvisionData extends BackboneElement implements IConsentProvisionData {

  // ============================================================================
  // Properties
  // ============================================================================

  /** instance | related | dependents | authoredby */
  meaning: ConsentDataMeaningType;

  /** Extension for meaning */
  _meaning?: IElement;

  /** The actual data reference */
  reference: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentProvisionData>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_PROVISION_DATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentProvisionData from a JSON object
   */
  static fromJSON(json: IConsentProvisionData): ConsentProvisionData {
    return new ConsentProvisionData(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentProvisionData with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentProvisionData>): ConsentProvisionData {
    return new ConsentProvisionData({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentProvisionData by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentProvisionData) => Partial<IConsentProvisionData>): ConsentProvisionData {
    const currentData = this.toJSON();
    return new ConsentProvisionData({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentProvisionData)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentProvisionData {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_PROVISION_DATA_PROPERTIES);
    return result as IConsentProvisionData;
  }

  /**
   * Create a deep clone of this ConsentProvisionData
   */
  clone(): ConsentProvisionData {
    return new ConsentProvisionData(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentProvisionData
   */
  toString(): string {
    const parts: string[] = ['ConsentProvisionData'];
    return parts.join(', ');
  }
}
