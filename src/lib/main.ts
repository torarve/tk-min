'use strict';

(function () {
  var standardMin = document.getElementById('standard-min') as HTMLInputElement;
  var tkMin = document.getElementById('tk-min') as HTMLInputElement;

  function onChangeStandard(evt: Event) {
    if (standardMin.checkValidity()) {
      var value = standardMin.value;
      tkMin.value = !!value ? (+parseFloat(value) / 0.875).toFixed(2) : null;
    }
  }
  function onChangeTk(evt: Event) {
    if (standardMin.checkValidity()) {
      var value = tkMin.value;
      standardMin.value = !!value ? (parseFloat(value) * 0.875).toFixed(2) : null;
  }
}

  standardMin.addEventListener('change', onChangeStandard);
  tkMin.addEventListener('change', onChangeTk);
})();