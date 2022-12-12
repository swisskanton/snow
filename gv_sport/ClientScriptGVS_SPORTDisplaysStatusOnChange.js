// type: onChange

// message: gvs_sport.current_status.on_change > New current status:

/** 
 * Display the current status on client when a contribution record is changed
 */
// gets sys_id of a record and shows the record current status
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }
	g_form.hideFieldMsg('contribution');
	var getCurrentStatusAJAX = new GlideAjax('GVS_SPORT_GetCurrentStatusAJAX');
	getCurrentStatusAJAX.addParam('sysparm_name', 'getCurrentStatus');
	getCurrentStatusAJAX.addParam('sysparm_challengeID', g_form.getValue('challenge'));
	getCurrentStatusAJAX.getXML(setCurrentStatus);
	// shows the currenr status
	function setCurrentStatus(response) {
		var currentStatusValue = parseInt(response.responseXML.documentElement.getAttribute('answer'), 10) || 0;
		//var currentStatusValue = parseInt(getCurrentStatusAJAX.getAnswer(), 10);
		oldValue = parseInt(oldValue, 10) || 0;
		newValue = parseInt(newValue, 10) || 0;
		var newCurrentStatusValue = currentStatusValue - oldValue + newValue;
		g_form.showFieldMsg('contribution', getMessage('gvs_sport.current_status.on_change') + ' ' + newCurrentStatusValue, 'info');
	}
}