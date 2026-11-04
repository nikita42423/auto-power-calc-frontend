import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function TabBar() {
  return (
    <Navbar className="tab-bar">
      <Nav className="tab-nav">
        <Nav.Link as={NavLink} to="/feed" className="tab-btn">
          📱<br />Лента
        </Nav.Link>
        <Nav.Link className="tab-btn" disabled>
          📝<br />Добавление
        </Nav.Link>
        <Nav.Link as={NavLink} to="/grid" className="tab-btn">
          📊<br />Плитка
        </Nav.Link>
        <Nav.Link className="tab-btn" disabled>
          🔑<br />Вход
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
