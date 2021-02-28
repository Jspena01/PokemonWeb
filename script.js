
const player1 = document.getElementById("player-1");
const enemy1 = document.getElementById("enemy-1");
const screen = document.getElementById("screen");
const timer = document.getElementById("time");
const score = document.getElementById("score");
let scorePoint = 0;
class jugador{
    constructor(player){
        this.player = player;
        this.top = 0;
        this.left = 0;
        this.pasos = 2.5;
    }
    subir(){
        this.top -= this.pasos;
        this.player.style.top = this.top + "px";        
    }
    bajar(){
        this.top += this.pasos;
        this.player.style.top = this.top + "px";
    }
    avanzar(){
        this.left += this.pasos;
        this.player.style.left = this.left + "px";
        this.player.classList.remove("MoveL");
        this.player.classList.add("MoveR");
    }
    retroceder(){
        this.left -= this.pasos;
        this.player.style.left = this.left + "px";
        this.player.classList.remove("MoveR");
        this.player.classList.add("MoveL");
    }

}

class enemy extends jugador{
    constructor(enemy){
        super();
        this.enemy = enemy;
        this.top = Math.floor(Math.random()*99)+1;
        this.left = Math.floor(Math.random()*350)+1;
        this.enemy.style.top = this.top + "px";
        this.enemy.style.left = this.left  + "px";
    }
    spawn(){
            this.top = Math.floor(Math.random()*99)+1;
            this.left = Math.floor(Math.random()*350)+1;  
        if(Math.round(playerN1.top / enemyN1.top) != 1 && Math.round(playerN1.left / enemyN1.left) != 1 ){
            this.enemy.style.top = this.top + "px";
            this.enemy.style.left = this.left  + "px";
        }else{
            this.reset();
        }
    }
    reset(){
        this.top = -100;
        this.left = -100;  
        this.enemy.style.top = this.top + "px";
        this.enemy.style.left = this.left + "px";
        this.spawn();
    }
    killed(){
            this.reset();
            scorePoint += 10;
            score.textContent = "Score: "+ scorePoint;
            playerN1.player.classList.add("Kill");
            setInterval(()=>{playerN1.player.classList.remove("Kill");},1000);
    }
}
const playerN1 = new jugador(player1);
const enemyN1 = new enemy(enemy1);
enemyN1.spawn();

    setInterval(()=>{
        do{
            enemyN1.spawn()

        }while(Math.round(playerN1.top / enemyN1.top) == 1 && Math.round(playerN1.left / enemyN1.left) == 1 );
        },5000);

screen.addEventListener("keypress",(e) => {
    if(e.code == "KeyW"){
        if(playerN1.top > 0){
            playerN1.subir();
        }
        if(Math.round(playerN1.top / enemyN1.top) == 1 && Math.round(playerN1.left / enemyN1.left) == 1 ){
            enemyN1.killed();
        }

    }else if(e.code == "KeyS"){
        if(playerN1.top < 140){
            playerN1.bajar();
        }
        if(Math.round(playerN1.top / enemyN1.top) == 1 && Math.round(playerN1.left / enemyN1.left) == 1 ){
            enemyN1.killed();
        }

    }else if(e.code == "KeyA"){
        if(playerN1.left > 0){
            playerN1.retroceder();
        }
        if(Math.round(playerN1.top / enemyN1.top) == 1 && Math.round(playerN1.left / enemyN1.left) == 1 ){
            enemyN1.killed();
        }

    }else if(e.code == "KeyD"){
        if(playerN1.left < 330){
            playerN1.avanzar();
        }
        if(Math.round(playerN1.top / enemyN1.top) == 1 && Math.round(playerN1.left / enemyN1.left) == 1 ){
            enemyN1.killed();
        }

    }
});
let minutos = 0;
let segundos = 0;
    
setInterval(()=>{
    segundos++;
    if(segundos < 10){
        timer.textContent = `0${minutos}:0${segundos}`;
    }else{
        if(segundos == 60){
            timer.textContent = `0${minutos}:${segundos}`;
            minutos++;
            segundos = 0;
        }else{
            timer.textContent = `0${minutos}:${segundos}`;

        }
    }
},1000);
