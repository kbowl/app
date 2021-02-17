let globalApp;

(async () => {
  const app = Lucia.component({
    id,
    leaderboard: [],
    entries: [],
    timer: -1,
    score(num, i) {
      const { teamName } = this.entries[i];

      if (i === -1) {
        socket.emit('score', { id, teamName: teamName, score: -1 });
        return
      }

      let score;

      console.log(this.leaderboard);

      this.entries.forEach(i => {
        if(i.teamName === teamName){
          console.log(score)
          if (i.score) {
            score = i.score + num;
          } else {
            score = num
          }
          console.log(score)
        }
      })
      console.log({ id, teamName: teamName, score: score })

      this.timer = this.entries.length > 1 ? 15 : -1;

      if (num === 1) {
        socket.emit('score', { id, teamName: teamName, score: score });
        console.log(score);
        this.entries = [];
        this.timer = -1;
        for (let i = 0; i < this.leaderboard.length; i++) {
          if (this.leaderboard[i][0] === teamName) {
            this.leaderboard[i][1] = this.leaderboard[i][1] + num;
            score = i;
            app.render();
            break;
          }
        }
      } else {
        this.entries.splice(i, 1);
      }
    },
  });
  app.mount('#app');
  globalApp = app;

  const socket = io();
  socket.emit('create', id);

  app.socket = socket

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
