import React from 'react';

const AboutUs = () => {

    return(
        <div className='aboutus'>
            <h2>About Us</h2>
            <p>Three weeks ago four friends set out on an adventure to find a powerful artifact thought long lost - the Staff of Thay, 
                a legendary item with the ability to transport spells to adventurers across the land (and, indeed, across planes) quickly and conveniently.
                This is their journey.
            </p>
            <div className='portrait'>
                <img src='/images/zach.png' alt="painting of a gnome bard" />
                <p><strong>Zachary Bordelon</strong></p>
                <p>Level 6 Gnome Bard</p>
            </div>
            <div className='portrait'>
                <img src='/images/justin.png' alt='painting of an elf druid' />
                <p><strong>Justin Keowen</strong></p>
                <p>Level 6 Circle of Spores Druid</p>
            </div>
            <div className='portrait'>
                <img src='/images/tai.png' alt='painting of a human wizard' />
                <p><strong>Tai Truong</strong></p>
                <p>Level 6 Human School of Illusion Wizard</p>
            </div>
            <div className='portrait'>
                <img src='/images/sarah.png' alt='painting of a dwarf ranger' />
                <p><strong>Sarah Uhl</strong></p>
                <p>Level 6 Dwarf Beast Master Ranger</p>
            </div>
        </div>
    )
}

export default AboutUs;