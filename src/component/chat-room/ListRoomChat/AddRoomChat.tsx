import React from "react";
// import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

// interface NewRoom {
//   name: string;
//   description: string;
// }

interface Props {
  onHide: () => void;
  show: Boolean;
}

const AddRoomChat = (
  /* { name, description }: NewRoom */ { ...props }: Props
) => {
  // const dispatch = useDispatch();

  // const handleOk = () => {
  //   const newRoom = {
  //     name: name,
  //     description: description,
  //   };
  //   const action = addNewRoomList(newRoom);
  //   dispatch(action);
  // };

  // const handleCancel = () => {
  //   //reset form value
  // };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tạo phòng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên phòng</Form.Label>
            <Form.Control type="name" placeholder="Nhập tên phòng" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Nhập mô tả"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Ok</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRoomChat;
