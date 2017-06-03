/*
 * Uses json notation to populate the resume page
 */
 
var profile = {
	"profile" : "Junior Web Developer looking to obtain a position where I can effectively utilize my skills to make a positive contribution to the organization"
};
var skills = {
	"programming" : ["Java ", "Javascript (Jquery) ", "Html ", "CSS ", "MySql ", "Bootstrap ", "Python "],
	"languages" : ["Spanish (Native Speaker)"],
	"applications" : ["Excel", "Word", "Power Point", "Skype", "Eclipse", "Aptana"]
};
var edu = {
	"schools" : [{
		"name" : "Boston University",
		"city" : "Boston, MA",
		"degree" : "Masters",
		"major" : "Computer Information Systems conc. Web Application Development",
		"date" : "May 2016"
	}, {
		"name" : "California State Polytechnic University",
		"city" : "Pomona, CA",
		"degree" : "B.S",
		"major" : "Computer Science",
		"date" : "June 2008"
	}, {
		"name" : "East Los Angeles College",
		"city" : "Monterey Park, CA",
		"degree" : "Transfer",
		"major" : "Computer Science",
		"date" : "June 2005"
	}]
};
var jobExp = {
	"jobs" : [{
		"name" : "American MicroImaging Inc (AMI)",
		"title" : "Document Imaging Specialist",
		"date" : "April 2013 to December 2013",
		"exp" : ["Prepared and sorted documents for scanning as per project specifications", "Scanned documents into the imaging system software, using different high speed scanners", "Indexed documents to ensure consistency across the project", "Performed quality control to ensure the project meets high quality standards"]
	}, {
		"name" : "City of Cudahy",
		"title" : "Assistant Webmaster",
		"date" : "November 2011 to December 2012",
		"exp" : ["Created new content as per request from city managers and staff", "Updated and maintained content, such as meeting agendas, calendar of events, event flyers and news briefs from the city hall", "Integrated the city’s twitter account with their website"]
	}, {
		"name" : "Disney Consumer Products IT",
		"title" : "Undergraduate Program Analyst (Internship)",
		"date" : "September 2008 to February 2009",
		"exp" : ["Assisted with the design and implemented new enhancements to their internal resource planning web application, implemented new and modified existing dashboards to the network monitoring web application. ", "Created documentation for new enhancements for web applications, produced statistics report of their Artwork Catalog application, assisted with authoring of new content for their internal wiki site ", "Executed test scripts for Artwork Catalog Application and Digital Media Center"]
	}],
	"freelance" : [{
		"name" : "kwonglede.com",
		"date" : "December 2012 to January 2013",
		"desc" : "Installed and setup wordpress on hosting account, modified template to achieve the requested look and feel,assisted and provided the respective documentation on how to post information on word press"
	}, {
		"name" : "Wing On Poultry Inc.",
		"date" : "December 2010 to February 2011",
		"desc" : "Designed and developed their small business website from ground up using HTML, Jquery and CSS to promote their products"
	}]
};

var act = {
	"activ" : [{
		"name" : "Association of Computer Machinery (ACM) | Member"
	}]
};

profile.display = function() {
	var htmlProf = "<p>%data%</p>";
	$("#profile").append(htmlProf.replace("%data%", profile.profile));
};

skills.display = function() {

	var htmlProg = "<span><b>Programming</b>: %data%</span></br>";
	var htmlApp = "<span><b>Applications</b>: %data%</span></br>";
	var htmlLang = "<span><b>Languages</b>: %data%</span>";

	$("#qualifications").append(htmlProg.replace("%data%", skills.programming) + htmlApp.replace("%data%", skills.applications) + htmlLang.replace("%data%", skills.languages));
};

edu.display = function() {
	var htmlEd = "<p>%data%</p>";
	var s;
	for (e in edu.schools) {
		s = (edu.schools[e].name + " | " + edu.schools[e].city + " | " + edu.schools[e].degree + " " + edu.schools[e].major + " | " + edu.schools[e].date);
		$("#edu").append(htmlEd.replace("%data%", s));
	}
};

jobExp.display = function() {
	var htmlJob = "<h4 id='jobheader'>%data%</h4>";
	var htmlTitle = "<small id='jobdate'>%data% | ";
	var htmlDateloc = "%data%</small>";
	var htmlExpStart = "<ul>", htmlExpEnd = "</ul>";
	var htmlItem = "<li>%data%</li>";
	var htmlFree = "<h4>Freelance Projects</h4>";
	var htmlFreejobDate = "<small id='jobdate'>%data% </small>";
	var htmlFreejobDesc = "<p>%data%</p>";
	var st;
	for (j in jobExp.jobs) {
		st = htmlJob.replace("%data%", jobExp.jobs[j].name) + htmlTitle.replace("%data%", jobExp.jobs[j].title) + htmlDateloc.replace("%data%", jobExp.jobs[j].date) + htmlExpStart;
		for (x in jobExp.jobs[j].exp) {
			st += htmlItem.replace("%data%", jobExp.jobs[j].exp[x]);
		}
		st += htmlExpEnd;
		$("#workexp").append(st);
	}
	$("#workexp").append(htmlFree);
	for (f in jobExp.freelance) {
		st = htmlJob.replace("%data%", jobExp.freelance[f].name) + htmlFreejobDate.replace("%data%", jobExp.freelance[f].date) + "" + htmlExpStart + htmlItem.replace("%data%", jobExp.freelance[f].desc) + htmlExpEnd;
		$("#workexp").append(st);
	}
};
act.display = function() {
	var htmlActivities = "<span>%data%</span>", ac;
	for (a in act.activ) {
		ac = htmlActivities.replace("%data%", act.activ[a].name);
	}
	$("#activities").append(ac);
};

$("#profile").append(profile.display).hide().fadeIn(5000);
$("#qualifications").append(skills.display).hide().fadeIn(6000);
$("#edu").append(edu.display).hide().fadeIn(7000);
$("#workexp").append(jobExp.display).hide().fadeIn(8000);
$("#activities").append(act.display).hide().fadeIn(9000);
