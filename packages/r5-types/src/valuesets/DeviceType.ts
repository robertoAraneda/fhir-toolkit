/**
 * Device Type
 * 
 * Codes used to identify medical devices. Includes concepts from SNOMED CT (http://www.snomed.org/) where concept is-a 49062001 (Device)  and is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/device-type
 */

export type DeviceTypeType = '528391' | '528404' | '528425' | '528402' | '528409' | '528390' | '528457' | '528401' | '528455' | '528403' | '528405' | '528388' | '528397' | '528408' | '528426' | '528392' | '528399' | '38017' | '38663' | '42347' | '46352' | '47264' | '62163' | '62260' | '62423' | '62414' | '64587' | '64992';

export enum DeviceTypeEnum {
  /** Blood Pressure Cuff */
  _528391 = '528391',
  /** Body Composition Analyzer */
  _528404 = '528404',
  /** Cardiovascular Device */
  _528425 = '528425',
  /** Coagulation meter */
  _528402 = '528402',
  /** Continuous Glucose Monitor */
  _528409 = '528409',
  /** Electro cardiograph */
  _528390 = '528390',
  /** Generic 20601 Device */
  _528457 = '528457',
  /** Glucose Monitor */
  _528401 = '528401',
  /** Independent Activity/Living Hub */
  _528455 = '528455',
  /** Insulin Pump */
  _528403 = '528403',
  /** Peak Flow meter */
  _528405 = '528405',
  /** Pulse Oximeter */
  _528388 = '528388',
  /** Respiration rate */
  _528397 = '528397',
  /** Sleep Apnea Breathing Equipment */
  _528408 = '528408',
  /** Strength Equipment */
  _528426 = '528426',
  /** Thermometer */
  _528392 = '528392',
  /** Weight Scale */
  _528399 = '528399',
  /** Dry salt inhalation therapy device */
  _38017 = '38017',
  /** Flexible video nephroscope */
  _38663 = '38663',
  /** Dental implant, endosseous, partially-embedded */
  _42347 = '42347',
  /** Bare-metal intracranial vascular stent */
  _46352 = '46352',
  /** Dual-chamber implantable pacemaker, demand */
  _47264 = '47264',
  /** Intrauterine cannula, reusable */
  _62163 = '62163',
  /** Air-conduction hearing aid acoustic tube */
  _62260 = '62260',
  /** Spinal cord/peripheral nerve implantable analgesic electrical stimulation system lead, wired connection */
  _62423 = '62423',
  /** Blue-light phototherapy lamp, home-use */
  _62414 = '62414',
  /** Uncoated knee femur prosthesis, ceramic */
  _64587 = '64587',
  /** ADAMTS13 activity IVD, kit, chemiluminescent immunoassay */
  _64992 = '64992',
}

export const DeviceTypeValues = ['528391', '528404', '528425', '528402', '528409', '528390', '528457', '528401', '528455', '528403', '528405', '528388', '528397', '528408', '528426', '528392', '528399', '38017', '38663', '42347', '46352', '47264', '62163', '62260', '62423', '62414', '64587', '64992'] as const;
