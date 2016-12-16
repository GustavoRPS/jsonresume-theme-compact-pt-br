var fs = require('fs');
var Handlebars = require('handlebars');
var Moment = require('moment');
Moment.locale('pt-BR');

function render(resume) {
  var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
  var print = fs.readFileSync(__dirname + "/print.css", "utf-8");

	return Handlebars.compile(template)({
		css: css,
    print: print,
    resume: resume,
	});
};


Handlebars.registerHelper("prettifyDate", function(resumeDate) {
  if (!resumeDate) {
    return 'Atualmente';
  }
  var newDate = Moment(resumeDate).format('MMM YYYY');
  console.log('newDate: ' + newDate);
  return newDate;
});

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

module.exports = {
	render: render
}
