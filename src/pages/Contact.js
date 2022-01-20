import React,{ Component } from "react";
import self from "../images/self.jpg"
import port from "../images/port.pdf"

class Contact extends Component{


    render(){
        return(
            <div className="container">
                <div className="flexcon">
                    <div className="itemcon">
                        <div className="contentcon">
                            <div className="self-image">
                          
                            </div>
                            <div className="data-self">
                            <h3 >Adisak&nbsp;&nbsp;Leapon&nbsp;(Dew)</h3>
                            <br/> 
                            <p >Deverloper</p>
                            <p >Adisak.timtim@gmail.com</p>
                            <a href={port} target="_blank" download className="border">Resume</a>
    
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;