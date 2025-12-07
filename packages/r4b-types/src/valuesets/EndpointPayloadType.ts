/**
 * Endpoint Payload Type
 * 
 * This is an example value set defined by the FHIR project, that could be used to represent possible payload document types.
 *
 * @see http://hl7.org/fhir/ValueSet/endpoint-payload-type
 */

export type EndpointPayloadTypeType = 'any' | 'none' | 'urn:ihe:pcc:handp:2008' | 'urn:ihe:pcc:xphr:2007' | 'urn:ihe:pcc:aps:2007' | 'urn:ihe:pcc:xds-ms:2007' | 'urn:ihe:pcc:edr:2007' | 'urn:ihe:pcc:edes:2007' | 'urn:ihe:pcc:apr:handp:2008' | 'urn:ihe:pcc:apr:lab:2008' | 'urn:ihe:pcc:apr:edu:2008' | 'urn:ihe:pcc:irc:2008' | 'urn:ihe:pcc:crc:2008' | 'urn:ihe:pcc:cm:2008' | 'urn:ihe:pcc:ic:2009' | 'urn:ihe:pcc:tn:2007' | 'urn:ihe:pcc:nn:2007' | 'urn:ihe:pcc:ctn:2007' | 'urn:ihe:pcc:edpn:2007' | 'urn:ihe:pcc:hp:2008' | 'urn:ihe:pcc:ldhp:2009' | 'urn:ihe:pcc:lds:2009' | 'urn:ihe:pcc:mds:2009' | 'urn:ihe:pcc:nds:2010' | 'urn:ihe:pcc:ppvs:2010' | 'urn:ihe:pcc:trs:2011' | 'urn:ihe:pcc:ets:2011' | 'urn:ihe:pcc:its:2011' | 'urn:ihe:iti:bppc:2007' | 'urn:ihe:iti:bppc-sd:2007' | 'urn:ihe:iti:xdw:2011:workflowDoc' | 'urn:ihe:iti:dsg:detached:2014' | 'urn:ihe:iti:dsg:enveloping:2014' | 'urn:ihe:iti:xds-sd:pdf:2008' | 'urn:ihe:iti:xds-sd:text:2008' | 'urn:ihe:lab:xd-lab:2008' | 'urn:ihe:rad:TEXT' | 'urn:ihe:rad:PDF' | 'urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013' | 'urn:ihe:card:imaging:2011' | 'urn:ihe:card:CRC:2012' | 'urn:ihe:card:EPRC-IE:2014' | 'urn:ihe:dent:TEXT' | 'urn:ihe:dent:PDF' | 'urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013' | 'urn:ihe:pat:apsr:all:2010' | 'urn:ihe:pat:apsr:cancer:all:2010' | 'urn:ihe:pat:apsr:cancer:breast:2010' | 'urn:ihe:pat:apsr:cancer:colon:2010' | 'urn:ihe:pat:apsr:cancer:prostate:2010' | 'urn:ihe:pat:apsr:cancer:thyroid:2010' | 'urn:ihe:pat:apsr:cancer:lung:2010' | 'urn:ihe:pat:apsr:cancer:skin:2010' | 'urn:ihe:pat:apsr:cancer:kidney:2010' | 'urn:ihe:pat:apsr:cancer:cervix:2010' | 'urn:ihe:pat:apsr:cancer:endometrium:2010' | 'urn:ihe:pat:apsr:cancer:ovary:2010' | 'urn:ihe:pat:apsr:cancer:esophagus: 2010' | 'urn:ihe:pat:apsr:cancer:stomach: 2010' | 'urn:ihe:pat:apsr:cancer:liver:2010' | 'urn:ihe:pat:apsr:cancer:pancreas: 2010' | 'urn:ihe:pat:apsr:cancer:testis:2010' | 'urn:ihe:pat:apsr:cancer:urinary_bladder:2010' | 'urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010' | 'urn:ihe:pat:apsr:cancer:pharynx:2010' | 'urn:ihe:pat:apsr:cancer:salivary_gland:2010' | 'urn:ihe:pat:apsr:cancer:larynx:2010' | 'urn:ihe:pharm:pre:2010' | 'urn:ihe:pharm:padv:2010' | 'urn:ihe:pharm:dis:2010' | 'urn:ihe:pharm:pml:2013' | 'urn:hl7-org:sdwg:ccda-structuredBody:1.1' | 'urn:hl7-org:sdwg:ccda-nonXMLBody:1.1';

