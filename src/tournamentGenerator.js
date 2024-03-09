class TournamentGenerator {
    constructor(teams) {
        this.teams = teams;
        this.poules = [];
        this.finalStages = [];
    }

    generatePoules() {
        let shuffledTeams = [...this.teams].sort(() => 0.5 - Math.random());
        const nbPoules = Math.floor(shuffledTeams.length / 4);
        for (let i = 0; i < nbPoules; i++) {
            this.poules.push(shuffledTeams.splice(0, 4));
        }
    }

    simulatePoulesMatches() {
        let qualifiedTeams = [];
        this.poules.forEach(poule => {
            qualifiedTeams.push(...poule.slice(0, 2));
        });
        this.finalStages.push(qualifiedTeams);
    }

    generateFinalStages() {
        let currentStage = this.finalStages[0];
        while (currentStage.length > 1) {
            let nextStage = [];
            for (let i = 0; i < currentStage.length; i += 2) {
                let winner = currentStage[i + (Math.random() > 0.5 ? 0 : 1)];
                nextStage.push(winner);
            }
            this.finalStages.push(nextStage);
            currentStage = nextStage;
        }
    }

    generateTournament() {
        this.generatePoules();
        this.simulatePoulesMatches();
        this.generateFinalStages();
        return this.finalStages;
    }

    determineWinner() {
        return this.finalStages[this.finalStages.length - 1][0];
    }

    getPoules() {
        return this.poules;
    }

    getFinalStages() {
        return this.finalStages;
    }

    getTeams() {
        return this.teams;
    }
}

export default TournamentGenerator;
