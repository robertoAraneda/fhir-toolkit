import { DomainResource } from '../base/DomainResource.js';
import type {
  IChargeItemDefinition,
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroup,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ChargeItemDefinition */
const CHARGE_ITEM_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'title',
  '_title',
  'derivedFromUri',
  '_derivedFromUri',
  'partOf',
  '_partOf',
  'replaces',
  '_replaces',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'code',
  'instance',
  'applicability',
  'propertyGroup',
] as const;

/**
 * ChargeItemDefinition - The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 *
 * @see https://hl7.org/fhir/R4/chargeitemdefinition.html
 *
 * @example
 * const chargeItemDefinition = new ChargeItemDefinition({
 *   // ... properties
 * });
 */
export class ChargeItemDefinition extends DomainResource implements IChargeItemDefinition {
  readonly resourceType = 'ChargeItemDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the charge item definition */
  identifier?: IIdentifier[];

  /** Business version of the charge item definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this charge item definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Underlying externally-defined charge item definition */
  derivedFromUri?: string[];

  /** Extension for derivedFromUri */
  _derivedFromUri?: IElement;

  /** A larger definition of which this particular definition is a component or step */
  partOf?: string[];

  /** Extension for partOf */
  _partOf?: IElement;

  /** Completed or terminated request(s) whose function is taken by this new request */
  replaces?: string[];

  /** Extension for replaces */
  _replaces?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the charge item definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for charge item definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the charge item definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the charge item definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the charge item definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** Billing codes or product types this definition applies to */
  code?: ICodeableConcept;

  /** Instances this definition applies to */
  instance?: IReference<'Medication' | 'Substance' | 'Device'>[];

  /** Whether or not the billing code is applicable */
  applicability?: IChargeItemDefinitionApplicability[];

  /** Group of properties which are applicable under the same conditions */
  propertyGroup?: IChargeItemDefinitionPropertyGroup[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IChargeItemDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItemDefinition from a JSON object
   */
  static fromJSON(json: IChargeItemDefinition): ChargeItemDefinition {
    return new ChargeItemDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItemDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItemDefinition>): ChargeItemDefinition {
    return new ChargeItemDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItemDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItemDefinition) => Partial<IChargeItemDefinition>): ChargeItemDefinition {
    const currentData = this.toJSON();
    return new ChargeItemDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItemDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItemDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_DEFINITION_PROPERTIES);
    return result as IChargeItemDefinition;
  }

  /**
   * Create a deep clone of this ChargeItemDefinition
   */
  clone(): ChargeItemDefinition {
    return new ChargeItemDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItemDefinition
   */
  toString(): string {
    const parts: string[] = ['ChargeItemDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
