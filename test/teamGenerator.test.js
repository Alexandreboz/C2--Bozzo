// teamGenerator.test.js

import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
  let teamGenerator;

  beforeEach(() => {
    const players = ['Player A', 'Player B', 'Player C', 'Player D', 'Player E'];
    teamGenerator = new TeamGenerator(players, 3);
  });

  it('should add players to existing players', () => {
    // Test ajout de joueurs
    teamGenerator.addPlayers(['Player F', 'Player G']);
    const updatedPlayers = teamGenerator.getPlayers();
    expect(updatedPlayers).to.include.members(['Player F', 'Player G']);
  });

  it('should remove players from existing players', () => {
    // Test suppression de joueurs
    teamGenerator.removePlayers(['Player A', 'Player B']);
    const updatedPlayers = teamGenerator.getPlayers();
    expect(updatedPlayers).to.not.include.members(['Player A', 'Player B']);
  });

  it('should reset teams', () => {
    // Test réinitialisation des équipes
    teamGenerator.generateTeams();
    teamGenerator.resetTeams();
    const teams = teamGenerator.getTeams();
    expect(teams).to.be.an('array').that.is.empty;
  });


  it('should set players per team', () => {
    // Test modification du nombre de joueurs par équipe
    teamGenerator.setPlayersPerTeam(4);
    expect(teamGenerator.playersPerTeam).to.equal(4);
  });

  it('should return total teams generated', () => {
    // Test du nombre total d'équipes générées
    teamGenerator.generateTeams();
    const totalTeams = teamGenerator.getTotalTeams();
    expect(totalTeams).to.equal(2); // Suppose qu'il y a 5 joueurs et 3 joueurs par équipe
  });
});
