import React, { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
