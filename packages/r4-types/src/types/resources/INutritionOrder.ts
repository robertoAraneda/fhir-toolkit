import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { INutritionOrderEnteralFormula } from '../backbones/INutritionOrderEnteralFormula.js';
import type { INutritionOrderOralDiet } from '../backbones/INutritionOrderOralDiet.js';
import type { INutritionOrderSupplement } from '../backbones/INutritionOrderSupplement.js';
import type { RequestIntentType, RequestStatusType } from '../../valuesets/index.js';

/**
 * NutritionOrder Interface
 * 
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionorder.html
 */
export interface INutritionOrder extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'NutritionOrder';

  /**
   * Identifiers assigned to this order
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Instantiates protocol or definition
   */
  instantiates?: string[];
  /**
   * Extension for instantiates
   */
  _instantiates?: IElement;

  /**
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  status: RequestStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: RequestIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * The person who requires the diet, formula or nutritional supplement
   */
  patient: IReference<'Patient'>;

  /**
   * The encounter associated with this nutrition order
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Date and time the nutrition order was requested
   */
  dateTime: string;
  /**
   * Extension for dateTime
   */
  _dateTime?: IElement;

  /**
   * Who ordered the diet, formula or nutritional supplement
   */
  orderer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * List of the patient's food and nutrition-related allergies and intolerances
   */
  allergyIntolerance?: IReference<'AllergyIntolerance'>[];

  /**
   * Order-specific modifier about the type of food that should be given
   */
  foodPreferenceModifier?: ICodeableConcept[];

  /**
   * Order-specific modifier about the type of food that should not be given
   */
  excludeFoodModifier?: ICodeableConcept[];

  /**
   * Oral diet components
   */
  oralDiet?: INutritionOrderOralDiet;

  /**
   * Supplement components
   */
  supplement?: INutritionOrderSupplement[];

  /**
   * Enteral formula components
   */
  enteralFormula?: INutritionOrderEnteralFormula;

  /**
   * Comments
   */
  note?: IAnnotation[];

}
