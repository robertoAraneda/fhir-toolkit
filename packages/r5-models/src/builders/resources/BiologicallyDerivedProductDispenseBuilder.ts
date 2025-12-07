import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { BiologicallyDerivedProductDispense } from '../../models/resources/BiologicallyDerivedProductDispense.js';
import type {
  BiologicallyDerivedProductDispenseType,
  IAnnotation,
  IBiologicallyDerivedProductDispense,
  IBiologicallyDerivedProductDispensePerformer,
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * BiologicallyDerivedProductDispenseBuilder - Fluent builder for BiologicallyDerivedProductDispense resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductDispense = new BiologicallyDerivedProductDispenseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class BiologicallyDerivedProductDispenseBuilder extends DomainResourceBuilder<BiologicallyDerivedProductDispense, IBiologicallyDerivedProductDispense> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown
   */
  setStatus(status: BiologicallyDerivedProductDispenseType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set originRelationshipType
   * Relationship between the donor and intended recipient
   */
  setOriginRelationshipType(originRelationshipType: ICodeableConcept): this {
    this.data.originRelationshipType = originRelationshipType;
    return this;
  }

  /**
   * Set product
   * The BiologicallyDerivedProduct that is dispensed
   */
  setProduct(product: IReference<'BiologicallyDerivedProduct'>): this {
    this.data.product = product;
    return this;
  }

  /**
   * Set patient
   * The intended recipient of the dispensed product
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set matchStatus
   * Indicates the type of matching associated with the dispense
   */
  setMatchStatus(matchStatus: ICodeableConcept): this {
    this.data.matchStatus = matchStatus;
    return this;
  }

  /**
   * Set location
   * Where the dispense occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set quantity
   * Amount dispensed
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set preparedDate
   * When product was selected/matched
   */
  setPreparedDate(preparedDate: string): this {
    this.data.preparedDate = preparedDate;
    return this;
  }

  /**
   * Set whenHandedOver
   * When the product was dispatched
   */
  setWhenHandedOver(whenHandedOver: string): this {
    this.data.whenHandedOver = whenHandedOver;
    return this;
  }

  /**
   * Set destination
   * Where the product was dispatched to
   */
  setDestination(destination: IReference<'Location'>): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set usageInstruction
   * Specific instructions for use
   */
  setUsageInstruction(usageInstruction: string): this {
    this.data.usageInstruction = usageInstruction;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this dispense
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * The order or request that this dispense is fulfilling
   */
  addBasedOn(basedOn: IReference<'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Short description
   */
  addPartOf(partOf: IReference<'BiologicallyDerivedProductDispense'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add performer
   * Indicates who or what performed an action
   */
  addPerformer(performer: IBiologicallyDerivedProductDispensePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add note
   * Additional notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductDispense instance
   */
  build(): BiologicallyDerivedProductDispense {
    return new BiologicallyDerivedProductDispense(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductDispense instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductDispense> {
    const biologicallyDerivedProductDispense = this.build();
    await biologicallyDerivedProductDispense.validateOrThrow();
    return biologicallyDerivedProductDispense;
  }
}
