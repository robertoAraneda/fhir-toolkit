import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ISupplyDelivery,
  ISupplyDeliverySuppliedItem,
  ITiming,
  SupplyDeliveryStatusType,
  SupplyDeliverySupplyItemTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SupplyDelivery */
const SUPPLY_DELIVERY_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'patient',
  'type',
  'suppliedItem',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'supplier',
  'destination',
  'receiver',
] as const;

/**
 * SupplyDelivery - Record of delivery of what is supplied.
 *
 * @see https://hl7.org/fhir/R4/supplydelivery.html
 *
 * @example
 * const supplyDelivery = new SupplyDelivery({
 *   resourceType: 'SupplyDelivery',
 *   // ... properties
 * });
 */
export class SupplyDelivery extends DomainResource implements ISupplyDelivery {
  readonly resourceType = 'SupplyDelivery' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Fulfills plan, proposal or order */
  basedOn?: IReference<'SupplyRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'SupplyDelivery' | 'Contract'>[];

  /** in-progress | completed | abandoned | entered-in-error */
  status?: SupplyDeliveryStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Patient for whom the item is supplied */
  patient?: IReference<'Patient'>;

  /** Category of supply event */
  type?: ICodeableConcept<SupplyDeliverySupplyItemTypeType>;

  /** The item that is delivered or supplied */
  suppliedItem?: ISupplyDeliverySuppliedItem[];

  /** When event occurred */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When event occurred */
  occurrencePeriod?: IPeriod;

  /** When event occurred */
  occurrenceTiming?: ITiming;

  /** The item supplier */
  supplier?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Where the delivery was sent */
  destination?: IReference<'Location'>;

  /** Who received the delivery */
  receiver?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISupplyDelivery>) {
    super(data);
    if (data) {
      this.assignProps(data, SUPPLY_DELIVERY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SupplyDelivery from a JSON object
   */
  static fromJSON(json: ISupplyDelivery): SupplyDelivery {
    return new SupplyDelivery(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SupplyDelivery with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISupplyDelivery>): SupplyDelivery {
    return new SupplyDelivery({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SupplyDelivery by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISupplyDelivery) => Partial<ISupplyDelivery>): SupplyDelivery {
    const currentData = this.toJSON();
    return new SupplyDelivery({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISupplyDelivery)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISupplyDelivery {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUPPLY_DELIVERY_PROPERTIES);
    return result as ISupplyDelivery;
  }

  /**
   * Create a deep clone of this SupplyDelivery
   */
  clone(): SupplyDelivery {
    return new SupplyDelivery(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SupplyDelivery
   */
  toString(): string {
    const parts: string[] = ['SupplyDelivery'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
