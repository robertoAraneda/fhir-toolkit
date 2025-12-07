import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SupplyRequest } from '../../models/resources/SupplyRequest.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IQuantity,
  IReference,
  ISupplyRequest,
  ISupplyRequestParameter,
  ITiming,
  RequestPriorityType,
  SupplyRequestStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * SupplyRequestBuilder - Fluent builder for SupplyRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const supplyRequest = new SupplyRequestBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SupplyRequestBuilder extends DomainResourceBuilder<SupplyRequest, ISupplyRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | suspended +
   */
  setStatus(status: SupplyRequestStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set category
   * The kind of supply (central, non-stock, etc.)
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set deliverFor
   * The patient for who the supply request is for
   */
  setDeliverFor(deliverFor: IReference<'Patient'>): this {
    this.data.deliverFor = deliverFor;
    return this;
  }

  /**
   * Set item
   * Medication, Substance, or Device requested to be supplied
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  /**
   * Set quantity
   * The requested amount of the item indicated
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set authoredOn
   * When the request was made
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set requester
   * Individual making the request
   */
  setRequester(requester: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device' | 'CareTeam'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set deliverFrom
   * The origin of the supply
   */
  setDeliverFrom(deliverFrom: IReference<'Organization' | 'Location'>): this {
    this.data.deliverFrom = deliverFrom;
    return this;
  }

  /**
   * Set deliverTo
   * The destination of the supply
   */
  setDeliverTo(deliverTo: IReference<'Organization' | 'Location' | 'Patient' | 'RelatedPerson'>): this {
    this.data.deliverTo = deliverTo;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod, occurrenceTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof ISupplyRequest;
    const otherKeys: (keyof ISupplyRequest)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof ISupplyRequest);
      otherKeys.push('_occurrenceDateTime' as keyof ISupplyRequest);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof ISupplyRequest);
      otherKeys.push('_occurrencePeriod' as keyof ISupplyRequest);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof ISupplyRequest);
      otherKeys.push('_occurrenceTiming' as keyof ISupplyRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for SupplyRequest
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * What other request is fulfilled by this supply request
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add parameter
   * Ordered item details
   */
  addParameter(parameter: ISupplyRequestParameter): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add supplier
   * Who is intended to fulfill the request
   */
  addSupplier(supplier: IReference<'Organization' | 'HealthcareService'>): this {
    return this.addToArray('supplier', supplier);
  }

  /**
   * Add reason
   * The reason why the supply item was requested
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SupplyRequest instance
   */
  build(): SupplyRequest {
    return new SupplyRequest(this.data);
  }

  /**
   * Build and validate the SupplyRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SupplyRequest> {
    const supplyRequest = this.build();
    await supplyRequest.validateOrThrow();
    return supplyRequest;
  }
}
