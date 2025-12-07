import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  IElement,
  IIdentifier,
  IReference,
  IVisionPrescription,
  IVisionPrescriptionLensSpecification,
} from '@fhir-toolkit/r4-types';

/** Properties specific to VisionPrescription */
const VISION_PRESCRIPTION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'created',
  '_created',
  'patient',
  'encounter',
  'dateWritten',
  '_dateWritten',
  'prescriber',
  'lensSpecification',
] as const;

/**
 * VisionPrescription - An authorization for the provision of glasses and/or contact lenses to a patient.
 *
 * @see https://hl7.org/fhir/R4/visionprescription.html
 *
 * @example
 * const visionPrescription = new VisionPrescription({
 *   // ... properties
 * });
 */
export class VisionPrescription extends DomainResource implements IVisionPrescription {
  readonly resourceType = 'VisionPrescription' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for vision prescription */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Response creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Who prescription is for */
  patient: IReference<'Patient'>;

  /** Created during encounter / admission / stay */
  encounter?: IReference<'Encounter'>;

  /** When prescription was authorized */
  dateWritten: string;

  /** Extension for dateWritten */
  _dateWritten?: IElement;

  /** Who authorized the vision prescription */
  prescriber: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Vision lens authorization */
  lensSpecification: IVisionPrescriptionLensSpecification[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IVisionPrescription>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, VISION_PRESCRIPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VisionPrescription from a JSON object
   */
  static fromJSON(json: IVisionPrescription): VisionPrescription {
    return new VisionPrescription(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VisionPrescription with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVisionPrescription>): VisionPrescription {
    return new VisionPrescription({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VisionPrescription by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVisionPrescription) => Partial<IVisionPrescription>): VisionPrescription {
    const currentData = this.toJSON();
    return new VisionPrescription({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVisionPrescription)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVisionPrescription {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, VISION_PRESCRIPTION_PROPERTIES);
    return result as IVisionPrescription;
  }

  /**
   * Create a deep clone of this VisionPrescription
   */
  clone(): VisionPrescription {
    return new VisionPrescription(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VisionPrescription
   */
  toString(): string {
    const parts: string[] = ['VisionPrescription'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
