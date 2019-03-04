module.exports = {
  apps : [{
    name: 'LIBRARY_BND',
    script: 'index.js',
    args: 'start',
    restart_delay: 5,
    instances: 1,
    autorestart: true,
    watch: [ 'src' ],
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: 9210,
    }
  }],
};
