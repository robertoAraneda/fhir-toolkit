import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventSuspectEntityCausality,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AdverseEventSuspectEntityCausality */
const ADVERSE_EVENT_SUSPECT_ENTITY_CAUSALITY_PROPERTIES = [
  'assessment',
  'productRelatedness',
  '_productRelatedness',
  'author',
  'method',
] as const;

/**
 * AdverseEventSuspectEntityCausality - Information on the possible cause of the event
 *
 * @see https://hl7.org/fhir/R4/adverseeventsuspectentitycausality.html
 *
 * @example
 * const adverseEventSuspectEntityCausality = new AdverseEventSuspectEntityCausality({
 *   // ... properties
 * });
 */
export class AdverseEventSuspectEntityCausality extends BackboneElement implements IAdverseEventSuspectEntityCausality {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Assessment of if the entity caused the event */
  assessment?: ICodeableConcept;

  /** AdverseEvent.suspectEntity.causalityProductRelatedness */
  productRelatedness?: string;

  /** Extension for productRelatedness */
  _productRelatedness?: IElement;

  /** AdverseEvent.suspectEntity.causalityAuthor */
  author?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** ProbabilityScale | Bayesian | Checklist */
  method?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventSuspectEntityCausality>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_SUSPECT_ENTITY_CAUSALITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventSuspectEntityCausality from a JSON object
   */
  static fromJSON(json: IAdverseEventSuspectEntityCausality): AdverseEventSuspectEntityCausality {
    return new AdverseEventSuspectEntityCausality(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventSuspectEntityCausality with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventSuspectEntityCausality>): AdverseEventSuspectEntityCausality {
    return new AdverseEventSuspectEntityCausality({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventSuspectEntityCausality by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventSuspectEntityCausality) => Partial<IAdverseEventSuspectEntityCausality>): AdverseEventSuspectEntityCausality {
    const currentData = this.toJSON();
    return new AdverseEventSuspectEntityCausality({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventSuspectEntityCausality)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventSuspectEntityCausality {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_SUSPECT_ENTITY_CAUSALITY_PROPERTIES);
    return result as IAdverseEventSuspectEntityCausality;
  }

  /**
   * Create a deep clone of this AdverseEventSuspectEntityCausality
   */
  clone(): AdverseEventSuspectEntityCausality {
    return new AdverseEventSuspectEntityCausality(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventSuspectEntityCausality
   */
  toString(): string {
    const parts: string[] = ['AdverseEventSuspectEntityCausality'];
    return parts.join(', ');
  }
}
