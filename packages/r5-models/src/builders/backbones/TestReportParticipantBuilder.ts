import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportParticipant } from '../../models/backbones/TestReportParticipant.js';
import type {
  ITestReportParticipant,
  TestReportParticipantTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * TestReportParticipantBuilder - Fluent builder for TestReportParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportParticipant = new TestReportParticipantBuilder()
 *   .setType(value)
 *   .build();
 */
export class TestReportParticipantBuilder extends BackboneElementBuilder<TestReportParticipant, ITestReportParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * test-engine | client | server
   */
  setType(type: TestReportParticipantTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set uri
   * The uri of the participant. An absolute URL is preferred
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  /**
   * Set display
   * The display name of the participant
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportParticipant instance
   */
  build(): TestReportParticipant {
    return new TestReportParticipant(this.data);
  }

  /**
   * Build and validate the TestReportParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportParticipant> {
    const testReportParticipant = this.build();
    await testReportParticipant.validateOrThrow();
    return testReportParticipant;
  }
}
