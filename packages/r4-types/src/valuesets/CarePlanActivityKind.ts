/**
 * Care Plan Activity Kind
 * 
 * Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 *
 * @see http://hl7.org/fhir/ValueSet/care-plan-activity-kind
 */

export type CarePlanActivityKindType = 'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription';

export enum CarePlanActivityKindEnum {
  Appointment = 'Appointment',
  Communicationrequest = 'CommunicationRequest',
  Devicerequest = 'DeviceRequest',
  Medicationrequest = 'MedicationRequest',
  Nutritionorder = 'NutritionOrder',
  Task = 'Task',
  Servicerequest = 'ServiceRequest',
  Visionprescription = 'VisionPrescription',
}

export const CarePlanActivityKindValues = ['Appointment', 'CommunicationRequest', 'DeviceRequest', 'MedicationRequest', 'NutritionOrder', 'Task', 'ServiceRequest', 'VisionPrescription'] as const;
