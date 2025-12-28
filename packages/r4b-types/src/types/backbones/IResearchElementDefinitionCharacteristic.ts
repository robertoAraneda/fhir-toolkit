import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { GroupMeasureType } from '../../valuesets/index.js';

/**
 * ResearchElementDefinitionCharacteristic Interface
 * 
 * What defines the members of the research element
 * 
 *
 * @see https://hl7.org/fhir/R4B/researchelementdefinitioncharacteristic.html
 */
export interface IResearchElementDefinitionCharacteristic extends IBackboneElement {
  /**
   * What code or expression defines members?
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * What code or expression defines members?
   */
  definitionCanonical?: string;
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * What code or expression defines members?
   */
  definitionExpression?: IExpression;

  /**
   * What code or expression defines members?
   */
  definitionDataRequirement?: IDataRequirement;

  /**
   * What code/value pairs define members?
   */
  usageContext?: IUsageContext[];

  /**
   * Whether the characteristic includes or excludes members
   */
  exclude?: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * What unit is the outcome described in?
   */
  unitOfMeasure?: ICodeableConcept;

  /**
   * What time period does the study cover
   */
  studyEffectiveDescription?: string;
  /**
   * Extension for studyEffectiveDescription
   */
  _studyEffectiveDescription?: IElement;

  /**
   * What time period does the study cover
   */
  studyEffectiveDateTime?: string;
  /**
   * Extension for studyEffectiveDateTime
   */
  _studyEffectiveDateTime?: IElement;

  /**
   * What time period does the study cover
   */
  studyEffectivePeriod?: IPeriod;

  /**
   * What time period does the study cover
   */
  studyEffectiveDuration?: IDuration;

  /**
   * What time period does the study cover
   */
  studyEffectiveTiming?: ITiming;

  /**
   * Observation time from study start
   */
  studyEffectiveTimeFromStart?: IDuration;

  /**
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  studyEffectiveGroupMeasure?: GroupMeasureType;
  /**
   * Extension for studyEffectiveGroupMeasure
   */
  _studyEffectiveGroupMeasure?: IElement;

  /**
   * What time period do participants cover
   */
  participantEffectiveDescription?: string;
  /**
   * Extension for participantEffectiveDescription
   */
  _participantEffectiveDescription?: IElement;

  /**
   * What time period do participants cover
   */
  participantEffectiveDateTime?: string;
  /**
   * Extension for participantEffectiveDateTime
   */
  _participantEffectiveDateTime?: IElement;

  /**
   * What time period do participants cover
   */
  participantEffectivePeriod?: IPeriod;

  /**
   * What time period do participants cover
   */
  participantEffectiveDuration?: IDuration;

  /**
   * What time period do participants cover
   */
  participantEffectiveTiming?: ITiming;

  /**
   * Observation time from study start
   */
  participantEffectiveTimeFromStart?: IDuration;

  /**
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  participantEffectiveGroupMeasure?: GroupMeasureType;
  /**
   * Extension for participantEffectiveGroupMeasure
   */
  _participantEffectiveGroupMeasure?: IElement;

}
