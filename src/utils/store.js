import mobx, {observable, computed, asStructure} from 'mobx'

mobx.useStrict(true)

class RootStore {
  constructor () {
    this.userStore = new UserStore(this)
  }
}

class UserStore {
  constructor (rootStore) {
    this.rootStore = rootStore
  }
}

let rootStore = new RootStore()
export default rootStore
