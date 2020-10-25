import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import SimpleModal from './modal';

import api from '../../services/api';

const Cards = () => {
  const [cards, setCards] = useState([]);

  const uid = localStorage.getItem('userUid');

  async function handleDeleteCard(uid) {
    await api
      .delete(`/cards/${uid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
        },
      })
      .then((response) => {
        setCards(cards.filter((card) => card.uid !== uid));
      })
      .catch((error) => console.log('Erro ao deletar nota'));
  }

  useEffect(() => {
    api
      .get(`/cards/user/${uid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
        },
      })
      .then((response) => {
        setCards(response.data.cards);
      })
      .catch((error) => alert('Erro ao buscar notas inseridas.'));
  }, []);

  return (
    <>
      <Table style={{ width: 'auto', margin: 'auto', paddingTop: '50px' }}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Conteúdo</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Excluir Nota?</th>
            <th>Editar Nota?</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <React.Fragment key={card.uid}>
              <tr>
                <th scope="row">{card.title}</th>
                <td>{card.date}</td>
                <td>{card.hour}</td>
                <td>{card.content}</td>
                <td>
                  <span>
                    <Button
                      variant="contained"
                      style={{
                        width: 'auto',
                        fontSize: '12px',
                        height: '25px',
                        textAlign: 'center',
                      }}
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={(e) => handleDeleteCard(card.uid)}
                    >
                      Excluir
                    </Button>
                  </span>
                </td>
                <td>
                  <span>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        width: 'auto',
                        height: '25px',
                        textAlign: 'center',
                      }}
                    >
                      <SimpleModal />
                    </Button>
                  </span>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cards;
