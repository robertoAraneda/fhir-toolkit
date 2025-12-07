/**
 * KnowledgeResourceType
 * 
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 *
 * @see http://hl7.org/fhir/ValueSet/knowledge-resource-types
 */

export type KnowledgeResourceTypeType = 'ActivityDefinition' | 'CodeSystem' | 'ConceptMap' | 'Library' | 'Measure' | 'PlanDefinition' | 'StructureDefinition' | 'StructureMap' | 'ValueSet';

export enum KnowledgeResourceTypeEnum {
  /** ActivityDefinition */
  Activitydefinition = 'ActivityDefinition',
  /** CodeSystem */
  Codesystem = 'CodeSystem',
  /** ConceptMap */
  Conceptmap = 'ConceptMap',
  /** Library */
  Library = 'Library',
  /** Measure */
  Measure = 'Measure',
  /** PlanDefinition */
  Plandefinition = 'PlanDefinition',
  /** StructureDefinition */
  Structuredefinition = 'StructureDefinition',
  /** StructureMap */
  Structuremap = 'StructureMap',
  /** ValueSet */
  Valueset = 'ValueSet',
}

export const KnowledgeResourceTypeValues = ['ActivityDefinition', 'CodeSystem', 'ConceptMap', 'Library', 'Measure', 'PlanDefinition', 'StructureDefinition', 'StructureMap', 'ValueSet'] as const;
