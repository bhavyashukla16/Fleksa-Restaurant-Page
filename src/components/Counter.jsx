import React from 'react';
import AddIcon from '@material-ui/icons/Add';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
  
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
  
     <div style={{width: 0, height: 0}}>
     <div className="add-icon" onClick={(e) => this.increment(e)}>
        <AddIcon />
        </div>

           {this.state.count !==0 && (
         <div className="display-count">
         <h6 className="count">
         {this.state.count}
         </h6>
         </div>  )
         }
    </div>
      );
    }
  };

  export default Counter;