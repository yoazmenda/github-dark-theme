const zipFolder = require('zip-folder');

zipFolder(`${process.cwd()}/dist-chrome`, `${process.cwd()}/github.zip`, err => {
    if (err) {
        console.log('Oh no!', err);
    } else {
        console.log(`EXCELLENT ${process.cwd()}\\dist-chrome`);
    }
});
