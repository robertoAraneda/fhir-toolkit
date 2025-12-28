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

/**
 * TaskInput Interface
 * 
 * Information used to perform task
 * 
 *
 * @see https://hl7.org/fhir/R4B/taskinput.html
 */
export interface ITaskInput extends IBackboneElement {
  /**
   * Label for the input
   */
  type: ICodeableConcept;

  /**
   * Content to use in performing the task
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Content to use in performing the task
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Content to use in performing the task
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Content to use in performing the task
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Content to use in performing the task
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Content to use in performing the task
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Content to use in performing the task
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Content to use in performing the task
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Content to use in performing the task
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Content to use in performing the task
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Content to use in performing the task
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Content to use in performing the task
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * Content to use in performing the task
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Content to use in performing the task
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Content to use in performing the task
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Content to use in performing the task
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Content to use in performing the task
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Content to use in performing the task
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Content to use in performing the task
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Content to use in performing the task
   */
  valueAddress?: IAddress;

  /**
   * Content to use in performing the task
   */
  valueAge?: IAge;

  /**
   * Content to use in performing the task
   */
  valueAnnotation?: IAnnotation;

  /**
   * Content to use in performing the task
   */
  valueAttachment?: IAttachment;

  /**
   * Content to use in performing the task
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Content to use in performing the task
   */
  valueCoding?: ICoding;

  /**
   * Content to use in performing the task
   */
  valueContactPoint?: IContactPoint;

  /**
   * Content to use in performing the task
   */
  valueCount?: ICount;

  /**
   * Content to use in performing the task
   */
  valueDistance?: IDistance;

  /**
   * Content to use in performing the task
   */
  valueDuration?: IDuration;

  /**
   * Content to use in performing the task
   */
  valueHumanName?: IHumanName;

  /**
   * Content to use in performing the task
   */
  valueIdentifier?: IIdentifier;

  /**
   * Content to use in performing the task
   */
  valueMoney?: IMoney;

  /**
   * Content to use in performing the task
   */
  valuePeriod?: IPeriod;

  /**
   * Content to use in performing the task
   */
  valueQuantity?: IQuantity;

  /**
   * Content to use in performing the task
   */
  valueRange?: IRange;

  /**
   * Content to use in performing the task
   */
  valueRatio?: IRatio;

  /**
   * Content to use in performing the task
   */
  valueReference?: IReference;

  /**
   * Content to use in performing the task
   */
  valueSampledData?: ISampledData;

  /**
   * Content to use in performing the task
   */
  valueSignature?: ISignature;

  /**
   * Content to use in performing the task
   */
  valueTiming?: ITiming;

  /**
   * Content to use in performing the task
   */
  valueContactDetail?: IContactDetail;

  /**
   * Content to use in performing the task
   */
  valueContributor?: IContributor;

  /**
   * Content to use in performing the task
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Content to use in performing the task
   */
  valueExpression?: IExpression;

  /**
   * Content to use in performing the task
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Content to use in performing the task
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Content to use in performing the task
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Content to use in performing the task
   */
  valueUsageContext?: IUsageContext;

  /**
   * Content to use in performing the task
   */
  valueDosage?: IDosage;

  /**
   * Content to use in performing the task
   */
  valueMeta?: IMeta;

}
