// condition: current.contribution.changes()

/** 
 * Calculates the current_status which contains the sum of contributors associated with the current sport challenge record
 */
(function executeRule(current, previous /*null when async*/ ) {
    var challengeRecord = current.challenge.getRefRecord();
    if (challengeRecord.isValidRecord()) {
        var contributionGA = new GlideAggregate("x_932835_gvs_sport_contribution");
        contributionGA.addQuery("challenge", challengeRecord.sys_id);
        contributionGA.addAggregate("SUM", "contribution");
        contributionGA.groupBy("challenge");
        contributionGA.query();
        if (contributionGA.next()) {
            var sumOfContributions = contributionGA.getAggregate("SUM", "contribution") || 0;
        }
        var challengeGR = new GlideRecord("x_932835_gvs_sport_sport_challenge");
        if (challengeGR.get(challengeRecord.sys_id)) {
            challengeGR.current_status = sumOfContributions;
            challengeGR.update();
    }   }
})(current, previous);