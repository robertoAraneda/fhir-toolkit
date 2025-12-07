import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IImmunizationRecommendationRecommendation } from '../backbones/IImmunizationRecommendationRecommendation.js';

/**
 * ImmunizationRecommendation Interface
 * 
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationrecommendation.html
 */
export interface IImmunizationRecommendation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ImmunizationRecommendation';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * Who this profile is for
   */
  patient: IReference<'Patient'>;

  /**
   * Date recommendation(s) created
   */
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who is responsible for protocol
   */
  authority?: IReference<'Organization'>;

  /**
   * Vaccine administration recommendations
   */
  recommendation: IImmunizationRecommendationRecommendation[];

}
