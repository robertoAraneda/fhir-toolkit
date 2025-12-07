import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IStructureDefinitionContext } from '../backbones/IStructureDefinitionContext.js';
import type { IStructureDefinitionDifferential } from '../backbones/IStructureDefinitionDifferential.js';
import type { IStructureDefinitionMapping } from '../backbones/IStructureDefinitionMapping.js';
import type { IStructureDefinitionSnapshot } from '../backbones/IStructureDefinitionSnapshot.js';
import type { FHIRVersionType, PublicationStatusType, StructureDefinitionKindType, TypeDerivationRuleType } from '../../valuesets/index.js';

/**
 * StructureDefinition Interface
 * 
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 * 
 *
 * @see https://hl7.org/fhir/R4/structuredefinition.html
 */
export interface IStructureDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'StructureDefinition';

  /**
   * Canonical identifier for this structure definition, represented as a URI (globally unique)
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the structure definition
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the structure definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this structure definition (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this structure definition (human friendly)
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
   * Natural language description of the structure definition
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
   * Intended jurisdiction for structure definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this structure definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Assist with indexing and finding
   */
  keyword?: ICoding[];

  /**
   * FHIR Version this StructureDefinition targets
   */
  fhirVersion?: FHIRVersionType;
  /**
   * Extension for fhirVersion
   */
  _fhirVersion?: IElement;

  /**
   * External specification that the content is mapped to
   */
  mapping?: IStructureDefinitionMapping[];

  /**
   * primitive-type | complex-type | resource | logical
   */
  kind: StructureDefinitionKindType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * Whether the structure is abstract
   */
  abstract: boolean;
  /**
   * Extension for abstract
   */
  _abstract?: IElement;

  /**
   * If an extension, where it can be used in instances
   */
  context?: IStructureDefinitionContext[];

  /**
   * FHIRPath invariants - when the extension can be used
   */
  contextInvariant?: string[];
  /**
   * Extension for contextInvariant
   */
  _contextInvariant?: IElement;

  /**
   * Type defined or constrained by this structure
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Definition that this type is constrained/specialized from
   */
  baseDefinition?: string;
  /**
   * Extension for baseDefinition
   */
  _baseDefinition?: IElement;

  /**
   * specialization | constraint - How relates to base definition
   */
  derivation?: TypeDerivationRuleType;
  /**
   * Extension for derivation
   */
  _derivation?: IElement;

  /**
   * Snapshot view of the structure
   */
  snapshot?: IStructureDefinitionSnapshot;

  /**
   * Differential view of the structure
   */
  differential?: IStructureDefinitionDifferential;

}
