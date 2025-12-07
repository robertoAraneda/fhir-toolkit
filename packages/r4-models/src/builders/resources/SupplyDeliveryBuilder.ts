import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SupplyDelivery } from '../../models/resources/SupplyDelivery.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  ISupplyDelivery,
  ISupplyDeliverySuppliedItem,
  ITiming,
  SupplyDeliveryStatusType,
  SupplyItemTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * SupplyDeliveryBuilder - Fluent builder for SupplyDelivery resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const supplyDelivery = new SupplyDeliveryBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SupplyDeliveryBuilder extends DomainResourceBuilder<SupplyDelivery, ISupplyDelivery> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * in-progress | completed | abandoned | entered-in-error
   */
  setStatus(status: SupplyDeliveryStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set patient
   * Patient for whom the item is supplied
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set type
   * Category of dispense event
   */
  setType(type: ICodeableConcept<SupplyItemTypeType>): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set suppliedItem
   * The item that is delivered or supplied
   */
  setSuppliedItem(suppliedItem: ISupplyDeliverySuppliedItem): this {
    this.data.suppliedItem = suppliedItem;
    return this;
  }

  /**
   * Set supplier
   * Dispenser
   */
  setSupplier(supplier: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.supplier = supplier;
    return this;
  }

  /**
   * Set destination
   * Where the Supply was sent
   */
  setDestination(destination: IReference<'Location'>): this {
    this.data.destination = destination;
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
    const key = `occurrence${type}` as keyof ISupplyDelivery;
    const otherKeys: (keyof ISupplyDelivery)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof ISupplyDelivery);
      otherKeys.push('_occurrenceDateTime' as keyof ISupplyDelivery);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof ISupplyDelivery);
      otherKeys.push('_occurrencePeriod' as keyof ISupplyDelivery);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof ISupplyDelivery);
      otherKeys.push('_occurrenceTiming' as keyof ISupplyDelivery);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Fulfills plan, proposal or order
   */
  addBasedOn(basedOn: IReference<'SupplyRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'SupplyDelivery' | 'Contract'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add receiver
   * Who collected the Supply
   */
  addReceiver(receiver: IReference<'Practitioner' | 'PractitionerRole'>): this {
    return this.addToArray('receiver', receiver);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SupplyDelivery instance
   */
  build(): SupplyDelivery {
    return new SupplyDelivery(this.data);
  }

  /**
   * Build and validate the SupplyDelivery instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SupplyDelivery> {
    const supplyDelivery = this.build();
    await supplyDelivery.validateOrThrow();
    return supplyDelivery;
  }
}
