import type { IBackboneElement, IExtension } from '@fhir-toolkit/r4b-types';
import { Element } from './Element.js';

/** Properties for BackboneElement in FHIR-defined order (excluding Element properties) */
export const BACKBONE_ELEMENT_PROPERTIES = ['modifierExtension'] as const;

/**
 * Base class for all backbone elements
 */
export abstract class BackboneElement extends Element {
  // BackboneElement properties
  modifierExtension?: IExtension[];

  constructor(data?: any) {
    super(data);
    if (data) {
      if ('modifierExtension' in data) this.modifierExtension = data.modifierExtension;
    }
  }

  /**
   * Serialize BackboneElement properties to target object in FHIR order
   * (includes Element properties first)
   */
  protected serializeBackboneElementTo(target: Record<string, any>): void {
    this.serializeElementTo(target);
    this.serializePropsTo(target, BACKBONE_ELEMENT_PROPERTIES);
  }
}
