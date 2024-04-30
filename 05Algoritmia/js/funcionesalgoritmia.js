function problema1(){
        let arrayDeCadenas = document.querySelector('#p1-input').value.split(' ');
        let r= "";
        let i=arrayDeCadenas.length-1;
        do{
            r=r+(arrayDeCadenas[i]+" ");
            i=i-1
        } while (i!==-1)
        document.querySelector('#p1-output').textContent = r;
      }
      
      
function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1=[p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2=[p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });
    v1 = v1.reverse();

    v2 = v2.reverse();

    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    document.querySelector('#p2-output').textContent = 'El producto escalar minimo  es de '+p2_producto;
}

function problema3(){
    const palabraz = document.querySelector('#p3-input').value;
    let mayor = 0;
    let diferentes = '';
    let regex = /\s/g;
    if (regex.test(palabraz)) {
        alert("No ingrese espacios, utilice comas para separar las palabras.")
    }
    else{
        const separacion = palabraz.split(',');
        separacion.forEach(palabra => { 
            const carac = new Set(palabra.split('')).size; 
            if(carac > mayor){ 
                mayor = carac; 
                diferentes = palabra;
            } 
        }); 
    }
    document.querySelector('#p3-output').textContent = `La palabra con mayor cantidad de carácteres únicos es: ${diferentes}`;
}