import React, { useState } from "react";

const EachTDoTo = ({ eachToDo, setToDoList, toDoList }) => {
    const [fadeDelClass, setfadeDelClass] = useState(false);
    const [fadeCompleteClass, setFadeCompleteClass] = useState(false);

    const getClassName = () => {
        if (fadeCompleteClass === true) {
            return "fadeToDoCom text-dark";
        } else if (fadeDelClass === true) {
            return "fadeToDoDel text-dark";
        } else {
            return "text-dark";
        }
    };

    const handleDelete = () => {
        setFadeCompleteClass(false);
        setfadeDelClass(true);

        setTimeout(() => {
            let newTodoList = toDoList.filter(
                (allToDo) => allToDo.id !== eachToDo.id
            );
            setToDoList(newTodoList);
        }, 1000);
    };
    const handleComplete = () => {
        setFadeCompleteClass(!fadeCompleteClass);
        console.log(eachToDo.completed);

        setTimeout(() => {
            let newTodoList = toDoList.map((allToDo) => {
                if (allToDo.id === eachToDo.id) {
                    eachToDo.completed = !eachToDo.completed;
                }
                return allToDo;
            });
            setToDoList(newTodoList);
        }, 1000);
    };

    //fadeDelClass ? "fadeToDoDel text-dark" : "text-dark"
    return (
        <div className=" text-purple d-flex justify-content-between mb-2">
            <li>{<p className={getClassName()}>{eachToDo.title}</p>}</li>
            <div className="btn-group" role="group">
                <button
                    className="btn btn-sm btn-success"
                    aria-pressed={false}
                    onClick={handleComplete}
                >
                    <i className="fas fa-check"></i>
                </button>
                <button
                    onClick={handleDelete}
                    className="btn btn-sm btn-danger"
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default EachTDoTo;
