import { DomainResource } from '../base/DomainResource.js';
import type {
  IAdministrableProductDefinition,
  IAdministrableProductDefinitionProperty,
  IAdministrableProductDefinitionRouteOfAdministration,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AdministrableProductDefinition */
const ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'formOf',
  'administrableDoseForm',
  'unitOfPresentation',
  'producedFrom',
  'ingredient',
  'device',
  'property',
  'routeOfAdministration',
] as const;

/**
 * AdministrableProductDefinition - A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinition.html
 *
 * @example
 * const administrableProductDefinition = new AdministrableProductDefinition({
 *   // ... properties
 * });
 */
export class AdministrableProductDefinition extends DomainResource implements IAdministrableProductDefinition {
  readonly resourceType = 'AdministrableProductDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for the administrable product */
  identifier?: IIdentifier[];

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product */
  formOf?: IReference<'MedicinalProductDefinition'>[];

  /** The dose form of the final product after necessary reconstitution or processing */
  administrableDoseForm?: ICodeableConcept;

  /** The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' */
  unitOfPresentation?: ICodeableConcept;

  /** Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form */
  producedFrom?: IReference<'ManufacturedItemDefinition'>[];

  /** The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource */
  ingredient?: ICodeableConcept[];

  /** A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product */
  device?: IReference<'DeviceDefinition'>;

  /** Characteristics e.g. a product's onset of action */
  property?: IAdministrableProductDefinitionProperty[];

  /** The path by which the product is taken into or makes contact with the body */
  routeOfAdministration: IAdministrableProductDefinitionRouteOfAdministration[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAdministrableProductDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdministrableProductDefinition from a JSON object
   */
  static fromJSON(json: IAdministrableProductDefinition): AdministrableProductDefinition {
    return new AdministrableProductDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdministrableProductDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdministrableProductDefinition>): AdministrableProductDefinition {
    return new AdministrableProductDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdministrableProductDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdministrableProductDefinition) => Partial<IAdministrableProductDefinition>): AdministrableProductDefinition {
    const currentData = this.toJSON();
    return new AdministrableProductDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdministrableProductDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdministrableProductDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ADMINISTRABLE_PRODUCT_DEFINITION_PROPERTIES);
    return result as IAdministrableProductDefinition;
  }

  /**
   * Create a deep clone of this AdministrableProductDefinition
   */
  clone(): AdministrableProductDefinition {
    return new AdministrableProductDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdministrableProductDefinition
   */
  toString(): string {
    const parts: string[] = ['AdministrableProductDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
