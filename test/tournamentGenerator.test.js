import { expect } from "chai";
import TournamentGenerator from "../src/tournamentGenerator.js";
import TeamGenerator from "../src/teamGenerator.js";
import { describe, it } from "mocha";

describe("TournamentGenerator", () => {
  let tournamentGenerator;

  beforeEach(() => {
    const teamGenerator = new TeamGenerator([
      "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hugo",
      "Ivy", "Jean", "Kevin", "Liam", "Mia", "Nina", "Oscar", "Paul", "Quinn",
      "Rose", "Sam", "Tom", "Ursula", "Victor", "Wendy", "Xavier", "Yann",
      "Zoe", "Maria", "John", "Chris", "Arthur"
    ]);
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();
    tournamentGenerator = new TournamentGenerator(teams);
  });

  // Tests for the original functionalities
  describe("Given we generate a tournament", () => {
    it("should generate a tournament", () => {
      const tournament = tournamentGenerator.generateTournament();
      expect(tournament).to.be.an("array");
      expect(tournament).to.have.lengthOf(3);
      expect(tournament[0]).to.have.lengthOf(4);
      expect(tournament[1]).to.have.lengthOf(2);
      expect(tournament[2]).to.have.lengthOf(1);
    });
  });

  // New tests for the additional functionalities
  describe("Given we generate a tournament", () => {
    it("should determine the winner of the tournament", () => {
      tournamentGenerator.generateTournament();
      const winner = tournamentGenerator.determineWinner();
      expect(winner).to.be.an("object").that.has.property("name");
    });
  });
});
