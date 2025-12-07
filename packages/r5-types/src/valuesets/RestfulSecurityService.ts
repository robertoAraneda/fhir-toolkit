/**
 * Restful Security Service
 * 
 * Types of security services used with FHIR.
 *
 * @see http://hl7.org/fhir/ValueSet/restful-security-service
 */

export type RestfulSecurityServiceType = 'OAuth' | 'SMART-on-FHIR' | 'NTLM' | 'Basic' | 'Kerberos' | 'Certificates';

export enum RestfulSecurityServiceEnum {
  /** OAuth */
  Oauth = 'OAuth',
  /** SMART-on-FHIR */
  SmartOnFhir = 'SMART-on-FHIR',
  /** NTLM */
  Ntlm = 'NTLM',
  /** Basic */
  Basic = 'Basic',
  /** Kerberos */
  Kerberos = 'Kerberos',
  /** Certificates */
  Certificates = 'Certificates',
}

export const RestfulSecurityServiceValues = ['OAuth', 'SMART-on-FHIR', 'NTLM', 'Basic', 'Kerberos', 'Certificates'] as const;
