'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');

module.exports = function() {

  const server = new Hapi.Server({
    connections: {
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'dist')
        }
      }
    }
  });

  server.connection({
    host: 'localhost',
    port: 8080
  });

  server.register(require('inert'), (err) => {
    if (err) {
      throw err;
    }
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.file('./index.html')
      }
    });
    server.route({
      method: 'GET',
      path: '/static/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'dist')
        }
      }
    });
    server.route({
      method: '*',
      path: '/{p*}',
      handler: function (request, reply) {
        reply.file('./index.html')
      }
    });
  });

  server.register([{
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              response: '*',
              log: '*'
            }]
          }, {
            module: 'good-console'
        }, 'stdout']
      }
    }
  }], (err) => {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start((err) => {
      if (err) {
          throw err;
      }
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
};
