/**
 * TestScriptProfileDestinationType
 * 
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-profile-destination-types
 */

export type TestScriptProfileDestinationTypeType = 'FHIR-Server' | 'FHIR-SDC-FormManager' | 'FHIR-SDC-FormProcessor' | 'FHIR-SDC-FormReceiver';

export enum TestScriptProfileDestinationTypeEnum {
  /** FHIR Server */
  FhirServer = 'FHIR-Server',
  /** FHIR SDC FormManager */
  FhirSdcFormmanager = 'FHIR-SDC-FormManager',
  /** FHIR SDC FormProcessor */
  FhirSdcFormprocessor = 'FHIR-SDC-FormProcessor',
  /** FHIR SDC FormReceiver */
  FhirSdcFormreceiver = 'FHIR-SDC-FormReceiver',
}

export const TestScriptProfileDestinationTypeValues = ['FHIR-Server', 'FHIR-SDC-FormManager', 'FHIR-SDC-FormProcessor', 'FHIR-SDC-FormReceiver'] as const;
