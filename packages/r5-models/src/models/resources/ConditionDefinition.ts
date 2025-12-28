import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IConditionDefinition,
  IConditionDefinitionMedication,
  IConditionDefinitionObservation,
  IConditionDefinitionPlan,
  IConditionDefinitionPrecondition,
  IConditionDefinitionQuestionnaire,
  IContactDetail,
  IElement,
  IIdentifier,
  IReference,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinition */
const CONDITION_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
  'name',
  '_name',
  'title',
  '_title',
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'code',
  'severity',
  'bodySite',
  'stage',
  'hasSeverity',
  '_hasSeverity',
  'hasBodySite',
  '_hasBodySite',
  'hasStage',
  '_hasStage',
  'definition',
  '_definition',
  'observation',
  'medication',
  'precondition',
  'team',
  'questionnaire',
  'plan',
] as const;

/**
 * ConditionDefinition - A definition of a condition and information relevant to managing it.
 *
 * @see https://hl7.org/fhir/R5/conditiondefinition.html
 *
 * @example
 * const conditionDefinition = new ConditionDefinition({
 *   // ... properties
 * });
 */
export class ConditionDefinition extends DomainResource implements IConditionDefinition {
  readonly resourceType = 'ConditionDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this condition definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the condition definition */
  identifier?: IIdentifier[];

  /** Business version of the condition definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this condition definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this condition definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the event definition */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the condition definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for condition definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Identification of the condition, problem or diagnosis */
  code: ICodeableConcept;

  /** Subjective severity of condition */
  severity?: ICodeableConcept;

  /** Anatomical location, if relevant */
  bodySite?: ICodeableConcept;

  /** Stage/grade, usually assessed formally */
  stage?: ICodeableConcept;

  /** Whether Severity is appropriate */
  hasSeverity?: boolean;

  /** Extension for hasSeverity */
  _hasSeverity?: IElement;

  /** Whether bodySite is appropriate */
  hasBodySite?: boolean;

  /** Extension for hasBodySite */
  _hasBodySite?: IElement;

  /** Whether stage is appropriate */
  hasStage?: boolean;

  /** Extension for hasStage */
  _hasStage?: IElement;

  /** Formal Definition for the condition */
  definition?: string[];

  /** Extension for definition */
  _definition?: IElement;

  /** Observations particularly relevant to this condition */
  observation?: IConditionDefinitionObservation[];

  /** Medications particularly relevant for this condition */
  medication?: IConditionDefinitionMedication[];

  /** Observation that suggets this condition */
  precondition?: IConditionDefinitionPrecondition[];

  /** Appropriate team for this condition */
  team?: IReference<'CareTeam'>[];

  /** Questionnaire for this condition */
  questionnaire?: IConditionDefinitionQuestionnaire[];

  /** Plan that is appropriate */
  plan?: IConditionDefinitionPlan[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IConditionDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinition from a JSON object
   */
  static fromJSON(json: IConditionDefinition): ConditionDefinition {
    return new ConditionDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinition>): ConditionDefinition {
    return new ConditionDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinition) => Partial<IConditionDefinition>): ConditionDefinition {
    const currentData = this.toJSON();
    return new ConditionDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_PROPERTIES);
    return result as IConditionDefinition;
  }

  /**
   * Create a deep clone of this ConditionDefinition
   */
  clone(): ConditionDefinition {
    return new ConditionDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinition
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
