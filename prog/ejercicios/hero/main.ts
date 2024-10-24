import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";

let magic = new Mago('Veigar',750,3,400);
let lucha = new Luchador('Sett', 1200, 350);
let arqueero = new Arquero('Ashe', 600, 4, 450);



magic.setAttack();
magic.setDefend();

lucha.setAttack();
lucha.setDefend();

// magic.GetAttack();
magic.GetDefend();

magic.setVida();
magic.getVida();