$(document).ready(function () {
  let audio = new Audio("./buttonClick.mp3");
  $("#no1").click(function () {
    audio.play();
    $("#display").append($("#no1").text());
  });

  $("#no2").click(function () {
    audio.play();
    $("#display").append($("#no2").text());
  });

  $("#no3").click(function () {
    audio.play();
    $("#display").append($("#no3").text());
  });

  $("#no4").click(function () {
    audio.play();
    $("#display").append($("#no4").text());
  });

  $("#no5").click(function () {
    audio.play();
    $("#display").append($("#no5").text());
  });

  $("#no6").click(function () {
    audio.play();
    $("#display").append($("#no6").text());
  });

  $("#no7").click(function () {
    audio.play();
    $("#display").append($("#no7").text());
  });

  $("#no8").click(function () {
    audio.play();
    $("#display").append($("#no8").text());
  });

  $("#no9").click(function () {
    audio.play();
    $("#display").append($("#no9").text());
  });

  $("#no0").click(function () {
    audio.play();
    let len = $("#display").text().length;
    if (len !== 0) {
      let calc = $("#display").append("0");
    }
  });

  $("#addition").click(function () {
    audio.play();
    let len = $("#display").text().length;
    let lastChar = $("#display").text()[len - 1];
    if (len !== 0) {
      if (lastChar !== "+") {
        if (lastChar === "/" || lastChar === "x" || lastChar === "-") {
          let data = $("#display").text();
          data.slice(0, len - 1);
          $("#display").text(data.slice(0, len - 1) + "+");
        } else {
          $("#display").append("+");
        }
      }
    }
  });

  $("#subtract").click(function () {
    audio.play();
    let len = $("#display").text().length;
    let lastChar = $("#display").text()[len - 1];

    if (lastChar !== "-") {
      if (lastChar === "/" || lastChar === "+" || lastChar === "x") {
        let data = $("#display").text();
        data.slice(0, len - 1);
        $("#display").text(data.slice(0, len - 1) + "-");
      } else {
        $("#display").append("-");
      }
    }
  });

  $("#divider").click(function () {
    audio.play();
    let len = $("#display").text().length;
    let lastChar = $("#display").text()[len - 1];
    if (len !== 0) {
      if (lastChar !== "/") {
        if (lastChar === "x" || lastChar === "+" || lastChar === "-") {
          let data = $("#display").text();
          data.slice(0, len - 1);
          $("#display").text(data.slice(0, len - 1) + "/");
        } else {
          $("#display").append("/");
        }
      }
    }
  });

  $("#multiplier").click(function () {
    audio.play();
    let len = $("#display").text().length;
    let lastChar = $("#display").text()[len - 1];
    if (len !== 0) {
      if (lastChar !== "x") {
        if (lastChar === "/" || lastChar === "+" || lastChar === "-") {
          let data = $("#display").text();
          data.slice(0, len - 1);
          $("#display").text(data.slice(0, len - 1) + "x");
        } else {
          $("#display").append("x");
        }
      }
    }
  });

  $("#clear").click(function () {
    audio.play();
    $("#display").text("");
  });

  $("#backspace").click(function () {
    audio.play();
    let data = $("#display").text();
    let newData = data.slice(0, data.length - 1);
    $("#display").text(newData);
  });

  $("#equal").click(function () {
    audio.play();
    let len = $("#display").text().length;
    if (len !== 0) {
      let calc = $("#display").text();
      let formula = calc.replace("x", "*");
      $("#display").text(eval(formula));
      console.log(eval(formula));
    }
  });

  $("#point").click(function () {
    audio.play();
    let len = $("#display").text().length;
    if (len !== 0) {
      if ($("#display").text().includes(".") === false) {
        $("#display").append(".");
      }
    }
  });
});
