/**
 * StatisticModelCode
 * 
 * The handling of the variable in statistical analysis for exposures or outcomes.
 *
 * @see http://hl7.org/fhir/ValueSet/statistic-model-code
 */

export type StatisticModelCodeType = 'oneTailedTest' | 'twoTailedTest' | 'zTest' | 'oneSampleTTest' | 'twoSampleTTest' | 'pairedTTest' | 'chiSquareTest' | 'chiSquareTestTrend' | 'pearsonCorrelation' | 'anova' | 'anovaOneWay' | 'anovaTwoWay' | 'anovaTwoWayReplication' | 'manova' | 'anovaThreeWay' | 'signTest' | 'wilcoxonSignedRankTest' | 'wilcoxonRankSumTest' | 'mannWhitneyUTest' | 'fishersExactTest' | 'mcnemarsTest' | 'kruskalWallisTest' | 'spearmanCorrelation' | 'kendallCorrelation' | 'friedmanTest' | 'goodmanKruskasGamma' | 'glm' | 'glmProbit' | 'glmLogit' | 'glmIdentity' | 'glmLog' | 'glmGeneralizedLogit' | 'glmm' | 'glmmProbit' | 'glmmLogit' | 'glmmIdentity' | 'glmmLog' | 'glmmGeneralizedLogit' | 'linearRegression' | 'logisticRegression' | 'polynomialRegression' | 'coxProportionalHazards' | 'binomialDistributionRegression' | 'multinomialDistributionRegression' | 'poissonRegression' | 'negativeBinomialRegression' | 'zeroCellConstant' | 'zeroCellContinuityCorrection' | 'adjusted' | 'interactionTerm' | 'manteHaenszelMethod' | 'metaAnalysis' | 'inverseVariance' | 'petoMethod' | 'hartungKnapp' | 'modifiedHartungKnapp' | 'effectsFixed' | 'effectsRandom' | 'chiSquareTestHomogeneity' | 'dersimonianLairdMethod' | 'pauleMandelMethod' | 'restrictedLikelihood' | 'maximumLikelihood' | 'empiricalBayes' | 'hunterSchmidt' | 'sidikJonkman' | 'hedgesMethod' | 'tauDersimonianLaird' | 'tauPauleMandel' | 'tauRestrictedMaximumLikelihood' | 'tauMaximumLikelihood' | 'tauEmpiricalBayes' | 'tauHunterSchmidt' | 'tauSidikJonkman' | 'tauHedges' | 'poolMantelHaenzsel' | 'poolInverseVariance' | 'poolPeto' | 'poolGeneralizedLinearMixedModel';

