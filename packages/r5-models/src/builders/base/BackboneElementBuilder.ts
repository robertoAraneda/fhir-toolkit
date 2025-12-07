import type { IBackboneElement, IExtension } from '@fhir-toolkit/r5-types';
import { ElementBuilder } from './ElementBuilder.js';

/**
 * Base builder for all backbone elements
 */
export abstract class BackboneElementBuilder<TModel, TInterface extends IBackboneElement> extends ElementBuilder<TModel, TInterface> {
  /**
   * Add a modifier extension
   */
  addModifierExtension(extension: IExtension): this {
    return this.addToArray('modifierExtension', extension);
  }
}
