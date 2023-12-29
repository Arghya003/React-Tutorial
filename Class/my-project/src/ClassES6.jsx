class Character{
    constructor (initialHP=100){
        this.hp=initialHP;
    }
    alive=true

    updateHP(amt){
        const calc=this.hp+amt;
        if(calc<0){
            this.hp=0;
            this.alive=false
        }
        else
        this.hp=calc;
    }
}
class Enemy extends Character{
    constructor(hp,loot){
        super(hp)
        this.loot=loot;
    }
}