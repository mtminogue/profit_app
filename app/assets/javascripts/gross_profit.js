function updateGrossProfit() {
	var cost = jQuery('.gross-profit-cost').val();
	var ptc = jQuery('.gross-profit-ptc').val();
	var margin = ((ptc - cost)/ptc)*100;
	jQuery('.gross-profit-margin').val( margin.toFixed(2) );
};

function updatePTC() {
	var cost = jQuery('.gross-profit-cost').val();
	var margin = jQuery('.gross-profit-margin').val()/100;
	var ptc = cost/( 1 - margin );
	jQuery('.gross-profit-ptc').val( ptc.toFixed(2) );
};

function updateGrossProfitClick() {
	jQuery('button').click(function() {
		updateGrossProfit();
	});
};

function updateGrossProfitCost() {
	jQuery('.gross-profit-cost').change(updateGrossProfit);
};

function updateGrossProfitPTC() {
	jQuery('.gross-profit-ptc').change(updateGrossProfit);
};

function updateGrossProfitMarginPTC() {
	jQuery('.gross-profit-margin').change(updatePTC);
}

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