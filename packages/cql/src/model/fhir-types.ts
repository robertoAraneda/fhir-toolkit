import type { StaticModelInfo } from './model-info.js';

const e = (name: string, type: string, isList = false, isChoice = false, choiceTypes: string[] = []) =>
  ({ name, type, isList, isChoice, choiceTypes });

/**
 * Register all FHIR primitive types. Each has a single `value` element
 * mapping to its CQL System type equivalent.
 */
export function registerFhirPrimitiveTypes(mi: StaticModelInfo): void {
  const primitives: [string, string][] = [
    ['boolean', 'System.Boolean'],
    ['integer', 'System.Integer'],
    ['decimal', 'System.Decimal'],
    ['string', 'System.String'],
    ['date', 'System.Date'],
    ['dateTime', 'System.DateTime'],
    ['time', 'System.Time'],
    ['instant', 'System.DateTime'],
    ['uri', 'System.String'],
    ['url', 'System.String'],
    ['canonical', 'System.String'],
    ['code', 'System.String'],
    ['id', 'System.String'],
    ['oid', 'System.String'],
    ['uuid', 'System.String'],
    ['markdown', 'System.String'],
    ['base64Binary', 'System.String'],
    ['unsignedInt', 'System.Integer'],
    ['positiveInt', 'System.Integer'],
    ['xhtml', 'System.String'],
  ];

  for (const [name, systemType] of primitives) {
    mi.addType({
      name,
      namespace: 'FHIR',
      baseName: 'FHIR.Element',
      primaryKey: '',
      elements: [e('value', systemType)],
    });
  }
}

/**
 * Register FHIR complex data types (Quantity, Coding, CodeableConcept, etc.)
 * shared across R4, R4B, and R5.
 */
export function registerFhirComplexTypes(mi: StaticModelInfo): void {
  mi.addType({
    name: 'Quantity', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('value', 'FHIR.decimal'), e('comparator', 'FHIR.code'),
      e('unit', 'FHIR.string'), e('system', 'FHIR.uri'), e('code', 'FHIR.code'),
    ],
  });

  for (const name of ['Age', 'Count', 'Distance', 'Duration', 'SimpleQuantity', 'MoneyQuantity']) {
    mi.addType({
      name, namespace: 'FHIR', baseName: 'FHIR.Quantity', primaryKey: '',
      elements: [
        e('value', 'FHIR.decimal'), e('comparator', 'FHIR.code'),
        e('unit', 'FHIR.string'), e('system', 'FHIR.uri'), e('code', 'FHIR.code'),
      ],
    });
  }

  mi.addType({
    name: 'Coding', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('system', 'FHIR.uri'), e('version', 'FHIR.string'),
      e('code', 'FHIR.code'), e('display', 'FHIR.string'),
      e('userSelected', 'FHIR.boolean'),
    ],
  });

  mi.addType({
    name: 'CodeableConcept', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('coding', 'FHIR.Coding', true), e('text', 'FHIR.string')],
  });

  mi.addType({
    name: 'Period', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('start', 'FHIR.dateTime'), e('end', 'FHIR.dateTime')],
  });

  mi.addType({
    name: 'Range', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('low', 'FHIR.Quantity'), e('high', 'FHIR.Quantity')],
  });

  mi.addType({
    name: 'Ratio', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('numerator', 'FHIR.Quantity'), e('denominator', 'FHIR.Quantity')],
  });

  mi.addType({
    name: 'HumanName', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('use', 'FHIR.code'), e('text', 'FHIR.string'), e('family', 'FHIR.string'),
      e('given', 'FHIR.string', true), e('prefix', 'FHIR.string', true),
      e('suffix', 'FHIR.string', true), e('period', 'FHIR.Period'),
    ],
  });

  mi.addType({
    name: 'Address', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('use', 'FHIR.code'), e('type', 'FHIR.code'), e('text', 'FHIR.string'),
      e('line', 'FHIR.string', true), e('city', 'FHIR.string'),
      e('district', 'FHIR.string'), e('state', 'FHIR.string'),
      e('postalCode', 'FHIR.string'), e('country', 'FHIR.string'),
      e('period', 'FHIR.Period'),
    ],
  });

  mi.addType({
    name: 'ContactPoint', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('system', 'FHIR.code'), e('value', 'FHIR.string'), e('use', 'FHIR.code'),
      e('rank', 'FHIR.positiveInt'), e('period', 'FHIR.Period'),
    ],
  });

  mi.addType({
    name: 'Reference', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('reference', 'FHIR.string'), e('type', 'FHIR.uri'),
      e('identifier', 'FHIR.Identifier'), e('display', 'FHIR.string'),
    ],
  });

  mi.addType({
    name: 'Identifier', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('use', 'FHIR.code'), e('type', 'FHIR.CodeableConcept'),
      e('system', 'FHIR.uri'), e('value', 'FHIR.string'),
      e('period', 'FHIR.Period'), e('assigner', 'FHIR.Reference'),
    ],
  });

  mi.addType({
    name: 'Attachment', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('contentType', 'FHIR.code'), e('language', 'FHIR.code'),
      e('data', 'FHIR.base64Binary'), e('url', 'FHIR.url'),
      e('size', 'FHIR.unsignedInt'), e('hash', 'FHIR.base64Binary'),
      e('title', 'FHIR.string'), e('creation', 'FHIR.dateTime'),
    ],
  });

  mi.addType({
    name: 'Annotation', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('author', '', false, true, ['FHIR.Reference', 'FHIR.string']),
      e('time', 'FHIR.dateTime'), e('text', 'FHIR.markdown'),
    ],
  });

  mi.addType({
    name: 'SampledData', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [
      e('origin', 'FHIR.Quantity'), e('period', 'FHIR.decimal'),
      e('factor', 'FHIR.decimal'), e('lowerLimit', 'FHIR.decimal'),
      e('upperLimit', 'FHIR.decimal'), e('dimensions', 'FHIR.positiveInt'),
      e('data', 'FHIR.string'),
    ],
  });

  mi.addType({
    name: 'Timing', namespace: 'FHIR', baseName: 'FHIR.BackboneElement', primaryKey: '',
    elements: [e('event', 'FHIR.dateTime', true), e('code', 'FHIR.CodeableConcept')],
  });

  mi.addType({
    name: 'Money', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('value', 'FHIR.decimal'), e('currency', 'FHIR.code')],
  });

  mi.addType({
    name: 'CodeableReference', namespace: 'FHIR', baseName: 'FHIR.Element', primaryKey: '',
    elements: [e('concept', 'FHIR.CodeableConcept'), e('reference', 'FHIR.Reference')],
  });
}
