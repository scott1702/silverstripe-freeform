import Injector from 'lib/Injector';
import FreeformTransformer from '../transformers/FreeformTransformer';

export default () => {
    Injector.transform('freeformTransformer', (updater) => {
        updater.reducer('freeform', FreeformTransformer);
    });
};
