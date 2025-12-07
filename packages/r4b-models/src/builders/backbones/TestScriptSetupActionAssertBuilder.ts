import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetupActionAssert } from '../../models/backbones/TestScriptSetupActionAssert.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  AssertionDirectionTypeType,
  AssertionOperatorTypeType,
  AssertionResponseTypesType,
  ITestScriptSetupActionAssert,
  TestScriptRequestMethodCodeType,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptSetupActionAssertBuilder - Fluent builder for TestScriptSetupActionAssert backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetupActionAssert = new TestScriptSetupActionAssertBuilder()
 *   .setLabel(value)
 *   .build();
 */
export class TestScriptSetupActionAssertBuilder extends BackboneElementBuilder<TestScriptSetupActionAssert, ITestScriptSetupActionAssert> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set label
   * Tracking/logging assertion label
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Set description
   * Tracking/reporting assertion description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set direction
   * response | request
   */
  setDirection(direction: AssertionDirectionTypeType): this {
    this.data.direction = direction;
    return this;
  }

  /**
   * Set compareToSourcePath
   * XPath or JSONPath expression to evaluate against the source fixture
   */
  setCompareToSourcePath(compareToSourcePath: string): this {
    this.data.compareToSourcePath = compareToSourcePath;
    return this;
  }

  /**
   * Set contentType
   * Mime type to compare against the 'Content-Type' header
   */
  setContentType(contentType: string): this {
    this.data.contentType = contentType;
    return this;
  }

  /**
   * Set expression
   * The FHIRPath expression to be evaluated
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set headerField
   * HTTP header field name
   */
  setHeaderField(headerField: string): this {
    this.data.headerField = headerField;
    return this;
  }

  /**
   * Set minimumId
   * Fixture Id of minimum content resource
   */
  setMinimumId(minimumId: string): this {
    this.data.minimumId = minimumId;
    return this;
  }

  /**
   * Set navigationLinks
   * Perform validation on navigation links?
   */
  setNavigationLinks(navigationLinks: boolean): this {
    this.data.navigationLinks = navigationLinks;
    return this;
  }

  /**
   * Set operator
   * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval
   */
  setOperator(operator: AssertionOperatorTypeType): this {
    this.data.operator = operator;
    return this;
  }

  /**
   * Set path
   * XPath or JSONPath expression
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set requestMethod
   * delete | get | options | patch | post | put | head
   */
  setRequestMethod(requestMethod: TestScriptRequestMethodCodeType): this {
    this.data.requestMethod = requestMethod;
    return this;
  }

  /**
   * Set requestURL
   * Request URL comparison value
   */
  setRequestURL(requestURL: string): this {
    this.data.requestURL = requestURL;
    return this;
  }

  /**
   * Set resource
   * Resource type
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set response
   * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
   */
  setResponse(response: AssertionResponseTypesType): this {
    this.data.response = response;
    return this;
  }

  /**
   * Set responseCode
   * HTTP response code to test
   */
  setResponseCode(responseCode: string): this {
    this.data.responseCode = responseCode;
    return this;
  }

  /**
   * Set sourceId
   * Fixture Id of source expression or headerField
   */
  setSourceId(sourceId: string): this {
    this.data.sourceId = sourceId;
    return this;
  }

  /**
   * Set validateProfileId
   * Profile Id of validation profile reference
   */
  setValidateProfileId(validateProfileId: string): this {
    this.data.validateProfileId = validateProfileId;
    return this;
  }

  /**
   * Set value
   * The value to compare to
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set warningOnly
   * Will this assert produce a warning only on error?
   */
  setWarningOnly(warningOnly: boolean): this {
    this.data.warningOnly = warningOnly;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set compareToSource choice type
   * @param type - 'Id' | 'Expression'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCompareToSource('Id', value)
   */
  setCompareToSource<T extends 'Id' | 'Expression'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `compareToSource${type}` as keyof ITestScriptSetupActionAssert;
    const otherKeys: (keyof ITestScriptSetupActionAssert)[] = [];
    if (type !== 'Id') {
      otherKeys.push('compareToSourceId' as keyof ITestScriptSetupActionAssert);
      otherKeys.push('_compareToSourceId' as keyof ITestScriptSetupActionAssert);
    }
    if (type !== 'Expression') {
      otherKeys.push('compareToSourceExpression' as keyof ITestScriptSetupActionAssert);
      otherKeys.push('_compareToSourceExpression' as keyof ITestScriptSetupActionAssert);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetupActionAssert instance
   */
  build(): TestScriptSetupActionAssert {
    return new TestScriptSetupActionAssert(this.data);
  }

  /**
   * Build and validate the TestScriptSetupActionAssert instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetupActionAssert> {
    const testScriptSetupActionAssert = this.build();
    await testScriptSetupActionAssert.validateOrThrow();
    return testScriptSetupActionAssert;
  }
}
