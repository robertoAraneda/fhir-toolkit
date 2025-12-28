import { DomainResource } from '../base/DomainResource.js';
import type {
  FlagStatusType,
  ICodeableConcept,
  IElement,
  IFlag,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Flag */
const FLAG_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'code',
  'subject',
  'period',
  'encounter',
  'author',
] as const;

/**
 * Flag - Prospective warnings of potential issues when providing care to the patient.
 *
 * @see https://hl7.org/fhir/R5/flag.html
 *
 * @example
 * const flag = new Flag({
 *   // ... properties
 * });
 */
export class Flag extends DomainResource implements IFlag {
  readonly resourceType = 'Flag' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** active | inactive | entered-in-error */
  status: FlagStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Clinical, administrative, etc */
  category?: ICodeableConcept[];

  /** Coded or textual message to display to user */
  code: ICodeableConcept;

  /** Who/What is flag about? */
  subject: IReference<'Patient' | 'RelatedPerson' | 'Location' | 'Group' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'PlanDefinition' | 'Medication' | 'Procedure'>;

  /** Time period when flag is active */
  period?: IPeriod;

  /** Alert relevant during encounter */
  encounter?: IReference<'Encounter'>;

  /** Flag creator */
  author?: IReference<'Device' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IFlag>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, FLAG_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Flag from a JSON object
   */
  static fromJSON(json: IFlag): Flag {
    return new Flag(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Flag with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFlag>): Flag {
    return new Flag({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Flag by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFlag) => Partial<IFlag>): Flag {
    const currentData = this.toJSON();
    return new Flag({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFlag)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFlag {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, FLAG_PROPERTIES);
    return result as IFlag;
  }

  /**
   * Create a deep clone of this Flag
   */
  clone(): Flag {
    return new Flag(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Flag
   */
  toString(): string {
    const parts: string[] = ['Flag'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
