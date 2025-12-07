import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceProtein } from '../../models/resources/SubstanceProtein.js';
import type {
  ICodeableConcept,
  ISubstanceProtein,
  ISubstanceProteinSubunit,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceProteinBuilder - Fluent builder for SubstanceProtein resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceProtein = new SubstanceProteinBuilder()
 *   .setId('123')
 *   .setSequenceType(value)
 *   .addDisulfideLinkage({ ... })
 *   .build();
 */
export class SubstanceProteinBuilder extends DomainResourceBuilder<SubstanceProtein, ISubstanceProtein> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequenceType
   * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence
   */
  setSequenceType(sequenceType: ICodeableConcept): this {
    this.data.sequenceType = sequenceType;
    return this;
  }

  /**
   * Set numberOfSubunits
   * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable
   */
  setNumberOfSubunits(numberOfSubunits: number): this {
    this.data.numberOfSubunits = numberOfSubunits;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add disulfideLinkage
   * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions
   */
  addDisulfideLinkage(disulfideLinkage: string): this {
    return this.addToArray('disulfideLinkage', disulfideLinkage);
  }

  /**
   * Add subunit
   * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
   */
  addSubunit(subunit: ISubstanceProteinSubunit): this {
    return this.addToArray('subunit', subunit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceProtein instance
   */
  build(): SubstanceProtein {
    return new SubstanceProtein(this.data);
  }

  /**
   * Build and validate the SubstanceProtein instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceProtein> {
    const substanceProtein = this.build();
    await substanceProtein.validateOrThrow();
    return substanceProtein;
  }
}
