import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ButtonToggle} from 'reactstrap';
import axios from "axios";

const ModalExample = (props) => {
  const {
    className
  } = props;
  
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Button color="danger" onClick={toggle}>Написать отзыв</Button>
      <Modal isOpen={modal} modalTransition={{timeout: 1300}} backdropTransition={{timeout: 1300}}
             toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><em>Отзывы отдыхающих:</em></ModalHeader>
        <ModalBody>
          <Form action="" method="POST">
            
            <FormGroup>
              <Label for="exampleName">Имя</Label>
              <Input modal={modal} onChange={e => setModal(e.target.value)} type="name" name="name" id="exampleName"/>
              {modal}
            </FormGroup>
            
            <FormGroup>
              <Label for="exampleText">Написать отзыв</Label>
              <Input modal={modal1} onChange={e => setModal1(e.target.value)} type="textarea" name="text"
                     id="exampleText"/>
            </FormGroup>
            
            <ButtonToggle
              color="primary"
              disabled={modal.length === 0}
              type="button"
              onClick={async () => {
                console.log(modal);
                try {
                  await axios({
                    url: `https://api.telegram.org/bot1124644872:AAFSMRcNOxQLaPPF_T4ln-Zk41O_qnUKotA/sendMessage?chat_id=@hotelreviews&text=Привет, я ${modal}. Пишу отзыв: ${modal1}`,
                    headers: {
                      "Content-type": "application/json"
                    },
                    params: {
                      field: modal, modal1
                    },
                    method: "GET",
                    data: null
                  }).then(({data}) => {
                    return data;
                  });
                } catch (e) {
                  console.log("Sending error", e);
                }
              }}
            >
              <em>Отправить отзыв</em>
            </ButtonToggle>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;