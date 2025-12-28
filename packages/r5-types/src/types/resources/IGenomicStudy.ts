import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IGenomicStudyAnalysis } from '../backbones/IGenomicStudyAnalysis.js';
import type { GenomicStudyStatusType } from '../../valuesets/index.js';

/**
 * GenomicStudy Interface
 * 
 * A GenomicStudy is a set of analyses performed to analyze and generate genomic data.
 * 
 *
 * @see https://hl7.org/fhir/R5/genomicstudy.html
 */
export interface IGenomicStudy extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'GenomicStudy';

  /**
   * Identifiers for this genomic study
   */
  identifier?: IIdentifier[];

  /**
   * registered | available | cancelled | entered-in-error | unknown
   */
  status: GenomicStudyStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling)
   */
  type?: ICodeableConcept[];

  /**
   * The primary subject of the genomic study
   */
  subject: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /**
   * The healthcare event with which this genomics study is associated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the genomic study was started
   */
  startDate?: string;
  /**
   * Extension for startDate
   */
  _startDate?: IElement;

  /**
   * Event resources that the genomic study is based on
   */
  basedOn?: IReference<'ServiceRequest' | 'Task'>[];

  /**
   * Healthcare professional who requested or referred the genomic study
   */
  referrer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Healthcare professionals who interpreted the genomic study
   */
  interpreter?: IReference<'Practitioner' | 'PractitionerRole'>[];

  /**
   * Why the genomic study was performed
   */
  reason?: ICodeableReference[];

  /**
   * The defined protocol that describes the study
   */
  instantiatesCanonical?: string;
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * The URL pointing to an externally maintained protocol that describes the study
   */
  instantiatesUri?: string;
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Comments related to the genomic study
   */
  note?: IAnnotation[];

  /**
   * Description of the genomic study
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Genomic Analysis Event
   */
  analysis?: IGenomicStudyAnalysis[];

}
