/**
 * Contract Signer Type Codes
 * 
 * This value set includes sample Contract Signer Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-signer-type
 */

export type ContractSignerTypeType = 'AMENDER' | 'AUTHN' | 'AUT' | 'AFFL' | 'AGNT' | 'ASSIGNED' | 'CIT' | 'CLAIMANT' | 'COAUTH' | 'CONSENTER' | 'CONSWIT' | 'CONT' | 'COPART' | 'COVPTY' | 'DELEGATEE' | 'delegator' | 'DEPEND' | 'DPOWATT' | 'EMGCON' | 'EVTWIT' | 'EXCEST' | 'GRANTEE' | 'GRANTOR' | 'GUAR' | 'GUARD' | 'GUADLTM' | 'INF' | 'INTPRT' | 'INSBJ' | 'HPOWATT' | 'HPROV' | 'LEGAUTHN' | 'NMDINS' | 'NOK' | 'NOTARY' | 'PAT' | 'POWATT' | 'PRIMAUTH' | 'PRIRECIP' | 'RECIP' | 'RESPRSN' | 'REVIEWER' | 'TRANS' | 'SOURCE' | 'SPOWATT' | 'VALID' | 'VERF' | 'WIT';

export enum ContractSignerTypeEnum {
  /** Amender */
  Amender = 'AMENDER',
  /** Authenticator */
  Authn = 'AUTHN',
  /** Author */
  Aut = 'AUT',
  /** Affiliate */
  Affl = 'AFFL',
  /** Agent */
  Agnt = 'AGNT',
  /** Assigned Entity */
  Assigned = 'ASSIGNED',
  /** Citizen */
  Cit = 'CIT',
  /** Claimant */
  Claimant = 'CLAIMANT',
  /** Co-Author */
  Coauth = 'COAUTH',
  /** Consenter */
  Consenter = 'CONSENTER',
  /** Consent Witness */
  Conswit = 'CONSWIT',
  /** Contact */
  Cont = 'CONT',
  /** Co-Participant */
  Copart = 'COPART',
  /** Covered Party */
  Covpty = 'COVPTY',
  /** Delegatee */
  Delegatee = 'DELEGATEE',
  /** Delegator */
  Delegator = 'delegator',
  /** Dependent */
  Depend = 'DEPEND',
  /** Durable Power of Attorney */
  Dpowatt = 'DPOWATT',
  /** Emergency Contact */
  Emgcon = 'EMGCON',
  /** Event Witness */
  Evtwit = 'EVTWIT',
  /** Executor of Estate */
  Excest = 'EXCEST',
  /** Grantee */
  Grantee = 'GRANTEE',
  /** Grantor */
  Grantor = 'GRANTOR',
  /** Guarantor */
  Guar = 'GUAR',
  /** Guardian */
  Guard = 'GUARD',
  /** Guardian ad lidem */
  Guadltm = 'GUADLTM',
  /** Informant */
  Inf = 'INF',
  /** Interpreter */
  Intprt = 'INTPRT',
  /** Investigation Subject */
  Insbj = 'INSBJ',
  /** Healthcare Power of Attorney */
  Hpowatt = 'HPOWATT',
  /** Healthcare Provider */
  Hprov = 'HPROV',
  /** Legal Authenticator */
  Legauthn = 'LEGAUTHN',
  /** Named Insured */
  Nmdins = 'NMDINS',
  /** Next of Kin */
  Nok = 'NOK',
  /** Notary */
  Notary = 'NOTARY',
  /** Patient */
  Pat = 'PAT',
  /** Power of Attorney */
  Powatt = 'POWATT',
  /** Primary Author */
  Primauth = 'PRIMAUTH',
  /** Primary Responsible Party  */
  Prirecip = 'PRIRECIP',
  /** Recipient */
  Recip = 'RECIP',
  /** Responsible Party */
  Resprsn = 'RESPRSN',
  /** Reviewer */
  Reviewer = 'REVIEWER',
  /** Transcriber */
  Trans = 'TRANS',
  /** Source */
  Source = 'SOURCE',
  /** Special Power of Attorney */
  Spowatt = 'SPOWATT',
  /** Validator */
  Valid = 'VALID',
  /** Verifier */
  Verf = 'VERF',
  /** Witness */
  Wit = 'WIT',
}

export const ContractSignerTypeValues = ['AMENDER', 'AUTHN', 'AUT', 'AFFL', 'AGNT', 'ASSIGNED', 'CIT', 'CLAIMANT', 'COAUTH', 'CONSENTER', 'CONSWIT', 'CONT', 'COPART', 'COVPTY', 'DELEGATEE', 'delegator', 'DEPEND', 'DPOWATT', 'EMGCON', 'EVTWIT', 'EXCEST', 'GRANTEE', 'GRANTOR', 'GUAR', 'GUARD', 'GUADLTM', 'INF', 'INTPRT', 'INSBJ', 'HPOWATT', 'HPROV', 'LEGAUTHN', 'NMDINS', 'NOK', 'NOTARY', 'PAT', 'POWATT', 'PRIMAUTH', 'PRIRECIP', 'RECIP', 'RESPRSN', 'REVIEWER', 'TRANS', 'SOURCE', 'SPOWATT', 'VALID', 'VERF', 'WIT'] as const;
