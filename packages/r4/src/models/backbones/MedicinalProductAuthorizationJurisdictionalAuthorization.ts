import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductAuthorizationJurisdictionalAuthorization */
const MEDICINAL_PRODUCT_AUTHORIZATION_JURISDICTIONAL_AUTHORIZATION_PROPERTIES = [
  'identifier',
  'country',
  'jurisdiction',
  'legalStatusOfSupply',
  'validityPeriod',
] as const;

/**
 * MedicinalProductAuthorizationJurisdictionalAuthorization - Authorization in areas within a country
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorizationjurisdictionalauthorization.html
 *
 * @example
 * const medicinalProductAuthorizationJurisdictionalAuthorization = new MedicinalProductAuthorizationJurisdictionalAuthorization({
 *   // ... properties
 * });
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement implements IMedicinalProductAuthorizationJurisdictionalAuthorization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The assigned number for the marketing authorization */
  identifier?: IIdentifier[];

  /** Country of authorization */
  country?: ICodeableConcept;

  /** Jurisdiction within a country */
  jurisdiction?: ICodeableConcept[];

  /** The legal status of supply in a jurisdiction or region */
  legalStatusOfSupply?: ICodeableConcept;

  /** The start and expected end date of the authorization */
  validityPeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductAuthorizationJurisdictionalAuthorization>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_AUTHORIZATION_JURISDICTIONAL_AUTHORIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductAuthorizationJurisdictionalAuthorization from a JSON object
   */
  static fromJSON(json: IMedicinalProductAuthorizationJurisdictionalAuthorization): MedicinalProductAuthorizationJurisdictionalAuthorization {
    return new MedicinalProductAuthorizationJurisdictionalAuthorization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductAuthorizationJurisdictionalAuthorization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductAuthorizationJurisdictionalAuthorization>): MedicinalProductAuthorizationJurisdictionalAuthorization {
    return new MedicinalProductAuthorizationJurisdictionalAuthorization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductAuthorizationJurisdictionalAuthorization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductAuthorizationJurisdictionalAuthorization) => Partial<IMedicinalProductAuthorizationJurisdictionalAuthorization>): MedicinalProductAuthorizationJurisdictionalAuthorization {
    const currentData = this.toJSON();
    return new MedicinalProductAuthorizationJurisdictionalAuthorization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductAuthorizationJurisdictionalAuthorization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductAuthorizationJurisdictionalAuthorization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_AUTHORIZATION_JURISDICTIONAL_AUTHORIZATION_PROPERTIES);
    return result as IMedicinalProductAuthorizationJurisdictionalAuthorization;
  }

  /**
   * Create a deep clone of this MedicinalProductAuthorizationJurisdictionalAuthorization
   */
  clone(): MedicinalProductAuthorizationJurisdictionalAuthorization {
    return new MedicinalProductAuthorizationJurisdictionalAuthorization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductAuthorizationJurisdictionalAuthorization
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductAuthorizationJurisdictionalAuthorization'];
    return parts.join(', ');
  }
}
