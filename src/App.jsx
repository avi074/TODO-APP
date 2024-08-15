import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputModal from "./components/InputModal";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import { VAR_NAME } from "./utils/constants";

function App() {
  const initialData = {
    name: "",
    desc: "",
    priority: "0",
  };

  // state vars
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(VAR_NAME)) ?? [],
  );
  const [open, setOpen] = useState(false);
  const [currTask, setCurrTask] = useState(initialData);

  // updates the todos in the local storage
  useEffect(() => {
    localStorage.setItem(VAR_NAME, JSON.stringify(todos));
  }, [todos]);

  /**
   ** Changes the open state
   ** Resets the current Task on closed state
   */
  const handleOpenAndReset = () => {
    setOpen(!open);
    if (!open) {
      setCurrTask(initialData);
    }
  };

  /**
   * Update ToDo at a specific position
   * @param {object} todo todo to be updated
   * @param {number} pos position where to update
   */
  const updateTodosAt = (todo, pos) => {
    setTodos([...todos.slice(0, pos), todo, ...todos.slice(pos + 1) ]);
  };

  /**
   ** Add new ToDo in the list
   ** Update the exisiting ToDos
   * @param {object} todo given ToDo object
   */
  const updateTodos = (todo) => {
    if (todo.id) {
      console.log(todo, todo.id);
      const todoIndex = todos.findIndex((t) => t.id == todo.id);
      if (todoIndex != -1) {
        updateTodosAt(todo, todoIndex);
      }
    } else {
      const currTodo = {
        id: Date.now(),
        ...todo,
        status: 1,
      };
      setTodos([...todos, currTodo]);
    }
  };

  /**
   * Send the clicked ToDoItem to Input Modal for Editing
   * @param {number} todoId Id of the ToDo
   */
  const editTodo = (todoId) => {
    const todoIndex = todos.findIndex((t) => t.id == todoId);
    if (todoIndex != -1) {
      setCurrTask(todos[todoIndex]);
      setOpen(true);
    }
  };

  /**
   * Delete the clicked ToDoItem
   * @param {number} todoId Id of the ToDo 
   */
  const deleteTodo = (todoId) => {
    const todoIndex = todos.findIndex((t) => t.id == todoId);
    if (todoIndex != -1) {
      setTodos([...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)]);
    }
  };

  /**
   * Changes the status of the ToDoItem
   * @param {number} todoId Id of the ToDo
   * @param {number} changedStatus changed status of the ToDoItem
   */
  const editTodoStatus = (todoId, changedStatus) => {
    const todoIndex = todos.findIndex((t) => t.id == todoId);
    if (todoIndex != -1) {
      const todo = {
        ...todos[todoIndex],
        status: changedStatus,
      };
      updateTodosAt(todo, todoIndex);
    }
  };

  return (
    <>
      <Header />
      <ToDoList>
        <InputModal
          open={open}
          task={currTask}
          events={{
            handleDialog: handleOpenAndReset,
            updateTasks: updateTodos,
          }}
        />

        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              task={todo}
              events={{
                handleEdit: editTodo,
                handleDelete: deleteTodo,
                handleStatus: editTodoStatus,
              }}
            />
          );
        })}
      </ToDoList>
    </>
  );
}

export default App;
