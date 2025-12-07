/**
 * ContainerCap
 * 
 * Color of the container cap.
 *
 * @see http://hl7.org/fhir/ValueSet/container-cap
 */

export type ContainerCapType = 'red' | 'yellow' | 'dark-yellow' | 'grey' | 'light-blue' | 'black' | 'green' | 'light-green' | 'lavender' | 'brown' | 'white' | 'pink';

export enum ContainerCapEnum {
  /** red cap */
  Red = 'red',
  /** yellow cap */
  Yellow = 'yellow',
  /** dark yellow cap */
  DarkYellow = 'dark-yellow',
  /** grey cap */
  Grey = 'grey',
  /** light blue cap */
  LightBlue = 'light-blue',
  /** black cap */
  Black = 'black',
  /** green cap */
  Green = 'green',
  /** light green cap */
  LightGreen = 'light-green',
  /** lavender cap */
  Lavender = 'lavender',
  /** brown cap */
  Brown = 'brown',
  /** white cap */
  White = 'white',
  /** pink cap */
  Pink = 'pink',
}

export const ContainerCapValues = ['red', 'yellow', 'dark-yellow', 'grey', 'light-blue', 'black', 'green', 'light-green', 'lavender', 'brown', 'white', 'pink'] as const;
