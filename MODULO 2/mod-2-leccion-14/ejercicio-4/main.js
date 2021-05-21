const removeMsg = () => {
    const msg = document.querySelector('.text');
    msg.innerHTML = 'su sesión ha expirado';
  };
  
  setTimeout(removeMsg, 15000);