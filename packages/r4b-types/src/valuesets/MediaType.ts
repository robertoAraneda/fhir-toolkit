/**
 * Media Type
 * 
 * Codes for high level media categories.
 *
 * @see http://hl7.org/fhir/ValueSet/media-type
 */

export type MediaTypeType = 'image' | 'video' | 'audio';

export enum MediaTypeEnum {
  /** Image */
  Image = 'image',
  /** Video */
  Video = 'video',
  /** Audio */
  Audio = 'audio',
}

export const MediaTypeValues = ['image', 'video', 'audio'] as const;
