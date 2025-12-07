/**
 * Element Definition Types
 * 
 * Allowed types for FHIR elements in ElementDefinition.type.code
 *
 * @see http://hl7.org/fhir/ValueSet/elementdefinition-types
 */

export type ElementDefinitionTypesType = 'http://hl7.org/fhirpath/System.String' | 'http://hl7.org/fhirpath/System.Boolean' | 'http://hl7.org/fhirpath/System.Date' | 'http://hl7.org/fhirpath/System.DateTime' | 'http://hl7.org/fhirpath/System.Decimal' | 'http://hl7.org/fhirpath/System.Integer' | 'http://hl7.org/fhirpath/System.Time';

export enum ElementDefinitionTypesEnum {
  /** String */
  HttpHl7OrgFhirpathSystemString = 'http://hl7.org/fhirpath/System.String',
  /** Boolean */
  HttpHl7OrgFhirpathSystemBoolean = 'http://hl7.org/fhirpath/System.Boolean',
  /** Date */
  HttpHl7OrgFhirpathSystemDate = 'http://hl7.org/fhirpath/System.Date',
  /** DateTime */
  HttpHl7OrgFhirpathSystemDatetime = 'http://hl7.org/fhirpath/System.DateTime',
  /** Decimal */
  HttpHl7OrgFhirpathSystemDecimal = 'http://hl7.org/fhirpath/System.Decimal',
  /** Integer */
  HttpHl7OrgFhirpathSystemInteger = 'http://hl7.org/fhirpath/System.Integer',
  /** Time */
  HttpHl7OrgFhirpathSystemTime = 'http://hl7.org/fhirpath/System.Time',
}

export const ElementDefinitionTypesValues = ['http://hl7.org/fhirpath/System.String', 'http://hl7.org/fhirpath/System.Boolean', 'http://hl7.org/fhirpath/System.Date', 'http://hl7.org/fhirpath/System.DateTime', 'http://hl7.org/fhirpath/System.Decimal', 'http://hl7.org/fhirpath/System.Integer', 'http://hl7.org/fhirpath/System.Time'] as const;
