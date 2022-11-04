import {useParams,useNavigate} from "react-router-dom";
import React, {useEffect,useState} from "react";
import supabase from "../config/supabaseClient.";

const Update = () => {
    const {id}= useParams();
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!title || !description || !categories){
            setFormError('Please fill tin all the fields correctly')
            return
        }

        const {data,error} = await supabase
            .from('notes')
            .update({title,description,categories})
            .eq('id',id)
            .select()
        if(error){
            setFormError('Please fill tin all the fields correctly')
        }
        if(data){
            setFormError(null)
            navigate('/')
        }
    }

    useEffect(()=>{
        const fetchNotes = async ()=>{
            const {data,error}  =  await supabase
                .from('notes')
                .select()
                .eq('id',id)
                .single()

            if(error){
                navigate('/',{replace:true})
            }
            if(data){
                setTitle(data.title)
                setDescription(data.description)
                setCategories(data.categories)
            }
            console.log(data)
        }

        fetchNotes();
    },[id,navigate])
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

                <label htmlFor="method">Description:</label>
                <textarea
                    id="method"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="rating">Categories:</label>
                <input
                    type="text"
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                />

                <button>Update Note</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default Update