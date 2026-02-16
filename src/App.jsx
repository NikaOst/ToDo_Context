import './App.css';
import AddTodoForm from './components/addTodoForm/index.jsx';
import TodoList from './components/todoList';
import { TodosProvider } from './TodosContext.jsx';

function App() {
  return (
    <>
      <TodosProvider>
        <AddTodoForm />
        <TodoList />
      </TodosProvider>
    </>
  );
}

export default App;