export enum EndpointPayloadTypeEnum {
  /** Any */
  Any = 'any',
  /** None */
  None = 'none',
  /** History and Physical Specification */
  UrnIhePccHandp2008 = 'urn:ihe:pcc:handp:2008',
  /** HL7 CCD Document */
  UrnIhePccXphr2007 = 'urn:ihe:pcc:xphr:2007',
  /** IHE Antepartum Summary */
  UrnIhePccAps2007 = 'urn:ihe:pcc:aps:2007',
  /** XDS Medical Summaries */
  UrnIhePccXdsMs2007 = 'urn:ihe:pcc:xds-ms:2007',
  /** Emergency Department Referral (EDR) */
  UrnIhePccEdr2007 = 'urn:ihe:pcc:edr:2007',
  /** Emergency Department Encounter Summary (EDES) */
  UrnIhePccEdes2007 = 'urn:ihe:pcc:edes:2007',
  /** Antepartum Record (APR) - History and Physical */
  UrnIhePccAprHandp2008 = 'urn:ihe:pcc:apr:handp:2008',
  /** Antepartum Record (APR) - Laboratory */
  UrnIhePccAprLab2008 = 'urn:ihe:pcc:apr:lab:2008',
  /** Antepartum Record (APR) - Education */
  UrnIhePccAprEdu2008 = 'urn:ihe:pcc:apr:edu:2008',
  /** Immunization Registry Content (IRC) */
  UrnIhePccIrc2008 = 'urn:ihe:pcc:irc:2008',
  /** Cancer Registry Content (CRC) */
  UrnIhePccCrc2008 = 'urn:ihe:pcc:crc:2008',
  /** Care Management (CM) */
  UrnIhePccCm2008 = 'urn:ihe:pcc:cm:2008',
  /** Immunization Content (IC) */
  UrnIhePccIc2009 = 'urn:ihe:pcc:ic:2009',
  /** PCC TN */
  UrnIhePccTn2007 = 'urn:ihe:pcc:tn:2007',
  /** PCC NN */
  UrnIhePccNn2007 = 'urn:ihe:pcc:nn:2007',
  /** PCC CTN */
  UrnIhePccCtn2007 = 'urn:ihe:pcc:ctn:2007',
  /** PCC EDPN */
  UrnIhePccEdpn2007 = 'urn:ihe:pcc:edpn:2007',
  /** PCC HP */
  UrnIhePccHp2008 = 'urn:ihe:pcc:hp:2008',
  /** PCC LDHP */
  UrnIhePccLdhp2009 = 'urn:ihe:pcc:ldhp:2009',
  /** PCC LDS */
  UrnIhePccLds2009 = 'urn:ihe:pcc:lds:2009',
  /** PCC MDS */
  UrnIhePccMds2009 = 'urn:ihe:pcc:mds:2009',
  /** PCC NDS */
  UrnIhePccNds2010 = 'urn:ihe:pcc:nds:2010',
  /** PCC PPVS */
  UrnIhePccPpvs2010 = 'urn:ihe:pcc:ppvs:2010',
  /** PCC TRS */
  UrnIhePccTrs2011 = 'urn:ihe:pcc:trs:2011',
  /** PCC ETS */
  UrnIhePccEts2011 = 'urn:ihe:pcc:ets:2011',
  /** PCC ITS */
  UrnIhePccIts2011 = 'urn:ihe:pcc:its:2011',
  /** Basic Patient Privacy Consents */
  UrnIheItiBppc2007 = 'urn:ihe:iti:bppc:2007',
  /** Basic Patient Privacy Consents with Scanned Document */
  UrnIheItiBppcSd2007 = 'urn:ihe:iti:bppc-sd:2007',
  /** XDW Workflow Document */
  UrnIheItiXdw2011Workflowdoc = 'urn:ihe:iti:xdw:2011:workflowDoc',
  /** DSG Detached Document */
  UrnIheItiDsgDetached2014 = 'urn:ihe:iti:dsg:detached:2014',
  /** DSG Enveloping Document */
  UrnIheItiDsgEnveloping2014 = 'urn:ihe:iti:dsg:enveloping:2014',
  /** PDF embedded in CDA per XDS-SD profile */
  UrnIheItiXdsSdPdf2008 = 'urn:ihe:iti:xds-sd:pdf:2008',
  /** Text embedded in CDA per XDS-SD profile */
  UrnIheItiXdsSdText2008 = 'urn:ihe:iti:xds-sd:text:2008',
  /** CDA Laboratory Report */
  UrnIheLabXdLab2008 = 'urn:ihe:lab:xd-lab:2008',
  /** Radiology XDS-I Text */
  UrnIheRadText = 'urn:ihe:rad:TEXT',
  /** Radiology XDS-I PDF */
  UrnIheRadPdf = 'urn:ihe:rad:PDF',
  /** Radiology XDS-I Structured CDA */
  UrnIheRadCdaImagingreportstructuredheadings2013 = 'urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013',
  /** Cardiac Imaging Report */
  UrnIheCardImaging2011 = 'urn:ihe:card:imaging:2011',
  /** Cardiology CRC */
  UrnIheCardCrc2012 = 'urn:ihe:card:CRC:2012',
  /** Cardiology EPRC-IE */
  UrnIheCardEprcIe2014 = 'urn:ihe:card:EPRC-IE:2014',
  /** Dental Text */
  UrnIheDentText = 'urn:ihe:dent:TEXT',
  /** Dental PDF */
  UrnIheDentPdf = 'urn:ihe:dent:PDF',
  /** Dental CDA */
  UrnIheDentCdaImagingreportstructuredheadings2013 = 'urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013',
  /** Anatomic Pathology Structured Report All */
  UrnIhePatApsrAll2010 = 'urn:ihe:pat:apsr:all:2010',
  /** Anatomic Pathology Structured Report Cancer All */
  UrnIhePatApsrCancerAll2010 = 'urn:ihe:pat:apsr:cancer:all:2010',
  /** Anatomic Pathology Structured Report Cancer Breast */
  UrnIhePatApsrCancerBreast2010 = 'urn:ihe:pat:apsr:cancer:breast:2010',
  /** Anatomic Pathology Structured Report Cancer Colon */
  UrnIhePatApsrCancerColon2010 = 'urn:ihe:pat:apsr:cancer:colon:2010',
  /** Anatomic Pathology Structured Report Cancer Prostate */
  UrnIhePatApsrCancerProstate2010 = 'urn:ihe:pat:apsr:cancer:prostate:2010',
  /** Anatomic Pathology Structured Report Cancer Thyroid */
  UrnIhePatApsrCancerThyroid2010 = 'urn:ihe:pat:apsr:cancer:thyroid:2010',
  /** Anatomic Pathology Structured Report Cancer Lung */
  UrnIhePatApsrCancerLung2010 = 'urn:ihe:pat:apsr:cancer:lung:2010',
  /** Anatomic Pathology Structured Report Cancer Skin */
  UrnIhePatApsrCancerSkin2010 = 'urn:ihe:pat:apsr:cancer:skin:2010',
  /** Anatomic Pathology Structured Report Cancer Kidney */
  UrnIhePatApsrCancerKidney2010 = 'urn:ihe:pat:apsr:cancer:kidney:2010',
  /** Anatomic Pathology Structured Report Cancer Cervix */
  UrnIhePatApsrCancerCervix2010 = 'urn:ihe:pat:apsr:cancer:cervix:2010',
  /** Anatomic Pathology Structured Report Cancer Endometrium */
  UrnIhePatApsrCancerEndometrium2010 = 'urn:ihe:pat:apsr:cancer:endometrium:2010',
  /** Anatomic Pathology Structured Report Cancer Ovary */
  UrnIhePatApsrCancerOvary2010 = 'urn:ihe:pat:apsr:cancer:ovary:2010',
  /** Anatomic Pathology Structured Report Cancer Esophagus */
  UrnIhePatApsrCancerEsophagus2010 = 'urn:ihe:pat:apsr:cancer:esophagus: 2010',
  /** Anatomic Pathology Structured Report Cancer Stomach */
  UrnIhePatApsrCancerStomach2010 = 'urn:ihe:pat:apsr:cancer:stomach: 2010',
  /** Anatomic Pathology Structured Report Cancer Liver */
  UrnIhePatApsrCancerLiver2010 = 'urn:ihe:pat:apsr:cancer:liver:2010',
  /** Anatomic Pathology Structured Report Cancer Pancreas */
  UrnIhePatApsrCancerPancreas2010 = 'urn:ihe:pat:apsr:cancer:pancreas: 2010',
  /** Anatomic Pathology Structured Report Cancer Testis */
  UrnIhePatApsrCancerTestis2010 = 'urn:ihe:pat:apsr:cancer:testis:2010',
  /** Anatomic Pathology Structured Report Cancer Urinary Bladder */
  UrnIhePatApsrCancerUrinaryBladder2010 = 'urn:ihe:pat:apsr:cancer:urinary_bladder:2010',
  /** Anatomic Pathology Structured Report Cancer Lip Oral Cavity */
  UrnIhePatApsrCancerLipOralCavity2010 = 'urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010',
  /** Anatomic Pathology Structured Report Cancer Pharynx */
  UrnIhePatApsrCancerPharynx2010 = 'urn:ihe:pat:apsr:cancer:pharynx:2010',
  /** Anatomic Pathology Structured Report Cancer Salivary Gland */
  UrnIhePatApsrCancerSalivaryGland2010 = 'urn:ihe:pat:apsr:cancer:salivary_gland:2010',
  /** Anatomic Pathology Structured Report Cancer Larynx */
  UrnIhePatApsrCancerLarynx2010 = 'urn:ihe:pat:apsr:cancer:larynx:2010',
  /** Pharmacy Pre */
  UrnIhePharmPre2010 = 'urn:ihe:pharm:pre:2010',
  /** Pharmacy PADV */
  UrnIhePharmPadv2010 = 'urn:ihe:pharm:padv:2010',
  /** Pharmacy DIS */
  UrnIhePharmDis2010 = 'urn:ihe:pharm:dis:2010',
  /** Pharmacy PML */
  UrnIhePharmPml2013 = 'urn:ihe:pharm:pml:2013',
  /** For documents following C-CDA constraints using a structured body. */
  UrnHl7OrgSdwgCcdaStructuredbody11 = 'urn:hl7-org:sdwg:ccda-structuredBody:1.1',
  /** For documents following C-CDA constraints using a non structured body. */
  UrnHl7OrgSdwgCcdaNonxmlbody11 = 'urn:hl7-org:sdwg:ccda-nonXMLBody:1.1',
}

