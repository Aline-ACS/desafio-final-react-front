import React, { useState } from 'react';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Title } from '../_layouts/styles';
import api from '../../services/api';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const user_uid = localStorage.getItem('userUid');

  const [notes, setNotes] = useState([]);

  async function handleStoreNote() {
    if (!title || !content || !date || !hour) {
      alert('Preencha todos os campos!');
    } else {
      await api
        .post(
          '/cards',
          {
            title,
            content,
            date,
            hour,
            user_uid,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
            },
          }
        )
        .then((response) => {
          setNotes([...notes, response.data.created]);
          alert('Nota cadastrada com sucesso!');
        })
        .catch((error) => alert('Erro ao inserir nota', error));

      setTitle('');
      setContent('');
      setDate('');
      setHour('');
    }
  }

  return (
    <>
      <Form
        style={{
          width: '600px',
          margin: 'auto',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <Title>Cadastro de Notas</Title>
        <br />
        <FormGroup row>
          <Label sm={2}>Título</Label>
          <Col sm={10}>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Data</Label>
          <Col sm={10}>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Hora</Label>
          <Col sm={10}>
            <Input
              type="time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Conteúdo</Label>
          <Col sm={10}>
            <Input
              type="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              onClick={handleStoreNote}
              startIcon={<LibraryAddIcon />}
              style={{
                backgroundColor: '#ff3d00',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Inserir
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};
