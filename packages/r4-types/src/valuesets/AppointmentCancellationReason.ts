/**
 * Appointment cancellation reason
 * 
 * This example value set defines a set of reasons for the cancellation of an appointment.
 *
 * @see http://hl7.org/fhir/ValueSet/appointment-cancellation-reason
 */

export type AppointmentCancellationReasonType = 'pat' | 'pat-crs' | 'pat-cpp' | 'pat-dec' | 'pat-fb' | 'pat-lt' | 'pat-mt' | 'pat-mv' | 'pat-preg' | 'pat-swl' | 'pat-ucp' | 'prov' | 'prov-pers' | 'prov-dch' | 'prov-edu' | 'prov-hosp' | 'prov-labs' | 'prov-mri' | 'prov-onc' | 'maint' | 'meds-inc' | 'other' | 'oth-cms' | 'oth-err' | 'oth-fin' | 'oth-iv' | 'oth-int' | 'oth-mu' | 'oth-room' | 'oth-oerr' | 'oth-swie' | 'oth-weath';

export enum AppointmentCancellationReasonEnum {
  /** Patient */
  Pat = 'pat',
  /** Patient: Canceled via automated reminder system */
  PatCrs = 'pat-crs',
  /** Patient: Canceled via Patient Portal */
  PatCpp = 'pat-cpp',
  /** Patient: Deceased */
  PatDec = 'pat-dec',
  /** Patient: Feeling Better */
  PatFb = 'pat-fb',
  /** Patient: Lack of Transportation */
  PatLt = 'pat-lt',
  /** Patient: Member Terminated */
  PatMt = 'pat-mt',
  /** Patient: Moved */
  PatMv = 'pat-mv',
  /** Patient: Pregnant */
  PatPreg = 'pat-preg',
  /** Patient: Scheduled from Wait List */
  PatSwl = 'pat-swl',
  /** Patient: Unhappy/Changed Provider */
  PatUcp = 'pat-ucp',
  /** Provider */
  Prov = 'prov',
  /** Provider: Personal */
  ProvPers = 'prov-pers',
  /** Provider: Discharged */
  ProvDch = 'prov-dch',
  /** Provider: Edu/Meeting */
  ProvEdu = 'prov-edu',
  /** Provider: Hospitalized */
  ProvHosp = 'prov-hosp',
  /** Provider: Labs Out of Acceptable Range */
  ProvLabs = 'prov-labs',
  /** Provider: MRI Screening Form Marked Do Not Proceed */
  ProvMri = 'prov-mri',
  /** Provider: Oncology Treatment Plan Changes */
  ProvOnc = 'prov-onc',
  /** Equipment Maintenance/Repair */
  Maint = 'maint',
  /** Prep/Med Incomplete */
  MedsInc = 'meds-inc',
  /** Other */
  Other = 'other',
  /** Other: CMS Therapy Cap Service Not Authorized */
  OthCms = 'oth-cms',
  /** Other: Error */
  OthErr = 'oth-err',
  /** Other: Financial */
  OthFin = 'oth-fin',
  /** Other: Improper IV Access/Infiltrate IV */
  OthIv = 'oth-iv',
  /** Other: No Interpreter Available */
  OthInt = 'oth-int',
  /** Other: Prep/Med/Results Unavailable */
  OthMu = 'oth-mu',
  /** Other: Room/Resource Maintenance */
  OthRoom = 'oth-room',
  /** Other: Schedule Order Error */
  OthOerr = 'oth-oerr',
  /** Other: Silent Walk In Error */
  OthSwie = 'oth-swie',
  /** Other: Weather */
  OthWeath = 'oth-weath',
}

export const AppointmentCancellationReasonValues = ['pat', 'pat-crs', 'pat-cpp', 'pat-dec', 'pat-fb', 'pat-lt', 'pat-mt', 'pat-mv', 'pat-preg', 'pat-swl', 'pat-ucp', 'prov', 'prov-pers', 'prov-dch', 'prov-edu', 'prov-hosp', 'prov-labs', 'prov-mri', 'prov-onc', 'maint', 'meds-inc', 'other', 'oth-cms', 'oth-err', 'oth-fin', 'oth-iv', 'oth-int', 'oth-mu', 'oth-room', 'oth-oerr', 'oth-swie', 'oth-weath'] as const;
