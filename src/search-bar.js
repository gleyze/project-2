import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    word: { type: String }
  }

  static styles = css`
    :host {
      
    }
    .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      //margin: auto;
      margin-top: 5px;
      
      width: 1000px;
      height: 30px;
      border-radius: 5px;
      padding: 2px;
      
    }
    .searchInput {
      /* width: 1200px;
      height: 50px; */
      /* border-radius: 5px; */
    }
    .icon{
      width:120px;
      
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.word = "";    
  }

  inputChange(e) {
    this.word = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('word')) {
      this.dispatchEvent(new CustomEvent('word-changed', {
        detail: {
          value: this.word
        }
      }));
    }
  }
 
  render() {
    return html`
    <div class="searchbar">
      <simple-icon class="searchIcon" accent-color="black" icon="search"></simple-icon><input type="text" id="searchbar" placeholder="${this.topic}" @input="${this.inputChange}" />
      
    </div>

    
    `;
  }
}





customElements.define('search-bar', SearchBar);