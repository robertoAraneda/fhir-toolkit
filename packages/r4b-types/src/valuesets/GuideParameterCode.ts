/**
 * GuideParameterCode
 * 
 * Code of parameter that is input to the guide.
 *
 * @see http://hl7.org/fhir/ValueSet/guide-parameter-code
 */

export type GuideParameterCodeType = 'apply' | 'path-resource' | 'path-pages' | 'path-tx-cache' | 'expansion-parameter' | 'rule-broken-links' | 'generate-xml' | 'generate-json' | 'generate-turtle' | 'html-template';

export enum GuideParameterCodeEnum {
  /** Apply Metadata Value */
  Apply = 'apply',
  /** Resource Path */
  PathResource = 'path-resource',
  /** Pages Path */
  PathPages = 'path-pages',
  /** Terminology Cache Path */
  PathTxCache = 'path-tx-cache',
  /** Expansion Profile */
  ExpansionParameter = 'expansion-parameter',
  /** Broken Links Rule */
  RuleBrokenLinks = 'rule-broken-links',
  /** Generate XML */
  GenerateXml = 'generate-xml',
  /** Generate JSON */
  GenerateJson = 'generate-json',
  /** Generate Turtle */
  GenerateTurtle = 'generate-turtle',
  /** HTML Template */
  HtmlTemplate = 'html-template',
}

export const GuideParameterCodeValues = ['apply', 'path-resource', 'path-pages', 'path-tx-cache', 'expansion-parameter', 'rule-broken-links', 'generate-xml', 'generate-json', 'generate-turtle', 'html-template'] as const;
