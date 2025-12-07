import type { IElement, IExtension } from '@fhir-toolkit/r5-types';

/**
 * Base builder for all FHIR elements
 */
export abstract class ElementBuilder<TModel, TInterface extends IElement> {
  protected data: Partial<TInterface> = {};

  /**
   * Set the element ID
   */
  setId(id: string): this {
    this.data.id = id;
    return this;
  }

  /**
   * Add an extension
   */
  addExtension(extension: IExtension): this {
    return this.addToArray('extension', extension);
  }

  /**
   * Helper to add items to array properties
   */
  protected addToArray(key: string, value: any): this {
    if (!(this.data as any)[key]) {
      (this.data as any)[key] = [];
    }
    ((this.data as any)[key] as any[]).push(value);
    return this;
  }

  /**
   * Helper to set choice types (e.g., deceased[x])
   */
  protected setChoiceType<K extends keyof TInterface>(
    key: K,
    value: any,
    otherKeys: K[]
  ): this {
    // Clear other choice type variants
    for (const otherKey of otherKeys) {
      delete this.data[otherKey];
    }
    // Set the chosen variant
    this.data[key] = value;
    return this;
  }

  /**
   * Build the model instance
   */
  abstract build(): TModel;
}
