import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Media } from '../../models/resources/Media.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EventStatusType,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IIdentifier,
  IMedia,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MediaBuilder - Fluent builder for Media resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const media = new MediaBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MediaBuilder extends DomainResourceBuilder<Media, IMedia> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  setStatus(status: EventStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * Classification of media as image, video, or audio
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set modality
   * The type of acquisition equipment/process
   */
  setModality(modality: ICodeableConcept): this {
    this.data.modality = modality;
    return this;
  }

  /**
   * Set view
   * Imaging view, e.g. Lateral or Antero-posterior
   */
  setView(view: ICodeableConcept): this {
    this.data.view = view;
    return this;
  }

  /**
   * Set subject
   * Who/What this Media is a record of
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Group' | 'Device' | 'Specimen' | 'Location'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with media
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set issued
   * Date/Time this version was made available
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set operator
   * The person who generated the image
   */
  setOperator(operator: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.operator = operator;
    return this;
  }

  /**
   * Set bodySite
   * Observed body part
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  /**
   * Set deviceName
   * Name of the device/manufacturer
   */
  setDeviceName(deviceName: string): this {
    this.data.deviceName = deviceName;
    return this;
  }

  /**
   * Set device
   * Observing Device
   */
  setDevice(device: IReference<'Device' | 'DeviceMetric' | 'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set height
   * Height of the image in pixels (photo/video)
   */
  setHeight(height: number): this {
    this.data.height = height;
    return this;
  }

  /**
   * Set width
   * Width of the image in pixels (photo/video)
   */
  setWidth(width: number): this {
    this.data.width = width;
    return this;
  }

  /**
   * Set frames
   * Number of frames if > 1 (photo)
   */
  setFrames(frames: number): this {
    this.data.frames = frames;
    return this;
  }

  /**
   * Set duration
   * Length in seconds (audio / video)
   */
  setDuration(duration: number): this {
    this.data.duration = duration;
    return this;
  }

  /**
   * Set content
   * Actual Media - reference or data
   */
  setContent(content: IAttachment): this {
    this.data.content = content;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set created choice type (createdDateTime, createdPeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCreated('DateTime', value)
   */
  setCreated<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `created${type}` as keyof IMedia;
    const otherKeys: (keyof IMedia)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('createdDateTime' as keyof IMedia);
      otherKeys.push('_createdDateTime' as keyof IMedia);
    }
    if (type !== 'Period') {
      otherKeys.push('createdPeriod' as keyof IMedia);
      otherKeys.push('_createdPeriod' as keyof IMedia);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier(s) for the image
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Procedure that caused this media to be created
   */
  addBasedOn(basedOn: IReference<'ServiceRequest' | 'CarePlan'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'Resource'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add reasonCode
   * Why was event performed?
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add note
   * Comments made about the media
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Media instance
   */
  build(): Media {
    return new Media(this.data);
  }

  /**
   * Build and validate the Media instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Media> {
    const media = this.build();
    await media.validateOrThrow();
    return media;
  }
}
