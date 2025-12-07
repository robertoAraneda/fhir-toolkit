import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ICompositionAttester } from '../backbones/ICompositionAttester.js';
import type { ICompositionEvent } from '../backbones/ICompositionEvent.js';
import type { ICompositionRelatesTo } from '../backbones/ICompositionRelatesTo.js';
import type { ICompositionSection } from '../backbones/ICompositionSection.js';
import type { CompositionStatusType } from '../../valuesets/index.js';

/**
 * Composition Interface
 * 
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * 
 *
 * @see https://hl7.org/fhir/R4/composition.html
 */
export interface IComposition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Composition';

  /**
   * Version-independent identifier for the Composition
   */
  identifier?: IIdentifier;

  /**
   * preliminary | final | amended | entered-in-error
   */
  status: CompositionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Kind of composition (LOINC if possible)
   */
  type: ICodeableConcept;

  /**
   * Categorization of Composition
   */
  category?: ICodeableConcept[];

  /**
   * Who and/or what the composition is about
   */
  subject?: IReference<'Resource'>;

  /**
   * Context of the Composition
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Composition editing time
   */
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who and/or what authored the composition
   */
  author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>[];

  /**
   * Human Readable name/title
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * As defined by affinity domain
   */
  confidentiality?: string;
  /**
   * Extension for confidentiality
   */
  _confidentiality?: IElement;

  /**
   * Attests to accuracy of composition
   */
  attester?: ICompositionAttester[];

  /**
   * Organization which maintains the composition
   */
  custodian?: IReference<'Organization'>;

  /**
   * Relationships to other compositions/documents
   */
  relatesTo?: ICompositionRelatesTo[];

  /**
   * The clinical service(s) being documented
   */
  event?: ICompositionEvent[];

  /**
   * Composition is broken into sections
   */
  section?: ICompositionSection[];

}
