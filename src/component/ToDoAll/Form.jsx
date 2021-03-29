const Form = ({ setOneInputToDo, setToDoList, toDoList, oneInputToDo }) => {
    const handleInputText = (e) => {
        setOneInputToDo(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoList([
            ...toDoList,
            { title: oneInputToDo, completed: false, id: Math.random() * 100 },
        ]);
        setOneInputToDo("");
    };
    return (
        <form>
            <div className="form-group d-flex  ">
                <input
                    value={oneInputToDo}
                    onChange={handleInputText}
                    type="text"
                    className="form-control "
                    placeholder="Add ToDos..."
                />
                <button
                    onClick={handleSubmit}
                    className="btn btn-outline-info  btn-sm ml-2"
                >
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        </form>
    );
};

export default Form;
