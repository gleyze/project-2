import { LitElement, html, css } from 'lit';
import "./project-2.js";

export class BadgeList extends LitElement{

    static get tag(){
    return 'badge-list';
    }

    static get properties() {
        return{
            badges: {type: Array},

        }
    }

    constructor(){
        super();
        this.badges = [];
        this.updateBadges();
        console.log(this.badges)
    }

    updateBadges(){
        // const address = new URL('../api/badge-search', import.meta.url).href;
        console.log("Calling backend")
        const address = '../api/badge-search'
        fetch(address).then((response) => {
            if (response.ok){
                return response.json()
            }
            return [];
        })

        .then((data) => {
            console.log(data)
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

    render() {
        return html`
        <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <project-2 header="${badge.header}" img="${badge.img}" title="${badge.title}" creator="${badge.creator}"></project-2>
            </div>
            `)}
        </div>
        `;
    }


}

customElements.define(BadgeList.tag, BadgeList);