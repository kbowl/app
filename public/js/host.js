let globalApp;

(async () => {
  const app = Lucia.component({
    id,
    leaderboard: [],
    entries: [],
    timer: -1,
    score(num, i) {
      const { teamName } = this.entries[i];

      let score;

      for (let i = 0; i < this.leaderboard.length; i++) {
        if (this.leaderboard[i][0] === teamName) {
          this.leaderboard[i][1]++;
          console.log(this.leaderboard[i][1]);
          score = i;
          app.render();
          break;
        }
      }

      console.log(this.leaderboard);

      // this.leaderboard.forEach(i => {
      //   if(i.teamName === teamName){
      //     score = ++i.score;
      //     // wait why is this `= ++team.score?`
      //   }
      // })

      this.timer = this.entries.length > 1 ? 15 : -1;

      if (num === 1) {
        socket.emit('score', { id, teamName: teamName, score });
        console.log(score);
        this.entries = [];
        this.timer = -1;
      } else {
        this.entries.splice(i, 1);
      }
    },
  });
  app.mount('#app');
  globalApp = app;

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
      if (app.state.entries.length === 1) {
        app.state.timer = 15;

        while (app.state.timer > 0 && app.state.entries.length > 0) {
          if (app.state.timer === 15) await delay(100);
          app.state.timer--;
          await delay(1000);
        }
      }
    }
  });

  socket.on('join', (teamName) => {
    if (!app.state.leaderboard.some((team) => team[0] === teamName)) {
      app.state.leaderboard.push([teamName, 0]);
    }
  });
})();
