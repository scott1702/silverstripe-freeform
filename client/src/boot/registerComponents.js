/* global window */
import Injector from 'lib/Injector';
import FreeformBuilder from 'freeform-builder';

export default () => {
  Injector.component.register('FreeformBuilder', FreeformBuilder);
};
