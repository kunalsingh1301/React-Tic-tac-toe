import React, { useState } from "react";
import Square from "./Square"


 const Board = () =>{
    const [state,setstate] = useState(Array(9).fill(null));
    const [isXTurn,setisXturn] = useState(true);

    const checkWinner = () =>{
        const winnerlogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let logic of winnerlogic) {
            const[a,b,c] = logic;
            if(state[a]!=null && state[a] === state[b] && state[b] === state[c]){
                return state[a];
            }
        }
        return null;
    }

    const iswinner = checkWinner();

    const handleclick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn? "X":"O";
        setstate(copyState);
        setisXturn(!isXTurn)
    };

    return(

    <div className="board-container">
    
        {iswinner? (
        <>{iswinner} won
        <button onClick ={()=>{
            setstate(Array(9).fill(null))
            setisXturn(true)
        }}>Play again</button>
        </>
        ):(
        <>
        <div className="board-row">
            <Square onclick = {()=>{
                handleclick(0)
            }}  value ={state[0]}/>
            <Square onclick = {()=>{
                handleclick(1)
            }} value ={state[1]}/>
            <Square onclick = {()=>{
                handleclick(2)
            }}  value ={state[2]}/>
        </div>
        <div className="board-row">
            <Square onclick = {()=>{
                handleclick(3)
            }} 
            value ={state[3]}/>
            <Square onclick = {()=>{
                handleclick(4)
            }}  value ={state[4]}/>
            <Square onclick = {()=>{
                handleclick(5)
            }}  value ={state[5]}/>
        </div>
        <div className="board-row">
            <Square onclick = {()=>{
                handleclick(6)
            }}  value ={state[6]}/>
            <Square onclick = {()=>{
                handleclick(7)
            }}  value ={state[7]}/>
            <Square onclick = {()=>{
                handleclick(8)
            }}  value ={state[8]}/>
        </div>
        </>
    )}
    </div>   
    );
};

export default Board;