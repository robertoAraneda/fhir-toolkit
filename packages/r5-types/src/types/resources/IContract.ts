import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IContractContentDefinition } from '../backbones/IContractContentDefinition.js';
import type { IContractFriendly } from '../backbones/IContractFriendly.js';
import type { IContractLegal } from '../backbones/IContractLegal.js';
import type { IContractRule } from '../backbones/IContractRule.js';
import type { IContractSigner } from '../backbones/IContractSigner.js';
import type { IContractTerm } from '../backbones/IContractTerm.js';
import type { ContractResourceStatusType } from '../../valuesets/index.js';

/**
 * Contract Interface
 * 
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 * 
 *
 * @see https://hl7.org/fhir/R4/contract.html
 */
export interface IContract extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Contract';

  /**
   * Contract number
   */
  identifier?: IIdentifier[];

  /**
   * Basal definition
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business edition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * amended | appended | cancelled | disputed | entered-in-error | executable +
   */
  status?: ContractResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Negotiation status
   */
  legalState?: ICodeableConcept;

  /**
   * Source Contract Definition
   */
  instantiatesCanonical?: IReference<'Contract'>;

  /**
   * External Contract Definition
   */
  instantiatesUri?: string;
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Content derived from the basal information
   */
  contentDerivative?: ICodeableConcept;

  /**
   * When this Contract was issued
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * Effective time
   */
  applies?: IPeriod;

  /**
   * Contract cessation cause
   */
  expirationType?: ICodeableConcept;

  /**
   * Contract Target Entity
   */
  subject?: IReference<'Resource'>[];

  /**
   * Authority under which this Contract has standing
   */
  authority?: IReference<'Organization'>[];

  /**
   * A sphere of control governed by an authoritative jurisdiction, organization, or person
   */
  domain?: IReference<'Location'>[];

  /**
   * Specific Location
   */
  site?: IReference<'Location'>[];

  /**
   * Computer friendly designation
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Human Friendly name
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate Friendly name
   */
  subtitle?: string;
  /**
   * Extension for subtitle
   */
  _subtitle?: IElement;

  /**
   * Acronym or short name
   */
  alias?: string[];
  /**
   * Extension for alias
   */
  _alias?: IElement;

  /**
   * Source of Contract
   */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Range of Legal Concerns
   */
  scope?: ICodeableConcept;

  /**
   * Focus of contract interest
   */
  topicCodeableConcept?: ICodeableConcept;

  /**
   * Focus of contract interest
   */
  topicReference?: IReference;

  /**
   * Legal instrument category
   */
  type?: ICodeableConcept;

  /**
   * Subtype within the context of type
   */
  subType?: ICodeableConcept[];

  /**
   * Contract precursor content
   */
  contentDefinition?: IContractContentDefinition;

  /**
   * Contract Term List
   */
  term?: IContractTerm[];

  /**
   * Extra Information
   */
  supportingInfo?: IReference<'Resource'>[];

  /**
   * Key event in Contract History
   */
  relevantHistory?: IReference<'Provenance'>[];

  /**
   * Contract Signatory
   */
  signer?: IContractSigner[];

  /**
   * Contract Friendly Language
   */
  friendly?: IContractFriendly[];

  /**
   * Contract Legal Language
   */
  legal?: IContractLegal[];

  /**
   * Computable Contract Language
   */
  rule?: IContractRule[];

  /**
   * Binding Contract
   */
  legallyBindingAttachment?: IAttachment;

  /**
   * Binding Contract
   */
  legallyBindingReference?: IReference;

}
