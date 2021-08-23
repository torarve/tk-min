'use strict';

(function () {
  var standardMin = document.getElementById('standard-min') as HTMLInputElement;
  var tkMin = document.getElementById('tk-min') as HTMLInputElement;

  function onChangeStandard(evt: Event) {
      console.log("onChangeStandard");
    var value = standardMin.value;
    tkMin.value = !!value ? (+value * 0.875).toFixed(2) : null;
  }
  function onChangeTk(evt: Event) {
      console.log("onChangeTk")
    var value = tkMin.value;
    standardMin.value = !!value ? (+value / 0.875).toFixed(2) : null;
  }

  standardMin.addEventListener('change', onChangeStandard);
//   standardMin.addEventListener('keyup', onChangeStandard);
  tkMin.addEventListener('change', onChangeTk);
//   tkMin.addEventListener('keyup', evt => { console.log(evt); onChangeTk(evt); });
})();