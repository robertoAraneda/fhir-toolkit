import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { OperationDefinition } from '../../models/resources/OperationDefinition.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IOperationDefinition,
  IOperationDefinitionOverload,
  IOperationDefinitionParameter,
  IUsageContext,
  OperationKindType,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * OperationDefinitionBuilder - Fluent builder for OperationDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationDefinition = new OperationDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class OperationDefinitionBuilder extends DomainResourceBuilder<OperationDefinition, IOperationDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this operation definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the operation definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this operation definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this operation definition (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set kind
   * operation | query
   */
  setKind(kind: OperationKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the operation definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this operation definition is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set affectsState
   * Whether content is changed by the operation
   */
  setAffectsState(affectsState: boolean): this {
    this.data.affectsState = affectsState;
    return this;
  }

  /**
   * Set code
   * Name used to invoke the operation
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set comment
   * Additional information about use
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set base
   * Marks this as a profile of the base
   */
  setBase(base: string): this {
    this.data.base = base;
    return this;
  }

  /**
   * Set system
   * Invoke at the system level?
   */
  setSystem(system: boolean): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set type
   * Invoke at the type level?
   */
  setType(type: boolean): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set instance
   * Invoke on an instance?
   */
  setInstance(instance: boolean): this {
    this.data.instance = instance;
    return this;
  }

  /**
   * Set inputProfile
   * Validation information for in parameters
   */
  setInputProfile(inputProfile: string): this {
    this.data.inputProfile = inputProfile;
    return this;
  }

  /**
   * Set outputProfile
   * Validation information for out parameters
   */
  setOutputProfile(outputProfile: string): this {
    this.data.outputProfile = outputProfile;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for operation definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add resource
   * Types this operation applies to
   */
  addResource(resource: string): this {
    return this.addToArray('resource', resource);
  }

  /**
   * Add parameter
   * Parameters for the operation/query
   */
  addParameter(parameter: IOperationDefinitionParameter): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add overload
   * Define overloaded variants for when  generating code
   */
  addOverload(overload: IOperationDefinitionOverload): this {
    return this.addToArray('overload', overload);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationDefinition instance
   */
  build(): OperationDefinition {
    return new OperationDefinition(this.data);
  }

  /**
   * Build and validate the OperationDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationDefinition> {
    const operationDefinition = this.build();
    await operationDefinition.validateOrThrow();
    return operationDefinition;
  }
}
