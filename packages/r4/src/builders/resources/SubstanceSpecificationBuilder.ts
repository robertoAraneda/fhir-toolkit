import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceSpecification } from '../../models/resources/SubstanceSpecification.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISubstanceSpecification,
  ISubstanceSpecificationCode,
  ISubstanceSpecificationMoiety,
  ISubstanceSpecificationName,
  ISubstanceSpecificationProperty,
  ISubstanceSpecificationRelationship,
  ISubstanceSpecificationStructure,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationBuilder - Fluent builder for SubstanceSpecification resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecification = new SubstanceSpecificationBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceSpecificationBuilder extends DomainResourceBuilder<SubstanceSpecification, ISubstanceSpecification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifier by which this substance is known
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * High level categorization, e.g. polymer or nucleic acid
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * Status of substance within the catalogue e.g. approved
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set domain
   * If the substance applies to only human or veterinary use
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
   * Set comment
   * Textual comment about this record of a substance
   */
  setComment(comment: string): this {
    this.data.comment = comment;
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
  setStructure(structure: ISubstanceSpecificationStructure): this {
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
   * Material or taxonomic/anatomical source for the substance
   */
  setSourceMaterial(sourceMaterial: IReference<'SubstanceSourceMaterial'>): this {
    this.data.sourceMaterial = sourceMaterial;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  /**
   * Add moiety
   * Moiety, for structural modifications
   */
  addMoiety(moiety: ISubstanceSpecificationMoiety): this {
    return this.addToArray('moiety', moiety);
  }

  /**
   * Add property
   * General specifications for this substance, including how it is related to other substances
   */
  addProperty(property: ISubstanceSpecificationProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add code
   * Codes associated with the substance
   */
  addCode(code: ISubstanceSpecificationCode): this {
    return this.addToArray('code', code);
  }

  /**
   * Add name
   * Names applicable to this substance
   */
  addName(name: ISubstanceSpecificationName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add molecularWeight
   * The molecular weight or weight range (for proteins, polymers or nucleic acids)
   */
  addMolecularWeight(molecularWeight: ISubstanceSpecificationStructureIsotopeMolecularWeight): this {
    return this.addToArray('molecularWeight', molecularWeight);
  }

  /**
   * Add relationship
   * A link between this substance and another, with details of the relationship
   */
  addRelationship(relationship: ISubstanceSpecificationRelationship): this {
    return this.addToArray('relationship', relationship);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecification instance
   */
  build(): SubstanceSpecification {
    return new SubstanceSpecification(this.data);
  }

  /**
   * Build and validate the SubstanceSpecification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecification> {
    const substanceSpecification = this.build();
    await substanceSpecification.validateOrThrow();
    return substanceSpecification;
  }
}
