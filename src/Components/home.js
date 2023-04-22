import React, { useState } from 'react' 

const BannerAd = () => {
    return (
        <h1>Banner Image Goes Here</h1>
    );
}

const PopularSpells = () => {
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
