import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';

/**
 * DeviceDefinitionClassification Interface
 * 
 * What kind of device or device system this is
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionclassification.html
 */
export interface IDeviceDefinitionClassification extends IBackboneElement {
  /**
   * A classification or risk class of the device model
   */
  type: ICodeableConcept;

  /**
   * Further information qualifying this classification of the device model
   */
  justification?: IRelatedArtifact[];

}
