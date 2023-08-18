function getInputFieldValueById(inputFieldId) {
  const inputFieldValueString = document.getElementById(inputFieldId).value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  document.getElementById(inputFieldId).value = "";
  return inputFieldValue;
}

function setAreaById(areaId, value) {
  document.getElementById(areaId).innerText = value;
}

function triangleArea(params) {
  const baseValue = getInputFieldValueById("triangle-base");
  const heightValue = getInputFieldValueById("triangle-height");
  const area = 0.5 * baseValue * heightValue;
  setAreaById("area-triangle", area);
}

function rectangleArea(params) {
  const width = getInputFieldValueById("rectangle-width");
  const height = getInputFieldValueById("rectangle-height");
  const area = width * height;
  setAreaById("area-rectangle", area);
}
