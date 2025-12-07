import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TimingRepeat } from '../../models/backbones/TimingRepeat.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DaysOfWeekType,
  EventTimingType,
  IDuration,
  IPeriod,
  IRange,
  ITimingRepeat,
  UnitsOfTimeType,
} from '@fhir-toolkit/r5-types';

/**
 * TimingRepeatBuilder - Fluent builder for TimingRepeat backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const timingRepeat = new TimingRepeatBuilder()
 *   .setCount(value)
 *   .addDayOfWeek({ ... })
 *   .build();
 */
export class TimingRepeatBuilder extends BackboneElementBuilder<TimingRepeat, ITimingRepeat> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set count
   * Number of times to repeat
   */
  setCount(count: number): this {
    this.data.count = count;
    return this;
  }

  /**
   * Set countMax
   * Maximum number of times to repeat
   */
  setCountMax(countMax: number): this {
    this.data.countMax = countMax;
    return this;
  }

  /**
   * Set duration
   * How long when it happens
   */
  setDuration(duration: number): this {
    this.data.duration = duration;
    return this;
  }

  /**
   * Set durationMax
   * How long when it happens (Max)
   */
  setDurationMax(durationMax: number): this {
    this.data.durationMax = durationMax;
    return this;
  }

  /**
   * Set durationUnit
   * s | min | h | d | wk | mo | a - unit of time (UCUM)
   */
  setDurationUnit(durationUnit: UnitsOfTimeType): this {
    this.data.durationUnit = durationUnit;
    return this;
  }

  /**
   * Set frequency
   * Indicates the number of repetitions that should occur within a period. I.e. Event occurs frequency times per period
   */
  setFrequency(frequency: number): this {
    this.data.frequency = frequency;
    return this;
  }

  /**
   * Set frequencyMax
   * Event occurs up to frequencyMax times per period
   */
  setFrequencyMax(frequencyMax: number): this {
    this.data.frequencyMax = frequencyMax;
    return this;
  }

  /**
   * Set period
   * The duration to which the frequency applies. I.e. Event occurs frequency times per period
   */
  setPeriod(period: number): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set periodMax
   * Upper limit of period (3-4 hours)
   */
  setPeriodMax(periodMax: number): this {
    this.data.periodMax = periodMax;
    return this;
  }

  /**
   * Set periodUnit
   * s | min | h | d | wk | mo | a - unit of time (UCUM)
   */
  setPeriodUnit(periodUnit: UnitsOfTimeType): this {
    this.data.periodUnit = periodUnit;
    return this;
  }

  /**
   * Set offset
   * Minutes from event (before or after)
   */
  setOffset(offset: number): this {
    this.data.offset = offset;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set bounds choice type (boundsDuration, boundsRange, boundsPeriod)
   * @param type - 'Duration' | 'Range' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setBounds('Duration', value)
   */
  setBounds<T extends 'Duration' | 'Range' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `bounds${type}` as keyof ITimingRepeat;
    const otherKeys: (keyof ITimingRepeat)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('boundsDuration' as keyof ITimingRepeat);
      otherKeys.push('_boundsDuration' as keyof ITimingRepeat);
    }
    if (type !== 'Range') {
      otherKeys.push('boundsRange' as keyof ITimingRepeat);
      otherKeys.push('_boundsRange' as keyof ITimingRepeat);
    }
    if (type !== 'Period') {
      otherKeys.push('boundsPeriod' as keyof ITimingRepeat);
      otherKeys.push('_boundsPeriod' as keyof ITimingRepeat);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add dayOfWeek
   * mon | tue | wed | thu | fri | sat | sun
   */
  addDayOfWeek(dayOfWeek: DaysOfWeekType): this {
    return this.addToArray('dayOfWeek', dayOfWeek);
  }

  /**
   * Add timeOfDay
   * Time of day for action
   */
  addTimeOfDay(timeOfDay: string): this {
    return this.addToArray('timeOfDay', timeOfDay);
  }

  /**
   * Add when
   * Code for time period of occurrence
   */
  addWhen(when: EventTimingType): this {
    return this.addToArray('when', when);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TimingRepeat instance
   */
  build(): TimingRepeat {
    return new TimingRepeat(this.data);
  }

  /**
   * Build and validate the TimingRepeat instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TimingRepeat> {
    const timingRepeat = this.build();
    await timingRepeat.validateOrThrow();
    return timingRepeat;
  }
}
