import { Component } from "react"
import work from '../assets/img/illustration-stay-productive.png'


// class Component
export default class Work extends Component{
 
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="container">
            <div className="row">
              <div className="col-6 text-white"><img src={work}/></div>
              <div className="col-6 text-white mt-5">
                  <h2>Stay productive, wherever you are</h2>
                  Never let location be an issue when accessing your files. Fylo has you Covered for all of your file storage needs. Securely share files and folders with friends, family and calleagues for live callaboration. No email attachments required. See how Fylo works
                  </div>
            </div>
          </div>
  
        )
    }
}

