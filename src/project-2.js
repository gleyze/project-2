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
      border-radius: 5px;
      border-width: 1px;
    }
    .badge-header {
      background-color: #cfe6f4;
      border-left: 15px solid #3e98d3;
      color: #333333;
      font-weight: bold, 500;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 0.75em;
      border-radius: 4px 4px 0 0;
    }
    .badge-body {
      border-left: 15px solid #3e98d3;
      vertical-align: top;
      padding: 10px 10px;
      overflow: hidden;
      position: relative;
      font-size: 12px;
      font-family: "effra", sans-serif;
      margin-bottom: 10px;
    }
    .badge-title{
      font-weight: 100; //need to make it thinner??
      font-weight: lighter;
      font-size: 24px;
      letter-spacing: 1px;
      font-family: "Effra", sans-serif;
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
      border-radius: 0 0 4px 4px;
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
    this.bordertopcolor = "";
    this.bordermiddlecolor = "";
    this.borderbottomcolor = "";
    

  }

  render() {
    return html`
      <!-- <main>
        <div class="page"> 
          <div class="pageheader">
            <div class="PSUDigitalBadges">
              <p>Penn State Digital Badges</p>
            </div>
          </div>
        <div class="explore">
          <p>Explore</p>
        </div>
        <div class="square">
          <p>Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. 
            Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? 
            You can do that with Topics.</p>
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
        </div> -->
      
        <!-- <div class="badgesquare">
          <p>Looking for something brand spankin' new? Here are the most recently added badges!</p> -->
          <div class="badge">
              <div class="badge-header">
                <span class="header">${this.header}, ${this.bordertopcolor}</span>
                
              </div>
              <div class="badge-body">
                <div class="badge-image">
                    <img class="badgeimg" src="${this.img}" >
                </div>
                <div class="badge-title">
                <div class="title">${this.title}</div>
                </div>
              </div>
              
              <div class="creator">
                <div class="creator-name">${this.creator}</div>
              </div>
          </div>
        <!-- </div>   -->
       <!-- </div> -->
      <!-- </main> -->
    `;
  }
}

customElements.define('project-2', Project2);