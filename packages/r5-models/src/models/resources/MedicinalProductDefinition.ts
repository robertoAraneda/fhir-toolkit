import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  ICoding,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductDefinition,
  IMedicinalProductDefinitionCharacteristic,
  IMedicinalProductDefinitionContact,
  IMedicinalProductDefinitionCrossReference,
  IMedicinalProductDefinitionName,
  IMedicinalProductDefinitionOperation,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicinalProductDefinition */
const MEDICINAL_PRODUCT_DEFINITION_PROPERTIES = [
  'identifier',
  'type',
  'domain',
  'version',
  '_version',
  'status',
  'statusDate',
  '_statusDate',
  'description',
  '_description',
  'combinedPharmaceuticalDoseForm',
  'route',
  'indication',
  '_indication',
  'legalStatusOfSupply',
  'additionalMonitoringIndicator',
  'specialMeasures',
  'pediatricUseIndicator',
  'classification',
  'marketingStatus',
  'packagedMedicinalProduct',
  'comprisedOf',
  'ingredient',
  'impurity',
  'attachedDocument',
  'masterFile',
  'contact',
  'clinicalTrial',
  'code',
  'name',
  'crossReference',
  'operation',
  'characteristic',
] as const;

/**
 * MedicinalProductDefinition - A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs).
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinition.html
 *
 * @example
 * const medicinalProductDefinition = new MedicinalProductDefinition({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinition extends DomainResource implements IMedicinalProductDefinition {
  readonly resourceType = 'MedicinalProductDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this product. Could be an MPID */
  identifier?: IIdentifier[];

  /** Regulatory type, e.g. Investigational or Authorized */
  type?: ICodeableConcept;

  /** If this medicine applies to human or veterinary uses */
  domain?: ICodeableConcept;

  /** A business identifier relating to a specific version of the product */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** The status within the lifecycle of this product record */
  status?: ICodeableConcept;

  /** The date at which the given status became applicable */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** General description of this product */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The dose form for a single part product, or combined form of a multiple part product */
  combinedPharmaceuticalDoseForm?: ICodeableConcept;

  /** The path by which the product is taken into or makes contact with the body */
  route?: ICodeableConcept[];

  /** Description of indication(s) for this product, used when structured indications are not required */
  indication?: string;

  /** Extension for indication */
  _indication?: IElement;

  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: ICodeableConcept;

  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
  additionalMonitoringIndicator?: ICodeableConcept;

  /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
  specialMeasures?: ICodeableConcept[];

  /** If authorised for use in children */
  pediatricUseIndicator?: ICodeableConcept;

  /** Allows the product to be classified by various systems */
  classification?: ICodeableConcept[];

  /** Marketing status of the medicinal product, in contrast to marketing authorization */
  marketingStatus?: IMarketingStatus[];

  /** Package type for the product */
  packagedMedicinalProduct?: ICodeableConcept[];

  /** Types of medicinal manufactured items and/or devices that this product consists of, such as tablets, capsule, or syringes */
  comprisedOf?: IReference<'ManufacturedItemDefinition' | 'DeviceDefinition'>[];

  /** The ingredients of this medicinal product - when not detailed in other resources */
  ingredient?: ICodeableConcept[];

  /** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product */
  impurity?: ICodeableReference[];

  /** Additional documentation about the medicinal product */
  attachedDocument?: IReference<'DocumentReference'>[];

  /** A master file for the medicinal product (e.g. Pharmacovigilance System Master File) */
  masterFile?: IReference<'DocumentReference'>[];

  /** A product specific contact, person (in a role), or an organization */
  contact?: IMedicinalProductDefinitionContact[];

  /** Clinical trials or studies that this product is involved in */
  clinicalTrial?: IReference<'ResearchStudy'>[];

  /** A code that this product is known by, within some formal terminology */
  code?: ICoding[];

  /** The product's name, including full name and possibly coded parts */
  name: IMedicinalProductDefinitionName[];

  /** Reference to another product, e.g. for linking authorised to investigational product */
  crossReference?: IMedicinalProductDefinitionCrossReference[];

  /** A manufacturing or administrative process for the medicinal product */
  operation?: IMedicinalProductDefinitionOperation[];

  /** Key product features such as "sugar free", "modified release" */
  characteristic?: IMedicinalProductDefinitionCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinition from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinition): MedicinalProductDefinition {
    return new MedicinalProductDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinition>): MedicinalProductDefinition {
    return new MedicinalProductDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinition) => Partial<IMedicinalProductDefinition>): MedicinalProductDefinition {
    const currentData = this.toJSON();
    return new MedicinalProductDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_PROPERTIES);
    return result as IMedicinalProductDefinition;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinition
   */
  clone(): MedicinalProductDefinition {
    return new MedicinalProductDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinition
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
