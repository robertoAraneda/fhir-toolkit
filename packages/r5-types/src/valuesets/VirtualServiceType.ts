/**
 * Virtual Service Type
 * 
 * Example codes for possible virtual service connection types.
 *
 * @see http://hl7.org/fhir/ValueSet/virtual-service-type
 */

export type VirtualServiceTypeType = 'zoom' | 'ms-teams' | 'whatsapp';

export enum VirtualServiceTypeEnum {
  /** Zoom web conferencing */
  Zoom = 'zoom',
  /** Microsoft Teams */
  MsTeams = 'ms-teams',
  /** WhatsApp conference call */
  Whatsapp = 'whatsapp',
}

export const VirtualServiceTypeValues = ['zoom', 'ms-teams', 'whatsapp'] as const;
