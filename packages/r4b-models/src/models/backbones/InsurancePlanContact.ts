import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IInsurancePlanContact,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InsurancePlanContact */
const INSURANCE_PLAN_CONTACT_PROPERTIES = [
  'purpose',
  'name',
  'telecom',
  'address',
] as const;

/**
 * InsurancePlanContact - Contact for the product
 *
 * @see https://hl7.org/fhir/R4/insuranceplancontact.html
 *
 * @example
 * const insurancePlanContact = new InsurancePlanContact({
 *   // ... properties
 * });
 */
export class InsurancePlanContact extends BackboneElement implements IInsurancePlanContact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of contact */
  purpose?: ICodeableConcept;

  /** A name associated with the contact */
  name?: IHumanName;

  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: IContactPoint[];

  /** Visiting or postal addresses for the contact */
  address?: IAddress;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanContact>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_CONTACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanContact from a JSON object
   */
  static fromJSON(json: IInsurancePlanContact): InsurancePlanContact {
    return new InsurancePlanContact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanContact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanContact>): InsurancePlanContact {
    return new InsurancePlanContact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanContact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanContact) => Partial<IInsurancePlanContact>): InsurancePlanContact {
    const currentData = this.toJSON();
    return new InsurancePlanContact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanContact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanContact {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_CONTACT_PROPERTIES);
    return result as IInsurancePlanContact;
  }

  /**
   * Create a deep clone of this InsurancePlanContact
   */
  clone(): InsurancePlanContact {
    return new InsurancePlanContact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanContact
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanContact'];
    return parts.join(', ');
  }
}
