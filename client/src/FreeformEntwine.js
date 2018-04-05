import jQuery from 'jquery';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .freeform').entwine({
      onmatch() {
          this._super();

          console.log('match');
      }
  });
});
