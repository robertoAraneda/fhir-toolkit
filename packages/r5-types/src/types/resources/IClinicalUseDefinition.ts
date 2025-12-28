import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IClinicalUseDefinitionContraindication } from '../backbones/IClinicalUseDefinitionContraindication.js';
import type { IClinicalUseDefinitionIndication } from '../backbones/IClinicalUseDefinitionIndication.js';
import type { IClinicalUseDefinitionInteraction } from '../backbones/IClinicalUseDefinitionInteraction.js';
import type { IClinicalUseDefinitionUndesirableEffect } from '../backbones/IClinicalUseDefinitionUndesirableEffect.js';
import type { IClinicalUseDefinitionWarning } from '../backbones/IClinicalUseDefinitionWarning.js';
import type { ClinicalUseDefinitionTypeType } from '../../valuesets/index.js';

/**
 * ClinicalUseDefinition Interface
 * 
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 * 
 *
 * @see https://hl7.org/fhir/R5/clinicalusedefinition.html
 */
export interface IClinicalUseDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ClinicalUseDefinition';

  /**
   * Business identifier for this issue
   */
  identifier?: IIdentifier[];

  /**
   * indication | contraindication | interaction | undesirable-effect | warning
   */
  type: ClinicalUseDefinitionTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose"
   */
  category?: ICodeableConcept[];

  /**
   * The medication, product, substance, device, procedure etc. for which this is an indication
   */
  subject?: IReference<'MedicinalProductDefinition' | 'Medication' | 'ActivityDefinition' | 'PlanDefinition' | 'Device' | 'DeviceDefinition' | 'Substance' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>[];

  /**
   * Whether this is a current issue or one that has been retired etc
   */
  status?: ICodeableConcept;

  /**
   * Specifics for when this is a contraindication
   */
  contraindication?: IClinicalUseDefinitionContraindication;

  /**
   * Specifics for when this is an indication
   */
  indication?: IClinicalUseDefinitionIndication;

  /**
   * Specifics for when this is an interaction
   */
  interaction?: IClinicalUseDefinitionInteraction;

  /**
   * The population group to which this applies
   */
  population?: IReference<'Group'>[];

  /**
   * Logic used by the clinical use definition
   */
  library?: string[];
  /**
   * Extension for library
   */
  _library?: IElement;

  /**
   * A possible negative outcome from the use of this treatment
   */
  undesirableEffect?: IClinicalUseDefinitionUndesirableEffect;

  /**
   * Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
   */
  warning?: IClinicalUseDefinitionWarning;

}
