import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstance } from '../../models/backbones/ExampleScenarioInstance.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IExampleScenarioInstance,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioInstanceVersion,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioInstanceBuilder - Fluent builder for ExampleScenarioInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstance = new ExampleScenarioInstanceBuilder()
 *   .setKey(value)
 *   .addVersion({ ... })
 *   .build();
 */
export class ExampleScenarioInstanceBuilder extends BackboneElementBuilder<ExampleScenarioInstance, IExampleScenarioInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set key
   * ID or acronym of the instance
   */
  setKey(key: string): this {
    this.data.key = key;
    return this;
  }

  /**
   * Set structureType
   * Data structure for example
   */
  setStructureType(structureType: ICoding): this {
    this.data.structureType = structureType;
    return this;
  }

  /**
   * Set structureVersion
   * E.g. 4.0.1
   */
  setStructureVersion(structureVersion: string): this {
    this.data.structureVersion = structureVersion;
    return this;
  }

  /**
   * Set title
   * Label for instance
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Human-friendly description of the instance
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set content
   * Example instance data
   */
  setContent(content: IReference): this {
    this.data.content = content;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set structureProfile choice type (structureProfileCanonical, structureProfileUri)
   * @param type - 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStructureProfile('Canonical', value)
   */
  setStructureProfile<T extends 'Canonical' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `structureProfile${type}` as keyof IExampleScenarioInstance;
    const otherKeys: (keyof IExampleScenarioInstance)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('structureProfileCanonical' as keyof IExampleScenarioInstance);
      otherKeys.push('_structureProfileCanonical' as keyof IExampleScenarioInstance);
    }
    if (type !== 'Uri') {
      otherKeys.push('structureProfileUri' as keyof IExampleScenarioInstance);
      otherKeys.push('_structureProfileUri' as keyof IExampleScenarioInstance);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add version
   * Snapshot of instance that changes
   */
  addVersion(version: IExampleScenarioInstanceVersion): this {
    return this.addToArray('version', version);
  }

  /**
   * Add containedInstance
   * Resources contained in the instance
   */
  addContainedInstance(containedInstance: IExampleScenarioInstanceContainedInstance): this {
    return this.addToArray('containedInstance', containedInstance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioInstance instance
   */
  build(): ExampleScenarioInstance {
    return new ExampleScenarioInstance(this.data);
  }

  /**
   * Build and validate the ExampleScenarioInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioInstance> {
    const exampleScenarioInstance = this.build();
    await exampleScenarioInstance.validateOrThrow();
    return exampleScenarioInstance;
  }
}
