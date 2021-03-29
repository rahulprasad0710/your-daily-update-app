import { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
    const [oneInputToDo, setOneInputToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [filteredToDoList, setfilteredToDoList] = useState([]);
    const [status, setStatus] = useState("all");

    useEffect(() => {
        const getFromLocalStorage = () => {
            if (localStorage.getItem("todosList") === null) {
                localStorage.setItem("todosList", JSON.stringify([]));
            } else {
                let todoFromLocal = JSON.parse(
                    localStorage.getItem("todosList")
                );
                setToDoList(todoFromLocal);
            }
        };

        getFromLocalStorage();
    }, []);

    useEffect(() => {
        const saveToLocalStorage = () => {
            localStorage.setItem("todosList", JSON.stringify(toDoList));
        };
        saveToLocalStorage();

        const filterHandler = () => {
            switch (status) {
                case "completed":
                    {
                        let completeToDo = toDoList.filter(
                            (eachToDo) => eachToDo.completed === true
                        );
                        setfilteredToDoList(completeToDo);
                    }

                    break;
                case "uncomplete":
                    {
                        let uncompleteToDo = toDoList.filter(
                            (eachToDo) => eachToDo.completed === false
                        );
                        setfilteredToDoList(uncompleteToDo);
                    }

                    break;

                default:
                    setfilteredToDoList(toDoList);
                    break;
            }
        };
        filterHandler();
    }, [toDoList, status]);

    const filterToDoStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    };

    return (
        <div
            className="todosbox col-md-6 box pt-3 mb-2 "
            style={{ minHeight: "300px" }}
        >
            <Form
                oneInputToDo={oneInputToDo}
                toDoList={toDoList}
                setOneInputToDo={setOneInputToDo}
                setToDoList={setToDoList}
            />
            <div class="form-group">
                <select
                    onChange={filterToDoStatus}
                    class="form-control"
                    id="exampleFormControlSelect1"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncomplete">Uncomplete</option>
                </select>
            </div>

            <TodoList
                filteredToDoList={filteredToDoList}
                toDoList={toDoList}
                setToDoList={setToDoList}
            />
        </div>
    );
};

export default Todo;
