   export  function devolverNulo() {

        return null;
        
    }

    export function iniciales(n,a1,a2){
        return `${n[0]}.${a1[0]}.${a2[0]}.`    
    }

    export function calcular_salario(salario,irpf){
        return salario - (salario*irpf/100);
    }

    