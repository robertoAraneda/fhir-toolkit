import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceNucleicAcid } from '../../models/resources/SubstanceNucleicAcid.js';
import type {
  ICodeableConcept,
  ISubstanceNucleicAcid,
  ISubstanceNucleicAcidSubunit,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceNucleicAcidBuilder - Fluent builder for SubstanceNucleicAcid resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceNucleicAcid = new SubstanceNucleicAcidBuilder()
 *   .setId('123')
 *   .setSequenceType(value)
 *   .addSubunit({ ... })
 *   .build();
 */
export class SubstanceNucleicAcidBuilder extends DomainResourceBuilder<SubstanceNucleicAcid, ISubstanceNucleicAcid> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequenceType
   * The type of the sequence shall be specified based on a controlled vocabulary
   */
  setSequenceType(sequenceType: ICodeableConcept): this {
    this.data.sequenceType = sequenceType;
    return this;
  }

  /**
   * Set numberOfSubunits
   * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit
   */
  setNumberOfSubunits(numberOfSubunits: number): this {
    this.data.numberOfSubunits = numberOfSubunits;
    return this;
  }

  /**
   * Set areaOfHybridisation
   * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”
   */
  setAreaOfHybridisation(areaOfHybridisation: string): this {
    this.data.areaOfHybridisation = areaOfHybridisation;
    return this;
  }

  /**
   * Set oligoNucleotideType
   * (TBC)
   */
  setOligoNucleotideType(oligoNucleotideType: ICodeableConcept): this {
    this.data.oligoNucleotideType = oligoNucleotideType;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subunit
   * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
   */
  addSubunit(subunit: ISubstanceNucleicAcidSubunit): this {
    return this.addToArray('subunit', subunit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceNucleicAcid instance
   */
  build(): SubstanceNucleicAcid {
    return new SubstanceNucleicAcid(this.data);
  }

  /**
   * Build and validate the SubstanceNucleicAcid instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceNucleicAcid> {
    const substanceNucleicAcid = this.build();
    await substanceNucleicAcid.validateOrThrow();
    return substanceNucleicAcid;
  }
}
