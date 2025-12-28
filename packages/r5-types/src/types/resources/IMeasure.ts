import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IMeasureGroup } from '../backbones/IMeasureGroup.js';
import type { IMeasureSupplementalData } from '../backbones/IMeasureSupplementalData.js';
import type { IMeasureTerm } from '../backbones/IMeasureTerm.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Measure Interface
 * 
 * The Measure resource provides the definition of a quality measure.
 * 
 *
 * @see https://hl7.org/fhir/R5/measure.html
 */
export interface IMeasure extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Measure';

  /**
   * Canonical identifier for this measure, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the measure
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the measure
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
   * Name for this measure (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this measure (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate title of the measure
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
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectReference?: IReference;

  /**
   * Population basis
   */
  basis?: string;
  /**
   * Extension for basis
   */
  _basis?: IElement;

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
   * Natural language description of the measure
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
   * Intended jurisdiction for measure (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this measure is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Describes the clinical usage of the measure
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
   * When the measure was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the measure was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the measure is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * The category of the measure, such as Education, Treatment, Assessment, etc
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
   * Logic used by the measure
   */
  library?: string[];
  /**
   * Extension for library
   */
  _library?: IElement;

  /**
   * Disclaimer for use of the measure or its referenced content
   */
  disclaimer?: string;
  /**
   * Extension for disclaimer
   */
  _disclaimer?: IElement;

  /**
   * proportion | ratio | continuous-variable | cohort
   */
  scoring?: ICodeableConcept;

  /**
   * What units?
   */
  scoringUnit?: ICodeableConcept;

  /**
   * opportunity | all-or-nothing | linear | weighted
   */
  compositeScoring?: ICodeableConcept;

  /**
   * process | outcome | structure | patient-reported-outcome | composite
   */
  type?: ICodeableConcept[];

  /**
   * How risk adjustment is applied for this measure
   */
  riskAdjustment?: string;
  /**
   * Extension for riskAdjustment
   */
  _riskAdjustment?: IElement;

  /**
   * How is rate aggregation performed for this measure
   */
  rateAggregation?: string;
  /**
   * Extension for rateAggregation
   */
  _rateAggregation?: IElement;

  /**
   * Detailed description of why the measure exists
   */
  rationale?: string;
  /**
   * Extension for rationale
   */
  _rationale?: IElement;

  /**
   * Summary of clinical guidelines
   */
  clinicalRecommendationStatement?: string;
  /**
   * Extension for clinicalRecommendationStatement
   */
  _clinicalRecommendationStatement?: IElement;

  /**
   * increase | decrease
   */
  improvementNotation?: ICodeableConcept;

  /**
   * Defined terms used in the measure documentation
   */
  term?: IMeasureTerm[];

  /**
   * Additional guidance for implementers (deprecated)
   */
  guidance?: string;
  /**
   * Extension for guidance
   */
  _guidance?: IElement;

  /**
   * Population criteria group
   */
  group?: IMeasureGroup[];

  /**
   * What other data should be reported with the measure
   */
  supplementalData?: IMeasureSupplementalData[];

}
