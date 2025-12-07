import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IExampleScenario,
  IExampleScenarioActor,
  IExampleScenarioInstance,
  IExampleScenarioProcess,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExampleScenario */
const EXAMPLE_SCENARIO_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'useContext',
  'jurisdiction',
  'copyright',
  '_copyright',
  'purpose',
  '_purpose',
  'actor',
  'instance',
  'process',
  'workflow',
  '_workflow',
] as const;

/**
 * ExampleScenario - Example of workflow instance.
 *
 * @see https://hl7.org/fhir/R4/examplescenario.html
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

  /** Name for this example scenario (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

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

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for example scenario (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** The purpose of the example, e.g. to illustrate a scenario */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Actor participating in the resource */
  actor?: IExampleScenarioActor[];

  /** Each resource and each version that is present in the workflow */
  instance?: IExampleScenarioInstance[];

  /** Each major process - a group of operations */
  process?: IExampleScenarioProcess[];

  /** Another nested workflow */
  workflow?: string[];

  /** Extension for workflow */
  _workflow?: IElement;

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
