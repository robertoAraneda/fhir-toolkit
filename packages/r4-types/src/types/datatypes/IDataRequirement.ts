import type { ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IDataRequirementCodeFilter } from '../backbones/IDataRequirementCodeFilter.js';
import type { IDataRequirementDateFilter } from '../backbones/IDataRequirementDateFilter.js';
import type { IDataRequirementSort } from '../backbones/IDataRequirementSort.js';

/**
 * DataRequirement Interface
 * 
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 * 
 *
 * @see https://hl7.org/fhir/R4/datarequirement.html
 */
export interface IDataRequirement extends IElement {
  /**
   * The type of the required data
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The profile of the required data
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectReference?: IReference;

  /**
   * Indicates specific structure elements that are referenced by the knowledge module
   */
  mustSupport?: string[];
  /**
   * Extension for mustSupport
   */
  _mustSupport?: IElement;

  /**
   * What codes are expected
   */
  codeFilter?: IDataRequirementCodeFilter[];

  /**
   * What dates/date ranges are expected
   */
  dateFilter?: IDataRequirementDateFilter[];

  /**
   * Number of results
   */
  limit?: number;
  /**
   * Extension for limit
   */
  _limit?: IElement;

  /**
   * Order of the results
   */
  sort?: IDataRequirementSort[];

}
