import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISpecimenDefinitionTypeTested } from '../backbones/ISpecimenDefinitionTypeTested.js';

/**
 * SpecimenDefinition Interface
 * 
 * A kind of specimen with associated set of requirements.
 * 
 *
 * @see https://hl7.org/fhir/R4B/specimendefinition.html
 */
export interface ISpecimenDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SpecimenDefinition';

  /**
   * Business identifier of a kind of specimen
   */
  identifier?: IIdentifier;

  /**
   * Kind of material to collect
   */
  typeCollected?: ICodeableConcept;

  /**
   * Patient preparation for collection
   */
  patientPreparation?: ICodeableConcept[];

  /**
   * Time aspect for collection
   */
  timeAspect?: string;
  /**
   * Extension for timeAspect
   */
  _timeAspect?: IElement;

  /**
   * Specimen collection procedure
   */
  collection?: ICodeableConcept[];

  /**
   * Specimen in container intended for testing by lab
   */
  typeTested?: ISpecimenDefinitionTypeTested[];

}
