import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedia,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Media */
const MEDIA_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'type',
  'modality',
  'view',
  'subject',
  'encounter',
  'createdDateTime',
  '_createdDateTime',
  'createdPeriod',
  'issued',
  '_issued',
  'operator',
  'reasonCode',
  'bodySite',
  'deviceName',
  '_deviceName',
  'device',
  'height',
  '_height',
  'width',
  '_width',
  'frames',
  '_frames',
  'duration',
  '_duration',
  'content',
  'note',
] as const;

/**
 * Media - A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 *
 * @see https://hl7.org/fhir/R4/media.html
 *
 * @example
 * const media = new Media({
 *   // ... properties
 * });
 */
export class Media extends DomainResource implements IMedia {
  readonly resourceType = 'Media' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier(s) for the image */
  identifier?: IIdentifier[];

  /** Procedure that caused this media to be created */
  basedOn?: IReference<'ServiceRequest' | 'CarePlan'>[];

  /** Part of referenced event */
  partOf?: IReference<'Resource'>[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
  status: EventStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Classification of media as image, video, or audio */
  type?: ICodeableConcept;

  /** The type of acquisition equipment/process */
  modality?: ICodeableConcept;

  /** Imaging view, e.g. Lateral or Antero-posterior */
  view?: ICodeableConcept;

  /** Who/What this Media is a record of */
  subject?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Group' | 'Device' | 'Specimen' | 'Location'>;

  /** Encounter associated with media */
  encounter?: IReference<'Encounter'>;

  /** When Media was collected */
  createdDateTime?: string;

  /** Extension for createdDateTime */
  _createdDateTime?: IElement;

  /** When Media was collected */
  createdPeriod?: IPeriod;

  /** Date/Time this version was made available */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** The person who generated the image */
  operator?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /** Why was event performed? */
  reasonCode?: ICodeableConcept[];

  /** Observed body part */
  bodySite?: ICodeableConcept;

  /** Name of the device/manufacturer */
  deviceName?: string;

  /** Extension for deviceName */
  _deviceName?: IElement;

  /** Observing Device */
  device?: IReference<'Device' | 'DeviceMetric' | 'Device'>;

  /** Height of the image in pixels (photo/video) */
  height?: number;

  /** Extension for height */
  _height?: IElement;

  /** Width of the image in pixels (photo/video) */
  width?: number;

  /** Extension for width */
  _width?: IElement;

  /** Number of frames if > 1 (photo) */
  frames?: number;

  /** Extension for frames */
  _frames?: IElement;

  /** Length in seconds (audio / video) */
  duration?: number;

  /** Extension for duration */
  _duration?: IElement;

  /** Actual Media - reference or data */
  content: IAttachment;

  /** Comments made about the media */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedia>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDIA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Media from a JSON object
   */
  static fromJSON(json: IMedia): Media {
    return new Media(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Media with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedia>): Media {
    return new Media({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Media by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedia) => Partial<IMedia>): Media {
    const currentData = this.toJSON();
    return new Media({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedia)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedia {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDIA_PROPERTIES);
    return result as IMedia;
  }

  /**
   * Create a deep clone of this Media
   */
  clone(): Media {
    return new Media(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Media
   */
  toString(): string {
    const parts: string[] = ['Media'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
