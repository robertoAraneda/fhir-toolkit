import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Provenance } from '../../models/resources/Provenance.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IPeriod,
  IProvenance,
  IProvenanceAgent,
  IProvenanceEntity,
  IReference,
  ISignature,
} from '@fhir-toolkit/r4-types';

/**
 * ProvenanceBuilder - Fluent builder for Provenance resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const provenance = new ProvenanceBuilder()
 *   .setId('123')
 *   .setRecorded(value)
 *   .addTarget({ ... })
 *   .build();
 */
export class ProvenanceBuilder extends DomainResourceBuilder<Provenance, IProvenance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set recorded
   * When the activity was recorded / updated
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set location
   * Where the activity occurred, if relevant
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set activity
   * Activity that occurred
   */
  setActivity(activity: ICodeableConcept): this {
    this.data.activity = activity;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurred choice type (occurredPeriod, occurredDateTime)
   * @param type - 'Period' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurred('Period', value)
   */
  setOccurred<T extends 'Period' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurred${type}` as keyof IProvenance;
    const otherKeys: (keyof IProvenance)[] = [];
    if (type !== 'Period') {
      otherKeys.push('occurredPeriod' as keyof IProvenance);
      otherKeys.push('_occurredPeriod' as keyof IProvenance);
    }
    if (type !== 'DateTime') {
      otherKeys.push('occurredDateTime' as keyof IProvenance);
      otherKeys.push('_occurredDateTime' as keyof IProvenance);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add target
   * Target Reference(s) (usually version specific)
   */
  addTarget(target: IReference<'Resource'>): this {
    return this.addToArray('target', target);
  }

  /**
   * Add policy
   * Policy or plan the activity was defined by
   */
  addPolicy(policy: string): this {
    return this.addToArray('policy', policy);
  }

  /**
   * Add reason
   * Reason the activity is occurring
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add agent
   * Actor involved
   */
  addAgent(agent: IProvenanceAgent): this {
    return this.addToArray('agent', agent);
  }

  /**
   * Add entity
   * An entity used in this activity
   */
  addEntity(entity: IProvenanceEntity): this {
    return this.addToArray('entity', entity);
  }

  /**
   * Add signature
   * Signature on target
   */
  addSignature(signature: ISignature): this {
    return this.addToArray('signature', signature);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Provenance instance
   */
  build(): Provenance {
    return new Provenance(this.data);
  }

  /**
   * Build and validate the Provenance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Provenance> {
    const provenance = this.build();
    await provenance.validateOrThrow();
    return provenance;
  }
}
