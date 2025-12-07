import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConformanceExpectationType,
  IElement,
  IReference,
  IRequirementsStatement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequirementsStatement */
const REQUIREMENTS_STATEMENT_PROPERTIES = [
  'key',
  '_key',
  'label',
  '_label',
  'conformance',
  '_conformance',
  'conditionality',
  '_conditionality',
  'requirement',
  '_requirement',
  'derivedFrom',
  '_derivedFrom',
  'parent',
  '_parent',
  'satisfiedBy',
  '_satisfiedBy',
  'reference',
  '_reference',
  'source',
] as const;

/**
 * RequirementsStatement - Actual statement as markdown
 *
 * @see https://hl7.org/fhir/R4/requirementsstatement.html
 *
 * @example
 * const requirementsStatement = new RequirementsStatement({
 *   // ... properties
 * });
 */
export class RequirementsStatement extends BackboneElement implements IRequirementsStatement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Key that identifies this statement */
  key: string;

  /** Extension for key */
  _key?: IElement;

  /** Short Human label for this statement */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** SHALL | SHOULD | MAY | SHOULD-NOT */
  conformance?: ConformanceExpectationType[];

  /** Extension for conformance */
  _conformance?: IElement;

  /** Set to true if requirements statement is conditional */
  conditionality?: boolean;

  /** Extension for conditionality */
  _conditionality?: IElement;

  /** The actual requirement */
  requirement: string;

  /** Extension for requirement */
  _requirement?: IElement;

  /** Another statement this clarifies/restricts ([url#]key) */
  derivedFrom?: string;

  /** Extension for derivedFrom */
  _derivedFrom?: IElement;

  /** A larger requirement that this requirement helps to refine and enable */
  parent?: string;

  /** Extension for parent */
  _parent?: IElement;

  /** Design artifact that satisfies this requirement */
  satisfiedBy?: string[];

  /** Extension for satisfiedBy */
  _satisfiedBy?: IElement;

  /** External artifact (rule/document etc. that) created this requirement */
  reference?: string[];

  /** Extension for reference */
  _reference?: IElement;

  /** Who asked for this statement */
  source?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequirementsStatement>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUIREMENTS_STATEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequirementsStatement from a JSON object
   */
  static fromJSON(json: IRequirementsStatement): RequirementsStatement {
    return new RequirementsStatement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequirementsStatement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequirementsStatement>): RequirementsStatement {
    return new RequirementsStatement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequirementsStatement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequirementsStatement) => Partial<IRequirementsStatement>): RequirementsStatement {
    const currentData = this.toJSON();
    return new RequirementsStatement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequirementsStatement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequirementsStatement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUIREMENTS_STATEMENT_PROPERTIES);
    return result as IRequirementsStatement;
  }

  /**
   * Create a deep clone of this RequirementsStatement
   */
  clone(): RequirementsStatement {
    return new RequirementsStatement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequirementsStatement
   */
  toString(): string {
    const parts: string[] = ['RequirementsStatement'];
    return parts.join(', ');
  }
}
