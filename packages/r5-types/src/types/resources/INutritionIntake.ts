import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { INutritionIntakeConsumedItem } from '../backbones/INutritionIntakeConsumedItem.js';
import type { INutritionIntakeIngredientLabel } from '../backbones/INutritionIntakeIngredientLabel.js';
import type { INutritionIntakePerformer } from '../backbones/INutritionIntakePerformer.js';
import type { EventStatusType } from '../../valuesets/index.js';

/**
 * NutritionIntake Interface
 * 
 * A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake.
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionintake.html
 */
export interface INutritionIntake extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'NutritionIntake';

  /**
   * External identifier
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
   * Fulfils plan, proposal or order
   */
  basedOn?: IReference<'NutritionOrder' | 'CarePlan' | 'ServiceRequest'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'NutritionIntake' | 'Procedure' | 'Observation'>[];

  /**
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  status: EventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept[];

  /**
   * Code representing an overall type of nutrition intake
   */
  code?: ICodeableConcept;

  /**
   * Who is/was consuming the food or fluid
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter associated with NutritionIntake
   */
  encounter?: IReference<'Encounter'>;

  /**
   * The date/time or interval when the food or fluid is/was consumed
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * The date/time or interval when the food or fluid is/was consumed
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the intake was recorded
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Person or organization that provided the information about the consumption of this food or fluid
   */
  reportedBoolean?: boolean;
  /**
   * Extension for reportedBoolean
   */
  _reportedBoolean?: IElement;

  /**
   * Person or organization that provided the information about the consumption of this food or fluid
   */
  reportedReference?: IReference;

  /**
   * What food or fluid product or item was consumed
   */
  consumedItem: INutritionIntakeConsumedItem[];

  /**
   * Total nutrient for the whole meal, product, serving
   */
  ingredientLabel?: INutritionIntakeIngredientLabel[];

  /**
   * Who was performed in the intake
   */
  performer?: INutritionIntakePerformer[];

  /**
   * Where the intake occurred
   */
  location?: IReference<'Location'>;

  /**
   * Additional supporting information
   */
  derivedFrom?: IReference<'Resource'>[];

  /**
   * Reason for why the food or fluid is /was consumed
   */
  reason?: ICodeableReference[];

  /**
   * Further information about the consumption
   */
  note?: IAnnotation[];

}
