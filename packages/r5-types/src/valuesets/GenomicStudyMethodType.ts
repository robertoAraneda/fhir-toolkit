/**
 * Genomic Study Method Type
 * 
 * The method type of the GenomicStudy analysis.
 *
 * @see http://hl7.org/fhir/ValueSet/genomicstudy-methodtype
 */

export type GenomicStudyMethodTypeType = 'biochemical-genetics' | 'cytogenetics' | 'molecular-genetics' | 'analyte' | 'chromosome-breakage-studies' | 'deletion-duplication-analysis' | 'detection-of-homozygosity' | 'enzyme-assay' | 'fish-interphase' | 'fish-metaphase' | 'flow-cytometry' | 'fish' | 'immunohistochemistry' | 'karyotyping' | 'linkage-analysis' | 'methylation-analysis' | 'msi' | 'm-fish' | 'mutation-scanning-of-select-exons' | 'mutation-scanning-of-the-entire-coding-region' | 'protein-analysis' | 'protein-expression' | 'rna-analysis' | 'sequence-analysis-of-select-exons' | 'sequence-analysis-of-the-entire-coding-region' | 'sister-chromatid-exchange' | 'targeted-variant-analysis' | 'udp' | 'aspe' | 'alternative-splicing-detection' | 'bi-directional-sanger-sequence-analysis' | 'c-banding' | 'cia' | 'chromatin-immunoprecipitation-on-chip' | 'comparative-genomic-hybridization' | 'damid' | 'digital-virtual-karyotyping' | 'digital-microfluidic-microspheres' | 'enzymatic-levels' | 'enzyme-activity' | 'elisa' | 'fluorometry' | 'fusion-genes-microarrays' | 'g-banding' | 'gc-ms' | 'gene-expression-profiling' | 'gene-id' | 'gold-nanoparticle-probe-technology' | 'hplc' | 'lc-ms' | 'lc-ms-ms' | 'metabolite-levels' | 'methylation-specific-pcr' | 'microarray' | 'mlpa' | 'ngs-mps' | 'ola' | 'oligonucleotide-hybridization-based-dna-sequencing' | 'other' | 'pcr' | 'pcr-with-allele-specific-hybridization' | 'pcr-rflp-with-southern-hybridization' | 'protein-truncation-test' | 'pyrosequencing' | 'q-banding' | 'qpcr' | 'r-banding' | 'rflp' | 'rt-lamp' | 'rt-pcr' | 'rt-pcr-with-gel-analysis' | 'rt-qpcr' | 'snp-detection' | 'silver-staining' | 'sky' | 't-banding' | 'ms-ms' | 'tetra-nucleotide-repeat-by-pcr-or-southern-blot' | 'tiling-arrays' | 'trinucleotide-repeat-by-pcr-or-southern-blot' | 'uni-directional-sanger-sequencing';

