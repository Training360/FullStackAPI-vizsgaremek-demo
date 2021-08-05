const chokidar = require('chokidar');
const { exec } = require('child_process');

let run = false;
chokidar.watch('./src').on('all', (event, path) => {
    if (run) {
        exec(`docker restart frontend_api_vizsgaremek_demo`, (e, s) => {
            if (e) {
                return console.error(e);
            }

            console.log(`Watcher: `, s);
        });
    }
});

setTimeout( () => {
    run = true;
}, 10000);
