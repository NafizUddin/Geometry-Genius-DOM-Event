function getInputFieldValueById(inputFieldId) {
  const inputFieldValueString = document.getElementById(inputFieldId).value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  document.getElementById(inputFieldId).value = "";
  return inputFieldValue;
}

function setAreaById(areaId, value) {
  document.getElementById(areaId).innerText = value;
}

function addCalculationEntry(shapeType, areaValue) {

  const calculationList = document.getElementById("calculation-entry");
  const li = document.createElement("li");
  const count = calculationList.childElementCount;
  li.classList.add("my-3");
  li.innerHTML = `${
    count + 1
  }. <span id="shape-name">${shapeType}</span> <span id="calculation-value" class="ml-2">${areaValue}</span> cm<sup>2</sup><button class="bg-[#1090D8] text-white ml-2 rounded-lg py-2 px-4 hover:bg-purple-600" id="convert-cm" onclick=convertToMeter("${areaValue}","${shapeType}")>Convert to m<sup>2</sup></button>`;

  calculationList.appendChild(li);
}

function convertToMeter(value, shapeType) {

  // const calcValueInCmString =
  //   document.getElementById("calculation-value").innerText;
  // console.log(calcValueInCmString);
  const calcValueInCm = parseFloat(value);
  const calcValueInMeter = calcValueInCm / 10000;
  // console.log(calcValueInMeter);
  // const shapeName = document.getElementById("shape-name").innerText;
  // console.log(shapeName);
  repeatCalculationEntry(shapeType, calcValueInMeter);
}

function repeatCalculationEntry(newShape, value) {
  const calculationList = document.getElementById("calculation-entry");

  const li = document.createElement("li");
  const count = calculationList.childElementCount;
  li.classList.add("my-3");
  li.innerHTML = `${
    count + 1
  }. ${newShape} <span class="ml-2">${value}</span> m<sup>2</sup>`;

  calculationList.appendChild(li);
}

function triangleArea(params) {
  const baseValue = getInputFieldValueById("triangle-base");
  const heightValue = getInputFieldValueById("triangle-height");
  if (isNaN(baseValue) || isNaN(heightValue)) {
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * baseValue * heightValue;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-triangle", fixedArea);

  addCalculationEntry("Triangle", fixedArea);
}

function rectangleArea(params) {
  const width = getInputFieldValueById("rectangle-width");
  const height = getInputFieldValueById("rectangle-height");
  if (isNaN(width) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const area = width * height;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-rectangle", fixedArea);
  addCalculationEntry("Rectangle", fixedArea);
}

function parallelogramArea(params) {
  const base = getInputFieldValueById("parallelogram-base");
  const height = getInputFieldValueById("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const area = base * height;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-parallelogram", fixedArea);
  addCalculationEntry("Parallelogram", fixedArea);
}

function rhombusArea(params) {
  const d1 = getInputFieldValueById("first-diagonal");
  const d2 = getInputFieldValueById("second-diagonal");
  if (isNaN(d1) || isNaN(d2)) {
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * d1 * d2;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-rhombus", fixedArea);
  addCalculationEntry("Rhombus", fixedArea);
}

function pentagonArea(params) {
  const perimeterValue = getInputFieldValueById("perimeter-value");
  const apothemValue = getInputFieldValueById("apothem-value");
  if (isNaN(perimeterValue) || isNaN(apothemValue)) {
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * perimeterValue * apothemValue;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-pentagon", fixedArea);
  addCalculationEntry("Pentagon", fixedArea);
}

function ellipseArea(params) {
  const majorRadius = getInputFieldValueById("major-radius");
  const minorRadius = getInputFieldValueById("minor-radius");
  if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("Please insert a number");
    return;
  }
  const area = Math.PI * majorRadius * minorRadius;
  //   taking 2 decimal point after a float number
  const fixedArea = parseFloat(area.toFixed(2));
  setAreaById("area-ellipse", fixedArea);
  addCalculationEntry("Ellipse", fixedArea);
}
