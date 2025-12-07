/**
 * Combined Dose Form
 * 
 * Dose forms for a product as a whole, considering all individual parts, but before any mixing
 *
 * @see http://hl7.org/fhir/ValueSet/combined-dose-form
 */

export type CombinedDoseFormType = '100000073366' | '100000073651' | '100000073774' | '100000073781' | '100000073801' | '100000073860' | '100000073868' | '100000073869' | '100000073884' | '100000073891' | '100000073892' | '100000073941' | '100000073972' | '100000073973' | '100000073974' | '100000073975' | '100000073987' | '100000073988' | '100000073989' | '100000073990' | '100000073999' | '100000074015' | '100000074016' | '100000074017' | '100000074018' | '100000074030' | '100000074031' | '100000074032' | '100000074048' | '100000074051' | '100000074053' | '100000074056' | '100000074057' | '100000074061' | '100000074064' | '100000075580' | '100000075584' | '100000075587' | '100000116137' | '100000116141' | '100000116155' | '100000116160' | '100000116172' | '100000116173' | '100000116174' | '100000116175' | '100000116176' | '100000116177' | '100000116179' | '100000125746' | '100000125747' | '100000125777' | '100000136318' | '100000136325' | '100000136558' | '100000136560' | '100000136907' | '100000143502' | '100000143546' | '100000143552' | '100000156068' | '100000157796' | '100000164467' | '100000169997' | '100000170588' | '100000171127' | '100000171193' | '100000171238' | '100000171935' | '100000174065' | '200000002161' | '200000002287' | '200000004201' | '200000004819' | '200000004820' | '200000005547' | '200000010382';

