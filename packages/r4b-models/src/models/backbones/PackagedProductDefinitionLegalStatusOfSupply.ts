import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IPackagedProductDefinitionLegalStatusOfSupply,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinitionLegalStatusOfSupply */
const PACKAGED_PRODUCT_DEFINITION_LEGAL_STATUS_OF_SUPPLY_PROPERTIES = [
  'code',
  'jurisdiction',
] as const;

/**
 * PackagedProductDefinitionLegalStatusOfSupply - The legal status of supply of the packaged item as classified by the regulator
 *
 * @see https://hl7.org/fhir/R4B/packagedproductdefinitionlegalstatusofsupply.html
 *
 * @example
 * const packagedProductDefinitionLegalStatusOfSupply = new PackagedProductDefinitionLegalStatusOfSupply({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionLegalStatusOfSupply extends BackboneElement implements IPackagedProductDefinitionLegalStatusOfSupply {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual status of supply. In what situation this package type may be supplied for use */
  code?: ICodeableConcept;

  /** The place where the legal status of supply applies */
  jurisdiction?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionLegalStatusOfSupply>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_LEGAL_STATUS_OF_SUPPLY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionLegalStatusOfSupply from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionLegalStatusOfSupply): PackagedProductDefinitionLegalStatusOfSupply {
    return new PackagedProductDefinitionLegalStatusOfSupply(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionLegalStatusOfSupply with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionLegalStatusOfSupply>): PackagedProductDefinitionLegalStatusOfSupply {
    return new PackagedProductDefinitionLegalStatusOfSupply({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionLegalStatusOfSupply by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionLegalStatusOfSupply) => Partial<IPackagedProductDefinitionLegalStatusOfSupply>): PackagedProductDefinitionLegalStatusOfSupply {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionLegalStatusOfSupply({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionLegalStatusOfSupply)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionLegalStatusOfSupply {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_LEGAL_STATUS_OF_SUPPLY_PROPERTIES);
    return result as IPackagedProductDefinitionLegalStatusOfSupply;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionLegalStatusOfSupply
   */
  clone(): PackagedProductDefinitionLegalStatusOfSupply {
    return new PackagedProductDefinitionLegalStatusOfSupply(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionLegalStatusOfSupply
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionLegalStatusOfSupply'];
    return parts.join(', ');
  }
}
