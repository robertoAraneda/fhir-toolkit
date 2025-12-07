import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ILocationHoursOfOperation } from '../backbones/ILocationHoursOfOperation.js';
import type { ILocationPosition } from '../backbones/ILocationPosition.js';
import type { LocationModeType, LocationStatusType } from '../../valuesets/index.js';

/**
 * Location Interface
 * 
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 * 
 *
 * @see https://hl7.org/fhir/R4/location.html
 */
export interface ILocation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Location';

  /**
   * Unique code or number identifying the location to its users
   */
  identifier?: IIdentifier[];

  /**
   * active | suspended | inactive
   */
  status?: LocationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The operational status of the location (typically only for a bed/room)
   */
  operationalStatus?: ICoding;

  /**
   * Name of the location as used by humans
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * A list of alternate names that the location is known as, or was known as, in the past
   */
  alias?: string[];
  /**
   * Extension for alias
   */
  _alias?: IElement;

  /**
   * Additional details about the location that could be displayed as further information to identify the location beyond its name
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * instance | kind
   */
  mode?: LocationModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Type of function performed
   */
  type?: ICodeableConcept[];

  /**
   * Contact details of the location
   */
  telecom?: IContactPoint[];

  /**
   * Physical location
   */
  address?: IAddress;

  /**
   * Physical form of the location
   */
  physicalType?: ICodeableConcept;

  /**
   * The absolute geographic location
   */
  position?: ILocationPosition;

  /**
   * Organization responsible for provisioning and upkeep
   */
  managingOrganization?: IReference<'Organization'>;

  /**
   * Another Location this one is physically a part of
   */
  partOf?: IReference<'Location'>;

  /**
   * What days/times during a week is this location usually open
   */
  hoursOfOperation?: ILocationHoursOfOperation[];

  /**
   * Description of availability exceptions
   */
  availabilityExceptions?: string;
  /**
   * Extension for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * Technical endpoints providing access to services operated for the location
   */
  endpoint?: IReference<'Endpoint'>[];

}
