import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceVariableCharacteristic,
  IEvidenceVariableCharacteristicDefinitionByCombination,
  IEvidenceVariableCharacteristicDefinitionByTypeAndValue,
  IEvidenceVariableCharacteristicTimeFromEvent,
  IExpression,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceVariableCharacteristic */
const EVIDENCE_VARIABLE_CHARACTERISTIC_PROPERTIES = [
  'linkId',
  '_linkId',
  'description',
  '_description',
  'note',
  'exclude',
  '_exclude',
  'definitionReference',
  'definitionCanonical',
  '_definitionCanonical',
  'definitionCodeableConcept',
  'definitionExpression',
  'definitionId',
  '_definitionId',
  'definitionByTypeAndValue',
  'definitionByCombination',
  'instancesQuantity',
  'instancesRange',
  'durationQuantity',
  'durationRange',
  'timeFromEvent',
] as const;

/**
 * EvidenceVariableCharacteristic - A defining factor of the EvidenceVariable
 *
 * @see https://hl7.org/fhir/R5/evidencevariablecharacteristic.html
 *
 * @example
 * const evidenceVariableCharacteristic = new EvidenceVariableCharacteristic({
 *   // ... properties
 * });
 */
export class EvidenceVariableCharacteristic extends BackboneElement implements IEvidenceVariableCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for internal linking */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** Natural language description of the characteristic */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** Whether the characteristic is an inclusion criterion or exclusion criterion */
  exclude?: boolean;

  /** Extension for exclude */
  _exclude?: IElement;

  /** Defines the characteristic (without using type and value) by a Reference */
  definitionReference?: IReference<'EvidenceVariable' | 'Group' | 'Evidence'>;

  /** Defines the characteristic (without using type and value) by a Canonical */
  definitionCanonical?: string;

  /** Extension for definitionCanonical */
  _definitionCanonical?: IElement;

  /** Defines the characteristic (without using type and value) by a CodeableConcept */
  definitionCodeableConcept?: ICodeableConcept;

  /** Defines the characteristic (without using type and value) by an expression */
  definitionExpression?: IExpression;

  /** Defines the characteristic (without using type and value) by an id */
  definitionId?: string;

  /** Extension for definitionId */
  _definitionId?: IElement;

  /** Defines the characteristic using type and value */
  definitionByTypeAndValue?: IEvidenceVariableCharacteristicDefinitionByTypeAndValue;

  /** Used to specify how two or more characteristics are combined */
  definitionByCombination?: IEvidenceVariableCharacteristicDefinitionByCombination;

  /** Number of occurrences meeting the characteristic */
  instancesQuantity?: IQuantity;

  /** Number of occurrences meeting the characteristic */
  instancesRange?: IRange;

  /** Length of time in which the characteristic is met */
  durationQuantity?: IQuantity;

  /** Length of time in which the characteristic is met */
  durationRange?: IRange;

  /** Timing in which the characteristic is determined */
  timeFromEvent?: IEvidenceVariableCharacteristicTimeFromEvent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCharacteristic from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCharacteristic): EvidenceVariableCharacteristic {
    return new EvidenceVariableCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCharacteristic>): EvidenceVariableCharacteristic {
    return new EvidenceVariableCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCharacteristic) => Partial<IEvidenceVariableCharacteristic>): EvidenceVariableCharacteristic {
    const currentData = this.toJSON();
    return new EvidenceVariableCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CHARACTERISTIC_PROPERTIES);
    return result as IEvidenceVariableCharacteristic;
  }

  /**
   * Create a deep clone of this EvidenceVariableCharacteristic
   */
  clone(): EvidenceVariableCharacteristic {
    return new EvidenceVariableCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCharacteristic
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCharacteristic'];
    return parts.join(', ');
  }
}
