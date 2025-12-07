import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IInventoryReport,
  IInventoryReportInventoryListing,
  IPeriod,
  IReference,
  InventoryCountTypeType,
  InventoryReportStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryReport */
const INVENTORY_REPORT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'countType',
  '_countType',
  'operationType',
  'operationTypeReason',
  'reportedDateTime',
  '_reportedDateTime',
  'reporter',
  'reportingPeriod',
  'inventoryListing',
  'note',
] as const;

/**
 * InventoryReport - A report of inventory or stock items.
 *
 * @see https://hl7.org/fhir/R4/inventoryreport.html
 *
 * @example
 * const inventoryReport = new InventoryReport({
 *   // ... properties
 * });
 */
export class InventoryReport extends DomainResource implements IInventoryReport {
  readonly resourceType = 'InventoryReport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for the report */
  identifier?: IIdentifier[];

  /** draft | requested | active | entered-in-error */
  status: InventoryReportStatusType;

  /** Extension for status */
  _status?: IElement;

  /** snapshot | difference */
  countType: InventoryCountTypeType;

  /** Extension for countType */
  _countType?: IElement;

  /** addition | subtraction */
  operationType?: ICodeableConcept;

  /** The reason for this count - regular count, ad-hoc count, new arrivals, etc */
  operationTypeReason?: ICodeableConcept;

  /** When the report has been submitted */
  reportedDateTime: string;

  /** Extension for reportedDateTime */
  _reportedDateTime?: IElement;

  /** Who submits the report */
  reporter?: IReference<'Practitioner' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** The period the report refers to */
  reportingPeriod?: IPeriod;

  /** An inventory listing section (grouped by any of the attributes) */
  inventoryListing?: IInventoryReportInventoryListing[];

  /** A note associated with the InventoryReport */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IInventoryReport>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_REPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryReport from a JSON object
   */
  static fromJSON(json: IInventoryReport): InventoryReport {
    return new InventoryReport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryReport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryReport>): InventoryReport {
    return new InventoryReport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryReport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryReport) => Partial<IInventoryReport>): InventoryReport {
    const currentData = this.toJSON();
    return new InventoryReport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryReport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryReport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, INVENTORY_REPORT_PROPERTIES);
    return result as IInventoryReport;
  }

  /**
   * Create a deep clone of this InventoryReport
   */
  clone(): InventoryReport {
    return new InventoryReport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryReport
   */
  toString(): string {
    const parts: string[] = ['InventoryReport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
