import Route from '@ember/routing/route';

export default class HistoryRoute extends Route {
  model() {
    return {
      jobs: [
        {
          id: 1,
          date: '2016 - Current',
          name: 'Blackbell',
          position: 'Front-end developer',
          description:
            'Implements cloud services for creating websites/mobile apps for small and groving bussiness. Updates ember vesrions, implements ssr. Building/Support mobile apps for ios/android. Implements HTML editor build with Emberjs',
          skills: [
            'Ember.js',
            'Ember Data',
            'Fastboot/SSR',
            'Push Notifications',
            'Deploy',
            'Amazon Services',
            'SCSS',
            'React',
            'React Native',
            'JSON/REST API',
          ],
        },
        {
          id: 2,
          date: '2015 - 2016',
          name: 'Verta Media',
          position: 'Front-end developer',
          description:
            'Implements high load admin panel based on angular to resolve advertising managment',
          skills: ['Angular', 'Material UI', 'REST API'],
          isRight: true,
        },
        {
          id: 3,
          date: '2015 - 2016',
          name: 'HighMarket',
          position: 'Front-end developer',
          description:
            'Implements landing pages with powerfull animations for medical brands',
          skills: [
            'javascript',
            'sass',
            'tweenlite.js',
            'webpack',
            'wordpress',
          ],
        },
        {
          id: 4,
          date: '2014 - 2015',
          name: 'Vaimo',
          position: 'Front-end developer',
          description:
            'Supports/implements new features for high loaded online shops build with Magento and Magento addons.',
          skills: ['javascript', 'sass', 'jQuery', 'Magento', 'PHP'],
          isRight: true,
        },
        {
          id: 5,
          date: '2013 - 2014',
          name: 'Clickky',
          position: 'Front-end developer',
          description:
            'Implements high load admin panel based on Backbone to resolve mobile-advertising managment.',
          skills: ['javascript', 'sass', 'jQuery', 'Backbone.js', 'Require.js'],
        },
        {
          id: 6,
          date: '2011 - 2013',
          name: 'Ticketmaster',
          position: 'Front-end developer',
          description:
            'Support/build new features for biggest marketpace to sell/buy tickets for all events like (sport music theatre) in the world.',
          skills: ['javascript', 'css', 'jQuery', 'Prototype.js'],
          isRight: true,
        },
      ],
    };
  }
}
