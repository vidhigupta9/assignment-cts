const express = require("express");
const bodyParser = require("body-parser");
const removed = require("stopwords").english;

function segmen(str) {
  str = str.replace("?", ".");
  var a = str.split(".");
  a.pop();
  return a;
}

function wordsegm(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  var b = str.split(" ");
  return b;
}

function removestp(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  const oldstr = str.split(" ");
  var r = "";
  oldstr.forEach(funku);
  function funku(item, index, arr) {
    if (removed.includes(item)) {
    } else {
      r += item + " ";
    }
  }
  return r;
}
function uniquestr(str) {
  str = str.toLowerCase();
  str = str.replace("?", "");
  str = str.replace(".", "");
  var arr = str.split(" ");
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const setis = removeDuplicates(arr);
  var b = "";
  setis.forEach(function (el) {
    b += el + " ";
  });
  return b;
}
uniquestr("Hello World. What is the weather today.");
function reversestring(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  const arr = str.split(" ");
  var y = "";
  arr.forEach((el) => {
    y += el.split("").reverse().join("") + " ";
  });
  return y;
}

function extractnum(str) {
  var f = str.match(/\d/g);
  f = f.join(" ");
  return f;
}

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var str1 = string(req.body.str);
  var result1 =
    "<b>Input Sring is:</b>" +
    str1 +
    "<br>" +
    "<b>Sentence Segmentation:</b>" +
    segmen(str1) +
    "<br>" +
    "<b>Word Segmentation:</b>" +
    wordsegm(str1) +
    "<br>" +
    "<b>Remove Stop Words:</b>" +
    removestp(str1) +
    "<br>" +
    "<b>String Without Repeated Words:</b>" +
    uniquestr(str1) +
    "<br>" +
    "<b>Reverse Each Word:</b>" +
    reversestring(str1) +
    "<br>" +
    "<b>Extract Number:</b>" +
    extractnum(str1) +
    "<br>";
  res.send(result1);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
