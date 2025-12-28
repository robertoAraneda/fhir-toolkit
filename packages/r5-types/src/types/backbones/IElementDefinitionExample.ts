import type { ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IAvailability } from '../datatypes/IAvailability.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { ICount } from '../datatypes/ICount.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDistance } from '../datatypes/IDistance.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IExtendedContactDetail } from '../datatypes/IExtendedContactDetail.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMeta } from '../datatypes/IMeta.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IParameterDefinition } from '../datatypes/IParameterDefinition.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IRatioRange } from '../datatypes/IRatioRange.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ISampledData } from '../datatypes/ISampledData.js';
import type { ISignature } from '../datatypes/ISignature.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ITriggerDefinition } from '../datatypes/ITriggerDefinition.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';

/**
 * ElementDefinitionExample Interface
 * 
 * Example value (as defined for type)
 * 
 *
 * @see https://hl7.org/fhir/R5/elementdefinitionexample.html
 */
export interface IElementDefinitionExample extends IElement {
  /**
   * Describes the purpose of this example
   */
  label: string;
  /**
   * Extension for label
   */
  _label?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueInteger64?: string;
  /**
   * Extension for valueInteger64
   */
  _valueInteger64?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Value of Example (one of allowed types)
   */
  valueAddress?: IAddress;

  /**
   * Value of Example (one of allowed types)
   */
  valueAge?: IAge;

  /**
   * Value of Example (one of allowed types)
   */
  valueAnnotation?: IAnnotation;

  /**
   * Value of Example (one of allowed types)
   */
  valueAttachment?: IAttachment;

  /**
   * Value of Example (one of allowed types)
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of Example (one of allowed types)
   */
  valueCodeableReference?: ICodeableReference;

  /**
   * Value of Example (one of allowed types)
   */
  valueCoding?: ICoding;

  /**
   * Value of Example (one of allowed types)
   */
  valueContactPoint?: IContactPoint;

  /**
   * Value of Example (one of allowed types)
   */
  valueCount?: ICount;

  /**
   * Value of Example (one of allowed types)
   */
  valueDistance?: IDistance;

  /**
   * Value of Example (one of allowed types)
   */
  valueDuration?: IDuration;

  /**
   * Value of Example (one of allowed types)
   */
  valueHumanName?: IHumanName;

  /**
   * Value of Example (one of allowed types)
   */
  valueIdentifier?: IIdentifier;

  /**
   * Value of Example (one of allowed types)
   */
  valueMoney?: IMoney;

  /**
   * Value of Example (one of allowed types)
   */
  valuePeriod?: IPeriod;

  /**
   * Value of Example (one of allowed types)
   */
  valueQuantity?: IQuantity;

  /**
   * Value of Example (one of allowed types)
   */
  valueRange?: IRange;

  /**
   * Value of Example (one of allowed types)
   */
  valueRatio?: IRatio;

  /**
   * Value of Example (one of allowed types)
   */
  valueRatioRange?: IRatioRange;

  /**
   * Value of Example (one of allowed types)
   */
  valueReference?: IReference;

  /**
   * Value of Example (one of allowed types)
   */
  valueSampledData?: ISampledData;

  /**
   * Value of Example (one of allowed types)
   */
  valueSignature?: ISignature;

  /**
   * Value of Example (one of allowed types)
   */
  valueTiming?: ITiming;

  /**
   * Value of Example (one of allowed types)
   */
  valueContactDetail?: IContactDetail;

  /**
   * Value of Example (one of allowed types)
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Value of Example (one of allowed types)
   */
  valueExpression?: IExpression;

  /**
   * Value of Example (one of allowed types)
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Value of Example (one of allowed types)
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Value of Example (one of allowed types)
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Value of Example (one of allowed types)
   */
  valueUsageContext?: IUsageContext;

  /**
   * Value of Example (one of allowed types)
   */
  valueAvailability?: IAvailability;

  /**
   * Value of Example (one of allowed types)
   */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /**
   * Value of Example (one of allowed types)
   */
  valueDosage?: IDosage;

  /**
   * Value of Example (one of allowed types)
   */
  valueMeta?: IMeta;

}
