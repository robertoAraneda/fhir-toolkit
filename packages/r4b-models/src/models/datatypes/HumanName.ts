import { Element } from '../base/Element.js';
import type {
  IElement,
  IHumanName,
  IPeriod,
  NameUseType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to HumanName */
const HUMAN_NAME_PROPERTIES = [
  'use',
  '_use',
  'text',
  '_text',
  'family',
  '_family',
  'given',
  '_given',
  'prefix',
  '_prefix',
  'suffix',
  '_suffix',
  'period',
] as const;

/**
 * HumanName - A human's name with the ability to identify parts and usage.
 *
 * @see https://hl7.org/fhir/R4/humanname.html
 *
 * @example
 * const humanName = new HumanName({
 *   // ... properties
 * });
 */
export class HumanName extends Element implements IHumanName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** usual | official | temp | nickname | anonymous | old | maiden */
  use?: NameUseType;

  /** Extension for use */
  _use?: IElement;

  /** Text representation of the full name */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Family name (often called 'Surname') */
  family?: string;

  /** Extension for family */
  _family?: IElement;

  /** Given names (not always 'first'). Includes middle names */
  given?: string[];

  /** Extension for given */
  _given?: IElement;

  /** Parts that come before the name */
  prefix?: string[];

  /** Extension for prefix */
  _prefix?: IElement;

  /** Parts that come after the name */
  suffix?: string[];

  /** Extension for suffix */
  _suffix?: IElement;

  /** Time period when name was/is in use */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IHumanName>) {
    super(data);
    if (data) {
      this.assignProps(data, HUMAN_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create HumanName from a JSON object
   */
  static fromJSON(json: IHumanName): HumanName {
    return new HumanName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new HumanName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IHumanName>): HumanName {
    return new HumanName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new HumanName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IHumanName) => Partial<IHumanName>): HumanName {
    const currentData = this.toJSON();
    return new HumanName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IHumanName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IHumanName {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, HUMAN_NAME_PROPERTIES);
    return result as IHumanName;
  }

  /**
   * Create a deep clone of this HumanName
   */
  clone(): HumanName {
    return new HumanName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the HumanName
   */
  toString(): string {
    const parts: string[] = ['HumanName'];
    return parts.join(', ');
  }
}
