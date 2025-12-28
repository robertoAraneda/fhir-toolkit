import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ActionParticipantTypeType } from '../../valuesets/index.js';

/**
 * ActivityDefinitionParticipant Interface
 * 
 * Who should participate in the action
 * 
 *
 * @see https://hl7.org/fhir/R5/activitydefinitionparticipant.html
 */
export interface IActivityDefinitionParticipant extends IBackboneElement {
  /**
   * careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
   */
  type?: ActionParticipantTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Who or what can participate
   */
  typeCanonical?: string;
  /**
   * Extension for typeCanonical
   */
  _typeCanonical?: IElement;

  /**
   * Who or what can participate
   */
  typeReference?: IReference<'CareTeam' | 'Device' | 'DeviceDefinition' | 'Endpoint' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * E.g. Nurse, Surgeon, Parent, etc
   */
  role?: ICodeableConcept;

  /**
   * E.g. Author, Reviewer, Witness, etc
   */
  function?: ICodeableConcept;

}
