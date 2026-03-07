import type { IReference } from '@fhir-toolkit/r4-types';

export function formatReference(ref: IReference): string {
  if (ref.display) return ref.display;
  if (ref.reference) return ref.reference;
  if (ref.identifier?.value) return ref.identifier.value;
  return '';
}
