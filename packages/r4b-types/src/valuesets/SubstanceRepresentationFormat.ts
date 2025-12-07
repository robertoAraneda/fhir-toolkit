/**
 * SubstanceRepresentationFormat
 * 
 * A format of a substance representation.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-representation-format
 */

export type SubstanceRepresentationFormatType = 'InChI' | 'SMILES' | 'MOLFILE' | 'CDX' | 'SDF' | 'PDB' | 'mmCIF';

export enum SubstanceRepresentationFormatEnum {
  /** InChI */
  Inchi = 'InChI',
  /** SMILES */
  Smiles = 'SMILES',
  /** MOLFILE */
  Molfile = 'MOLFILE',
  /** CDX */
  Cdx = 'CDX',
  /** SDF */
  Sdf = 'SDF',
  /** PDB */
  Pdb = 'PDB',
  /** mmCIF */
  Mmcif = 'mmCIF',
}

export const SubstanceRepresentationFormatValues = ['InChI', 'SMILES', 'MOLFILE', 'CDX', 'SDF', 'PDB', 'mmCIF'] as const;
