
const player1 = document.getElementById("player-1");
const screen = document.getElementById("screen");
class jugador{
    constructor(player){
        this.player = player;
        this.top = 0;
        this.left = 0;
        this.pasos = 10;
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
    }
    retroceder(){
        this.left -= this.pasos;
        this.player.style.left = this.left + "px";
    }

}

const playerN1 = new jugador(player1);
 

screen.addEventListener("keypress",(e) => {
    if(e.code == "KeyW"){
        playerN1.subir();
    }else if(e.code == "KeyS"){
        playerN1.bajar();
    }else if(e.code == "KeyA"){
        playerN1.retroceder();
    }else if(e.code == "KeyD"){
        playerN1.avanzar();
    }
});
