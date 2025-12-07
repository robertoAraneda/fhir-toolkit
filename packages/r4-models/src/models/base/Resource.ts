import type { IResource, IMeta, IElement } from '@fhir-toolkit/r4-types';

/** Properties for Resource in FHIR-defined order */
export const RESOURCE_PROPERTIES = [
  'id',
  'meta',
  'implicitRules',
  '_implicitRules',
  'language',
  '_language',
] as const;

/**
 * Base class for all FHIR resources
 */
export abstract class Resource {
  // Resource properties
  abstract readonly resourceType: string;
  id?: string;
  meta?: IMeta;
  implicitRules?: string;
  _implicitRules?: IElement;
  language?: string;
  _language?: IElement;

  constructor(data?: any) {
    if (data) {
      if ('id' in data) this.id = data.id;
      if ('meta' in data) this.meta = data.meta;
      if ('implicitRules' in data) this.implicitRules = data.implicitRules;
      if ('_implicitRules' in data) this._implicitRules = data._implicitRules;
      if ('language' in data) this.language = data.language;
      if ('_language' in data) this._language = data._language;
    }
  }

  /**
   * Assign properties from data object
   */
  protected assignProps(data: any, props: readonly string[]): void {
    for (const prop of props) {
      if (prop in data) {
        (this as any)[prop] = data[prop];
      }
    }
  }

  /**
   * Serialize properties to a target object in order (only defined values)
   */
  protected serializePropsTo(target: Record<string, any>, props: readonly string[]): void {
    for (const prop of props) {
      const value = (this as any)[prop];
      if (value !== undefined) {
        target[prop] = value;
      }
    }
  }

  /**
   * Serialize Resource properties to target object in FHIR order
   */
  protected serializeResourceTo(target: Record<string, any>): void {
    this.serializePropsTo(target, RESOURCE_PROPERTIES);
  }

  /**
   * Deep clone an object
   */
  protected deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Validate the resource against FHIR StructureDefinitions
   * @returns OperationOutcome with validation results
   */
  async validate(): Promise<any> {
    const { validate } = await import('@fhir-toolkit/yafv');
    // Use toJSON() to get only defined properties for validation
    return validate((this as any).toJSON());
  }

  /**
   * Validate the resource and throw if invalid
   * @throws Error with validation details if validation fails
   */
  async validateOrThrow(): Promise<void> {
    const { isValid } = await import('@fhir-toolkit/yafv');
    const outcome = await this.validate();

    if (!isValid(outcome)) {
      const errors = outcome.issue
        ?.filter((i: any) => i.severity === 'error')
        .map((i: any) => `${i.diagnostics || i.details?.text || 'Validation error'}`)
        .join('; ');

      throw new Error(`Validation failed: ${errors || 'Unknown error'}`);
    }
  }
}
