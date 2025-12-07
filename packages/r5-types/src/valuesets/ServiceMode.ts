/**
 * Service Mode
 * 
 * An example set of Service Modes that could be applicable to use to characterize HealthcareServices or PractitionerRoles while searching
 *
 * @see http://hl7.org/fhir/ValueSet/service-mode
 */

export type ServiceModeType = 'in-person' | 'telephone' | 'videoconference' | 'chat';

export enum ServiceModeEnum {
  /** In Person */
  InPerson = 'in-person',
  /** Telephone */
  Telephone = 'telephone',
  /** Video Conference */
  Videoconference = 'videoconference',
  /** Chat/Messaging */
  Chat = 'chat',
}

export const ServiceModeValues = ['in-person', 'telephone', 'videoconference', 'chat'] as const;
