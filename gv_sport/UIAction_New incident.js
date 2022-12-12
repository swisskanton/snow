// script
// 'glide.servlet.uri' > current instant's address 
// x_932835_gvs_sport.urlOfNewIncident' > incident.do?sys_id=-1&sysparm_query=category=software^subcategory=sportchallengeapp^caller_id=

action.setRedirectURL(gs.getProperty('glide.servlet.uri') + gs.getProperty('x_932835_gvs_sport.urlOfNewIncident') + gs.getUserID());