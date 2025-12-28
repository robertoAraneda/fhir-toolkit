import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IEvidenceCertainty } from '../backbones/IEvidenceCertainty.js';
import type { IEvidenceStatistic } from '../backbones/IEvidenceStatistic.js';
import type { IEvidenceVariableDefinition } from '../backbones/IEvidenceVariableDefinition.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Evidence Interface
 * 
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 * 
 *
 * @see https://hl7.org/fhir/R5/evidence.html
 */
export interface IEvidence extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Evidence';

  /**
   * Canonical identifier for this evidence, represented as a globally unique URI
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the summary
   */
  identifier?: IIdentifier[];

  /**
   * Business version of this summary
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
   * Name for this summary (machine friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this summary (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Citation for this evidence
   */
  citeAsReference?: IReference;

  /**
   * Citation for this evidence
   */
  citeAsMarkdown?: string;
  /**
   * Extension for citeAsMarkdown
   */
  _citeAsMarkdown?: IElement;

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
   * When the summary was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the summary was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

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
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Why this Evidence is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

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
   * Link or citation to artifact associated with the summary
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Description of the particular summary
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Declarative description of the Evidence
   */
  assertion?: string;
  /**
   * Extension for assertion
   */
  _assertion?: IElement;

  /**
   * Footnotes and/or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * Evidence variable such as population, exposure, or outcome
   */
  variableDefinition: IEvidenceVariableDefinition[];

  /**
   * The method to combine studies
   */
  synthesisType?: ICodeableConcept;

  /**
   * The design of the study that produced this evidence
   */
  studyDesign?: ICodeableConcept[];

  /**
   * Values and parameters for a single statistic
   */
  statistic?: IEvidenceStatistic[];

  /**
   * Certainty or quality of the evidence
   */
  certainty?: IEvidenceCertainty[];

}
