import React,{Component} from 'react';

class College extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Main_div" style={{padding:'20px'}}>
        <ul>
          <li>{"College name :" + this.props.college.college_name}</li>
          <li>{"College discount :" + this.props.college.discount}</li>
          <li>{"Landmark :" + this.props.college.famous_nearest_places}</li>
          <li>{"Rating :" + this.props.college.rating}</li>
        </ul>
      </div>
    );
  }

}

export default College;
