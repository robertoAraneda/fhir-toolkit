/**
 * Test Script Request Method Code
 * 
 * The allowable request method or HTTP operation codes.
 *
 * @see http://hl7.org/fhir/ValueSet/http-operations
 */

export type TestScriptRequestMethodCodeType = 'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head';

export enum TestScriptRequestMethodCodeEnum {
  /** DELETE */
  Delete = 'delete',
  /** GET */
  Get = 'get',
  /** OPTIONS */
  Options = 'options',
  /** PATCH */
  Patch = 'patch',
  /** POST */
  Post = 'post',
  /** PUT */
  Put = 'put',
  /** HEAD */
  Head = 'head',
}

export const TestScriptRequestMethodCodeValues = ['delete', 'get', 'options', 'patch', 'post', 'put', 'head'] as const;
