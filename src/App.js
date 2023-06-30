//Modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faker } from "@faker-js/faker";

//Styles
import './index.css';

//Pages
import Catalogue from './Catalogue';

//Amount of Cats to Generate
let cats = 20

const App = () => {
    const [allCats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    const pseudonym = () => {
        let toReturn = []
        
        for (var y=0; y<cats; y++) {
            const name = faker.person.firstName();
            const price = faker.commerce.price({10: 300})
            toReturn.push({name, price})
        }
        
        return toReturn
    }

    const addCat = (cat) => {
        setCats([...allCats, cat])
    }

    useEffect(() => {
        const fetchData = async () => {
            let fakeData = pseudonym()

            const response = await fetch('https://api.thecatapi.com/v1/breeds?api_key=live_36YCVvtWLLRHnvIlukYriDViCmLQm3o1BDnol9yYJE6SfQXjiBNfsdOJKkfkXylP');
            const data = await response.json();

            fakeData.map(async (cat, i) => {
                cat["image"] = data[i]["image"].url;
                cat["breed"] = data[i].name;
                console.log(data)
            })

            setCats(fakeData)
        }
        fetchData()
        setLoading(false)
    }, []);

    if (loading) {
        return null;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalogue cats={allCats}/>} />
            </Routes>
        </Router>
    )
}
export default App