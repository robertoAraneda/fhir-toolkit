import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IActivityDefinitionDynamicValue } from '../backbones/IActivityDefinitionDynamicValue.js';
import type { IActivityDefinitionParticipant } from '../backbones/IActivityDefinitionParticipant.js';
import type { PublicationStatusType, RequestIntentType, RequestPriorityType, RequestResourceTypesType } from '../../valuesets/index.js';

/**
 * ActivityDefinition Interface
 * 
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 * 
 *
 * @see https://hl7.org/fhir/R4/activitydefinition.html
 */
export interface IActivityDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ActivityDefinition';

  /**
   * Canonical identifier for this activity definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the activity definition
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the activity definition
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
   * Name for this activity definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this activity definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate title of the activity definition
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
   * Type of individual the activity definition is intended for
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * Type of individual the activity definition is intended for
   */
  subjectReference?: IReference;

  /**
   * Type of individual the activity definition is intended for
   */
  subjectCanonical?: string;
  /**
   * Extension for subjectCanonical
   */
  _subjectCanonical?: IElement;

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
   * Natural language description of the activity definition
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
   * Intended jurisdiction for activity definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this activity definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Describes the clinical usage of the activity definition
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
   * Copyright holder and year(s)
   */
  copyrightLabel?: string;
  /**
   * Extension for copyrightLabel
   */
  _copyrightLabel?: IElement;

  /**
   * When the activity definition was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the activity definition was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the activity definition is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * E.g. Education, Treatment, Assessment, etc
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
   * Additional documentation, citations, etc
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Logic used by the activity definition
   */
  library?: string[];
  /**
   * Extension for library
   */
  _library?: IElement;

  /**
   * Kind of resource
   */
  kind?: RequestResourceTypesType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * What profile the resource needs to conform to
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Detail type of activity
   */
  code?: ICodeableConcept;

  /**
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent?: RequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * True if the activity should not be performed
   */
  doNotPerform?: boolean;
  /**
   * Extension for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * When activity is to occur
   */
  timingTiming?: ITiming;

  /**
   * When activity is to occur
   */
  timingAge?: IAge;

  /**
   * When activity is to occur
   */
  timingRange?: IRange;

  /**
   * When activity is to occur
   */
  timingDuration?: IDuration;

  /**
   * Preconditions for service
   */
  asNeededBoolean?: boolean;
  /**
   * Extension for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * Preconditions for service
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * Where it should happen
   */
  location?: ICodeableReference;

  /**
   * Who should participate in the action
   */
  participant?: IActivityDefinitionParticipant[];

  /**
   * What's administered/supplied
   */
  productReference?: IReference;

  /**
   * What's administered/supplied
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * How much is administered/consumed/supplied
   */
  quantity?: IQuantity;

  /**
   * Detailed dosage instructions
   */
  dosage?: IDosage[];

  /**
   * What part of body to perform on
   */
  bodySite?: ICodeableConcept[];

  /**
   * What specimens are required to perform this action
   */
  specimenRequirement?: string[];
  /**
   * Extension for specimenRequirement
   */
  _specimenRequirement?: IElement;

  /**
   * What observations are required to perform this action
   */
  observationRequirement?: string[];
  /**
   * Extension for observationRequirement
   */
  _observationRequirement?: IElement;

  /**
   * What observations must be produced by this action
   */
  observationResultRequirement?: string[];
  /**
   * Extension for observationResultRequirement
   */
  _observationResultRequirement?: IElement;

  /**
   * Transform to apply the template
   */
  transform?: string;
  /**
   * Extension for transform
   */
  _transform?: IElement;

  /**
   * Dynamic aspects of the definition
   */
  dynamicValue?: IActivityDefinitionDynamicValue[];

}
