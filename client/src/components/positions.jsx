export function positions() {
    let elChar = document.getElementById('character');
    let elEnem = document.getElementById('enemy');
    let enemyRect = elEnem.getBoundingClientRect();
    let characterRect = elChar.getBoundingClientRect();

    let charTop = characterRect.top;
    let charBottom = characterRect.bottom;
    let charRight = characterRect.right;
    let charLeft = characterRect.left;
    let enemTop = enemyRect.top;
    let enemBottom = enemyRect.bottom;
    let enemRight = enemyRect.right;
    let enemLeft = enemyRect.left;

    let charAvgY = (charTop + charBottom) / 2;
    let charAvgX = (charLeft + charRight) / 2;
    let enAvgY = (enemTop + enemBottom) / 2;
    let enAvgX = (enemLeft + enemRight) / 2;

    let changeY = charAvgY - enAvgY;
    let changeX = charAvgX - enAvgX;
    let sum = Math.pow(changeX, 2) + Math.pow(changeY, 2)
    let distance = Math.sqrt(sum);

    return [
        charTop,
        charBottom,
        charLeft,
        charRight,
        enemTop,
        enemBottom,
        enemLeft,
        enemRight,
        changeX,
        changeY,
        distance,
    ];

};

export function bladeToEnemy() {
    let blade = document.getElementById('character-blade');
    let enemy = document.getElementById('enemy');
    let bladeRect = blade.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();

    let bladeTop = bladeRect.top;
    let bladeBottom = bladeRect.bottom;
    let bladeRight = bladeRect.right;
    let bladeLeft = bladeRect.left;

    let enemyTop = enemyRect.top;
    let enemyBottom = enemyRect.bottom;
    let enemyRight = enemyRect.right;
    let enemyLeft = enemyRect.left;

    let bladeAvgY = (bladeTop + bladeBottom) / 2;
    let bladeAvgX = (bladeLeft + bladeRight) / 2;
    let enemyAvgY = (enemyTop + enemyBottom) / 2;
    let enemyAvgX = (enemyLeft + enemyRight) / 2;

    let changeY = bladeAvgY - enemyAvgY;
    let changeX = bladeAvgX - enemyAvgX;
    let sum = Math.pow(changeX, 2) + Math.pow(changeY, 2);
    let distance = Math.sqrt(sum);

    return [
        distance,
        bladeTop,
        bladeBottom,
        bladeRight,
        bladeLeft,
        enemyTop,
        enemyBottom,
        enemyRight,
        enemyLeft,
    ];
}

export function charCoords() {
    let elChar = document.getElementById('character');
    let characterRect = elChar.getBoundingClientRect();
    let charTop = characterRect.top;
    let charBottom = characterRect.bottom;
    let charRight = characterRect.right;
    let charLeft = characterRect.left;
    let charAvgY = (charTop + charBottom) / 2;
    let charAvgX = (charLeft + charRight) / 2;

    let charCoords = [charAvgX, charAvgY];
    return [charCoords, charTop, charBottom, charRight, charLeft];
}

export function arenaCoords() {
    let elArena = document.getElementById('arena');
    let arenaRect = elArena.getBoundingClientRect();
    let { top, bottom, right, left } = arenaRect;

    return [top, bottom, right, left];
}

export function character_position_arena() {
    let arenaCoords = this.arenaCoords();
    let arenaTop = arenaCoords[0];
    let arenaBottom = arenaCoords[1];
    let arenaRight = arenaCoords[2];
    let arenaLeft = arenaCoords[3];

    let characterCoords = this.charCoords();
    let charX = characterCoords[0][0];
    let charY = characterCoords[0][1];
    let charTop = characterCoords[1];
    let charBottom = characterCoords[2];
    let charRight = characterCoords[3];
    let charLeft = characterCoords[4];
    /////////////////TOP///////////////////////////
    let chngTop = charTop - arenaTop;
    let topSum = Math.pow(chngTop, 2);
    let distanceTop = Math.sqrt(topSum);
    //////////////////BOTTOM//////////////////////////
    let chngBtm = charBottom - arenaBottom;
    let btmSum = Math.pow(chngBtm, 2);
    let distanceBtm = Math.sqrt(btmSum);
    //////////////////RIGHT//////////////////////////
    let chngR = charRight - arenaRight;
    let rSum = Math.pow(chngR, 2);
    let distanceR = Math.sqrt(rSum);
    //////////////////LEFT//////////////////////////
    let chngL = charLeft - arenaLeft;
    let lSum = Math.pow(chngL, 2);
    let distanceL = Math.sqrt(lSum);

    return [distanceTop, distanceBtm, distanceR, distanceL]
}