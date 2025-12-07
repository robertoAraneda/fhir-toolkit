/**
 * messageheader-response-request
 * 
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 *
 * @see http://hl7.org/fhir/ValueSet/messageheader-response-request
 */

export type MessageheaderResponseRequestType = 'always' | 'on-error' | 'never' | 'on-success';

export enum MessageheaderResponseRequestEnum {
  /** Always */
  Always = 'always',
  /** Error/reject conditions only */
  OnError = 'on-error',
  /** Never */
  Never = 'never',
  /** Successful completion only */
  OnSuccess = 'on-success',
}

export const MessageheaderResponseRequestValues = ['always', 'on-error', 'never', 'on-success'] as const;
