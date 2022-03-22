import {LitElement, html, css} from 'lit';

export class Detail extends LitElement {
  static get styles() {
    return css`
      :host .card {
        width: 260px;
        display: flex;
        flex-direction: column;
        border: 1px #de1f92b8 solid;
        margin: 5px;
        min-height: 288px;
      }

      :host .header {
        min-height: 50px;
        background-color: #de1f92b8;
        color: #ffffff;
        text-align: center;
        padding: 15px;
      }

      :host .container {
        margin-top: 20px;
        padding: 2px 16px;
      }

      :host td { 
        padding: 20px 0 0 10px;
        
     }
      :host td:first-child { 
          text-align: right; 
    }
    `;
  }

  static get properties() {
    return {
      data: {type: Array},
    };
  }

  constructor() {
    super();
    this.data = [];
    this.eventBus ? this.eventBus.subscribe((event) => {
      if (event.label === 'applyDetail') {
        this.data = event.payload.value;
      }
    }) : null;
  }

  render() {
    return html`
      <div class="card">
        <div class="header">
          <p><b>Detail ${this.data[0] ? 'of ' + this.data[0] : ''}</b></p>
        </div>
        <div class="container">
            <table>
                <tr>
                    <td>Company: </td>
                    <td><b>${this.data[1] ? this.data[0] : ''}</b></td>
                </tr>
                <tr>
                    <td>Contact: </td>
                    <td><b>${this.data[1] ? this.data[1] : ''}</b></td>
                </tr>
                <tr>
                    <td>Country: </td>
                    <td><b>${this.data[1] ? this.data[2] : ''}</b></td>
                </tr>
            </table>
        </div>
      </div>
    `;
  }
}

window.customElements.define('element-detail', Detail);
