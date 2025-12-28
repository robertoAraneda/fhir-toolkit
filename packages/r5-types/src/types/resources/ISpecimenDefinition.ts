import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ISpecimenDefinitionTypeTested } from '../backbones/ISpecimenDefinitionTypeTested.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * SpecimenDefinition Interface
 * 
 * A kind of specimen with associated set of requirements.
 * 
 *
 * @see https://hl7.org/fhir/R5/specimendefinition.html
 */
export interface ISpecimenDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SpecimenDefinition';

  /**
   * Logical canonical URL to reference this SpecimenDefinition (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business identifier
   */
  identifier?: IIdentifier;

  /**
   * Business version of the SpecimenDefinition
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
   * Name for this {{title}} (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this SpecimenDefinition (Human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Based on FHIR definition of another SpecimenDefinition
   */
  derivedFromCanonical?: string[];
  /**
   * Extension for derivedFromCanonical
   */
  _derivedFromCanonical?: IElement;

  /**
   * Based on external definition
   */
  derivedFromUri?: string[];
  /**
   * Extension for derivedFromUri
   */
  _derivedFromUri?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * If this SpecimenDefinition is not for real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Type of subject for specimen collection
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * Type of subject for specimen collection
   */
  subjectReference?: IReference;

  /**
   * Date status first applied
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * The name of the individual or organization that published the SpecimenDefinition
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
   * Natural language description of the SpecimenDefinition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Content intends to support these contexts
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for this SpecimenDefinition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this SpecimenDefinition is defined
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
   * When SpecimenDefinition was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * The date on which the asset content was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * The effective date range for the SpecimenDefinition
   */
  effectivePeriod?: IPeriod;

  /**
   * Kind of material to collect
   */
  typeCollected?: ICodeableConcept;

  /**
   * Patient preparation for collection
   */
  patientPreparation?: ICodeableConcept[];

  /**
   * Time aspect for collection
   */
  timeAspect?: string;
  /**
   * Extension for timeAspect
   */
  _timeAspect?: IElement;

  /**
   * Specimen collection procedure
   */
  collection?: ICodeableConcept[];

  /**
   * Specimen in container intended for testing by lab
   */
  typeTested?: ISpecimenDefinitionTypeTested[];

}
