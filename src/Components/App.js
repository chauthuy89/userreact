import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import UserData from './Data.json';


const uuidv1 = require('uuid/v1');
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      data: UserData,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  handleChangeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  editUser = (user) => {
    console.log('Edit function connected');

    this.setState({
      userEditObject: user
    });
    console.log(user);
  }
  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    this.setState({
      data: items
    });
    items.push(item);
    // console.log(item);
    // console.log('connected');
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
  }
  // thongbao =() => {
  //   alert("Successful Connect");

  // }
  handleChange = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  deleteUser = (idUser)=>{
    //ham filter
    // var arr =[1,2,3];
    // var x= 2;
    // arr = arr.filter(item => item !== x);
    // console.log(arr);
    // console.log(idUser);
    var tempData = this.state.data;
    tempData =tempData.filter(item => item.id !== idUser);
    console.log(tempData);
    this.setState({
      data:tempData
    });
  //  tempData.forEach((value,key)=>{
  //     if(value.id ===idUser){
  //       // console.log(value.name);
  //     //  tempData.delete
        
  //     }
  //   })
  }
  getUserEditInfoApp  = (info) => {
    console.log('Information Edited '+info);
    this.state.data.forEach((value,key) =>{
     if(value.id===info.id){
       value.name =info.name;
       value.tel = info.tel;
       value.permission =info.permission;
     }
    })

  }
  getTextSearch = (data) => {
    // alert('Connected');
    this.setState({
      searchText: data
    });

    console.log('Du lieu bo nhan duoc la ' + this.state.searchText);

  }
  render() {
    // console.log(this.state.data);
    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    })
    // console.log(result);

    return (
      <div >
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm
              
              getUserEditInfoApp = { (info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                handleChangeEditUserStatus={() => this.handleChangeEditUserStatus()}
                checkConnectProps={(data) => this.getTextSearch(data)}
                showForm={this.state.showForm} 
                connect={() =>  this.handleChange()}
                editUserStatus={this.state.editUserStatus} />

              {/* <TableData dataUserProps={this.state.data} /> */}

              <TableData dataUserProps={result}
              deleteUser ={(idUser)=>this.deleteUser(idUser)}
                handleChangeEditUserStatus={() => this.handleChangeEditUserStatus()}
                edit={(user) => this.editUser(user)} />

              <AddUser
                add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}
                showForm={this.state.showForm} />
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
