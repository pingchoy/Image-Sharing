import React from 'react'
import { Input, Container, Image, Label, Form, Checkbox, Button } from 'semantic-ui-react'
import img1 from '../img/brocade.jpg'
export default function TestPage() {

    const [title, setTitle] = React.useState("")
    // var title = "Hello"
    // setTitle("Hello")

    const [desc, setDesc] = React.useState("")

    const handleTitleChange = (e, { value }) => {
        console.log(value)
        setTitle(value)
    }

    const handleDesChange = (e, { value }) => {
        console.log(value)
        setDesc(value)
    }

    const handleCheckboxClick = (e, { value }) => {
        console.log(value)
    }
    return (
        <>
            <Image id="brocade-img" src={img1} />
            <Container>
                {title}
                <br />
                <Form>
                    <Form.Input fluid label='Title' placeholder='Tell us what you want to name it' onChange={handleTitleChange} />
                    {desc}
                    <Form.TextArea label='Description' placeholder='Tell us about your image...' onChange={handleDesChange} />
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' onClick={handleCheckboxClick} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Container>
                <Input
                    action={{
                        color: 'pink',
                        labelPosition: 'left',
                        icon: 'upload',
                        content: 'Upload',
                        onClick: () => { }
                    }}
                    actionPosition='left'
                    placeholder='Upload File...'
                    defaultValue=''
                />
            </Container>
        </>

    )
}