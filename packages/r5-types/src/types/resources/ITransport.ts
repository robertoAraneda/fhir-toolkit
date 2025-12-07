import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ITransportInput } from '../backbones/ITransportInput.js';
import type { ITransportOutput } from '../backbones/ITransportOutput.js';
import type { ITransportRestriction } from '../backbones/ITransportRestriction.js';
import type { RequestPriorityType, TransportIntentType, TransportStatusType } from '../../valuesets/index.js';

/**
 * Transport Interface
 * 
 * Record of transport of item.
 * 
 *
 * @see https://hl7.org/fhir/R4/transport.html
 */
export interface ITransport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Transport';

  /**
   * External identifier
   */
  identifier?: IIdentifier[];

  /**
   * Formal definition of transport
   */
  instantiatesCanonical?: string;
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Formal definition of transport
   */
  instantiatesUri?: string;
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Request fulfilled by this transport
   */
  basedOn?: IReference<'Resource'>[];

  /**
   * Requisition or grouper id
   */
  groupIdentifier?: IIdentifier;

  /**
   * Part of referenced event
   */
  partOf?: IReference<'Transport'>[];

  /**
   * in-progress | completed | abandoned | cancelled | planned | entered-in-error
   */
  status?: TransportStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  intent: TransportIntentType;
  /**
   * Extension for intent
   */
  _intent?: IElement;

  /**
   * routine | urgent | asap | stat
   */
  priority?: RequestPriorityType;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * Transport Type
   */
  code?: ICodeableConcept;

  /**
   * Human-readable explanation of transport
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * What transport is acting on
   */
  focus?: IReference<'Resource'>;

  /**
   * Beneficiary of the Transport
   */
  for?: IReference<'Resource'>;

  /**
   * Healthcare event during which this transport originated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Completion time of the event (the occurrence)
   */
  completionTime?: string;
  /**
   * Extension for completionTime
   */
  _completionTime?: IElement;

  /**
   * Transport Creation Date
   */
  authoredOn?: string;
  /**
   * Extension for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * Transport Last Modified Date
   */
  lastModified?: string;
  /**
   * Extension for lastModified
   */
  _lastModified?: IElement;

  /**
   * Who is asking for transport to be done
   */
  requester?: IReference<'Device' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Requested performer
   */
  performerType?: ICodeableConcept[];

  /**
   * Responsible individual
   */
  owner?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * Where transport occurs
   */
  location?: IReference<'Location'>;

  /**
   * Associated insurance coverage
   */
  insurance?: IReference<'Coverage' | 'ClaimResponse'>[];

  /**
   * Comments made about the transport
   */
  note?: IAnnotation[];

  /**
   * Key events in history of the Transport
   */
  relevantHistory?: IReference<'Provenance'>[];

  /**
   * Constraints on fulfillment transports
   */
  restriction?: ITransportRestriction;

  /**
   * Information used to perform transport
   */
  input?: ITransportInput[];

  /**
   * Information produced as part of transport
   */
  output?: ITransportOutput[];

  /**
   * The desired location
   */
  requestedLocation: IReference<'Location'>;

  /**
   * The entity current location
   */
  currentLocation: IReference<'Location'>;

  /**
   * Why transport is needed
   */
  reason?: ICodeableReference;

  /**
   * Parent (or preceding) transport
   */
  history?: IReference<'Transport'>;

}
