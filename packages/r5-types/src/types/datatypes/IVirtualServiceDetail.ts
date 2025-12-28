import type { ICoding, IDataType, IElement } from '../../base/index.js';
import type { IContactPoint } from './IContactPoint.js';
import type { IExtendedContactDetail } from './IExtendedContactDetail.js';

/**
 * VirtualServiceDetail Interface
 * 
 * Virtual Service Contact Details.
 * 
 *
 * @see https://hl7.org/fhir/R5/virtualservicedetail.html
 */
export interface IVirtualServiceDetail extends IDataType {
  /**
   * Channel Type
   */
  channelType?: ICoding;

  /**
   * Contact address/number
   */
  addressUrl?: string;
  /**
   * Extension for addressUrl
   */
  _addressUrl?: IElement;

  /**
   * Contact address/number
   */
  addressString?: string;
  /**
   * Extension for addressString
   */
  _addressString?: IElement;

  /**
   * Contact address/number
   */
  addressContactPoint?: IContactPoint;

  /**
   * Contact address/number
   */
  addressExtendedContactDetail?: IExtendedContactDetail;

  /**
   * Address to see alternative connection details
   */
  additionalInfo?: string[];
  /**
   * Extension for additionalInfo
   */
  _additionalInfo?: IElement;

  /**
   * Maximum number of participants supported by the virtual service
   */
  maxParticipants?: number;
  /**
   * Extension for maxParticipants
   */
  _maxParticipants?: IElement;

  /**
   * Session Key required by the virtual service
   */
  sessionKey?: string;
  /**
   * Extension for sessionKey
   */
  _sessionKey?: IElement;

}
