import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  ISubstanceDefinition,
  ISubstanceDefinitionCharacterization,
  ISubstanceDefinitionCode,
  ISubstanceDefinitionMoiety,
  ISubstanceDefinitionMolecularWeight,
  ISubstanceDefinitionName,
  ISubstanceDefinitionProperty,
  ISubstanceDefinitionRelationship,
  ISubstanceDefinitionSourceMaterial,
  ISubstanceDefinitionStructure,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinition */
const SUBSTANCE_DEFINITION_PROPERTIES = [
  'identifier',
  'version',
  '_version',
  'status',
  'classification',
  'domain',
  'grade',
  'description',
  '_description',
  'informationSource',
  'note',
  'manufacturer',
  'supplier',
  'moiety',
  'characterization',
  'property',
  'referenceInformation',
  'molecularWeight',
  'structure',
  'code',
  'name',
  'relationship',
  'nucleicAcid',
  'polymer',
  'protein',
  'sourceMaterial',
] as const;

/**
 * SubstanceDefinition - The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * @see https://hl7.org/fhir/R4/substancedefinition.html
 *
 * @example
 * const substanceDefinition = new SubstanceDefinition({
 *   resourceType: 'SubstanceDefinition',
 *   // ... properties
 * });
 */
export class SubstanceDefinition extends DomainResource implements ISubstanceDefinition {
  readonly resourceType = 'SubstanceDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier by which this substance is known */
  identifier?: IIdentifier[];

  /** A business level version identifier of the substance */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Status of substance within the catalogue e.g. active, retired */
  status?: ICodeableConcept;

  /** A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity */
  classification?: ICodeableConcept[];

  /** If the substance applies to human or veterinary use */
  domain?: ICodeableConcept;

  /** The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP) */
  grade?: ICodeableConcept[];

  /** Textual description of the substance */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Supporting literature */
  informationSource?: IReference<'Citation'>[];

  /** Textual comment about the substance's catalogue or registry record */
  note?: IAnnotation[];

  /** The entity that creates, makes, produces or fabricates the substance */
  manufacturer?: IReference<'Organization'>[];

  /** An entity that is the source for the substance. It may be different from the manufacturer */
  supplier?: IReference<'Organization'>[];

  /** Moiety, for structural modifications */
  moiety?: ISubstanceDefinitionMoiety[];

  /** General specifications for this substance */
  characterization?: ISubstanceDefinitionCharacterization[];

  /** General specifications for this substance */
  property?: ISubstanceDefinitionProperty[];

  /** General information detailing this substance */
  referenceInformation?: IReference<'SubstanceReferenceInformation'>;

  /** The average mass of a molecule of a compound */
  molecularWeight?: ISubstanceDefinitionMolecularWeight[];

  /** Structural information */
  structure?: ISubstanceDefinitionStructure;

  /** Codes associated with the substance */
  code?: ISubstanceDefinitionCode[];

  /** Names applicable to this substance */
  name?: ISubstanceDefinitionName[];

  /** A link between this substance and another */
  relationship?: ISubstanceDefinitionRelationship[];

  /** Data items specific to nucleic acids */
  nucleicAcid?: IReference<'SubstanceNucleicAcid'>;

  /** Data items specific to polymers */
  polymer?: IReference<'SubstancePolymer'>;

  /** Data items specific to proteins */
  protein?: IReference<'SubstanceProtein'>;

  /** Material or taxonomic/anatomical source */
  sourceMaterial?: ISubstanceDefinitionSourceMaterial;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinition from a JSON object
   */
  static fromJSON(json: ISubstanceDefinition): SubstanceDefinition {
    return new SubstanceDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinition>): SubstanceDefinition {
    return new SubstanceDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinition) => Partial<ISubstanceDefinition>): SubstanceDefinition {
    const currentData = this.toJSON();
    return new SubstanceDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_PROPERTIES);
    return result as ISubstanceDefinition;
  }

  /**
   * Create a deep clone of this SubstanceDefinition
   */
  clone(): SubstanceDefinition {
    return new SubstanceDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinition
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
