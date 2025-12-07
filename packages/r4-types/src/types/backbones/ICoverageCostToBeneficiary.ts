import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ICoverageCostToBeneficiaryException } from './ICoverageCostToBeneficiaryException.js';

/**
 * CoverageCostToBeneficiary Interface
 * 
 * Patient payments for services/products
 * 
 *
 * @see https://hl7.org/fhir/R4/coveragecosttobeneficiary.html
 */
export interface ICoverageCostToBeneficiary extends IBackboneElement {
  /**
   * Cost category
   */
  type?: ICodeableConcept;

  /**
   * The amount or percentage due from the beneficiary
   */
  valueQuantity?: IQuantity;

  /**
   * The amount or percentage due from the beneficiary
   */
  valueMoney?: IMoney;

  /**
   * Exceptions for patient payments
   */
  exception?: ICoverageCostToBeneficiaryException[];

}
