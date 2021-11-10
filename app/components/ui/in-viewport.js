import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export const src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export default class InViewportComponent extends Component {
  @tracked isLoaded = false;

  get src() {
    return src;
  }

  @action onLoad() {
    this.isLoaded = true;
  }
}
