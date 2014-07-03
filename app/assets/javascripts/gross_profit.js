//cost/ptc entered, calculates margin
function updateGrossProfit() {
	var cost = jQuery('.gross-profit-cost').val();
	var ptc = jQuery('.gross-profit-ptc').val();
	var margin = ((ptc - cost)/ptc)*100;
	jQuery('.gross-profit-margin').val( margin.toFixed(2) );
};

//cost/margin entered, calculates ptc
function updatePTCGrossProfit() {
	var cost = jQuery('.gross-profit-cost').val();
	var margin = jQuery('.gross-profit-margin').val()/100;
	var ptc = cost/( 1 - margin );
	jQuery('.gross-profit-ptc').val( ptc.toFixed(2) );
};

//updates margin when clicked
function updateGrossProfitClick() {
	jQuery('button').click(function() {
		updateGrossProfit();
	});
};

//updates margin when cost changed
function updateGrossProfitCost() {
	jQuery('.gross-profit-cost').change(updateGrossProfit);
};

//updates margin when ptc changed
function updateGrossProfitPTC() {
	jQuery('.gross-profit-ptc').change(updateGrossProfit);
};

//updates ptc when gross profit changed
function updateGrossProfitMarginPTC() {
	jQuery('.gross-profit-margin').change(updatePTCGrossProfit);
};

jQuery(document).ready(function() {
	updateGrossProfitClick();
	updateGrossProfitCost();
	updateGrossProfitPTC();
	updateGrossProfitMarginPTC();
	jQuery(document).on('page:change', function() {
		updateGrossProfitClick();
		updateGrossProfitCost();
		updateGrossProfitPTC();
		updateGrossProfitMarginPTC();
	});
});