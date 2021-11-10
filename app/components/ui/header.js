import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service app;

  @action onClick(e) {
    this.app.darkMode = e.target.checked;
  }
}
