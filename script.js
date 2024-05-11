const rocket = document.querySelector('.rocket');
const launchBtn = document.querySelector('.launch-btn');

launchBtn.addEventListener('click', function() {
  if (!rocket.classList.contains('launch')) {
    rocket.classList.add('launch');
    launchBtn.disabled = true;
    
    setTimeout(function() {
      rocket.classList.remove('launch');
      launchBtn.disabled = false;
    }, 8000);
  }
});