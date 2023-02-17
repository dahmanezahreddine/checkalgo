function dot_product(v1, v2) {
  var ps;
  ps = v1[0] * v2[0] + v1[1] * v2[1];
  return ps;
}

var arry = [
  [1, 2],
  [1, -3],
  [0, 2],
  [1, 0],
];
var x = 0;
for (var i = 0; i < arry.length; i++) {
  for (var j = i + 1; j < arry.length; j++) {
    x = dot_product(arry[i], arry[j]);
    if (x === 0) {
      console.log(arry[i], arry[j], "are orthogonal");
    }
  }
}
