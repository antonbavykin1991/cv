import EmberRouter from '@embroider/router';
import config from 'my-cv/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('skills');
  this.route('history');
  this.route('contacts');
});
