import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ConformanceExpectationType } from '../../valuesets/index.js';

/**
 * RequirementsStatement Interface
 * 
 * Actual statement as markdown
 * 
 *
 * @see https://hl7.org/fhir/R4/requirementsstatement.html
 */
export interface IRequirementsStatement extends IBackboneElement {
  /**
   * Key that identifies this statement
   */
  key: string;
  /**
   * Extension for key
   */
  _key?: IElement;

  /**
   * Short Human label for this statement
   */
  label?: string;
  /**
   * Extension for label
   */
  _label?: IElement;

  /**
   * SHALL | SHOULD | MAY | SHOULD-NOT
   */
  conformance?: ConformanceExpectationType[];
  /**
   * Extension for conformance
   */
  _conformance?: IElement;

  /**
   * Set to true if requirements statement is conditional
   */
  conditionality?: boolean;
  /**
   * Extension for conditionality
   */
  _conditionality?: IElement;

  /**
   * The actual requirement
   */
  requirement: string;
  /**
   * Extension for requirement
   */
  _requirement?: IElement;

  /**
   * Another statement this clarifies/restricts ([url#]key)
   */
  derivedFrom?: string;
  /**
   * Extension for derivedFrom
   */
  _derivedFrom?: IElement;

  /**
   * A larger requirement that this requirement helps to refine and enable
   */
  parent?: string;
  /**
   * Extension for parent
   */
  _parent?: IElement;

  /**
   * Design artifact that satisfies this requirement
   */
  satisfiedBy?: string[];
  /**
   * Extension for satisfiedBy
   */
  _satisfiedBy?: IElement;

  /**
   * External artifact (rule/document etc. that) created this requirement
   */
  reference?: string[];
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * Who asked for this statement
   */
  source?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>[];

}
