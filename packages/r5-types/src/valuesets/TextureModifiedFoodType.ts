/**
 * Texture Modified Food Type Codes
 * 
 * TextureModifiedFoodType: Codes for types of foods that are texture-modified. This value set is composed SNOMED CT Concepts from SCTID 255620007 Foods (substance) and is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/modified-foodtype
 */

export type TextureModifiedFoodTypeType = '255620007' | '28647000' | '22836000' | '72511004' | '226760005' | '226887002' | '102263004' | '74242007' | '227415002' | '264331002' | '227518002' | '44027008' | '226529007' | '227210005';

export enum TextureModifiedFoodTypeEnum {
  /** Foods */
  _255620007 = '255620007',
  /** Meat */
  _28647000 = '28647000',
  /** Vegetables */
  _22836000 = '22836000',
  /** Fruit */
  _72511004 = '72511004',
  /** Dairy foods */
  _226760005 = '226760005',
  /** Dietary Fats and Oils */
  _226887002 = '226887002',
  /** Eggs */
  _102263004 = '102263004',
  /** Food Starch */
  _74242007 = '74242007',
  /** Fruit Nuts and Seeds */
  _227415002 = '227415002',
  /** Grain */
  _264331002 = '264331002',
  /** Sauce seasonings and soups */
  _227518002 = '227518002',
  /** Seafood */
  _44027008 = '44027008',
  /** Starchy food */
  _226529007 = '226529007',
  /** Vegetables plus herbs and spices */
  _227210005 = '227210005',
}

export const TextureModifiedFoodTypeValues = ['255620007', '28647000', '22836000', '72511004', '226760005', '226887002', '102263004', '74242007', '227415002', '264331002', '227518002', '44027008', '226529007', '227210005'] as const;
