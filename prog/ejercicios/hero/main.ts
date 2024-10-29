import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";
import { SuperMago } from "./superMago";
import { Gladiador } from "./gladiador";
import { ArqueroReal } from "./arqueroReal";

let magic = new Mago('Veigar',750, 6,3,400);
let lucha = new Luchador('Sett', 1200, 15, 350);
let arqueero = new Arquero('Ashe', 600, 5, 4, 450);



// arqueero.setAttack();
// arqueero.setDefend();

// lucha.setAttack();
// lucha.setDefend();
// arqueero.setVida(lucha);

// // magic.GetAttack();
// arqueero.GetDefend();
// arqueero.getVida();
lucha.setLevel();
lucha.getLevel(); 

if(lucha.getLevel()==6){
    
    lucha = new Gladiador(lucha.getName(), lucha.getPVida(), lucha.getTime(), lucha.getPAttack());


    lucha.setAttack();
    (lucha as Gladiador).setAttack();
    arqueero.setDefend();
    arqueero.setVida((lucha as Gladiador));
    arqueero.getVida();
    
}else{
    arqueero.setAttack();
    arqueero.setDefend();

    lucha.setAttack();
    lucha.setDefend();
    arqueero.setVida(lucha);

    arqueero.GetDefend();
    arqueero.getVida();
}



