module.exports = {
  app: {
      name: 'soundtrack'
    , safe: process.env.SOUNDTRACK_APP_SAFE || false
    , host: process.env.SOUNDTRACK_APP_HOST || 'soundtrack.io'
    , port: process.env.SOUNDTRACK_APP_PORT || 13000
  },
  database: {
      name: process.env.SOUNDTRACK_DB_NAME || 'soundtrack'
    , hosts: ['localhost']
  },
  redis: {
      host: process.env.SOUNDTRACK_REDIS_HOST || 'localhost'
    , port: process.env.SOUNDTRACK_REDIS_PORT || 6379
  },
  sessions: {
      key: 'put yourself a fancy little key here'
  },
  connection: {
      clientTimeout: 2 * 60 * 1000
    , checkInterval: 30 * 1000
  },
  lastfm: {
      key: process.env.SOUNDTRACK_LASTFM_KEY       || 'key here'
    , secret: process.env.SOUNDTRACK_LASTFM_SECRET || 'secret here'
  },
  soundcloud: {
      id: process.env.SOUNDTRACK_SOUNDCLOUD_ID         || 'id here'
    , secret: process.env.SOUNDTRACK_SOUNDCLOUD_SECRET || 'secret here'
  },
  spotify: {
    id: process.env.SOUNDTRACK_SPOTIFY_ID || 'id here',
    secret: process.env.SOUNDTRACK_SPOTIFY_SECRET || 'secret here'
  },
  slack: {
    token: process.env.SOUNDTRACK_SLACK_API_TOKEN || '',
    botUsername: process.env.SOUNDTRACK_SLACK_BOT_USERNAME || 'DSKO DJ',
    botEmoji: process.env.SOUNDTRACK_SLACK_BOT_EMOJI || ':tinatwerk:'
  },
  settings: {
    sortPlaylists: process.env.SOUNDTRACK_SORT_PLAYLISTS || false,
    skipScore: process.env.SOUNDTRACK_SKIP_SCORE || -3
  }
}
