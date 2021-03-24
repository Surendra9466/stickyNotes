import React, { useState } from "react";

export default function CreateTextArea({onAdd}) {
//   const [keyValue,setKeyValue] = useState(0);  
  const [data, setData] = useState({
        title: "",
    content: "",
  });

  function handleChange(event) {
    let { name, value } = event.target;

    setData((prev) => {
      //   console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  }
//   console.log(notes);
  function handleData(e) {
    if (data.title !== "" && data.content !== "") {

        onAdd(data);
    //   notes.push({ title: data.title, content: data.content });
     
      setData({
        title: "",
        content: "",
      });
    } else {
      alert("plzzz enter the notes");
    }
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={data.title}
          autoComplete="off"
        />
        <textarea
          placeholder="Take a note"
          onChange={handleChange}
          name="content"
          row="3"
          value={data.content}
        ></textarea>
        <button onClick={handleData}>Add</button>
      </form>
    </div>
  );
}
