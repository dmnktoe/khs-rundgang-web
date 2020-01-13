// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import env from './.env';

export const environment = {
  algoliaAppId: '7LOP7PA3QP',
  algoliaSearchApiKey: 'ee94ab6f55a21150ac1ae1316dbdc467',
  algoliaRecordingsIndex: 'dev_recordings',
  algoliaShowsIndex: 'dev_shows',
  algoliaArtistsIndex: 'dev_artists',
  production: false,
  environment: 'development',
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://localhost:8080',
  socketio: 'http://localhost:52001',
  defaultLanguage: 'US',
  supportedLanguages: ['DE', 'US', 'FR'],
  googleAnalytics: {
    domain: 'auto',
    trackingId: 'UA-24449183-8' // replace with your Tracking Id
  },
  environment: 'Development'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
