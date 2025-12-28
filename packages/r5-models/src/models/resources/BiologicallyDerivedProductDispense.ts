import { DomainResource } from '../base/DomainResource.js';
import type {
  BiologicallyDerivedProductDispenseType,
  IAnnotation,
  IBiologicallyDerivedProductDispense,
  IBiologicallyDerivedProductDispensePerformer,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BiologicallyDerivedProductDispense */
const BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'originRelationshipType',
  'product',
  'patient',
  'matchStatus',
  'performer',
  'location',
  'quantity',
  'preparedDate',
  '_preparedDate',
  'whenHandedOver',
  '_whenHandedOver',
  'destination',
  'note',
  'usageInstruction',
  '_usageInstruction',
] as const;

/**
 * BiologicallyDerivedProductDispense - This resource reflects an instance of a biologically derived product dispense. The supply or dispense of a biologically derived product from the supply organization or department (e.g. hospital transfusion laboratory) to the clinical team responsible for clinical application.
 *
 * @see https://hl7.org/fhir/R5/biologicallyderivedproductdispense.html
 *
 * @example
 * const biologicallyDerivedProductDispense = new BiologicallyDerivedProductDispense({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductDispense extends DomainResource implements IBiologicallyDerivedProductDispense {
  readonly resourceType = 'BiologicallyDerivedProductDispense' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this dispense */
  identifier?: IIdentifier[];

  /** The order or request that this dispense is fulfilling */
  basedOn?: IReference<'ServiceRequest'>[];

  /** Short description */
  partOf?: IReference<'BiologicallyDerivedProductDispense'>[];

  /** preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown */
  status: BiologicallyDerivedProductDispenseType;

  /** Extension for status */
  _status?: IElement;

  /** Relationship between the donor and intended recipient */
  originRelationshipType?: ICodeableConcept;

  /** The BiologicallyDerivedProduct that is dispensed */
  product: IReference<'BiologicallyDerivedProduct'>;

  /** The intended recipient of the dispensed product */
  patient: IReference<'Patient'>;

  /** Indicates the type of matching associated with the dispense */
  matchStatus?: ICodeableConcept;

  /** Indicates who or what performed an action */
  performer?: IBiologicallyDerivedProductDispensePerformer[];

  /** Where the dispense occurred */
  location?: IReference<'Location'>;

  /** Amount dispensed */
  quantity?: IQuantity;

  /** When product was selected/matched */
  preparedDate?: string;

  /** Extension for preparedDate */
  _preparedDate?: IElement;

  /** When the product was dispatched */
  whenHandedOver?: string;

  /** Extension for whenHandedOver */
  _whenHandedOver?: IElement;

  /** Where the product was dispatched to */
  destination?: IReference<'Location'>;

  /** Additional notes */
  note?: IAnnotation[];

  /** Specific instructions for use */
  usageInstruction?: string;

  /** Extension for usageInstruction */
  _usageInstruction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IBiologicallyDerivedProductDispense>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductDispense from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductDispense): BiologicallyDerivedProductDispense {
    return new BiologicallyDerivedProductDispense(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductDispense with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductDispense>): BiologicallyDerivedProductDispense {
    return new BiologicallyDerivedProductDispense({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductDispense by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductDispense) => Partial<IBiologicallyDerivedProductDispense>): BiologicallyDerivedProductDispense {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductDispense({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductDispense)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductDispense {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PROPERTIES);
    return result as IBiologicallyDerivedProductDispense;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductDispense
   */
  clone(): BiologicallyDerivedProductDispense {
    return new BiologicallyDerivedProductDispense(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductDispense
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductDispense'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
