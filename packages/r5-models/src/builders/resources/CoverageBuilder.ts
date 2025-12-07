import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Coverage } from '../../models/resources/Coverage.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverage,
  ICoverageClass,
  ICoverageCostToBeneficiary,
  ICoveragePaymentBy,
  IIdentifier,
  IPeriod,
  IReference,
  KindType,
} from '@fhir-toolkit/r5-types';

/**
 * CoverageBuilder - Fluent builder for Coverage resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverage = new CoverageBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CoverageBuilder extends DomainResourceBuilder<Coverage, ICoverage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set kind
   * insurance | self-pay | other
   */
  setKind(kind: KindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set type
   * Coverage category such as medical or accident
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set policyHolder
   * Owner of the policy
   */
  setPolicyHolder(policyHolder: IReference<'Patient' | 'RelatedPerson' | 'Organization'>): this {
    this.data.policyHolder = policyHolder;
    return this;
  }

  /**
   * Set subscriber
   * Subscriber to the policy
   */
  setSubscriber(subscriber: IReference<'Patient' | 'RelatedPerson'>): this {
    this.data.subscriber = subscriber;
    return this;
  }

  /**
   * Set beneficiary
   * Plan beneficiary
   */
  setBeneficiary(beneficiary: IReference<'Patient'>): this {
    this.data.beneficiary = beneficiary;
    return this;
  }

  /**
   * Set dependent
   * Dependent number
   */
  setDependent(dependent: string): this {
    this.data.dependent = dependent;
    return this;
  }

  /**
   * Set relationship
   * Beneficiary relationship to the subscriber
   */
  setRelationship(relationship: ICodeableConcept): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set period
   * Coverage start and end dates
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set insurer
   * Issuer of the policy
   */
  setInsurer(insurer: IReference<'Organization'>): this {
    this.data.insurer = insurer;
    return this;
  }

  /**
   * Set order
   * Relative order of the coverage
   */
  setOrder(order: number): this {
    this.data.order = order;
    return this;
  }

  /**
   * Set network
   * Insurer network
   */
  setNetwork(network: string): this {
    this.data.network = network;
    return this;
  }

  /**
   * Set subrogation
   * Reimbursement to insurer
   */
  setSubrogation(subrogation: boolean): this {
    this.data.subrogation = subrogation;
    return this;
  }

  /**
   * Set insurancePlan
   * Insurance plan details
   */
  setInsurancePlan(insurancePlan: IReference<'InsurancePlan'>): this {
    this.data.insurancePlan = insurancePlan;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier(s) for this coverage
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add paymentBy
   * Self-pay parties and responsibility
   */
  addPaymentBy(paymentBy: ICoveragePaymentBy): this {
    return this.addToArray('paymentBy', paymentBy);
  }

  /**
   * Add subscriberId
   * ID assigned to the subscriber
   */
  addSubscriberId(subscriberId: IIdentifier): this {
    return this.addToArray('subscriberId', subscriberId);
  }

  /**
   * Add class
   * Additional coverage classifications
   */
  addClass(_class: ICoverageClass): this {
    return this.addToArray('class', _class);
  }

  /**
   * Add costToBeneficiary
   * Patient payments for services/products
   */
  addCostToBeneficiary(costToBeneficiary: ICoverageCostToBeneficiary): this {
    return this.addToArray('costToBeneficiary', costToBeneficiary);
  }

  /**
   * Add contract
   * Contract details
   */
  addContract(contract: IReference<'Contract'>): this {
    return this.addToArray('contract', contract);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Coverage instance
   */
  build(): Coverage {
    return new Coverage(this.data);
  }

  /**
   * Build and validate the Coverage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Coverage> {
    const coverage = this.build();
    await coverage.validateOrThrow();
    return coverage;
  }
}
