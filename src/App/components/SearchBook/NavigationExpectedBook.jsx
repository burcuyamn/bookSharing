import React from "react"
import { Link } from "react-router-dom"
import { Header, Segment, Button } from "semantic-ui-react"

export default class NavigationExpectedBook extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Segment>
                 <Header as='h4' icon='wait' content='Aradığın kitabı bulamadıysan beklenenlere ekleyebilirsin..' />
                    <Link to="/expected">
                        <Button color='red'>Ekle</Button>
                    </Link>
            </Segment>
        )
    }
}