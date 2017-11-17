import Ember from 'ember';

export default Ember.Component.extend({
	one: 1,
	didRender() {
		// let $window = $(window);
		// let $stickyEl = $(".recipe-title");
		// let elTop = $stickyEl.offset().top - 25;
		// let cards = $(".cards");


		// Action listeners
		// $window.scroll(function() {
		//   cards.toggleClass("sticky-spacer", $window.scrollTop() > elTop + 1);
		//   $stickyEl.toggleClass("sticky", $window.scrollTop() > elTop + 1);
		// });


		//INIT Fnction
		$(function() {
		  checkStepLines();
		});
		
		$(window).resize(function() {
		  checkStepLines();
		});

		//fuctions
		function checkStepLines() {
		  // save selector to UL
		  let $liArray = $(".steps ol").children("li");

		  let lineHeight = 20;
		  $liArray.each(function() {
		    let $this = $(this);
		    $this.removeClass("oneLine");
		    $this.removeClass("twoLine");

		    if ($this.children("p").height() == lineHeight) {
		      $this.addClass("oneLine");
		      return true;
		    }
		    if ($this.children("p").height() == lineHeight * 2) {
		      $this.addClass("twoLine");
		      return true;
		    }
		  });
		}
	}
});
