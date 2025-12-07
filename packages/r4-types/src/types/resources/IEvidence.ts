import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Evidence Interface
 * 
 * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 * 
 *
 * @see https://hl7.org/fhir/R4/evidence.html
 */
export interface IEvidence extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Evidence';

  /**
   * Canonical identifier for this evidence, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the evidence
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the evidence
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this evidence (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this evidence (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Title for use in informal contexts
   */
  shortTitle?: string;
  /**
   * Extension for shortTitle
   */
  _shortTitle?: IElement;

  /**
   * Subordinate title of the Evidence
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
   * Natural language description of the evidence
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for evidence (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the evidence was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the evidence was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the evidence is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * The category of the Evidence, such as Education, Treatment, Assessment, etc.
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
   * Additional documentation, citations, etc.
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * What population?
   */
  exposureBackground: IReference<'EvidenceVariable'>;

  /**
   * What exposure?
   */
  exposureVariant?: IReference<'EvidenceVariable'>[];

  /**
   * What outcome?
   */
  outcome?: IReference<'EvidenceVariable'>[];

}
