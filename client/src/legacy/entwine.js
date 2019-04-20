import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .form__field-holder .freeform-builder').entwine({
    onmatch() {
      const FreeformBuilder = loadComponent('FreeformBuilder');
      // const schemaData = this.data('schema');

      const props = {
        // colors: schemaData.source,
        // value: schemaData.value,
        // name: schemaData.name,
      };

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
