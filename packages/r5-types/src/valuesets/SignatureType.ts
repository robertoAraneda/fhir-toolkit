/**
 * Signature Type Codes
 * 
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 *
 * @see http://hl7.org/fhir/ValueSet/signature-type
 */

export type SignatureTypeType = 'ProofOfOrigin' | 'ProofOfReceipt' | 'ProofOfDelivery' | 'ProofOfSender' | 'ProofOfapproval' | 'ProofOfCreation' | '1.2.840.10065.1.12.1.1' | '1.2.840.10065.1.12.1.2' | '1.2.840.10065.1.12.1.3' | '1.2.840.10065.1.12.1.4' | '1.2.840.10065.1.12.1.5' | '1.2.840.10065.1.12.1.6' | '1.2.840.10065.1.12.1.7' | '1.2.840.10065.1.12.1.8' | '1.2.840.10065.1.12.1.9' | '1.2.840.10065.1.12.1.10' | '1.2.840.10065.1.12.1.11' | '1.2.840.10065.1.12.1.12' | '1.2.840.10065.1.12.1.13' | '1.2.840.10065.1.12.1.14' | '1.2.840.10065.1.12.1.15' | '1.2.840.10065.1.12.1.16' | '1.2.840.10065.1.12.1.17' | '1.2.840.10065.1.12.1.18';

export enum SignatureTypeEnum {
  /** Proof of origin */
  Proofoforigin = 'ProofOfOrigin',
  /** Proof of receipt */
  Proofofreceipt = 'ProofOfReceipt',
  /** Proof of delivery */
  Proofofdelivery = 'ProofOfDelivery',
  /** Proof of sender */
  Proofofsender = 'ProofOfSender',
  /** Proof of approval */
  Proofofapproval = 'ProofOfapproval',
  /** Proof of creation */
  Proofofcreation = 'ProofOfCreation',
  /** Author's Signature */
  _128401006511211 = '1.2.840.10065.1.12.1.1',
  /** Coauthor's Signature */
  _128401006511212 = '1.2.840.10065.1.12.1.2',
  /** Co-participant's Signature */
  _128401006511213 = '1.2.840.10065.1.12.1.3',
  /** Transcriptionist/Recorder Signature */
  _128401006511214 = '1.2.840.10065.1.12.1.4',
  /** Verification Signature */
  _128401006511215 = '1.2.840.10065.1.12.1.5',
  /** Validation Signature */
  _128401006511216 = '1.2.840.10065.1.12.1.6',
  /** Consent Signature */
  _128401006511217 = '1.2.840.10065.1.12.1.7',
  /** Signature Witness Signature */
  _128401006511218 = '1.2.840.10065.1.12.1.8',
  /** Event Witness Signature */
  _128401006511219 = '1.2.840.10065.1.12.1.9',
  /** Identity Witness Signature */
  _1284010065112110 = '1.2.840.10065.1.12.1.10',
  /** Consent Witness Signature */
  _1284010065112111 = '1.2.840.10065.1.12.1.11',
  /** Interpreter Signature */
  _1284010065112112 = '1.2.840.10065.1.12.1.12',
  /** Review Signature */
  _1284010065112113 = '1.2.840.10065.1.12.1.13',
  /** Source Signature */
  _1284010065112114 = '1.2.840.10065.1.12.1.14',
  /** Addendum Signature */
  _1284010065112115 = '1.2.840.10065.1.12.1.15',
  /** Modification Signature */
  _1284010065112116 = '1.2.840.10065.1.12.1.16',
  /** Administrative (Error/Edit) Signature */
  _1284010065112117 = '1.2.840.10065.1.12.1.17',
  /** Timestamp Signature */
  _1284010065112118 = '1.2.840.10065.1.12.1.18',
}

export const SignatureTypeValues = ['ProofOfOrigin', 'ProofOfReceipt', 'ProofOfDelivery', 'ProofOfSender', 'ProofOfapproval', 'ProofOfCreation', '1.2.840.10065.1.12.1.1', '1.2.840.10065.1.12.1.2', '1.2.840.10065.1.12.1.3', '1.2.840.10065.1.12.1.4', '1.2.840.10065.1.12.1.5', '1.2.840.10065.1.12.1.6', '1.2.840.10065.1.12.1.7', '1.2.840.10065.1.12.1.8', '1.2.840.10065.1.12.1.9', '1.2.840.10065.1.12.1.10', '1.2.840.10065.1.12.1.11', '1.2.840.10065.1.12.1.12', '1.2.840.10065.1.12.1.13', '1.2.840.10065.1.12.1.14', '1.2.840.10065.1.12.1.15', '1.2.840.10065.1.12.1.16', '1.2.840.10065.1.12.1.17', '1.2.840.10065.1.12.1.18'] as const;
