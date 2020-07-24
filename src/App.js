import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import College from './College';
const colleges = require('./colleges.json').colleges;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      colleges: [],
      page:1
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log('Reached bottom');
      this.setState({
        page:this.state.page+1
      })
      this.loadUsers();
    }
  }


  componentWillMount(){
    this.loadUsers();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  loadUsers = () =>{
    let tempArray = [];
    let start = this.state.page*10 - 10;
    let end = this.state.page*10;
    if(start >= colleges.length){
      this.setState({
        hasMore:false
      })
      return;
    }
    for(let index=start; index<end ; index++){
      tempArray.push(colleges[index]);
    }
    this.setState({
      colleges:[
        ...this.state.colleges,
        ...tempArray
      ]
    })
  }

  render(){
    let arr =[];
    for(let index = 0 ;index < this.state.colleges.length; index = index+2){
      arr.push((<li style={{paddingBottom:'30px'}}>
        <div style={{display:'flex'}}>
          <div>{this.state.colleges[index] ?  <College college={this.state.colleges[index]} /> :null }</div>
          <div>{this.state.colleges[index+1] ? <College college={this.state.colleges[index+1]} /> :null }</div>
        </div>
      </li>));
    }
    return (
      <div className="ScrollTable" >

        <ul style={{padding:'10px'}}>
          {arr}
        </ul>
        {!this.state.hasMore &&
          <div style={{padding:'10px',color:'Red'}}>You did it! You reached the end!</div>
        }
      </div>
    );
  }

}

App.propTypes = {
}

App.defaultProps = {
}


export default App;
