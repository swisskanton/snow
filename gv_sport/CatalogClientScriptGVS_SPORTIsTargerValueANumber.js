/**
 * Checks that the target is a numeric value
 * @param newValue is a current terget value
 */

// Checks the input where regexp is same as /^[0-9]*/
function onChange(control, oldValue, newValue, isLoading) {
    if (newValue == '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    var re = /^\d*$/;
    if (!re.test(newValue)) {
		getMessage('gvs_sport_catalog_item.target_value', function(msg){
			g_form.showFieldMsg('target_value', msg, 'error');
		});
        //getMessage("message_name", function(msg) { g_form.addErrorMessage(msg.withValues([variable]));  });
    }
}