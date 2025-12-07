import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequirementsStatement } from '../../models/backbones/RequirementsStatement.js';
import type {
  ConformanceExpectationType,
  IReference,
  IRequirementsStatement,
} from '@fhir-toolkit/r5-types';

/**
 * RequirementsStatementBuilder - Fluent builder for RequirementsStatement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requirementsStatement = new RequirementsStatementBuilder()
 *   .setKey(value)
 *   .addConformance({ ... })
 *   .build();
 */
export class RequirementsStatementBuilder extends BackboneElementBuilder<RequirementsStatement, IRequirementsStatement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set key
   * Key that identifies this statement
   */
  setKey(key: string): this {
    this.data.key = key;
    return this;
  }

  /**
   * Set label
   * Short Human label for this statement
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Set conditionality
   * Set to true if requirements statement is conditional
   */
  setConditionality(conditionality: boolean): this {
    this.data.conditionality = conditionality;
    return this;
  }

  /**
   * Set requirement
   * The actual requirement
   */
  setRequirement(requirement: string): this {
    this.data.requirement = requirement;
    return this;
  }

  /**
   * Set derivedFrom
   * Another statement this clarifies/restricts ([url#]key)
   */
  setDerivedFrom(derivedFrom: string): this {
    this.data.derivedFrom = derivedFrom;
    return this;
  }

  /**
   * Set parent
   * A larger requirement that this requirement helps to refine and enable
   */
  setParent(parent: string): this {
    this.data.parent = parent;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add conformance
   * SHALL | SHOULD | MAY | SHOULD-NOT
   */
  addConformance(conformance: ConformanceExpectationType): this {
    return this.addToArray('conformance', conformance);
  }

  /**
   * Add satisfiedBy
   * Design artifact that satisfies this requirement
   */
  addSatisfiedBy(satisfiedBy: string): this {
    return this.addToArray('satisfiedBy', satisfiedBy);
  }

  /**
   * Add reference
   * External artifact (rule/document etc. that) created this requirement
   */
  addReference(reference: string): this {
    return this.addToArray('reference', reference);
  }

  /**
   * Add source
   * Who asked for this statement
   */
  addSource(source: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequirementsStatement instance
   */
  build(): RequirementsStatement {
    return new RequirementsStatement(this.data);
  }

  /**
   * Build and validate the RequirementsStatement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequirementsStatement> {
    const requirementsStatement = this.build();
    await requirementsStatement.validateOrThrow();
    return requirementsStatement;
  }
}
