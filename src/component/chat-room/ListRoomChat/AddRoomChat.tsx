import { collection, doc, setDoc } from "@firebase/firestore";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { db } from "../../../config/FirebaseConfig";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";

interface Props {
  onHide: () => void;
  show: Boolean;
  setData: (param: any[]) => void;
}

const AddRoomChat = ({ setData, ...props }: Props) => {
  const user = useAppSelector(selectUser);
  const { uid } = user;
  const [addRoom, setAddRoom] = useState({
    name: "",
    description: "",
  });

  const handleChange = (
    event: ChangeEvent<{ name: string; value: string }>
  ) => {
    setAddRoom({
      ...addRoom,
      [event.target.name]: event.target.value,
    });
  };
  const handleOk = async (e: MouseEvent) => {
    e.preventDefault();
    const newRoomRef = doc(collection(db, "rooms"));
    await setDoc(newRoomRef, {
      name: addRoom.name,
      description: addRoom.description,
      members: [uid],
    });

    props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tạo phòng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên phòng</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Nhập tên phòng"
              value={addRoom.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Nhập mô tả"
              rows={3}
              value={addRoom.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOk}>
          Ok
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRoomChat;
