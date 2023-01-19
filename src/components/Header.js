import { Component } from "react";
import dangbee from '../img/dang-bee.jpg'
import nhu1 from '../img/nhuxeoxat.jpg'
import './Header.css'
export class Header extends Component
{
    render(){
        return(
            <div className="Header">
                <div>
                    <img className="header-img" src={dangbee}></img>
                </div>
                <div><i class="header-heart fa-solid fa-heart-pulse"></i></div>
                <div>
                    <img className="header-img" src={nhu1}></img>
                </div>
            </div>
        )
    }
}