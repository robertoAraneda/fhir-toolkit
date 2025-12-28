import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceDispenseStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDeviceDispense,
  IDeviceDispensePerformer,
  IElement,
  IIdentifier,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDispense */
const DEVICE_DISPENSE_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'category',
  'device',
  'subject',
  'receiver',
  'encounter',
  'supportingInformation',
  'performer',
  'location',
  'type',
  'quantity',
  'preparedDate',
  '_preparedDate',
  'whenHandedOver',
  '_whenHandedOver',
  'destination',
  'note',
  'usageInstruction',
  '_usageInstruction',
  'eventHistory',
] as const;

/**
 * DeviceDispense - A record of dispensation of a device - i.e., assigning a device to a patient, or to a professional for their use.
 *
 * @see https://hl7.org/fhir/R5/devicedispense.html
 *
 * @example
 * const deviceDispense = new DeviceDispense({
 *   // ... properties
 * });
 */
export class DeviceDispense extends DomainResource implements IDeviceDispense {
  readonly resourceType = 'DeviceDispense' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this dispensation */
  identifier?: IIdentifier[];

  /** The order or request that this dispense is fulfilling */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest'>[];

  /** The bigger event that this dispense is a part of */
  partOf?: IReference<'Procedure'>[];

  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown */
  status: DeviceDispenseStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Why a dispense was or was not performed */
  statusReason?: ICodeableReference;

  /** Type of device dispense */
  category?: ICodeableConcept[];

  /** What device was supplied */
  device: ICodeableReference;

  /** Who the dispense is for */
  subject: IReference<'Patient' | 'Practitioner'>;

  /** Who collected the device or where the medication was delivered */
  receiver?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>;

  /** Encounter associated with event */
  encounter?: IReference<'Encounter'>;

  /** Information that supports the dispensing of the device */
  supportingInformation?: IReference<'Resource'>[];

  /** Who performed event */
  performer?: IDeviceDispensePerformer[];

  /** Where the dispense occurred */
  location?: IReference<'Location'>;

  /** Trial fill, partial fill, emergency fill, etc */
  type?: ICodeableConcept;

  /** Amount dispensed */
  quantity?: IQuantity;

  /** When product was packaged and reviewed */
  preparedDate?: string;

  /** Extension for preparedDate */
  _preparedDate?: IElement;

  /** When product was given out */
  whenHandedOver?: string;

  /** Extension for whenHandedOver */
  _whenHandedOver?: IElement;

  /** Where the device was sent or should be sent */
  destination?: IReference<'Location'>;

  /** Information about the dispense */
  note?: IAnnotation[];

  /** Full representation of the usage instructions */
  usageInstruction?: string;

  /** Extension for usageInstruction */
  _usageInstruction?: IElement;

  /** A list of relevant lifecycle events */
  eventHistory?: IReference<'Provenance'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDeviceDispense>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DISPENSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDispense from a JSON object
   */
  static fromJSON(json: IDeviceDispense): DeviceDispense {
    return new DeviceDispense(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDispense with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDispense>): DeviceDispense {
    return new DeviceDispense({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDispense by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDispense) => Partial<IDeviceDispense>): DeviceDispense {
    const currentData = this.toJSON();
    return new DeviceDispense({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDispense)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDispense {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_DISPENSE_PROPERTIES);
    return result as IDeviceDispense;
  }

  /**
   * Create a deep clone of this DeviceDispense
   */
  clone(): DeviceDispense {
    return new DeviceDispense(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDispense
   */
  toString(): string {
    const parts: string[] = ['DeviceDispense'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
