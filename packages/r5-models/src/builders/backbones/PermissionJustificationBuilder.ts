import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PermissionJustification } from '../../models/backbones/PermissionJustification.js';
import type {
  ICodeableConcept,
  IPermissionJustification,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionJustificationBuilder - Fluent builder for PermissionJustification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const permissionJustification = new PermissionJustificationBuilder()
 *   .addBasis({ ... })
 *   .build();
 */
export class PermissionJustificationBuilder extends BackboneElementBuilder<PermissionJustification, IPermissionJustification> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add basis
   * The regulatory grounds upon which this Permission builds
   */
  addBasis(basi: ICodeableConcept): this {
    return this.addToArray('basis', basi);
  }

  /**
   * Add evidence
   * Justifing rational
   */
  addEvidence(evidence: IReference<'Resource'>): this {
    return this.addToArray('evidence', evidence);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PermissionJustification instance
   */
  build(): PermissionJustification {
    return new PermissionJustification(this.data);
  }

  /**
   * Build and validate the PermissionJustification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PermissionJustification> {
    const permissionJustification = this.build();
    await permissionJustification.validateOrThrow();
    return permissionJustification;
  }
}
