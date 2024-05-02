import {LitElement, html, css} from 'lit';
import VersionBlock from "./versionblock.js"

customElements.define("version-block", VersionBlock)

class MainContainer extends LitElement {
  
  static styles =  css`
  #versionBlockContainer {
    margin:auto;
    width: 80%;
    height: 80%;
    position: "absolute";
    background-color: black;
    color: white;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
    grid-gap: 6px;
  }

  .versionBlock {
    background-color: blue;
    margin: 3px;
  }

  @media screen and (max-width: 600px) {
    .maincontainer {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
  `

  async getVersions() {
    let response = await fetch("/api/data")
    let res = await response.json()
    console.log(res)
    this.versionData = res
  }

  static properties = {
    versionData: {state: true}
  }

  constructor() {
    super()
    this.versionData = []
    this.getVersions()
  }

  render(){
    return html`
    <div id="versionBlockContainer"> 
      ${ this.versionData.map((version)=>{
        return html`<version-block 
          class="versionBlock"
          .displayName=${version.displayName}
          .version=${version.version}
      > </version-block>`
      })}
    </div>
`
  }
}

customElements.define("main-container", MainContainer)

export default MainContainer;
