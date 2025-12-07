import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';

/**
 * DeviceDefinitionGuideline Interface
 * 
 * Information aimed at providing directions for the usage of this model of device
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionguideline.html
 */
export interface IDeviceDefinitionGuideline extends IBackboneElement {
  /**
   * The circumstances that form the setting for using the device
   */
  useContext?: IUsageContext[];

  /**
   * Detailed written and visual directions for the user on how to use the device
   */
  usageInstruction?: string;
  /**
   * Extension for usageInstruction
   */
  _usageInstruction?: IElement;

  /**
   * A source of information or reference for this guideline
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * A clinical condition for which the device was designed to be used
   */
  indication?: ICodeableConcept[];

  /**
   * A specific situation when a device should not be used because it may cause harm
   */
  contraindication?: ICodeableConcept[];

  /**
   * Specific hazard alert information that a user needs to know before using the device
   */
  warning?: ICodeableConcept[];

  /**
   * A description of the general purpose or medical use of the device or its function
   */
  intendedUse?: string;
  /**
   * Extension for intendedUse
   */
  _intendedUse?: IElement;

}
