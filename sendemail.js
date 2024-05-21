document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      sendMail();
    });
  });

  let result = "";

  function getValue() {
    // Define an array of checkbox IDs and their corresponding label text
    const checkboxes = [
        { id: 'social-media-management', label: 'Social Media Management' },
        { id: 'content-creation', label: 'Content Creation' },
        { id: 'digital-marketing', label: 'Digital Marketing' },
        { id: 'web-design', label: 'Web Design' },
        { id: 'seo', label: 'SEO' }
    ];

    // Initialize an empty result string
 
    // Loop through each checkbox definition
    checkboxes.forEach(function(checkbox) {
        // Get the checkbox element by its ID
        let element = document.getElementById(checkbox.id);

        // If the checkbox is checked, append its label to the result string
        if (element && element.checked) {
            result += checkbox.label + ", ";
        }
    });

    // Trim the trailing comma and space if present
    result = result.trim();
    if (result.endsWith(",")) {
        result = result.slice(0, -1);
    }

    // Return the result string
    return result;
}

// Example usage
// Call getValue function and log the result to console
console.log(result);

  function sendMail() {
    (function(){
      emailjs.init("ZRrE12Cq3aSRCXPHc");
    })();
  
    var templateParams = {
      name: document.getElementById("name") ? document.getElementById("name").value : "",
      email: document.getElementById("email") ? document.getElementById("email").value : "",
      message: document.getElementById("message") ? document.getElementById("message").value : "",
      companyName: document.getElementById("company-name") ? document.getElementById("company-name").value : "",
      phone: document.getElementById("phone") ? document.getElementById("phone").value : "",
      linkedinProfile: document.getElementById("linkedin-profile") ? document.getElementById("linkedin-profile").value : "",
      businessWebsite: document.getElementById("business-website") ? document.getElementById("business-website").value : "",
      businessInstagram: document.getElementById("business-instagram") ? document.getElementById("business-instagram").value : "",
      businessLinkedin: document.getElementById("business-linkedin") ? document.getElementById("business-linkedin").value : "",
      businessFacebook: document.getElementById("business-facebook") ? document.getElementById("business-facebook").value : "",
      
      services: result,

      goals: document.querySelector("textarea[required]") ? document.querySelector("textarea[required]").value : ""
    };
  
    console.log(templateParams); // For debugging
  
    var service_id = "service_6woqwko";
    var template_id = "template_ehgu849";
    emailjs.send(service_id, template_id, templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status);
        alert("Email sent successfully");
      }, function(error) {
        console.log('FAILED...', error);
        alert("Email failed to send");
      });
  }
  