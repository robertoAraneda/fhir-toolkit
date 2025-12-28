import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IImplementationGuideDefinition } from '../backbones/IImplementationGuideDefinition.js';
import type { IImplementationGuideDependsOn } from '../backbones/IImplementationGuideDependsOn.js';
import type { IImplementationGuideGlobal } from '../backbones/IImplementationGuideGlobal.js';
import type { IImplementationGuideManifest } from '../backbones/IImplementationGuideManifest.js';
import type { FHIRVersionType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * ImplementationGuide Interface
 * 
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguide.html
 */
export interface IImplementationGuide extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ImplementationGuide';

  /**
   * Canonical identifier for this implementation guide, represented as a URI (globally unique)
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the implementation guide
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this implementation guide (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this implementation guide (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the implementation guide
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for implementation guide (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * NPM Package name for IG
   */
  packageId: string;
  /**
   * Extension for packageId
   */
  _packageId?: IElement;

  /**
   * SPDX license code for this IG (or not-open-source)
   */
  license?: string;
  /**
   * Extension for license
   */
  _license?: IElement;

  /**
   * FHIR Version(s) this Implementation Guide targets
   */
  fhirVersion: FHIRVersionType[];
  /**
   * Extension for fhirVersion
   */
  _fhirVersion?: IElement;

  /**
   * Another Implementation guide this depends on
   */
  dependsOn?: IImplementationGuideDependsOn[];

  /**
   * Profiles that apply globally
   */
  global?: IImplementationGuideGlobal[];

  /**
   * Information needed to build the IG
   */
  definition?: IImplementationGuideDefinition;

  /**
   * Information about an assembled IG
   */
  manifest?: IImplementationGuideManifest;

}
