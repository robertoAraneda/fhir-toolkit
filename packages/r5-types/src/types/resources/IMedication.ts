import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMedicationBatch } from '../backbones/IMedicationBatch.js';
import type { IMedicationIngredient } from '../backbones/IMedicationIngredient.js';
import type { MedicationStatusType } from '../../valuesets/index.js';

/**
 * Medication Interface
 * 
 * This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 * 
 *
 * @see https://hl7.org/fhir/R4/medication.html
 */
export interface IMedication extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Medication';

  /**
   * Business identifier for this medication
   */
  identifier?: IIdentifier[];

  /**
   * Codes that identify this medication
   */
  code?: ICodeableConcept;

  /**
   * active | inactive | entered-in-error
   */
  status?: MedicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Organization that has authorization to market medication
   */
  marketingAuthorizationHolder?: IReference<'Organization'>;

  /**
   * powder | tablets | capsule +
   */
  doseForm?: ICodeableConcept;

  /**
   * When the specified product code does not infer a package size, this is the specific amount of drug in the product
   */
  totalVolume?: IQuantity;

  /**
   * Active or inactive ingredient
   */
  ingredient?: IMedicationIngredient[];

  /**
   * Details about packaged medications
   */
  batch?: IMedicationBatch;

  /**
   * Knowledge about this medication
   */
  definition?: IReference<'MedicationKnowledge'>;

}
