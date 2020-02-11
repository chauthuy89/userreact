import React, { Component } from 'react';

class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) { return "Admin"; }
    else if (this.props.permission === 2) { return "Moderator"; }
    else { return "Normal User"; }

  }
  editClickFunc = () => {
    this.props.editClick();
    this.props.handleChangeEditUserStatus();
  }
  deleteButtonClick  = (idUser) => {
    // console.log('id cua phan tu '+ idUser);
    this.props.deleteButtonClick(idUser);
  }
  render() {
    //props.editClick
    return (

      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.username}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn btn-warning edit" onClick={() => this.editClickFunc()}> <i className="fa fa-edit" />Edit</div>
          <div className="btn btn-danger delete" onClick ={(idUser) =>this.deleteButtonClick(this.props.id)}> <i className="fa fa-delete"  />Delete</div>
        </td>
      </tr>

    );
  }
}

export default TableDataRow;