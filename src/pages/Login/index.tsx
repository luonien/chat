import React, { useState } from 'react'
import styles from './styles.module.scss'
import down from '../../assets/imgs/down.png'
import { Popup } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import{userStore} from '../../store'
import { useSocket } from '../../contexts/socket'
 function Login() {
   const socket = useSocket()
    const [visible, setVisible] = useState(false)
    const [username,setUsername]=useState('')
    const [avatar,setAvatar]=useState('avatar1')
    const navigate =useNavigate()
    const handleLogin=()=>{ 
        userStore.setUser(username,avatar)
        socket.emit('user', {
          name:username,
        })
        navigate('/chat')
    }
    
    let lists=[]
    for(let i=1;i<19;i++){
        lists.push(`avatar${i}`)
    }
  return (
    <div className={styles.page}>
      <div className={styles.title}>欢迎进入聊天室</div>
      <div className={styles.main}>
        <div className={styles.avatar} onClick={()=>{setVisible(true)}}>
          <img
            src={require('../../assets/avatars/'+avatar+'.png')}
            alt=''
          />
          <div className={styles.down}>
          <img src={down} alt=""  />
          </div>
        </div>
        <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                minHeight: '35vh',
              }}
            >
                <div className={styles.content}>
              {
                lists.map(
                    item=>
                    <div className={styles.avatars} onClick={()=>{setAvatar(item)
                    }}  key={item}> 
                    <img src={require('../../assets/avatars/'+item+'.png')} alt=''/>
                    <div className={styles.dot} style={item===avatar? {opacity:1}:{opacity:0}}></div>
                    </div>
                )
              }
                
                </div>
            </Popup>
        <input type='text' className={styles.username} placeholder="请取一个名字" value={username} onChange={(e)=>setUsername(e.target.value)}
        
        />
      </div>
      <div className={styles.join} onClick={()=>handleLogin()}>
        加入
      </div>
    </div>
  )
}
export default observer(Login)