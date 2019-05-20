import React from 'react';
import useToggleState from './hooks/useToggleState';

import EditTodoForm from './EditTodoForm';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default function Todo({
  task,
  completed,
  removeTodo,
  id,
  toggleTodo,
  editTodo
}) {
  const [isEditing, toggleForm] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <EditTodoForm
            id={id}
            task={task}
            editTodo={editTodo}
            toggleEditForm={toggleForm}
          />
          <Button
            onClick={() => toggleForm()}
            aria-label="Delete"
            color="secondary"
            variant="contained"
          >
            CANCEL
          </Button>
        </Grid>
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggleForm}>
              <EditIcon aria-label="Edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
