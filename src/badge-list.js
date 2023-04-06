import { LitElement, html, css } from 'lit';
import "./project-2.js";

export class BadgeList extends LitElement{

    static get tag(){
    return 'badge-list';
    }

    static get properties() {
        return{
            badges: {type: Array},
            searchForThis: {type: String}

        }
    }

    constructor(){
        super();
        this.badges = [];
        this.updateBadges();
        this.searchForThis = '';
        this.searchThis(this.badges,this.searchForThis);
    }

    updateBadges(){
        const address = '../api/badge-search'
        fetch(address).then((response) => {
            if (response.ok){
                return response.json()
            }
            return [];
        })

        .then((data) => {
            this.badges = data;
        });
    }

    static get styles(){
        return css`
        :host{
            display: block;
        }
        .wrapper{
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }
        `;
    }

    searchThis(items, searchForThis){
        return items.filter((thing) => 
        {
          for (var item in thing)
          {
            if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
            {
              return true;
            }
          }
          return false;
        });
    }

    render() {
        return html`
        <div class="wrapper">
        ${this.searchThis(this.badges,this.searchForThis).map(badge => html`
            <div class="item">
            <project-2 header="${badge.header}" img="${badge.img}" title="${badge.title}" creator="${badge.creator}"></project-2>
            </div>
            `)}
        </div>
        `;
    }


    // render() {
    //     return html`
    //     <div class="wrapper">
    //         ${this.badges.map(badge => html`
    //         <div class="item">
    //             <project-2 header="${badge.header}" img="${badge.img}" title="${badge.title}" creator="${badge.creator}"></project-2>
    //         </div>
    //         `)}
    //     </div>
    //     `;
    // }


}

customElements.define(BadgeList.tag, BadgeList);