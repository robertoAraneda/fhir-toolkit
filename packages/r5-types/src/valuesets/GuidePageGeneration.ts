/**
 * Guide Page Generation
 * 
 * A code that indicates how the page is generated.
 *
 * @see http://hl7.org/fhir/ValueSet/guide-page-generation
 */

export type GuidePageGenerationType = 'html' | 'markdown' | 'xml' | 'generated';

export enum GuidePageGenerationEnum {
  /** HTML */
  Html = 'html',
  /** Markdown */
  Markdown = 'markdown',
  /** XML */
  Xml = 'xml',
  /** Generated */
  Generated = 'generated',
}

export const GuidePageGenerationValues = ['html', 'markdown', 'xml', 'generated'] as const;
