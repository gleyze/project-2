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
      background-color: blue;
      color: white;
      padding: 4px 8px;
      text-align: center;
      border-radius: 5px;
      width: 400px;
      padding: 10px 0;
      /* margin: 0 auto; */
      justify-content: space-between;
    }
  `;

  constructor() {
    super();
    this.header = "Technology & Information";
    this.title = "APA Style Citations: Introduction";
    this.author = "Creator: Victoria Raish";
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
          <h3 class="header">
            ${this.header}
          </h3>
          <h1 class="title">
          ${this.title}
          </h1>
          </h1>
          <h2 class="author">
          ${this.author}
          </h2>
          <img src="${this.img}">
        </div>

      </main>
    `;
  }
}

customElements.define('project-2', Project2);