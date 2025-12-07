import type { IDomainResource, INarrative, IExtension } from '@fhir-toolkit/r4b-types';
import { ResourceBuilder } from './ResourceBuilder.js';

/**
 * Base builder for all domain resources
 */
export abstract class DomainResourceBuilder<TModel, TInterface extends IDomainResource> extends ResourceBuilder<TModel, TInterface> {
  /**
   * Set text
   */
  setText(text: INarrative): this {
    this.data.text = text;
    return this;
  }

  /**
   * Add contained resource
   */
  addContained(resource: any): this {
    return this.addToArray('contained', resource);
  }

  /**
   * Add extension
   */
  addExtension(extension: IExtension): this {
    return this.addToArray('extension', extension);
  }

  /**
   * Add modifier extension
   */
  addModifierExtension(extension: IExtension): this {
    return this.addToArray('modifierExtension', extension);
  }
}
