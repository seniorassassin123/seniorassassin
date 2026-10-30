document.querySelectorAll('[data-registration-form]').forEach((form)=>{
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const notice=form.querySelector('[data-form-notice]');
    if(notice) notice.textContent='Registration is not open yet. The payment and private registration sheet are not connected.';
  });
});
