/**
 * Operation Outcome Codes
 * 
 * Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)
 *
 * @see http://hl7.org/fhir/ValueSet/operation-outcome
 */

export type OperationOutcomeType = 'DELETE_MULTIPLE_MATCHES' | 'MSG_AUTH_REQUIRED' | 'MSG_BAD_FORMAT' | 'MSG_BAD_SYNTAX' | 'MSG_CANT_PARSE_CONTENT' | 'MSG_CANT_PARSE_ROOT' | 'MSG_CREATED' | 'MSG_DATE_FORMAT' | 'MSG_DELETED' | 'MSG_DELETED_DONE' | 'MSG_DELETED_ID' | 'MSG_DUPLICATE_ID' | 'MSG_ERROR_PARSING' | 'MSG_ID_INVALID' | 'MSG_ID_TOO_LONG' | 'MSG_INVALID_ID' | 'MSG_JSON_OBJECT' | 'MSG_LOCAL_FAIL' | 'MSG_NO_EXIST' | 'MSG_NO_MATCH' | 'MSG_NO_MODULE' | 'MSG_NO_SUMMARY' | 'MSG_OP_NOT_ALLOWED' | 'MSG_PARAM_CHAINED' | 'MSG_PARAM_INVALID' | 'MSG_PARAM_MODIFIER_INVALID' | 'MSG_PARAM_NO_REPEAT' | 'MSG_PARAM_UNKNOWN' | 'MSG_RESOURCE_EXAMPLE_PROTECTED' | 'MSG_RESOURCE_ID_FAIL' | 'MSG_RESOURCE_ID_MISMATCH' | 'MSG_RESOURCE_ID_MISSING' | 'MSG_RESOURCE_NOT_ALLOWED' | 'MSG_RESOURCE_REQUIRED' | 'MSG_RESOURCE_TYPE_MISMATCH' | 'MSG_SORT_UNKNOWN' | 'MSG_TRANSACTION_DUPLICATE_ID' | 'MSG_TRANSACTION_MISSING_ID' | 'MSG_UNHANDLED_NODE_TYPE' | 'MSG_UNKNOWN_CONTENT' | 'MSG_UNKNOWN_OPERATION' | 'MSG_UNKNOWN_TYPE' | 'MSG_UPDATED' | 'MSG_VERSION_AWARE' | 'MSG_VERSION_AWARE_CONFLICT' | 'MSG_VERSION_AWARE_URL' | 'MSG_WRONG_NS' | 'SEARCH_MULTIPLE' | 'SEARCH_NONE' | 'UPDATE_MULTIPLE_MATCHES';

