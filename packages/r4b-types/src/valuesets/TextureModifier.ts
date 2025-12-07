/**
 * Texture Modifier Codes
 * 
 * TextureModifier: Codes for food consistency types or texture modifications to apply to foods. This value set is composed of SNOMED CT (US Extension and Core) Concepts from SCTID 229961002 Food consistency types (substance) hierarchy and is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/texture-code
 */

export type TextureModifierType = '228053002' | '439091000124107' | '228049004' | '441881000124103' | '441761000124103' | '441751000124100' | '228059003' | '441791000124106' | '228055009' | '228056005' | '441771000124105' | '228057001' | '228058006' | '228060008';

export enum TextureModifierEnum {
  /** Cut-up food */
  _228053002 = '228053002',
  /** Easy to chew food */
  _439091000124107 = '439091000124107',
  /** Chopped food */
  _228049004 = '228049004',
  /** Ground food */
  _441881000124103 = '441881000124103',
  /** Minced food */
  _441761000124103 = '441761000124103',
  /** Mashed food */
  _441751000124100 = '441751000124100',
  /** Soft food */
  _228059003 = '228059003',
  /** Strained food */
  _441791000124106 = '441791000124106',
  /** Liquidized food */
  _228055009 = '228055009',
  /** Lumpy food */
  _228056005 = '228056005',
  /** Moist food */
  _441771000124105 = '441771000124105',
  /** Semi-solid food */
  _228057001 = '228057001',
  /** Single texture food */
  _228058006 = '228058006',
  /** Solid food */
  _228060008 = '228060008',
}

export const TextureModifierValues = ['228053002', '439091000124107', '228049004', '441881000124103', '441761000124103', '441751000124100', '228059003', '441791000124106', '228055009', '228056005', '441771000124105', '228057001', '228058006', '228060008'] as const;
