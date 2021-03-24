//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";
// import notes from "./notes";
import CreateTextArea from "./components/CreateTextArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // notes.push(note);
    console.log(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return(
        prevNotes.filter((note,index)=>{
            return id!==index;
        })
      )
    })
  }

  console.log(notes);
  return (
    <div>
      <Header />
      <CreateTextArea onAdd={addNote} />
      {notes.map((notesItem, index) => {
        return <Note key={index} id={index} title={notesItem.title} onDelete={deleteNote} content={notesItem.content} />;
      })}
      <Footer />
    </div>
  );
}
