/**
 * Media Modality
 * 
 * Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.
 *
 * @see http://hl7.org/fhir/ValueSet/media-modality
 */

export type MediaModalityType = 'diagram' | 'fax' | 'scan' | 'retina' | 'fingerprint' | 'iris' | 'palm' | 'face';

export enum MediaModalityEnum {
  /** Diagram */
  Diagram = 'diagram',
  /** Fax */
  Fax = 'fax',
  /** Scanned Document */
  Scan = 'scan',
  /** Retina Scan */
  Retina = 'retina',
  /** Fingerprint */
  Fingerprint = 'fingerprint',
  /** Iris Scan */
  Iris = 'iris',
  /** Palm Scan */
  Palm = 'palm',
  /** Face Scan */
  Face = 'face',
}

export const MediaModalityValues = ['diagram', 'fax', 'scan', 'retina', 'fingerprint', 'iris', 'palm', 'face'] as const;
