/**
 * @param {number[][]} dungeon
 * @return {number}
 */

// 会超时，无法记忆化
var singleStep = function(value, dungeon, x, y, surplus) {
    let maxlenX = dungeon.length - 1;
    let maxlenY = dungeon[0].length - 1;
    let curValue;

    if (dungeon[x][y] > 0) {
        surplus += dungeon[x][y];
        curValue = value;
    } else {
        let adjustVal = surplus + dungeon[x][y];
        surplus = adjustVal > 0 ? adjustVal : 0;
        if (adjustVal > 0) {
            curValue = value;
        } else {
            curValue = (adjustVal + value * -1) * -1;
        }
    }
    if (dungeon[x][y] > 0 && curValue < value) {
        curValue = value;
    }

    if (x == maxlenX && y == maxlenY) {
        return curValue;
    }
    if (x == maxlenX) {
        return singleStep(curValue, dungeon, x, y + 1, surplus);
    }
    if (y == maxlenY) {
        return singleStep(curValue, dungeon, x + 1, y, surplus);
    }
    return Math.min(
        singleStep(curValue, dungeon, x + 1, y, surplus),
        singleStep(curValue, dungeon, x, y + 1, surplus)
    );
};

var calculateMinimumHP = function(dungeon) {
    return singleStep(1, dungeon, 0, 0, 0);
};
