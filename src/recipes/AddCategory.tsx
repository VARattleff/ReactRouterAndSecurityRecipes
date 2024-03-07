import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {addCategory} from "../services/apiFacade.ts";

export function AddCategory() {
    const categoryRef = useRef("");
    const navigate = useNavigate();

    async function submitNewCategory() {
        const name = categoryRef.current?.value;
        try {
            await addCategory(name);
            alert("Category added successfully");
            navigate("/categories");
            //@ts-ignore
            categoryRef.current.value = "";
        } catch (error) {
            console.log("Present the error to the user: ", error);
        }
    }

    return (
        <>
            <h2>Add Category</h2>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={categoryRef}/>
            <button className={""} onClick={submitNewCategory}>
                Add
            </button>
        </>
    );
}