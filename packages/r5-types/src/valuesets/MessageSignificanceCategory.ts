/**
 * Message Significance Category
 * 
 * The impact of the content of a message.
 *
 * @see http://hl7.org/fhir/ValueSet/message-significance-category
 */

export type MessageSignificanceCategoryType = 'consequence' | 'currency' | 'notification';

export enum MessageSignificanceCategoryEnum {
  /** Consequence */
  Consequence = 'consequence',
  /** Currency */
  Currency = 'currency',
  /** Notification */
  Notification = 'notification',
}

export const MessageSignificanceCategoryValues = ['consequence', 'currency', 'notification'] as const;
