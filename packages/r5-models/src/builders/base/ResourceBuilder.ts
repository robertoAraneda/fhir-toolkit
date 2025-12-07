import type { IResource, IMeta } from '@fhir-toolkit/r5-types';

/**
 * Base builder for all FHIR resources
 */
export abstract class ResourceBuilder<TModel, TInterface extends IResource> {
  protected data: Partial<TInterface> = {};

  /**
   * Set the resource ID
   */
  setId(id: string): this {
    this.data.id = id;
    return this;
  }

  /**
   * Set meta
   */
  setMeta(meta: IMeta): this {
    this.data.meta = meta;
    return this;
  }

  /**
   * Set implicit rules
   */
  setImplicitRules(implicitRules: string): this {
    this.data.implicitRules = implicitRules;
    return this;
  }

  /**
   * Set language
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
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
