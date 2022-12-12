import Container from 'react-bootstrap/Container';
import Event from './components/EventComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
        <Event align='left' date='14/01/2022' title='Teste' subtitle='Sub Teste'></Event>
        <Event
            align='right'
            date='20/02/2022'
            title='Novo'
            subtitle='Outro Novo'
            img='https://www.nicepng.com/png/detail/132-1327829_icon-free-download-and-nature-icon.png'></Event>
        <Event align='left' date='14/01/2022' title='Teste' subtitle='Sub Teste'></Event>
        <Event align='right' date='20/02/2022' title='Novo' subtitle='Outro Novo'></Event>
        <Event
            align='left'
            date='14/01/2022'
            title='Teste'
            subtitle='Sub Teste'
            img='https://cdn-icons-png.flaticon.com/512/1355/1355083.png'></Event>
        <Event align='right' date='20/02/2022' title='Novo' subtitle='Outro Novo'></Event>
    </Container>
  );
}

export default App;
