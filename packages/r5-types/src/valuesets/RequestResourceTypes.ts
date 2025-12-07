/**
 * Request Resource Types
 * 
 * All Resource Types that represent request resources
 *
 * @see http://hl7.org/fhir/ValueSet/request-resource-types
 */

export type RequestResourceTypesType = 'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'Task' | 'Transport' | 'VisionPrescription';

export enum RequestResourceTypesEnum {
  Appointment = 'Appointment',
  Appointmentresponse = 'AppointmentResponse',
  Careplan = 'CarePlan',
  Claim = 'Claim',
  Communicationrequest = 'CommunicationRequest',
  Coverageeligibilityrequest = 'CoverageEligibilityRequest',
  Devicerequest = 'DeviceRequest',
  Enrollmentrequest = 'EnrollmentRequest',
  Immunizationrecommendation = 'ImmunizationRecommendation',
  Medicationrequest = 'MedicationRequest',
  Nutritionorder = 'NutritionOrder',
  Requestorchestration = 'RequestOrchestration',
  Servicerequest = 'ServiceRequest',
  Supplyrequest = 'SupplyRequest',
  Task = 'Task',
  Transport = 'Transport',
  Visionprescription = 'VisionPrescription',
}

export const RequestResourceTypesValues = ['Appointment', 'AppointmentResponse', 'CarePlan', 'Claim', 'CommunicationRequest', 'CoverageEligibilityRequest', 'DeviceRequest', 'EnrollmentRequest', 'ImmunizationRecommendation', 'MedicationRequest', 'NutritionOrder', 'RequestOrchestration', 'ServiceRequest', 'SupplyRequest', 'Task', 'Transport', 'VisionPrescription'] as const;