export enum CombinedDoseFormEnum {
  /** Powder and solvent for oral solution */
  _100000073366 = '100000073366',
  /** Powder and solvent for oral suspension */
  _100000073651 = '100000073651',
  /** Eye drops, powder and solvent for solution */
  _100000073774 = '100000073774',
  /** Eye drops, powder and solvent for suspension */
  _100000073781 = '100000073781',
  /** Ear drops, powder and solvent for suspension */
  _100000073801 = '100000073801',
  /** Powder and solvent for solution for infusion */
  _100000073860 = '100000073860',
  /** Powder and solvent for solution for injection */
  _100000073868 = '100000073868',
  /** Powder and solvent for suspension for injection */
  _100000073869 = '100000073869',
  /** Powder and solvent for implantation paste */
  _100000073884 = '100000073884',
  /** Endotracheopulmonary instillation, powder and solvent for solution */
  _100000073891 = '100000073891',
  /** Powder and solvent for endocervical gel */
  _100000073892 = '100000073892',
  /** Powder and solvent for sealant */
  _100000073941 = '100000073941',
  /** Concentrate and solvent for concentrate for solution for infusion */
  _100000073972 = '100000073972',
  /** Concentrate and solvent for cutaneous use */
  _100000073973 = '100000073973',
  /** Concentrate and solvent for injection */
  _100000073974 = '100000073974',
  /** Concentrate and solvent for solution for infusion */
  _100000073975 = '100000073975',
  /** Concentrate and diluent for solution for infusion */
  _100000073987 = '100000073987',
  /** Concentrate and solvent for cutaneous solution */
  _100000073988 = '100000073988',
  /** Concentrate and solvent for solution for injection */
  _100000073989 = '100000073989',
  /** Concentrate and solvent for suspension for injection */
  _100000073990 = '100000073990',
  /** Granules and solvent for suspension for injection */
  _100000073999 = '100000073999',
  /** Powder and solvent for concentrate for solution for infusion */
  _100000074015 = '100000074015',
  /** Powder and solvent for cutaneous solution */
  _100000074016 = '100000074016',
  /** Powder and solvent for gingival gel */
  _100000074017 = '100000074017',
  /** Powder and solvent for prolonged-release suspension for injection */
  _100000074018 = '100000074018',
  /** Powder and solvent for endosinusial solution */
  _100000074030 = '100000074030',
  /** Powder and solvent for intraocular instillation solution */
  _100000074031 = '100000074031',
  /** Powder and suspension for suspension for injection */
  _100000074032 = '100000074032',
  /** Suspension and effervescent granules for oral suspension */
  _100000074048 = '100000074048',
  /** Tablet and solvent for rectal suspension */
  _100000074051 = '100000074051',
  /** Powder and solvent for dental gel */
  _100000074053 = '100000074053',
  /** Gas and solvent for dispersion for injection/infusion */
  _100000074056 = '100000074056',
  /** Powder and solvent for solution for injection/infusion */
  _100000074057 = '100000074057',
  /** Suspension and solution for spray */
  _100000074061 = '100000074061',
  /** Tablet and powder for oral solution */
  _100000074064 = '100000074064',
  /** Emulsion and suspension for emulsion for injection */
  _100000075580 = '100000075580',
  /** Powder and solvent for dispersion for injection */
  _100000075584 = '100000075584',
  /** Powder for mouth wash */
  _100000075587 = '100000075587',
  /** Lyophilisate and solvent for solution for injection */
  _100000116137 = '100000116137',
  /** Fibrin sealant-powder and solvent for fibrin sealant */
  _100000116141 = '100000116141',
  /** Granules and solvent for oral suspension */
  _100000116155 = '100000116155',
  /** Lyophilisate and solvent for suspension for injection */
  _100000116160 = '100000116160',
  /** Powder and gel for gel */
  _100000116172 = '100000116172',
  /** Powder and solution for solution for injection */
  _100000116173 = '100000116173',
  /** Powder and solvent for epilesional solution */
  _100000116174 = '100000116174',
  /** Powder and solvent for intravesical solution */
  _100000116175 = '100000116175',
  /** Powder and solvent for intravesical suspension */
  _100000116176 = '100000116176',
  /** Powder and solvent for nebuliser solution */
  _100000116177 = '100000116177',
  /** Powder, dispersion and solvent for concentrate for dispersion for infusion */
  _100000116179 = '100000116179',
  /** Powder and solvent for emulsion for injection */
  _100000125746 = '100000125746',
  /** Nasal drops, powder and solvent for solution */
  _100000125747 = '100000125747',
  /** Suspension and solvent for suspension for injection */
  _100000125777 = '100000125777',
  /** Concentrate and solvent for solution for injection/infusion */
  _100000136318 = '100000136318',
  /** Powder and solvent for solution for injection/skin-prick test */
  _100000136325 = '100000136325',
  /** Lyophilisate and solvent for suspension for nasal administration */
  _100000136558 = '100000136558',
  /** Powder and solvent for solution for sealant */
  _100000136560 = '100000136560',
  /** Solution for dispersion for injection/infusion */
  _100000136907 = '100000136907',
  /** Powder and solution for dental cement */
  _100000143502 = '100000143502',
  /** Endotracheopulmonary instillation, powder and solvent for suspension */
  _100000143546 = '100000143546',
  /** Powder, solvent and matrix for implantation matrix */
  _100000143552 = '100000143552',
  /** Nasal drops, lyophilisate and solvent for suspension */
  _100000156068 = '100000156068',
  /** Lyophilisate and suspension for suspension for injection */
  _100000157796 = '100000157796',
  /** Powder for concentrate and solution for solution for infusion */
  _100000164467 = '100000164467',
  /** Powder and solution for bee-hive solution */
  _100000169997 = '100000169997',
  /** Suspension and solvent for oral spray */
  _100000170588 = '100000170588',
  /** Lyophilisate and solvent for oral suspension */
  _100000171127 = '100000171127',
  /** Concentrate and solvent for concentrate for oral spray, suspension */
  _100000171193 = '100000171193',
  /** Lyophilisate and solvent for oculonasal suspension */
  _100000171238 = '100000171238',
  /** Emulsion and lyophilisate for suspension for injection */
  _100000171935 = '100000171935',
  /** Powder and solvent for syrup */
  _100000174065 = '100000174065',
  /** Nasal spray, lyophilisate and solvent for suspension */
  _200000002161 = '200000002161',
  /** Powder and solution for bee-hive dispersion */
  _200000002287 = '200000002287',
  /** Solution and dispersion for nebuliser dispersion */
  _200000004201 = '200000004201',
  /** Effervescent powder and powder for oral suspension */
  _200000004819 = '200000004819',
  /** Lyophilisate and solvent for emulsion for injection */
  _200000004820 = '200000004820',
  /** Powder and solution for suspension for injection */
  _200000005547 = '200000005547',
  /** Lyophilisate and solvent for suspension for nasal spray or injection */
  _200000010382 = '200000010382',
}

export const CombinedDoseFormValues = ['100000073366', '100000073651', '100000073774', '100000073781', '100000073801', '100000073860', '100000073868', '100000073869', '100000073884', '100000073891', '100000073892', '100000073941', '100000073972', '100000073973', '100000073974', '100000073975', '100000073987', '100000073988', '100000073989', '100000073990', '100000073999', '100000074015', '100000074016', '100000074017', '100000074018', '100000074030', '100000074031', '100000074032', '100000074048', '100000074051', '100000074053', '100000074056', '100000074057', '100000074061', '100000074064', '100000075580', '100000075584', '100000075587', '100000116137', '100000116141', '100000116155', '100000116160', '100000116172', '100000116173', '100000116174', '100000116175', '100000116176', '100000116177', '100000116179', '100000125746', '100000125747', '100000125777', '100000136318', '100000136325', '100000136558', '100000136560', '100000136907', '100000143502', '100000143546', '100000143552', '100000156068', '100000157796', '100000164467', '100000169997', '100000170588', '100000171127', '100000171193', '100000171238', '100000171935', '100000174065', '200000002161', '200000002287', '200000004201', '200000004819', '200000004820', '200000005547', '200000010382'] as const;
