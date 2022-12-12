// condition: !gs.hasRole('x_932835_gvs_sport.admin', 'admin')

/**
 * Only that user can see sport challenge records where he/she is listed in the "Employees" field.
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	current.addQuery('employees', 'CONTAINS', gs.getUserID());
})(current, previous);