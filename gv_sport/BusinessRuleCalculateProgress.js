// condition: current.target.changes() || current.current_status.changes()

/** 
 * Calculate the progress value when the target is not nil or not 0, from current_status and target values 
 * @param {object} current - The current record
 * @param {object} previous - The previous record
 */
(function executeRule(current, previous /*null when async*/ ) {

    if (!current.target.nil() && current.getValue('target') != '0') {
        current.progress = 100 * parseInt(current.getValue('current_status'), 10) / parseInt(current.getValue('target'), 10);
    } else {
        current.progress = 0;
    }
})(current, previous);