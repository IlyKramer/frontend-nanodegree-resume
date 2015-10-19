'use strict;'

var bio = {
	
	"name" : "Ilyse B. Kramer",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "267-918-4883",
		"email" : "ilykramer@gmail.com",
		"github" : "IlyKramer",
		"linkedin" : "https://www.linkedin.com/pub/ilyse-kramer/16/4bb/273",
		"location" : "Washington, DC"
	
	},
		"welcomeMesssage" : "information services professional seeking career as front-end web developer",
		"skills": [
			"Programming Languages:  Git, HTML, CSS, Javascript", "Data Analysis: Excel, SPSS, SurveyMonkey, Wufoo", "Languages: Spanish (proficient), American Sign Language (beginner)", "Additional Skills: Grantwriting, Community Outreach"
		]
	}
	bio.display = function(){

		var name = 'Ilyse B. Kramer';
		var formattedName = HTMLheaderName.replace("%data%", "Ilyse B. Kramer");
		$("#header").prepend(formattedName);
		var role = "Web Developer";
		var formattedRole = HTMLheaderRole.replace("%data%", role);
		$("#header").prepend(formattedRole);
		
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		$("#footerContacts").append(formattedmobile);
	
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		$("#footerContacts").append(formattedemail);

		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		$("#footerContacts").append(formattedgithub);
	
		var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
		$("#topContacts").append(formattedlinkedin);
		$("#footerContacts").append(formattedlinkedin);
	
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);
		$("#footerContacts").append(formattedlocation);
	
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "information services professional seeking career as front-end web developer");
		$("#header").append(formattedWelcomeMsg);

		
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
	
		}
	}

	bio.display();
	
	var work = {
		"jobs": [
			{
				"employer": "The Arc",
				"title": "Associate",
				"location": "Washington, DC",
				"dates": "November 2013 - present",
				"description": "Update web pages, coordinate and execute special events, and provide digital and in-person professional development resources to support the nearly 700 chapters of the United States’ largest organization serving people with Intellectual and Developmental Disabilities."
			},
			{
				"employer": "Art Beyond Sight",
				"title": "Consultant",
				"location": "Washington, DC",
				"dates": "November 2014 - present",
				"description": "Research, analyze, and propose technology solutions that will make art and cultural museums more accessible to people with disabilities"
			},
			{
				"employer": "American Institutes for Research",
				"title": "Consultant",
				"location": "Washington, DC",
				"dates": "April 2013 - October 2013",
				"description": "Disseminated information for Model Systems Knowledge Translation Center, a National Institute on Disability and Rehabilitation Research (NIDRR) funded project that provides health information resources for people with Spinal Cord Injury (SCI), Traumatic Brain Injury (TBI), and Burn Injuries." 
			}
		]
	}
	
 work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	
	}
}
work.display();	

var projects = {
	"projects": [
		{
			"title": "Projects for Women Who Code, DC",
			"dates": "June 2015 - present",
			"description": "Conduct projects for DC Chapter of national organization that provides women with programming skills to expand career opportunities",
			"images": ["images/projectImage.png"]
		},
		{
			"title": "Code for DC",
			"dates": "June 2015-present",
			"description": "Conduct projects for a non-partisan, non-political group of volunteer civic hackers working together to solve local issues and help people engage with DC.",
			"images": ["images/projectImage2.png"]
		}
	]
};

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (projectImage in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[projectImage]);
				$(".project-entry:last").append(formattedImage);
			}
		} 
	}
}

projects.display();
	
var education = {
	"schools": [
		{
			"name": "Udacity",
			"dates": "June 2015-December 2015",	
			"location": "https://www.udacity.com",
			"degree": "Front-End Web Development Nanodegree"
		},
		{
			"name": "University of Washington",
			"location": "Seattle, WA, USA",
			"degree": "Master's in Library Information Science, Master's in Public Administration",
			"dates": "2008-2011"
		},
		{
			"name": "Vassar College",
			"location": "Poughkeepsie, NY, USA",
			"degree": "BA in English Literature",
			"dates": "2004-2008"
		}
	
	]
}
	
education.display = function () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);	
		$(".education-entry:last").append(formattedschoolName);	
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);
		
	}
}
				 	
education.display();

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#mapDiv").append(googleMap);