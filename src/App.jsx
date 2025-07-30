import { useEffect, useState } from "react";

export default function App() {
    // state variables
    let [active, setActive] = useState(true);
    let [isGame, setIsGame] = useState(true);
    let [scores, setScores] = useState({ X: 0, O: 0 });
    let [gameState, setGameState] = useState(Array(9).fill(""));
    const [status, setStatus] = useState("Player X's turn");

    // static variables
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // functions
    function handleClick(index) {
        if (gameState[index] !== "" || !isGame) return;

        const currentPlayer = active ? "X" : "O";

        setGameState((prev) => {
            const updated = [...prev];
            updated[index] = currentPlayer;
            return updated;
        });
        setActive((prev) => !prev);
    }

    function checkResult() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (
                gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[b] === gameState[c]
            ) {
                const winner = gameState[a];
                setStatus(`Player ${winner} Won`);
                setIsGame(false);
                setScores((prev) => ({
                    ...prev,
                    [winner]: prev[winner] + 1,
                }));
                return;
            }
        }

        if (!gameState.includes("")) {
            setStatus("It's a draw!");
            setIsGame(false);
            return;
        }

        setStatus(`Player ${active ? "O" : "X"}'s turn`);
    }

    //checking the gamestata with every change made upon it.
    useEffect(() => {
        checkResult();
    }, [gameState]);

    function resetGame() {
        setGameState(Array(9).fill(""));
        setActive(true);
        setIsGame(true);
        setStatus("Player X's turn");
    }

    function newGame() {
        resetGame();
        setScores({ X: 0, O: 0 });
    }

    return (
        <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-indigo-400 mb-2">
                    Tic Tac Toe
                </h1>

                <div className="bg-blue-200 rounded-lg shadow-md p-4 mb-6 text-center">
                    <p className="text-xl font-semibold text-gray-800">
                        {status}
                    </p>
                    <div className="flex justify-between mt-2">
                        <span className="text-lg">
                            <span className="font-bold text-indigo-600">
                                X:
                            </span>
                            <span className="ml-1">{scores.X}</span>
                        </span>
                        <span className="text-lg">
                            <span className="font-bold text-pink-600">O:</span>
                            <span className="ml-1">{scores.O}</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                    {gameState.map((value, index) => (
                        <div
                            key={index}
                            className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                            onClick={() => handleClick(index)}
                        >
                            {value}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={resetGame}
                        className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                        Reset Game
                    </button>
                    <button
                        onClick={newGame}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
}
