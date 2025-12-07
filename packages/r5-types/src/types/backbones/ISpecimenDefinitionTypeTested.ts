import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { ISpecimenDefinitionTypeTestedContainer } from './ISpecimenDefinitionTypeTestedContainer.js';
import type { ISpecimenDefinitionTypeTestedHandling } from './ISpecimenDefinitionTypeTestedHandling.js';
import type { SpecimenContainedPreferenceType } from '../../valuesets/index.js';

/**
 * SpecimenDefinitionTypeTested Interface
 * 
 * Specimen in container intended for testing by lab
 * 
 *
 * @see https://hl7.org/fhir/R4/specimendefinitiontypetested.html
 */
export interface ISpecimenDefinitionTypeTested extends IBackboneElement {
  /**
   * Primary or secondary specimen
   */
  isDerived?: boolean;
  /**
   * Extension for isDerived
   */
  _isDerived?: IElement;

  /**
   * Type of intended specimen
   */
  type?: ICodeableConcept;

  /**
   * preferred | alternate
   */
  preference: SpecimenContainedPreferenceType;
  /**
   * Extension for preference
   */
  _preference?: IElement;

  /**
   * The specimen's container
   */
  container?: ISpecimenDefinitionTypeTestedContainer;

  /**
   * Requirements for specimen delivery and special handling
   */
  requirement?: string;
  /**
   * Extension for requirement
   */
  _requirement?: IElement;

  /**
   * The usual time for retaining this kind of specimen
   */
  retentionTime?: IDuration;

  /**
   * Specimen for single use only
   */
  singleUse?: boolean;
  /**
   * Extension for singleUse
   */
  _singleUse?: IElement;

  /**
   * Criterion specified for specimen rejection
   */
  rejectionCriterion?: ICodeableConcept[];

  /**
   * Specimen handling before testing
   */
  handling?: ISpecimenDefinitionTypeTestedHandling[];

  /**
   * Where the specimen will be tested
   */
  testingDestination?: ICodeableConcept[];

}
