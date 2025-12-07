import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestResource } from '../../models/backbones/CapabilityStatementRestResource.js';
import type {
  ConditionalDeleteStatusType,
  ConditionalReadStatusType,
  ICapabilityStatementRestResource,
  ICapabilityStatementRestResourceInteraction,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  ReferenceHandlingPolicyType,
  ResourceVersionPolicyType,
} from '@fhir-toolkit/r4b-types';

/**
 * CapabilityStatementRestResourceBuilder - Fluent builder for CapabilityStatementRestResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestResource = new CapabilityStatementRestResourceBuilder()
 *   .setType(value)
 *   .addSupportedProfile({ ... })
 *   .build();
 */
export class CapabilityStatementRestResourceBuilder extends BackboneElementBuilder<CapabilityStatementRestResource, ICapabilityStatementRestResource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A resource type that is supported
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set profile
   * Base System profile for all uses of resource
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  /**
   * Set documentation
   * Additional information about the use of the resource type
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set versioning
   * no-version | versioned | versioned-update
   */
  setVersioning(versioning: ResourceVersionPolicyType): this {
    this.data.versioning = versioning;
    return this;
  }

  /**
   * Set readHistory
   * Whether vRead can return past versions
   */
  setReadHistory(readHistory: boolean): this {
    this.data.readHistory = readHistory;
    return this;
  }

  /**
   * Set updateCreate
   * If update can commit to a new identity
   */
  setUpdateCreate(updateCreate: boolean): this {
    this.data.updateCreate = updateCreate;
    return this;
  }

  /**
   * Set conditionalCreate
   * If allows/uses conditional create
   */
  setConditionalCreate(conditionalCreate: boolean): this {
    this.data.conditionalCreate = conditionalCreate;
    return this;
  }

  /**
   * Set conditionalRead
   * not-supported | modified-since | not-match | full-support
   */
  setConditionalRead(conditionalRead: ConditionalReadStatusType): this {
    this.data.conditionalRead = conditionalRead;
    return this;
  }

  /**
   * Set conditionalUpdate
   * If allows/uses conditional update
   */
  setConditionalUpdate(conditionalUpdate: boolean): this {
    this.data.conditionalUpdate = conditionalUpdate;
    return this;
  }

  /**
   * Set conditionalDelete
   * not-supported | single | multiple - how conditional delete is supported
   */
  setConditionalDelete(conditionalDelete: ConditionalDeleteStatusType): this {
    this.data.conditionalDelete = conditionalDelete;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add supportedProfile
   * Profiles for use cases supported
   */
  addSupportedProfile(supportedProfile: string): this {
    return this.addToArray('supportedProfile', supportedProfile);
  }

  /**
   * Add interaction
   * What operations are supported?
   */
  addInteraction(interaction: ICapabilityStatementRestResourceInteraction): this {
    return this.addToArray('interaction', interaction);
  }

  /**
   * Add referencePolicy
   * literal | logical | resolves | enforced | local
   */
  addReferencePolicy(referencePolicy: ReferenceHandlingPolicyType): this {
    return this.addToArray('referencePolicy', referencePolicy);
  }

  /**
   * Add searchInclude
   * _include values supported by the server
   */
  addSearchInclude(searchInclude: string): this {
    return this.addToArray('searchInclude', searchInclude);
  }

  /**
   * Add searchRevInclude
   * _revinclude values supported by the server
   */
  addSearchRevInclude(searchRevInclude: string): this {
    return this.addToArray('searchRevInclude', searchRevInclude);
  }

  /**
   * Add searchParam
   * Search parameters supported by implementation
   */
  addSearchParam(searchParam: ICapabilityStatementRestResourceSearchParam): this {
    return this.addToArray('searchParam', searchParam);
  }

  /**
   * Add operation
   * Definition of a resource operation
   */
  addOperation(operation: ICapabilityStatementRestResourceOperation): this {
    return this.addToArray('operation', operation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRestResource instance
   */
  build(): CapabilityStatementRestResource {
    return new CapabilityStatementRestResource(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestResource> {
    const capabilityStatementRestResource = this.build();
    await capabilityStatementRestResource.validateOrThrow();
    return capabilityStatementRestResource;
  }
}
