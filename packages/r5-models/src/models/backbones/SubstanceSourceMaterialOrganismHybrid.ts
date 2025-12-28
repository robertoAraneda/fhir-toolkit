import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceSourceMaterialOrganismHybrid,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceSourceMaterialOrganismHybrid */
const SUBSTANCE_SOURCE_MATERIAL_ORGANISM_HYBRID_PROPERTIES = [
  'maternalOrganismId',
  '_maternalOrganismId',
  'maternalOrganismName',
  '_maternalOrganismName',
  'paternalOrganismId',
  '_paternalOrganismId',
  'paternalOrganismName',
  '_paternalOrganismName',
  'hybridType',
] as const;

/**
 * SubstanceSourceMaterialOrganismHybrid - 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 *
 * @see https://hl7.org/fhir/R5/substancesourcematerialorganismhybrid.html
 *
 * @example
 * const substanceSourceMaterialOrganismHybrid = new SubstanceSourceMaterialOrganismHybrid({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement implements ISubstanceSourceMaterialOrganismHybrid {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
  maternalOrganismId?: string;

  /** Extension for maternalOrganismId */
  _maternalOrganismId?: IElement;

  /** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
  maternalOrganismName?: string;

  /** Extension for maternalOrganismName */
  _maternalOrganismName?: IElement;

  /** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary */
  paternalOrganismId?: string;

  /** Extension for paternalOrganismId */
  _paternalOrganismId?: IElement;

  /** The name of the paternal species constituting the hybrid organism shall be specified */
  paternalOrganismName?: string;

  /** Extension for paternalOrganismName */
  _paternalOrganismName?: IElement;

  /** The hybrid type of an organism shall be specified */
  hybridType?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialOrganismHybrid>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_HYBRID_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialOrganismHybrid from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialOrganismHybrid): SubstanceSourceMaterialOrganismHybrid {
    return new SubstanceSourceMaterialOrganismHybrid(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialOrganismHybrid with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialOrganismHybrid>): SubstanceSourceMaterialOrganismHybrid {
    return new SubstanceSourceMaterialOrganismHybrid({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialOrganismHybrid by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialOrganismHybrid) => Partial<ISubstanceSourceMaterialOrganismHybrid>): SubstanceSourceMaterialOrganismHybrid {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialOrganismHybrid({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialOrganismHybrid)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialOrganismHybrid {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_HYBRID_PROPERTIES);
    return result as ISubstanceSourceMaterialOrganismHybrid;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialOrganismHybrid
   */
  clone(): SubstanceSourceMaterialOrganismHybrid {
    return new SubstanceSourceMaterialOrganismHybrid(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialOrganismHybrid
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialOrganismHybrid'];
    return parts.join(', ');
  }
}
