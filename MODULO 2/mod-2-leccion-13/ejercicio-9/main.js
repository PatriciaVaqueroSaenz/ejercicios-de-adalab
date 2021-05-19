const runners = [
    { name: 'Gregory Goyle', time: 56, student: true },
    { name: 'Nymphadora Tonks', time: 9, student: false },
    { name: 'Luna Lovegood', time: 45, student: true },
    { name: 'Cedric Diggory', time: 28, student: true },
    { name: 'Cho Chang', time: 35, student: true }
  ];


const winner = function (acc, runner) {
    if (runner.time < acc.time) {
        return (acc = runner);
    } else {
        return acc;
    }
};

const winnerName = runners.filter(runner => runner.student ===true).reduce(winner);

console.log("El ganador es:", winnerName.name);