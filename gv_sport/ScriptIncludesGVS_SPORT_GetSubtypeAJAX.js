/*
 * Get subtypr choices
 */
var GVS_SPORT_GetSubtypeAJAX = Class.create();
GVS_SPORT_GetSubtypeAJAX.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	// returns subtype choices depends on type value
    getSubtype: function() {
        var choiceGR = new GlideRecord('sys_choice');
        var typeValue = this.getParameter('sysparm_type');
		choiceGR.addQuery('name', 'x_932835_gvs_sport_sport_challenge');
		choiceGR.addQuery('element', 'subtype');
		choiceGR.addQuery('dependent_value', typeValue);
		choiceGR.query();
		var subtypeValues = [];
		while (choiceGR.next()) {
			subtypeValues.push({fieldName: 'subtype', choiceValue: choiceGR.value.toString(), choiceLabel: choiceGR.label.toString()});
		}
        return global.JSON.stringify(subtypeValues);
    },
    type: 'GVS_SPORT_GetSubtypeAJAX'
});