/**
 * ParticipationRoleType
 * 
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 *
 * @see http://hl7.org/fhir/ValueSet/participation-role-type
 */

export type ParticipationRoleTypeType = 'AMENDER' | 'COAUTH' | 'CONT' | 'EVTWIT' | 'PRIMAUTH' | 'REVIEWER' | 'SOURCE' | 'TRANS' | 'VALID' | 'VERF' | 'AFFL' | 'AGNT' | 'ASSIGNED' | 'CLAIM' | 'COVPTY' | 'DEPEN' | 'ECON' | 'EMP' | 'GUARD' | 'INVSBJ' | 'NAMED' | 'NOK' | 'PAT' | 'PROV' | 'NOT' | 'CLASSIFIER' | 'CONSENTER' | 'CONSWIT' | 'COPART' | 'DECLASSIFIER' | 'DELEGATEE' | 'DELEGATOR' | 'DOWNGRDER' | 'DPOWATT' | 'EXCEST' | 'GRANTEE' | 'GRANTOR' | 'GT' | 'GUADLTM' | 'HPOWATT' | 'INTPRTER' | 'POWATT' | 'RESPRSN' | 'SPOWATT' | 'AUCG' | 'AULR' | 'AUTM' | 'AUWA' | 'PROMSK' | 'AUT' | 'CST' | 'INF' | 'IRCP' | 'LA' | 'TRC' | 'WIT' | 'authserver' | 'datacollector' | 'dataprocessor' | 'datasubject' | 'humanuser' | '110150' | '110151' | '110152' | '110153' | '110154' | '110155';

export enum ParticipationRoleTypeEnum {
  Amender = 'AMENDER',
  Coauth = 'COAUTH',
  Cont = 'CONT',
  Evtwit = 'EVTWIT',
  Primauth = 'PRIMAUTH',
  Reviewer = 'REVIEWER',
  Source = 'SOURCE',
  Trans = 'TRANS',
  Valid = 'VALID',
  Verf = 'VERF',
  Affl = 'AFFL',
  Agnt = 'AGNT',
  Assigned = 'ASSIGNED',
  Claim = 'CLAIM',
  Covpty = 'COVPTY',
  Depen = 'DEPEN',
  Econ = 'ECON',
  Emp = 'EMP',
  Guard = 'GUARD',
  Invsbj = 'INVSBJ',
  Named = 'NAMED',
  Nok = 'NOK',
  Pat = 'PAT',
  Prov = 'PROV',
  Not = 'NOT',
  Classifier = 'CLASSIFIER',
  Consenter = 'CONSENTER',
  Conswit = 'CONSWIT',
  Copart = 'COPART',
  Declassifier = 'DECLASSIFIER',
  Delegatee = 'DELEGATEE',
  Delegator = 'DELEGATOR',
  Downgrder = 'DOWNGRDER',
  Dpowatt = 'DPOWATT',
  Excest = 'EXCEST',
  Grantee = 'GRANTEE',
  Grantor = 'GRANTOR',
  Gt = 'GT',
  Guadltm = 'GUADLTM',
  Hpowatt = 'HPOWATT',
  Intprter = 'INTPRTER',
  Powatt = 'POWATT',
  Resprsn = 'RESPRSN',
  Spowatt = 'SPOWATT',
  Aucg = 'AUCG',
  Aulr = 'AULR',
  Autm = 'AUTM',
  Auwa = 'AUWA',
  Promsk = 'PROMSK',
  Aut = 'AUT',
  Cst = 'CST',
  Inf = 'INF',
  Ircp = 'IRCP',
  La = 'LA',
  Trc = 'TRC',
  Wit = 'WIT',
  /** authorization server */
  Authserver = 'authserver',
  /** data collector */
  Datacollector = 'datacollector',
  /** data processor */
  Dataprocessor = 'dataprocessor',
  /** data subject */
  Datasubject = 'datasubject',
  /** human user */
  Humanuser = 'humanuser',
  _110150 = '110150',
  _110151 = '110151',
  _110152 = '110152',
  _110153 = '110153',
  _110154 = '110154',
  _110155 = '110155',
}

export const ParticipationRoleTypeValues = ['AMENDER', 'COAUTH', 'CONT', 'EVTWIT', 'PRIMAUTH', 'REVIEWER', 'SOURCE', 'TRANS', 'VALID', 'VERF', 'AFFL', 'AGNT', 'ASSIGNED', 'CLAIM', 'COVPTY', 'DEPEN', 'ECON', 'EMP', 'GUARD', 'INVSBJ', 'NAMED', 'NOK', 'PAT', 'PROV', 'NOT', 'CLASSIFIER', 'CONSENTER', 'CONSWIT', 'COPART', 'DECLASSIFIER', 'DELEGATEE', 'DELEGATOR', 'DOWNGRDER', 'DPOWATT', 'EXCEST', 'GRANTEE', 'GRANTOR', 'GT', 'GUADLTM', 'HPOWATT', 'INTPRTER', 'POWATT', 'RESPRSN', 'SPOWATT', 'AUCG', 'AULR', 'AUTM', 'AUWA', 'PROMSK', 'AUT', 'CST', 'INF', 'IRCP', 'LA', 'TRC', 'WIT', 'authserver', 'datacollector', 'dataprocessor', 'datasubject', 'humanuser', '110150', '110151', '110152', '110153', '110154', '110155'] as const;
