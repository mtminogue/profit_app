//Regular
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

//Promotion
function unitCostPromo() {
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitCostPromo = caseCostPromo/unitsPromo;
	jQuery('.promo-profitcrunch-unit-cost').val( unitCostPromo.toFixed(2) );
};

function totalProfitPromo() {
	var unitPTCPromo = jQuery('.promo-profitcrunch-unit-ptc').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var totalProfitPromo = unitPTCPromo*unitsPromo - caseCostPromo;
	jQuery('.promo-profitcrunch-total-profit').val( totalProfitPromo.toFixed(2) );
};

function unitProfitPromo() {
	var unitPTCPromo = jQuery('.promo-profitcrunch-unit-ptc').val();
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitCostPromo = caseCostPromo/unitsPromo;
	var unitProfitPromo = unitPTCPromo - unitCostPromo;
	jQuery('.promo-profitcrunch-unit-profit').val( unitProfitPromo.toFixed(2) );
};

function grossProfitPromo() {
	var unitPTCPromo = jQuery('.promo-profitcrunch-unit-ptc').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var grossProfitPromo = (((unitPTCPromo*unitsPromo)-caseCostPromo)/(unitPTCPromo*unitsPromo))*100;
	jQuery('.promo-profitcrunch-gross-profit').val( grossProfitPromo.toFixed(2) );
};

function markupPromo() {
	var unitPTCPromo = jQuery('.promo-profitcrunch-unit-ptc').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var markupPromo = (((unitPTCPromo*unitsPromo)-caseCostPromo)/caseCostPromo)*100;
	jQuery('.promo-profitcrunch-markup').val( markupPromo.toFixed(2) );
};

function liftPromo() {
	var unitPTCPromo = jQuery('.promo-profitcrunch-unit-ptc').val();
	var caseCostPromo = jQuery('.promo-profitcrunch-case-cost').val();
	var unitsPromo = jQuery('.promo-profitcrunch-units-case').val();
	var totalProfitPromo = unitPTCPromo*unitsPromo - caseCostPromo;
	var unitPTC = jQuery('.profitcrunch-unit-ptc').val();
	var caseCost = jQuery('.profitcrunch-case-cost').val();
	var units = jQuery('.profitcrunch-units-case').val();
	var totalProfit = unitPTC*units - caseCost;
	var liftPromo = ((totalProfit/totalProfitPromo) - 1)*100;
	jQuery('.promo-lift').val( liftPromo.toFixed(2) );
}

function updateUnitCostPromo() {
	jQuery('.promo-profitcrunch-units-case').change(unitCostPromo);
	jQuery('.promo-profitcrunch-case-cost').change(unitCostPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(unitCostPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(unitCostPromo);
};

function updateTotalProfitPromo() {
	jQuery('.promo-profitcrunch-units-case').change(totalProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').change(totalProfitPromo);
	jQuery('.promo-profitcrunch-unit-ptc').change(totalProfitPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(totalProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(totalProfitPromo);
	jQuery('.promo-profitcrunch-unit-ptc').keyup(totalProfitPromo);
};

function updateUnitProfitPromo() {
	jQuery('.promo-profitcrunch-unit-ptc').change(unitProfitPromo);
	jQuery('.promo-profitcrunch-units-case').change(unitProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').change(unitProfitPromo);
	jQuery('.promo-profitcrunch-unit-ptc').keyup(unitProfitPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(unitProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(unitProfitPromo);
};

function updateGrossProfitPromo() {
	jQuery('.promo-profitcrunch-unit-ptc').change(grossProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').change(grossProfitPromo);
	jQuery('.promo-profitcrunch-units-case').change(grossProfitPromo);
	jQuery('.promo-profitcrunch-unit-ptc').keyup(grossProfitPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(grossProfitPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(grossProfitPromo);
};

function updateMarkupPromo() {
	jQuery('.promo-profitcrunch-unit-ptc').change(markupPromo);
	jQuery('.promo-profitcrunch-case-cost').change(markupPromo);
	jQuery('.promo-profitcrunch-units-case').change(markupPromo);
	jQuery('.promo-profitcrunch-unit-ptc').keyup(markupPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(markupPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(markupPromo);
};

function updateLiftPromo() {
	jQuery('.promo-profitcrunch-unit-ptc').change(liftPromo);
	jQuery('.promo-profitcrunch-case-cost').change(liftPromo);
	jQuery('.promo-profitcrunch-units-case').change(liftPromo);
	jQuery('.profitcrunch-unit-ptc').change(liftPromo);
	jQuery('.profitcrunch-case-cost').change(liftPromo);
	jQuery('.profitcrunch-units-case').change(liftPromo);
	jQuery('.promo-profitcrunch-unit-ptc').keyup(liftPromo);
	jQuery('.promo-profitcrunch-case-cost').keyup(liftPromo);
	jQuery('.promo-profitcrunch-units-case').keyup(liftPromo);
	jQuery('.profitcrunch-unit-ptc').keyup(liftPromo);
	jQuery('.profitcrunch-case-cost').keyup(liftPromo);
	jQuery('.profitcrunch-units-case').keyup(liftPromo);
}

jQuery(document).ready(function() {
	updateUnitCost();
	updateTotalProfit();
	updateUnitProfit();
	updateGrossProfit();
	updateMarkup();
	updateUnitCostPromo();
	updateTotalProfitPromo();
	updateUnitProfitPromo();
	updateGrossProfitPromo();
	updateMarkupPromo();
	updateLiftPromo();
	jQuery(document).on('page:change', function() {
		updateUnitCost();
		updateTotalProfit();
		updateUnitProfit();
		updateGrossProfit();
		updateMarkup();
		updateUnitCostPromo();
		updateTotalProfitPromo();
		updateUnitProfitPromo();
		updateGrossProfitPromo();
		updateMarkupPromo();
		updateLiftPromo();
	});
});