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
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-triangle", fixedArea);
}

function rectangleArea(params) {
  const width = getInputFieldValueById("rectangle-width");
  const height = getInputFieldValueById("rectangle-height");
  const area = width * height;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-rectangle", fixedArea);
}

function parallelogramArea(params) {
  const base = getInputFieldValueById("parallelogram-base");
  const height = getInputFieldValueById("parallelogram-height");
  const area = base * height;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-parallelogram", fixedArea);
}

function rhombusArea(params) {
  const d1 = getInputFieldValueById("first-diagonal");
  const d2 = getInputFieldValueById("second-diagonal");
  const area = 0.5 * d1 * d2;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-rhombus", fixedArea);
}

function pentagonArea(params) {
  const perimeterValue = getInputFieldValueById("perimeter-value");
  const apothemValue = getInputFieldValueById("apothem-value");
  const area = 0.5 * perimeterValue * apothemValue;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-pentagon", fixedArea);
}

function ellipseArea(params) {
  const pi = Math.PI;
  const majorRadius = getInputFieldValueById("major-radius");
  const minorRadius = getInputFieldValueById("minor-radius");
  const area = pi * majorRadius * minorRadius;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-ellipse", fixedArea);
}
