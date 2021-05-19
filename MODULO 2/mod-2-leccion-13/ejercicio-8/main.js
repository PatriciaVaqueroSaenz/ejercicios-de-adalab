const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
  ];

  const winner = function (acc, runner) {
    if (runner.time < acc.time) {
      return (acc = runner);
    } else {
      return acc;
    }
  };
  
  const winnerName = runners.reduce(winner);
  console.log("El ganador es:", winnerName.name);