import React from 'react'
import styles from './style.module.scss'
import dayjs from 'dayjs'
interface IProps{
    stat:number,
    name:string,
    avatar?:string,
    message?:string,
    time?:number,
}

export default function Message(props:IProps) {
  const  formatMessageTime=(datePre : number)=>{
    const dateNew = dayjs(new Date().getTime())
    const day = dateNew.diff(datePre, 'day')
    if(day < 1) return dayjs(datePre).format('HH:mm')
    else if (dateNew.year() === dayjs(datePre).year()) return dayjs(datePre).format('MM-DD HH:mm')
    return dayjs(datePre).format('YYYY-MM-DD HH:mm')
  }

  if (props.stat === 1) {
    return (
      <div className={styles.welcome}>
        欢迎{props.name}加入群聊
      </div>
    )
  } else if (props.stat === 2) {
    return (
      <div className={styles.othersMsg} >
        <div className={styles.avatar}>
          <img
            src={require('../../assets/avatars/' + props.avatar + '.png')}
            alt=''
          />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.time}>{formatMessageTime(props.time!)}</div>
          </div>
          <div className={styles.message}>{props.message}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.msg} >
        <div className={styles.content}>
          <div className={styles.message}>{props.message}</div>
          <div className={styles.time}>{formatMessageTime(props.time!)}</div>
        </div>
        <div className={styles.avatar}>
          <img
            src={require('../../assets/avatars/' + props.avatar + '.png')}
            alt=''
          />
        </div>
      </div>
    )
  }
}
