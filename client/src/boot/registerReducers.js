import Injector from 'lib/Injector';
import { FormBuilderReducer } from 'freeform-builder';

export default () => {
    Injector.reducer.register('freeform', FormBuilderReducer);
};
