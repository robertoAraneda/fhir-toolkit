/**
 * Patient Relationship Type
 * 
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 *
 * @see http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
 */

export type PatientRelationshipTypeType = 'WIT' | 'NOT' | 'ECON' | 'NOK' | 'GUARD' | 'DEPEN' | 'EMP' | 'GUAR' | 'CAREGIVER' | 'E' | 'O' | 'U' | 'INTPRTER' | 'POWATT' | 'DPOWATT' | 'HPOWATT' | 'SPOWATT' | 'BILL';

export enum PatientRelationshipTypeEnum {
  Wit = 'WIT',
  Not = 'NOT',
  Econ = 'ECON',
  Nok = 'NOK',
  Guard = 'GUARD',
  Depen = 'DEPEN',
  Emp = 'EMP',
  Guar = 'GUAR',
  Caregiver = 'CAREGIVER',
  E = 'E',
  O = 'O',
  U = 'U',
  Intprter = 'INTPRTER',
  Powatt = 'POWATT',
  Dpowatt = 'DPOWATT',
  Hpowatt = 'HPOWATT',
  Spowatt = 'SPOWATT',
  Bill = 'BILL',
}

export const PatientRelationshipTypeValues = ['WIT', 'NOT', 'ECON', 'NOK', 'GUARD', 'DEPEN', 'EMP', 'GUAR', 'CAREGIVER', 'E', 'O', 'U', 'INTPRTER', 'POWATT', 'DPOWATT', 'HPOWATT', 'SPOWATT', 'BILL'] as const;
