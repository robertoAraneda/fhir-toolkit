/**
 * Task Status Reason
 * 
 * The current status reason of the task.
 *
 * @see http://hl7.org/fhir/ValueSet/task-status-reason
 */

export type TaskStatusReasonType = 'missing' | 'misidentified' | 'equipment-issue' | 'environmental-issue' | 'personnel-issue';

export enum TaskStatusReasonEnum {
  /** Missing */
  Missing = 'missing',
  /** Misidentified */
  Misidentified = 'misidentified',
  /** Equipment-issue */
  EquipmentIssue = 'equipment-issue',
  /** Environmental-issue */
  EnvironmentalIssue = 'environmental-issue',
  /** Personnel-issue */
  PersonnelIssue = 'personnel-issue',
}

export const TaskStatusReasonValues = ['missing', 'misidentified', 'equipment-issue', 'environmental-issue', 'personnel-issue'] as const;
