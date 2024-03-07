import  { useState } from 'react';
import { addCategory } from '../services/apiFacade';

export default function AddCategories() {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (event:any) => {
        setCategory(event.target.value);
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        try {
            console.log(category);
            await addCategory(category);
        } catch (error) {
            throw new Error('Error adding category');
        }
    };

    return (
        <div>
            <h1>Tilføj Kategori</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Kategori:
                    <input type="text" value={category} onChange={handleCategoryChange} />
                </label>
                <button type="submit">Tilføj</button>
            </form>
        </div>
    );
}
