/**
 * HL7Workgroup
 * 
 * An HL7 administrative unit that owns artifacts in the FHIR specification.
 *
 * @see http://hl7.org/fhir/ValueSet/hl7-work-group
 */

export type HL7WorkgroupType = 'cbcc' | 'cds' | 'cqi' | 'cg' | 'dev' | 'ehr' | 'fhir' | 'fm' | 'hsi' | 'ii' | 'inm' | 'its' | 'mnm' | 'oo' | 'pa' | 'pc' | 'pher' | 'phx' | 'brr' | 'sd' | 'sec' | 'us' | 'vocab' | 'aid';

export enum HL7WorkgroupEnum {
  /** Community Based Collaborative Care */
  Cbcc = 'cbcc',
  /** Clinical Decision Support */
  Cds = 'cds',
  /** Clinical Quality Information */
  Cqi = 'cqi',
  /** Clinical Genomics */
  Cg = 'cg',
  /** Health Care Devices */
  Dev = 'dev',
  /** Electronic Health Records */
  Ehr = 'ehr',
  /** FHIR Infrastructure */
  Fhir = 'fhir',
  /** Financial Management */
  Fm = 'fm',
  /** Health Standards Integration */
  Hsi = 'hsi',
  /** Imaging Integration */
  Ii = 'ii',
  /** Infrastructure And Messaging */
  Inm = 'inm',
  /** Implementable Technology Specifications */
  Its = 'its',
  /** Modeling and Methodology */
  Mnm = 'mnm',
  /** Orders and Observations */
  Oo = 'oo',
  /** Patient Administration */
  Pa = 'pa',
  /** Patient Care */
  Pc = 'pc',
  /** Public Health and Emergency Response */
  Pher = 'pher',
  /** Pharmacy */
  Phx = 'phx',
  /** Biomedical Research and Regulation */
  Brr = 'brr',
  /** Structured Documents */
  Sd = 'sd',
  /** Security */
  Sec = 'sec',
  /** US Realm Taskforce */
  Us = 'us',
  /** Vocabulary */
  Vocab = 'vocab',
  /** Application Implementation and Design */
  Aid = 'aid',
}

export const HL7WorkgroupValues = ['cbcc', 'cds', 'cqi', 'cg', 'dev', 'ehr', 'fhir', 'fm', 'hsi', 'ii', 'inm', 'its', 'mnm', 'oo', 'pa', 'pc', 'pher', 'phx', 'brr', 'sd', 'sec', 'us', 'vocab', 'aid'] as const;
