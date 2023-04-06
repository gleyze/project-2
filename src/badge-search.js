import { LitElement, html, css } from 'lit';
import "./search-bar";
import "./badge-list";


class BadgeSearch extends LitElement {
  static properties = {
    header: { type: String },
    data: { type: Array },
    searchForThis: { type: String }
  }

  static styles = css`

body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: #e9ecf3;
    }
    .pageheader{
      border-color: white;
      text-align: left;
      font-family: "Effra", sans-serif;
      border-width: 10px;
      width: 2000px;
      height: 60px;
      margin: auto;
      background-color: white;
    }
    .PSUDigitalBadges{
      text-align: left;
      font-family: "Effra", sans-serif;
      padding: 10px;
      font-size: 16px;
      color: #333333;
      font-weight: bold;
      padding-left: 50px;
    }
    .explore{
      text-align: left;
      font-family: "Effra", sans-serif;
      font-size: 30px;
      color: #333333;
      font-weight: lighter;
      padding-left: 50px;
    }
    .square{
      border-color: white;
      text-align: left;
      font-family: "Effra", sans-serif;
      padding: 20px;
      border-width: 10px;
      width: 1300px;
      margin: auto;
      background-color: white;
      margin-top: 10px;
      border-radius: 5px;
    }
    .badgesquare{
      border-color: white;
      text-align: left;
      padding: 20px;
      border-width: 10px;
      width: 1300px;
      height: 200px;
      margin: auto;
      background-color: white;
      margin-top: 10px;
      border-radius: 5px;
    }
    .badgeList{
      width: 80%;
      background-color: white;
      font-size: 20px;
      margin: 50px;
      padding: 10px;
      display: block;
    }

  `;

  constructor() {
    super();
    this.header = 'Badge Search';
    this.searchForThis = '';
  }

  

  wordChanged(e) {
    this.searchForThis = e.detail.value;
  }

  render() {
    return html`
        <body>
            <main>
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
                                <search-bar @word-changed="${this.wordChanged}"></search-bar>
                            </div>
                    </div>       

                    <div class="square">
                        <div class="badgeList">
                            <p>
                                Looking for something brand spankin' new? Here are the most recently added badges!
                            </p>

                            <badge-list searchForThis="${this.searchForThis}"></badge-list>
                        </div>
                        </div>
                    </div>
                    </main>


    `;
  }

  
}



customElements.define('badge-search', BadgeSearch);