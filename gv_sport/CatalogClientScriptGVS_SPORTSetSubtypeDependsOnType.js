/*
 * When type change subtype is set depends on type
 */
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }
    g_form.clearOptions('subtype');
    var getSubtypeAJAX = new GlideAjax('GVS_SPORT_GetSubtypeAJAX');
    getSubtypeAJAX.addParam('sysparm_name', 'getSubtype');
    getSubtypeAJAX.addParam('sysparm_type', newValue);
    getSubtypeAJAX.getXML(setSubtype);
    // when type field has new value sets subtype choices
    function setSubtype(response) {
        var subtypeAnswer = response.responseXML.documentElement.getAttribute('answer');
        subtypeValues = JSON.parse(subtypeAnswer);
		g_form.addOption('subtype', '', '--None--');
        for (var i = 0; i < subtypeValues.length; i++) {
            g_form.addOption(subtypeValues[i].fieldName, subtypeValues[i].choiceValue, subtypeValues[i].choiceLabel);
        }
    }
}