import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IIdentifier,
  IQuestionnaireResponse,
  IQuestionnaireResponseItem,
  IReference,
  QuestionnaireResponseStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to QuestionnaireResponse */
const QUESTIONNAIRE_RESPONSE_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'questionnaire',
  '_questionnaire',
  'status',
  '_status',
  'subject',
  'encounter',
  'authored',
  '_authored',
  'author',
  'source',
  'item',
] as const;

/**
 * QuestionnaireResponse - A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 *
 * @see https://hl7.org/fhir/R4/questionnaireresponse.html
 *
 * @example
 * const questionnaireResponse = new QuestionnaireResponse({
 *   resourceType: 'QuestionnaireResponse',
 *   // ... properties
 * });
 */
export class QuestionnaireResponse extends DomainResource implements IQuestionnaireResponse {
  readonly resourceType = 'QuestionnaireResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this set of answers */
  identifier?: IIdentifier[];

  /** Request fulfilled by this QuestionnaireResponse */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'Observation' | 'Procedure'>[];

  /** Canonical URL of Questionnaire being answered */
  questionnaire: string;

  /** Extension for questionnaire */
  _questionnaire?: IElement;

  /** in-progress | completed | amended | entered-in-error | stopped */
  status: QuestionnaireResponseStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The subject of the questions */
  subject?: IReference<'Resource'>;

  /** Encounter the questionnaire response is part of */
  encounter?: IReference<'Encounter'>;

  /** Date the answers were gathered */
  authored?: string;

  /** Extension for authored */
  _authored?: IElement;

  /** The individual or device that received and recorded the answers */
  author?: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>;

  /** The individual or device that answered the questions */
  source?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Groups and questions */
  item?: IQuestionnaireResponseItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuestionnaireResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, QUESTIONNAIRE_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create QuestionnaireResponse from a JSON object
   */
  static fromJSON(json: IQuestionnaireResponse): QuestionnaireResponse {
    return new QuestionnaireResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new QuestionnaireResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuestionnaireResponse>): QuestionnaireResponse {
    return new QuestionnaireResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new QuestionnaireResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuestionnaireResponse) => Partial<IQuestionnaireResponse>): QuestionnaireResponse {
    const currentData = this.toJSON();
    return new QuestionnaireResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuestionnaireResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuestionnaireResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, QUESTIONNAIRE_RESPONSE_PROPERTIES);
    return result as IQuestionnaireResponse;
  }

  /**
   * Create a deep clone of this QuestionnaireResponse
   */
  clone(): QuestionnaireResponse {
    return new QuestionnaireResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the QuestionnaireResponse
   */
  toString(): string {
    const parts: string[] = ['QuestionnaireResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
