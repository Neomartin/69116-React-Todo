import { Button, Container, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import TodoList from "./components/todo-list/TodoList";


const TODO_LIST = [
  { id: 1, text: "Comprar comida para los gatos", completed: false },
  { id: 2, text: "Sacar la basura", completed: false },
  { id: 3, text: "Estudiar React", completed: false },
  { id: 4, text: "Hacer la cama", completed: false },
  { id: 5, text: "Llamar a mamá", completed: false },
]


export default function App() {

  return <>
            <Navbar expand="lg" className="bg-primary" >
              <Container fluid="lg">
                  <Nav>
                    <Nav.Link href="/">TODO List</Nav.Link>

                  </Nav>

              </Container>

            </Navbar>

            <section className="title-section">
              TODO List
            </section>
            
            <div className="input-section">

              <InputGroup className="my-3">

                <InputGroup.Text>📒</InputGroup.Text>
                <FormControl placeholder="Ingrese tarea" type="text" />

                <Button variant="primary"> + </Button>
              </InputGroup>

            </div>

            <section className="todo-container">

              {/* <ul className="todo-list">
                {
                  TODO_LIST.map((todo) => {
                      return <li key={todo.id}>
                        { todo.text }
                      </li>
                  })


                }
              </ul> */}


            </section>

            <TodoList todos={TODO_LIST} />


            {/* <h1>TODO List</h1>
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" onKeyUp={handleInputChange} />
            </div>
            <hr />
            <h2>Bievenido { username }</h2> */}

        </>
  

}
