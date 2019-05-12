import React from "react"
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import { MenuContainer } from "./NavigationMenu.styled"

export default class NavigationMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MenuContainer>
                <Menu pointing>
                    <Link to="/search">
                        <Menu.Item name='Kitap Ara' />
                    </Link>
                    <Link to="/add">
                        <Menu.Item name='Kitap Ekle' />
                    </Link>
                </Menu>
            </MenuContainer>
        )
    }
}