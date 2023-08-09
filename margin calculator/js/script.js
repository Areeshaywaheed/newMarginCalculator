// document.getElementById('calculate').addEventListener('click', function() {
//     const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
//     const productCost = parseFloat(document.getElementById('productCost').value);
//     const marginPercentage = parseFloat(document.getElementById('margin').value);
//     const divisions = parseFloat(document.getElementById('divisions').value);

//     const marginAmount = (sellingPrice - productCost) * (marginPercentage / 100);
//     const dividedMargin = marginAmount / divisions;

//     const resultElement = document.getElementById('result');
//     resultElement.innerHTML = `Total Margin Amount: $${marginAmount.toFixed(2)}<br>Margin per Division: $${dividedMargin.toFixed(2)}`;
// });

let calculate = document.getElementById("calculate");
let sellingPrice = document.getElementById("sellingPrice");
let actualCost = document.getElementById("actualCost");
let divisions = document.getElementById("divisions");
let margin = document.getElementById("margin");
let input_group_separate = document.querySelector(".input-group-separate");

let marginAmount = 0;
let dividedMargin;

calculate.addEventListener("click", function () {
  if (divisions.value == "") {
    if (sellingPrice.value == "" || actualCost.value == "") {
      margin.className = "changingStyleRed";
      margin.value = "ERROR !!";
    } else {
      marginAmount = sellingPrice.value - actualCost.value;
      margin.value = marginAmount;
      margin.style.color = "rgb(82, 78, 78)";
      margin.style.backgroundColor = "#c7c1c1";
    }
  } else if (divisions.value != "") {
    dividedMargin = marginAmount / divisions.value;
    divisions.value = dividedMargin;
    divisions.style.color = "rgb(75, 72, 72)";

    calculate.addEventListener("click", function () {
      if (sellingPrice.value == "" || actualCost.value == "") {
        margin.className = "changingStyleRed";
        margin.value = "ERROR !!";
      } else {
        marginAmount = sellingPrice.value - actualCost.value;
        margin.value = marginAmount;
        margin.style.color = "rgb(82, 78, 78)";
        margin.style.backgroundColor = "#c7c1c1";

        dividedMargin = marginAmount / divisions.value;
        divisions.value = dividedMargin;
        divisions.style.color = "rgb(75, 72, 72)";
      }
    });
  }
});
