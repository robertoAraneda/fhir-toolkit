import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceVariableDefinition,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceVariableDefinition */
const EVIDENCE_VARIABLE_DEFINITION_PROPERTIES = [
  'description',
  '_description',
  'note',
  'variableRole',
  'observed',
  'intended',
  'directnessMatch',
] as const;

/**
 * EvidenceVariableDefinition - Evidence variable such as population, exposure, or outcome
 *
 * @see https://hl7.org/fhir/R4/evidencevariabledefinition.html
 *
 * @example
 * const evidenceVariableDefinition = new EvidenceVariableDefinition({
 *   // ... properties
 * });
 */
export class EvidenceVariableDefinition extends BackboneElement implements IEvidenceVariableDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A text description or summary of the variable */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Footnotes and/or explanatory notes */
  note?: IAnnotation[];

  /** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder */
  variableRole: ICodeableConcept;

  /** Definition of the actual variable related to the statistic(s) */
  observed?: IReference<'Group' | 'EvidenceVariable'>;

  /** Definition of the intended variable related to the Evidence */
  intended?: IReference<'Group' | 'EvidenceVariable'>;

  /** low | moderate | high | exact */
  directnessMatch?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableDefinition from a JSON object
   */
  static fromJSON(json: IEvidenceVariableDefinition): EvidenceVariableDefinition {
    return new EvidenceVariableDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableDefinition>): EvidenceVariableDefinition {
    return new EvidenceVariableDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableDefinition) => Partial<IEvidenceVariableDefinition>): EvidenceVariableDefinition {
    const currentData = this.toJSON();
    return new EvidenceVariableDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableDefinition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_DEFINITION_PROPERTIES);
    return result as IEvidenceVariableDefinition;
  }

  /**
   * Create a deep clone of this EvidenceVariableDefinition
   */
  clone(): EvidenceVariableDefinition {
    return new EvidenceVariableDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableDefinition
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableDefinition'];
    return parts.join(', ');
  }
}
