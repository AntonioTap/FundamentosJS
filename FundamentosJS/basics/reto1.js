function wrapping(gifts) {
    const envueltos = gifts.map(
        gift =>{
            const tapa = '*'.repeat(2 + gift.length);
            return `${ tapa }\n*${ gift }*\n${ tapa }`
        }
    );
    return envueltos;
  }
  
  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)
console.log(wrapped);
wrapped.forEach(box => console.log(box));