
import { Avatar } from '@material-ui/core'
import React ,{useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import db from './firebase/config'
import firebase from 'firebase'
import { useStateValue } from './context/StateProvider'

const MessageSender = () => {
    const [{user},dispatch]=useStateValue()

    const [input , setInput] = useState('')
    const [imgURL , setImgURL]=useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imgURL,
        })

        setInput('')
        setImgURL('')
         

    }

    return (
        <div className='messageSender'>
           <div className="messageSender__top">
               <Avatar
               src=""
               />
               <form>
                   <input
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}
                   className='messageSender__input'
                   placeholder={`Type in, ${user.displayName} ?`}
                   />

                   <input
                   value={imgURL}
                   onChange={(e)=>setImgURL(e.target.value)}
                   placeholder='image URL'
                   />
                    <button onClick={handleSubmit} type='submit'>Submit</button>
               </form>
           </div>
           <div className = "messageSender__bottom">
                 <div className = "messageSender__options">
                    <VideocamIcon style = {{ color: "red"}}/>
                    <h3>Live Stream</h3>
                 </div>
                 <div className = "messageSender__options">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photos and Story</h3>
                 </div>
                 <div className = "messageSender__options">
                    <InsertEmoticonIcon style = {{ color: "orange"}}/>
                    <h3>Feeling</h3>
                 </div>        
            </div>
        </div>
    )
}

export default MessageSender
