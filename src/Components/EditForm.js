import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission

        }
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    saveButton  = () => {
        var info ={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission =this.state.permission;
        console.log('info la'+ info.name);
        this.props.getUserEditInfo(info);
        this.props.handleChangeEditUserStatus();

    }
    
    render() {
        console.log(this.state);
        
        return (
            <div className="row">
                <div className="col">
                    <form method="post">
                        <div className="card text-white bg-warning mb-3 mt-2" >
                            <div className="card-header text-center">Edit User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange  = { (event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <input onChange  ={ (event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <select onChange  ={ (event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" >
                                        <option value>Permission</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button"
                                        className="btn btn-block btn-danger" value="Save" onClick={()=>this.saveButton()} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditForm;