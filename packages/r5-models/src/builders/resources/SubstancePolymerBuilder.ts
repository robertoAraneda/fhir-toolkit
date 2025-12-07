import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstancePolymer } from '../../models/resources/SubstancePolymer.js';
import type {
  ICodeableConcept,
  IIdentifier,
  ISubstancePolymer,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerRepeat,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerBuilder - Fluent builder for SubstancePolymer resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymer = new SubstancePolymerBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addCopolymerConnectivity({ ... })
 *   .build();
 */
export class SubstancePolymerBuilder extends DomainResourceBuilder<SubstancePolymer, ISubstancePolymer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set class
   * Overall type of the polymer
   */
  setClass(_class: ICodeableConcept): this {
    this.data.class = _class;
    return this;
  }

  /**
   * Set geometry
   * Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic
   */
  setGeometry(geometry: ICodeableConcept): this {
    this.data.geometry = geometry;
    return this;
  }

  /**
   * Set modification
   * Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder
   */
  setModification(modification: string): this {
    this.data.modification = modification;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add copolymerConnectivity
   * Descrtibes the copolymer sequence type (polymer connectivity)
   */
  addCopolymerConnectivity(copolymerConnectivity: ICodeableConcept): this {
    return this.addToArray('copolymerConnectivity', copolymerConnectivity);
  }

  /**
   * Add monomerSet
   * Todo
   */
  addMonomerSet(monomerSet: ISubstancePolymerMonomerSet): this {
    return this.addToArray('monomerSet', monomerSet);
  }

  /**
   * Add repeat
   * Specifies and quantifies the repeated units and their configuration
   */
  addRepeat(repeat: ISubstancePolymerRepeat): this {
    return this.addToArray('repeat', repeat);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymer instance
   */
  build(): SubstancePolymer {
    return new SubstancePolymer(this.data);
  }

  /**
   * Build and validate the SubstancePolymer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymer> {
    const substancePolymer = this.build();
    await substancePolymer.validateOrThrow();
    return substancePolymer;
  }
}
