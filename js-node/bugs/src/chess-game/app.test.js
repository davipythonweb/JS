const { ChessGame } = require("./chessGame");
const { Player } = require("./player");

let chessGame;
beforeEach(function () {
    chessGame = new ChessGame();
    player1 = new Player('João', 'white');
    player2 = new Player('Larissa', 'black');
    chessGame.startGame();
})

test('Deve iniciar o jogo com o estado corredo do tabuleiro', function() {
    // Verificar se o tabuleiro foi iniciado corretamente
    const initialBoardState = chessGame.getBoardState();
    expect(initialBoardState).toBe(64);
})