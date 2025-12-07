import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMarketingStatus } from '../datatypes/IMarketingStatus.js';
import type { IMedicinalProductManufacturingBusinessOperation } from '../backbones/IMedicinalProductManufacturingBusinessOperation.js';
import type { IMedicinalProductName } from '../backbones/IMedicinalProductName.js';
import type { IMedicinalProductSpecialDesignation } from '../backbones/IMedicinalProductSpecialDesignation.js';

/**
 * MedicinalProduct Interface
 * 
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproduct.html
 */
export interface IMedicinalProduct extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProduct';

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
  domain?: ICoding;

  /**
   * The dose form for a single part product, or combined form of a multiple part product
   */
  combinedPharmaceuticalDoseForm?: ICodeableConcept;

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
  specialMeasures?: string[];
  /**
   * Extension for specialMeasures
   */
  _specialMeasures?: IElement;

  /**
   * If authorised for use in children
   */
  paediatricUseIndicator?: ICodeableConcept;

  /**
   * Allows the product to be classified by various systems
   */
  productClassification?: ICodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Pharmaceutical aspects of product
   */
  pharmaceuticalProduct?: IReference<'MedicinalProductPharmaceutical'>[];

  /**
   * Package representation for the product
   */
  packagedMedicinalProduct?: IReference<'MedicinalProductPackaged'>[];

  /**
   * Supporting documentation, typically for regulatory submission
   */
  attachedDocument?: IReference<'DocumentReference'>[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)
   */
  masterFile?: IReference<'DocumentReference'>[];

  /**
   * A product specific contact, person (in a role), or an organization
   */
  contact?: IReference<'Organization' | 'PractitionerRole'>[];

  /**
   * Clinical trials or studies that this product is involved in
   */
  clinicalTrial?: IReference<'ResearchStudy'>[];

  /**
   * The product's name, including full name and possibly coded parts
   */
  name: IMedicinalProductName[];

  /**
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  crossReference?: IIdentifier[];

  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose
   */
  manufacturingBusinessOperation?: IMedicinalProductManufacturingBusinessOperation[];

  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
   */
  specialDesignation?: IMedicinalProductSpecialDesignation[];

}
