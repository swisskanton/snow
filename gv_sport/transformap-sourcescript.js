answer = (function transformEntry(source) {

	// Add your code here
	var GR =  new GlideRecord('u_sport_challenge');
	GR.addQuery('u_challenge.u_name','source.u_challenge');
	GR.query();
	if (GR.next()) {	
		return GR.getValue('sys_id');
	}
})(source);