export enum StatisticModelCodeEnum {
  /** one-tailed test (1 threshold) */
  Onetailedtest = 'oneTailedTest',
  /** two-tailed test (2 thresholds) */
  Twotailedtest = 'twoTailedTest',
  /** z-test */
  Ztest = 'zTest',
  /** 1-sample t-test */
  Onesamplettest = 'oneSampleTTest',
  /** 2-sample t-test */
  Twosamplettest = 'twoSampleTTest',
  /** paired t-test */
  Pairedttest = 'pairedTTest',
  /** Chi-square test */
  Chisquaretest = 'chiSquareTest',
  /** Chi-square test for trend */
  Chisquaretesttrend = 'chiSquareTestTrend',
  /** Pearson correlation */
  Pearsoncorrelation = 'pearsonCorrelation',
  /** ANOVA (ANalysis Of VAriance) */
  Anova = 'anova',
  /** one-way ANOVA */
  Anovaoneway = 'anovaOneWay',
  /** 2-way ANOVA without replication */
  Anovatwoway = 'anovaTwoWay',
  /** 2-way ANOVA with replication */
  Anovatwowayreplication = 'anovaTwoWayReplication',
  /** multivariate ANOVA (MANOVA) */
  Manova = 'manova',
  /** 3-way ANOVA */
  Anovathreeway = 'anovaThreeWay',
  /** sign test */
  Signtest = 'signTest',
  /** Wilcoxon signed-rank test */
  Wilcoxonsignedranktest = 'wilcoxonSignedRankTest',
  /** Wilcoxon rank-sum test */
  Wilcoxonranksumtest = 'wilcoxonRankSumTest',
  /** Mann-Whitney U test */
  Mannwhitneyutest = 'mannWhitneyUTest',
  /** Fisher’s exact test */
  Fishersexacttest = 'fishersExactTest',
  /** McNemar’s test */
  Mcnemarstest = 'mcnemarsTest',
  /** Kruskal Wallis test */
  Kruskalwallistest = 'kruskalWallisTest',
  /** Spearman correlation */
  Spearmancorrelation = 'spearmanCorrelation',
  /** Kendall correlation */
  Kendallcorrelation = 'kendallCorrelation',
  /** Friedman test */
  Friedmantest = 'friedmanTest',
  /** Goodman Kruska’s Gamma */
  Goodmankruskasgamma = 'goodmanKruskasGamma',
  /** GLM (Generalized Linear Model) */
  Glm = 'glm',
  /** GLM with probit link */
  Glmprobit = 'glmProbit',
  /** GLM with logit link */
  Glmlogit = 'glmLogit',
  /** GLM with identity link */
  Glmidentity = 'glmIdentity',
  /** GLM with log link */
  Glmlog = 'glmLog',
  /** GLM with generalized logit link */
  Glmgeneralizedlogit = 'glmGeneralizedLogit',
  /** Generalized linear mixed model (GLMM) */
  Glmm = 'glmm',
  /** GLMM with probit link */
  Glmmprobit = 'glmmProbit',
  /** GLMM with logit link */
  Glmmlogit = 'glmmLogit',
  /** GLMM with identity link */
  Glmmidentity = 'glmmIdentity',
  /** GLMM with log link */
  Glmmlog = 'glmmLog',
  /** GLMM with generalized logit link */
  Glmmgeneralizedlogit = 'glmmGeneralizedLogit',
  /** Linear Regression */
  Linearregression = 'linearRegression',
  /** Logistic Regression */
  Logisticregression = 'logisticRegression',
  /** Polynomial Regression */
  Polynomialregression = 'polynomialRegression',
  /** Cox Proportional Hazards */
  Coxproportionalhazards = 'coxProportionalHazards',
  /** Binomial Distribution for Regression */
  Binomialdistributionregression = 'binomialDistributionRegression',
  /** Multinomial Distribution for Regression */
  Multinomialdistributionregression = 'multinomialDistributionRegression',
  /** Poisson Regression */
  Poissonregression = 'poissonRegression',
  /** Negative Binomial Regression */
  Negativebinomialregression = 'negativeBinomialRegression',
  /** Zero-cell adjustment with constant */
  Zerocellconstant = 'zeroCellConstant',
  /** Zero-cell adjustment with continuity correction */
  Zerocellcontinuitycorrection = 'zeroCellContinuityCorrection',
  /** Adjusted analysis */
  Adjusted = 'adjusted',
  /** Interaction term */
  Interactionterm = 'interactionTerm',
  /** Mantel-Haenszel method */
  Mantehaenszelmethod = 'manteHaenszelMethod',
  /** Meta-analysis */
  Metaanalysis = 'metaAnalysis',
  /** Inverse variance method */
  Inversevariance = 'inverseVariance',
  /** Peto method */
  Petomethod = 'petoMethod',
  /** Hartung-Knapp adjustment */
  Hartungknapp = 'hartungKnapp',
  /** Modified Hartung-Knapp adjustment */
  Modifiedhartungknapp = 'modifiedHartungKnapp',
  /** Fixed-effects */
  Effectsfixed = 'effectsFixed',
  /** Random-effects */
  Effectsrandom = 'effectsRandom',
  /** Chi-square test for homogeneity */
  Chisquaretesthomogeneity = 'chiSquareTestHomogeneity',
  /** Dersimonian-Laird method */
  Dersimonianlairdmethod = 'dersimonianLairdMethod',
  /** Paule-Mandel method */
  Paulemandelmethod = 'pauleMandelMethod',
  /** Restricted Maximum Likelihood method */
  Restrictedlikelihood = 'restrictedLikelihood',
  /** Maximum Likelihood method */
  Maximumlikelihood = 'maximumLikelihood',
  /** Empirical Bayes method */
  Empiricalbayes = 'empiricalBayes',
  /** Hunter-Schmidt method */
  Hunterschmidt = 'hunterSchmidt',
  /** Sidik-Jonkman method */
  Sidikjonkman = 'sidikJonkman',
  /** Hedges method */
  Hedgesmethod = 'hedgesMethod',
  /** Dersimonian-Laird method */
  Taudersimonianlaird = 'tauDersimonianLaird',
  /** Paule-Mandel method */
  Taupaulemandel = 'tauPauleMandel',
  /** Restricted Maximum Likelihood method */
  Taurestrictedmaximumlikelihood = 'tauRestrictedMaximumLikelihood',
  /** Maximum Likelihood method */
  Taumaximumlikelihood = 'tauMaximumLikelihood',
  /** Empirical Bayes method */
  Tauempiricalbayes = 'tauEmpiricalBayes',
  /** Hunter-Schmidt method */
  Tauhunterschmidt = 'tauHunterSchmidt',
  /** Sidik-Jonkman method */
  Tausidikjonkman = 'tauSidikJonkman',
  /** Hedges method */
  Tauhedges = 'tauHedges',
  /** Mantel-Haenszel method */
  Poolmantelhaenzsel = 'poolMantelHaenzsel',
  /** Inverse variance method */
  Poolinversevariance = 'poolInverseVariance',
  /** Peto method */
  Poolpeto = 'poolPeto',
  /** Generalized linear mixed model (GLMM) */
  Poolgeneralizedlinearmixedmodel = 'poolGeneralizedLinearMixedModel',
}

