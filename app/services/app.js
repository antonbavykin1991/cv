import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppService extends Service {
  @tracked _darkMode = false;

  get darkMode() {
    return this._darkMode;
  }

  set darkMode(value) {
    this._darkMode = value;
    localStorage.setItem('darkMode', value);
    document.querySelector('html').classList[value ? 'add' : 'remove']('dark');
  }

  @action initDarkMode() {
    this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
  }
}
