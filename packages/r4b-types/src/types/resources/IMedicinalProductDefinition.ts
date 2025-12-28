import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMarketingStatus } from '../datatypes/IMarketingStatus.js';
import type { IMedicinalProductDefinitionCharacteristic } from '../backbones/IMedicinalProductDefinitionCharacteristic.js';
import type { IMedicinalProductDefinitionContact } from '../backbones/IMedicinalProductDefinitionContact.js';
import type { IMedicinalProductDefinitionCrossReference } from '../backbones/IMedicinalProductDefinitionCrossReference.js';
import type { IMedicinalProductDefinitionName } from '../backbones/IMedicinalProductDefinitionName.js';
import type { IMedicinalProductDefinitionOperation } from '../backbones/IMedicinalProductDefinitionOperation.js';

/**
 * MedicinalProductDefinition Interface
 * 
 * A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs).
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicinalproductdefinition.html
 */
export interface IMedicinalProductDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductDefinition';

  /**
   * Business identifier for this product. Could be an MPID
   */
  identifier?: IIdentifier[];

  /**
   * Regulatory type, e.g. Investigational or Authorized
   */
  type?: ICodeableConcept;

  /**
   * If this medicine applies to human or veterinary uses
   */
  domain?: ICodeableConcept;

  /**
   * A business identifier relating to a specific version of the product
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * The status within the lifecycle of this product record
   */
  status?: ICodeableConcept;

  /**
   * The date at which the given status became applicable
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * General description of this product
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The dose form for a single part product, or combined form of a multiple part product
   */
  combinedPharmaceuticalDoseForm?: ICodeableConcept;

  /**
   * The path by which the product is taken into or makes contact with the body
   */
  route?: ICodeableConcept[];

  /**
   * Description of indication(s) for this product, used when structured indications are not required
   */
  indication?: string;
  /**
   * Extension for indication
   */
  _indication?: IElement;

  /**
   * The legal status of supply of the medicinal product as classified by the regulator
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons
   */
  additionalMonitoringIndicator?: ICodeableConcept;

  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons
   */
  specialMeasures?: ICodeableConcept[];

  /**
   * If authorised for use in children
   */
  pediatricUseIndicator?: ICodeableConcept;

  /**
   * Allows the product to be classified by various systems
   */
  classification?: ICodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing authorization
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Package type for the product
   */
  packagedMedicinalProduct?: ICodeableConcept[];

  /**
   * The ingredients of this medicinal product - when not detailed in other resources
   */
  ingredient?: ICodeableConcept[];

  /**
   * Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product
   */
  impurity?: ICodeableReference[];

  /**
   * Additional documentation about the medicinal product
   */
  attachedDocument?: IReference<'DocumentReference'>[];

  /**
   * A master file for the medicinal product (e.g. Pharmacovigilance System Master File)
   */
  masterFile?: IReference<'DocumentReference'>[];

  /**
   * A product specific contact, person (in a role), or an organization
   */
  contact?: IMedicinalProductDefinitionContact[];

  /**
   * Clinical trials or studies that this product is involved in
   */
  clinicalTrial?: IReference<'ResearchStudy'>[];

  /**
   * A code that this product is known by, within some formal terminology
   */
  code?: ICoding[];

  /**
   * The product's name, including full name and possibly coded parts
   */
  name: IMedicinalProductDefinitionName[];

  /**
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  crossReference?: IMedicinalProductDefinitionCrossReference[];

  /**
   * A manufacturing or administrative process for the medicinal product
   */
  operation?: IMedicinalProductDefinitionOperation[];

  /**
   * Key product features such as "sugar free", "modified release"
   */
  characteristic?: IMedicinalProductDefinitionCharacteristic[];

}
