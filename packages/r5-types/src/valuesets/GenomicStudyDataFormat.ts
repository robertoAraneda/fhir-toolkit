/**
 * Genomic Study Data Format
 * 
 * The data formats relevant to Genomic Study analysis.
 *
 * @see http://hl7.org/fhir/ValueSet/genomicstudy-dataformat
 */

export type GenomicStudyDataFormatType = 'bam' | 'bed' | 'bedpe' | 'bedgraph' | 'bigbed' | 'bigWig' | 'birdsuite-files' | 'broadpeak' | 'cbs' | 'chemical-reactivity-probing-profiles' | 'chrom-sizes' | 'cn' | 'custom-file-formats' | 'cytoband' | 'fasta' | 'gct' | 'cram' | 'genepred' | 'gff-gtf' | 'gistic' | 'goby' | 'gwas' | 'igv' | 'loh' | 'maf-multiple-alignment-format' | 'maf-mutation-annotation-format' | 'merged-bam-file' | 'mut' | 'narrowpeak' | 'psl' | 'res' | 'rna-secondary-structure-formats' | 'sam' | 'sample-info-attributes-file' | 'seg' | 'tdf' | 'track-line' | 'type-line' | 'vcf' | 'wig';

export enum GenomicStudyDataFormatEnum {
  /** BAM */
  Bam = 'bam',
  /** BED */
  Bed = 'bed',
  /** BEDPE */
  Bedpe = 'bedpe',
  /** BedGraph */
  Bedgraph = 'bedgraph',
  /** bigBed */
  Bigbed = 'bigbed',
  /** bigWig */
  Bigwig = 'bigWig',
  /** Birdsuite-Files */
  BirdsuiteFiles = 'birdsuite-files',
  /** broadPeak */
  Broadpeak = 'broadpeak',
  /** CBS */
  Cbs = 'cbs',
  /** Chemical-Reactivity-Probing-Profiles */
  ChemicalReactivityProbingProfiles = 'chemical-reactivity-probing-profiles',
  /** chrom-sizes */
  ChromSizes = 'chrom-sizes',
  /** CN */
  Cn = 'cn',
  /** Custom-File-Formats */
  CustomFileFormats = 'custom-file-formats',
  /** Cytoband */
  Cytoband = 'cytoband',
  /** FASTA */
  Fasta = 'fasta',
  /** GCT */
  Gct = 'gct',
  /** CRAM */
  Cram = 'cram',
  /** genePred */
  Genepred = 'genepred',
  /** GFF/GTF */
  GffGtf = 'gff-gtf',
  /** GISTIC */
  Gistic = 'gistic',
  /** Goby */
  Goby = 'goby',
  /** GWAS */
  Gwas = 'gwas',
  /** IGV */
  Igv = 'igv',
  /** LOH */
  Loh = 'loh',
  /** MAF-Multiple Alignment Format */
  MafMultipleAlignmentFormat = 'maf-multiple-alignment-format',
  /** MAF-Mutation-Annotation-Format */
  MafMutationAnnotationFormat = 'maf-mutation-annotation-format',
  /** Merged BAM File */
  MergedBamFile = 'merged-bam-file',
  /** MUT */
  Mut = 'mut',
  /** narrowPeak */
  Narrowpeak = 'narrowpeak',
  /** PSL */
  Psl = 'psl',
  /** RES */
  Res = 'res',
  /** RNA-Secondary-Structure-Formats */
  RnaSecondaryStructureFormats = 'rna-secondary-structure-formats',
  /** SAM */
  Sam = 'sam',
  /** Sample-Info-Attributes-file */
  SampleInfoAttributesFile = 'sample-info-attributes-file',
  /** SEG */
  Seg = 'seg',
  /** TDF */
  Tdf = 'tdf',
  /** Track Line */
  TrackLine = 'track-line',
  /** Type Line */
  TypeLine = 'type-line',
  /** VCF */
  Vcf = 'vcf',
  /** WIG */
  Wig = 'wig',
}

export const GenomicStudyDataFormatValues = ['bam', 'bed', 'bedpe', 'bedgraph', 'bigbed', 'bigWig', 'birdsuite-files', 'broadpeak', 'cbs', 'chemical-reactivity-probing-profiles', 'chrom-sizes', 'cn', 'custom-file-formats', 'cytoband', 'fasta', 'gct', 'cram', 'genepred', 'gff-gtf', 'gistic', 'goby', 'gwas', 'igv', 'loh', 'maf-multiple-alignment-format', 'maf-mutation-annotation-format', 'merged-bam-file', 'mut', 'narrowpeak', 'psl', 'res', 'rna-secondary-structure-formats', 'sam', 'sample-info-attributes-file', 'seg', 'tdf', 'track-line', 'type-line', 'vcf', 'wig'] as const;
