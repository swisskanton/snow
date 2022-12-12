/**
 * Sets the Assignment Gropu depends on Subcategory
 */
var GVS_SPORT_GetGroupsForSportChallenge = Class.create();
GVS_SPORT_GetGroupsForSportChallenge.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    // returns groups which have the "Sport Challenge admin" role
    getListOfGroupsWithSportAdminRole: function() {
        /*
		var groupGR = new GlideRecord('sys_user_group');
        //groupGR.addEncodedQuery('active=true^roles=x_932835_gvs_sport.admin');
		groupGR.addQuery('active', true);
		groupGR.addQuery('roles', 'x_932835_gvs_sport.admin');
        groupGR.query();
        var sportChallengeGroups = [];
        while (groupGR.next()) {
            sportChallengeGroups.push(groupGR.sys_id.toString());
        }
        return 'sys_idIN' + sportChallengeGroups;
		*/
		return 'active=true^roles=x_932835_gvs_sport.admin';
    },
    // for the given incident set the Assignment Group depends on value of subcategory
    // if subcategory is not "Sport Challenge app" returns groups where group tyte is empty or itil
    // if subcategory is "Sport Challenge app" returns groups which have the "Sport Challenge admin" role
    setAssignmentGroupDependsOnSubcategory: function(incidentID) {
        var incidentGR = new GlideRecord('incident');
        incidentGR.get(incidentID);
        if (incidentGR.getValue('subcategory') == 'sportchallengeapp') {
            return this.getListOfGroupsWithSportAdminRole();
        } else {
			/*
            var itilGR = new GlideRecord('sys_user_group');
            itilGR.addEncodedQuery('active=true^typeISEMPTY^ORtypeLIKE' + gs.getProperty('x_932835_gvs_sport.gvs_sport.itil_group_type.sys_id'));
			itilGR.query();
            var sportChallengeItils = [];
            while (itilGR.next()) {
                sportChallengeItils.push(itilGR.sys_id.toString());
            }
            return 'sys_idIN' + sportChallengeItils;
			*/
			return 'active=true^typeISEMPTY^ORtypeLIKE' + gs.getProperty('x_932835_gvs_sport.gvs_sport.itil_group_type.sys_id');
        }
    },
    type: 'GVS_SPORT_GetGroupsForSportChallenge'
});