//cost/ptc entered, calculates markup
function updateMarkup() {
	var cost = jQuery('.markup-cost').val();
	var ptc = jQuery('.markup-ptc').val();
	var markup = ((ptc - cost)/cost)*100;
	jQuery('.markup').val( markup.toFixed(2) );
};

function updatePTCMarkup() {
	var cost = jQuery('.markup-cost').val();
	var markup = jQuery('.markup').val()/100;
	var ptc = cost*(1 + markup);
	jQuery('.markup-ptc').val( ptc.toFixed(2) );
};

//updates markup when clicked
function updateMarkupClick() {
	jQuery('button').click(function() {
		updateMarkup();
	});
};

function updateMarkupPTC() {
	jQuery('.markup').change(updatePTCMarkup);
};

jQuery(document).ready(function() {
	updateMarkupClick();
	updateMarkupPTC();
	jQuery(document).on('page:change', function() {
		updateMarkupClick();
		updateMarkupPTC();
	});
});