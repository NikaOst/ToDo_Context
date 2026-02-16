//    ○ Компонент для добавления новой задачи (AddTodoForm):
//    ● Создайте новый файл, например AddTodoForm.js.
//    ● Определите форму с текстовым полем для ввода названия задачи и кнопкой для добавления.
//    ● Используйте useContext для вызова метода добавления задачи из TodosContext.
import { useContext, useState } from 'react';
import TodosContext from '../../TodosContext.jsx';
function AddTodoForm() {
  const { addTask } = useContext(TodosContext);
  const [taskValue, setTaskValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskValue);
    setTaskValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task_value"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
}
export default AddTodoForm;
