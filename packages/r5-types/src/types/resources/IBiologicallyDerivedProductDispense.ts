import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IBiologicallyDerivedProductDispensePerformer } from '../backbones/IBiologicallyDerivedProductDispensePerformer.js';
import type { BiologicallyDerivedProductDispenseType } from '../../valuesets/index.js';

/**
 * BiologicallyDerivedProductDispense Interface
 * 
 * This resource reflects an instance of a biologically derived product dispense. The supply or dispense of a biologically derived product from the supply organization or department (e.g. hospital transfusion laboratory) to the clinical team responsible for clinical application.
 * 
 *
 * @see https://hl7.org/fhir/R5/biologicallyderivedproductdispense.html
 */
export interface IBiologicallyDerivedProductDispense extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'BiologicallyDerivedProductDispense';

  /**
   * Business identifier for this dispense
   */
  identifier?: IIdentifier[];

  /**
   * The order or request that this dispense is fulfilling
   */
  basedOn?: IReference<'ServiceRequest'>[];

  /**
   * Short description
   */
  partOf?: IReference<'BiologicallyDerivedProductDispense'>[];

  /**
   * preparation | in-progress | allocated | issued | unfulfilled | returned | entered-in-error | unknown
   */
  status: BiologicallyDerivedProductDispenseType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Relationship between the donor and intended recipient
   */
  originRelationshipType?: ICodeableConcept;

  /**
   * The BiologicallyDerivedProduct that is dispensed
   */
  product: IReference<'BiologicallyDerivedProduct'>;

  /**
   * The intended recipient of the dispensed product
   */
  patient: IReference<'Patient'>;

  /**
   * Indicates the type of matching associated with the dispense
   */
  matchStatus?: ICodeableConcept;

  /**
   * Indicates who or what performed an action
   */
  performer?: IBiologicallyDerivedProductDispensePerformer[];

  /**
   * Where the dispense occurred
   */
  location?: IReference<'Location'>;

  /**
   * Amount dispensed
   */
  quantity?: IQuantity;

  /**
   * When product was selected/matched
   */
  preparedDate?: string;
  /**
   * Extension for preparedDate
   */
  _preparedDate?: IElement;

  /**
   * When the product was dispatched
   */
  whenHandedOver?: string;
  /**
   * Extension for whenHandedOver
   */
  _whenHandedOver?: IElement;

  /**
   * Where the product was dispatched to
   */
  destination?: IReference<'Location'>;

  /**
   * Additional notes
   */
  note?: IAnnotation[];

  /**
   * Specific instructions for use
   */
  usageInstruction?: string;
  /**
   * Extension for usageInstruction
   */
  _usageInstruction?: IElement;

}
