/**
 * RequestResourceType
 * 
 * A list of all the request resource types defined in this version of the FHIR specification.
 *
 * @see http://hl7.org/fhir/ValueSet/request-resource-types
 */

export type RequestResourceTypeType = 'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'SupplyRequest' | 'Task' | 'VisionPrescription';

export enum RequestResourceTypeEnum {
  /** Appointment */
  Appointment = 'Appointment',
  /** AppointmentResponse */
  Appointmentresponse = 'AppointmentResponse',
  /** CarePlan */
  Careplan = 'CarePlan',
  /** Claim */
  Claim = 'Claim',
  /** CommunicationRequest */
  Communicationrequest = 'CommunicationRequest',
  /** Contract */
  Contract = 'Contract',
  /** DeviceRequest */
  Devicerequest = 'DeviceRequest',
  /** EnrollmentRequest */
  Enrollmentrequest = 'EnrollmentRequest',
  /** ImmunizationRecommendation */
  Immunizationrecommendation = 'ImmunizationRecommendation',
  /** MedicationRequest */
  Medicationrequest = 'MedicationRequest',
  /** NutritionOrder */
  Nutritionorder = 'NutritionOrder',
  /** ServiceRequest */
  Servicerequest = 'ServiceRequest',
  /** SupplyRequest */
  Supplyrequest = 'SupplyRequest',
  /** Task */
  Task = 'Task',
  /** VisionPrescription */
  Visionprescription = 'VisionPrescription',
}

export const RequestResourceTypeValues = ['Appointment', 'AppointmentResponse', 'CarePlan', 'Claim', 'CommunicationRequest', 'Contract', 'DeviceRequest', 'EnrollmentRequest', 'ImmunizationRecommendation', 'MedicationRequest', 'NutritionOrder', 'ServiceRequest', 'SupplyRequest', 'Task', 'VisionPrescription'] as const;
