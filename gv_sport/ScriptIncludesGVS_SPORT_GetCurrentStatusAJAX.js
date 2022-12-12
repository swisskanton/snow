/**  
 * Gets a record's sys_id and returns the record's current_status value
 */
var GVS_SPORT_GetCurrentStatusAJAX = Class.create();
GVS_SPORT_GetCurrentStatusAJAX.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	// gets the sys_id (by sysparm_challenge) and returns the current_status
    getCurrentStatus: function() {
        var challengeGR = new GlideRecordSecure('x_932835_gvs_sport_sport_challenge');
        var sysID = this.getParameter('sysparm_challengeID');
		var current_status = 0;
        if (challengeGR.get(sysID)) {
			current_status = challengeGR.getValue('current_status');
		}
        return current_status;
    },
    type: 'GVS_SPORT_GetCurrentStatusAJAX'
});