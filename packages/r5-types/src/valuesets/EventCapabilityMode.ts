/**
 * Event Capability Mode
 * 
 * The mode of a message capability statement.
 *
 * @see http://hl7.org/fhir/ValueSet/event-capability-mode
 */

export type EventCapabilityModeType = 'sender' | 'receiver';

export enum EventCapabilityModeEnum {
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
}

export const EventCapabilityModeValues = ['sender', 'receiver'] as const;
