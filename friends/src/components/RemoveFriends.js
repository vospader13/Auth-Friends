import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {Contain,Container} from './Styled';

class RemoveFriends extends React.Component{
    state = {
        removeFriend: {
            id: undefined,
        }
    }

    AddOne = e => {
        e.preventDefault()
        this.props.setUpdate(true)
        axiosWithAuth()
            .delete(`/friends/${this.state.removeFriend.id}`)
            .then(res => {
                console.log("addFriend", res)
            }).catch(err => {
                console.log('error', err)
            })
    }
    handleChange = e => {
        this.setState({
            removeFriend:{
                ...this.state.removeFriend,
                [e.target.name]: e.target.value
            }

        })

    }
    render(){
        return(
            <Container>
                <Contain>
                <h1>Remove Friend</h1>
                <form onSubmit={this.AddOne}
                >
                    <label>Remove by Id</label>
                    <input  style = {
                      {
                        padding: '5px'
                      }
                    }
                    type = "text"
                    name = "id"
                    value = {this.state.removeFriend.id}
                    onChange = {this.handleChange}
                    />
                    <button  style = {
                      {
                        padding: '5px'
                      }
                    } >Remove Friend</button>

                </form>
                </Contain>
            </Container>

        )
    }

}

export default RemoveFriends;