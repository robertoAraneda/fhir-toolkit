import { Element } from '../base/Element.js';
import type {
  IElement,
  IExpression,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Expression */
const EXPRESSION_PROPERTIES = [
  'description',
  '_description',
  'name',
  '_name',
  'language',
  '_language',
  'expression',
  '_expression',
  'reference',
  '_reference',
] as const;

/**
 * Expression - A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 *
 * @see https://hl7.org/fhir/R4/expression.html
 *
 * @example
 * const expression = new Expression({
 *   // ... properties
 * });
 */
export class Expression extends Element implements IExpression {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Natural language description of the condition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Short name assigned to expression for reuse */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** text/cql | text/fhirpath | application/x-fhir-query | text/cql-identifier | text/cql-expression | etc. */
  language: string;

  /** Extension for language */
  _language?: IElement;

  /** Expression in specified language */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** Where the expression is found */
  reference?: string;

  /** Extension for reference */
  _reference?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExpression>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPRESSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Expression from a JSON object
   */
  static fromJSON(json: IExpression): Expression {
    return new Expression(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Expression with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExpression>): Expression {
    return new Expression({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Expression by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExpression) => Partial<IExpression>): Expression {
    const currentData = this.toJSON();
    return new Expression({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExpression)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExpression {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, EXPRESSION_PROPERTIES);
    return result as IExpression;
  }

  /**
   * Create a deep clone of this Expression
   */
  clone(): Expression {
    return new Expression(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Expression
   */
  toString(): string {
    const parts: string[] = ['Expression'];
    return parts.join(', ');
  }
}
