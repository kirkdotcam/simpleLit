import {LitElement, html, css} from 'lit';

class VersionBlock extends LitElement {
  static properties = {
    displayName: {type: String },
    version: { type: String }
  }

  static styles = css``;

  
  render(){
    return html`
    <div class="" > ${this.displayName} : ${this.version} </div>
`
  }
}


export default VersionBlock;