export enum OperationOutcomeEnum {
  /** Error: Multiple matches exist for the conditional delete */
  DeleteMultipleMatches = 'DELETE_MULTIPLE_MATCHES',
  /** You must authenticate before you can use this service */
  MsgAuthRequired = 'MSG_AUTH_REQUIRED',
  /** Bad Syntax: "%s" must be a %s' */
  MsgBadFormat = 'MSG_BAD_FORMAT',
  /** Bad Syntax in %s */
  MsgBadSyntax = 'MSG_BAD_SYNTAX',
  /** Unable to parse feed (entry content type = "%s") */
  MsgCantParseContent = 'MSG_CANT_PARSE_CONTENT',
  /** Unable to parse feed (root element name = "%s") */
  MsgCantParseRoot = 'MSG_CANT_PARSE_ROOT',
  /** New resource created */
  MsgCreated = 'MSG_CREATED',
  /** The Date value %s is not in the correct format (Xml Date Format required) */
  MsgDateFormat = 'MSG_DATE_FORMAT',
  /** This resource has been deleted */
  MsgDeleted = 'MSG_DELETED',
  /** Resource deleted */
  MsgDeletedDone = 'MSG_DELETED_DONE',
  /** The resource "%s" has been deleted */
  MsgDeletedId = 'MSG_DELETED_ID',
  /** Duplicate Id %s for resource type %s */
  MsgDuplicateId = 'MSG_DUPLICATE_ID',
  /** Error parsing resource Xml (%s) */
  MsgErrorParsing = 'MSG_ERROR_PARSING',
  /** Id "%s" has an invalid character "%s" */
  MsgIdInvalid = 'MSG_ID_INVALID',
  /** Id "%s" too long (length limit 36) */
  MsgIdTooLong = 'MSG_ID_TOO_LONG',
  /** Id not accepted */
  MsgInvalidId = 'MSG_INVALID_ID',
  /** Json Source for a resource should start with an object */
  MsgJsonObject = 'MSG_JSON_OBJECT',
  /** Unable to resolve local reference to resource %s */
  MsgLocalFail = 'MSG_LOCAL_FAIL',
  /** Resource Id "%s" does not exist */
  MsgNoExist = 'MSG_NO_EXIST',
  /** No Resource found matching the query "%s" */
  MsgNoMatch = 'MSG_NO_MATCH',
  /** No module could be found to handle the request "%s" */
  MsgNoModule = 'MSG_NO_MODULE',
  /** No Summary for this resource */
  MsgNoSummary = 'MSG_NO_SUMMARY',
  /** Operation %s not allowed for resource %s (due to local configuration) */
  MsgOpNotAllowed = 'MSG_OP_NOT_ALLOWED',
  /** Unknown chained parameter name "%s" */
  MsgParamChained = 'MSG_PARAM_CHAINED',
  /** Parameter "%s" content is invalid */
  MsgParamInvalid = 'MSG_PARAM_INVALID',
  /** Parameter "%s" modifier is invalid */
  MsgParamModifierInvalid = 'MSG_PARAM_MODIFIER_INVALID',
  /** Parameter "%s" is not allowed to repeat */
  MsgParamNoRepeat = 'MSG_PARAM_NO_REPEAT',
  /** Parameter "%s" not understood */
  MsgParamUnknown = 'MSG_PARAM_UNKNOWN',
  /** Resources with identity "example" cannot be deleted (for testing/training purposes) */
  MsgResourceExampleProtected = 'MSG_RESOURCE_EXAMPLE_PROTECTED',
  /** unable to allocate resource id */
  MsgResourceIdFail = 'MSG_RESOURCE_ID_FAIL',
  /** Resource Id Mismatch */
  MsgResourceIdMismatch = 'MSG_RESOURCE_ID_MISMATCH',
  /** Resource Id Missing */
  MsgResourceIdMissing = 'MSG_RESOURCE_ID_MISSING',
  /** Not allowed to submit a resource for this operation */
  MsgResourceNotAllowed = 'MSG_RESOURCE_NOT_ALLOWED',
  /** A resource is required */
  MsgResourceRequired = 'MSG_RESOURCE_REQUIRED',
  /** Resource Type Mismatch */
  MsgResourceTypeMismatch = 'MSG_RESOURCE_TYPE_MISMATCH',
  /** Unknown sort parameter name "%s" */
  MsgSortUnknown = 'MSG_SORT_UNKNOWN',
  /** Duplicate Identifier in transaction: %s */
  MsgTransactionDuplicateId = 'MSG_TRANSACTION_DUPLICATE_ID',
  /** Missing Identifier in transaction - an entry.id must be provided */
  MsgTransactionMissingId = 'MSG_TRANSACTION_MISSING_ID',
  /** Unhandled xml node type "%s" */
  MsgUnhandledNodeType = 'MSG_UNHANDLED_NODE_TYPE',
  /** Unknown Content (%s) at %s */
  MsgUnknownContent = 'MSG_UNKNOWN_CONTENT',
  /** unknown FHIR http operation */
  MsgUnknownOperation = 'MSG_UNKNOWN_OPERATION',
  /** Resource Type "%s" not recognised */
  MsgUnknownType = 'MSG_UNKNOWN_TYPE',
  /** existing resource updated */
  MsgUpdated = 'MSG_UPDATED',
  /** Version aware updates are required for this resource */
  MsgVersionAware = 'MSG_VERSION_AWARE',
  /** Update Conflict (server current version = "%s", client version referenced = "%s") */
  MsgVersionAwareConflict = 'MSG_VERSION_AWARE_CONFLICT',
  /** Version specific URL not recognised */
  MsgVersionAwareUrl = 'MSG_VERSION_AWARE_URL',
  /** This does not appear to be a FHIR element or resource (wrong namespace "%s") */
  MsgWrongNs = 'MSG_WRONG_NS',
  /** Error: Multiple matches exist for %s search parameters "%s" */
  SearchMultiple = 'SEARCH_MULTIPLE',
  /** Error: no processable search found for %s search parameters "%s" */
  SearchNone = 'SEARCH_NONE',
  /** Error: Multiple matches exist for the conditional update */
  UpdateMultipleMatches = 'UPDATE_MULTIPLE_MATCHES',
}

export const OperationOutcomeValues = ['DELETE_MULTIPLE_MATCHES', 'MSG_AUTH_REQUIRED', 'MSG_BAD_FORMAT', 'MSG_BAD_SYNTAX', 'MSG_CANT_PARSE_CONTENT', 'MSG_CANT_PARSE_ROOT', 'MSG_CREATED', 'MSG_DATE_FORMAT', 'MSG_DELETED', 'MSG_DELETED_DONE', 'MSG_DELETED_ID', 'MSG_DUPLICATE_ID', 'MSG_ERROR_PARSING', 'MSG_ID_INVALID', 'MSG_ID_TOO_LONG', 'MSG_INVALID_ID', 'MSG_JSON_OBJECT', 'MSG_LOCAL_FAIL', 'MSG_NO_EXIST', 'MSG_NO_MATCH', 'MSG_NO_MODULE', 'MSG_NO_SUMMARY', 'MSG_OP_NOT_ALLOWED', 'MSG_PARAM_CHAINED', 'MSG_PARAM_INVALID', 'MSG_PARAM_MODIFIER_INVALID', 'MSG_PARAM_NO_REPEAT', 'MSG_PARAM_UNKNOWN', 'MSG_RESOURCE_EXAMPLE_PROTECTED', 'MSG_RESOURCE_ID_FAIL', 'MSG_RESOURCE_ID_MISMATCH', 'MSG_RESOURCE_ID_MISSING', 'MSG_RESOURCE_NOT_ALLOWED', 'MSG_RESOURCE_REQUIRED', 'MSG_RESOURCE_TYPE_MISMATCH', 'MSG_SORT_UNKNOWN', 'MSG_TRANSACTION_DUPLICATE_ID', 'MSG_TRANSACTION_MISSING_ID', 'MSG_UNHANDLED_NODE_TYPE', 'MSG_UNKNOWN_CONTENT', 'MSG_UNKNOWN_OPERATION', 'MSG_UNKNOWN_TYPE', 'MSG_UPDATED', 'MSG_VERSION_AWARE', 'MSG_VERSION_AWARE_CONFLICT', 'MSG_VERSION_AWARE_URL', 'MSG_WRONG_NS', 'SEARCH_MULTIPLE', 'SEARCH_NONE', 'UPDATE_MULTIPLE_MATCHES'] as const;
