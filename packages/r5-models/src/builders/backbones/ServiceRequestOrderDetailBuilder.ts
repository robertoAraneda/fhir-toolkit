import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ServiceRequestOrderDetail } from '../../models/backbones/ServiceRequestOrderDetail.js';
import type {
  ICodeableReference,
  IServiceRequestOrderDetail,
  IServiceRequestOrderDetailParameter,
} from '@fhir-toolkit/r5-types';

/**
 * ServiceRequestOrderDetailBuilder - Fluent builder for ServiceRequestOrderDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const serviceRequestOrderDetail = new ServiceRequestOrderDetailBuilder()
 *   .setParameterFocus(value)
 *   .addParameter({ ... })
 *   .build();
 */
export class ServiceRequestOrderDetailBuilder extends BackboneElementBuilder<ServiceRequestOrderDetail, IServiceRequestOrderDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set parameterFocus
   * The context of the order details by reference
   */
  setParameterFocus(parameterFocus: ICodeableReference): this {
    this.data.parameterFocus = parameterFocus;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parameter
   * The parameter details for the service being requested
   */
  addParameter(parameter: IServiceRequestOrderDetailParameter): this {
    return this.addToArray('parameter', parameter);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ServiceRequestOrderDetail instance
   */
  build(): ServiceRequestOrderDetail {
    return new ServiceRequestOrderDetail(this.data);
  }

  /**
   * Build and validate the ServiceRequestOrderDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ServiceRequestOrderDetail> {
    const serviceRequestOrderDetail = this.build();
    await serviceRequestOrderDetail.validateOrThrow();
    return serviceRequestOrderDetail;
  }
}
