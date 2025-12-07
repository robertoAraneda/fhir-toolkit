import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceUseStatementStatusType,
  IAnnotation,
  ICodeableConcept,
  IDeviceUseStatement,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceUseStatement */
const DEVICE_USE_STATEMENT_PROPERTIES = [
  'identifier',
  'basedOn',
  'status',
  '_status',
  'subject',
  'derivedFrom',
  'timingTiming',
  'timingPeriod',
  'timingDateTime',
  '_timingDateTime',
  'recordedOn',
  '_recordedOn',
  'source',
  'device',
  'reasonCode',
  'reasonReference',
  'bodySite',
  'note',
] as const;

/**
 * DeviceUseStatement - A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 *
 * @see https://hl7.org/fhir/R4/deviceusestatement.html
 *
 * @example
 * const deviceUseStatement = new DeviceUseStatement({
 *   // ... properties
 * });
 */
export class DeviceUseStatement extends DomainResource implements IDeviceUseStatement {
  readonly resourceType = 'DeviceUseStatement' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier for this record */
  identifier?: IIdentifier[];

  /** Fulfills plan, proposal or order */
  basedOn?: IReference<'ServiceRequest'>[];

  /** active | completed | entered-in-error + */
  status: DeviceUseStatementStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Patient using device */
  subject: IReference<'Patient' | 'Group'>;

  /** Supporting information */
  derivedFrom?: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>[];

  /** How often  the device was used */
  timingTiming?: ITiming;

  /** How often  the device was used */
  timingPeriod?: IPeriod;

  /** How often  the device was used */
  timingDateTime?: string;

  /** Extension for timingDateTime */
  _timingDateTime?: IElement;

  /** When statement was recorded */
  recordedOn?: string;

  /** Extension for recordedOn */
  _recordedOn?: IElement;

  /** Who made the statement */
  source?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Reference to device used */
  device: IReference<'Device'>;

  /** Why device was used */
  reasonCode?: ICodeableConcept[];

  /** Why was DeviceUseStatement performed? */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference' | 'Media'>[];

  /** Target body site */
  bodySite?: ICodeableConcept;

  /** Addition details (comments, instructions) */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDeviceUseStatement>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_USE_STATEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceUseStatement from a JSON object
   */
  static fromJSON(json: IDeviceUseStatement): DeviceUseStatement {
    return new DeviceUseStatement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceUseStatement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceUseStatement>): DeviceUseStatement {
    return new DeviceUseStatement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceUseStatement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceUseStatement) => Partial<IDeviceUseStatement>): DeviceUseStatement {
    const currentData = this.toJSON();
    return new DeviceUseStatement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceUseStatement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceUseStatement {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_USE_STATEMENT_PROPERTIES);
    return result as IDeviceUseStatement;
  }

  /**
   * Create a deep clone of this DeviceUseStatement
   */
  clone(): DeviceUseStatement {
    return new DeviceUseStatement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceUseStatement
   */
  toString(): string {
    const parts: string[] = ['DeviceUseStatement'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
