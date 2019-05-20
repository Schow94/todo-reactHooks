import React from 'react';

import useInputState from './hooks/useInputState';
import useToggleState from './hooks/useToggleState';

import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  // const [isEditing, toggleForm] = useToggleState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        //toggle form to 'OFF' using custom hook
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
