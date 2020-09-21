import React, { Fragment } from 'react'
import Template from './../../components/template'
import Form from './form'
import ReactHookForm from './react-hook-form'

export default function About() {


    const main = (
        <Fragment>
            <Form />
            <ReactHookForm />
        </Fragment>
    )
    return (
        <Template
            main={main}
        />
    )
}
