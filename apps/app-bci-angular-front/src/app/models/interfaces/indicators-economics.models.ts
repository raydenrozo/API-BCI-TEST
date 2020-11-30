import { IIndicatorsDescription } from './indicators-description.models';

/** Represents a Indicator Economis Last structure.
 * @interface
 * @property {boolean} ok
 * @property {indicators} indicators
 */
export interface IIndicatorsEconomics {
  ok?: boolean;
  indicators?: IIndicatorsDescription[];
}
