import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IResearchSubject,
  ResearchSubjectStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchSubject */
const RESEARCH_SUBJECT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'period',
  'study',
  'individual',
  'assignedArm',
  '_assignedArm',
  'actualArm',
  '_actualArm',
  'consent',
] as const;

/**
 * ResearchSubject - A physical entity which is the primary unit of operational and/or administrative interest in a study.
 *
 * @see https://hl7.org/fhir/R4/researchsubject.html
 *
 * @example
 * const researchSubject = new ResearchSubject({
 *   resourceType: 'ResearchSubject',
 *   // ... properties
 * });
 */
export class ResearchSubject extends DomainResource implements IResearchSubject {
  readonly resourceType = 'ResearchSubject' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for research subject in a study */
  identifier?: IIdentifier[];

  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
  status: ResearchSubjectStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Start and end of participation */
  period?: IPeriod;

  /** Study subject is part of */
  study: IReference<'ResearchStudy'>;

  /** Who is part of study */
  individual: IReference<'Patient'>;

  /** What path should be followed */
  assignedArm?: string;

  /** Extension for assignedArm */
  _assignedArm?: IElement;

  /** What path was followed */
  actualArm?: string;

  /** Extension for actualArm */
  _actualArm?: IElement;

  /** Agreement to participate in study */
  consent?: IReference<'Consent'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchSubject>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_SUBJECT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchSubject from a JSON object
   */
  static fromJSON(json: IResearchSubject): ResearchSubject {
    return new ResearchSubject(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchSubject with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchSubject>): ResearchSubject {
    return new ResearchSubject({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchSubject by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchSubject) => Partial<IResearchSubject>): ResearchSubject {
    const currentData = this.toJSON();
    return new ResearchSubject({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchSubject)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchSubject {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RESEARCH_SUBJECT_PROPERTIES);
    return result as IResearchSubject;
  }

  /**
   * Create a deep clone of this ResearchSubject
   */
  clone(): ResearchSubject {
    return new ResearchSubject(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchSubject
   */
  toString(): string {
    const parts: string[] = ['ResearchSubject'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
