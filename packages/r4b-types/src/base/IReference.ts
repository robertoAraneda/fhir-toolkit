import type { IElement } from './IElement.js';

/**
 * Identifier Interface (simplified for Reference)
 * Full version is in generated types
 */
interface IIdentifierBase {
  use?: string;
  type?: unknown;
  system?: string;
  value?: string;
  period?: unknown;
  assigner?: unknown;
}

/**
 * Reference Interface
 *
 * A reference from one resource to another.
 *
 * @typeParam T - Union of resource type names this reference can point to, defaults to string
 * @see https://hl7.org/fhir/R4/reference.html
 */
export interface IReference<T extends string = string> extends IElement {
  /**
   * Literal reference, Relative, internal or absolute URL
   */
  reference?: string;
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * Type the reference refers to (e.g. "Patient")
   */
  type?: T;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Logical reference, when literal reference is not known
   */
  identifier?: IIdentifierBase;

  /**
   * Text alternative for the resource
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;
}
