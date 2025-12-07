/**
 * Message Transport
 * 
 * The protocol used for message transport.
 *
 * @see http://hl7.org/fhir/ValueSet/message-transport
 */

export type MessageTransportType = 'http' | 'ftp' | 'mllp';

export enum MessageTransportEnum {
  /** HTTP */
  Http = 'http',
  /** FTP */
  Ftp = 'ftp',
  /** MLLP */
  Mllp = 'mllp',
}

export const MessageTransportValues = ['http', 'ftp', 'mllp'] as const;
