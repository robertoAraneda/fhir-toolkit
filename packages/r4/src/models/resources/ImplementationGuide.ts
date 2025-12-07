import { DomainResource } from '../base/DomainResource.js';
import type {
  FHIRVersionType,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IImplementationGuide,
  IImplementationGuideDefinition,
  IImplementationGuideDependsOn,
  IImplementationGuideGlobal,
  IImplementationGuideManifest,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ImplementationGuide */
const IMPLEMENTATION_GUIDE_PROPERTIES = [
  'url',
  '_url',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'copyright',
  '_copyright',
  'packageId',
  '_packageId',
  'license',
  '_license',
  'fhirVersion',
  '_fhirVersion',
  'dependsOn',
  'global',
  'definition',
  'manifest',
] as const;

/**
 * ImplementationGuide - A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 *
 * @see https://hl7.org/fhir/R4/implementationguide.html
 *
 * @example
 * const implementationGuide = new ImplementationGuide({
 *   resourceType: 'ImplementationGuide',
 *   // ... properties
 * });
 */
export class ImplementationGuide extends DomainResource implements IImplementationGuide {
  readonly resourceType = 'ImplementationGuide' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the implementation guide */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this implementation guide (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this implementation guide (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the implementation guide */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for implementation guide (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** NPM Package name for IG */
  packageId: string;

  /** Extension for packageId */
  _packageId?: IElement;

  /** SPDX license code for this IG (or not-open-source) */
  license?: string;

  /** Extension for license */
  _license?: IElement;

  /** FHIR Version(s) this Implementation Guide targets */
  fhirVersion: FHIRVersionType[];

  /** Extension for fhirVersion */
  _fhirVersion?: IElement;

  /** Another Implementation guide this depends on */
  dependsOn?: IImplementationGuideDependsOn[];

  /** Profiles that apply globally */
  global?: IImplementationGuideGlobal[];

  /** Information needed to build the IG */
  definition?: IImplementationGuideDefinition;

  /** Information about an assembled IG */
  manifest?: IImplementationGuideManifest;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuide>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuide from a JSON object
   */
  static fromJSON(json: IImplementationGuide): ImplementationGuide {
    return new ImplementationGuide(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuide with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuide>): ImplementationGuide {
    return new ImplementationGuide({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuide by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuide) => Partial<IImplementationGuide>): ImplementationGuide {
    const currentData = this.toJSON();
    return new ImplementationGuide({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuide)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuide {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_PROPERTIES);
    return result as IImplementationGuide;
  }

  /**
   * Create a deep clone of this ImplementationGuide
   */
  clone(): ImplementationGuide {
    return new ImplementationGuide(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuide
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuide'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
