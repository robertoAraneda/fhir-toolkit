import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceSourceMaterialOrganism,
  ISubstanceSourceMaterialOrganismAuthor,
  ISubstanceSourceMaterialOrganismHybrid,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSourceMaterialOrganism */
const SUBSTANCE_SOURCE_MATERIAL_ORGANISM_PROPERTIES = [
  'family',
  'genus',
  'species',
  'intraspecificType',
  'intraspecificDescription',
  '_intraspecificDescription',
  'author',
  'hybrid',
  'organismGeneral',
] as const;

/**
 * SubstanceSourceMaterialOrganism - This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialorganism.html
 *
 * @example
 * const substanceSourceMaterialOrganism = new SubstanceSourceMaterialOrganism({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialOrganism extends BackboneElement implements ISubstanceSourceMaterialOrganism {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The family of an organism shall be specified */
  family?: ICodeableConcept;

  /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies */
  genus?: ICodeableConcept;

  /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies */
  species?: ICodeableConcept;

  /** The Intraspecific type of an organism shall be specified */
  intraspecificType?: ICodeableConcept;

  /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention */
  intraspecificDescription?: string;

  /** Extension for intraspecificDescription */
  _intraspecificDescription?: IElement;

  /** 4.9.13.6.1 Author type (Conditional) */
  author?: ISubstanceSourceMaterialOrganismAuthor[];

  /** 4.9.13.8.1 Hybrid species maternal organism ID (Optional) */
  hybrid?: ISubstanceSourceMaterialOrganismHybrid;

  /** 4.9.13.7.1 Kingdom (Conditional) */
  organismGeneral?: ISubstanceSourceMaterialOrganismOrganismGeneral;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialOrganism>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialOrganism from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialOrganism): SubstanceSourceMaterialOrganism {
    return new SubstanceSourceMaterialOrganism(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialOrganism with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialOrganism>): SubstanceSourceMaterialOrganism {
    return new SubstanceSourceMaterialOrganism({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialOrganism by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialOrganism) => Partial<ISubstanceSourceMaterialOrganism>): SubstanceSourceMaterialOrganism {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialOrganism({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialOrganism)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialOrganism {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_PROPERTIES);
    return result as ISubstanceSourceMaterialOrganism;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialOrganism
   */
  clone(): SubstanceSourceMaterialOrganism {
    return new SubstanceSourceMaterialOrganism(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialOrganism
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialOrganism'];
    return parts.join(', ');
  }
}
