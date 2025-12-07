import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubscriptionTopic } from '../../models/resources/SubscriptionTopic.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IIdentifier,
  IPeriod,
  ISubscriptionTopic,
  ISubscriptionTopicCanFilterBy,
  ISubscriptionTopicEventTrigger,
  ISubscriptionTopicNotificationShape,
  ISubscriptionTopicResourceTrigger,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * SubscriptionTopicBuilder - Fluent builder for SubscriptionTopic resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const subscriptionTopic = new SubscriptionTopicBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SubscriptionTopicBuilder extends DomainResourceBuilder<SubscriptionTopic, ISubscriptionTopic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this subscription topic definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the subscription topic
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set title
   * Name for this subscription topic (Human friendly)
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
   * Set experimental
   * If for testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date status first applied
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * The name of the individual or organization that published the SubscriptionTopic
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the SubscriptionTopic
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this SubscriptionTopic is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set approvalDate
   * When SubscriptionTopic is/was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * Date the Subscription Topic was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * The effective date range for the SubscriptionTopic
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for this subscription topic
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add derivedFrom
   * Based on FHIR protocol or definition
   */
  addDerivedFrom(derivedFrom: string): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * Content intends to support these contexts
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction of the SubscriptionTopic (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add resourceTrigger
   * Definition of a resource-based trigger for the subscription topic
   */
  addResourceTrigger(resourceTrigger: ISubscriptionTopicResourceTrigger): this {
    return this.addToArray('resourceTrigger', resourceTrigger);
  }

  /**
   * Add eventTrigger
   * Event definitions the SubscriptionTopic
   */
  addEventTrigger(eventTrigger: ISubscriptionTopicEventTrigger): this {
    return this.addToArray('eventTrigger', eventTrigger);
  }

  /**
   * Add canFilterBy
   * Properties by which a Subscription can filter notifications from the SubscriptionTopic
   */
  addCanFilterBy(canFilterBy: ISubscriptionTopicCanFilterBy): this {
    return this.addToArray('canFilterBy', canFilterBy);
  }

  /**
   * Add notificationShape
   * Properties for describing the shape of notifications generated by this topic
   */
  addNotificationShape(notificationShape: ISubscriptionTopicNotificationShape): this {
    return this.addToArray('notificationShape', notificationShape);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubscriptionTopic instance
   */
  build(): SubscriptionTopic {
    return new SubscriptionTopic(this.data);
  }

  /**
   * Build and validate the SubscriptionTopic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubscriptionTopic> {
    const subscriptionTopic = this.build();
    await subscriptionTopic.validateOrThrow();
    return subscriptionTopic;
  }
}
