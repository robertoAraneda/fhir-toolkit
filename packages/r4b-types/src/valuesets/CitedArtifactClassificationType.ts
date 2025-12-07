/**
 * CitedArtifactClassificationType
 * 
 * Cited Artifact Classification Type
 *
 * @see http://hl7.org/fhir/ValueSet/cited-artifact-classification-type
 */

export type CitedArtifactClassificationTypeType = 'publication-type' | 'mesh-heading' | 'supplemental-mesh-protocol' | 'supplemental-mesh-disease' | 'supplemental-mesh-organism' | 'keyword' | 'citation-subset' | 'chemical' | 'publishing-model' | 'knowledge-artifact-type' | 'coverage';

export enum CitedArtifactClassificationTypeEnum {
  /** Publication type */
  PublicationType = 'publication-type',
  /** MeSH heading */
  MeshHeading = 'mesh-heading',
  /** Supplemental MeSH for Protocol */
  SupplementalMeshProtocol = 'supplemental-mesh-protocol',
  /** Supplemental MeSH for Disease */
  SupplementalMeshDisease = 'supplemental-mesh-disease',
  /** Supplemental MeSH for Organism */
  SupplementalMeshOrganism = 'supplemental-mesh-organism',
  /** Keyword */
  Keyword = 'keyword',
  /** Citation subset */
  CitationSubset = 'citation-subset',
  /** Chemical */
  Chemical = 'chemical',
  /** Publishing Model */
  PublishingModel = 'publishing-model',
  /** Knowledge Artifact Type */
  KnowledgeArtifactType = 'knowledge-artifact-type',
  /** Coverage */
  Coverage = 'coverage',
}

export const CitedArtifactClassificationTypeValues = ['publication-type', 'mesh-heading', 'supplemental-mesh-protocol', 'supplemental-mesh-disease', 'supplemental-mesh-organism', 'keyword', 'citation-subset', 'chemical', 'publishing-model', 'knowledge-artifact-type', 'coverage'] as const;
