      var resume = 
  [ {
    'Name' : 'Noorul Ameen J',
   'E-mail' : 'noorularafat786@gmail.com',
   'Phone_No' : '7200722173',
   'Address' : 'Palani',
   'Qualifications' : ['B.E','HSC','SSLC'],
   'Work Experience' : '9_Months',
   'Role' : 'Oracle Developer',
   },

   {'Name' : 'Muthu kumar V ',
   'E-mail' : 'muthukumar@gmail.com',
   'Phone_No' : '1234567890',
   'Address' : 'Palani',
   'Qualifications' : ['B.E','HSC','SSLC'],
   'Work Experience' : '9_Months',
   'Role' : 'Oracle Developer',
}

]
  
// resume[0].cgpa= '7.8' // adding new element to object
// resume[0].Address= 'dindigul' // replace existing element
// console.log(resume[0])
// console.log(resume[0].Qualifications)
------------------------------------------
//                        //for loop
 for(i=0;i<resume[0].Qualifications.length;i++) 
 {   console.log(resume[0].Qualifications[i]) 
 }  
-------------------------------------------
             //for in  is to print  for 'key' &'value' ,normal for loop aditii[index] is looping 
// how many entries are ther e, v can find
for (var aditi in resume) // i gave aditi ,bacause for my clarity
{
  console.log(aditi,resume[aditi].Name) Or
    console.log(resume[aditi].Name)

}
-------------------------------------------------------
    //for of is for 'value' , with th help of - index is looping 
for (var aditi of resume) // i gave noorul ,bacause for my clarity
{

  console.log(aditi.Name)

}
-------------------------------------------------------------
var i = 0

resume.forEach( (a) => {
   
   console.log(resume[i].Name)
   i++
});

                       
                                
                                Windows
Window object [Browser Object Model (BOM)] − It is the outmost element of the object hierarchy.
Inside the object , there will be a document
It displays the contents of the webpage
It is the very first object that is loaded in the browser.
We can access the window from the window only. i.e. window.window
the window object is part of only BOM , and not DOM
 syntax
 window.propertyname
example :
 window.innerHeight : will return the height of the content area of the browser

                                Document

Document object[ DOM - Document Object Model ] − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page.
After loading of the window, a document of html will get ready to loaded
 All the tags, elements with attributes in HTML are part of the document.
 We can access the document from a window using the window. document
 The document is a part of both DOM and BOM
  syntax
  document.propertyname
   example 
       document.title :  will return the title of the document

                                SCREEN  
The window object also has a screen object with properties describing the physical display

screen properties width and height are the full screen
Screen is a small information object about physical screen dimensions . 
It can be used to display screen width, height, colorDepth, pixelDepth etc. 
It is not mandatory to write window prefix with screen object. It can be written without window prefix.
---------------------------------------------------


                                     My own resume in JSON format

var resume = {
   'Name' : 'Noorul Ameen J',
   'E-mail' : 'noorularafat786@gmail.com',
   'Phone_No' : '7200722173',
   'Address' : 'Palani',
   'Qualification' : 'B.E Mechanical',
   'Work Experience' : '9_Months',
   'Role' : 'Oracle Developer',
}
console.log(resume.Name)  now it give my Name 
