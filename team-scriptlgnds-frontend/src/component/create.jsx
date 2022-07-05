import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import "../stylesheets/Create.css";
import "../review.json"



function Create() {
    const [gameName, setGameName] = useState('')
    const [review, setReview] = useState('')
    const [gameReviewList, setGameList] = useState([])
    const [newReview, setNewReview] = useState("")


    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get/').then((response)=>{
            setGameList(response.data)
        });
    }, []);

    

    const submitReview = () =>{
        Axios.post("http://localhost:3001/api/insert",{
            gameName: gameName,
            gameReview: review,
        });
        
        setGameList([
            ...gameReviewList, 
                {gameName:gameName, gameReview: review},
            ]);
        };

        const deleteReveiw = (game) => {
            Axios.delete(`http://localhost:3001/apit/delete/${game}` );

        };
        const updateReveiw = (game) => {
            Axios.put("http://localhost:3001/api/update", {
                gameName:game, 
                gameReview: newReview,
            });
            setNewReview("")

        };

    return (
    <div className="create">
        <h1>Create Review </h1>
        <div className="form">
            <label>Game Name:</label>
            <input type="text" name="gameName" onChange={(e)=>{
                setGameName(e.target.value)
                console.log(setGameName)
            }} />
            <label>Review:</label>
            <input type="text" name="review" onChange={(e)=>{
                setReview(e.target.value)
                console.log(setReview)
            }} />

            <button onClick={submitReview}>Submit</button>

            {gameReviewList.map((val)=>{
                return(
                    <div className="resultcard">
            
                <h1> {val.gameName}</h1>
                <p>{val.gameReview}</p>
            

                <button onClick={() => {deleteReveiw(val.gameName)}}>Delete</button>
                <input type="text" id="updateInput" onChange={(e)=>{
                    setNewReview(e.target.value)
                }} />
                <button onClick={()=> {updateReveiw(val.gameName)}}>Update</button>
                </div>
                )
            })}

        </div>
    </div>
)}

export default Create
