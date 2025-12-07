import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IReference,
  ISlot,
  SlotStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Slot */
const SLOT_PROPERTIES = [
  'identifier',
  'serviceCategory',
  'serviceType',
  'specialty',
  'appointmentType',
  'schedule',
  'status',
  '_status',
  'start',
  '_start',
  'end',
  '_end',
  'overbooked',
  '_overbooked',
  'comment',
  '_comment',
] as const;

/**
 * Slot - A slot of time on a schedule that may be available for booking appointments.
 *
 * @see https://hl7.org/fhir/R4/slot.html
 *
 * @example
 * const slot = new Slot({
 *   // ... properties
 * });
 */
export class Slot extends DomainResource implements ISlot {
  readonly resourceType = 'Slot' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this item */
  identifier?: IIdentifier[];

  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: ICodeableConcept[];

  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource */
  serviceType?: ICodeableReference[];

  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: ICodeableConcept[];

  /** The style of appointment or patient that may be booked in the slot (not service type) */
  appointmentType?: ICodeableConcept[];

  /** The schedule resource that this slot defines an interval of status information */
  schedule: IReference<'Schedule'>;

  /** busy | free | busy-unavailable | busy-tentative | entered-in-error */
  status: SlotStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Date/Time that the slot is to begin */
  start: string;

  /** Extension for start */
  _start?: IElement;

  /** Date/Time that the slot is to conclude */
  end: string;

  /** Extension for end */
  _end?: IElement;

  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
  overbooked?: boolean;

  /** Extension for overbooked */
  _overbooked?: IElement;

  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISlot>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SLOT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Slot from a JSON object
   */
  static fromJSON(json: ISlot): Slot {
    return new Slot(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Slot with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISlot>): Slot {
    return new Slot({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Slot by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISlot) => Partial<ISlot>): Slot {
    const currentData = this.toJSON();
    return new Slot({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISlot)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISlot {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SLOT_PROPERTIES);
    return result as ISlot;
  }

  /**
   * Create a deep clone of this Slot
   */
  clone(): Slot {
    return new Slot(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Slot
   */
  toString(): string {
    const parts: string[] = ['Slot'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
