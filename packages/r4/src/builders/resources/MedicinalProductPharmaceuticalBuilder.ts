import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductPharmaceutical } from '../../models/resources/MedicinalProductPharmaceutical.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductPharmaceutical,
  IMedicinalProductPharmaceuticalCharacteristics,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPharmaceuticalBuilder - Fluent builder for MedicinalProductPharmaceutical resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPharmaceutical = new MedicinalProductPharmaceuticalBuilder()
 *   .setId('123')
 *   .setAdministrableDoseForm(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductPharmaceuticalBuilder extends DomainResourceBuilder<MedicinalProductPharmaceutical, IMedicinalProductPharmaceutical> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set administrableDoseForm
   * The administrable dose form, after necessary reconstitution
   */
  setAdministrableDoseForm(administrableDoseForm: ICodeableConcept): this {
    this.data.administrableDoseForm = administrableDoseForm;
    return this;
  }

  /**
   * Set unitOfPresentation
   * Todo
   */
  setUnitOfPresentation(unitOfPresentation: ICodeableConcept): this {
    this.data.unitOfPresentation = unitOfPresentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier for the pharmaceutical medicinal product
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add ingredient
   * Ingredient
   */
  addIngredient(ingredient: IReference<'MedicinalProductIngredient'>): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add device
   * Accompanying device
   */
  addDevice(device: IReference<'DeviceDefinition'>): this {
    return this.addToArray('device', device);
  }

  /**
   * Add characteristics
   * Characteristics e.g. a products onset of action
   */
  addCharacteristics(characteristic: IMedicinalProductPharmaceuticalCharacteristics): this {
    return this.addToArray('characteristics', characteristic);
  }

  /**
   * Add routeOfAdministration
   * The path by which the pharmaceutical product is taken into or makes contact with the body
   */
  addRouteOfAdministration(routeOfAdministration: IMedicinalProductPharmaceuticalRouteOfAdministration): this {
    return this.addToArray('routeOfAdministration', routeOfAdministration);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPharmaceutical instance
   */
  build(): MedicinalProductPharmaceutical {
    return new MedicinalProductPharmaceutical(this.data);
  }

  /**
   * Build and validate the MedicinalProductPharmaceutical instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPharmaceutical> {
    const medicinalProductPharmaceutical = this.build();
    await medicinalProductPharmaceutical.validateOrThrow();
    return medicinalProductPharmaceutical;
  }
}
