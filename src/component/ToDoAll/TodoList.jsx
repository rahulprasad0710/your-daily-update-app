import React from "react";
import EachTDoTo from "./EachTDoTo";

const TodoList = ({ toDoList, setToDoList, filteredToDoList }) => {
    return (
        <div className="py-3">
            <ul>
                {" "}
                {filteredToDoList.map((eachToDo) => (
                    <EachTDoTo
                        key={eachToDo.id}
                        setToDoList={setToDoList}
                        eachToDo={eachToDo}
                        toDoList={toDoList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
