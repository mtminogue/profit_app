function grossProfitCalc() {
	var costCalc = jQuery('.calc-cost').val();
	var ptcCalc = jQuery('.calc-ptc').val();
	var grossProfitCalc = ((ptcCalc - costCalc)/ptcCalc)*100;
	jQuery('.calc-margin').val( grossProfitCalc.toFixed(2) );
};

function markupCalc() {
	var costCalc = jQuery('.calc-cost').val();
	var ptcCalc = jQuery('.calc-ptc').val();
	var markupCalc = ((ptcCalc - costCalc)/costCalc)*100;
	jQuery('.calc-markup').val( markupCalc.toFixed(2) );
};

function updateGrossProfitCalc() {
	jQuery('.calc-cost').change(grossProfitCalc);
	jQuery('.calc-ptc').change(grossProfitCalc);
	jQuery('.calc-cost').keyup(grossProfitCalc);
	jQuery('.calc-ptc').keyup(grossProfitCalc);
};

function updateMarkupCalc() {
	jQuery('.calc-cost').change(markupCalc);
	jQuery('.calc-ptc').change(markupCalc);
	jQuery('.calc-cost').keyup(markupCalc);
	jQuery('.calc-ptc').keyup(markupCalc);
};

jQuery(document).ready(function() {
	updateGrossProfitCalc();
	updateMarkupCalc();
	jQuery(document).on('page:change', function() {
		updateGrossProfitCalc();
		updateMarkupCalc();
	});
});