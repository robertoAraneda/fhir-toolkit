import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMolecularSequenceRelative } from '../backbones/IMolecularSequenceRelative.js';
import type { SequenceTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequence Interface
 * 
 * Representation of a molecular sequence.
 * 
 *
 * @see https://hl7.org/fhir/R5/molecularsequence.html
 */
export interface IMolecularSequence extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MolecularSequence';

  /**
   * Unique ID for this particular sequence
   */
  identifier?: IIdentifier[];

  /**
   * aa | dna | rna
   */
  type?: SequenceTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Subject this sequence is associated too
   */
  subject?: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /**
   * What the molecular sequence is about, when it is not about the subject of record
   */
  focus?: IReference<'Resource'>[];

  /**
   * Specimen used for sequencing
   */
  specimen?: IReference<'Specimen'>;

  /**
   * The method for sequencing
   */
  device?: IReference<'Device'>;

  /**
   * Who should be responsible for test result
   */
  performer?: IReference<'Organization'>;

  /**
   * Sequence that was observed
   */
  literal?: string;
  /**
   * Extension for literal
   */
  _literal?: IElement;

  /**
   * Embedded file or a link (URL) which contains content to represent the sequence
   */
  formatted?: IAttachment[];

  /**
   * A sequence defined relative to another sequence
   */
  relative?: IMolecularSequenceRelative[];

}
