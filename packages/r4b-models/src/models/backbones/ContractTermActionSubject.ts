import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTermActionSubject,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractTermActionSubject */
const CONTRACT_TERM_ACTION_SUBJECT_PROPERTIES = [
  'reference',
  'role',
] as const;

/**
 * ContractTermActionSubject - Entity of the action
 *
 * @see https://hl7.org/fhir/R4/contracttermactionsubject.html
 *
 * @example
 * const contractTermActionSubject = new ContractTermActionSubject({
 *   // ... properties
 * });
 */
export class ContractTermActionSubject extends BackboneElement implements IContractTermActionSubject {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Entity of the action */
  reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /** Role type of the agent */
  role?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermActionSubject>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_ACTION_SUBJECT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermActionSubject from a JSON object
   */
  static fromJSON(json: IContractTermActionSubject): ContractTermActionSubject {
    return new ContractTermActionSubject(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermActionSubject with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermActionSubject>): ContractTermActionSubject {
    return new ContractTermActionSubject({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermActionSubject by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermActionSubject) => Partial<IContractTermActionSubject>): ContractTermActionSubject {
    const currentData = this.toJSON();
    return new ContractTermActionSubject({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermActionSubject)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermActionSubject {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_ACTION_SUBJECT_PROPERTIES);
    return result as IContractTermActionSubject;
  }

  /**
   * Create a deep clone of this ContractTermActionSubject
   */
  clone(): ContractTermActionSubject {
    return new ContractTermActionSubject(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermActionSubject
   */
  toString(): string {
    const parts: string[] = ['ContractTermActionSubject'];
    return parts.join(', ');
  }
}
