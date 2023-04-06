import{i,s as o,y as p}from"./ab6369d8.js";var n=Object.defineProperty,c=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e,t)=>(c(r,typeof e!="symbol"?e+"":e,t),t);class s extends o{constructor(){super(),this.topic="Search Content, Topics, and People",this.word=""}inputChange(e){this.word=this.shadowRoot.querySelector("input").value}update(e){super.update(e),e.has("word")&&this.dispatchEvent(new CustomEvent("word-changed",{detail:{value:this.word}}))}render(){return p` <div class="searchbar"> <simple-icon class="searchIcon" accent-color="black" icon="search"></simple-icon><input type="text" id="searchbar" placeholder="${this.topic}" @input="${this.inputChange}"> </div> `}}a(s,"properties",{topic:{type:String},word:{type:String}}),a(s,"styles",i`
    :host {
      
    }
    .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      //margin: auto;
      margin-top: 5px;
      width: 1000px;
      border-radius: 5px;
      padding: 2px;
      
    }
    .searchInput {
      width: 1200px;
      height: 50px;
      border-radius: 5px;
    }
    .icon{
      width:100spx;
    }
  `),customElements.define("search-bar",s);
