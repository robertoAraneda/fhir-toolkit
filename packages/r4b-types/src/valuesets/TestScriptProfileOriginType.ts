/**
 * TestScriptProfileOriginType
 * 
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-profile-origin-types
 */

export type TestScriptProfileOriginTypeType = 'FHIR-Client' | 'FHIR-SDC-FormFiller';

export enum TestScriptProfileOriginTypeEnum {
  /** FHIR Client */
  FhirClient = 'FHIR-Client',
  /** FHIR SDC FormFiller */
  FhirSdcFormfiller = 'FHIR-SDC-FormFiller',
}

export const TestScriptProfileOriginTypeValues = ['FHIR-Client', 'FHIR-SDC-FormFiller'] as const;
