// 2. Создание контекста для ToDo приложения
//    ○ Создайте файл, например TodosContext.js.
//    ○ В этом файле, используйте createContext из React для создания нового контекста.
//    ○ Определите компонент провайдера, TodosProvider, который будет использовать useState для управления состоянием списка задач.
//    ○ Добавьте в провайдер методы для управления задачами: добавления, удаления и изменения статуса
//    задач.

import { createContext, useState } from 'react';

const DataContext = createContext();

export const TodosProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const deleteTask = (id) => {
    const newList = taskList.filter((task, indx) => {
      return indx !== id;
    });
    setTaskList(newList);
  };

  const completeTask = (id) => {
    if (!completeTasks.includes(id)) {
      setCompleteTasks([...completeTasks, id]);
    } else {
      const newList = completeTasks.filter((task, indx) => {
        return indx !== id;
      });
      setCompleteTasks(newList);
    }
  };

  return (
    <DataContext.Provider value={{ taskList, completeTasks, addTask, deleteTask, completeTask }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
