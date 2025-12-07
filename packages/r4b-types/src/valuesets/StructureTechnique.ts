/**
 * StructureTechnique
 * 
 * The method used to elucidate the structure or characterization of the drug substance.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-structure-technique
 */

export type StructureTechniqueType = 'X-Ray' | 'HPLC' | 'NMR' | 'PeptideMapping' | 'LigandBindingAssay';

export enum StructureTechniqueEnum {
  /** X-ray */
  XRay = 'X-Ray',
  /** HPLC */
  Hplc = 'HPLC',
  /** NMR */
  Nmr = 'NMR',
  /** Peptide mapping */
  Peptidemapping = 'PeptideMapping',
  /** Ligand binding assay */
  Ligandbindingassay = 'LigandBindingAssay',
}

export const StructureTechniqueValues = ['X-Ray', 'HPLC', 'NMR', 'PeptideMapping', 'LigandBindingAssay'] as const;
