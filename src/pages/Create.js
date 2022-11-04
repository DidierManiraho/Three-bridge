import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../config/supabaseClient.";

const Create = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!title || !description || !categories){
            setFormError('Please fill tin all the fields correctly')
            return
        }
        const {data,error} = await supabase
            .from('notes')
            .insert([{title,description: description,categories: categories}])
            .select()

        if(error){
            console.log(error)
            setFormError('Please fill tin all the fields correctly')
        }
        if(data){
            console.log(data)
            setFormError(null)
            navigate('/')
        }
    }

  return (
      <div className="page update">
          <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="description">Description:</label>
              <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="categories">Categories:</label>
              <input
                  type="text"
                  id="categories"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
              />

              <button>Create new notes</button>

              {formError && <p className="error">{formError}</p>}
          </form>
      </div>
  )
}

export default Create