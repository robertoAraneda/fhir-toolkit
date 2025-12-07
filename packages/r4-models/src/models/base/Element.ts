import type { IElement, IExtension } from '@fhir-toolkit/r4-types';

/** Properties for Element in FHIR-defined order */
export const ELEMENT_PROPERTIES = ['id', 'extension'] as const;

/**
 * Base class for all FHIR elements
 */
export abstract class Element {
  // Element properties
  id?: string;
  extension?: IExtension[];

  constructor(data?: any) {
    if (data) {
      if ('id' in data) this.id = data.id;
      if ('extension' in data) this.extension = data.extension;
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
   * Serialize Element properties to target object in FHIR order
   */
  protected serializeElementTo(target: Record<string, any>): void {
    this.serializePropsTo(target, ELEMENT_PROPERTIES);
  }

  /**
   * Deep clone an object
   */
  protected deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Validate the element against FHIR StructureDefinitions
   * @returns OperationOutcome with validation results
   */
  async validate(): Promise<any> {
    const { validate } = await import('@fhir-toolkit/yafv');
    // Use toJSON() to get only defined properties for validation
    return validate((this as any).toJSON());
  }

  /**
   * Validate the element and throw if invalid
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
