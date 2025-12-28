import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';

/**
 * DeviceDefinitionConformsTo Interface
 * 
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionconformsto.html
 */
export interface IDeviceDefinitionConformsTo extends IBackboneElement {
  /**
   * Describes the common type of the standard, specification, or formal guidance
   */
  category?: ICodeableConcept;

  /**
   * Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type
   */
  specification: ICodeableConcept;

  /**
   * The specific form or variant of the standard, specification or formal guidance
   */
  version?: string[];
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance
   */
  source?: IRelatedArtifact[];

}
