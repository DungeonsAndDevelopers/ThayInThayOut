import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.jpg';
import { fetchAllSpellsBySchool } from '../AjaxHelpers/Spells'; 

const BannerAd = () => {
    return (
        <div className='banner'>
            <img id="home-banner" src={banner}></img>
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
                <div className='single-spell'>
                    <img src='https://picsum.photos/200'></img>
                    <p className='spell-name'>{spell.name}</p>
                    <p className='spell-price'>500gp</p>
                </div>
            )
        })) }
        </div>
    );
};

const SpellSchools = () => {
    return (
        <h1>Spell Schools Go Here</h1>
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
