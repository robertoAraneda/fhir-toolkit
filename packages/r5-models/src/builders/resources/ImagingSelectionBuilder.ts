import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ImagingSelection } from '../../models/resources/ImagingSelection.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IImagingSelection,
  IImagingSelectionInstance,
  IImagingSelectionPerformer,
  IReference,
  ImagingSelectionStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ImagingSelectionBuilder - Fluent builder for ImagingSelection resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingSelection = new ImagingSelectionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ImagingSelectionBuilder extends DomainResourceBuilder<ImagingSelection, IImagingSelection> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * available | entered-in-error | unknown
   */
  setStatus(status: ImagingSelectionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * Subject of the selected instances
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'Specimen'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set issued
   * Date / Time when this imaging selection was created
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set code
   * Imaging Selection purpose text or code
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set studyUid
   * DICOM Study Instance UID
   */
  setStudyUid(studyUid: string): this {
    this.data.studyUid = studyUid;
    return this;
  }

  /**
   * Set seriesUid
   * DICOM Series Instance UID
   */
  setSeriesUid(seriesUid: string): this {
    this.data.seriesUid = seriesUid;
    return this;
  }

  /**
   * Set seriesNumber
   * DICOM Series Number
   */
  setSeriesNumber(seriesNumber: number): this {
    this.data.seriesNumber = seriesNumber;
    return this;
  }

  /**
   * Set frameOfReferenceUid
   * The Frame of Reference UID for the selected images
   */
  setFrameOfReferenceUid(frameOfReferenceUid: string): this {
    this.data.frameOfReferenceUid = frameOfReferenceUid;
    return this;
  }

  /**
   * Set bodySite
   * Body part examined
   */
  setBodySite(bodySite: ICodeableReference): this {
    this.data.bodySite = bodySite;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for Imaging Selection
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add performer
   * Selector of the instances (human or machine)
   */
  addPerformer(performer: IImagingSelectionPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add basedOn
   * Associated request
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add category
   * Classifies the imaging selection
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add derivedFrom
   * The imaging study from which the imaging selection is derived
   */
  addDerivedFrom(derivedFrom: IReference<'ImagingStudy' | 'DocumentReference'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add endpoint
   * The network service providing retrieval for the images referenced in the imaging selection
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add focus
   * Related resource that is the focus for the imaging selection
   */
  addFocus(focu: IReference<'ImagingSelection'>): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add instance
   * The selected instances
   */
  addInstance(instance: IImagingSelectionInstance): this {
    return this.addToArray('instance', instance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingSelection instance
   */
  build(): ImagingSelection {
    return new ImagingSelection(this.data);
  }

  /**
   * Build and validate the ImagingSelection instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingSelection> {
    const imagingSelection = this.build();
    await imagingSelection.validateOrThrow();
    return imagingSelection;
  }
}
