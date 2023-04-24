import React, { useEffect, useState } from 'react';
import banner from '../../images/banner.jpg';

const BannerAd = () => {
    return (
        <div className='banner'>
            <img id="home-banner" src={banner}></img>
        </div>
    );
}

const PopularSpells = () => {
    // const getPopularSpells = async (school) => {
    //     try {
    //         const result = await getSpellsBySchool(school);
    //         console.log(result);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // useEffect(() => {
    //     getPopularSpells("Divination");
    // }, []);
    return (
        <h1>Popular Spells Go Here</h1>
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
            <PopularSpells />
            <SpellSchools />
        </div>
    );
};

export default Home;
