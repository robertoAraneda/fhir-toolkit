import { DomainResource } from '../base/DomainResource.js';
import type {
  IBasic,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Basic */
const BASIC_PROPERTIES = [
  'identifier',
  'code',
  'subject',
  'created',
  '_created',
  'author',
] as const;

/**
 * Basic - Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 *
 * @see https://hl7.org/fhir/R4/basic.html
 *
 * @example
 * const basic = new Basic({
 *   resourceType: 'Basic',
 *   // ... properties
 * });
 */
export class Basic extends DomainResource implements IBasic {
  readonly resourceType = 'Basic' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** Kind of Resource */
  code: ICodeableConcept;

  /** Identifies the focus of this resource */
  subject?: IReference<'Resource'>;

  /** When created */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Who created */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBasic>) {
    super(data);
    if (data) {
      this.assignProps(data, BASIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Basic from a JSON object
   */
  static fromJSON(json: IBasic): Basic {
    return new Basic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Basic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBasic>): Basic {
    return new Basic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Basic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBasic) => Partial<IBasic>): Basic {
    const currentData = this.toJSON();
    return new Basic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBasic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBasic {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BASIC_PROPERTIES);
    return result as IBasic;
  }

  /**
   * Create a deep clone of this Basic
   */
  clone(): Basic {
    return new Basic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Basic
   */
  toString(): string {
    const parts: string[] = ['Basic'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
