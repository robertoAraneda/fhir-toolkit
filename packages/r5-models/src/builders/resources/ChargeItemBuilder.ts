import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ChargeItem } from '../../models/resources/ChargeItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ChargeItemStatusType,
  IAnnotation,
  IChargeItem,
  IChargeItemPerformer,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IMonetaryComponent,
  IPeriod,
  IQuantity,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * ChargeItemBuilder - Fluent builder for ChargeItem resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItem = new ChargeItemBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ChargeItemBuilder extends DomainResourceBuilder<ChargeItem, IChargeItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * planned | billable | not-billable | aborted | billed | entered-in-error | unknown
   */
  setStatus(status: ChargeItemStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * A code that identifies the charge, like a billing code
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Individual service was done for/to
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with this ChargeItem
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set performingOrganization
   * Organization providing the charged service
   */
  setPerformingOrganization(performingOrganization: IReference<'Organization'>): this {
    this.data.performingOrganization = performingOrganization;
    return this;
  }

  /**
   * Set requestingOrganization
   * Organization requesting the charged service
   */
  setRequestingOrganization(requestingOrganization: IReference<'Organization'>): this {
    this.data.requestingOrganization = requestingOrganization;
    return this;
  }

  /**
   * Set costCenter
   * Organization that has ownership of the (potential, future) revenue
   */
  setCostCenter(costCenter: IReference<'Organization'>): this {
    this.data.costCenter = costCenter;
    return this;
  }

  /**
   * Set quantity
   * Quantity of which the charge item has been serviced
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set unitPriceComponent
   * Unit price overriding the associated rules
   */
  setUnitPriceComponent(unitPriceComponent: IMonetaryComponent): this {
    this.data.unitPriceComponent = unitPriceComponent;
    return this;
  }

  /**
   * Set totalPriceComponent
   * Total price overriding the associated rules
   */
  setTotalPriceComponent(totalPriceComponent: IMonetaryComponent): this {
    this.data.totalPriceComponent = totalPriceComponent;
    return this;
  }

  /**
   * Set overrideReason
   * Reason for overriding the list price/factor
   */
  setOverrideReason(overrideReason: ICodeableConcept): this {
    this.data.overrideReason = overrideReason;
    return this;
  }

  /**
   * Set enterer
   * Individual who was entering
   */
  setEnterer(enterer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.enterer = enterer;
    return this;
  }

  /**
   * Set enteredDate
   * Date the charge item was entered
   */
  setEnteredDate(enteredDate: string): this {
    this.data.enteredDate = enteredDate;
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
    const key = `occurrence${type}` as keyof IChargeItem;
    const otherKeys: (keyof IChargeItem)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IChargeItem);
      otherKeys.push('_occurrenceDateTime' as keyof IChargeItem);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IChargeItem);
      otherKeys.push('_occurrencePeriod' as keyof IChargeItem);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IChargeItem);
      otherKeys.push('_occurrenceTiming' as keyof IChargeItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add definitionUri
   * Defining information about the code of this charge item
   */
  addDefinitionUri(definitionUri: string): this {
    return this.addToArray('definitionUri', definitionUri);
  }

  /**
   * Add definitionCanonical
   * Resource defining the code of this ChargeItem
   */
  addDefinitionCanonical(definitionCanonical: string): this {
    return this.addToArray('definitionCanonical', definitionCanonical);
  }

  /**
   * Add partOf
   * Part of referenced ChargeItem
   */
  addPartOf(partOf: IReference<'ChargeItem'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add performer
   * Who performed charged service
   */
  addPerformer(performer: IChargeItemPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add bodysite
   * Anatomical location, if relevant
   */
  addBodysite(bodysite: ICodeableConcept): this {
    return this.addToArray('bodysite', bodysite);
  }

  /**
   * Add reason
   * Why was the charged  service rendered?
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add service
   * Which rendered service is being charged?
   */
  addService(service: ICodeableReference): this {
    return this.addToArray('service', service);
  }

  /**
   * Add product
   * Product charged
   */
  addProduct(product: ICodeableReference): this {
    return this.addToArray('product', product);
  }

  /**
   * Add account
   * Account to place this charge
   */
  addAccount(account: IReference<'Account'>): this {
    return this.addToArray('account', account);
  }

  /**
   * Add note
   * Comments made about the ChargeItem
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add supportingInformation
   * Further information supporting this charge
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItem instance
   */
  build(): ChargeItem {
    return new ChargeItem(this.data);
  }

  /**
   * Build and validate the ChargeItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItem> {
    const chargeItem = this.build();
    await chargeItem.validateOrThrow();
    return chargeItem;
  }
}