export enum GenomicStudyMethodTypeEnum {
  /** Biochemical Genetics */
  BiochemicalGenetics = 'biochemical-genetics',
  /** Cytogenetics */
  Cytogenetics = 'cytogenetics',
  /** Molecular Genetics */
  MolecularGenetics = 'molecular-genetics',
  /** Analyte */
  Analyte = 'analyte',
  /** Chromosome breakage studies */
  ChromosomeBreakageStudies = 'chromosome-breakage-studies',
  /** Deletion/duplication analysis */
  DeletionDuplicationAnalysis = 'deletion-duplication-analysis',
  /** Detection of homozygosity */
  DetectionOfHomozygosity = 'detection-of-homozygosity',
  /** Enzyme assay */
  EnzymeAssay = 'enzyme-assay',
  /** FISH-interphase */
  FishInterphase = 'fish-interphase',
  /** FISH-metaphase */
  FishMetaphase = 'fish-metaphase',
  /** Flow cytometry */
  FlowCytometry = 'flow-cytometry',
  /** Fluorescence in situ hybridization (FISH) */
  Fish = 'fish',
  /** Immunohistochemistry */
  Immunohistochemistry = 'immunohistochemistry',
  /** Karyotyping */
  Karyotyping = 'karyotyping',
  /** Linkage analysis */
  LinkageAnalysis = 'linkage-analysis',
  /** Methylation analysis */
  MethylationAnalysis = 'methylation-analysis',
  /** Microsatellite instability testing (MSI) */
  Msi = 'msi',
  /** Multicolor FISH (M-FISH) */
  MFish = 'm-fish',
  /** Mutation scanning of select exons */
  MutationScanningOfSelectExons = 'mutation-scanning-of-select-exons',
  /** Mutation scanning of the entire coding region */
  MutationScanningOfTheEntireCodingRegion = 'mutation-scanning-of-the-entire-coding-region',
  /** Protein analysis */
  ProteinAnalysis = 'protein-analysis',
  /** Protein expression */
  ProteinExpression = 'protein-expression',
  /** RNA analysis */
  RnaAnalysis = 'rna-analysis',
  /** Sequence analysis of select exons */
  SequenceAnalysisOfSelectExons = 'sequence-analysis-of-select-exons',
  /** Sequence analysis of the entire coding region */
  SequenceAnalysisOfTheEntireCodingRegion = 'sequence-analysis-of-the-entire-coding-region',
  /** Sister chromatid exchange */
  SisterChromatidExchange = 'sister-chromatid-exchange',
  /** Targeted variant analysis */
  TargetedVariantAnalysis = 'targeted-variant-analysis',
  /** Uniparental disomy study (UPD) */
  Udp = 'udp',
  /** Allele-specific primer extension (ASPE) */
  Aspe = 'aspe',
  /** Alternative splicing detection */
  AlternativeSplicingDetection = 'alternative-splicing-detection',
  /** Bi-directional Sanger Sequence Analysis */
  BiDirectionalSangerSequenceAnalysis = 'bi-directional-sanger-sequence-analysis',
  /** C-banding */
  CBanding = 'c-banding',
  /** Chemiluminescent Immunoassay (CIA) */
  Cia = 'cia',
  /** Chromatin Immunoprecipitation on ChIP */
  ChromatinImmunoprecipitationOnChip = 'chromatin-immunoprecipitation-on-chip',
  /** Comparative Genomic Hybridization */
  ComparativeGenomicHybridization = 'comparative-genomic-hybridization',
  /** DamID */
  Damid = 'damid',
  /** Digital / Virtual karyotyping */
  DigitalVirtualKaryotyping = 'digital-virtual-karyotyping',
  /** Digital microfluidic microspheres */
  DigitalMicrofluidicMicrospheres = 'digital-microfluidic-microspheres',
  /** Enzymatic levels */
  EnzymaticLevels = 'enzymatic-levels',
  /** Enzyme activity */
  EnzymeActivity = 'enzyme-activity',
  /** Enzyme-Linked Immunosorbent Assays (ELISA) */
  Elisa = 'elisa',
  /** Fluorometry */
  Fluorometry = 'fluorometry',
  /** Fusion genes microarrays */
  FusionGenesMicroarrays = 'fusion-genes-microarrays',
  /** G-banding */
  GBanding = 'g-banding',
  /** Gas chromatographyâ€“mass spectrometry (GC-MS) */
  GcMs = 'gc-ms',
  /** Gene expression profiling */
  GeneExpressionProfiling = 'gene-expression-profiling',
  /** GeneID */
  GeneId = 'gene-id',
  /** Gold nanoparticle probe technology */
  GoldNanoparticleProbeTechnology = 'gold-nanoparticle-probe-technology',
  /** High-performance liquid chromatography (HPLC) */
  Hplc = 'hplc',
  /** Liquid chromatography mass spectrometry (LC-MS) */
  LcMs = 'lc-ms',
  /** Liquid chromatography-tandem mass spectrometry (LC-MS/MS) */
  LcMsMs = 'lc-ms-ms',
  /** Metabolite levels */
  MetaboliteLevels = 'metabolite-levels',
  /** Methylation-specific PCR */
  MethylationSpecificPcr = 'methylation-specific-pcr',
  /** Microarray */
  Microarray = 'microarray',
  /** Multiplex Ligation-dependent Probe Amplification (MLPA) */
  Mlpa = 'mlpa',
  /** Next-Generation (NGS)/Massively parallel sequencing (MPS) */
  NgsMps = 'ngs-mps',
  /** Oligonucleotide Ligation Assay (OLA) */
  Ola = 'ola',
  /** Oligonucleotide hybridization-based DNA sequencing */
  OligonucleotideHybridizationBasedDnaSequencing = 'oligonucleotide-hybridization-based-dna-sequencing',
  /** Other */
  Other = 'other',
  /** PCR */
  Pcr = 'pcr',
  /** PCR with allele specific hybridization */
  PcrWithAlleleSpecificHybridization = 'pcr-with-allele-specific-hybridization',
  /** PCR-RFLP with Southern hybridization */
  PcrRflpWithSouthernHybridization = 'pcr-rflp-with-southern-hybridization',
  /** Protein truncation test */
  ProteinTruncationTest = 'protein-truncation-test',
  /** Pyrosequencing */
  Pyrosequencing = 'pyrosequencing',
  /** Q-banding */
  QBanding = 'q-banding',
  /** Quantitative PCR (qPCR) */
  Qpcr = 'qpcr',
  /** R-banding */
  RBanding = 'r-banding',
  /** RFLP */
  Rflp = 'rflp',
  /** RT-LAMP */
  RtLamp = 'rt-lamp',
  /** RT-PCR */
  RtPcr = 'rt-pcr',
  /** RT-PCR with gel analysis */
  RtPcrWithGelAnalysis = 'rt-pcr-with-gel-analysis',
  /** RT-qPCR */
  RtQpcr = 'rt-qpcr',
  /** SNP Detection */
  SnpDetection = 'snp-detection',
  /** Silver staining */
  SilverStaining = 'silver-staining',
  /** Spectral karyotyping (SKY) */
  Sky = 'sky',
  /** T-banding */
  TBanding = 't-banding',
  /** Tandem mass spectrometry (MS/MS) */
  MsMs = 'ms-ms',
  /** Tetra-nucleotide repeat by PCR or Southern Blot */
  TetraNucleotideRepeatByPcrOrSouthernBlot = 'tetra-nucleotide-repeat-by-pcr-or-southern-blot',
  /** Tiling Arrays */
  TilingArrays = 'tiling-arrays',
  /** Trinucleotide repeat by PCR or Southern Blot */
  TrinucleotideRepeatByPcrOrSouthernBlot = 'trinucleotide-repeat-by-pcr-or-southern-blot',
  /** Uni-directional Sanger sequencing */
  UniDirectionalSangerSequencing = 'uni-directional-sanger-sequencing',
}

