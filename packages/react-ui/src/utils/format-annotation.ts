import type { IAnnotation } from '@fhir-toolkit/r4-types';

export function formatAnnotation(annotation: IAnnotation): string {
  return annotation.text;
}
