import { makeAutoObservable } from "mobx";
import { makePersistable } from 'mobx-persist-store'
class UserStore {

  user = {
    username:'',
    avatar:'avatar1'
  };
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'user',
      properties: ['user'],
      storage: window.localStorage,
    })
  }
  setUser(username: string,avatar: string){
    this.user.username=username
    this.user.avatar=avatar
  }
}

const userStore = new UserStore();
export { userStore };