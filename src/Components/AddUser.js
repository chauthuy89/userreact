import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
isChange =(event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({
        [name] :value
    });
    // var item= {};
    // item.id = this.state.id;
    // item.name =this.state.name;
    // item.tel =this.state.tel;
    // item.permission =this.state.permission;
}
    
    // kiemtratrangthai =() =>{
        
    //         if (this.props.showForm === true) {
    //             return (
    //                 <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
    //                     <div className="card-header">Add User</div>
    //                     <div className="card-body text-primary">
    //                         <div className="form-group">
    //                             <input type="text" className="form-control" placeholder="Enter username" />
    //                         </div>
    //                         <div className="form-group">
    //                             <input type="text" className="form-control" placeholder="Phone Number" />
    //                         </div>
    //                         <div className="form-group">
    //                             <select className="custom-select" id="inputGroupSelect01">
    //                                 <option defaultValue={1}>Chon quyen mac dinh</option>
    //                                 <option value={1}>Admin</option>
    //                                 <option value={2}>Moderator</option>
    //                                 <option value={3}>Normal</option>
    //                             </select>
    //                         </div>
    //                         <div className="form-group">
    //                             <button type="submit" className="btn btn-block btn-primary">Add</button>
    //                         </div>
    //                     </div>
    //                 </div> 
    //             )
    //         }
    //     }
    // }
    
    showButton = () => {
        if (this.state.status === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.statusChange()}>Close</div>

        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.statusChange()}>Add New</div>

        }
    }
    statusChange = () => {
        this.setState({
            status: !this.state.status
        });
    }
    showForm = () => {
        // if (this.state.status === true) {
            if (this.props.showForm === true) {
            return (
                <div className="col-12">
                    <form>
                <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Add User</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" name="name" onChange={(event) => this.isChange(event)}  className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} id="inputGroupSelect01">
                                <option defaultValue={1}>Permission</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" onClick= {(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission)} className="btn btn-block btn-primary" value="Add New"/>
                        </div>
                    </div>
                </div> 
                </form>
                </div>
            )
        }
    }
    render() {
        // console.log(this.props.showForm);
        // console.log(this.state);
        return (
            
                <div>
                    {/* {this.showButton()} */}
                    {this.showForm()}
                    {/* {this.kiemtratrangthai()} */}
                </div>


               
         

        );
    }
}

export default AddUser;