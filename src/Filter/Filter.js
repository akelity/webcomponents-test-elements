import {LitElement, html, css} from 'lit';

export class Filter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
        margin: 5px;
      }

      :host input[type='text'] {
        padding: 10px;
        margin: 10px 0; // add top and bottom margin
        -ms-box-sizing: content-box;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        width: 850px;
      }

      :host input[type='text']:focus {
        outline: none !important;
        border: 2px solid #de1f92b8;
        box-shadow: 0 0 2px #de1f92b8;
      }
    `;
  }

  static get properties() {
    return {
      value: {type: String},
    };
  }

  constructor() {
    super();
  }

  onChange(e) {
    this.value = e.target.value;
    this.eventBus.next({
      label: 'applyFilter',
      payload: {
        value: this.value,
      },
      meta: '',
    });
  }

  render() {
    return html`
      <input
        type="text"
        placeholder="Search"
        value="${this.value}"
        @keyup=${this.onChange}
      />
    `;
  }
}

window.customElements.define('element-filter', Filter);
