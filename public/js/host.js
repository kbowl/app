// (() => {
const app = Lucia.component({
  id,
  teams: [],
  leaderboard: [],
  entries: [],
  timer: 15,
  score(num, i) {
    const { teamName } = this.entries[i];
    const team = this.teams.filter((t) => t[0] === teamName);
    if (num === 1) {
      socket.emit('score', { id, teamName: teamName, score: ++team[1] });
    }
    this.timer = 15;
    this.entries.splice(i, 1);
  },
});
app.mount('#app');

const socket = io();
socket.emit('create', id);

socket.once('create', (success) => {
  if (!success) location = `/`;
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

socket.on('buzz', async (teamName) => {
  if (!app.state.entries.some((entry) => entry.teamName === teamName)) {
    app.state.entries.push({ teamName, date: new Date().toLocaleTimeString() });
    while (app.state.timer > 0) {
      app.state.timer--;
      await delay(1000);
    }
  }
});

socket.on('join', (teamName) => {
  if (!app.state.leaderboard.some((team) => team[0] === teamName)) {
    app.state.leaderboard.push([teamName, 0]);
  }
});

// })();
