import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Event from './EventComponent';
import Title from './TitleComponent';

interface EventPanelProps {

}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum like abc abc.";

class EventPanel extends Component<EventPanelProps> {

    render() {
        return (
            <div>
                <Title title='TimeLine Test' subtitle='Just a timeline builder teste component'></Title>
                <Container className='base-line' fluid>
                    <Event align='left' date='14/01/2022' title='Teste' subtitle='Sub Teste'></Event>
                    <Event
                        align='right'
                        date='20/02/2022'
                        title='Novo'
                        subtitle={lorem}
                        img='https://i.pinimg.com/474x/1a/00/cb/1a00cb023f90b759483168335c4246d6.jpg'></Event>
                    <Event align='left' date='14/01/2022' title='Teste' subtitle='Sub Teste'></Event>
                    <Event align='right' date='20/02/2022' title='Novo' subtitle='Outro Novo'></Event>
                    <Event
                        align='left'
                        date='14/01/2022'
                        title='Teste'
                        subtitle={lorem + ' a b c d e f g h i j k.'}
                        img='https://cdn-icons-png.flaticon.com/512/1355/1355083.png'></Event>
                    <Event align='right' date='20/02/2022' title='Novo' subtitle='Outro Novo'></Event>
                </Container>
            </div>
        );
    }

}

export default EventPanel;