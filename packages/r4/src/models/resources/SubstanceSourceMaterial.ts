import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  ISubstanceSourceMaterial,
  ISubstanceSourceMaterialFractionDescription,
  ISubstanceSourceMaterialOrganism,
  ISubstanceSourceMaterialPartDescription,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSourceMaterial */
const SUBSTANCE_SOURCE_MATERIAL_PROPERTIES = [
  'sourceMaterialClass',
  'sourceMaterialType',
  'sourceMaterialState',
  'organismId',
  'organismName',
  '_organismName',
  'parentSubstanceId',
  'parentSubstanceName',
  '_parentSubstanceName',
  'countryOfOrigin',
  'geographicalLocation',
  '_geographicalLocation',
  'developmentStage',
  'fractionDescription',
  'organism',
  'partDescription',
] as const;

/**
 * SubstanceSourceMaterial - Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerial.html
 *
 * @example
 * const substanceSourceMaterial = new SubstanceSourceMaterial({
 *   resourceType: 'SubstanceSourceMaterial',
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterial extends DomainResource implements ISubstanceSourceMaterial {
  readonly resourceType = 'SubstanceSourceMaterial' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** General high level classification of the source material specific to the origin of the material */
  sourceMaterialClass?: ICodeableConcept;

  /** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent */
  sourceMaterialType?: ICodeableConcept;

  /** The state of the source material when extracted */
  sourceMaterialState?: ICodeableConcept;

  /** The unique identifier associated with the source material parent organism shall be specified */
  organismId?: IIdentifier;

  /** The organism accepted Scientific name shall be provided based on the organism taxonomy */
  organismName?: string;

  /** Extension for organismName */
  _organismName?: IElement;

  /** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) */
  parentSubstanceId?: IIdentifier[];

  /** The parent substance of the Herbal Drug, or Herbal preparation */
  parentSubstanceName?: string[];

  /** Extension for parentSubstanceName */
  _parentSubstanceName?: IElement;

  /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate */
  countryOfOrigin?: ICodeableConcept[];

  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat */
  geographicalLocation?: string[];

  /** Extension for geographicalLocation */
  _geographicalLocation?: IElement;

  /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) */
  developmentStage?: ICodeableConcept;

  /** Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels */
  fractionDescription?: ISubstanceSourceMaterialFractionDescription[];

  /** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf */
  organism?: ISubstanceSourceMaterialOrganism;

  /** To do */
  partDescription?: ISubstanceSourceMaterialPartDescription[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterial>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterial from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterial): SubstanceSourceMaterial {
    return new SubstanceSourceMaterial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterial>): SubstanceSourceMaterial {
    return new SubstanceSourceMaterial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterial) => Partial<ISubstanceSourceMaterial>): SubstanceSourceMaterial {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterial {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_PROPERTIES);
    return result as ISubstanceSourceMaterial;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterial
   */
  clone(): SubstanceSourceMaterial {
    return new SubstanceSourceMaterial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterial
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterial'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
