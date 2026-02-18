//    ○ Компонент для отображения списка задач (TodoList):
//    ● Создайте новый файл, например TodoList.js.
//    ● Используйте useContext для доступа к состоянию из TodosContext.
//    ● Отобразите каждую задачу в списке, добавьте чекбокс и кнопку для удаления.
import { useContext } from 'react';
import TodosContext from '../../TodosContext.jsx';
function TodoList() {
  const { taskList, completeTasks, deleteTask, completeTask } = useContext(TodosContext);

  return (
    <div>
      {taskList.map((task, indx) => {
        return (
          <div key={indx} style={{ display: 'flex', gap: '10px' }}>
            <input
              style={{}}
              onChange={() => completeTask(indx)}
              type="checkbox"
              name="task"
              id={indx}
            />
            <p style={{ textDecoration: completeTasks.includes(indx) ? 'line-through' : 'none' }}>
              {task}
            </p>
            <button onClick={() => deleteTask(indx)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
