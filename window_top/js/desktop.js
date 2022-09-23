window.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.querySelector('audio');
    
    $('.start-page-btn').on('click', () => {
        $('.start-page').fadeOut(1000);
        $('.load-page').fadeIn(1000);
        setTimeout(() => {
            audioElement.play();
        }, 1000);
        setTimeout(() => {
            $('.load-page').fadeOut(2000);
        }, 8000)
    });


    const explan = document.querySelector('#js-explanation');
    const select = document.querySelector('#js-select');

    explan.addEventListener('mouseout', function() {
        explan.innerHTML = 'Explanation';
    });

    select.addEventListener('mouseout', function() {
        select.innerHTML = 'Select';
    });

    explan.addEventListener('mouseover', function() {
        explan.innerHTML = '各ゲームの説明を見ることができます';
    });

    select.addEventListener('mouseover', function() {
        select.innerHTML = 'ゲームを選択してください';
    });
    
    const tetorisExplan = document.querySelector('.tutorial-game-explan-Tetoris-area');
    const snakegameExplan = document.querySelector('.tutorial-game-explan-SnakeGame-area');
    const minesweeperExplan = document.querySelector('.tutorial-game-explan-Minesweeper-area');

    $('.tutorial-tetoris').on('click', () => {
        if(tetorisExplan.style.display === 'none') {
            tetorisExplan.style.display = 'block';    
            snakegameExplan.style.display = 'none';
            minesweeperExplan.style.display = 'none';
        } else {
            tetorisExplan.style.display = 'none';
        }
    });

    $('.tutorial-snakegame').on('click', () => {
        if(snakegameExplan.style.display === 'none') {
            tetorisExplan.style.display = 'none';
            minesweeperExplan.style.display = 'none';
            snakegameExplan.style.display = 'block';    
        } else {
            snakegameExplan.style.display = 'none';
        }
    });

    $('.tutorial-minesweeper').on('click', () => {
        if(minesweeperExplan.style.display === 'none') {
            tetorisExplan.style.display = 'none';
            snakegameExplan.style.display = 'none';
            minesweeperExplan.style.display = 'block';    
        } else {
            minesweeperExplan.style.display = 'none';
        }
    });

    $('.select-btn').on('click', () => {
        let game = document.querySelector('select');
        let selectNum = game.selectedIndex;
        
        if (selectNum === 0) {
            document.location.href='../games/script-game-tetoris_v2/tetoris.html';
        } else if (selectNum === 1) {
            window.location.href = '../games/script-game-snakegame/snakegame.html';
        } else if (selectNum === 2) {
            window.location.href = '../games/script-game-minesweeper/minesweeper.html';
        } else {
            alert('予期しなかったエラーが発生しました。');
        }
    });

    
});