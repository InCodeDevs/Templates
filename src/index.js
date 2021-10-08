/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
process.env.TEM_PUB_PATH = "./public";

const templateServer = require('./module/templates')
const sampleApp = require('./module/sampleApp')

module.exports = {
    templateServer,
    sampleApp
}