import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceAssociationType,
  ICodeableConcept,
  IDeviceAssociation,
  IDeviceAssociationOperation,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceAssociation */
const DEVICE_ASSOCIATION_PROPERTIES = [
  'identifier',
  'device',
  'category',
  'status',
  'statusReason',
  'subject',
  'bodyStructure',
  'period',
  'operation',
] as const;

/**
 * DeviceAssociation - A record of association or dissociation of a device with a patient.
 *
 * @see https://hl7.org/fhir/R5/deviceassociation.html
 *
 * @example
 * const deviceAssociation = new DeviceAssociation({
 *   // ... properties
 * });
 */
export class DeviceAssociation extends DomainResource implements IDeviceAssociation {
  readonly resourceType = 'DeviceAssociation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** Reference to the devices associated with the patient or group */
  device: IReference<'Device'>;

  /** Describes the relationship between the device and subject */
  category?: ICodeableConcept[];

  /** implanted | explanted | attached | entered-in-error | unknown */
  status: ICodeableConcept<DeviceAssociationType>;

  /** The reasons given for the current association status */
  statusReason?: ICodeableConcept<DeviceAssociationType>[];

  /** The individual, group of individuals or device that the device is on or associated with */
  subject?: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'Device'>;

  /** Current anatomical location of the device in/on subject */
  bodyStructure?: IReference<'BodyStructure'>;

  /** Begin and end dates and times for the device association */
  period?: IPeriod;

  /** The details about the device when it is in use to describe its operation */
  operation?: IDeviceAssociationOperation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDeviceAssociation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_ASSOCIATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceAssociation from a JSON object
   */
  static fromJSON(json: IDeviceAssociation): DeviceAssociation {
    return new DeviceAssociation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceAssociation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceAssociation>): DeviceAssociation {
    return new DeviceAssociation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceAssociation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceAssociation) => Partial<IDeviceAssociation>): DeviceAssociation {
    const currentData = this.toJSON();
    return new DeviceAssociation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceAssociation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceAssociation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_ASSOCIATION_PROPERTIES);
    return result as IDeviceAssociation;
  }

  /**
   * Create a deep clone of this DeviceAssociation
   */
  clone(): DeviceAssociation {
    return new DeviceAssociation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceAssociation
   */
  toString(): string {
    const parts: string[] = ['DeviceAssociation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
