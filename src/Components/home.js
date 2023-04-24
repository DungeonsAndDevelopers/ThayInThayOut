import React, { useState } from 'react';

const BannerAd = () => {
    return (
        <div id='banner'>
            <img src='https://cdn.discordapp.com/attachments/1095734190189838457/1099390527654334566/bannder.png'></img>
        </div>
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
