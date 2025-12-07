import { DomainResource } from '../base/DomainResource.js';
import type {
  ContractResourceStatusType,
  IAttachment,
  ICodeableConcept,
  IContract,
  IContractContentDefinition,
  IContractFriendly,
  IContractLegal,
  IContractRule,
  IContractSigner,
  IContractTerm,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Contract */
const CONTRACT_PROPERTIES = [
  'identifier',
  'url',
  '_url',
  'version',
  '_version',
  'status',
  '_status',
  'legalState',
  'instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'contentDerivative',
  'issued',
  '_issued',
  'applies',
  'expirationType',
  'subject',
  'authority',
  'domain',
  'site',
  'name',
  '_name',
  'title',
  '_title',
  'subtitle',
  '_subtitle',
  'alias',
  '_alias',
  'author',
  'scope',
  'topicCodeableConcept',
  'topicReference',
  'type',
  'subType',
  'contentDefinition',
  'term',
  'supportingInfo',
  'relevantHistory',
  'signer',
  'friendly',
  'legal',
  'rule',
  'legallyBindingAttachment',
  'legallyBindingReference',
] as const;

/**
 * Contract - Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 *
 * @see https://hl7.org/fhir/R4/contract.html
 *
 * @example
 * const contract = new Contract({
 *   // ... properties
 * });
 */
export class Contract extends DomainResource implements IContract {
  readonly resourceType = 'Contract' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Contract number */
  identifier?: IIdentifier[];

  /** Basal definition */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business edition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated */
  status?: ContractResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Negotiation status */
  legalState?: ICodeableConcept;

  /** Source Contract Definition */
  instantiatesCanonical?: IReference<'Contract'>;

  /** External Contract Definition */
  instantiatesUri?: string;

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Content derived from the basal information */
  contentDerivative?: ICodeableConcept;

  /** When this Contract was issued */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** Effective time */
  applies?: IPeriod;

  /** Contract cessation cause */
  expirationType?: ICodeableConcept;

  /** Contract Target Entity */
  subject?: IReference<'Resource'>[];

  /** Authority under which this Contract has standing */
  authority?: IReference<'Organization'>[];

  /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
  domain?: IReference<'Location'>[];

  /** Specific Location */
  site?: IReference<'Location'>[];

  /** Computer friendly designation */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Human Friendly name */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate Friendly name */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** Acronym or short name */
  alias?: string[];

  /** Extension for alias */
  _alias?: IElement;

  /** Source of Contract */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Range of Legal Concerns */
  scope?: ICodeableConcept;

  /** Focus of contract interest */
  topicCodeableConcept?: ICodeableConcept;

  /** Focus of contract interest */
  topicReference?: IReference;

  /** Legal instrument category */
  type?: ICodeableConcept;

  /** Subtype within the context of type */
  subType?: ICodeableConcept[];

  /** Contract precursor content */
  contentDefinition?: IContractContentDefinition;

  /** Contract Term List */
  term?: IContractTerm[];

  /** Extra Information */
  supportingInfo?: IReference<'Resource'>[];

  /** Key event in Contract History */
  relevantHistory?: IReference<'Provenance'>[];

  /** Contract Signatory */
  signer?: IContractSigner[];

  /** Contract Friendly Language */
  friendly?: IContractFriendly[];

  /** Contract Legal Language */
  legal?: IContractLegal[];

  /** Computable Contract Language */
  rule?: IContractRule[];

  /** Binding Contract */
  legallyBindingAttachment?: IAttachment;

  /** Binding Contract */
  legallyBindingReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IContract>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Contract from a JSON object
   */
  static fromJSON(json: IContract): Contract {
    return new Contract(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Contract with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContract>): Contract {
    return new Contract({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Contract by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContract) => Partial<IContract>): Contract {
    const currentData = this.toJSON();
    return new Contract({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContract)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContract {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CONTRACT_PROPERTIES);
    return result as IContract;
  }

  /**
   * Create a deep clone of this Contract
   */
  clone(): Contract {
    return new Contract(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Contract
   */
  toString(): string {
    const parts: string[] = ['Contract'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
