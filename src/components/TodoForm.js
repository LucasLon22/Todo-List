import React, { useState, useEffect, useRef } from 'react';


function TodoForm(props) {
    const [tarea, setTarea] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setTarea(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: tarea
        });
        setTarea('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form text-center'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={tarea}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Editar
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Escriba aqui la tarea'
                        value={tarea}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Agregar
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;