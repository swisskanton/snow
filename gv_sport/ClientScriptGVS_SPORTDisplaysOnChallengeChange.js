// type: onChange

// message: gvs_sport.current_status.on_change > New current status:

/*
 * When changing a challenge, display the new current status of the new challenge
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
     var getCurrentStatusAJAX = new GlideAjax('GVS_SPORT_GetCurrentStatusAJAX');
     getCurrentStatusAJAX.addParam('sysparm_name', 'getCurrentStatus');
     getCurrentStatusAJAX.addParam('sysparm_challengeID', newValue);
     getCurrentStatusAJAX.getXML(setCurrentStatus);
     // display the new current status of the new challenge 
     function setCurrentStatus(response) {
         var currentStatusValue = parseInt(response.responseXML.documentElement.getAttribute('answer'), 10) || 0;
         g_form.hideFieldMsg('contribution');
         g_form.showFieldMsg('contribution', getMessage('gvs_sport.current_status.on_change') + ' ' + currentStatusValue, 'info');
     }
 }