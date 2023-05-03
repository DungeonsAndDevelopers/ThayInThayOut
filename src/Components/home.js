import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchAllSpellsBySchool } from '../AjaxHelpers/Spells'; 
import fetchAllSchools from '../AjaxHelpers/schools';

const BannerAd = () => {

    return (
        <div className='banner'>
            <img id="home-banner" src='/images/banner.jpg'></img>
        </div>
    );
}

const PopularSpells = (props) => {
    const [spells, setSpells] = useState([]);
   
    useEffect(() => {
        fetchAllSpellsBySchool(props.school, setSpells);
    }, []);
    return (
        <div id="popular-spells">
        <h2>Popular Spells</h2>
        {spells.map((spell => {
            return (
                <div key={spell.id} className='single-spell'>
                    <img src='https://picsum.photos/200'></img>
                    <p className='spell-name'>{spell.name}  <em>500gp</em></p>
                    <button>Add To Cart</button>
                </div>
            )
        })) }
        </div>
    );
};

const SpellSchools = () => {
    const navigate = useNavigate();
    const navigateToSpellsBySchool = (schoolName) =>{
        console.log(schoolName)
        navigate(`/spells/schools/${schoolName}`)
    }
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        fetchAllSchools(setSchools);
    }, []);
    return (
    <div id="spell-schools">
        <h2>Browse Spells By School</h2>
        {
            schools.map((school => {
                return (
                    <div key={school.id} className='spell-school pointer' onClick={()=>navigateToSpellsBySchool(school.name)}>
                        <img src={school.image}></img>
                        <p>{school.name}</p>
                    </div>
                )
            }))
        }
    </div>
    );
};

const Home = () => {
    return (
        <div>
            <BannerAd />
            <PopularSpells school = "Divination" />
            <SpellSchools />
        </div>
    );
};

export default Home;
