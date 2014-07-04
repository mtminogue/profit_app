function unitCost() {
	var units = jQuery('.profitcrunch-units-case').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var unitCost = caseCost/units;
	jQuery('.profitcrunch-unit-cost').val( unitCost.toFixed(2) );
};

function totalProfit() {
	var unitPTC = jQuery('.profitcrunch-unit-ptc').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var units = jQuery('.profitcrunch-units-case').val();
	var totalProfit = unitPTC*units - caseCost;
	jQuery('.profitcrunch-total-profit').val( totalProfit.toFixed(2) );
};

function unitProfit() {
	var unitPTC = jQuery('.profitcrunch-unit-ptc').val();
	var units = jQuery('.profitcrunch-units-case').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var unitCost = caseCost/units;
	var unitProfit = unitPTC - unitCost;
	jQuery('.profitcrunch-unit-profit').val( unitProfit.toFixed(2) );
};

function grossProfit() {
	var unitPTC = jQuery('.profitcrunch-unit-ptc').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var units = jQuery('.profitcrunch-units-case').val();
	var grossProfit = (((unitPTC*units)-caseCost)/(unitPTC*units))*100;
	jQuery('.profitcrunch-gross-profit').val( grossProfit.toFixed(2) );
};

function markup() {
	var unitPTC = jQuery('.profitcrunch-unit-ptc').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var units = jQuery('.profitcrunch-units-case').val();
	var markup = (((unitPTC*units)-caseCost)/caseCost)*100;
	jQuery('.profitcrunch-markup').val( markup.toFixed(2) );
};

function updateUnitCost() {
	jQuery('.profitcrunch-units-case').change(unitCost);
	jQuery('.profitcrunch-case-cost').change(unitCost);
	jQuery('.profitcrunch-units-case').keyup(unitCost);
	jQuery('.profitcrunch-case-cost').keyup(unitCost);
};

function updateTotalProfit() {
	jQuery('.profitcrunch-units-case').change(totalProfit);
	jQuery('.profitcrunch-case-cost').change(totalProfit);
	jQuery('.profitcrunch-unit-ptc').change(totalProfit);
	jQuery('.profitcrunch-units-case').keyup(totalProfit);
	jQuery('.profitcrunch-case-cost').keyup(totalProfit);
	jQuery('.profitcrunch-unit-ptc').keyup(totalProfit);
};

function updateUnitProfit() {
	jQuery('.profitcrunch-unit-ptc').change(unitProfit);
	jQuery('.profitcrunch-units-case').change(unitProfit);
	jQuery('.profitcrunch-case-cost').change(unitProfit);
	jQuery('.profitcrunch-unit-ptc').keyup(unitProfit);
	jQuery('.profitcrunch-units-case').keyup(unitProfit);
	jQuery('.profitcrunch-case-cost').keyup(unitProfit);
};

function updateGrossProfit() {
	jQuery('.profitcrunch-unit-ptc').change(grossProfit);
	jQuery('.profitcrunch-case-cost').change(grossProfit);
	jQuery('.profitcrunch-units-case').change(grossProfit);
	jQuery('.profitcrunch-unit-ptc').keyup(grossProfit);
	jQuery('.profitcrunch-case-cost').keyup(grossProfit);
	jQuery('.profitcrunch-units-case').keyup(grossProfit);
};

function updateMarkup() {
	jQuery('.profitcrunch-unit-ptc').change(markup);
	jQuery('.profitcrunch-case-cost').change(markup);
	jQuery('.profitcrunch-units-case').change(markup);
	jQuery('.profitcrunch-unit-ptc').keyup(markup);
	jQuery('.profitcrunch-case-cost').keyup(markup);
	jQuery('.profitcrunch-units-case').keyup(markup);
};

jQuery(document).ready(function() {
	updateUnitCost();
	updateTotalProfit();
	updateUnitProfit();
	updateGrossProfit();
	updateMarkup();
	jQuery(document).on('page:change', function() {
		updateUnitCost();
		updateTotalProfit();
		updateUnitProfit();
		updateGrossProfit();
		updateMarkup();
	});
});