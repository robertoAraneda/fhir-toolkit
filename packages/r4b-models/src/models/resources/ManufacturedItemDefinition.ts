import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IManufacturedItemDefinition,
  IManufacturedItemDefinitionProperty,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ManufacturedItemDefinition */
const MANUFACTURED_ITEM_DEFINITION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'manufacturedDoseForm',
  'unitOfPresentation',
  'manufacturer',
  'ingredient',
  'property',
] as const;

/**
 * ManufacturedItemDefinition - The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 *
 * @see https://hl7.org/fhir/R4B/manufactureditemdefinition.html
 *
 * @example
 * const manufacturedItemDefinition = new ManufacturedItemDefinition({
 *   // ... properties
 * });
 */
export class ManufacturedItemDefinition extends DomainResource implements IManufacturedItemDefinition {
  readonly resourceType = 'ManufacturedItemDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier */
  identifier?: IIdentifier[];

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Dose form as manufactured (before any necessary transformation) */
  manufacturedDoseForm: ICodeableConcept;

  /** The “real world” units in which the quantity of the item is described */
  unitOfPresentation?: ICodeableConcept;

  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
  manufacturer?: IReference<'Organization'>[];

  /** The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource */
  ingredient?: ICodeableConcept[];

  /** General characteristics of this item */
  property?: IManufacturedItemDefinitionProperty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IManufacturedItemDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MANUFACTURED_ITEM_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ManufacturedItemDefinition from a JSON object
   */
  static fromJSON(json: IManufacturedItemDefinition): ManufacturedItemDefinition {
    return new ManufacturedItemDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ManufacturedItemDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IManufacturedItemDefinition>): ManufacturedItemDefinition {
    return new ManufacturedItemDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ManufacturedItemDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IManufacturedItemDefinition) => Partial<IManufacturedItemDefinition>): ManufacturedItemDefinition {
    const currentData = this.toJSON();
    return new ManufacturedItemDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IManufacturedItemDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IManufacturedItemDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MANUFACTURED_ITEM_DEFINITION_PROPERTIES);
    return result as IManufacturedItemDefinition;
  }

  /**
   * Create a deep clone of this ManufacturedItemDefinition
   */
  clone(): ManufacturedItemDefinition {
    return new ManufacturedItemDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ManufacturedItemDefinition
   */
  toString(): string {
    const parts: string[] = ['ManufacturedItemDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
