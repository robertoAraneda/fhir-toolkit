import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IMedicationBatch } from '../backbones/IMedicationBatch.js';
import type { IMedicationIngredient } from '../backbones/IMedicationIngredient.js';
import type { MedicationStatusType } from '../../valuesets/index.js';

/**
 * Medication Interface
 * 
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
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
   * Manufacturer of the item
   */
  manufacturer?: IReference<'Organization'>;

  /**
   * powder | tablets | capsule +
   */
  form?: ICodeableConcept;

  /**
   * Amount of drug in package
   */
  amount?: IRatio;

  /**
   * Active or inactive ingredient
   */
  ingredient?: IMedicationIngredient[];

  /**
   * Details about packaged medications
   */
  batch?: IMedicationBatch;

}
