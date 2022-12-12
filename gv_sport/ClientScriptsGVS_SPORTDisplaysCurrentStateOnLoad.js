// type: onLoad

// message: gvs_sport.current_status.on_load > Current status: 

/** 
 * Display the current status on client when a contribution record is opened
 * @param {integer} g_scratchpad.current_statusis - value of Current Status field
 * @returns message on the form
 */
// Shows an info message and the current status
function onLoad() {
    if (typeof g_scratchpad.current_status != 'undefined') {
        g_form.showFieldMsg('contribution', getMessage("gvs_sport.current_status.on_load") + " " + g_scratchpad.current_status, 'info');
    }
}