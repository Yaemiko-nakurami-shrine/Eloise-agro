document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('registration');
  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!form.checkValidity()){
      // focus first invalid
      const firstInvalid = form.querySelector(':invalid');
      if(firstInvalid) firstInvalid.focus();
      msg.textContent = 'Por favor, preencha os campos obrigatórios.';
      msg.style.color = '#ffb4d9';
      return;
    }

    // Simula envio
    msg.textContent = 'Inscrição recebida! Obrigado por participar.';
    msg.style.color = '#7ef3d0';
    form.reset();
  });
});
