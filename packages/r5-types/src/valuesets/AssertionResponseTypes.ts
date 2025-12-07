/**
 * Assertion Response Types
 * 
 * The type of response code to use for assertion.
 *
 * @see http://hl7.org/fhir/ValueSet/assert-response-code-types
 */

export type AssertionResponseTypesType = 'continue' | 'switchingProtocols' | 'okay' | 'created' | 'accepted' | 'nonAuthoritativeInformation' | 'noContent' | 'resetContent' | 'partialContent' | 'multipleChoices' | 'movedPermanently' | 'found' | 'seeOther' | 'notModified' | 'useProxy' | 'temporaryRedirect' | 'permanentRedirect' | 'badRequest' | 'unauthorized' | 'paymentRequired' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'notAcceptable' | 'proxyAuthenticationRequired' | 'requestTimeout' | 'conflict' | 'gone' | 'lengthRequired' | 'preconditionFailed' | 'contentTooLarge' | 'uriTooLong' | 'unsupportedMediaType' | 'rangeNotSatisfiable' | 'expectationFailed' | 'misdirectedRequest' | 'unprocessableContent' | 'upgradeRequired' | 'internalServerError' | 'notImplemented' | 'badGateway' | 'serviceUnavailable' | 'gatewayTimeout' | 'httpVersionNotSupported';

export enum AssertionResponseTypesEnum {
  /** Continue */
  Continue = 'continue',
  /** Switching Protocols */
  Switchingprotocols = 'switchingProtocols',
  /** OK */
  Okay = 'okay',
  /** Created */
  Created = 'created',
  /** Accepted */
  Accepted = 'accepted',
  /** Non-Authoritative Information */
  Nonauthoritativeinformation = 'nonAuthoritativeInformation',
  /** No Content */
  Nocontent = 'noContent',
  /** Reset Content */
  Resetcontent = 'resetContent',
  /** Partial Content */
  Partialcontent = 'partialContent',
  /** Multiple Choices */
  Multiplechoices = 'multipleChoices',
  /** Moved Permanently */
  Movedpermanently = 'movedPermanently',
  /** Found */
  Found = 'found',
  /** See Other */
  Seeother = 'seeOther',
  /** Not Modified */
  Notmodified = 'notModified',
  /** Use Proxy */
  Useproxy = 'useProxy',
  /** Temporary Redirect */
  Temporaryredirect = 'temporaryRedirect',
  /** Permanent Redirect */
  Permanentredirect = 'permanentRedirect',
  /** Bad Request */
  Badrequest = 'badRequest',
  /** Unauthorized */
  Unauthorized = 'unauthorized',
  /** Payment Required */
  Paymentrequired = 'paymentRequired',
  /** Forbidden */
  Forbidden = 'forbidden',
  /** Not Found */
  Notfound = 'notFound',
  /** Method Not Allowed */
  Methodnotallowed = 'methodNotAllowed',
  /** Not Acceptable */
  Notacceptable = 'notAcceptable',
  /** Proxy Authentication Required */
  Proxyauthenticationrequired = 'proxyAuthenticationRequired',
  /** Request Timeout */
  Requesttimeout = 'requestTimeout',
  /** Conflict */
  Conflict = 'conflict',
  /** Gone */
  Gone = 'gone',
  /** Length Required */
  Lengthrequired = 'lengthRequired',
  /** Precondition Failed */
  Preconditionfailed = 'preconditionFailed',
  /** Content Too Large */
  Contenttoolarge = 'contentTooLarge',
  /** URI Too Long */
  Uritoolong = 'uriTooLong',
  /** Unsupported Media Type */
  Unsupportedmediatype = 'unsupportedMediaType',
  /** Range Not Satisfiable */
  Rangenotsatisfiable = 'rangeNotSatisfiable',
  /** Expectation Failed */
  Expectationfailed = 'expectationFailed',
  /** Misdirected Request */
  Misdirectedrequest = 'misdirectedRequest',
  /** Unprocessable Content */
  Unprocessablecontent = 'unprocessableContent',
  /** Upgrade Required */
  Upgraderequired = 'upgradeRequired',
  /** Internal Server Error */
  Internalservererror = 'internalServerError',
  /** Not Implemented */
  Notimplemented = 'notImplemented',
  /** Bad Gateway */
  Badgateway = 'badGateway',
  /** Service Unavailable */
  Serviceunavailable = 'serviceUnavailable',
  /** Gateway Timeout */
  Gatewaytimeout = 'gatewayTimeout',
  /** HTTP Version Not Supported */
  Httpversionnotsupported = 'httpVersionNotSupported',
}

export const AssertionResponseTypesValues = ['continue', 'switchingProtocols', 'okay', 'created', 'accepted', 'nonAuthoritativeInformation', 'noContent', 'resetContent', 'partialContent', 'multipleChoices', 'movedPermanently', 'found', 'seeOther', 'notModified', 'useProxy', 'temporaryRedirect', 'permanentRedirect', 'badRequest', 'unauthorized', 'paymentRequired', 'forbidden', 'notFound', 'methodNotAllowed', 'notAcceptable', 'proxyAuthenticationRequired', 'requestTimeout', 'conflict', 'gone', 'lengthRequired', 'preconditionFailed', 'contentTooLarge', 'uriTooLong', 'unsupportedMediaType', 'rangeNotSatisfiable', 'expectationFailed', 'misdirectedRequest', 'unprocessableContent', 'upgradeRequired', 'internalServerError', 'notImplemented', 'badGateway', 'serviceUnavailable', 'gatewayTimeout', 'httpVersionNotSupported'] as const;
