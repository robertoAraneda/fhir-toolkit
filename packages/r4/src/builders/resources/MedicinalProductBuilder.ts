import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProduct } from '../../models/resources/MedicinalProduct.js';
import type {
  ICodeableConcept,
  ICoding,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProduct,
  IMedicinalProductManufacturingBusinessOperation,
  IMedicinalProductName,
  IMedicinalProductSpecialDesignation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductBuilder - Fluent builder for MedicinalProduct resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProduct = new MedicinalProductBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductBuilder extends DomainResourceBuilder<MedicinalProduct, IMedicinalProduct> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Regulatory type, e.g. Investigational or Authorized
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set domain
   * If this medicine applies to human or veterinary uses
   */
  setDomain(domain: ICoding): this {
    this.data.domain = domain;
    return this;
  }

  /**
   * Set combinedPharmaceuticalDoseForm
   * The dose form for a single part product, or combined form of a multiple part product
   */
  setCombinedPharmaceuticalDoseForm(combinedPharmaceuticalDoseForm: ICodeableConcept): this {
    this.data.combinedPharmaceuticalDoseForm = combinedPharmaceuticalDoseForm;
    return this;
  }

  /**
   * Set legalStatusOfSupply
   * The legal status of supply of the medicinal product as classified by the regulator
   */
  setLegalStatusOfSupply(legalStatusOfSupply: ICodeableConcept): this {
    this.data.legalStatusOfSupply = legalStatusOfSupply;
    return this;
  }

  /**
   * Set additionalMonitoringIndicator
   * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons
   */
  setAdditionalMonitoringIndicator(additionalMonitoringIndicator: ICodeableConcept): this {
    this.data.additionalMonitoringIndicator = additionalMonitoringIndicator;
    return this;
  }

  /**
   * Set paediatricUseIndicator
   * If authorised for use in children
   */
  setPaediatricUseIndicator(paediatricUseIndicator: ICodeableConcept): this {
    this.data.paediatricUseIndicator = paediatricUseIndicator;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this product. Could be an MPID
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add specialMeasures
   * Whether the Medicinal Product is subject to special measures for regulatory reasons
   */
  addSpecialMeasures(specialMeasur: string): this {
    return this.addToArray('specialMeasures', specialMeasur);
  }

  /**
   * Add productClassification
   * Allows the product to be classified by various systems
   */
  addProductClassification(productClassification: ICodeableConcept): this {
    return this.addToArray('productClassification', productClassification);
  }

  /**
   * Add marketingStatus
   * Marketing status of the medicinal product, in contrast to marketing authorizaton
   */
  addMarketingStatus(marketingStatu: IMarketingStatus): this {
    return this.addToArray('marketingStatus', marketingStatu);
  }

  /**
   * Add pharmaceuticalProduct
   * Pharmaceutical aspects of product
   */
  addPharmaceuticalProduct(pharmaceuticalProduct: IReference<'MedicinalProductPharmaceutical'>): this {
    return this.addToArray('pharmaceuticalProduct', pharmaceuticalProduct);
  }

  /**
   * Add packagedMedicinalProduct
   * Package representation for the product
   */
  addPackagedMedicinalProduct(packagedMedicinalProduct: IReference<'MedicinalProductPackaged'>): this {
    return this.addToArray('packagedMedicinalProduct', packagedMedicinalProduct);
  }

  /**
   * Add attachedDocument
   * Supporting documentation, typically for regulatory submission
   */
  addAttachedDocument(attachedDocument: IReference<'DocumentReference'>): this {
    return this.addToArray('attachedDocument', attachedDocument);
  }

  /**
   * Add masterFile
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)
   */
  addMasterFile(masterFile: IReference<'DocumentReference'>): this {
    return this.addToArray('masterFile', masterFile);
  }

  /**
   * Add contact
   * A product specific contact, person (in a role), or an organization
   */
  addContact(contact: IReference<'Organization' | 'PractitionerRole'>): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add clinicalTrial
   * Clinical trials or studies that this product is involved in
   */
  addClinicalTrial(clinicalTrial: IReference<'ResearchStudy'>): this {
    return this.addToArray('clinicalTrial', clinicalTrial);
  }

  /**
   * Add name
   * The product's name, including full name and possibly coded parts
   */
  addName(name: IMedicinalProductName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add crossReference
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  addCrossReference(crossReference: IIdentifier): this {
    return this.addToArray('crossReference', crossReference);
  }

  /**
   * Add manufacturingBusinessOperation
   * An operation applied to the product, for manufacturing or adminsitrative purpose
   */
  addManufacturingBusinessOperation(manufacturingBusinessOperation: IMedicinalProductManufacturingBusinessOperation): this {
    return this.addToArray('manufacturingBusinessOperation', manufacturingBusinessOperation);
  }

  /**
   * Add specialDesignation
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
   */
  addSpecialDesignation(specialDesignation: IMedicinalProductSpecialDesignation): this {
    return this.addToArray('specialDesignation', specialDesignation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProduct instance
   */
  build(): MedicinalProduct {
    return new MedicinalProduct(this.data);
  }

  /**
   * Build and validate the MedicinalProduct instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProduct> {
    const medicinalProduct = this.build();
    await medicinalProduct.validateOrThrow();
    return medicinalProduct;
  }
}
