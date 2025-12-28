import type { ICoding, IDataType, IElement, IReference } from '../../base/index.js';

/**
 * Signature Interface
 * 
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 * 
 *
 * @see https://hl7.org/fhir/R5/signature.html
 */
export interface ISignature extends IDataType {
  /**
   * Indication of the reason the entity signed the object(s)
   */
  type?: ICoding[];

  /**
   * When the signature was created
   */
  when?: string;
  /**
   * Extension for when
   */
  _when?: IElement;

  /**
   * Who signed
   */
  who?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /**
   * The party represented
   */
  onBehalfOf?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /**
   * The technical format of the signed resources
   */
  targetFormat?: string;
  /**
   * Extension for targetFormat
   */
  _targetFormat?: IElement;

  /**
   * The technical format of the signature
   */
  sigFormat?: string;
  /**
   * Extension for sigFormat
   */
  _sigFormat?: IElement;

  /**
   * The actual signature content (XML DigSig. JWS, picture, etc.)
   */
  data?: string;
  /**
   * Extension for data
   */
  _data?: IElement;

}
