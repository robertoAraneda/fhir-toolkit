import type { IBackboneElement, ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IContributor } from '../datatypes/IContributor.js';
import type { ICount } from '../datatypes/ICount.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDistance } from '../datatypes/IDistance.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMeta } from '../datatypes/IMeta.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IParameterDefinition } from '../datatypes/IParameterDefinition.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ISampledData } from '../datatypes/ISampledData.js';
import type { ISignature } from '../datatypes/ISignature.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ITriggerDefinition } from '../datatypes/ITriggerDefinition.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { StructureMapSourceListModeType } from '../../valuesets/index.js';

/**
 * StructureMapGroupRuleSource Interface
 * 
 * Source inputs to the mapping
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuremapgrouprulesource.html
 */
export interface IStructureMapGroupRuleSource extends IBackboneElement {
  /**
   * Type or variable this rule applies to
   */
  context: string;
  /**
   * Extension for context
   */
  _context?: IElement;

  /**
   * Specified minimum cardinality
   */
  min?: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Specified maximum cardinality (number or *)
   */
  max?: string;
  /**
   * Extension for max
   */
  _max?: IElement;

  /**
   * Rule only applies if source has this type
   */
  type?: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueBase64Binary?: string;
  /**
   * Extension for defaultValueBase64Binary
   */
  _defaultValueBase64Binary?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueBoolean?: boolean;
  /**
   * Extension for defaultValueBoolean
   */
  _defaultValueBoolean?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueCanonical?: string;
  /**
   * Extension for defaultValueCanonical
   */
  _defaultValueCanonical?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueCode?: string;
  /**
   * Extension for defaultValueCode
   */
  _defaultValueCode?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueDate?: string;
  /**
   * Extension for defaultValueDate
   */
  _defaultValueDate?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueDateTime?: string;
  /**
   * Extension for defaultValueDateTime
   */
  _defaultValueDateTime?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueDecimal?: number;
  /**
   * Extension for defaultValueDecimal
   */
  _defaultValueDecimal?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueId?: string;
  /**
   * Extension for defaultValueId
   */
  _defaultValueId?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueInstant?: string;
  /**
   * Extension for defaultValueInstant
   */
  _defaultValueInstant?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueInteger?: number;
  /**
   * Extension for defaultValueInteger
   */
  _defaultValueInteger?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueMarkdown?: string;
  /**
   * Extension for defaultValueMarkdown
   */
  _defaultValueMarkdown?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueOid?: string;
  /**
   * Extension for defaultValueOid
   */
  _defaultValueOid?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValuePositiveInt?: number;
  /**
   * Extension for defaultValuePositiveInt
   */
  _defaultValuePositiveInt?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueString?: string;
  /**
   * Extension for defaultValueString
   */
  _defaultValueString?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueTime?: string;
  /**
   * Extension for defaultValueTime
   */
  _defaultValueTime?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueUnsignedInt?: number;
  /**
   * Extension for defaultValueUnsignedInt
   */
  _defaultValueUnsignedInt?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueUri?: string;
  /**
   * Extension for defaultValueUri
   */
  _defaultValueUri?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueUrl?: string;
  /**
   * Extension for defaultValueUrl
   */
  _defaultValueUrl?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueUuid?: string;
  /**
   * Extension for defaultValueUuid
   */
  _defaultValueUuid?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValueAddress?: IAddress;

  /**
   * Default value if no value exists
   */
  defaultValueAge?: IAge;

  /**
   * Default value if no value exists
   */
  defaultValueAnnotation?: IAnnotation;

  /**
   * Default value if no value exists
   */
  defaultValueAttachment?: IAttachment;

  /**
   * Default value if no value exists
   */
  defaultValueCodeableConcept?: ICodeableConcept;

  /**
   * Default value if no value exists
   */
  defaultValueCoding?: ICoding;

  /**
   * Default value if no value exists
   */
  defaultValueContactPoint?: IContactPoint;

  /**
   * Default value if no value exists
   */
  defaultValueCount?: ICount;

  /**
   * Default value if no value exists
   */
  defaultValueDistance?: IDistance;

  /**
   * Default value if no value exists
   */
  defaultValueDuration?: IDuration;

  /**
   * Default value if no value exists
   */
  defaultValueHumanName?: IHumanName;

  /**
   * Default value if no value exists
   */
  defaultValueIdentifier?: IIdentifier;

  /**
   * Default value if no value exists
   */
  defaultValueMoney?: IMoney;

  /**
   * Default value if no value exists
   */
  defaultValuePeriod?: IPeriod;

  /**
   * Default value if no value exists
   */
  defaultValueQuantity?: IQuantity;

  /**
   * Default value if no value exists
   */
  defaultValueRange?: IRange;

  /**
   * Default value if no value exists
   */
  defaultValueRatio?: IRatio;

  /**
   * Default value if no value exists
   */
  defaultValueReference?: IReference;

  /**
   * Default value if no value exists
   */
  defaultValueSampledData?: ISampledData;

  /**
   * Default value if no value exists
   */
  defaultValueSignature?: ISignature;

  /**
   * Default value if no value exists
   */
  defaultValueTiming?: ITiming;

  /**
   * Default value if no value exists
   */
  defaultValueContactDetail?: IContactDetail;

  /**
   * Default value if no value exists
   */
  defaultValueContributor?: IContributor;

  /**
   * Default value if no value exists
   */
  defaultValueDataRequirement?: IDataRequirement;

  /**
   * Default value if no value exists
   */
  defaultValueExpression?: IExpression;

  /**
   * Default value if no value exists
   */
  defaultValueParameterDefinition?: IParameterDefinition;

  /**
   * Default value if no value exists
   */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /**
   * Default value if no value exists
   */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /**
   * Default value if no value exists
   */
  defaultValueUsageContext?: IUsageContext;

  /**
   * Default value if no value exists
   */
  defaultValueDosage?: IDosage;

  /**
   * Default value if no value exists
   */
  defaultValueMeta?: IMeta;

  /**
   * Optional field for this source
   */
  element?: string;
  /**
   * Extension for element
   */
  _element?: IElement;

  /**
   * first | not_first | last | not_last | only_one
   */
  listMode?: StructureMapSourceListModeType;
  /**
   * Extension for listMode
   */
  _listMode?: IElement;

  /**
   * Named context for field, if a field is specified
   */
  variable?: string;
  /**
   * Extension for variable
   */
  _variable?: IElement;

  /**
   * FHIRPath expression  - must be true or the rule does not apply
   */
  condition?: string;
  /**
   * Extension for condition
   */
  _condition?: IElement;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
   */
  check?: string;
  /**
   * Extension for check
   */
  _check?: IElement;

  /**
   * Message to put in log if source exists (FHIRPath)
   */
  logMessage?: string;
  /**
   * Extension for logMessage
   */
  _logMessage?: IElement;

}
