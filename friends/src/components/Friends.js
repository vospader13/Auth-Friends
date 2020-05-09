import React, {
    useEffect,
    useState
  } from 'react';
  import {
    axiosWithAuth
  } from '../utils/axiosWithAuth';
  import AddFriends from './AddFriends';
  import RemoveFriends from './RemoveFriends';
  import {
    FriendDiv,
    Container
  } from './Styled';
  const Friends = () => {
  
    const [friendlist, setFriendList] = useState([]);
    const [update, setUpdate] = useState(false);
    const [identify, setIdentify] = useState(0);
    const fetchData = () => {
      axiosWithAuth().get(`/friends`)
        .then(res => {
          console.log('response of friends', res.data)
          setFriendList(res.data)
  
        }).catch(err => {
          console.log(err)
        })
    }
  
    useEffect(() => {
      fetchData()
      setUpdate(false)
  
  
    }, [update])
  
    console.log('identify', friendlist.length)
    const handleChange = e => {
      return e.target.value;
    }
  
  
  
  
    return ( 
    <div >
      <div>
        <h1> Friends </h1>
  
  
      </div> 
      <div>
  
  
      <div> <h2 style = {
        {
          color: `white`
        }
      } > Add And Remove </h2></div>
      </div> 
      <div>
      <h1> Friends List </h1> 
      <Container>
      <div style = {
        {
          display: `flex`,
          flexWrap: `wrap`
        }
      } >
  
      {
        friendlist.map(item => {
          return (
  
            <FriendDiv key = {
              item.id
            } >
            <h1 > ID: {
              item.id
            } </h1> 
            <h2> Name: {
              item.name
            } </h2> 
            <h2> Age: {
              item.age
            } </h2> 
            <h2> Email: {
              item.email
            } </h2> 
            </FriendDiv>
          )
        })
      } </div> 
      </Container>
  
      <div style = {
        {
          display: `flex`
        }
      } >
      <AddFriends friendlist = {
        friendlist
      }
      setUpdate = {
        setUpdate
      }
      /> 
      <RemoveFriends setUpdate = {
        setUpdate
      }
      /> </div> 
      </div>
  
      </div>
    )
  }
  
  
  export default Friends; 