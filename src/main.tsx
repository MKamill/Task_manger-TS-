import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Task {
  id: number;
  text: string;

  constructor(text: string, id: number) {
    this.text = text;
    this.id = id;
  }
}

function CreateTask() {
  const result = prompt("Введите задачу на сегодня: ");
  if (result != null && result != "") {
    const task = new Task(result, localStorage.length);
    localStorage.setItem(String(localStorage.length), task.text);
  }
  ShowTask();
}

function DeleteTask(id: string) {
  localStorage.removeItem(id);
  let keys = Object.keys(localStorage);
  for (let index = Number(id); index < keys.length; index++) {
    localStorage.setItem(
      String(index),
      String(localStorage.getItem(String(index + 1)))
    );
  }
  localStorage.removeItem(String(keys.length));
  ShowTask();
}

function EditTask(id: string) {
  let result = prompt("Редактирование...", String(localStorage.getItem(id)));
  if (result != null && result != "") {
    localStorage.setItem(id, result);
  }
  ShowTask();
}

function ShowTask() {
  let arr2 = new Array();
  let _element_;
  let keys = Object.keys(localStorage);
  if (keys.length === 0) {
    ClearDisp();
    ReactDOM.render(
      <div>
        <h4 className="Heading">Все задачи выполнены. Вы молодец!</h4>
        <h5 className="Heading">Хотите добавить задачу? Жмите Сreate task!</h5>
      </div>,
      document.getElementById("list")
    );
  } else {
    arr2.push(<h5 className="Heading">Cписок задач:</h5>);
    for (let index = 0; index < keys.length; index++) {
      arr2.push(
        <div className="delDiv">
          {index + 1}) {localStorage.getItem(String(index))}.
          <button className="editBut" onClick={() => EditTask(String(index))}>
            edit
          </button>
          <button className="delBut" onClick={() => DeleteTask(String(index))}>
            delete
          </button>
        </div>
      );
    }
    _element_ = <div>{arr2}</div>;
    ReactDOM.render(_element_, document.getElementById("list"));
  }
}

function ClearDisp() {
  ReactDOM.render(<div></div>, document.getElementById("list"));
}

function ClearlocalStorage() {
  localStorage.clear();
  ShowTask();
}

function MainMenu() {
  ShowTask();
  return (
    <ul className="mainMenu">
      <li>
        <button onClick={() => CreateTask()}>Create task</button>
      </li>
      <li>
        <button onClick={() => ClearDisp()}>Clear display</button>
      </li>
      <li>
        <button onClick={() => ShowTask()}>Show task list</button>
      </li>
      <li>
        <button onClick={() => ClearlocalStorage()}>Clear storage</button>
      </li>
    </ul>
  );
}

export default MainMenu;
