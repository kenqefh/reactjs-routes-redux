import React, { Fragment, useState } from 'react'

function Form() {
    const [poke, setPoke] = useState({ name: '', type: '' })

    const handleChange = event => {
        setPoke({
            ...poke, [event.target.name]: event.target.value
        })
    }

    const sendData = event => {
        /** To avoid message send error */
        event.preventDefault();
        console.log(`Pokemon: ${poke.name}; Type: ${poke.type}`);
    }

    return (
        <Fragment>
            <h2>Write poke...</h2>
            <form onSubmit={sendData}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            /** To update pokes */
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Type:
                        <input
                            type="text"
                            name="type"
                            /** To update pokes */
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <input type="submit" value="Submit" />
            </form>

            {/** To show my Poke */}
            <p><strong>Poke:</strong> {poke.name}</p>
            <p><strong>Type:</strong> {poke.type}</p>
        </Fragment>
    )
}

export default Form
