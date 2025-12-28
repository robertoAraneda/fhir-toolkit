import { DomainResource } from '../base/DomainResource.js';
import type {
  FormularyItemStatusType,
  ICodeableConcept,
  IElement,
  IFormularyItem,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/** Properties specific to FormularyItem */
const FORMULARY_ITEM_PROPERTIES = [
  'identifier',
  'code',
  'status',
  '_status',
] as const;

/**
 * FormularyItem - This resource describes a product or service that is available through a program and includes the conditions and constraints of availability.  All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself.
 *
 * @see https://hl7.org/fhir/R5/formularyitem.html
 *
 * @example
 * const formularyItem = new FormularyItem({
 *   // ... properties
 * });
 */
export class FormularyItem extends DomainResource implements IFormularyItem {
  readonly resourceType = 'FormularyItem' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this formulary item */
  identifier?: IIdentifier[];

  /** Codes that identify this formulary item */
  code?: ICodeableConcept;

  /** active | entered-in-error | inactive */
  status?: FormularyItemStatusType;

  /** Extension for status */
  _status?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IFormularyItem>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, FORMULARY_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create FormularyItem from a JSON object
   */
  static fromJSON(json: IFormularyItem): FormularyItem {
    return new FormularyItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new FormularyItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFormularyItem>): FormularyItem {
    return new FormularyItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new FormularyItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFormularyItem) => Partial<IFormularyItem>): FormularyItem {
    const currentData = this.toJSON();
    return new FormularyItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFormularyItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFormularyItem {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, FORMULARY_ITEM_PROPERTIES);
    return result as IFormularyItem;
  }

  /**
   * Create a deep clone of this FormularyItem
   */
  clone(): FormularyItem {
    return new FormularyItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the FormularyItem
   */
  toString(): string {
    const parts: string[] = ['FormularyItem'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
