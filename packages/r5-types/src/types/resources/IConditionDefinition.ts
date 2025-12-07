import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IConditionDefinitionMedication } from '../backbones/IConditionDefinitionMedication.js';
import type { IConditionDefinitionObservation } from '../backbones/IConditionDefinitionObservation.js';
import type { IConditionDefinitionPlan } from '../backbones/IConditionDefinitionPlan.js';
import type { IConditionDefinitionPrecondition } from '../backbones/IConditionDefinitionPrecondition.js';
import type { IConditionDefinitionQuestionnaire } from '../backbones/IConditionDefinitionQuestionnaire.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ConditionDefinition Interface
 * 
 * A definition of a condition and information relevant to managing it.
 * 
 *
 * @see https://hl7.org/fhir/R4/conditiondefinition.html
 */
export interface IConditionDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ConditionDefinition';

  /**
   * Canonical identifier for this condition definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the condition definition
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the condition definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmString?: string;
  /**
   * Extension for versionAlgorithmString
   */
  _versionAlgorithmString?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmCoding?: ICoding;

  /**
   * Name for this condition definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this condition definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate title of the event definition
   */
  subtitle?: string;
  /**
   * Extension for subtitle
   */
  _subtitle?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher/steward (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the condition definition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for condition definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Identification of the condition, problem or diagnosis
   */
  code: ICodeableConcept;

  /**
   * Subjective severity of condition
   */
  severity?: ICodeableConcept;

  /**
   * Anatomical location, if relevant
   */
  bodySite?: ICodeableConcept;

  /**
   * Stage/grade, usually assessed formally
   */
  stage?: ICodeableConcept;

  /**
   * Whether Severity is appropriate
   */
  hasSeverity?: boolean;
  /**
   * Extension for hasSeverity
   */
  _hasSeverity?: IElement;

  /**
   * Whether bodySite is appropriate
   */
  hasBodySite?: boolean;
  /**
   * Extension for hasBodySite
   */
  _hasBodySite?: IElement;

  /**
   * Whether stage is appropriate
   */
  hasStage?: boolean;
  /**
   * Extension for hasStage
   */
  _hasStage?: IElement;

  /**
   * Formal Definition for the condition
   */
  definition?: string[];
  /**
   * Extension for definition
   */
  _definition?: IElement;

  /**
   * Observations particularly relevant to this condition
   */
  observation?: IConditionDefinitionObservation[];

  /**
   * Medications particularly relevant for this condition
   */
  medication?: IConditionDefinitionMedication[];

  /**
   * Observation that suggets this condition
   */
  precondition?: IConditionDefinitionPrecondition[];

  /**
   * Appropriate team for this condition
   */
  team?: IReference<'CareTeam'>[];

  /**
   * Questionnaire for this condition
   */
  questionnaire?: IConditionDefinitionQuestionnaire[];

  /**
   * Plan that is appropriate
   */
  plan?: IConditionDefinitionPlan[];

}
