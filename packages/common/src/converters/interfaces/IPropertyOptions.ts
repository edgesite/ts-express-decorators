import {Type} from "@tsed/core";

export interface IPropertyOptions<T = any> {
  name?: string;
  use?: Type<any>;
  encode?: (value: T) => any;
  decode?: (encoded: any) => T;
}
