var Notify = require('fs.notify');
const execSync = require('child_process').execSync;

var files = [];

var notifications = new Notify(files);
notifications.on('change', function (file, event, path) {
  console.log(execSync('yarn run release && yarn run demo', { encoding: 'utf-8' }));
});

// if you want to add more files you can use the
notifications.add(['src/svg']);

// kill everything
notifications.close();
