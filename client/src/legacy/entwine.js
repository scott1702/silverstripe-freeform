import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';
// import { ApolloProvider } from 'react-apollo';
import { FormBuilderReducer } from 'freeform-builder';
import { createStore } from 'redux';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .freeform').entwine({
    onmatch() {
      const hiddenInput = this.next('input[type=hidden]');
      const store = createStore(FormBuilderReducer);
      const FreeformBuilder = loadComponent('FreeformBuilder', { store });
      const schemaData = this.data('schema');

      const props = {
        initialFields: JSON.parse(schemaData.initialFields),
      };

      store.subscribe(() => {
        const value = JSON.stringify(store.getState().fields);

        hiddenInput.val(value);
      });

      ReactDOM.render(
        <FreeformBuilder {...props} />,
        this[0]
      );
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });
});
