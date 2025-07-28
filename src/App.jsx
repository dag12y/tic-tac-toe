export default function App() {
    

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
                        Player X's turn
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
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="0"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="1"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="2"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="3"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="4"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="5"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="6"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="7"
                    ></div>
                    <div
                        className="cell h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-blue-200 transition"
                        data-index="8"
                    ></div>
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
