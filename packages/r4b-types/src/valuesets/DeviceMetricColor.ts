/**
 * DeviceMetricColor
 * 
 * Describes the typical color of representation.
 *
 * @see http://hl7.org/fhir/ValueSet/metric-color
 */

export type DeviceMetricColorType = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export enum DeviceMetricColorEnum {
  /** Color Black */
  Black = 'black',
  /** Color Red */
  Red = 'red',
  /** Color Green */
  Green = 'green',
  /** Color Yellow */
  Yellow = 'yellow',
  /** Color Blue */
  Blue = 'blue',
  /** Color Magenta */
  Magenta = 'magenta',
  /** Color Cyan */
  Cyan = 'cyan',
  /** Color White */
  White = 'white',
}

export const DeviceMetricColorValues = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'] as const;
