import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

const APAStyle = new URL('../assets/APA_Style.png', import.meta.url).href;

export class Project2 extends LitElement {
  static properties = {
    header: { type: String },
    title: {type: String},
    author: {type: String},
    img: {type: String}
  };

  static styles = css`
    .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      margin: auto;
      margin-top: 5px;
      width: fit-content;
      border-radius: 5px;
      padding: 2px;
      
    }
    .searchInput {
      width: 1300px;
      height: 50px;
      border-radius: 5px;
      
      
    }
    .icon{
      width: 45px;
    }

    .badge {
      display: block;
      letter-spacing: 0.02em;
      float: left;
      height: 135px;
      width: 280px;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      font-family: "Effra", sans-serif;
      font-size: 12px;
      line-height: 20px;
      margin: 0 10px 10px 0;
      background: transparent;
      border: 1px solid #fff;
      border-color: #3e98d3;
      border-radius: 6px;
    }

    .badge-header {
      background-color: #cfe6f4;
      border-left: 15px solid #3e98d3;
      color: #333333;
      font-weight: 400;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 0.75em;
    }
    .badge-body {
      border-left: 15px solid #3e98d3;
      vertical-align: top;
      padding: 10px 10px;
      overflow: hidden;
      position: relative;
      font-size: 12px;
      font-family: "Effra", sans-serif;
      margin-bottom: 10px;
    }
    .badgeimg {
      float: right;
      width: 60px;
      height: 60px;
      display: block;
      background-size: contain;
    }
    .creator {
      border-left: 15px solid #3e98d3;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 30px;
    }
    .creator-name {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 5px;
      margin-left: 10px;
      margin-right: 15px;
      font-weight: 400;
      font-size: 13px;
      font-family: "Effra", sans-serif;
    }
  `;

  constructor() {
    super();
    this.header = "Technology & Information";
    this.title = "APA Style Citations: Introduction ";
    this.creator = "Creator: Victoria Raish";
    this.img = APAStyle;
  }

  render() {
    return html`
      <main>
        <div class="searchbar">
          <form>
            <simple-icon icon="search" class="icon"></simple-icon>
            <input
              class="searchInput"
              type="text"
              placeholder="Search Content, Topics, and People"
            />
          </form>
        </div>
  

        <div class="badge">
            <div class="badge-header">
              <span class="header">${this.header}</span>
            </div>

            <div class="badge-body">
              <div class="badge-image">
                <img
                  class="badgeimg"
                  src="https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png"/>
              </div>

            <div class="badge-title">
              <span class="title">${this.title}</span>
            </div>
            
            <div class="creator">
              <div class="creator-name">${this.creator}</div>
            </div>
          </div>
        </div>
  </main>

    `;
  }
}

customElements.define('project-2', Project2);