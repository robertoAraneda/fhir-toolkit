import { BackboneElement } from '../base/BackboneElement.js';
import type {
  GroupMeasureType,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IElement,
  IEvidenceVariableCharacteristic,
  IExpression,
  IPeriod,
  IReference,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EvidenceVariableCharacteristic */
const EVIDENCE_VARIABLE_CHARACTERISTIC_PROPERTIES = [
  'description',
  '_description',
  'definitionReference',
  'definitionCanonical',
  '_definitionCanonical',
  'definitionCodeableConcept',
  'definitionExpression',
  'definitionDataRequirement',
  'definitionTriggerDefinition',
  'usageContext',
  'exclude',
  '_exclude',
  'participantEffectiveDateTime',
  '_participantEffectiveDateTime',
  'participantEffectivePeriod',
  'participantEffectiveDuration',
  'participantEffectiveTiming',
  'timeFromStart',
  'groupMeasure',
  '_groupMeasure',
] as const;

/**
 * EvidenceVariableCharacteristic - What defines the members of the evidence element
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristic.html
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

  /** Natural language description of the characteristic */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** What code or expression defines members? */
  definitionReference?: IReference;

  /** What code or expression defines members? */
  definitionCanonical?: string;

  /** Extension for definitionCanonical */
  _definitionCanonical?: IElement;

  /** What code or expression defines members? */
  definitionCodeableConcept?: ICodeableConcept;

  /** What code or expression defines members? */
  definitionExpression?: IExpression;

  /** What code or expression defines members? */
  definitionDataRequirement?: IDataRequirement;

  /** What code or expression defines members? */
  definitionTriggerDefinition?: ITriggerDefinition;

  /** What code/value pairs define members? */
  usageContext?: IUsageContext[];

  /** Whether the characteristic includes or excludes members */
  exclude?: boolean;

  /** Extension for exclude */
  _exclude?: IElement;

  /** What time period do participants cover */
  participantEffectiveDateTime?: string;

  /** Extension for participantEffectiveDateTime */
  _participantEffectiveDateTime?: IElement;

  /** What time period do participants cover */
  participantEffectivePeriod?: IPeriod;

  /** What time period do participants cover */
  participantEffectiveDuration?: IDuration;

  /** What time period do participants cover */
  participantEffectiveTiming?: ITiming;

  /** Observation time from study start */
  timeFromStart?: IDuration;

  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  groupMeasure?: GroupMeasureType;

  /** Extension for groupMeasure */
  _groupMeasure?: IElement;

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
