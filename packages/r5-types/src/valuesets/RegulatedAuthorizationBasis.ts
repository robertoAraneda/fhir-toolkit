/**
 * Regulated Authorization Basis
 * 
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 *
 * @see http://hl7.org/fhir/ValueSet/regulated-authorization-basis
 */

export type RegulatedAuthorizationBasisType = 'Full' | 'NewSubstance' | 'KnownSubstance' | 'SimilarBiological' | 'Well-establishedUse' | 'TraditionalUse' | 'Bibliographical' | 'KnownHumanBlood' | 'TemporaryUse' | 'ParallelTrade';

export enum RegulatedAuthorizationBasisEnum {
  /** Full application */
  Full = 'Full',
  /** New active substance */
  Newsubstance = 'NewSubstance',
  /** Known active substance */
  Knownsubstance = 'KnownSubstance',
  /** Similar biological application */
  Similarbiological = 'SimilarBiological',
  /** Well-established use application */
  WellEstablisheduse = 'Well-establishedUse',
  /** Traditional use registration for herbal medicinal product application */
  Traditionaluse = 'TraditionalUse',
  /** Bibliographical application (stand-alone) */
  Bibliographical = 'Bibliographical',
  /** Known human blood/plasma derived ancillary medicinal substance */
  Knownhumanblood = 'KnownHumanBlood',
  /** Authorizations for temporary use */
  Temporaryuse = 'TemporaryUse',
  /** Parallel traded products */
  Paralleltrade = 'ParallelTrade',
}

export const RegulatedAuthorizationBasisValues = ['Full', 'NewSubstance', 'KnownSubstance', 'SimilarBiological', 'Well-establishedUse', 'TraditionalUse', 'Bibliographical', 'KnownHumanBlood', 'TemporaryUse', 'ParallelTrade'] as const;