export const StatisticModelCodeValues = ['oneTailedTest', 'twoTailedTest', 'zTest', 'oneSampleTTest', 'twoSampleTTest', 'pairedTTest', 'chiSquareTest', 'chiSquareTestTrend', 'pearsonCorrelation', 'anova', 'anovaOneWay', 'anovaTwoWay', 'anovaTwoWayReplication', 'manova', 'anovaThreeWay', 'signTest', 'wilcoxonSignedRankTest', 'wilcoxonRankSumTest', 'mannWhitneyUTest', 'fishersExactTest', 'mcnemarsTest', 'kruskalWallisTest', 'spearmanCorrelation', 'kendallCorrelation', 'friedmanTest', 'goodmanKruskasGamma', 'glm', 'glmProbit', 'glmLogit', 'glmIdentity', 'glmLog', 'glmGeneralizedLogit', 'glmm', 'glmmProbit', 'glmmLogit', 'glmmIdentity', 'glmmLog', 'glmmGeneralizedLogit', 'linearRegression', 'logisticRegression', 'polynomialRegression', 'coxProportionalHazards', 'binomialDistributionRegression', 'multinomialDistributionRegression', 'poissonRegression', 'negativeBinomialRegression', 'zeroCellConstant', 'zeroCellContinuityCorrection', 'adjusted', 'interactionTerm', 'manteHaenszelMethod', 'metaAnalysis', 'inverseVariance', 'petoMethod', 'hartungKnapp', 'modifiedHartungKnapp', 'effectsFixed', 'effectsRandom', 'chiSquareTestHomogeneity', 'dersimonianLairdMethod', 'pauleMandelMethod', 'restrictedLikelihood', 'maximumLikelihood', 'empiricalBayes', 'hunterSchmidt', 'sidikJonkman', 'hedgesMethod', 'tauDersimonianLaird', 'tauPauleMandel', 'tauRestrictedMaximumLikelihood', 'tauMaximumLikelihood', 'tauEmpiricalBayes', 'tauHunterSchmidt', 'tauSidikJonkman', 'tauHedges', 'poolMantelHaenzsel', 'poolInverseVariance', 'poolPeto', 'poolGeneralizedLinearMixedModel'] as const;
