import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceDefinition } from '../../models/resources/SubstanceDefinition.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISubstanceDefinition,
  ISubstanceDefinitionCharacterization,
  ISubstanceDefinitionCode,
  ISubstanceDefinitionMoiety,
  ISubstanceDefinitionMolecularWeight,
  ISubstanceDefinitionName,
  ISubstanceDefinitionProperty,
  ISubstanceDefinitionRelationship,
  ISubstanceDefinitionSourceMaterial,
  ISubstanceDefinitionStructure,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionBuilder - Fluent builder for SubstanceDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinition = new SubstanceDefinitionBuilder()
 *   .setId('123')
 *   .setVersion(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SubstanceDefinitionBuilder extends DomainResourceBuilder<SubstanceDefinition, ISubstanceDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set version
   * A business level version identifier of the substance
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set status
   * Status of substance within the catalogue e.g. active, retired
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set domain
   * If the substance applies to human or veterinary use
   */
  setDomain(domain: ICodeableConcept): this {
    this.data.domain = domain;
    return this;
  }

  /**
   * Set description
   * Textual description of the substance
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set referenceInformation
   * General information detailing this substance
   */
  setReferenceInformation(referenceInformation: IReference<'SubstanceReferenceInformation'>): this {
    this.data.referenceInformation = referenceInformation;
    return this;
  }

  /**
   * Set structure
   * Structural information
   */
  setStructure(structure: ISubstanceDefinitionStructure): this {
    this.data.structure = structure;
    return this;
  }

  /**
   * Set nucleicAcid
   * Data items specific to nucleic acids
   */
  setNucleicAcid(nucleicAcid: IReference<'SubstanceNucleicAcid'>): this {
    this.data.nucleicAcid = nucleicAcid;
    return this;
  }

  /**
   * Set polymer
   * Data items specific to polymers
   */
  setPolymer(polymer: IReference<'SubstancePolymer'>): this {
    this.data.polymer = polymer;
    return this;
  }

  /**
   * Set protein
   * Data items specific to proteins
   */
  setProtein(protein: IReference<'SubstanceProtein'>): this {
    this.data.protein = protein;
    return this;
  }

  /**
   * Set sourceMaterial
   * Material or taxonomic/anatomical source
   */
  setSourceMaterial(sourceMaterial: ISubstanceDefinitionSourceMaterial): this {
    this.data.sourceMaterial = sourceMaterial;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier by which this substance is known
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add classification
   * A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity
   */
  addClassification(classification: ICodeableConcept): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add grade
   * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP)
   */
  addGrade(grade: ICodeableConcept): this {
    return this.addToArray('grade', grade);
  }

  /**
   * Add informationSource
   * Supporting literature
   */
  addInformationSource(informationSource: IReference<'Citation'>): this {
    return this.addToArray('informationSource', informationSource);
  }

  /**
   * Add note
   * Textual comment about the substance's catalogue or registry record
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add manufacturer
   * The entity that creates, makes, produces or fabricates the substance
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add supplier
   * An entity that is the source for the substance. It may be different from the manufacturer
   */
  addSupplier(supplier: IReference<'Organization'>): this {
    return this.addToArray('supplier', supplier);
  }

  /**
   * Add moiety
   * Moiety, for structural modifications
   */
  addMoiety(moiety: ISubstanceDefinitionMoiety): this {
    return this.addToArray('moiety', moiety);
  }

  /**
   * Add characterization
   * General specifications for this substance
   */
  addCharacterization(characterization: ISubstanceDefinitionCharacterization): this {
    return this.addToArray('characterization', characterization);
  }

  /**
   * Add property
   * General specifications for this substance
   */
  addProperty(property: ISubstanceDefinitionProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add molecularWeight
   * The average mass of a molecule of a compound
   */
  addMolecularWeight(molecularWeight: ISubstanceDefinitionMolecularWeight): this {
    return this.addToArray('molecularWeight', molecularWeight);
  }

  /**
   * Add code
   * Codes associated with the substance
   */
  addCode(code: ISubstanceDefinitionCode): this {
    return this.addToArray('code', code);
  }

  /**
   * Add name
   * Names applicable to this substance
   */
  addName(name: ISubstanceDefinitionName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add relationship
   * A link between this substance and another
   */
  addRelationship(relationship: ISubstanceDefinitionRelationship): this {
    return this.addToArray('relationship', relationship);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinition instance
   */
  build(): SubstanceDefinition {
    return new SubstanceDefinition(this.data);
  }

  /**
   * Build and validate the SubstanceDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinition> {
    const substanceDefinition = this.build();
    await substanceDefinition.validateOrThrow();
    return substanceDefinition;
  }
}
