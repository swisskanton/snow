// condition: -

/** 
 * Set the value from the related sport challenge record's field "Current status" to scratchpad
 */
(function executeRule(current, previous /*null when async*/ ) {

	//if (!current.challenge.nil()) {
		g_scratchpad.current_status = current.challenge.current_status.toString() || 0;
    //}

})(current, previous);