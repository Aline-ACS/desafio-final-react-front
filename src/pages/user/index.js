import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Title } from '../_layouts/styles';

import api from '../../services/api';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([]);

  async function handleStoreUser() {
    await api
      .post('/users', {
        name,
        email,
        phone,
        password,
      })
      .then((response) => {
        setUsers([...users, response.data.user]);
        alert('Usuário cadastrado com sucesso!');
      })
      .catch((error) => console.log('Erro ao cadastrar usuário', error));
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
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
        <Title>Cadastro de Usuários</Title>
        <br />
        <FormGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <Input
            type="text"
            value={phone}
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button onClick={(e) => handleStoreUser()}>Cadastrar Usuário</Button>

        <Link
          to="/login"
          style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}
        >
          <Button>Voltar</Button>
        </Link>
      </Form>
    </>
  );
};
