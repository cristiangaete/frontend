import React, { Component } from 'react'

import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        user:[],
        username: ''
    }

   async componentDidMount(){
        this.getUsers();
        console.log(this.state.user)
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        
        this.setState({user: res.data});
    }

    onChangeUserName = (e)=>{
        this.setState({
            username: e.target.value
        })
    }
    onSubmit = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users',{
            username: this.state.username
        })
        this.setState({username:'' })
        this.getUsers();
        
    }
    deleteUser = async (id) =>{
       await axios.delete('http://localhost:4000/api/users/' + id)
       this.getUsers();
        console.log(id)
    }

    render() {
        return (
            
                <div className="row">
                    <div className="col-md-4">
                        
                            <div className="card card-body">
                                <h3>Create new user</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">

                                        <input type="text" 
                                        className="form-control" 
                                        value={this.state.username}
                                        onChange={this.onChangeUserName}/>

                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        save
                                    </button>

                                </form>
                            </div>

                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                this.state.user.map(user =>
                                (<li className="list-group-item list-group-item-action"
                                     key={user._id}
                                     onDoubleClick={() => this.deleteUser(user._id)}
                                     >
                                    {user.username}
                                </li>)
                                )
                            }
                        </ul>
                    </div>
                </div>
            
        )
    }
}
