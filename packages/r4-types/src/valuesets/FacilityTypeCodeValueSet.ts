/**
 * Facility Type Code Value Set
 * 
 * This is the code representing the type of organizational setting where the clinical encounter, service, interaction, or treatment occurred. The value set used for Healthcare Facility Type has been defined by HITSP to be the value set reproduced from HITSP C80 Table 2-147.
 *
 * @see http://hl7.org/fhir/ValueSet/c80-facilitycodes
 */

export type FacilityTypeCodeValueSetType = '82242000' | '225732001' | '79993009' | '32074000' | '4322002' | '224687002' | '62480006' | '80522000' | '36125001' | '48311003' | '284546000' | '42665001' | '45618002' | '418518002' | '73770003' | '69362002' | '52668009' | '360957003' | '10206005' | '37550003' | '73644007' | '31628002' | '58482006' | '90484001' | '1814000' | '22549003' | '56293002' | '360966004' | '2849009' | '14866005' | '38238005' | '56189001' | '89972002' | '78088001' | '78001009' | '23392004' | '36293008' | '3729002' | '5584006' | '37546005' | '57159002' | '331006' | '50569004' | '79491001' | '33022008' | '19602009' | '39350007' | '83891005' | '394759007' | '405607001' | '309900005' | '275576008' | '10531005' | '91154008' | '41844007' | '45899008' | '51563005' | '1773006' | '72311000' | '6827000' | '309898008' | '39913001' | '77931003' | '25681007' | '20078004' | '46224007' | '81234003' | '35971002' | '11424001' | '409519008' | '901005' | '2081004' | '59374000' | '413456002' | '413817003' | '310205006' | '419955002' | '272501009' | '394777002';

export enum FacilityTypeCodeValueSetEnum {
  /** Hospital-children's */
  _82242000 = '82242000',
  /** Hospital-community */
  _225732001 = '225732001',
  /** Hospital-government */
  _79993009 = '79993009',
  /** Hospital-long term care */
  _32074000 = '32074000',
  /** Hospital-military field */
  _4322002 = '4322002',
  /** Hospital-prison */
  _224687002 = '224687002',
  /** Hospital-psychiatric */
  _62480006 = '62480006',
  /** Hospital-rehabilitation */
  _80522000 = '80522000',
  /** Hospital-trauma center */
  _36125001 = '36125001',
  /** Hospital-Veterans' Administration */
  _48311003 = '48311003',
  /** Hospice facility */
  _284546000 = '284546000',
  /** Nursing home */
  _42665001 = '42665001',
  /** Skilled nursing facility */
  _45618002 = '45618002',
  /** Dialysis unit--hospital */
  _418518002 = '418518002',
  /** Emergency department--hospital */
  _73770003 = '73770003',
  /** Hospital ambulatory surgery facility */
  _69362002 = '69362002',
  /** Hospital birthing center */
  _52668009 = '52668009',
  /** Hospital outpatient allergy clinic */
  _360957003 = '360957003',
  /** Hospital outpatient dental clinic */
  _10206005 = '10206005',
  /** Hospital outpatient dermatology clinic */
  _37550003 = '37550003',
  /** Hospital outpatient endocrinology clinic */
  _73644007 = '73644007',
  /** Hospital outpatient family medicine clinic */
  _31628002 = '31628002',
  /** Hospital outpatient gastroenterology clinic */
  _58482006 = '58482006',
  /** Hospital outpatient general surgery clinic */
  _90484001 = '90484001',
  /** Hospital outpatient geriatric health center */
  _1814000 = '1814000',
  /** Hospital outpatient gynecology clinic */
  _22549003 = '22549003',
  /** Hospital outpatient hematology clinic */
  _56293002 = '56293002',
  /** Hospital outpatient immunology clinic */
  _360966004 = '360966004',
  /** Hospital outpatient infectious disease clinic */
  _2849009 = '2849009',
  /** Hospital outpatient mental health center */
  _14866005 = '14866005',
  /** Hospital outpatient neurology clinic */
  _38238005 = '38238005',
  /** Hospital outpatient obstetrical clinic */
  _56189001 = '56189001',
  /** Hospital outpatient oncology clinic */
  _89972002 = '89972002',
  /** Hospital outpatient ophthalmology clinic */
  _78088001 = '78088001',
  /** Hospital outpatient orthopedics clinic */
  _78001009 = '78001009',
  /** Hospital outpatient otorhinolaryngology clinic */
  _23392004 = '23392004',
  /** Hospital outpatient pain clinic */
  _36293008 = '36293008',
  /** Hospital outpatient pediatric clinic */
  _3729002 = '3729002',
  /** Hospital outpatient peripheral vascular clinic */
  _5584006 = '5584006',
  /** Hospital outpatient rehabilitation clinic */
  _37546005 = '37546005',
  /** Hospital outpatient respiratory disease clinic */
  _57159002 = '57159002',
  /** Hospital outpatient rheumatology clinic */
  _331006 = '331006',
  /** Hospital outpatient urology clinic */
  _50569004 = '50569004',
  /** Hospital radiology facility */
  _79491001 = '79491001',
  /** Hospital-based outpatient clinic or department--OTHER-NOT LISTED */
  _33022008 = '33022008',
  /** Fee-for-service private physicians' group office */
  _19602009 = '19602009',
  /** Private physicians' group office */
  _39350007 = '39350007',
  /** Solo practice private office */
  _83891005 = '83891005',
  /** Independent ambulatory care provider site--OTHER--NOT LISTED */
  _394759007 = '394759007',
  /** Ambulatory surgery center */
  _405607001 = '405607001',
  /** Care of the elderly day hospital */
  _309900005 = '309900005',
  /** Elderly assessment clinic */
  _275576008 = '275576008',
  /** Free-standing ambulatory surgery facility */
  _10531005 = '10531005',
  /** Free-standing birthing center */
  _91154008 = '91154008',
  /** Free-standing geriatric health center */
  _41844007 = '41844007',
  /** Free-standing laboratory facility */
  _45899008 = '45899008',
  /** Free-standing mental health center */
  _51563005 = '51563005',
  /** Free-standing radiology facility */
  _1773006 = '1773006',
  /** Health maintenance organization */
  _72311000 = '72311000',
  /** Local community health center */
  _6827000 = '6827000',
  /** Psychogeriatric day hospital */
  _309898008 = '309898008',
  /** Residential school infirmary */
  _39913001 = '39913001',
  /** Rural health center */
  _77931003 = '77931003',
  /** Sexually transmitted disease health center */
  _25681007 = '25681007',
  /** Substance abuse treatment center */
  _20078004 = '20078004',
  /** Vaccination clinic */
  _46224007 = '46224007',
  /** Walk-in clinic */
  _81234003 = '81234003',
  /** Ambulatory care site--OTHER--NOT LISTED */
  _35971002 = '35971002',
  /** Ambulance-based care */
  _11424001 = '11424001',
  /** Contained casualty setting */
  _409519008 = '409519008',
  /** Helicopter-based care */
  _901005 = '901005',
  /** Hospital ship */
  _2081004 = '2081004',
  /** Traveler's aid clinic */
  _59374000 = '59374000',
  /** Adult day care center */
  _413456002 = '413456002',
  /** Child day care center */
  _413817003 = '413817003',
  /** Private residential home */
  _310205006 = '310205006',
  /** Residential institution */
  _419955002 = '419955002',
  /** Sports facility */
  _272501009 = '272501009',
  /** Health encounter site--NOT LISTED */
  _394777002 = '394777002',
}

export const FacilityTypeCodeValueSetValues = ['82242000', '225732001', '79993009', '32074000', '4322002', '224687002', '62480006', '80522000', '36125001', '48311003', '284546000', '42665001', '45618002', '418518002', '73770003', '69362002', '52668009', '360957003', '10206005', '37550003', '73644007', '31628002', '58482006', '90484001', '1814000', '22549003', '56293002', '360966004', '2849009', '14866005', '38238005', '56189001', '89972002', '78088001', '78001009', '23392004', '36293008', '3729002', '5584006', '37546005', '57159002', '331006', '50569004', '79491001', '33022008', '19602009', '39350007', '83891005', '394759007', '405607001', '309900005', '275576008', '10531005', '91154008', '41844007', '45899008', '51563005', '1773006', '72311000', '6827000', '309898008', '39913001', '77931003', '25681007', '20078004', '46224007', '81234003', '35971002', '11424001', '409519008', '901005', '2081004', '59374000', '413456002', '413817003', '310205006', '419955002', '272501009', '394777002'] as const;
