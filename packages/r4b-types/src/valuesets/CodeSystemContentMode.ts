/**
 * CodeSystemContentMode
 * 
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 *
 * @see http://hl7.org/fhir/ValueSet/codesystem-content-mode
 */

export type CodeSystemContentModeType = 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';

export enum CodeSystemContentModeEnum {
  /** Not Present */
  NotPresent = 'not-present',
  /** Example */
  Example = 'example',
  /** Fragment */
  Fragment = 'fragment',
  /** Complete */
  Complete = 'complete',
  /** Supplement */
  Supplement = 'supplement',
}

export const CodeSystemContentModeValues = ['not-present', 'example', 'fragment', 'complete', 'supplement'] as const;
