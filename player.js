class PacMan {
    constructor() {
        this.stage = [0];
        this.stageBites = [0];

        // パックマンの初期位置、現在どの座標にいるのかを記憶するためにも使用する
        this.p_i = 1;
        this.p_j = 1;

        this.command = '';
        this.setCommand();

        this.hasPowerCokkie = false;
    }

    setStage(stage, stageBites) { 
        let tmp = stage;
        tmp[this.p_i][this.p_j] = 2;
        this.stage = tmp;

        this.stageBites = stageBites;
    }

    isPowerPacMan() {
        if (this.hasPowerCokkie === true) return true;
        else return false;
    }

    // プレイヤー文字を動かすメソッド。
    move() {
        // 移動しようとしているところが行き止まりでないか事前にチェックをしている
        if(this.command === 'left' && this.stage[this.p_i][this.p_j-1] !== BLOCK) {
            this.stage[this.p_i][this.p_j] = NONE;  
            this.stage[this.p_i][this.p_j-1] = PLAYER;
            this.p_i = this.p_i;
            this.p_j = this.p_j-1;
        } else if(this.command === 'right' && this.stage[this.p_i][this.p_j+1] !== BLOCK) {
            this.stage[this.p_i][this.p_j] = NONE;
            this.stage[this.p_i][this.p_j+1] = PLAYER;
            this.p_i = this.p_i;
            this.p_j = this.p_j+1;
        } else if(this.command === 'up' && this.stage[this.p_i-1][this.p_j] !== BLOCK) {
            this.stage[this.p_i][this.p_j] = NONE;
            this.stage[this.p_i-1][this.p_j] = PLAYER;
            this.p_i = this.p_i-1;
            this.p_j = this.p_j;
        } else if(this.command === 'down' && this.stage[this.p_i+1][this.p_j] !== BLOCK) {
            this.stage[this.p_i][this.p_j] = NONE;
            this.stage[this.p_i+1][this.p_j] = PLAYER;
            this.p_i = this.p_i+1;
            this.p_j = this.p_j;
        } else {
            this.stage[this.p_i][this.p_j] = 2;
        }

        // エサをゲットする
        if (this.stageBites[this.p_i][this.p_j] === BITE) {
            this.stageBites[this.p_i][this.p_j] = NONE;
            sound.play();
        } else if (this.stageBites[this.p_i][this.p_j] === POWER_COKKIE) {
            this.stageBites[this.p_i][this.p_j] = NONE;
            this.hasPowerCokkie = true;
        }
        return [this.p_i, this.p_j, PLAYER];
    }

    setCommand(command) { this.command = command; }

    // moveCheck(command)
}