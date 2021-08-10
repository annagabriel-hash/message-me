// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from '@rails/ujs';
import Turbolinks from 'turbolinks';
import * as ActiveStorage from '@rails/activestorage';
import 'channels';

Rails.start();
Turbolinks.start();
ActiveStorage.start();
import 'jquery';
import '@doabit/semantic-ui-sass';

export const scrollBottom = function () {
	const section = $("div[data-scroll='auto']");
	if (section.length > 0) {
		section.scrollTop(section[0].scrollHeight);
	}
};
const resetFormOnSubmit = function() {
  const form = $("form[data-onsubmit='reset']");
  form.on('ajax:success', function(e) {
    e.target.reset();
  })
}
$(document).on('turbolinks:load', () => {
	$('.ui.dropdown').dropdown();
	$('.message .close').on('click', function () {
		$(this).closest('.message').transition('fade');
	});
	scrollBottom();
  resetFormOnSubmit();
});
