import { LitElement, html, css } from 'lit-element';

export default class CustomAppComponent extends LitElement {
  render() {
    return html`
      <h1>Custom app component!</h1>
      <slot name="header">Default app component!</slot></h1>
      <slot name="content">
        Default content!
      </slot>
    `;
  }
}
