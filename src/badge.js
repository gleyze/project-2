import { LitElement, html, css } from 'lit';
import "./project-2.js";

export class Badge extends LitElement{

    static get tag(){
    return 'badge';
    }

    static get properties() {
        return{
            badges: {type: Array},
        }
    }

    constructor(){
        super();
        this.badges = [];
        this.updateBadged();
        console.log(this.badges)
    }

    updateBadges(){
        const address = '../api/badgesearch';
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

    render(){
        return html`
        <h2> ${this.team}</h2>
        <div class="wrapper">
            ${this.badges.map(badge =>     
            html`
            <div class="item">
                <project-2 header="${badges.header}" title="${badges.title}" author="${badges.author}" img="${badges.img}"></project-2>
            </div>
            `)}
        </div>
        `
    }


}

customElements.define(Badge.tag, Badge);