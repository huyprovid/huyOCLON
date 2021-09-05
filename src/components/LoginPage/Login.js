import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Login.css'
import {auth , provider} from '../firebase/config'
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/Reducer';
const Login = () => {
    const [state , dispatch] = useStateValue()
    const handleLogin=()=>{
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type:actionTypes.SET_USER,
                user :result.user
            })
            console.log(result.user)
        }).catch((err)=>console.log(err))
        
    }
    return (
        <div className="login_container">

        <div className='login' style={{background:'#fff'}}>
            <div className="login-logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUbd/L///8AcPGuyfmlxfkAbvGjw/m/1fvd5vzD1foKc/J3qPYAbPEAb/EAafEVdfKUuPi40PpalPQbevKMs/c7hPNJjfRPkfTJ2/vn8P75/P/v9v6Dq/ZbmPUzhfPp8/4qfvNrofaNtffh6f3jTx6zAAACLUlEQVR4nO3bXVOCQBiGYVxBaUWW8ptMLf//f+zrpGQhxrWYZ7uvYw72nskXeJmSBAAAAAAAAAAAAAAAAAAAAAAAAPgjzlnnEjf0MX6HM5k9rdab9eqUmCIz5q01plRTrqrtrh59eNzl07TaPx1sWZihT3Yb80W1G3kdJzEkmsXEn/fuLhv6eOHKfd0eGEGhTbYdfREU2sOxM1C+0K67++QLfw4UL3Snx8gLy/zHQO3CecdtMIpCd+gRKF1YdN8I9Qvtpk+gcmE2jbzQ2V6BwoV22a9wK1uYtc2Z+n45++LJDn3SK7mk5XGmcpmxXw190mu13Azrg+wf5SX77C18iGFn8clUvsBxMfS5bsd4n0lPEa0PzdgTmEfzI0xaCu/nQx/rhryFaTxzhsIYUKiPQn0U6qNQH4X6KBRjTUPpK5yUzQsldm12P25IfZ8O87R54UwhMbvz1PT1IlHY7xuM34PCciqksF4Mffo+Qgp3EhvUkEKN9VtI4VJh0AQVbmIv1Bg0IYVniZ9hSKHGoAkp1Bg0IYUagyakUORz2/WFZ4knmpBCkUETUCgyaAIKJV6dkoBCkSeagHd8jVenN3aWThq8e5rvl6QSO5oP1+7aZAJ9ItuXelCoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNT3Dwqrc37pLPEfsb2ZoimqQAAAAAAAAAAAAAAAAAAAAAAAEJNX1Igf8YfBkrwAAAAASUVORK5CYII=" alt="" />
                <button onClick={handleLogin} className='login-btn'><AddCircleOutlineIcon fontSize='large'/> </button>
                <h2>Sign in With Google</h2>
            </div>
        </div>
        </div>
    )
}

export default Login
