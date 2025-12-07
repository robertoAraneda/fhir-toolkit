/**
 * Citation Status Type
 * 
 * Citation status type
 *
 * @see http://hl7.org/fhir/ValueSet/citation-status-type
 */

export type CitationStatusTypeType = 'pubmed-pubstatus-received' | 'pubmed-pubstatus-accepted' | 'pubmed-pubstatus-epublish' | 'pubmed-pubstatus-ppublish' | 'pubmed-pubstatus-revised' | 'pubmed-pubstatus-aheadofprint' | 'pubmed-pubstatus-retracted' | 'pubmed-pubstatus-ecollection' | 'pubmed-pubstatus-pmc' | 'pubmed-pubstatus-pmcr' | 'pubmed-pubstatus-pubmed' | 'pubmed-pubstatus-pubmedr' | 'pubmed-pubstatus-premedline' | 'pubmed-pubstatus-medline' | 'pubmed-pubstatus-medliner' | 'pubmed-pubstatus-entrez' | 'pubmed-pubstatus-pmc-release' | 'medline-completed' | 'medline-in-process' | 'medline-pubmed-not-medline' | 'medline-in-data-review' | 'medline-publisher' | 'medline-medline' | 'medline-oldmedline' | 'pubmed-publication-status-ppublish' | 'pubmed-publication-status-epublish' | 'pubmed-publication-status-aheadofprint';

export enum CitationStatusTypeEnum {
  /** PubMed Pubstatus of Received */
  PubmedPubstatusReceived = 'pubmed-pubstatus-received',
  /** PubMed Pubstatus of Accepted */
  PubmedPubstatusAccepted = 'pubmed-pubstatus-accepted',
  /** PubMed Pubstatus of Epublish */
  PubmedPubstatusEpublish = 'pubmed-pubstatus-epublish',
  /** PubMed Pubstatus of Ppublish */
  PubmedPubstatusPpublish = 'pubmed-pubstatus-ppublish',
  /** PubMed Pubstatus of Revised */
  PubmedPubstatusRevised = 'pubmed-pubstatus-revised',
  /** PubMed Pubstatus of aheadofprint */
  PubmedPubstatusAheadofprint = 'pubmed-pubstatus-aheadofprint',
  /** PubMed Pubstatus of Retracted */
  PubmedPubstatusRetracted = 'pubmed-pubstatus-retracted',
  /** PubMed Pubstatus of Ecollection */
  PubmedPubstatusEcollection = 'pubmed-pubstatus-ecollection',
  /** PubMed Pubstatus of PMC */
  PubmedPubstatusPmc = 'pubmed-pubstatus-pmc',
  /** PubMed Pubstatus of PMCr */
  PubmedPubstatusPmcr = 'pubmed-pubstatus-pmcr',
  /** PubMed Pubstatus of PubMed */
  PubmedPubstatusPubmed = 'pubmed-pubstatus-pubmed',
  /** PubMed Pubstatus of PubMedr */
  PubmedPubstatusPubmedr = 'pubmed-pubstatus-pubmedr',
  /** PubMed Pubstatus of Premedline */
  PubmedPubstatusPremedline = 'pubmed-pubstatus-premedline',
  /** PubMed Pubstatus of Medline */
  PubmedPubstatusMedline = 'pubmed-pubstatus-medline',
  /** PubMed Pubstatus of Medliner */
  PubmedPubstatusMedliner = 'pubmed-pubstatus-medliner',
  /** PubMed Pubstatus of Entrez */
  PubmedPubstatusEntrez = 'pubmed-pubstatus-entrez',
  /** PubMed Pubstatus of PMC release */
  PubmedPubstatusPmcRelease = 'pubmed-pubstatus-pmc-release',
  /** Medline Citation Status of Completed */
  MedlineCompleted = 'medline-completed',
  /** Medline Citation Status of In-Process */
  MedlineInProcess = 'medline-in-process',
  /** Medline Citation Status of PubMed-not-MEDLINE */
  MedlinePubmedNotMedline = 'medline-pubmed-not-medline',
  /** Medline Citation Status of In-Data-Review */
  MedlineInDataReview = 'medline-in-data-review',
  /** Medline Citation Status of Publisher */
  MedlinePublisher = 'medline-publisher',
  /** Medline Citation Status of MEDLINE */
  MedlineMedline = 'medline-medline',
  /** Medline Citation Status of OLDMEDLINE */
  MedlineOldmedline = 'medline-oldmedline',
  /** PubMed PublicationStatus of ppublish */
  PubmedPublicationStatusPpublish = 'pubmed-publication-status-ppublish',
  /** PubMed PublicationStatus of epublish */
  PubmedPublicationStatusEpublish = 'pubmed-publication-status-epublish',
  /** PubMed PublicationStatus of aheadofprint */
  PubmedPublicationStatusAheadofprint = 'pubmed-publication-status-aheadofprint',
}

export const CitationStatusTypeValues = ['pubmed-pubstatus-received', 'pubmed-pubstatus-accepted', 'pubmed-pubstatus-epublish', 'pubmed-pubstatus-ppublish', 'pubmed-pubstatus-revised', 'pubmed-pubstatus-aheadofprint', 'pubmed-pubstatus-retracted', 'pubmed-pubstatus-ecollection', 'pubmed-pubstatus-pmc', 'pubmed-pubstatus-pmcr', 'pubmed-pubstatus-pubmed', 'pubmed-pubstatus-pubmedr', 'pubmed-pubstatus-premedline', 'pubmed-pubstatus-medline', 'pubmed-pubstatus-medliner', 'pubmed-pubstatus-entrez', 'pubmed-pubstatus-pmc-release', 'medline-completed', 'medline-in-process', 'medline-pubmed-not-medline', 'medline-in-data-review', 'medline-publisher', 'medline-medline', 'medline-oldmedline', 'pubmed-publication-status-ppublish', 'pubmed-publication-status-epublish', 'pubmed-publication-status-aheadofprint'] as const;
