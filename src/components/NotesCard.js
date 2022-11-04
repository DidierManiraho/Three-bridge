import {Link} from "react-router-dom";
import supabase from "../config/supabaseClient.";

const NotesCard=({notes,onDelete}) => {

    const handleDelete = async ()=>{
        const {data,error} = await supabase
            .from('notes')
            .delete()
            .eq('id',notes.id)
            .select()

        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
            onDelete(notes.id)
        }

    }
    return(
        <div className="note-card">
            <h3>{notes.title}</h3>
            <p>{notes.description}</p>
            <div className="rating">{notes.categories}</div>
            <div className="buttons">
                <Link to={'/' + notes.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}

export default NotesCard;