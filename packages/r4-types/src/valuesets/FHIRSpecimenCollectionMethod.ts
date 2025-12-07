/**
 * FHIR Specimen Collection Method
 * 
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-collection-method
 */

export type FHIRSpecimenCollectionMethodType = '129316008' | '129314006' | '129300006' | '129304002' | '129323009' | '73416001' | '225113003' | '70777001' | '386089008' | '278450005';

export enum FHIRSpecimenCollectionMethodEnum {
  /** Aspiration - action */
  _129316008 = '129316008',
  /** Biopsy - action */
  _129314006 = '129314006',
  /** Puncture - action */
  _129300006 = '129300006',
  /** Excision - action */
  _129304002 = '129304002',
  /** Scraping - action */
  _129323009 = '129323009',
  /** Urine specimen collection, clean catch */
  _73416001 = '73416001',
  /** Timed urine collection */
  _225113003 = '225113003',
  /** Urine specimen collection, catheterized */
  _70777001 = '70777001',
  /** Collection of coughed sputum */
  _386089008 = '386089008',
  /** Finger-prick sampling */
  _278450005 = '278450005',
}

export const FHIRSpecimenCollectionMethodValues = ['129316008', '129314006', '129300006', '129304002', '129323009', '73416001', '225113003', '70777001', '386089008', '278450005'] as const;
