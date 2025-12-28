import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * MedicinalProductDefinitionOperation Interface
 * 
 * A manufacturing or administrative process for the medicinal product
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicinalproductdefinitionoperation.html
 */
export interface IMedicinalProductDefinitionOperation extends IBackboneElement {
  /**
   * The type of manufacturing operation e.g. manufacturing itself, re-packaging
   */
  type?: ICodeableReference;

  /**
   * Date range of applicability
   */
  effectiveDate?: IPeriod;

  /**
   * The organization responsible for the particular process, e.g. the manufacturer or importer
   */
  organization?: IReference<'Organization'>[];

  /**
   * Specifies whether this process is considered proprietary or confidential
   */
  confidentialityIndicator?: ICodeableConcept;

}
