import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ILinkageItem,
  IReference,
  LinkageTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to LinkageItem */
const LINKAGE_ITEM_PROPERTIES = [
  'type',
  '_type',
  'resource',
] as const;

/**
 * LinkageItem - Item to be linked
 *
 * @see https://hl7.org/fhir/R5/linkageitem.html
 *
 * @example
 * const linkageItem = new LinkageItem({
 *   // ... properties
 * });
 */
export class LinkageItem extends BackboneElement implements ILinkageItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** source | alternate | historical */
  type: LinkageTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Resource being linked */
  resource: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ILinkageItem>) {
    super(data);
    if (data) {
      this.assignProps(data, LINKAGE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create LinkageItem from a JSON object
   */
  static fromJSON(json: ILinkageItem): LinkageItem {
    return new LinkageItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new LinkageItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILinkageItem>): LinkageItem {
    return new LinkageItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new LinkageItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILinkageItem) => Partial<ILinkageItem>): LinkageItem {
    const currentData = this.toJSON();
    return new LinkageItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILinkageItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILinkageItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, LINKAGE_ITEM_PROPERTIES);
    return result as ILinkageItem;
  }

  /**
   * Create a deep clone of this LinkageItem
   */
  clone(): LinkageItem {
    return new LinkageItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the LinkageItem
   */
  toString(): string {
    const parts: string[] = ['LinkageItem'];
    return parts.join(', ');
  }
}
