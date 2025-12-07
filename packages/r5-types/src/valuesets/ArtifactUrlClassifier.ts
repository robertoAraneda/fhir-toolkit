/**
 * Artifact Url Classifier
 * 
 * Code the reason for different URLs, eg abstract and full-text.
 *
 * @see http://hl7.org/fhir/ValueSet/artifact-url-classifier
 */

export type ArtifactUrlClassifierType = 'abstract' | 'full-text' | 'supplement' | 'webpage' | 'file-directory' | 'code-repository' | 'restricted' | 'compressed-file' | 'doi-based' | 'pdf' | 'json' | 'xml' | 'version-specific' | 'computable-resource' | 'not-specified';

export enum ArtifactUrlClassifierEnum {
  /** Abstract */
  Abstract = 'abstract',
  /** Full-Text */
  FullText = 'full-text',
  /** Supplement */
  Supplement = 'supplement',
  /** Webpage */
  Webpage = 'webpage',
  /** File directory */
  FileDirectory = 'file-directory',
  /** Code repository */
  CodeRepository = 'code-repository',
  /** Restricted */
  Restricted = 'restricted',
  /** Compressed file */
  CompressedFile = 'compressed-file',
  /** DOI Based */
  DoiBased = 'doi-based',
  /** PDF */
  Pdf = 'pdf',
  /** JSON */
  Json = 'json',
  /** XML */
  Xml = 'xml',
  /** Version Specific */
  VersionSpecific = 'version-specific',
  /** Computable resource */
  ComputableResource = 'computable-resource',
  /** Not Specified */
  NotSpecified = 'not-specified',
}

export const ArtifactUrlClassifierValues = ['abstract', 'full-text', 'supplement', 'webpage', 'file-directory', 'code-repository', 'restricted', 'compressed-file', 'doi-based', 'pdf', 'json', 'xml', 'version-specific', 'computable-resource', 'not-specified'] as const;
