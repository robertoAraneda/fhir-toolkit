import type {
  IHumanName,
  IAddress,
  IContactPoint,
  ICoding,
  ICodeableConcept,
  IQuantity,
  IPeriod,
  IReference,
  IRange,
  IRatio,
  IMoney,
  IAnnotation,
  IIdentifier,
} from '@fhir-toolkit/r4-types';
import { formatHumanName } from './format-human-name.js';
import { formatAddress } from './format-address.js';
import { formatContactPoint } from './format-contact-point.js';
import { formatCoding } from './format-coding.js';
import { formatCodeableConcept } from './format-codeable-concept.js';
import { formatQuantity } from './format-quantity.js';
import { formatPeriod } from './format-period.js';
import { formatReference } from './format-reference.js';
import { formatRange } from './format-range.js';
import { formatRatio } from './format-ratio.js';
import { formatMoney } from './format-money.js';
import { formatAnnotation } from './format-annotation.js';

export function formatFhirValue(value: unknown, type: string): string {
  if (value === null || value === undefined) return '';

  switch (type) {
    case 'HumanName':
      return formatHumanName(value as IHumanName);
    case 'Address':
      return formatAddress(value as IAddress);
    case 'ContactPoint':
      return formatContactPoint(value as IContactPoint);
    case 'Coding':
      return formatCoding(value as ICoding);
    case 'CodeableConcept':
      return formatCodeableConcept(value as ICodeableConcept);
    case 'Quantity':
    case 'Age':
    case 'Duration':
    case 'SimpleQuantity':
    case 'MoneyQuantity':
      return formatQuantity(value as IQuantity);
    case 'Period':
      return formatPeriod(value as IPeriod);
    case 'Reference':
      return formatReference(value as IReference);
    case 'Range':
      return formatRange(value as IRange);
    case 'Ratio':
      return formatRatio(value as IRatio);
    case 'Money':
      return formatMoney(value as IMoney);
    case 'Annotation':
      return formatAnnotation(value as IAnnotation);
    case 'Identifier':
      return (value as IIdentifier).value ?? '';
    case 'string':
    case 'uri':
    case 'url':
    case 'canonical':
    case 'id':
    case 'code':
    case 'markdown':
    case 'date':
    case 'dateTime':
    case 'instant':
    case 'time':
      return String(value);
    case 'boolean':
      return value ? 'Yes' : 'No';
    case 'integer':
    case 'decimal':
    case 'positiveInt':
    case 'unsignedInt':
      return String(value);
    default:
      return typeof value === 'object' ? JSON.stringify(value) : String(value);
  }
}
