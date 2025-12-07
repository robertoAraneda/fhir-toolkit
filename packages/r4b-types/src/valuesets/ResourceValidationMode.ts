/**
 * Resource Validation Mode value set
 * 
 * Codes indicating how a resource can be validated
 *
 * @see http://hl7.org/fhir/ValueSet/resource-validation-mode
 */

export type ResourceValidationModeType = 'create' | 'update' | 'delete' | 'profile';

export enum ResourceValidationModeEnum {
  /** Validate for Create */
  Create = 'create',
  /** Validate for Update */
  Update = 'update',
  /** Validate for Delete */
  Delete = 'delete',
  /** Validate Against a Profile */
  Profile = 'profile',
}

export const ResourceValidationModeValues = ['create', 'update', 'delete', 'profile'] as const;
