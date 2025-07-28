import { useEffect, useState } from "react";

export default function App() {
    let [active, setActive] = useState(true);
    let [scores, setScores] = useState();
    let [gameState,setGameState] = useState(["", "", "", "", "", "", "", "", ""]);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns
        [0, 4, 8],
        [2, 4, 6], // diagonals
    ];
    const [status,setStatus]=useState('Player X\'s turn')

    function handleClick(event) {
            const index = Number(event.target.getAttribute("data-index"));

            if(gameState[index]!=='') return;

            setGameState(prev=>{
                const updated=[...prev];
                updated[index]=active ? "X" : "O"
                return updated
            });
            
            setActive((prev) => !prev);
            setStatus(`Player ${!active ? 'X' :'O'}'s turn`)
        
    }
    
    // function checkResult(){
    //     let gameWon=false;
    //     for(let i=0;i<winningConditions.length;i++){
    //         const[a,b,c]=winningConditions[i];
    //         if
    //     }

    // }

    return (
        <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-indigo-400 mb-2">
                    Tic Tac Toe
                </h1>

                <div className="bg-blue-200 rounded-lg shadow-md p-4 mb-6 text-center">
                    <p
                        id="status"
                        className="text-xl font-semibold text-gray-800"
                    >
                        {status}
                    </p>
                    <div className="flex justify-between mt-2">
                        <span className="text-lg">
                            <span className="font-bold text-indigo-600">
                                X:
                            </span>
                            <span id="score-x" className="ml-1">
                                0
                            </span>
                        </span>
                        <span className="text-lg">
                            <span className="font-bold text-pink-600">O:</span>
                            <span id="score-o" className="ml-1">
                                0
                            </span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                    {gameState.map((value, index) => (
                        <div
                            key={index}
                            className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                            data-index={index}
                            onClick={(event) => handleClick(event)}
                        >
                            {value}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        id="reset"
                        className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                        Reset Game
                    </button>
                    <button
                        id="new-game"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
}
