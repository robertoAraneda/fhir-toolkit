import { DomainResource } from '../base/DomainResource.js';
import type {
  IAddress,
  IAvailability,
  ICodeableConcept,
  ICoding,
  IElement,
  IExtendedContactDetail,
  IIdentifier,
  ILocation,
  ILocationPosition,
  IReference,
  IVirtualServiceDetail,
  LocationModeType,
  LocationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Location */
const LOCATION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'operationalStatus',
  'name',
  '_name',
  'alias',
  '_alias',
  'description',
  '_description',
  'mode',
  '_mode',
  'type',
  'contact',
  'address',
  'form',
  'position',
  'managingOrganization',
  'partOf',
  'characteristic',
  'hoursOfOperation',
  'virtualService',
  'endpoint',
] as const;

/**
 * Location - Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 *
 * @see https://hl7.org/fhir/R4/location.html
 *
 * @example
 * const location = new Location({
 *   // ... properties
 * });
 */
export class Location extends DomainResource implements ILocation {
  readonly resourceType = 'Location' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique code or number identifying the location to its users */
  identifier?: IIdentifier[];

  /** active | suspended | inactive */
  status?: LocationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The operational status of the location (typically only for a bed/room) */
  operationalStatus?: ICoding;

  /** Name of the location as used by humans */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** A list of alternate names that the location is known as, or was known as, in the past */
  alias?: string[];

  /** Extension for alias */
  _alias?: IElement;

  /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** instance | kind */
  mode?: LocationModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Type of function performed */
  type?: ICodeableConcept[];

  /** Official contact details for the location */
  contact?: IExtendedContactDetail[];

  /** Physical location */
  address?: IAddress;

  /** Physical form of the location */
  form?: ICodeableConcept;

  /** The absolute geographic location */
  position?: ILocationPosition;

  /** Organization responsible for provisioning and upkeep */
  managingOrganization?: IReference<'Organization'>;

  /** Another Location this one is physically a part of */
  partOf?: IReference<'Location'>;

  /** Collection of characteristics (attributes) */
  characteristic?: ICodeableConcept[];

  /** What days/times during a week is this location usually open (including exceptions) */
  hoursOfOperation?: IAvailability[];

  /** Connection details of a virtual service (e.g. conference call) */
  virtualService?: IVirtualServiceDetail[];

  /** Technical endpoints providing access to services operated for the location */
  endpoint?: IReference<'Endpoint'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ILocation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, LOCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Location from a JSON object
   */
  static fromJSON(json: ILocation): Location {
    return new Location(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Location with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILocation>): Location {
    return new Location({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Location by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILocation) => Partial<ILocation>): Location {
    const currentData = this.toJSON();
    return new Location({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILocation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILocation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, LOCATION_PROPERTIES);
    return result as ILocation;
  }

  /**
   * Create a deep clone of this Location
   */
  clone(): Location {
    return new Location(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Location
   */
  toString(): string {
    const parts: string[] = ['Location'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
