import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstancePolymer } from '../../models/resources/SubstancePolymer.js';
import type {
  ICodeableConcept,
  ISubstancePolymer,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerRepeat,
} from '@fhir-toolkit/r4-types';

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
 *   .setClass(value)
 *   .addCopolymerConnectivity({ ... })
 *   .build();
 */
export class SubstancePolymerBuilder extends DomainResourceBuilder<SubstancePolymer, ISubstancePolymer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set class
   * Todo
   */
  setClass(_class: ICodeableConcept): this {
    this.data.class = _class;
    return this;
  }

  /**
   * Set geometry
   * Todo
   */
  setGeometry(geometry: ICodeableConcept): this {
    this.data.geometry = geometry;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add copolymerConnectivity
   * Todo
   */
  addCopolymerConnectivity(copolymerConnectivity: ICodeableConcept): this {
    return this.addToArray('copolymerConnectivity', copolymerConnectivity);
  }

  /**
   * Add modification
   * Todo
   */
  addModification(modification: string): this {
    return this.addToArray('modification', modification);
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
   * Todo
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
