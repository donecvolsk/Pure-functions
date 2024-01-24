export let characters = {
    name: 'Маг', 
    health: 90,
}

export function characterHealth(value) {    
    if(value < 15) {
        value = "critical";
        return value;
    }  else if(value <= 50) {
        value = "wounded";    
        return value;
    } else  {
        value = "healthy";
        return value;
        } 
}
   
export const charactersLevel = characterHealth(characters.health);
console.log(charactersLevel);
