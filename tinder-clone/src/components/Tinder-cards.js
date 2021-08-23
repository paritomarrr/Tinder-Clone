import React, {useState, useEffect} from 'react'
import './Tinder-cards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';

function Tindercards() {
    const [people, setPeople] = useState([
        {
            name: 'Henry Cavill',
            url: 'https://static.toiimg.com/thumb/msid-64982775,imgsize-55849,width-800,height-600,resizemode-75/64982775.jpg',
        }, {
            name: 'Taylor Zakhar Perez',
            url: 'https://data.ibtimes.sg/en/full/40515/taylor-zakhar-perez-knows-how-sing.png'
        }, {
            name: 'Louis Partridge',
            url: 'https://media.wonderlandmagazine.com/uploads/2020/09/1G2A0797-1.jpg'
        }, {
            name: 'Shah Rukh Khan',
            url: 'https://m.media-amazon.com/images/M/MV5BMDRmYTY2ZDMtNGEzNy00NDcxLWI4NGMtM2VkYjgyNTE0OTc1XkEyXkFqcGdeQXVyNzkwNTI1MTY@._V1_.jpg'
        }, {
            name: 'Ian Somerhalder',
            url: 'https://www.cheatsheet.com/wp-content/uploads/2021/06/Ian-Somerhalder.jpg'
        },

    ]);
    useEffect(() => {
        async function dataFetch () {
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }
        dataFetch()
    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }
    return (
        <div className="tinder-cards">
            <div className="tinderCard-container">

          
            {people.map((person) => (
                <div>
                    <TinderCard
                    className="swipe"
                    key={person.key}
                    preventSwipe= {["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                <div 
                className="card"
                style={{backgroundImage: `url(${person.url})`}}>
                    <h3>{person.name}</h3>

                </div>



                    </TinderCard>
                    
                </div>
            ))}
        </div>
        </div>
    )
}

export default Tindercards

