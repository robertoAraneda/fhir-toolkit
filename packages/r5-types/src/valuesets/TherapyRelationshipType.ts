/**
 * Therapy Relationship Type
 * 
 * Classification of relationship between a therapy and a contraindication or an indication.
 *
 * @see http://hl7.org/fhir/ValueSet/therapy-relationship-type
 */

export type TherapyRelationshipTypeType = 'contraindicated-only-with' | 'contraindicated-except-with' | 'indicated-only-with' | 'indicated-except-with' | 'indicated-only-after' | 'indicated-only-before' | 'replace-other-therapy' | 'replace-other-therapy-contraindicated' | 'replace-other-therapy-not-tolerated' | 'replace-other-therapy-not-effective';

export enum TherapyRelationshipTypeEnum {
  /** Only contraindicated if the other therapy is given */
  ContraindicatedOnlyWith = 'contraindicated-only-with',
  /** Contraindicated unless the other therapy is given */
  ContraindicatedExceptWith = 'contraindicated-except-with',
  /** Indicated only when the other therapy is given (co-occurrent) */
  IndicatedOnlyWith = 'indicated-only-with',
  /** Indicated except when the other therapy is given */
  IndicatedExceptWith = 'indicated-except-with',
  /** Indicated only if the other therapy is planned to be given afterwards (prep) */
  IndicatedOnlyAfter = 'indicated-only-after',
  /** Indicated only if the other therapy was given before (follow-up) */
  IndicatedOnlyBefore = 'indicated-only-before',
  /** Indicated to replace the other therapy */
  ReplaceOtherTherapy = 'replace-other-therapy',
  /** Indicated to replace the other contraindicated therapy */
  ReplaceOtherTherapyContraindicated = 'replace-other-therapy-contraindicated',
  /** Indicated to replace the other therapy not well tolerated by patient */
  ReplaceOtherTherapyNotTolerated = 'replace-other-therapy-not-tolerated',
  /** Indicated to replace the other therapy not effective on patient */
  ReplaceOtherTherapyNotEffective = 'replace-other-therapy-not-effective',
}

export const TherapyRelationshipTypeValues = ['contraindicated-only-with', 'contraindicated-except-with', 'indicated-only-with', 'indicated-except-with', 'indicated-only-after', 'indicated-only-before', 'replace-other-therapy', 'replace-other-therapy-contraindicated', 'replace-other-therapy-not-tolerated', 'replace-other-therapy-not-effective'] as const;
