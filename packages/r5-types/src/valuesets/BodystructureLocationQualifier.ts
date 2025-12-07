/**
 * Bodystructure Location Qualifier
 * 
 * SNOMED-CT concepts modifying the anatomic location
 *
 * @see http://hl7.org/fhir/ValueSet/bodystructure-relative-location
 */

export type BodystructureLocationQualifierType = '7771000' | '24028007' | '51440002' | '46053002' | '255554000' | '264147007' | '261183002' | '261122009' | '255561001' | '49370004' | '264217000' | '261089000' | '255551008' | '351726001' | '352730000';

export enum BodystructureLocationQualifierEnum {
  /** Left (qualifier value) */
  _7771000 = '7771000',
  /** Right (qualifier value) */
  _24028007 = '24028007',
  /** Bilateral */
  _51440002 = '51440002',
  /** Distal */
  _46053002 = '46053002',
  /** Dorsal */
  _255554000 = '255554000',
  /** Plantar */
  _264147007 = '264147007',
  /** Upper */
  _261183002 = '261183002',
  /** Lower */
  _261122009 = '261122009',
  /** Medial */
  _255561001 = '255561001',
  /** Lateral */
  _49370004 = '49370004',
  /** Superior */
  _264217000 = '264217000',
  /** Inferior */
  _261089000 = '261089000',
  /** Posterior */
  _255551008 = '255551008',
  /** Below */
  _351726001 = '351726001',
  /** Above */
  _352730000 = '352730000',
}

export const BodystructureLocationQualifierValues = ['7771000', '24028007', '51440002', '46053002', '255554000', '264147007', '261183002', '261122009', '255561001', '49370004', '264217000', '261089000', '255551008', '351726001', '352730000'] as const;
