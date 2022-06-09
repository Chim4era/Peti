import Abstractview from "./Abstractview";

export default class extends Abstractview {
    constructor(){
        super();
        this.setTitle("Magamról");
    }
    async getHtml(){
        return`
        <h1>My name is dzsóváni dzsórdzsó, but my friends call me 
        dzsórdzsó<h1>
        
        
        `;
    }
}