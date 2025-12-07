import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInventoryItemResponsibleOrganization,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemResponsibleOrganization */
const INVENTORY_ITEM_RESPONSIBLE_ORGANIZATION_PROPERTIES = [
  'role',
  'organization',
] as const;

/**
 * InventoryItemResponsibleOrganization - Organization(s) responsible for the product
 *
 * @see https://hl7.org/fhir/R4/inventoryitemresponsibleorganization.html
 *
 * @example
 * const inventoryItemResponsibleOrganization = new InventoryItemResponsibleOrganization({
 *   // ... properties
 * });
 */
export class InventoryItemResponsibleOrganization extends BackboneElement implements IInventoryItemResponsibleOrganization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The role of the organization e.g. manufacturer, distributor, or other */
  role: ICodeableConcept;

  /** An organization that is associated with the item */
  organization: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemResponsibleOrganization>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_RESPONSIBLE_ORGANIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemResponsibleOrganization from a JSON object
   */
  static fromJSON(json: IInventoryItemResponsibleOrganization): InventoryItemResponsibleOrganization {
    return new InventoryItemResponsibleOrganization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemResponsibleOrganization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemResponsibleOrganization>): InventoryItemResponsibleOrganization {
    return new InventoryItemResponsibleOrganization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemResponsibleOrganization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemResponsibleOrganization) => Partial<IInventoryItemResponsibleOrganization>): InventoryItemResponsibleOrganization {
    const currentData = this.toJSON();
    return new InventoryItemResponsibleOrganization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemResponsibleOrganization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemResponsibleOrganization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_RESPONSIBLE_ORGANIZATION_PROPERTIES);
    return result as IInventoryItemResponsibleOrganization;
  }

  /**
   * Create a deep clone of this InventoryItemResponsibleOrganization
   */
  clone(): InventoryItemResponsibleOrganization {
    return new InventoryItemResponsibleOrganization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemResponsibleOrganization
   */
  toString(): string {
    const parts: string[] = ['InventoryItemResponsibleOrganization'];
    return parts.join(', ');
  }
}
