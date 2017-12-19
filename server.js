const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const Path = require('path');

module.exports = function startServer() {
  const server = new Hapi.Server({
    connections: {
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'dist'),
        },
      },
    },
  });

  server.connection({
    host: 'localhost',
    port: 8080,
  });

  server.register(Inert, (err) => {
    if (err) {
      throw err;
    }
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply.file('./index.html');
      },
    });
    server.route({
      method: 'GET',
      path: '/assets/{param*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'dist'),
        },
      },
    });
    server.route({
      method: '*',
      path: '/{p*}',
      handler: (request, reply) => {
        reply.file('./index.html');
      },
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
            log: '*',
          }],
        }, {
          module: 'good-console',
        }, 'stdout'],
      },
    },
  }], (err) => {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start((startErr) => {
      if (startErr) {
        throw startErr;
      }
      server.log('info', `Server running at: ${server.info.uri}`);
    });
  });
};
