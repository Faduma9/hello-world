const instructorWithLongestName = function(instructors) {
    let longestInstructor = null;
  
    for (const instructor of instructors) {
      if (!longestInstructor || instructor.name.length > longestInstructor.name.length) {
        longestInstructor = instructor;
      }
    }
  
    return longestInstructor;
  };
  
  console.log(
    instructorWithLongestName([
      { name: "Samuel", course: "iOS" },
      { name: "Jeremiah", course: "Web" },
      { name: "Ophilia", course: "Web" },
      { name: "Donald", course: "Web" },
    ])
  ); // Output: {name: "Jeremiah", course: "Web"}
  
  console.log(
    instructorWithLongestName([
      { name: "Matthew", course: "Web" },
      { name: "David", course: "iOS" },
      { name: "Domascus", course: "Web" },
    ])
  ); // Output: {name: "Domascus", course: "Web"}
  

