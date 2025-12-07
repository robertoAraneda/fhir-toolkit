/**
 * Endpoint Connection Type
 * 
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 *
 * @see http://hl7.org/fhir/ValueSet/endpoint-connection-type
 */

export type EndpointConnectionTypeType = 'ihe-xcpd' | 'ihe-xca' | 'ihe-xdr' | 'ihe-xds' | 'ihe-iid' | 'dicom-wado-rs' | 'dicom-qido-rs' | 'dicom-stow-rs' | 'dicom-wado-uri' | 'hl7-fhir-rest' | 'hl7-fhir-msg' | 'hl7v2-mllp' | 'secure-email' | 'direct-project';

export enum EndpointConnectionTypeEnum {
  /** IHE XCPD */
  IheXcpd = 'ihe-xcpd',
  /** IHE XCA */
  IheXca = 'ihe-xca',
  /** IHE XDR */
  IheXdr = 'ihe-xdr',
  /** IHE XDS */
  IheXds = 'ihe-xds',
  /** IHE IID */
  IheIid = 'ihe-iid',
  /** DICOM WADO-RS */
  DicomWadoRs = 'dicom-wado-rs',
  /** DICOM QIDO-RS */
  DicomQidoRs = 'dicom-qido-rs',
  /** DICOM STOW-RS */
  DicomStowRs = 'dicom-stow-rs',
  /** DICOM WADO-URI */
  DicomWadoUri = 'dicom-wado-uri',
  /** HL7 FHIR */
  Hl7FhirRest = 'hl7-fhir-rest',
  /** HL7 FHIR Messaging */
  Hl7FhirMsg = 'hl7-fhir-msg',
  /** HL7 v2 MLLP */
  Hl7v2Mllp = 'hl7v2-mllp',
  /** Secure email */
  SecureEmail = 'secure-email',
  /** Direct Project */
  DirectProject = 'direct-project',
}

export const EndpointConnectionTypeValues = ['ihe-xcpd', 'ihe-xca', 'ihe-xdr', 'ihe-xds', 'ihe-iid', 'dicom-wado-rs', 'dicom-qido-rs', 'dicom-stow-rs', 'dicom-wado-uri', 'hl7-fhir-rest', 'hl7-fhir-msg', 'hl7v2-mllp', 'secure-email', 'direct-project'] as const;
