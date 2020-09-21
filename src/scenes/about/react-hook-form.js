import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {

    // useForm 
    const { register, handleSubmit, watch, errors } = useForm()

    // Our poke
    const [poke2, setPoke2] = useState({ name: '', type: '' })

    // Method to Submit form
    const sendData2 = data => {
        console.log(data);
    }

    // Catch on real time values | way One
    const handleChange = event => {
        setPoke2({
            ...poke2, [event.target.name]: event.target.value
        })
    }
    return (
        /** To don't have use a Div-Container */
        <Fragment>
            <h2>Write poke 2!!!</h2>

            {/** =handleSubmit( nameMySubmitMethod ) */}
            <form onSubmit={handleSubmit(sendData2)}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            /** To validate field */
                            ref={register({
                                required: true
                            })}
                        />
                    </label>
                    {
                        /* Show an unique message */
                        errors.name && "The name is required!"
                    }
                </div>

                <div>
                    <label>
                        Type:
                        <input
                            type="text"
                            name="type"
                            onChange={handleChange}
                            /** To validate field and Set Error messages */
                            ref={register({
                                required: { value: true, message: 'Type is required' },
                                minLength: { value: 3, message: 'This length must be over 3' },
                                maxLength: { value: 12, message: 'This length is not valid, because it is over 12' }
                            })}
                        />
                    </label>
                    {
                        /* Show error messages for each */
                        errors.type?.message
                    }
                </div>

                <input type="submit" value="Submit" />
            </form>

            {/* Show poke values */}
            <p><strong>Poke:</strong> {poke2.name}</p>
            <p><strong>Type:</strong> {poke2.type}</p>
            <hr />

            {/* Catch on real time values | way Two */}
            <p><strong>Poke Name:</strong> {watch("name")}</p>
            <p><strong>Poke Type:</strong> {watch("type")}</p>
        </Fragment>
    )
}

export default ReactHookForm
