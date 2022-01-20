import React, { Component } from "react";
import axios from "axios";
import keys from "../keys"


class Api extends Component {

   constructor(){
       super()
       this.state = {
           key:keys.API_KEY,
           base:keys.BASE_URL,
           query:"",
           weather:{},
           temp:"0",
           city:"City",
           wt:"weather"
         

       }
       this.select = this.select.bind(this)

   }


async select(event){
    await this.setState({
        query:event.target.name
    });
    

          await axios
           .get(`${this.state.base}weather?q=${this.state.query}&units=metric&appid=${this.state.key}`, { crossdomain: true })
           .then((response) =>{
              //  console.log(response);
               this.setState({weather:response.data})

           });

           await this.setState({
               temp:this.state.weather.main.temp,
               city:this.state.weather.name,
               wt:this.state.weather.weather[0].main
              
           });
          //  console.log("temp")
    

   }

   dataBuild(d){
       let date = String(new window.Date());
       date = date.slice(3,15);
       return date;

   }



  render() {
    return (
      <div className="container">
        <div className="flexapi">
          <div className="itemapi">
            <div className="contentapi">
              <div className="date">{this.dataBuild(new Date())}</div>
              <br/>
              <div className="city">{this.state.city}</div>
              <br/>
              <div className="temp">
                {this.state.wt}   {Math.round(this.state.temp)} &deg;
              </div>
            </div>
          </div>

          <div className="itemapi">
            <div className="contentapi1">
              <nav  >
                <li className="hov" >
                  Select City
                  <ul className="main">
                    <li>
                        <a href="#" name="bangkok"  onClick={this.select}>Bangkok</a>
                    </li>
                    <li>
                        <a href="#" name="london"  onClick={this.select}>London</a>
                    </li>
                    <li>
                        <a href="#" name="mumbai"  onClick={this.select}>Mumbai</a>
                    </li>
                    <li>
                        <a href="#" name="paris"  onClick={this.select}>Paris</a>
                    </li>
                  </ul>
                </li>
              </nav>
            </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Api;
