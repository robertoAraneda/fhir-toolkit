import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICompositionAttester } from '../backbones/ICompositionAttester.js';
import type { ICompositionEvent } from '../backbones/ICompositionEvent.js';
import type { ICompositionSection } from '../backbones/ICompositionSection.js';
import type { CompositionStatusType } from '../../valuesets/index.js';

/**
 * Composition Interface
 * 
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 * 
 *
 * @see https://hl7.org/fhir/R5/composition.html
 */
export interface IComposition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Composition';

  /**
   * Canonical identifier for this Composition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Version-independent identifier for the Composition
   */
  identifier?: IIdentifier[];

  /**
   * An explicitly assigned identifer of a variation of the content in the Composition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
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
  subject?: IReference<'Resource'>[];

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
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Who and/or what authored the composition
   */
  author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>[];

  /**
   * Name for this Composition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Human Readable name/title
   */
  title: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * For any additional notes
   */
  note?: IAnnotation[];

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
  relatesTo?: IRelatedArtifact[];

  /**
   * The clinical service(s) being documented
   */
  event?: ICompositionEvent[];

  /**
   * Composition is broken into sections
   */
  section?: ICompositionSection[];

}
