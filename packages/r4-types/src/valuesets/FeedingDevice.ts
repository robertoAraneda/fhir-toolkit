/**
 * Feeding Device Codes
 * 
 * Materials used or needed to feed the patient.
 *
 * @see http://hl7.org/fhir/ValueSet/feeding-device
 */

export type FeedingDeviceType = 'standard-nipple' | 'preemie-nipple' | 'ortho-nipple' | 'sloflo-nipple' | 'midflo-nipple' | 'bigcut-nipple' | 'haberman-bottle' | 'sippy-valve' | 'sippy-no-valve' | 'provale-cup' | 'glass-lid' | 'handhold-cup' | 'rubber-mat' | 'straw' | 'nose-cup' | 'scoop-plate' | 'utensil-holder' | 'foam-handle' | 'angled-utensil' | 'spout-cup' | 'autofeeding-device' | 'rocker-knife';

export enum FeedingDeviceEnum {
  /** Standard nipple */
  StandardNipple = 'standard-nipple',
  /** Preemie nipple */
  PreemieNipple = 'preemie-nipple',
  /** Orthodontic nipple */
  OrthoNipple = 'ortho-nipple',
  /** Slow flow nipple */
  SlofloNipple = 'sloflo-nipple',
  /** Middle flow nipple */
  MidfloNipple = 'midflo-nipple',
  /** Enlarged, cross-cut nipple */
  BigcutNipple = 'bigcut-nipple',
  /** Haberman bottle */
  HabermanBottle = 'haberman-bottle',
  /** Sippy cup with valve */
  SippyValve = 'sippy-valve',
  /** Sippy cup without valve */
  SippyNoValve = 'sippy-no-valve',
  /** Provale Cup */
  ProvaleCup = 'provale-cup',
  /** Glass with lid/sippy cup */
  GlassLid = 'glass-lid',
  /** Double handhold on glass/cup */
  HandholdCup = 'handhold-cup',
  /** Rubber matting under tray */
  RubberMat = 'rubber-mat',
  /** Straw */
  Straw = 'straw',
  /** Nose cup */
  NoseCup = 'nose-cup',
  /** Scoop plate */
  ScoopPlate = 'scoop-plate',
  /** Hand wrap utensil holder */
  UtensilHolder = 'utensil-holder',
  /** Foam handle utensils */
  FoamHandle = 'foam-handle',
  /** Angled utensils */
  AngledUtensil = 'angled-utensil',
  /** Spout cup */
  SpoutCup = 'spout-cup',
  /** Automated feeding devices */
  AutofeedingDevice = 'autofeeding-device',
  /** Rocker knife */
  RockerKnife = 'rocker-knife',
}

export const FeedingDeviceValues = ['standard-nipple', 'preemie-nipple', 'ortho-nipple', 'sloflo-nipple', 'midflo-nipple', 'bigcut-nipple', 'haberman-bottle', 'sippy-valve', 'sippy-no-valve', 'provale-cup', 'glass-lid', 'handhold-cup', 'rubber-mat', 'straw', 'nose-cup', 'scoop-plate', 'utensil-holder', 'foam-handle', 'angled-utensil', 'spout-cup', 'autofeeding-device', 'rocker-knife'] as const;
