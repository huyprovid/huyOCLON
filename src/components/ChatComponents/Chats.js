import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import {  useState , useEffect } from 'react'
import axios from 'axios'
import Feed from '../Feed'
const Chats = () => {
    const [{user} , dispatch]=useStateValue()
    const [Loading , setLoading] =useState(true)
    console.log(user)
    const history = useHistory()
    const getFile = async (url)=>{
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data], 'userPhoto.jpg',{type:'image/jqeg'})
    }
    useEffect(()=>{
        if(!user){
            history.push('/')
            return
        }
            axios.get('https://api.chatengine.io/users/me',{
                headers :{
                    'project-id' : '',
                    'user-name':user.email,
                    'user-secret':user.uid,
                }
            }).then(()=>{
                setLoading(false)
            }).catch(()=>{
                let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret' , user.uid)

                getFile(user.photoURL).then((avatar)=>{
                    formdata.append('avatar',avatar , avatar.name)

                    axios.post('https://api.chatengine.io/users',
                    formdata ,
                    {headers:{'private-key':''}}
                    ).then(()=>setLoading(false)).catch((err)=>console.log(err))
                })
            })
    },[user , history])
    return (
        <div className="feeeeed">
            <ChatEngine
                height='calc(100vh-66px)'
                projectID = ''
                userName = {user.email}
                userSecret={user.uid}
            
            />
            <div style={{display:'none'}} className="feeeeeeeed">
                <Feed/>
            </div>
            </div>
    )
}

export default Chats
