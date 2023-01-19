import {Component} from 'react'
import './App.css'
import RlsCounter from './components/Clock'
import { Header } from './components/Header'

export default class App extends Component{
  constructor(){
    super()
    let a =  new Date('2021-12-22 20:00:00')
    this.state = {date: a.getTime()}
  }
  render(){
     return(
      <div className='App'>
        <Header></Header>
        <div className='rlscounter'>
          We have been together for
          <RlsCounter></RlsCounter>
        </div>
        
      </div>
      
     )
}}