/**
 * Questionnaire Item Type
 * 
 * Distinguishes groups from questions and display text and indicates data type for questions.
 *
 * @see http://hl7.org/fhir/ValueSet/item-type
 */

export type QuestionnaireItemTypeType = 'group' | 'display' | 'question' | 'boolean' | 'decimal' | 'integer' | 'date' | 'dateTime' | 'time' | 'string' | 'text' | 'url' | 'coding' | 'attachment' | 'reference' | 'quantity';

export enum QuestionnaireItemTypeEnum {
  /** Group */
  Group = 'group',
  /** Display */
  Display = 'display',
  /** Question */
  Question = 'question',
  /** Boolean */
  Boolean = 'boolean',
  /** Decimal */
  Decimal = 'decimal',
  /** Integer */
  Integer = 'integer',
  /** Date */
  Date = 'date',
  /** Date Time */
  Datetime = 'dateTime',
  /** Time */
  Time = 'time',
  /** String */
  String = 'string',
  /** Text */
  Text = 'text',
  /** Url */
  Url = 'url',
  /** Coding */
  Coding = 'coding',
  /** Attachment */
  Attachment = 'attachment',
  /** Reference */
  Reference = 'reference',
  /** Quantity */
  Quantity = 'quantity',
}

export const QuestionnaireItemTypeValues = ['group', 'display', 'question', 'boolean', 'decimal', 'integer', 'date', 'dateTime', 'time', 'string', 'text', 'url', 'coding', 'attachment', 'reference', 'quantity'] as const;
