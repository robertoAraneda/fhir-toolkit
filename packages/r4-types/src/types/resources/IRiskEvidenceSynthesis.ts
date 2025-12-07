import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IRiskEvidenceSynthesisCertainty } from '../backbones/IRiskEvidenceSynthesisCertainty.js';
import type { IRiskEvidenceSynthesisRiskEstimate } from '../backbones/IRiskEvidenceSynthesisRiskEstimate.js';
import type { IRiskEvidenceSynthesisSampleSize } from '../backbones/IRiskEvidenceSynthesisSampleSize.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * RiskEvidenceSynthesis Interface
 * 
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 * 
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesis.html
 */
export interface IRiskEvidenceSynthesis extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'RiskEvidenceSynthesis';

  /**
   * Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the risk evidence synthesis
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the risk evidence synthesis
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this risk evidence synthesis (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this risk evidence synthesis (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

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
   * Natural language description of the risk evidence synthesis
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
   * Intended jurisdiction for risk evidence synthesis (if applicable)
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
   * When the risk evidence synthesis was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the risk evidence synthesis was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the risk evidence synthesis is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc.
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
   * Type of synthesis
   */
  synthesisType?: ICodeableConcept;

  /**
   * Type of study
   */
  studyType?: ICodeableConcept;

  /**
   * What population?
   */
  population: IReference<'EvidenceVariable'>;

  /**
   * What exposure?
   */
  exposure?: IReference<'EvidenceVariable'>;

  /**
   * What outcome?
   */
  outcome: IReference<'EvidenceVariable'>;

  /**
   * What sample size was involved?
   */
  sampleSize?: IRiskEvidenceSynthesisSampleSize;

  /**
   * What was the estimated risk
   */
  riskEstimate?: IRiskEvidenceSynthesisRiskEstimate;

  /**
   * How certain is the risk
   */
  certainty?: IRiskEvidenceSynthesisCertainty[];

}
