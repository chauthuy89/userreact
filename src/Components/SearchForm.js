import React, { Component } from 'react';
import EditForm from './EditForm';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',//gia tri trung gian
      userObj: {}
    }
  }
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    });
    console.log(info);
    this.props.getUserEditInfoApp(info);
  }
  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    });
    this.props.checkConnectProps(this.state.tempValue);//load du lieu trong luc tim kiem ngay lap tuc
  }
  hienthiNut = () => {
    if (this.props.showForm === true) {
      return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.connect()}>Close</div>
    }
    else {
      return <div className="btn btn-block btn-outline-info" onClick={() => this.props.connect()} >Add New</div>

    }
  }
  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return <EditForm
        getUserEditInfo={(info) => this.getUserEditInfo(info)}
        handleChangeEditUserStatus={()=>this.props.handleChangeEditUserStatus()}
        userEditObject={this.props.userEditObject}
      />
    }
  }
  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn btn-group">
            <input type="text" className="form-control" placeholder="Enter Keyword" onChange={(event) => this.isChange(event)} />
            <div className="btn btn-info" onClick={(data) => this.props.checkConnectProps(this.state.tempValue)}>Search</div>
          </div>
          <div className="form-group">
            {this.hienthiNut()}
          </div>

        </div>
        <hr />
      </div>

    );
  }
}

export default SearchForm;