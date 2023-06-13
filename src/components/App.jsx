import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

// -------------------------------------------------------------------
  const [input, setInput] = useState({title:"", content : ""});

  function handleChange(event){

    const name = event.target.name;
    const value = event.target.value;

    setInput((prevItems)=>{

      if(name === "title"){return {title : value, content : prevItems.content}}
      else if(name ==="content") {return {title : prevItems.title , content : value}}

    })}
  
// -------------------------------------------------------------------
  
const[noteItems,setNoteItems] = useState([]);

function addToNotes(event){
  event.preventDefault();
setNoteItems((prevItems)=>{
  return [...prevItems , input]
}); 
setInput({title : "", content : ""})
}

// -------------------------------------------------------------------


function deleteNotes(id){

  setNoteItems((prevItems)=>{
    return prevItems.filter((value,index)=>{
        return index !== id;
      })
  })

  // return noteItems.filter((value,index)=>{
  //   return index !== id;
  // })

}



// -------------------------------------------------------------------

  return (
    <div>
      <Header />

      <CreateArea 
      handleChange ={handleChange}
      addToNotes = {addToNotes}
      value = {input} />

{noteItems.map((value, index) => (

            <Note
              key={index}
              id={index}
              value={value}
              deleteNotes={deleteNotes}
            />
          ))}

      <Footer />
    </div>
  );
}

export default App;
