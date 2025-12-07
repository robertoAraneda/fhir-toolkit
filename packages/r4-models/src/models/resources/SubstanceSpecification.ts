import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  ISubstanceSpecification,
  ISubstanceSpecificationCode,
  ISubstanceSpecificationMoiety,
  ISubstanceSpecificationName,
  ISubstanceSpecificationProperty,
  ISubstanceSpecificationRelationship,
  ISubstanceSpecificationStructure,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecification */
const SUBSTANCE_SPECIFICATION_PROPERTIES = [
  'identifier',
  'type',
  'status',
  'domain',
  'description',
  '_description',
  'source',
  'comment',
  '_comment',
  'moiety',
  'property',
  'referenceInformation',
  'structure',
  'code',
  'name',
  'molecularWeight',
  'relationship',
  'nucleicAcid',
  'polymer',
  'protein',
  'sourceMaterial',
] as const;

/**
 * SubstanceSpecification - The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * @see https://hl7.org/fhir/R4/substancespecification.html
 *
 * @example
 * const substanceSpecification = new SubstanceSpecification({
 *   // ... properties
 * });
 */
export class SubstanceSpecification extends DomainResource implements ISubstanceSpecification {
  readonly resourceType = 'SubstanceSpecification' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier by which this substance is known */
  identifier?: IIdentifier;

  /** High level categorization, e.g. polymer or nucleic acid */
  type?: ICodeableConcept;

  /** Status of substance within the catalogue e.g. approved */
  status?: ICodeableConcept;

  /** If the substance applies to only human or veterinary use */
  domain?: ICodeableConcept;

  /** Textual description of the substance */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  /** Textual comment about this record of a substance */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Moiety, for structural modifications */
  moiety?: ISubstanceSpecificationMoiety[];

  /** General specifications for this substance, including how it is related to other substances */
  property?: ISubstanceSpecificationProperty[];

  /** General information detailing this substance */
  referenceInformation?: IReference<'SubstanceReferenceInformation'>;

  /** Structural information */
  structure?: ISubstanceSpecificationStructure;

  /** Codes associated with the substance */
  code?: ISubstanceSpecificationCode[];

  /** Names applicable to this substance */
  name?: ISubstanceSpecificationName[];

  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight[];

  /** A link between this substance and another, with details of the relationship */
  relationship?: ISubstanceSpecificationRelationship[];

  /** Data items specific to nucleic acids */
  nucleicAcid?: IReference<'SubstanceNucleicAcid'>;

  /** Data items specific to polymers */
  polymer?: IReference<'SubstancePolymer'>;

  /** Data items specific to proteins */
  protein?: IReference<'SubstanceProtein'>;

  /** Material or taxonomic/anatomical source for the substance */
  sourceMaterial?: IReference<'SubstanceSourceMaterial'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubstanceSpecification>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecification from a JSON object
   */
  static fromJSON(json: ISubstanceSpecification): SubstanceSpecification {
    return new SubstanceSpecification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecification>): SubstanceSpecification {
    return new SubstanceSpecification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecification) => Partial<ISubstanceSpecification>): SubstanceSpecification {
    const currentData = this.toJSON();
    return new SubstanceSpecification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecification {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_PROPERTIES);
    return result as ISubstanceSpecification;
  }

  /**
   * Create a deep clone of this SubstanceSpecification
   */
  clone(): SubstanceSpecification {
    return new SubstanceSpecification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecification
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecification'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
