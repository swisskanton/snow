// condition: gs.hasRole("x_932835_gvs_sport.user")&&!gs.hasRole("admin")

/**
 * Only that user can see contributions records where he/she is listed in the "Employees" field.
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	current.addQuery('employee', 'CONTAINS', gs.getUserID());
})(current, previous);