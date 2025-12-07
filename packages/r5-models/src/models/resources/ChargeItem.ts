import { DomainResource } from '../base/DomainResource.js';
import type {
  ChargeItemStatusType,
  IAnnotation,
  IChargeItem,
  IChargeItemPerformer,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IMonetaryComponent,
  IPeriod,
  IQuantity,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ChargeItem */
const CHARGE_ITEM_PROPERTIES = [
  'identifier',
  'definitionUri',
  '_definitionUri',
  'definitionCanonical',
  '_definitionCanonical',
  'status',
  '_status',
  'partOf',
  'code',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'performer',
  'performingOrganization',
  'requestingOrganization',
  'costCenter',
  'quantity',
  'bodysite',
  'unitPriceComponent',
  'totalPriceComponent',
  'overrideReason',
  'enterer',
  'enteredDate',
  '_enteredDate',
  'reason',
  'service',
  'product',
  'account',
  'note',
  'supportingInformation',
] as const;

/**
 * ChargeItem - The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 *
 * @see https://hl7.org/fhir/R4/chargeitem.html
 *
 * @example
 * const chargeItem = new ChargeItem({
 *   resourceType: 'ChargeItem',
 *   // ... properties
 * });
 */
export class ChargeItem extends DomainResource implements IChargeItem {
  readonly resourceType = 'ChargeItem' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for item */
  identifier?: IIdentifier[];

  /** Defining information about the code of this charge item */
  definitionUri?: string[];

  /** Extension for definitionUri */
  _definitionUri?: IElement;

  /** Resource defining the code of this ChargeItem */
  definitionCanonical?: string[];

  /** Extension for definitionCanonical */
  _definitionCanonical?: IElement;

  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
  status: ChargeItemStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Part of referenced ChargeItem */
  partOf?: IReference<'ChargeItem'>[];

  /** A code that identifies the charge, like a billing code */
  code: ICodeableConcept;

  /** Individual service was done for/to */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter associated with this ChargeItem */
  encounter?: IReference<'Encounter'>;

  /** When the charged service was applied */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When the charged service was applied */
  occurrencePeriod?: IPeriod;

  /** When the charged service was applied */
  occurrenceTiming?: ITiming;

  /** Who performed charged service */
  performer?: IChargeItemPerformer[];

  /** Organization providing the charged service */
  performingOrganization?: IReference<'Organization'>;

  /** Organization requesting the charged service */
  requestingOrganization?: IReference<'Organization'>;

  /** Organization that has ownership of the (potential, future) revenue */
  costCenter?: IReference<'Organization'>;

  /** Quantity of which the charge item has been serviced */
  quantity?: IQuantity;

  /** Anatomical location, if relevant */
  bodysite?: ICodeableConcept[];

  /** Unit price overriding the associated rules */
  unitPriceComponent?: IMonetaryComponent;

  /** Total price overriding the associated rules */
  totalPriceComponent?: IMonetaryComponent;

  /** Reason for overriding the list price/factor */
  overrideReason?: ICodeableConcept;

  /** Individual who was entering */
  enterer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** Date the charge item was entered */
  enteredDate?: string;

  /** Extension for enteredDate */
  _enteredDate?: IElement;

  /** Why was the charged  service rendered? */
  reason?: ICodeableConcept[];

  /** Which rendered service is being charged? */
  service?: ICodeableReference[];

  /** Product charged */
  product?: ICodeableReference[];

  /** Account to place this charge */
  account?: IReference<'Account'>[];

  /** Comments made about the ChargeItem */
  note?: IAnnotation[];

  /** Further information supporting this charge */
  supportingInformation?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IChargeItem>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItem from a JSON object
   */
  static fromJSON(json: IChargeItem): ChargeItem {
    return new ChargeItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItem>): ChargeItem {
    return new ChargeItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItem) => Partial<IChargeItem>): ChargeItem {
    const currentData = this.toJSON();
    return new ChargeItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItem {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_PROPERTIES);
    return result as IChargeItem;
  }

  /**
   * Create a deep clone of this ChargeItem
   */
  clone(): ChargeItem {
    return new ChargeItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItem
   */
  toString(): string {
    const parts: string[] = ['ChargeItem'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
