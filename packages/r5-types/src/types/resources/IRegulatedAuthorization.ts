import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRegulatedAuthorizationCase } from '../backbones/IRegulatedAuthorizationCase.js';

/**
 * RegulatedAuthorization Interface
 * 
 * Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
 * 
 *
 * @see https://hl7.org/fhir/R5/regulatedauthorization.html
 */
export interface IRegulatedAuthorization extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'RegulatedAuthorization';

  /**
   * Business identifier for the authorization, typically assigned by the authorizing body
   */
  identifier?: IIdentifier[];

  /**
   * The product type, treatment, facility or activity that is being authorized
   */
  subject?: IReference<'MedicinalProductDefinition' | 'BiologicallyDerivedProduct' | 'NutritionProduct' | 'PackagedProductDefinition' | 'ManufacturedItemDefinition' | 'Ingredient' | 'SubstanceDefinition' | 'DeviceDefinition' | 'ResearchStudy' | 'ActivityDefinition' | 'PlanDefinition' | 'ObservationDefinition' | 'Practitioner' | 'Organization' | 'Location'>[];

  /**
   * Overall type of this authorization, for example drug marketing approval, orphan drug designation
   */
  type?: ICodeableConcept;

  /**
   * General textual supporting information
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The territory in which the authorization has been granted
   */
  region?: ICodeableConcept[];

  /**
   * The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications
   */
  status?: ICodeableConcept;

  /**
   * The date at which the current status was assigned
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date
   */
  validityPeriod?: IPeriod;

  /**
   * Condition for which the use of the regulated product applies
   */
  indication?: ICodeableReference[];

  /**
   * The intended use of the product, e.g. prevention, treatment
   */
  intendedUse?: ICodeableConcept;

  /**
   * The legal/regulatory framework or reasons under which this authorization is granted
   */
  basis?: ICodeableConcept[];

  /**
   * The organization that has been granted this authorization, by the regulator
   */
  holder?: IReference<'Organization'>;

  /**
   * The regulatory authority or authorizing body granting the authorization
   */
  regulator?: IReference<'Organization'>;

  /**
   * Additional information or supporting documentation about the authorization
   */
  attachedDocument?: IReference<'DocumentReference'>[];

  /**
   * The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
   */
  case?: IRegulatedAuthorizationCase;

}
