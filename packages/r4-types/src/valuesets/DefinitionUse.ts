/**
 * Structure Definition Use Codes / Keywords
 * 
 * Structure Definition Use Codes / Keywords
 *
 * @see http://hl7.org/fhir/ValueSet/definition-use
 */

export type DefinitionUseType = 'fhir-structure' | 'custom-resource' | 'dam' | 'wire-format' | 'archetype' | 'template';

export enum DefinitionUseEnum {
  /** FHIR Structure */
  FhirStructure = 'fhir-structure',
  /** Custom Resource */
  CustomResource = 'custom-resource',
  /** Domain Analysis Model */
  Dam = 'dam',
  /** Wire Format */
  WireFormat = 'wire-format',
  /** Domain Analysis Model */
  Archetype = 'archetype',
  /** Template */
  Template = 'template',
}

export const DefinitionUseValues = ['fhir-structure', 'custom-resource', 'dam', 'wire-format', 'archetype', 'template'] as const;
