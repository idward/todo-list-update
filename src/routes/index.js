import Home from '../container/home/Home';
import Login from '../container/login/Login';
import TodoList from '../container/todolist/TodoList';
import NotFound from '../components/notFound/NotFound';

const routes = [
  {path: '/', component: Home, requiredAuth: false},
  {path: '/login', component: Login, requiredAuth: false},
  {path: '/todos', component: TodoList, requiredAuth: true},
  {path: '/404', component: NotFound, requiredAuth: false}
];

export default routes;
