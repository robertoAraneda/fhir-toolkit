import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * DocumentManifestRelated Interface
 * 
 * Related things
 * 
 *
 * @see https://hl7.org/fhir/R4B/documentmanifestrelated.html
 */
export interface IDocumentManifestRelated extends IBackboneElement {
  /**
   * Identifiers of things that are related
   */
  identifier?: IIdentifier;

  /**
   * Related Resource
   */
  ref?: IReference<'Resource'>;

}
