import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IQuantity,
  IVisionPrescriptionLensSpecification,
  IVisionPrescriptionLensSpecificationPrism,
  VisionEyesType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to VisionPrescriptionLensSpecification */
const VISION_PRESCRIPTION_LENS_SPECIFICATION_PROPERTIES = [
  'product',
  'eye',
  '_eye',
  'sphere',
  '_sphere',
  'cylinder',
  '_cylinder',
  'axis',
  '_axis',
  'prism',
  'add',
  '_add',
  'power',
  '_power',
  'backCurve',
  '_backCurve',
  'diameter',
  '_diameter',
  'duration',
  'color',
  '_color',
  'brand',
  '_brand',
  'note',
] as const;

/**
 * VisionPrescriptionLensSpecification - Vision lens authorization
 *
 * @see https://hl7.org/fhir/R4/visionprescriptionlensspecification.html
 *
 * @example
 * const visionPrescriptionLensSpecification = new VisionPrescriptionLensSpecification({
 *   // ... properties
 * });
 */
export class VisionPrescriptionLensSpecification extends BackboneElement implements IVisionPrescriptionLensSpecification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Product to be supplied */
  product: ICodeableConcept;

  /** right | left */
  eye: VisionEyesType;

  /** Extension for eye */
  _eye?: IElement;

  /** Power of the lens */
  sphere?: number;

  /** Extension for sphere */
  _sphere?: IElement;

  /** Lens power for astigmatism */
  cylinder?: number;

  /** Extension for cylinder */
  _cylinder?: IElement;

  /** Lens meridian which contain no power for astigmatism */
  axis?: number;

  /** Extension for axis */
  _axis?: IElement;

  /** Eye alignment compensation */
  prism?: IVisionPrescriptionLensSpecificationPrism[];

  /** Added power for multifocal levels */
  add?: number;

  /** Extension for add */
  _add?: IElement;

  /** Contact lens power */
  power?: number;

  /** Extension for power */
  _power?: IElement;

  /** Contact lens back curvature */
  backCurve?: number;

  /** Extension for backCurve */
  _backCurve?: IElement;

  /** Contact lens diameter */
  diameter?: number;

  /** Extension for diameter */
  _diameter?: IElement;

  /** Lens wear duration */
  duration?: IQuantity;

  /** Color required */
  color?: string;

  /** Extension for color */
  _color?: IElement;

  /** Brand required */
  brand?: string;

  /** Extension for brand */
  _brand?: IElement;

  /** Notes for coatings */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVisionPrescriptionLensSpecification>) {
    super(data);
    if (data) {
      this.assignProps(data, VISION_PRESCRIPTION_LENS_SPECIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VisionPrescriptionLensSpecification from a JSON object
   */
  static fromJSON(json: IVisionPrescriptionLensSpecification): VisionPrescriptionLensSpecification {
    return new VisionPrescriptionLensSpecification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VisionPrescriptionLensSpecification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVisionPrescriptionLensSpecification>): VisionPrescriptionLensSpecification {
    return new VisionPrescriptionLensSpecification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VisionPrescriptionLensSpecification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVisionPrescriptionLensSpecification) => Partial<IVisionPrescriptionLensSpecification>): VisionPrescriptionLensSpecification {
    const currentData = this.toJSON();
    return new VisionPrescriptionLensSpecification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVisionPrescriptionLensSpecification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVisionPrescriptionLensSpecification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VISION_PRESCRIPTION_LENS_SPECIFICATION_PROPERTIES);
    return result as IVisionPrescriptionLensSpecification;
  }

  /**
   * Create a deep clone of this VisionPrescriptionLensSpecification
   */
  clone(): VisionPrescriptionLensSpecification {
    return new VisionPrescriptionLensSpecification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VisionPrescriptionLensSpecification
   */
  toString(): string {
    const parts: string[] = ['VisionPrescriptionLensSpecification'];
    return parts.join(', ');
  }
}
