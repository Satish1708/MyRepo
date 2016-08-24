/*
This is empty on purpose! Your code to build the resume will go here.
 
var formattedName = HTMLheaderName.replace("%data%","G Satish Kumar");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%","Web Designer");
$("#header").append(formattedRole);
var formattedEmail= HTMLemail.replace("%data%","skr1710@gmail.com");
$("#main").append(formattedEmail);*/
var skillset=["HTML","CSS","JS","Email template Development","C++","Velocity","Angular Js"];

var bio ={
    "name" : "G Satish Kumar",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "8348732909",
        "email"  : "skr1710@gmail.com",
        "github" : "www.google.com",
        "twitter": "www.google.com",
        "location": "Hyderabad"
    },
    "welcomeMessage" : "Know Me Better",
    "skills" : skillset,
    "biopic"  : "fry.jpg"
};



bio.display = function(){
    
    //$("#header").append(HTMLcontactGeneric);
    $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts["mobile"]));
    $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts["email"]));
    $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts["twitter"]));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts["github"]));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts["location"]));
    $("#header").append(HTMLbioPic.replace("%data",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    var i=0;
    for(skill in bio.skills){
        $("#header").append(HTMLskills.replace("%data%",bio.skills[i]));
        i++;
    }
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
    
    
};

/* ********************************************************************************** */

var education = {
    "schools":[
        {
            "name": "Institute of Technology and Marine Engineering",
            "city": "Kolkata",
            "degree": "Btech",
            "majors": ["Computer Science"],
            "dates" : "2010-2014",
            "url" : "www.google.com"
        },
        {
            "name": "Kendriya Vidyalaya No 2",
            "city": "Kalaikunda",
            "degree": "High School",
            "majors": ["Computer Science"],
            "dates" : "2008-2010",
            "url" : "www.google.com"
        }
    ],
    "onlineCourses" : [
        {
            "title": "JavaScript Crash Course",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "www.google.com"
        }
    ]
};
education.display = function(){
     $("#education").append(HTMLschoolStart);
    
    for(school in education.schools){
   
    $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));  
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].city));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors));
    }   
     $("#education").append(HTMLonlineClasses);
    for(onlineCourse in education.onlineCourses){
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title));  
    $(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url));
    }
    
};

/* ********************************************************************************** */

var work={
    "jobs":[
        {
            "employer": "WIPRO Technologies",
            "title" : "Project Engineer",
            "dates" : "October 2014 - Present",
            "location": "Hyderabad",
            "description":"Email Template Development, Responsive Emails, different mail clients compatability as emails distort in different mail clients, working on XML's/JSon to populate emails with real time data. Web site desgining, making compatible with all the devices and different browsers and testing them"
        }
    ]
};

work.display = function(){
    for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));  
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
    }
};

/* ********************************************************************************** */

var projectDetails = {
    "projects" : [
        {
            "title": "Email Template Development",
            "dates" : "June,2015 - Present",
            "description" : "Email Template Development, Responsive Emails, different mail clients compatability as emails distort in different mail clients, working on XML's/JSon to populate emails with real time data. Web site desgining, making compatible with all the devices and different browsers and testing them",
            "images" :"xyz.jpg"
            
        },
        {
            "title": "Web Developer - Genoptix",
            "dates" : "November,2014 - May,2015",
            "description" : "Migration of HTML template to Drupal. Desigining the web page as per the provided mockup. Making it responsive and inter browser compatible.",
            "images" : "xyz.jpg"
            
        }
    ]
};

projectDetails.display = function(){
      for(x in projectDetails.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projectDetails.projects[x].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projectDetails.projects[x].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projectDetails.projects[x].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projectDetails.projects[x].images));
      }  
};

/* *************************************************************************************** */
bio.display();
work.display();
projectDetails.display();
education.display();


$(document).click(function(loc) {
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);// your code goes here
});

function locationizer(work_obj) {
    var workLocations=[];
    for (job in work.jobs) {
        locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}

function inName(twoNames) {
    var newName=twoNames.trim().split(" ");
    var nameOne=newName[0].slice(0,1).toUpperCase()+newName[0].slice(1).toLowerCase();
    var nameTwo=newName[1].toUpperCase();
    return nameOne+" "+nameTwo;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);