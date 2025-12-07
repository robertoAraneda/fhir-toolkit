/**
 * CompartmentType
 * 
 * Which type a compartment definition describes.
 *
 * @see http://hl7.org/fhir/ValueSet/compartment-type
 */

export type CompartmentTypeType = 'Patient' | 'Encounter' | 'RelatedPerson' | 'Practitioner' | 'Device';

export enum CompartmentTypeEnum {
  /** Patient */
  Patient = 'Patient',
  /** Encounter */
  Encounter = 'Encounter',
  /** RelatedPerson */
  Relatedperson = 'RelatedPerson',
  /** Practitioner */
  Practitioner = 'Practitioner',
  /** Device */
  Device = 'Device',
}

export const CompartmentTypeValues = ['Patient', 'Encounter', 'RelatedPerson', 'Practitioner', 'Device'] as const;
