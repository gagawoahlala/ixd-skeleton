
exports.view = function(req, res) { 
  // controller code goes here 
  var correct = req.query.correct; 
  var outof = req.query.outof; 
  var scoreObj = {};
  console.log(correct);
  console.log(outof);
  var accuracy = Math.floor(correct * 1.0 / outof * 100);
  console.log(accuracy);
  scoreObj["correct"] = correct;
  scoreObj["outOf"] = outof;
  scoreObj["accuracy"] = accuracy;
  res.render('summary', scoreObj);
};
