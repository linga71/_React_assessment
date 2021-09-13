import React, { Component } from 'react';
import Modal from './Modal.js';


class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [],
      textInput:'',
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState( {brochure : tempbrochure} );
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }
  handleSubmit =(event)=>{
    var taskLen= event.target.elements.msg.value;
    if(taskLen.length >0){
   this.setState({
   brochure:[...this.state.brochure,taskLen]
})
   event.target.reset();
    }
   event.preventDefault();
}

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };


  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}> Edit </button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}> Delete </button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <form className="mb-3" onSubmit={event => this.handleSubmit(event)}>
    <div >
    <input class="col-form-control form-control-sm-3" type="text"  name="msg"  placeholder="Enter your to do task here" aria-label="Search"/>
    
    <button type="submit" className="btn btn-primary"> Add </button>
    
    </div>
    </form>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          msg={modalData}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;