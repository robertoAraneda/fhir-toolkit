/**
 * ResearchStudyPhase
 * 
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 *
 * @see http://hl7.org/fhir/ValueSet/research-study-phase
 */

export type ResearchStudyPhaseType = 'n-a' | 'early-phase-1' | 'phase-1' | 'phase-1-phase-2' | 'phase-2' | 'phase-2-phase-3' | 'phase-3' | 'phase-4';

export enum ResearchStudyPhaseEnum {
  /** N/A */
  NA = 'n-a',
  /** Early Phase 1 */
  EarlyPhase1 = 'early-phase-1',
  /** Phase 1 */
  Phase1 = 'phase-1',
  /** Phase 1/Phase 2 */
  Phase1Phase2 = 'phase-1-phase-2',
  /** Phase 2 */
  Phase2 = 'phase-2',
  /** Phase 2/Phase 3 */
  Phase2Phase3 = 'phase-2-phase-3',
  /** Phase 3 */
  Phase3 = 'phase-3',
  /** Phase 4 */
  Phase4 = 'phase-4',
}

export const ResearchStudyPhaseValues = ['n-a', 'early-phase-1', 'phase-1', 'phase-1-phase-2', 'phase-2', 'phase-2-phase-3', 'phase-3', 'phase-4'] as const;
