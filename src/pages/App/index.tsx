import React, { useEffect, useState } from 'react'
import send from '../../assets/imgs/send.png'
import back from '../../assets/imgs/back.png'
import { nanoid } from 'nanoid'
import styles from './style.module.scss'
import { Popup } from 'antd-mobile'
import { useSocket } from '../../contexts/socket'
import Message from '../../components/Message'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../store'
interface IMessage {
  stat: number
  name: string
  avatar?: string
  message?: string
  time?: number
}
function App() {
  const {username,avatar}=userStore.user
  const [msg,setMsg]=useState('')
  const navigate = useNavigate()
  const socket = useSocket()
  const [visible, setVisible] = useState(false)
  const [chat,setChat]=useState<IMessage[]>([{stat:1,name:username}])
  useEffect(() => {
    socket.on('message', (data) => {
      setChat([...chat,data])
    })
    socket.on('user', (data) => {
      setChat([...chat,data])
    })
  }, [chat, socket])
  const sendMsg = () => {
    setChat([...chat,{
      stat:3,
      name:username,
      avatar:avatar,
      time:Date.now(),
      message:msg
    }])
    socket.emit('message', {
      stat:2,
      name:username,
      avatar:avatar,
      time:Date.now(),
      message:msg
    })
    setMsg('')
  }

  const users = [
    {
      name: '小明',
      img: 'a',
      tip: true,
      id: 'a',
    },
  ]
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.back} onClick={() => navigate('/')}>
          <img src={back} alt='' />
        </div>
        <div className={styles.others}>
          {users.map((item) => (
            <div
              className={styles.users}
              onClick={() => {
                setVisible(true)
              }}
              key={nanoid()}
            >
              <img src={require('../../assets/avatars/avatar1.png')} alt='' />
              {item.tip ? <div className={styles.dot}></div> : null}
            </div>
          ))}
        </div>
        <Popup
          className={styles.popContent}
          bodyClassName='popContent'
          visible={visible}
          onMaskClick={() => {
            setVisible(false)
          }}
        >
          <div className={styles.username}>小米</div>
          <div className={styles.main}>
            {chat.map((item) => (
              <Message
                stat={item.stat}
                name={item.name}
                key={nanoid()}
                avatar={item.avatar}
                message={item.message}
                time={item.time}
              />
            ))}
          </div>
          <div className={styles.chat}>
            <input />
            <div className={styles.send}>
              <img src={send} alt='' />
            </div>
          </div>
        </Popup>
      </div>
      <div className={styles.main}>
        {chat.map((item) => (
          <Message
            stat={item.stat}
            name={item.name}
            key={nanoid()}
            avatar={item.avatar}
            message={item.message}
            time={item.time}
          />
        ))}
      </div>
      <div className={styles.chat}>
        <input
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              sendMsg()
            }
          }}
        />
        <div className={styles.send} onClick={() => sendMsg()}>
          <img src={send} alt='' />
        </div>
      </div>
    </div>
  )
}

export default observer(App)
