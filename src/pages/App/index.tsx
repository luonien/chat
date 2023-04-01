import React, { useEffect, useState } from 'react'
import send from '../../assets/imgs/send.png'
import back from '../../assets/imgs/back.png'
import AppProviders from '../../contexts';
import styles from './style.module.scss'
import { Popup } from 'antd-mobile'
import { useSocket } from '../../contexts/socket';
function App() {
  const socket = useSocket();
  useEffect(() => {
    // componentDidMount
    socket.on('message', (data)=>{console.log(data);
    }); // 监听消息
    return () => {
      // componentWillUnmount
      // socket.off('message', handleMessage);
    };
  }, [socket]);
  const sendMsg=()=>{
    socket.emit('message','lalala')
  }
  const [visible, setVisible] = useState(false)
  const chat = [
    {
      stat: 1,
      name: '小米',
    },
    {
      stat: 2,
      name: '小米',
      avatar: 'avatar1',
      time: '12:32',
      message: '很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 2,
      name: '一刻',
      avatar: 'avatar2',
      time: '12:32',
      message: '很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 3,
      name: 'lala',
      avatar: 'avatar3',
      time: '12:32',
      message:
        '很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 3,
      name: 'lala',
      avatar: 'avatar3',
      time: '12:32',
      message:
        '很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 3,
      name: 'lala',
      avatar: 'avatar3',
      time: '12:32',
      message:
        '很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 3,
      name: 'lala',
      avatar: 'avatar3',
      time: '12:32',
      message:
        '很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节',
    },
    {
      stat: 3,
      name: 'lala',
      avatar: 'avatar3',
      time: '12:32',
      message:
        '很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节很高兴能遇见你，在这个美丽的季节',
    },
  ]
  const users = [
    {
      name: '小明',
      img: 'a',
      tip: true,
      id: 'a',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
    {
      name: '小花',
      img: 'b',
      tip: false,
      id: 'b',
    },
    {
      name: '小天',
      img: 'c',
      tip: false,
      id: 'c',
    },
  ]
  return (
    <AppProviders>
      <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.back}>
          <img src={back} alt='' />
        </div>
        <div className={styles.others}>
          {users.map((item,index) => (
            <div
              className={styles.users}
              onClick={() => {
                setVisible(true)
              }}
              key={index}
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
            {chat.map((item, index) => {
          if (item.stat === 1) {
            return (
              <div className={styles.welcome} key={index}>
                欢迎{item.name}加入群聊
              </div>
            )
          } else if (item.stat === 2) {
            return (
              <div className={styles.othersMsg} key={index}>
                <div className={styles.avatar}>
                  <img
                    src={require('../../assets/avatars/' +
                      item.avatar +
                      '.png')}
                    alt=''
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.time}>{item.time}</div>
                  </div>
                  <div className={styles.message}>{item.message}</div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={styles.msg} key={index}>
                <div className={styles.content}>
                  <div className={styles.message}>{item.message}</div>
                  <div className={styles.time}>{item.time}</div>
                </div>
                <div className={styles.avatar}>
                  <img
                    src={require('../../assets/avatars/' +
                      item.avatar +
                      '.png')}
                    alt=''
                  />
                </div>
              </div>
            )
          }
        })}
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
        {chat.map((item, index) => {
          if (item.stat === 1) {
            return (
              <div className={styles.welcome} key={index}>
                欢迎{item.name}加入群聊
              </div>
            )
          } else if (item.stat === 2) {
            return (
              <div className={styles.othersMsg} key={index}>
                <div className={styles.avatar}>
                  <img
                    src={require('../../assets/avatars/' +
                      item.avatar +
                      '.png')}
                    alt=''
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.time}>{item.time}</div>
                  </div>
                  <div className={styles.message}>{item.message}</div>
                </div>
              </div>
            )
          } else {
            return (
              <div className={styles.msg} key={index}>
                <div className={styles.content}>
                  <div className={styles.message}>{item.message}</div>
                  <div className={styles.time}>{item.time}</div>
                </div>
                <div className={styles.avatar}>
                  <img
                    src={require('../../assets/avatars/' +
                      item.avatar +
                      '.png')}
                    alt=''
                  />
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className={styles.chat}>
        <input />
        <div className={styles.send} onClick={()=>sendMsg()}>
          <img src={send} alt='' />
        </div>
      </div>
    </div>
    </AppProviders>
    
  )
}

export default App
