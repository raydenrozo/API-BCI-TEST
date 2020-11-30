/** Represents a Indicator Economis Last structure structure.
* @interface
* @property {string} name
* @property {object} description
*/
export interface IIndicatorsDescription {
  name?: string;
  description?: {
    key?: string;
    name?: string;
    unit?: string;
    date?: string;
    value?: IIndicatorsValue[];
  };
}

/** Represents a value Indicator Economis Last structure.
* @interface
* @property {string} name
* @property {object} description
*/
export interface IIndicatorsValue {
  value?: string;
}
