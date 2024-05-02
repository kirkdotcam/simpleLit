import {LitElement, html} from 'lit';
import MainContainer from './maincontainer.js';

class MyElement extends LitElement {
  render() {
    return html`
      <main-container></main-container>
    `;
  }
}
customElements.define('my-element', MyElement);
