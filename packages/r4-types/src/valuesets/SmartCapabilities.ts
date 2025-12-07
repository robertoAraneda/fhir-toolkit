/**
 * SmartCapabilities
 * 
 * Codes that define what the server is capable of.
 *
 * @see http://hl7.org/fhir/ValueSet/smart-capabilities
 */

export type SmartCapabilitiesType = 'launch-ehr' | 'launch-standalone' | 'client-public' | 'client-confidential-symmetric' | 'sso-openid-connect' | 'context-passthrough-banner' | 'context-passthrough-style' | 'context-ehr-patient' | 'context-ehr-encounter' | 'context-standalone-patient' | 'context-standalone-encounter' | 'permission-offline' | 'permission-patient' | 'permission-user';

export enum SmartCapabilitiesEnum {
  /** EHR Launch Mode */
  LaunchEhr = 'launch-ehr',
  /** Standalone Launch Mode */
  LaunchStandalone = 'launch-standalone',
  /** Public Client Profile */
  ClientPublic = 'client-public',
  /** Confidential Client Profile */
  ClientConfidentialSymmetric = 'client-confidential-symmetric',
  /** Supports OpenID Connect */
  SsoOpenidConnect = 'sso-openid-connect',
  /** Allows "Need Patient Banner" */
  ContextPassthroughBanner = 'context-passthrough-banner',
  /** Allows "Smart Style Style" */
  ContextPassthroughStyle = 'context-passthrough-style',
  /** Allows "Patient Level Launch Context (EHR)" */
  ContextEhrPatient = 'context-ehr-patient',
  /** Allows "Encounter Level Launch Context (EHR)" */
  ContextEhrEncounter = 'context-ehr-encounter',
  /** Allows "Patient Level Launch Context (STANDALONE)" */
  ContextStandalonePatient = 'context-standalone-patient',
  /** Allows "Encounter Level Launch Context (STANDALONE)" */
  ContextStandaloneEncounter = 'context-standalone-encounter',
  /** Supports Refresh Token */
  PermissionOffline = 'permission-offline',
  /** Supports Patient Level Scopes */
  PermissionPatient = 'permission-patient',
  /** Supports User Level Scopes */
  PermissionUser = 'permission-user',
}

export const SmartCapabilitiesValues = ['launch-ehr', 'launch-standalone', 'client-public', 'client-confidential-symmetric', 'sso-openid-connect', 'context-passthrough-banner', 'context-passthrough-style', 'context-ehr-patient', 'context-ehr-encounter', 'context-standalone-patient', 'context-standalone-encounter', 'permission-offline', 'permission-patient', 'permission-user'] as const;
