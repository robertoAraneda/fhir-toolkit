import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IPlanDefinitionAction } from '../backbones/IPlanDefinitionAction.js';
import type { IPlanDefinitionGoal } from '../backbones/IPlanDefinitionGoal.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * PlanDefinition Interface
 * 
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 * 
 *
 * @see https://hl7.org/fhir/R4/plandefinition.html
 */
export interface IPlanDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PlanDefinition';

  /**
   * Canonical identifier for this plan definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the plan definition
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the plan definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this plan definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this plan definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate title of the plan definition
   */
  subtitle?: string;
  /**
   * Extension for subtitle
   */
  _subtitle?: IElement;

  /**
   * order-set | clinical-protocol | eca-rule | workflow-definition
   */
  type?: ICodeableConcept;

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
   * Type of individual the plan definition is focused on
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * Type of individual the plan definition is focused on
   */
  subjectReference?: IReference;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
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
   * Natural language description of the plan definition
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
   * Intended jurisdiction for plan definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this plan definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Describes the clinical usage of the plan
   */
  usage?: string;
  /**
   * Extension for usage
   */
  _usage?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the plan definition was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the plan definition was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the plan definition is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * E.g. Education, Treatment, Assessment
   */
  topic?: ICodeableConcept[];

  /**
   * Who authored the content
   */
  author?: IContactDetail[];

  /**
   * Who edited the content
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the content
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the content
   */
  endorser?: IContactDetail[];

  /**
   * Additional documentation, citations
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Logic used by the plan definition
   */
  library?: string[];
  /**
   * Extension for library
   */
  _library?: IElement;

  /**
   * What the plan is trying to accomplish
   */
  goal?: IPlanDefinitionGoal[];

  /**
   * Action defined by the plan
   */
  action?: IPlanDefinitionAction[];

}
