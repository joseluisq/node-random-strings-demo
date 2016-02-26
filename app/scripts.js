
var random = require('randomstring');
var btn = document.getElementById('btnapp');
var log = document.getElementById('txtlog');
var cbotype = document.getElementById('cbotype');
var cbolen = document.getElementById('cbolen');

var options = {
  length: 32,
  charset: 'alphanumeric'
};

trigger();

btn.addEventListener('click', trigger, false);
cbolen.addEventListener('change', trigger, false);
cbotype.addEventListener('change', trigger, false);

function trigger() {
  options.charset = cbotype.options[cbotype.selectedIndex].value;
  options.length = parseInt(cbolen.options[cbolen.selectedIndex].value);
  generate(options);
}

function generate(options) {
  log.innerHTML = random.generate(options);
}
