 
 function Generating() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const z = Math.floor(Math.random() * 10);
    const h = Math.floor(Math.random() * 10);
    
    return { x, y, z, h };
}

const { x, y, z, h } = Generating();
console.log(x, y, z, h);


