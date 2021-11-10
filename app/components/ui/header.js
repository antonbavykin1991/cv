import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @tracked isDark;

  @action onClick(e) {
    this.isDark = e.target.checked;
    document.querySelector('html').classList.toggle('dark');
  }
}
