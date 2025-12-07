/**
 * Document Class Value Set
 * 
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 *
 * @see http://hl7.org/fhir/ValueSet/doc-classcodes
 */

export type DocumentClassValueSetType = '11369-6' | '11485-0' | '11486-8' | '11488-4' | '11506-3' | '11543-6' | '15508-5' | '18726-0' | '18761-7' | '18842-5' | '26436-6' | '26441-6' | '26442-4' | '27895-2' | '27896-0' | '27897-8' | '27898-6' | '28570-0' | '28619-5' | '28634-4' | '29749-9' | '29750-7' | '29751-5' | '29752-3' | '34109-9' | '34117-2' | '34121-4' | '34122-2' | '34133-9' | '34140-4' | '34748-4' | '34775-7' | '47039-3' | '47042-7' | '47045-0' | '47046-8' | '47049-2' | '57017-6' | '57016-8' | '56445-0' | '53576-5' | '56447-6' | '18748-4' | '11504-8' | '57133-1';

export enum DocumentClassValueSetEnum {
  /** History of Immunization */
  _113696 = '11369-6',
  /** Anesthesia records */
  _114850 = '11485-0',
  /** Chemotherapy records */
  _114868 = '11486-8',
  /** Consult Note */
  _114884 = '11488-4',
  /** Provider-unspecified progress note */
  _115063 = '11506-3',
  /** Nursery records */
  _115436 = '11543-6',
  /** Labor and delivery records */
  _155085 = '15508-5',
  /** Radiology studies (set) */
  _187260 = '18726-0',
  /** Provider-unspecified transfer summary */
  _187617 = '18761-7',
  /** Discharge summary */
  _188425 = '18842-5',
  /** Laboratory Studies (set) */
  _264366 = '26436-6',
  /** Cardiology studies (set) */
  _264416 = '26441-6',
  /** Obstetrical studies (set) */
  _264424 = '26442-4',
  /** Gastroenterology endoscopy studies (set) */
  _278952 = '27895-2',
  /** Pulmonary studies (set) */
  _278960 = '27896-0',
  /** Neuromuscular electrophysiology studies (set) */
  _278978 = '27897-8',
  /** Pathology studies (set) */
  _278986 = '27898-6',
  /** Provider-unspecified procedure note */
  _285700 = '28570-0',
  /** Ophthalmology/optometry studies (set) */
  _286195 = '28619-5',
  /** Miscellaneous studies (set) */
  _286344 = '28634-4',
  /** Dialysis records */
  _297499 = '29749-9',
  /** Neonatal intensive care records */
  _297507 = '29750-7',
  /** Critical care records */
  _297515 = '29751-5',
  /** Perioperative records */
  _297523 = '29752-3',
  /** Evaluation and management note */
  _341099 = '34109-9',
  /** Provider-unspecified, History and physical note */
  _341172 = '34117-2',
  /** Interventional procedure note */
  _341214 = '34121-4',
  /** Pathology procedure note */
  _341222 = '34122-2',
  /** Summarization of episode note */
  _341339 = '34133-9',
  /** Transfer of care referral note */
  _341404 = '34140-4',
  /** Telephone encounter note */
  _347484 = '34748-4',
  /** General surgery Pre-operative evaluation and management note */
  _347757 = '34775-7',
  /** Inpatient Admission history and physical note */
  _470393 = '47039-3',
  /** Counseling note */
  _470427 = '47042-7',
  /** Study report Document */
  _470450 = '47045-0',
  /** Summary of death */
  _470468 = '47046-8',
  /** Non-patient Communication */
  _470492 = '47049-2',
  /** Privacy Policy Organization Document */
  _570176 = '57017-6',
  /** Privacy Policy Acknowledgment Document */
  _570168 = '57016-8',
  /** Medication Summary Document */
  _564450 = '56445-0',
  /** Personal health monitoring report Document */
  _535765 = '53576-5',
  /** Plan of care note */
  _564476 = '56447-6',
  /** Diagnostic imaging study */
  _187484 = '18748-4',
  /** Surgical operation note */
  _115048 = '11504-8',
  /** Referral note */
  _571331 = '57133-1',
}

export const DocumentClassValueSetValues = ['11369-6', '11485-0', '11486-8', '11488-4', '11506-3', '11543-6', '15508-5', '18726-0', '18761-7', '18842-5', '26436-6', '26441-6', '26442-4', '27895-2', '27896-0', '27897-8', '27898-6', '28570-0', '28619-5', '28634-4', '29749-9', '29750-7', '29751-5', '29752-3', '34109-9', '34117-2', '34121-4', '34122-2', '34133-9', '34140-4', '34748-4', '34775-7', '47039-3', '47042-7', '47045-0', '47046-8', '47049-2', '57017-6', '57016-8', '56445-0', '53576-5', '56447-6', '18748-4', '11504-8', '57133-1'] as const;
