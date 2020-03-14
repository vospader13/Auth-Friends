import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {
  Contain,
  Container
} from './Styled';
class AddFriends extends React.Component {

  state = {

    addFriend: {
      id: Date.now(),
      name: "",
      age: undefined,
      email: ""

    }
  }


  AddOne = e => {
    e.preventDefault()
    this.props.setUpdate(true)
    axiosWithAuth()
      .post('/friends', this.state.addFriend)
      .then(res => {
        console.log("addFriend response", res)

      }).catch(err => {
        console.log('error', err)

      })
  }


  handleChange = e => {
    this.setState({
      addFriend: {
        ...this.state.addFriend,
        [e.target.name]: e.target.value
      }

    })

  }





  render() {
    return ( <
      Container >

      <
      Contain >
      <
      h1 > Make Up A Friend! < /h1> <
      form onSubmit = {
        this.AddOne
      } >
      <
      label > Name < /label> <
      input style = {
        {
          padding: '5px'
        }
      }
      type = "text"
      name = "name"
      value = {
        this.state.addFriend.name
      }
      onChange = {
        this.handleChange
      }
      /> <
      label > Age < /label> <
      input style = {
        {
          padding: '5px'
        }
      }
      type = "text"
      name = "age"
      value = {
        this.state.addFriend.age
      }
      onChange = {
        this.handleChange
      }
      /> <
      label > Email < /label> <
      input style = {
        {
          padding: '5px'
        }
      }
      type = "text"
      name = "email"
      value = {
        this.state.addFriend.email
      }
      onChange = {
        this.handleChange
      }
      /> <
      button style = {
        {
          padding: '5px'
        }
      } > Add Friend < /button>

      <
      /form> <
      /Contain> <
      /Container>

    )
  }

}

export default AddFriends;