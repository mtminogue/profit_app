function toggle() {
	jQuery('.toggle').click(function() {
		jQuery('.toggle').siblings('p').slideToggle();
		return false;
	});
};

jQuery(document).on('page:load ready', function() {
	jQuery('.toggle').siblings('p').hide();
	toggle();
});
