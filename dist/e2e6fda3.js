import{i as a,s,y as d}from"./bfe935f2.js";var n=Object.defineProperty,l=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e,i)=>(l(t,typeof e!="symbol"?e+"":e,i),i);const p=new URL(new URL("ee1c3e0f.png",import.meta.url).href,import.meta.url).href;class r extends s{constructor(){super(),this.header="Technology & Information",this.title="APA Style Citations: Introduction ",this.creator="Creator: Victoria Raish",this.img=p,this.bordertopcolor="",this.bordermiddlecolor="",this.borderbottomcolor=""}render(){return d` <div class="badge"> <div class="badge-header"> <span class="header">${this.header}, ${this.bordertopcolor}</span> </div> <div class="badge-body"> <div class="badge-image"> <img class="badgeimg" src="${this.img}"> </div> <div class="badge-title"> <div class="title">${this.title}</div> </div> </div> <div class="creator"> <div class="creator-name">${this.creator}</div> </div> </div> `}}o(r,"properties",{header:{type:String},title:{type:String},author:{type:String},img:{type:String}}),o(r,"styles",a`
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
  `),customElements.define("project-2",r);
