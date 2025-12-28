import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConsentProvisionActor,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConsentProvisionActor */
const CONSENT_PROVISION_ACTOR_PROPERTIES = [
  'role',
  'reference',
] as const;

/**
 * ConsentProvisionActor - Who|what controlled by this provision (or group, by role)
 *
 * @see https://hl7.org/fhir/R5/consentprovisionactor.html
 *
 * @example
 * const consentProvisionActor = new ConsentProvisionActor({
 *   // ... properties
 * });
 */
export class ConsentProvisionActor extends BackboneElement implements IConsentProvisionActor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How the actor is involved */
  role?: ICodeableConcept;

  /** Resource for the actor (or group, by role) */
  reference?: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentProvisionActor>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_PROVISION_ACTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentProvisionActor from a JSON object
   */
  static fromJSON(json: IConsentProvisionActor): ConsentProvisionActor {
    return new ConsentProvisionActor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentProvisionActor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentProvisionActor>): ConsentProvisionActor {
    return new ConsentProvisionActor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentProvisionActor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentProvisionActor) => Partial<IConsentProvisionActor>): ConsentProvisionActor {
    const currentData = this.toJSON();
    return new ConsentProvisionActor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentProvisionActor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentProvisionActor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_PROVISION_ACTOR_PROPERTIES);
    return result as IConsentProvisionActor;
  }

  /**
   * Create a deep clone of this ConsentProvisionActor
   */
  clone(): ConsentProvisionActor {
    return new ConsentProvisionActor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentProvisionActor
   */
  toString(): string {
    const parts: string[] = ['ConsentProvisionActor'];
    return parts.join(', ');
  }
}