export const GenomicStudyMethodTypeValues = ['biochemical-genetics', 'cytogenetics', 'molecular-genetics', 'analyte', 'chromosome-breakage-studies', 'deletion-duplication-analysis', 'detection-of-homozygosity', 'enzyme-assay', 'fish-interphase', 'fish-metaphase', 'flow-cytometry', 'fish', 'immunohistochemistry', 'karyotyping', 'linkage-analysis', 'methylation-analysis', 'msi', 'm-fish', 'mutation-scanning-of-select-exons', 'mutation-scanning-of-the-entire-coding-region', 'protein-analysis', 'protein-expression', 'rna-analysis', 'sequence-analysis-of-select-exons', 'sequence-analysis-of-the-entire-coding-region', 'sister-chromatid-exchange', 'targeted-variant-analysis', 'udp', 'aspe', 'alternative-splicing-detection', 'bi-directional-sanger-sequence-analysis', 'c-banding', 'cia', 'chromatin-immunoprecipitation-on-chip', 'comparative-genomic-hybridization', 'damid', 'digital-virtual-karyotyping', 'digital-microfluidic-microspheres', 'enzymatic-levels', 'enzyme-activity', 'elisa', 'fluorometry', 'fusion-genes-microarrays', 'g-banding', 'gc-ms', 'gene-expression-profiling', 'gene-id', 'gold-nanoparticle-probe-technology', 'hplc', 'lc-ms', 'lc-ms-ms', 'metabolite-levels', 'methylation-specific-pcr', 'microarray', 'mlpa', 'ngs-mps', 'ola', 'oligonucleotide-hybridization-based-dna-sequencing', 'other', 'pcr', 'pcr-with-allele-specific-hybridization', 'pcr-rflp-with-southern-hybridization', 'protein-truncation-test', 'pyrosequencing', 'q-banding', 'qpcr', 'r-banding', 'rflp', 'rt-lamp', 'rt-pcr', 'rt-pcr-with-gel-analysis', 'rt-qpcr', 'snp-detection', 'silver-staining', 'sky', 't-banding', 'ms-ms', 'tetra-nucleotide-repeat-by-pcr-or-southern-blot', 'tiling-arrays', 'trinucleotide-repeat-by-pcr-or-southern-blot', 'uni-directional-sanger-sequencing'] as const;
