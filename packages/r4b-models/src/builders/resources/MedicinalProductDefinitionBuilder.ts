import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductDefinition } from '../../models/resources/MedicinalProductDefinition.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  ICoding,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductDefinition,
  IMedicinalProductDefinitionCharacteristic,
  IMedicinalProductDefinitionContact,
  IMedicinalProductDefinitionCrossReference,
  IMedicinalProductDefinitionName,
  IMedicinalProductDefinitionOperation,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionBuilder - Fluent builder for MedicinalProductDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinition = new MedicinalProductDefinitionBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductDefinitionBuilder extends DomainResourceBuilder<MedicinalProductDefinition, IMedicinalProductDefinition> {
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
  setDomain(domain: ICodeableConcept): this {
    this.data.domain = domain;
    return this;
  }

  /**
   * Set version
   * A business identifier relating to a specific version of the product
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set status
   * The status within the lifecycle of this product record
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the given status became applicable
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set description
   * General description of this product
   */
  setDescription(description: string): this {
    this.data.description = description;
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
   * Set indication
   * Description of indication(s) for this product, used when structured indications are not required
   */
  setIndication(indication: string): this {
    this.data.indication = indication;
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
   * Set pediatricUseIndicator
   * If authorised for use in children
   */
  setPediatricUseIndicator(pediatricUseIndicator: ICodeableConcept): this {
    this.data.pediatricUseIndicator = pediatricUseIndicator;
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
   * Add route
   * The path by which the product is taken into or makes contact with the body
   */
  addRoute(route: ICodeableConcept): this {
    return this.addToArray('route', route);
  }

  /**
   * Add specialMeasures
   * Whether the Medicinal Product is subject to special measures for regulatory reasons
   */
  addSpecialMeasures(specialMeasur: ICodeableConcept): this {
    return this.addToArray('specialMeasures', specialMeasur);
  }

  /**
   * Add classification
   * Allows the product to be classified by various systems
   */
  addClassification(classification: ICodeableConcept): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add marketingStatus
   * Marketing status of the medicinal product, in contrast to marketing authorization
   */
  addMarketingStatus(marketingStatu: IMarketingStatus): this {
    return this.addToArray('marketingStatus', marketingStatu);
  }

  /**
   * Add packagedMedicinalProduct
   * Package type for the product
   */
  addPackagedMedicinalProduct(packagedMedicinalProduct: ICodeableConcept): this {
    return this.addToArray('packagedMedicinalProduct', packagedMedicinalProduct);
  }

  /**
   * Add ingredient
   * The ingredients of this medicinal product - when not detailed in other resources
   */
  addIngredient(ingredient: ICodeableConcept): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add impurity
   * Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product
   */
  addImpurity(impurity: ICodeableReference): this {
    return this.addToArray('impurity', impurity);
  }

  /**
   * Add attachedDocument
   * Additional documentation about the medicinal product
   */
  addAttachedDocument(attachedDocument: IReference<'DocumentReference'>): this {
    return this.addToArray('attachedDocument', attachedDocument);
  }

  /**
   * Add masterFile
   * A master file for the medicinal product (e.g. Pharmacovigilance System Master File)
   */
  addMasterFile(masterFile: IReference<'DocumentReference'>): this {
    return this.addToArray('masterFile', masterFile);
  }

  /**
   * Add contact
   * A product specific contact, person (in a role), or an organization
   */
  addContact(contact: IMedicinalProductDefinitionContact): this {
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
   * Add code
   * A code that this product is known by, within some formal terminology
   */
  addCode(code: ICoding): this {
    return this.addToArray('code', code);
  }

  /**
   * Add name
   * The product's name, including full name and possibly coded parts
   */
  addName(name: IMedicinalProductDefinitionName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add crossReference
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  addCrossReference(crossReference: IMedicinalProductDefinitionCrossReference): this {
    return this.addToArray('crossReference', crossReference);
  }

  /**
   * Add operation
   * A manufacturing or administrative process for the medicinal product
   */
  addOperation(operation: IMedicinalProductDefinitionOperation): this {
    return this.addToArray('operation', operation);
  }

  /**
   * Add characteristic
   * Key product features such as "sugar free", "modified release"
   */
  addCharacteristic(characteristic: IMedicinalProductDefinitionCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinition instance
   */
  build(): MedicinalProductDefinition {
    return new MedicinalProductDefinition(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinition> {
    const medicinalProductDefinition = this.build();
    await medicinalProductDefinition.validateOrThrow();
    return medicinalProductDefinition;
  }
}
