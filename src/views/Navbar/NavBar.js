import react from 'react'
import './NavBar.scss'

class Nav extends react.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Nav