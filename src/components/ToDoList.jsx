function ToDoList(props) {
  return (
    <div className="flex justify-center items-center flex-col mx-auto w-[95%] md:w-3/4">
      {props.children[0] /* input modal*/} 

      <ol id="todo-list" className="w-full grid grid-cols-1 gap-2 items-center lg:grid-cols-2" >
        {props.children[1] /* todo items as ordered list items */}
      </ol>
    </div>
  );
}

export default ToDoList;
