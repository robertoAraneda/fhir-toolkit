import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IExampleScenario,
  IExampleScenarioActor,
  IExampleScenarioInstance,
  IExampleScenarioProcess,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExampleScenario */
const EXAMPLE_SCENARIO_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
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
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'actor',
  'instance',
  'process',
] as const;

/**
 * ExampleScenario - Example of workflow instance.
 *
 * @see https://hl7.org/fhir/R5/examplescenario.html
 *
 * @example
 * const exampleScenario = new ExampleScenario({
 *   // ... properties
 * });
 */
export class ExampleScenario extends DomainResource implements IExampleScenario {
  readonly resourceType = 'ExampleScenario' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the example scenario */
  identifier?: IIdentifier[];

  /** Business version of the example scenario */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** To be removed? */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this example scenario (human friendly) */
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

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the ExampleScenario */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for example scenario (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** The purpose of the example, e.g. to illustrate a scenario */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** Individual involved in exchange */
  actor?: IExampleScenarioActor[];

  /** Data used in the scenario */
  instance?: IExampleScenarioInstance[];

  /** Major process within scenario */
  process?: IExampleScenarioProcess[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IExampleScenario>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EXAMPLE_SCENARIO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExampleScenario from a JSON object
   */
  static fromJSON(json: IExampleScenario): ExampleScenario {
    return new ExampleScenario(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExampleScenario with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExampleScenario>): ExampleScenario {
    return new ExampleScenario({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExampleScenario by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExampleScenario) => Partial<IExampleScenario>): ExampleScenario {
    const currentData = this.toJSON();
    return new ExampleScenario({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExampleScenario)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExampleScenario {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EXAMPLE_SCENARIO_PROPERTIES);
    return result as IExampleScenario;
  }

  /**
   * Create a deep clone of this ExampleScenario
   */
  clone(): ExampleScenario {
    return new ExampleScenario(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExampleScenario
   */
  toString(): string {
    const parts: string[] = ['ExampleScenario'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
