import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceDefinitionName,
  ISubstanceDefinitionNameOfficial,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionName */
const SUBSTANCE_DEFINITION_NAME_PROPERTIES = [
  'name',
  '_name',
  'type',
  'status',
  'preferred',
  '_preferred',
  'language',
  'domain',
  'jurisdiction',
  'synonym',
  'translation',
  'official',
  'source',
] as const;

/**
 * SubstanceDefinitionName - Names applicable to this substance
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionname.html
 *
 * @example
 * const substanceDefinitionName = new SubstanceDefinitionName({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionName extends BackboneElement implements ISubstanceDefinitionName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual name */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name type e.g. 'systematic',  'scientific, 'brand' */
  type?: ICodeableConcept;

  /** The status of the name e.g. 'current', 'proposed' */
  status?: ICodeableConcept;

  /** If this is the preferred name for this substance */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  /** Human language that the name is written in */
  language?: ICodeableConcept[];

  /** The use context of this name e.g. as an active ingredient or as a food colour additive */
  domain?: ICodeableConcept[];

  /** The jurisdiction where this name applies */
  jurisdiction?: ICodeableConcept[];

  /** A synonym of this particular name, by which the substance is also known */
  synonym?: ISubstanceDefinitionName[];

  /** A translation for this name into another human language */
  translation?: ISubstanceDefinitionName[];

  /** Details of the official nature of this name */
  official?: ISubstanceDefinitionNameOfficial[];

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionName>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionName from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionName): SubstanceDefinitionName {
    return new SubstanceDefinitionName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionName>): SubstanceDefinitionName {
    return new SubstanceDefinitionName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionName) => Partial<ISubstanceDefinitionName>): SubstanceDefinitionName {
    const currentData = this.toJSON();
    return new SubstanceDefinitionName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_NAME_PROPERTIES);
    return result as ISubstanceDefinitionName;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionName
   */
  clone(): SubstanceDefinitionName {
    return new SubstanceDefinitionName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionName
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionName'];
    return parts.join(', ');
  }
}
