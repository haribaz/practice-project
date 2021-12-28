import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import styles from './AddUser.module.css'

const AddForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault()

        if (enteredName.trim().length !== 0 && enteredAge.trim().length !== 0) {
            props.onAddUser({ name: enteredName, age: enteredAge })
            setEnteredName('')
            setEnteredAge('')
        } else {
            setError({
                title: 'Error',
                message: 'Please enter a name and age'
            })
        }
    }

    const closeHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && (
                <ErrorModal title={error.title} message={error.message} onClose={closeHandler} />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"></label>
                    <input
                        id="username"
                        type="text"
                        name="name"
                        value={enteredName || ''}
                        placeholder="Name"
                        onChange={nameChangeHandler}
                    />
                    <label htmlFor="age"></label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        value={enteredAge || ''}
                        placeholder="Age"
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddForm
