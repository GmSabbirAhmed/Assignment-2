/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  "Name: Sabbir Ahmed" "Student ID: 129435236" Date: 1 May 2024
*
********************************************************************************/

const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then((successMessage) => {
    console.log(successMessage);

    // Testing functions
    collegeData.getAllStudents()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    collegeData.getCourses()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    collegeData.getTAs()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  })
  .catch((errorMessage) => console.error(errorMessage));
