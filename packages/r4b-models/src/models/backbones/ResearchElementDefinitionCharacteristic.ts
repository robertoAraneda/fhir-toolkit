import { BackboneElement } from '../base/BackboneElement.js';
import type {
  GroupMeasureType,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IElement,
  IExpression,
  IPeriod,
  IResearchElementDefinitionCharacteristic,
  ITiming,
  IUsageContext,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchElementDefinitionCharacteristic */
const RESEARCH_ELEMENT_DEFINITION_CHARACTERISTIC_PROPERTIES = [
  'definitionCodeableConcept',
  'definitionCanonical',
  '_definitionCanonical',
  'definitionExpression',
  'definitionDataRequirement',
  'usageContext',
  'exclude',
  '_exclude',
  'unitOfMeasure',
  'studyEffectiveDescription',
  '_studyEffectiveDescription',
  'studyEffectiveDateTime',
  '_studyEffectiveDateTime',
  'studyEffectivePeriod',
  'studyEffectiveDuration',
  'studyEffectiveTiming',
  'studyEffectiveTimeFromStart',
  'studyEffectiveGroupMeasure',
  '_studyEffectiveGroupMeasure',
  'participantEffectiveDescription',
  '_participantEffectiveDescription',
  'participantEffectiveDateTime',
  '_participantEffectiveDateTime',
  'participantEffectivePeriod',
  'participantEffectiveDuration',
  'participantEffectiveTiming',
  'participantEffectiveTimeFromStart',
  'participantEffectiveGroupMeasure',
  '_participantEffectiveGroupMeasure',
] as const;

/**
 * ResearchElementDefinitionCharacteristic - What defines the members of the research element
 *
 * @see https://hl7.org/fhir/R4B/researchelementdefinitioncharacteristic.html
 *
 * @example
 * const researchElementDefinitionCharacteristic = new ResearchElementDefinitionCharacteristic({
 *   // ... properties
 * });
 */
export class ResearchElementDefinitionCharacteristic extends BackboneElement implements IResearchElementDefinitionCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What code or expression defines members? */
  definitionCodeableConcept?: ICodeableConcept;

  /** What code or expression defines members? */
  definitionCanonical?: string;

  /** Extension for definitionCanonical */
  _definitionCanonical?: IElement;

  /** What code or expression defines members? */
  definitionExpression?: IExpression;

  /** What code or expression defines members? */
  definitionDataRequirement?: IDataRequirement;

  /** What code/value pairs define members? */
  usageContext?: IUsageContext[];

  /** Whether the characteristic includes or excludes members */
  exclude?: boolean;

  /** Extension for exclude */
  _exclude?: IElement;

  /** What unit is the outcome described in? */
  unitOfMeasure?: ICodeableConcept;

  /** What time period does the study cover */
  studyEffectiveDescription?: string;

  /** Extension for studyEffectiveDescription */
  _studyEffectiveDescription?: IElement;

  /** What time period does the study cover */
  studyEffectiveDateTime?: string;

  /** Extension for studyEffectiveDateTime */
  _studyEffectiveDateTime?: IElement;

  /** What time period does the study cover */
  studyEffectivePeriod?: IPeriod;

  /** What time period does the study cover */
  studyEffectiveDuration?: IDuration;

  /** What time period does the study cover */
  studyEffectiveTiming?: ITiming;

  /** Observation time from study start */
  studyEffectiveTimeFromStart?: IDuration;

  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  studyEffectiveGroupMeasure?: GroupMeasureType;

  /** Extension for studyEffectiveGroupMeasure */
  _studyEffectiveGroupMeasure?: IElement;

  /** What time period do participants cover */
  participantEffectiveDescription?: string;

  /** Extension for participantEffectiveDescription */
  _participantEffectiveDescription?: IElement;

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
  participantEffectiveTimeFromStart?: IDuration;

  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  participantEffectiveGroupMeasure?: GroupMeasureType;

  /** Extension for participantEffectiveGroupMeasure */
  _participantEffectiveGroupMeasure?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchElementDefinitionCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_ELEMENT_DEFINITION_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchElementDefinitionCharacteristic from a JSON object
   */
  static fromJSON(json: IResearchElementDefinitionCharacteristic): ResearchElementDefinitionCharacteristic {
    return new ResearchElementDefinitionCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchElementDefinitionCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchElementDefinitionCharacteristic>): ResearchElementDefinitionCharacteristic {
    return new ResearchElementDefinitionCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchElementDefinitionCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchElementDefinitionCharacteristic) => Partial<IResearchElementDefinitionCharacteristic>): ResearchElementDefinitionCharacteristic {
    const currentData = this.toJSON();
    return new ResearchElementDefinitionCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchElementDefinitionCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchElementDefinitionCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RESEARCH_ELEMENT_DEFINITION_CHARACTERISTIC_PROPERTIES);
    return result as IResearchElementDefinitionCharacteristic;
  }

  /**
   * Create a deep clone of this ResearchElementDefinitionCharacteristic
   */
  clone(): ResearchElementDefinitionCharacteristic {
    return new ResearchElementDefinitionCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchElementDefinitionCharacteristic
   */
  toString(): string {
    const parts: string[] = ['ResearchElementDefinitionCharacteristic'];
    return parts.join(', ');
  }
}
