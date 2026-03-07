import type { IAddress } from '@fhir-toolkit/r4-types';

export interface FormatAddressOptions {
  /** Separator between parts. Default: ', ' */
  separator?: string;
}

export function formatAddress(
  address: IAddress,
  options?: FormatAddressOptions,
): string {
  if (address.text) return address.text;

  const sep = options?.separator ?? ', ';
  const parts: string[] = [];

  if (address.line?.length) {
    parts.push(address.line.join(sep));
  }
  if (address.city) parts.push(address.city);
  if (address.state) parts.push(address.state);
  if (address.postalCode) parts.push(address.postalCode);
  if (address.country) parts.push(address.country);

  return parts.join(sep).trim();
}
