/**
 * TypeRestfulInteraction
 * 
 * Operations supported by REST at the type or instance level.
 *
 * @see http://hl7.org/fhir/ValueSet/type-restful-interaction
 */

export type TypeRestfulInteractionType = 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type';

export enum TypeRestfulInteractionEnum {
  Read = 'read',
  Vread = 'vread',
  Update = 'update',
  Patch = 'patch',
  Delete = 'delete',
  HistoryInstance = 'history-instance',
  HistoryType = 'history-type',
  Create = 'create',
  SearchType = 'search-type',
}

export const TypeRestfulInteractionValues = ['read', 'vread', 'update', 'patch', 'delete', 'history-instance', 'history-type', 'create', 'search-type'] as const;
