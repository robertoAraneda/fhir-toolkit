import type { IBackboneElement, ICodeableConcept, ICoding, IElement, IReference, IResource } from '../../base/index.js';
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
 * ParametersParameter Interface
 * 
 * Operation Parameter
 * 
 *
 * @see https://hl7.org/fhir/R4/parametersparameter.html
 */
export interface IParametersParameter extends IBackboneElement {
  /**
   * Name from the definition
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * If parameter is a data type
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * If parameter is a data type
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * If parameter is a data type
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * If parameter is a data type
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * If parameter is a data type
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * If parameter is a data type
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * If parameter is a data type
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * If parameter is a data type
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * If parameter is a data type
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * If parameter is a data type
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * If parameter is a data type
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * If parameter is a data type
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * If parameter is a data type
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * If parameter is a data type
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * If parameter is a data type
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * If parameter is a data type
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * If parameter is a data type
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * If parameter is a data type
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * If parameter is a data type
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * If parameter is a data type
   */
  valueAddress?: IAddress;

  /**
   * If parameter is a data type
   */
  valueAge?: IAge;

  /**
   * If parameter is a data type
   */
  valueAnnotation?: IAnnotation;

  /**
   * If parameter is a data type
   */
  valueAttachment?: IAttachment;

  /**
   * If parameter is a data type
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * If parameter is a data type
   */
  valueCoding?: ICoding;

  /**
   * If parameter is a data type
   */
  valueContactPoint?: IContactPoint;

  /**
   * If parameter is a data type
   */
  valueCount?: ICount;

  /**
   * If parameter is a data type
   */
  valueDistance?: IDistance;

  /**
   * If parameter is a data type
   */
  valueDuration?: IDuration;

  /**
   * If parameter is a data type
   */
  valueHumanName?: IHumanName;

  /**
   * If parameter is a data type
   */
  valueIdentifier?: IIdentifier;

  /**
   * If parameter is a data type
   */
  valueMoney?: IMoney;

  /**
   * If parameter is a data type
   */
  valuePeriod?: IPeriod;

  /**
   * If parameter is a data type
   */
  valueQuantity?: IQuantity;

  /**
   * If parameter is a data type
   */
  valueRange?: IRange;

  /**
   * If parameter is a data type
   */
  valueRatio?: IRatio;

  /**
   * If parameter is a data type
   */
  valueReference?: IReference;

  /**
   * If parameter is a data type
   */
  valueSampledData?: ISampledData;

  /**
   * If parameter is a data type
   */
  valueSignature?: ISignature;

  /**
   * If parameter is a data type
   */
  valueTiming?: ITiming;

  /**
   * If parameter is a data type
   */
  valueContactDetail?: IContactDetail;

  /**
   * If parameter is a data type
   */
  valueContributor?: IContributor;

  /**
   * If parameter is a data type
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * If parameter is a data type
   */
  valueExpression?: IExpression;

  /**
   * If parameter is a data type
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * If parameter is a data type
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * If parameter is a data type
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * If parameter is a data type
   */
  valueUsageContext?: IUsageContext;

  /**
   * If parameter is a data type
   */
  valueDosage?: IDosage;

  /**
   * If parameter is a data type
   */
  valueMeta?: IMeta;

  /**
   * If parameter is a whole resource
   */
  resource?: IResource;

  /**
   * Named part of a multi-part parameter
   */
  part?: IParametersParameter[];

}
