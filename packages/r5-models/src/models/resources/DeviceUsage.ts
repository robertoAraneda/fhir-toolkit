import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceUsageStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDeviceUsage,
  IDeviceUsageAdherence,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceUsage */
const DEVICE_USAGE_PROPERTIES = [
  'identifier',
  'basedOn',
  'status',
  '_status',
  'category',
  'patient',
  'derivedFrom',
  'context',
  'timingTiming',
  'timingPeriod',
  'timingDateTime',
  '_timingDateTime',
  'dateAsserted',
  '_dateAsserted',
  'usageStatus',
  'usageReason',
  'adherence',
  'informationSource',
  'device',
  'reason',
  'bodySite',
  'note',
] as const;

/**
 * DeviceUsage - A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 *
 * @see https://hl7.org/fhir/R5/deviceusage.html
 *
 * @example
 * const deviceUsage = new DeviceUsage({
 *   // ... properties
 * });
 */
export class DeviceUsage extends DomainResource implements IDeviceUsage {
  readonly resourceType = 'DeviceUsage' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier for this record */
  identifier?: IIdentifier[];

  /** Fulfills plan, proposal or order */
  basedOn?: IReference<'ServiceRequest'>[];

  /** active | completed | not-done | entered-in-error + */
  status: DeviceUsageStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The category of the statement - classifying how the statement is made */
  category?: ICodeableConcept[];

  /** Patient using device */
  patient: IReference<'Patient'>;

  /** Supporting information */
  derivedFrom?: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>[];

  /** The encounter or episode of care that establishes the context for this device use statement */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /** How often  the device was used */
  timingTiming?: ITiming;

  /** How often  the device was used */
  timingPeriod?: IPeriod;

  /** How often  the device was used */
  timingDateTime?: string;

  /** Extension for timingDateTime */
  _timingDateTime?: IElement;

  /** When the statement was made (and recorded) */
  dateAsserted?: string;

  /** Extension for dateAsserted */
  _dateAsserted?: IElement;

  /** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement */
  usageStatus?: ICodeableConcept<DeviceUsageStatusType>;

  /** The reason for asserting the usage status - for example forgot, lost, stolen, broken */
  usageReason?: ICodeableConcept[];

  /** How device is being used */
  adherence?: IDeviceUsageAdherence;

  /** Who made the statement */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>;

  /** Code or Reference to device used */
  device: ICodeableReference;

  /** Why device was used */
  reason?: ICodeableReference[];

  /** Target body site */
  bodySite?: ICodeableReference;

  /** Addition details (comments, instructions) */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDeviceUsage>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_USAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceUsage from a JSON object
   */
  static fromJSON(json: IDeviceUsage): DeviceUsage {
    return new DeviceUsage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceUsage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceUsage>): DeviceUsage {
    return new DeviceUsage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceUsage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceUsage) => Partial<IDeviceUsage>): DeviceUsage {
    const currentData = this.toJSON();
    return new DeviceUsage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceUsage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceUsage {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_USAGE_PROPERTIES);
    return result as IDeviceUsage;
  }

  /**
   * Create a deep clone of this DeviceUsage
   */
  clone(): DeviceUsage {
    return new DeviceUsage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceUsage
   */
  toString(): string {
    const parts: string[] = ['DeviceUsage'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
