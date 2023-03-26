import React, { useState } from 'react'
import styles from './styles.module.scss'
import down from '../../assets/imgs/down.png'
import { Popup } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [visible, setVisible] = useState(false)
    const [dot,setDot]=useState('avatar1')
    const navigate =useNavigate()
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
            src={require('../../assets/avatars/'+dot+'.png')}
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
                    avatar=>
                    <div className={styles.avatars} onClick={()=>{setDot(avatar)
                    }}  key={avatar}> 
                    <img src={require('../../assets/avatars/'+avatar+'.png')} alt=''/>
                    <div className={styles.dot} style={dot===avatar? {opacity:1}:{opacity:0}}></div>
                    </div>
                )
              }
                
                </div>
            </Popup>
        <input type='text' className={styles.username} placeholder="请取一个名字" />
      </div>
      <div className={styles.join} onClick={() => navigate('/chat')}>
        加入
      </div>
    </div>
  )
}
