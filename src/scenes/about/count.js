import React, { Fragment, useState } from 'react'

function Count() {
    const [counter, setCounter] = useState(0)

    return (
        <Fragment>
            <button onClick={_ => setCounter(counter + 1)}>
                Add +1
            </button>
            <hr />
            {`Our number is: ${counter}`}
            <hr />

        </Fragment>
    )
}

export default Count
