import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick  = (idUser) => {
    // console.log(idUser);
    this.props.deleteUser(idUser);
  }
  mappingDataUser =() =>
    this.props.dataUserProps.map((value,key)=>(
      <TableDataRow 
      deleteButtonClick  = {(idUser) => this.deleteButtonClick(idUser)}
      editClick  = {(user) => {this.props.edit(value)}}
      handleChangeEditUserStatus  = {() => this.props.handleChangeEditUserStatus()}
      stt={key}
      key ={key}
      username={value.name} 
      tel ={value.tel}
      permission ={value.permission}
      id ={value.id}
      />
    ))
  //this.props.edit
    render() {
      // console.log(this.props.dataUserProps);
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover ">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Permission</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
      
        );
    }
}

export default TableData;