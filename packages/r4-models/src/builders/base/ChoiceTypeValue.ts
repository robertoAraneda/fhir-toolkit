/**
 * ChoiceTypeValue - Type helper for FHIR choice type methods
 *
 * Maps FHIR type suffixes (e.g., 'Quantity', 'Boolean', 'Period') to their
 * corresponding TypeScript types. Used by generated builder methods like
 * setValue(), setEffective(), setDeceased(), etc.
 */

import type {
  IQuantity,
  IRange,
  IPeriod,
  IRatio,
  IReference,
  ICodeableConcept,
  ICoding,
  IIdentifier,
  IAge,
  IDuration,
  IDistance,
  ICount,
  IMoney,
  IAnnotation,
  IAttachment,
  IAddress,
  IContactPoint,
  IHumanName,
  ISampledData,
  ISignature,
  ITiming,
  IDosage,
  IContactDetail,
  IContributor,
  IDataRequirement,
  IExpression,
  IParameterDefinition,
  IRelatedArtifact,
  ITriggerDefinition,
  IUsageContext,
  IMeta,
} from '@fhir-toolkit/r4-types';

/**
 * Maps FHIR choice type suffixes to their TypeScript types.
 * Primitives map to native TS types, complex types map to interfaces.
 */
export type ChoiceTypeValue<T extends string> =
  // Primitives
  T extends 'Boolean' ? boolean :
  T extends 'Integer' ? number :
  T extends 'Decimal' ? number :
  T extends 'String' ? string :
  T extends 'DateTime' ? string :
  T extends 'Date' ? string :
  T extends 'Time' ? string :
  T extends 'Instant' ? string :
  T extends 'Uri' ? string :
  T extends 'Url' ? string :
  T extends 'Canonical' ? string :
  T extends 'Code' ? string :
  T extends 'Oid' ? string :
  T extends 'Id' ? string :
  T extends 'Markdown' ? string :
  T extends 'Base64Binary' ? string :
  T extends 'UnsignedInt' ? number :
  T extends 'PositiveInt' ? number :
  // Complex types
  T extends 'Quantity' ? IQuantity :
  T extends 'Range' ? IRange :
  T extends 'Period' ? IPeriod :
  T extends 'Ratio' ? IRatio :
  T extends 'Reference' ? IReference :
  T extends 'CodeableConcept' ? ICodeableConcept :
  T extends 'Coding' ? ICoding :
  T extends 'Identifier' ? IIdentifier :
  T extends 'Age' ? IAge :
  T extends 'Duration' ? IDuration :
  T extends 'Distance' ? IDistance :
  T extends 'Count' ? ICount :
  T extends 'Money' ? IMoney :
  T extends 'Annotation' ? IAnnotation :
  T extends 'Attachment' ? IAttachment :
  T extends 'Address' ? IAddress :
  T extends 'ContactPoint' ? IContactPoint :
  T extends 'HumanName' ? IHumanName :
  T extends 'SampledData' ? ISampledData :
  T extends 'Signature' ? ISignature :
  T extends 'Timing' ? ITiming :
  T extends 'Dosage' ? IDosage :
  T extends 'ContactDetail' ? IContactDetail :
  T extends 'Contributor' ? IContributor :
  T extends 'DataRequirement' ? IDataRequirement :
  T extends 'Expression' ? IExpression :
  T extends 'ParameterDefinition' ? IParameterDefinition :
  T extends 'RelatedArtifact' ? IRelatedArtifact :
  T extends 'TriggerDefinition' ? ITriggerDefinition :
  T extends 'UsageContext' ? IUsageContext :
  T extends 'Meta' ? IMeta :
  // Fallback - should never reach here if all types are covered
  unknown;
