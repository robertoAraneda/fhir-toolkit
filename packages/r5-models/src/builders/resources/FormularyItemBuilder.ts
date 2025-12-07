import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { FormularyItem } from '../../models/resources/FormularyItem.js';
import type {
  FormularyItemStatusType,
  ICodeableConcept,
  IFormularyItem,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * FormularyItemBuilder - Fluent builder for FormularyItem resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const formularyItem = new FormularyItemBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class FormularyItemBuilder extends DomainResourceBuilder<FormularyItem, IFormularyItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Codes that identify this formulary item
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * active | entered-in-error | inactive
   */
  setStatus(status: FormularyItemStatusType): this {
    this.data.status = status;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this formulary item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the FormularyItem instance
   */
  build(): FormularyItem {
    return new FormularyItem(this.data);
  }

  /**
   * Build and validate the FormularyItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<FormularyItem> {
    const formularyItem = this.build();
    await formularyItem.validateOrThrow();
    return formularyItem;
  }
}
