import type { IBackboneElement, ICoding, IReference } from '../../base/index.js';
import type { ISignature } from '../datatypes/ISignature.js';

/**
 * ContractSigner Interface
 * 
 * Contract Signatory
 * 
 *
 * @see https://hl7.org/fhir/R5/contractsigner.html
 */
export interface IContractSigner extends IBackboneElement {
  /**
   * Contract Signatory Role
   */
  type: ICoding;

  /**
   * Contract Signatory Party
   */
  party: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Contract Documentation Signature
   */
  signature: ISignature[];

}
