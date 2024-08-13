import Header from "./components/Header";
import InputModal from "./components/InputModal";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import data from "./utils/mockdata";

function App() {
  return (
    <>
      <Header />
      <ToDoList>
        <InputModal />
        {data.map(({ id, name, desc, priority, status }) => {
          return (
            <ToDoItem
              key={id.toString()}
              name={name}
              desc={desc}
              priority={priority}
              status={status}
            />
          );
        })}
      </ToDoList>
    </>
  );
}

export default App;
