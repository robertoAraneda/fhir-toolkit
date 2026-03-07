import type { IHumanName } from '@fhir-toolkit/r4-types';

export function getOfficialName(names: IHumanName[]): IHumanName | null {
  return names.find((n) => n.use === 'official') ?? names[0] ?? null;
}
