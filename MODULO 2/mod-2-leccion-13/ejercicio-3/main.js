const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

const hiUsers = users.map(user=>{
    
    if(user.isPremium === true){
        return `Hola ${user.name}. Gracias por confiar en nosotros.`;
    } else {
        return `Hola ${user.name}.`;
    }
})

console.log(hiUsers);

    