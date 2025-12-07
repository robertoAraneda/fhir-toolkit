/**
 * TestScriptOperationCode
 * 
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-operation-codes
 */

export type TestScriptOperationCodeType = 'read' | 'vread' | 'update' | 'updateCreate' | 'patch' | 'delete' | 'deleteCondSingle' | 'deleteCondMultiple' | 'history' | 'create' | 'search' | 'batch' | 'transaction' | 'capabilities' | 'apply' | 'closure' | 'find-matches' | 'conforms' | 'data-requirements' | 'document' | 'evaluate' | 'evaluate-measure' | 'everything' | 'expand' | 'find' | 'graphql' | 'implements' | 'lastn' | 'lookup' | 'match' | 'meta' | 'meta-add' | 'meta-delete' | 'populate' | 'populatehtml' | 'populatelink' | 'process-message' | 'questionnaire' | 'stats' | 'subset' | 'subsumes' | 'transform' | 'translate' | 'validate' | 'validate-code';

export enum TestScriptOperationCodeEnum {
  /** Read */
  Read = 'read',
  /** Version Read */
  Vread = 'vread',
  /** Update */
  Update = 'update',
  /** Create using Update */
  Updatecreate = 'updateCreate',
  /** Patch */
  Patch = 'patch',
  /** Delete */
  Delete = 'delete',
  /** Conditional Delete Single */
  Deletecondsingle = 'deleteCondSingle',
  /** Conditional Delete Multiple */
  Deletecondmultiple = 'deleteCondMultiple',
  /** History */
  History = 'history',
  /** Create */
  Create = 'create',
  /** Search */
  Search = 'search',
  /** Batch */
  Batch = 'batch',
  /** Transaction */
  Transaction = 'transaction',
  /** Capabilities */
  Capabilities = 'capabilities',
  /** $apply */
  Apply = 'apply',
  /** $closure */
  Closure = 'closure',
  /** $find-matches */
  FindMatches = 'find-matches',
  /** $conforms */
  Conforms = 'conforms',
  /** $data-requirements */
  DataRequirements = 'data-requirements',
  /** $document */
  Document = 'document',
  /** $evaluate */
  Evaluate = 'evaluate',
  /** $evaluate-measure */
  EvaluateMeasure = 'evaluate-measure',
  /** $everything */
  Everything = 'everything',
  /** $expand */
  Expand = 'expand',
  /** $find */
  Find = 'find',
  /** $graphql */
  Graphql = 'graphql',
  /** $implements */
  Implements = 'implements',
  /** $lastn */
  Lastn = 'lastn',
  /** $lookup */
  Lookup = 'lookup',
  /** $match */
  Match = 'match',
  /** $meta */
  Meta = 'meta',
  /** $meta-add */
  MetaAdd = 'meta-add',
  /** $meta-delete */
  MetaDelete = 'meta-delete',
  /** $populate */
  Populate = 'populate',
  /** $populatehtml */
  Populatehtml = 'populatehtml',
  /** $populatelink */
  Populatelink = 'populatelink',
  /** $process-message */
  ProcessMessage = 'process-message',
  /** $questionnaire */
  Questionnaire = 'questionnaire',
  /** $stats */
  Stats = 'stats',
  /** $subset */
  Subset = 'subset',
  /** $subsumes */
  Subsumes = 'subsumes',
  /** $transform */
  Transform = 'transform',
  /** $translate */
  Translate = 'translate',
  /** $validate */
  Validate = 'validate',
  /** $validate-code */
  ValidateCode = 'validate-code',
}

export const TestScriptOperationCodeValues = ['read', 'vread', 'update', 'updateCreate', 'patch', 'delete', 'deleteCondSingle', 'deleteCondMultiple', 'history', 'create', 'search', 'batch', 'transaction', 'capabilities', 'apply', 'closure', 'find-matches', 'conforms', 'data-requirements', 'document', 'evaluate', 'evaluate-measure', 'everything', 'expand', 'find', 'graphql', 'implements', 'lastn', 'lookup', 'match', 'meta', 'meta-add', 'meta-delete', 'populate', 'populatehtml', 'populatelink', 'process-message', 'questionnaire', 'stats', 'subset', 'subsumes', 'transform', 'translate', 'validate', 'validate-code'] as const;
