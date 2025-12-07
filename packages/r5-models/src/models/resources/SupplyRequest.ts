import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IQuantity,
  IReference,
  ISupplyRequest,
  ISupplyRequestParameter,
  ITiming,
  RequestPriorityType,
  SupplyRequestStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SupplyRequest */
const SUPPLY_REQUEST_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'basedOn',
  'category',
  'priority',
  '_priority',
  'deliverFor',
  'item',
  'quantity',
  'parameter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'authoredOn',
  '_authoredOn',
  'requester',
  'supplier',
  'reason',
  'deliverFrom',
  'deliverTo',
] as const;

/**
 * SupplyRequest - A record of a request to deliver a medication, substance or device used in the healthcare setting to a particular destination for a particular person or organization.
 *
 * @see https://hl7.org/fhir/R4/supplyrequest.html
 *
 * @example
 * const supplyRequest = new SupplyRequest({
 *   resourceType: 'SupplyRequest',
 *   // ... properties
 * });
 */
export class SupplyRequest extends DomainResource implements ISupplyRequest {
  readonly resourceType = 'SupplyRequest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for SupplyRequest */
  identifier?: IIdentifier[];

  /** draft | active | suspended + */
  status?: SupplyRequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** What other request is fulfilled by this supply request */
  basedOn?: IReference<'Resource'>[];

  /** The kind of supply (central, non-stock, etc.) */
  category?: ICodeableConcept;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** The patient for who the supply request is for */
  deliverFor?: IReference<'Patient'>;

  /** Medication, Substance, or Device requested to be supplied */
  item: ICodeableReference;

  /** The requested amount of the item indicated */
  quantity: IQuantity;

  /** Ordered item details */
  parameter?: ISupplyRequestParameter[];

  /** When the request should be fulfilled */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When the request should be fulfilled */
  occurrencePeriod?: IPeriod;

  /** When the request should be fulfilled */
  occurrenceTiming?: ITiming;

  /** When the request was made */
  authoredOn?: string;

  /** Extension for authoredOn */
  _authoredOn?: IElement;

  /** Individual making the request */
  requester?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device' | 'CareTeam'>;

  /** Who is intended to fulfill the request */
  supplier?: IReference<'Organization' | 'HealthcareService'>[];

  /** The reason why the supply item was requested */
  reason?: ICodeableReference[];

  /** The origin of the supply */
  deliverFrom?: IReference<'Organization' | 'Location'>;

  /** The destination of the supply */
  deliverTo?: IReference<'Organization' | 'Location' | 'Patient' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISupplyRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, SUPPLY_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SupplyRequest from a JSON object
   */
  static fromJSON(json: ISupplyRequest): SupplyRequest {
    return new SupplyRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SupplyRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISupplyRequest>): SupplyRequest {
    return new SupplyRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SupplyRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISupplyRequest) => Partial<ISupplyRequest>): SupplyRequest {
    const currentData = this.toJSON();
    return new SupplyRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISupplyRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISupplyRequest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUPPLY_REQUEST_PROPERTIES);
    return result as ISupplyRequest;
  }

  /**
   * Create a deep clone of this SupplyRequest
   */
  clone(): SupplyRequest {
    return new SupplyRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SupplyRequest
   */
  toString(): string {
    const parts: string[] = ['SupplyRequest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
