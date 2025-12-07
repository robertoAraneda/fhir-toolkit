/**
 * CommunicationCategory
 * 
 * Codes for general categories of communications such as alerts, instructions, etc.
 *
 * @see http://hl7.org/fhir/ValueSet/communication-category
 */

export type CommunicationCategoryType = 'alert' | 'notification' | 'reminder' | 'instruction';

export enum CommunicationCategoryEnum {
  /** Alert */
  Alert = 'alert',
  /** Notification */
  Notification = 'notification',
  /** Reminder */
  Reminder = 'reminder',
  /** Instruction */
  Instruction = 'instruction',
}

export const CommunicationCategoryValues = ['alert', 'notification', 'reminder', 'instruction'] as const;
