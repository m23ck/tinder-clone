import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css";


function TinderCards() {
const [people, setPeople] = useState([
    {
        name: 'Jorja Smith',
        url: 'https://i.pinimg.com/564x/c4/12/f6/c412f64594dc9e06df0b2e80f7e9abc8.jpg',
    },
    {
        name: 'Robyn Fenty',
        url: 'https://images.totalbeauty.com/uploads/editorial/assets/rihanna_haircut-02.jpg',
    },
    {
        name: 'Pearl Crabs',
        url: 'https://i.pinimg.com/originals/0e/2a/c6/0e2ac6f6de868801a0b34c83c31e69c2.jpg',
    },
    {
        name: 'Patricia Star',
        url: 'https://i.pinimg.com/originals/68/35/ac/6835ace69efcbb8dc9ade5b3507a0d27.jpg',
    },
]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: "+ nameToDelete);
    // setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};


    return (
        <div className="tinderCards">
                <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard 
                className="swipe"
                key={person.name} 
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
                </div>
        </div>
    );
}

export default TinderCards;
