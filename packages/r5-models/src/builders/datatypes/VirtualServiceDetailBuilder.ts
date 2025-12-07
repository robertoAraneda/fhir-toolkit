import { ElementBuilder } from '../base/ElementBuilder.js';
import { VirtualServiceDetail } from '../../models/datatypes/VirtualServiceDetail.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IContactPoint,
  IExtendedContactDetail,
  IVirtualServiceDetail,
} from '@fhir-toolkit/r5-types';

/**
 * VirtualServiceDetailBuilder - Fluent builder for VirtualServiceDetail datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const virtualServiceDetail = new VirtualServiceDetailBuilder()
 *   .setChannelType(value)
 *   .addAdditionalInfo({ ... })
 *   .build();
 */
export class VirtualServiceDetailBuilder extends ElementBuilder<VirtualServiceDetail, IVirtualServiceDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set channelType
   * Channel Type
   */
  setChannelType(channelType: ICoding): this {
    this.data.channelType = channelType;
    return this;
  }

  /**
   * Set maxParticipants
   * Maximum number of participants supported by the virtual service
   */
  setMaxParticipants(maxParticipants: number): this {
    this.data.maxParticipants = maxParticipants;
    return this;
  }

  /**
   * Set sessionKey
   * Session Key required by the virtual service
   */
  setSessionKey(sessionKey: string): this {
    this.data.sessionKey = sessionKey;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set address choice type (addressUrl, addressString, addressContactPoint, addressExtendedContactDetail)
   * @param type - 'Url' | 'String' | 'ContactPoint' | 'ExtendedContactDetail'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAddress('Url', value)
   */
  setAddress<T extends 'Url' | 'String' | 'ContactPoint' | 'ExtendedContactDetail'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `address${type}` as keyof IVirtualServiceDetail;
    const otherKeys: (keyof IVirtualServiceDetail)[] = [];
    if (type !== 'Url') {
      otherKeys.push('addressUrl' as keyof IVirtualServiceDetail);
      otherKeys.push('_addressUrl' as keyof IVirtualServiceDetail);
    }
    if (type !== 'String') {
      otherKeys.push('addressString' as keyof IVirtualServiceDetail);
      otherKeys.push('_addressString' as keyof IVirtualServiceDetail);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('addressContactPoint' as keyof IVirtualServiceDetail);
      otherKeys.push('_addressContactPoint' as keyof IVirtualServiceDetail);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('addressExtendedContactDetail' as keyof IVirtualServiceDetail);
      otherKeys.push('_addressExtendedContactDetail' as keyof IVirtualServiceDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additionalInfo
   * Address to see alternative connection details
   */
  addAdditionalInfo(additionalInfo: string): this {
    return this.addToArray('additionalInfo', additionalInfo);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VirtualServiceDetail instance
   */
  build(): VirtualServiceDetail {
    return new VirtualServiceDetail(this.data);
  }

  /**
   * Build and validate the VirtualServiceDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VirtualServiceDetail> {
    const virtualServiceDetail = this.build();
    await virtualServiceDetail.validateOrThrow();
    return virtualServiceDetail;
  }
}