export const EndpointPayloadTypeValues = ['any', 'none', 'urn:ihe:pcc:handp:2008', 'urn:ihe:pcc:xphr:2007', 'urn:ihe:pcc:aps:2007', 'urn:ihe:pcc:xds-ms:2007', 'urn:ihe:pcc:edr:2007', 'urn:ihe:pcc:edes:2007', 'urn:ihe:pcc:apr:handp:2008', 'urn:ihe:pcc:apr:lab:2008', 'urn:ihe:pcc:apr:edu:2008', 'urn:ihe:pcc:irc:2008', 'urn:ihe:pcc:crc:2008', 'urn:ihe:pcc:cm:2008', 'urn:ihe:pcc:ic:2009', 'urn:ihe:pcc:tn:2007', 'urn:ihe:pcc:nn:2007', 'urn:ihe:pcc:ctn:2007', 'urn:ihe:pcc:edpn:2007', 'urn:ihe:pcc:hp:2008', 'urn:ihe:pcc:ldhp:2009', 'urn:ihe:pcc:lds:2009', 'urn:ihe:pcc:mds:2009', 'urn:ihe:pcc:nds:2010', 'urn:ihe:pcc:ppvs:2010', 'urn:ihe:pcc:trs:2011', 'urn:ihe:pcc:ets:2011', 'urn:ihe:pcc:its:2011', 'urn:ihe:iti:bppc:2007', 'urn:ihe:iti:bppc-sd:2007', 'urn:ihe:iti:xdw:2011:workflowDoc', 'urn:ihe:iti:dsg:detached:2014', 'urn:ihe:iti:dsg:enveloping:2014', 'urn:ihe:iti:xds-sd:pdf:2008', 'urn:ihe:iti:xds-sd:text:2008', 'urn:ihe:lab:xd-lab:2008', 'urn:ihe:rad:TEXT', 'urn:ihe:rad:PDF', 'urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013', 'urn:ihe:card:imaging:2011', 'urn:ihe:card:CRC:2012', 'urn:ihe:card:EPRC-IE:2014', 'urn:ihe:dent:TEXT', 'urn:ihe:dent:PDF', 'urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013', 'urn:ihe:pat:apsr:all:2010', 'urn:ihe:pat:apsr:cancer:all:2010', 'urn:ihe:pat:apsr:cancer:breast:2010', 'urn:ihe:pat:apsr:cancer:colon:2010', 'urn:ihe:pat:apsr:cancer:prostate:2010', 'urn:ihe:pat:apsr:cancer:thyroid:2010', 'urn:ihe:pat:apsr:cancer:lung:2010', 'urn:ihe:pat:apsr:cancer:skin:2010', 'urn:ihe:pat:apsr:cancer:kidney:2010', 'urn:ihe:pat:apsr:cancer:cervix:2010', 'urn:ihe:pat:apsr:cancer:endometrium:2010', 'urn:ihe:pat:apsr:cancer:ovary:2010', 'urn:ihe:pat:apsr:cancer:esophagus: 2010', 'urn:ihe:pat:apsr:cancer:stomach: 2010', 'urn:ihe:pat:apsr:cancer:liver:2010', 'urn:ihe:pat:apsr:cancer:pancreas: 2010', 'urn:ihe:pat:apsr:cancer:testis:2010', 'urn:ihe:pat:apsr:cancer:urinary_bladder:2010', 'urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010', 'urn:ihe:pat:apsr:cancer:pharynx:2010', 'urn:ihe:pat:apsr:cancer:salivary_gland:2010', 'urn:ihe:pat:apsr:cancer:larynx:2010', 'urn:ihe:pharm:pre:2010', 'urn:ihe:pharm:padv:2010', 'urn:ihe:pharm:dis:2010', 'urn:ihe:pharm:pml:2013', 'urn:hl7-org:sdwg:ccda-structuredBody:1.1', 'urn:hl7-org:sdwg:ccda-nonXMLBody:1.1'] as const;
