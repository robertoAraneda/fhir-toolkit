/**
 * Questionnaire Item UI Control Codes
 * 
 * Starter set of user interface control/display mechanisms that might be used when rendering an item in a questionnaire.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-item-control
 */

export type QuestionnaireItemUIControlType = 'group' | 'list' | 'table' | 'htable' | 'gtable' | 'atable' | 'header' | 'footer' | 'text' | 'inline' | 'prompt' | 'unit' | 'lower' | 'upper' | 'flyover' | 'help' | 'question' | 'autocomplete' | 'drop-down' | 'check-box' | 'lookup' | 'radio-button' | 'slider' | 'spinner' | 'text-box';

export enum QuestionnaireItemUIControlEnum {
  Group = 'group',
  /** List */
  List = 'list',
  /** Vertical Answer Table */
  Table = 'table',
  /** Horizontal Answer Table */
  Htable = 'htable',
  /** Group Table */
  Gtable = 'gtable',
  /** Answer Table */
  Atable = 'atable',
  /** Header */
  Header = 'header',
  /** Footer */
  Footer = 'footer',
  Text = 'text',
  /** In-line */
  Inline = 'inline',
  /** Prompt */
  Prompt = 'prompt',
  /** Unit */
  Unit = 'unit',
  /** Lower-bound */
  Lower = 'lower',
  /** Upper-bound */
  Upper = 'upper',
  /** Fly-over */
  Flyover = 'flyover',
  /** Help-Button */
  Help = 'help',
  Question = 'question',
  /** Auto-complete */
  Autocomplete = 'autocomplete',
  /** Drop down */
  DropDown = 'drop-down',
  /** Check-box */
  CheckBox = 'check-box',
  /** Lookup */
  Lookup = 'lookup',
  /** Radio Button */
  RadioButton = 'radio-button',
  /** Slider */
  Slider = 'slider',
  /** Spinner */
  Spinner = 'spinner',
  /** Text Box */
  TextBox = 'text-box',
}

export const QuestionnaireItemUIControlValues = ['group', 'list', 'table', 'htable', 'gtable', 'atable', 'header', 'footer', 'text', 'inline', 'prompt', 'unit', 'lower', 'upper', 'flyover', 'help', 'question', 'autocomplete', 'drop-down', 'check-box', 'lookup', 'radio-button', 'slider', 'spinner', 'text-box'] as const;
