import {LitElement, html, css} from 'lit';

export class Table extends LitElement {
  static get styles() {
    return css`
      :host .styled-table {
        width: 600px;
        border-collapse: collapse;
        font-size: 0.9em;
        font-family: sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        margin: 5px;
      }
      :host .styled-table thead tr {
        background-color: #de1f92b8;
        color: #ffffff;
        text-align: left;
      }
      :host .styled-table th {
        padding: 12px 15px;
      }
      :host .styled-table td {
        padding: 12px 15px;
      }
      :host .styled-table tbody tr {
        border-bottom: 1px solid #dddddd;
      }
      :host .styled-table tbody tr:hover {
        cursor: pointer;
      }
      :host .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
      }
      :host .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid #de1f92b8;
      }
    `;
  }

  static get properties() {
    return {
      header: {type: Array},
      body: {type: Array},
      filterBody: {type: Object},
    };
  }

  constructor() {
    super();

    this.header = this.data ? this.data.header : [];
    this.body = this.data ? this.data.body : [];
    this.filterBody = this.body;

    this.eventBus ? this.eventBus.subscribe((event) => {
      if (event.label === 'applyFilter') {
        this.applyFilter(event.payload.value);
      }
    }): null;
  }

  applyFilter(filter) {
    this.filterBody = this.body.filter((line) =>
      line.join(',').toLowerCase().includes(filter.toLowerCase())
    );
  }

  _onClick(e) {
    this.eventBus.next({
      label: 'applyDetail',
      payload: {
        value: e,
      },
      meta: '',
    });
  }

  render() {
    return html`
      <table class="styled-table">
        <thead>
          <tr>
            ${this.header.map((item) => html`<th>${item}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.filterBody.map(
            (line) => html`
              <tr @click=${() => this._onClick(line)}>
                ${line.map((item) => html`<td>${item}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

window.customElements.define('element-table', Table);
