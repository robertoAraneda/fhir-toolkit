import type { IDomainResource, INarrative, IExtension } from '@fhir-toolkit/r4-types';
import { Resource } from './Resource.js';

/** Properties for DomainResource in FHIR-defined order */
export const DOMAIN_RESOURCE_PROPERTIES = [
  'text',
  'contained',
  'extension',
  'modifierExtension',
] as const;

/**
 * Base class for all domain resources
 */
export abstract class DomainResource extends Resource {
  // DomainResource properties (extends Resource properties)
  text?: INarrative;
  contained?: any[];
  extension?: IExtension[];
  modifierExtension?: IExtension[];

  constructor(data?: any) {
    super(data);
    if (data) {
      if ('text' in data) this.text = data.text;
      if ('contained' in data) this.contained = data.contained;
      if ('extension' in data) this.extension = data.extension;
      if ('modifierExtension' in data) this.modifierExtension = data.modifierExtension;
    }
  }

  /**
   * Serialize DomainResource properties to target object in FHIR order
   * (includes Resource properties first)
   */
  protected serializeDomainResourceTo(target: Record<string, any>): void {
    this.serializeResourceTo(target);
    this.serializePropsTo(target, DOMAIN_RESOURCE_PROPERTIES);
  }
}
