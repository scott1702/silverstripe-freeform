/* global window */
import Injector from 'lib/Injector';
import { FreeformBuilder } from 'freeform-builder';

console.log(FreeformBuilder);

export default () => {
  Injector.component.register('FreeformBuilder', FreeformBuilder);
};
