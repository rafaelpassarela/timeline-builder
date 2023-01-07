import {Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface IMainMenuProps {
}

interface IMainMenuState {
    isOpen: boolean;
}

class MainMenu extends Component<IMainMenuProps, IMainMenuState> {

    // const [isLoading, setLoading] = useState(false);

    // const handleClick = () => setLoading(true);

    constructor(props: IMainMenuProps) {
        super(props);
        this.state = {
          isOpen: false
        };
    }

    private someHandler() {
        // I just want to turn on the flag. but compiler error occurs.
        this.setState({...this.state, isOpen: true});
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">TimeLine Builder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <Form className="d-flex">
                        <Button
                            variant="outline-light">
                            {/* onClick={!isLoading ? handleClick : null}>  */}
                            Create / Edit
                        </Button>
                        <Button variant="outline-light" style={{marginLeft: "10px"}} >Export</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}

export default MainMenu;