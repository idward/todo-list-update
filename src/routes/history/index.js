import {createBrowserHistory} from 'history'
import qs from 'qs'

const history = createBrowserHistory()

history.location = {
  ...history.location,
  query: qs.parse(history.location.search.substr(1)),
  state: {modal: false, scroll: false}
}

history.listen(() => {
  history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
    state: {modal: false, scroll: false}
  }
})

export default history
