import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import * as userActions from '../../store/user/actions';
import api from '../../services/api';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    try {
      const response = await api.post('/login', { email, password });

      if (response.data.token) {
        dispatch(userActions.login(response.data.token));
        localStorage.setItem('tokenAuth', response.data.token);
      }
      localStorage.setItem('userUid', response.data.user.uid);
      localStorage.setItem('userPassword', response.data.user.password);
    } catch (error) {
      alert('Erro ao tentar logar');
    }
  }

  return (
    <Form style={{ width: '400px', margin: 'auto', paddingTop: '80px' }}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">
          Email
        </Label>
        <Input
          type="email"
          value={email}
          id="exampleEmail"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">
          Senha
        </Label>
        <Input
          type="password"
          value={password}
          id="examplePassword"
          placeholder="don't tell!"
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '15px' }}
        />
      </FormGroup>

      <Button
        onClick={() => handleLogin()}
        style={{
          backgroundColor: '#ff3d00',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Login
      </Button>
      <Link
        to="/cadastro"
        style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}
      >
        <Button
          style={{
            backgroundColor: '#ff3d00',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Criar conta
        </Button>
      </Link>
    </Form>
  );
};
