import React, { useState, useEffect } from 'react';

import { FormGroup, Label, Input } from 'reactstrap';

import { Button } from '../_layouts/styles';

import api from '../../services/api';

const UserUpdate = () => {
  const oldPassword = localStorage.getItem('userPassword');
  const uid = localStorage.getItem('userUid');

  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${uid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => console.log('Erro ao buscar usuário.', error));
  }, []);

  const { email } = user;
  const setEmail = useState(email);

  const setOldPassword = useState(oldPassword);
  const [password, setPassword] = useState('');

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  const [userUpdate, setUserUpdate] = useState();

  async function handleUpdateUser() {
    await api
      .put(
        `/users/${uid}`,
        { uid, name, phone, email, password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
          },
        }
      )
      .then((response) => {
        setUserUpdate([userUpdate, response.data.user]);
        console.log('USUARIO ATUALIZADO', response.data.user);
        alert('Dados atualizados com sucesso!');
      })
      .catch((error) => console.log('Erro ao atualizar usuário', error));
  }

  return (
    <>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          value={user.name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Telefone</Label>
        <Input
          type="text"
          value={user.phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />
      </FormGroup>

      <FormGroup>
        <Label>Senha atual</Label>
        <Input
          type="text"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          disabled
        />
      </FormGroup>

      <FormGroup>
        <Label>Nova senha</Label>
        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button onClick={handleUpdateUser}>Atualizar cadastro</Button>
    </>
  );
};

export default UserUpdate;
