/**
 * Test Report Participant Type
 * 
 * The type of participant.
 *
 * @see http://hl7.org/fhir/ValueSet/report-participant-type
 */

export type TestReportParticipantTypeType = 'test-engine' | 'client' | 'server';

export enum TestReportParticipantTypeEnum {
  /** Test Engine */
  TestEngine = 'test-engine',
  /** Client */
  Client = 'client',
  /** Server */
  Server = 'server',
}

export const TestReportParticipantTypeValues = ['test-engine', 'client', 'server'] as const;
