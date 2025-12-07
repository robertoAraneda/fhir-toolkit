import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IEffectEvidenceSynthesisCertainty } from '../backbones/IEffectEvidenceSynthesisCertainty.js';
import type { IEffectEvidenceSynthesisEffectEstimate } from '../backbones/IEffectEvidenceSynthesisEffectEstimate.js';
import type { IEffectEvidenceSynthesisResultsByExposure } from '../backbones/IEffectEvidenceSynthesisResultsByExposure.js';
import type { IEffectEvidenceSynthesisSampleSize } from '../backbones/IEffectEvidenceSynthesisSampleSize.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * EffectEvidenceSynthesis Interface
 * 
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesis.html
 */
export interface IEffectEvidenceSynthesis extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EffectEvidenceSynthesis';

  /**
   * Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the effect evidence synthesis
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the effect evidence synthesis
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this effect evidence synthesis (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this effect evidence synthesis (human friendly)
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
   * Natural language description of the effect evidence synthesis
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
   * Intended jurisdiction for effect evidence synthesis (if applicable)
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
   * When the effect evidence synthesis was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the effect evidence synthesis was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the effect evidence synthesis is expected to be used
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
  exposure: IReference<'EvidenceVariable'>;

  /**
   * What comparison exposure?
   */
  exposureAlternative: IReference<'EvidenceVariable'>;

  /**
   * What outcome?
   */
  outcome: IReference<'EvidenceVariable'>;

  /**
   * What sample size was involved?
   */
  sampleSize?: IEffectEvidenceSynthesisSampleSize;

  /**
   * What was the result per exposure?
   */
  resultsByExposure?: IEffectEvidenceSynthesisResultsByExposure[];

  /**
   * What was the estimated effect
   */
  effectEstimate?: IEffectEvidenceSynthesisEffectEstimate[];

  /**
   * How certain is the effect
   */
  certainty?: IEffectEvidenceSynthesisCertainty[];

}
