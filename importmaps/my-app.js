import { LitElement, html, css } from 'lit-element';

export default class AppComponent extends LitElement {

  static styles = css`
      ::slotted(*) {
        border: 1px solid blue;
      	padding: 6px;
      }
    `;

  render() {
    return html`
      <h1><slot name="header">Default app component!</slot></h1>
      <slot name="content">
        Default content!
      </slot>
      
    `;
  }
}
