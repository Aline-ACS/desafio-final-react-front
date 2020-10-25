import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import Button from '@material-ui/core/Button';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 400,
    backgroundColor: '#ff3d00',
    borderRadius: '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <>
        <Form
          style={{
            width: 'auto',
            margin: 'auto',
            padding: 'auto',
          }}
        >
          <h3
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Cadastro de Notas
          </h3>
          <br />
          <FormGroup row>
            <Label
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}
            >
              Título
            </Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup row>
            <Col>
              <Label
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                Data
              </Label>
              <Input type="date" />
            </Col>

            <Col>
              <Label
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                Hora
              </Label>
              <Input type="time" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}
            >
              Conteúdo
            </Label>
            <Input type="textarea" />
          </FormGroup>

          <FormGroup>
            <Button
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#ff3d00',
              }}
              size="small"
              variant="contained"
            >
              Salvar alterações
            </Button>
          </FormGroup>
        </Form>
      </>
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: '#fff',
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0px',
          fontSize: '12px',
        }}
        startIcon={<PublishRoundedIcon />}
      >
        Editar
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
