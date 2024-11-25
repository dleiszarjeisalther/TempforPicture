
(function() {
    let actionPerformed = false;


    var submitButton = Array.from(document.querySelectorAll('button, input[type="submit"]'))
        .find(el => el.innerText === 'Submit all and finish' || el.value === 'Submit all and finish');
    
    if (submitButton) {
        submitButton.click();
        actionPerformed = true;
    } else {
        alert('Button with text "Submit all and finish" not found.');
    }


    const continueButton = Array.from(document.querySelectorAll('button'))
        .find(el => el.textContent.trim() === 'Continue your attempt');
    if (continueButton) {
        continueButton.click();
        actionPerformed = true;
    }


    const pogiako = document.getElementById('single_button673963e2177346');
    if (pogiako) {
        pogiako.click();
        actionPerformed = true;
    }


    const primaryButton = document.querySelector('button.btn.btn-primary[id*="single_button673"]');
    if (primaryButton) {
        primaryButton.click();
        actionPerformed = true;
    }


    const inputButton = document.getElementById('id_submitbutton');
    if (inputButton && inputButton.value === 'Start attempt') {
        inputButton.click();
        actionPerformed = true;
    }


    const lagarizz = document.querySelector('.btn.btn-primary[data-action="save"]');
    if (lagarizz) {
        lagarizz.click();
        actionPerformed = true;
    } else {
        alert("Button with 'save' action not found.");
    }


    if (!actionPerformed) {
        alert('No actions were performed.');
    }

    const questionsAndAnswers = [
        {
		question: "Which method is used to draw a rectangle in Java's Graphics class?",
		answer: "drawRect()"
	}, {
		question: "Which method is used to draw an oval shape in Java?",
		answer: "drawOval()"
	}, {
		question: "How can you perform custom painting on a Swing component?",
		answer: "Override the paintComponent() method in JPanel"
	}, {
		question: "Which of the following is true about the drawString() method in the Graphics class?",
		answer: "It displays text at a specified location on the component."
	}, {
		question: "What happens if you call the repaint() method in a component?",
		answer: "The component's paint method will be invoked automatically."
	}, {
		question: "How do you enable anti-aliasing in Java's Graphics2D class?",
		answer: "Use the setRenderingHint() method with RenderingHints.KEY_ANTIALIASING"
	}, {
		question: "What is the purpose of the Graphics class in Java?",
		answer: "To perform drawing operations on components"
	}, {
		question: "What is the starting point of the coordinate system in Java's Graphics class?",
		answer: "Top-left corner of the component"
	}, {
		question: "How can you set the color used for drawing in the Graphics class?",
		answer: "By calling the setColor() method with a Color object"
	}, {
		question: "What is the primary advantage of using the Graphics2D class over the Graphics class?",
		answer: "It provides methods for advanced graphics operations such as transformations and anti-aliasing."
	}, {
		question: "Which method is used to draw a rectangle in Java's Graphics class?",
		answer: "drawRect()"
	}, {
		question: "Which method is used to draw an oval shape in Java?",
		answer: "drawOval()"
	}, {
		question: "How can you perform custom painting on a Swing component?",
		answer: "Override the paintComponent() method in JPanel"
	}, {
		question: "Which of the following is true about the drawString() method in the Graphics class?",
		answer: "It displays text at a specified location on the component."
	}, {
		question: "What happens if you call the repaint() method in a component?",
		answer: "The component's paint method will be invoked automatically."
	}, {
		question: "How do you enable anti-aliasing in Java's Graphics2D class?",
		answer: "Use the setRenderingHint() method with RenderingHints.KEY_ANTIALIASING"
	}, {
		question: "What is the purpose of the Graphics class in Java?",
		answer: "To perform drawing operations on components"
	}, {
		question: "What is the starting point of the coordinate system in Java's Graphics class?",
		answer: "Top-left corner of the component"
	}, {
		question: "How can you set the color used for drawing in the Graphics class?",
		answer: "By calling the setColor() method with a Color object"
	}, {
		question: "What is the primary advantage of using the Graphics2D class over the Graphics class?",
		answer: "It provides methods for advanced graphics operations such as transformations and anti-aliasing."
	}, {
		question: "What does the drawLine() method in the Graphics class do?",
		answer: "Draws a line between two specified points"
	}, {
		question: "What is the role of the paintComponent() method in Java Swing?",
		answer: "To draw custom graphics on a component"
	}, {
		question: "How can you draw a filled rectangle using the Graphics class?",
		answer: "Use the fillRect() method"
	}, {
		question: "How can you clear the drawing area in a Java Swing component?",
		answer: "Fill the area with the background color using fillRect()"
	}, {
		question: "Which method in the Graphics class is used to draw an arc?",
		answer: "drawArc()"
	}, {
		question: "How can you create smooth edges on shapes in Java graphics?",
		answer: "Use the setRenderingHint() method with anti-aliasing enabled"
	}, {
		question: "How can you rotate a shape using the Graphics2D class?",
		answer: "Use the rotate() method to specify the rotation angle"
	}, {
		question: "Which of the following statements is true about custom painting in Java?",
		answer: "The paintComponent() method is used to customize how a component is rendered."
	}, {
		question: "What does the setColor() method in the Graphics class do?",
		answer: "Specifies the color used for subsequent drawing operations"
	}, {
		question: "How do you draw text on a component using the Graphics class?",
		answer: "Call the drawString() method with the text and coordinates"
	}, {
		question: "Which method would you use to draw a filled shape?",
		answer: "fillRect(), fillOval(), or fillPolygon()"
	}, {
		question: "What is the purpose of the fillRect() method in Java's Graphics class?",
		answer: "To draw and fill a rectangle with the current color"
	}, {
		question: "How do you draw a square using the drawRect() method in Java?",
		answer: "Specify equal width and height for the rectangle"
	}, {
		question: "What is the function of the setColor() method in the Graphics class?",
		answer: "To set the color used for subsequent drawing operations"
	}, {
		question: "Which parameter is NOT required for the drawRect() method?",
		answer: "Color"
	}, {
		question: "Which method is used to draw a filled circle in Java?",
		answer: "fillOval()"
	}, {
		question: "How can you draw a triangle in Java?",
		answer: "Use the drawPolygon() method with three coordinate points"
	}, {
		question: "What does the drawOval() method do in Java?",
		answer: "Draws the outline of an oval within a specified bounding rectangle"
	}, {
		question: "How can you draw a regular polygon, such as a hexagon, using Java's Graphics class?",
		answer: "Use the drawPolygon() method with an array of x and y coordinates"
	}, {
		question: "What does the drawLine() method in Java do?",
		answer: "Draws a straight line between two specified points"
	}, {
		question: "Which of the following methods would you use to draw text on a component?",
		answer: "drawString()"
	}, {
		question: "What is the purpose of the fillRect() method?",
		answer: "To fill a rectangular area with the current drawing color"
	}, {
		question: "What is required to draw a triangle using Java's Graphics class?",
		answer: "Use the drawPolygon() method with three points"
	}, {
		question: "What must be true for the drawOval() method to draw a perfect circle?",
		answer: "The bounding rectangle's width and height must be equal"
	}, {
		question: "What happens when you use the fillPolygon() method with an array of points?",
		answer: "A filled shape is created based on the specified points"
	}, {
		question: "Which method allows you to draw connected lines to form a closed shape?",
		answer: "drawPolygon()"
	}, {
		question: "Which method would you use to draw a filled rectangle?",
		answer: "fillRect()"
	}, {
		question: "How can you draw a square using Java's Graphics class?",
		answer: "Use the fillRect() method with equal width and height"
	}, {
		question: "How can you set the color used for drawing shapes?",
		answer: "Use the setColor() method with a Color object"
	}, {
		question: "What does the drawLine() method do in Java?",
		answer: "Draws a line between two specified points"
	}, {
		question: "What does the drawArc() method require to draw a partial circle?",
		answer: "Width, height, and the number of degrees for the arc"
	}, {
		question: "What does the drawRoundRect() method do?",
		answer: "Draws a rectangle with rounded corners"
	}, {
		question: "Which method would you use to set the current drawing color in Java?",
		answer: "setColor()"
	}, {
		question: "What is the difference between drawOval() and fillOval() in Java?",
		answer: "drawOval() draws the outline, while fillOval() fills the oval with color"
	}, {
		question: "How do you ensure a shape is redrawn correctly when the window is resized?",
		answer: "Override the paintComponent() method"
	}, {
		question: "Which method would you use to draw a filled triangle?",
		answer: "fillPolygon()"
	}, {
		question: "What happens if you call the setColor() method before drawing a shape?",
		answer: "The shape is drawn with the specified color"
	}, {
		question: "How can you create a filled shape with any number of sides?",
		answer: "Use the fillPolygon() method with an array of x and y coordinates"
	}, {
		question: "How can you change the appearance of a shape's edges to be smoother?",
		answer: "Enable anti-aliasing using the Graphics2D class"
	}, {
		question: "How can you draw a regular hexagon in Java?",
		answer: "Use the drawPolygon() method with six coordinate points"
	}, {
		question: "How do you ensure that the drawn shapes are updated correctly when the window is resized?",
		answer: "Use the paintComponent() method and call super.paintComponent(g)"
	}, {
		question: "What is the effect of calling fillPolygon() in the Graphics class?",
		answer: "It fills a polygon with the current drawing color"
	}, {
		question: "What does the drawPolygon() method do in Java?",
		answer: "Draws a series of connected lines to form a closed shape"
	}, {
		question: "How can you draw a rectangle with rounded corners in Java?",
		answer: "Use the drawRoundRect() method"
	}, {
		question: "How can you draw multiple connected lines to create a complex shape?",
		answer: "Use the drawPolygon() method"
	}, {
		question: "How can you draw a shape with a gradient color in Java?",
		answer: "Use the Graphics2D class with GradientPaint"
	}, {
		question: "Which method is used to draw a filled oval?",
		answer: "fillOval()"
	}, {
		question: "What does the drawArc() method do in Java?",
		answer: "Draws an arc of an ellipse defined by a bounding rectangle"
	}, {
		question: "How do you draw a filled square using Java's Graphics class?",
		answer: "Use the fillRect() method with equal width and height"
	}, {
		question: "How can you set the current color for drawing shapes in Java?",
		answer: "Call the setColor() method with a Color object"
	}, {
		question: "What is the result of calling the drawRect() method in the Graphics class?",
		answer: "It draws the outline of a rectangle."
	}, {
		question: "What is the main function of the Graphics class in Java?",
		answer: "Creating and drawing graphics on components"
	}, {
		question: "What happens if you call super.paintComponent(g) in a custom paintComponent() method?",
		answer: "It clears the drawing area before custom painting."
	}, {
		question: "How can you change the drawing color in Java's Graphics class?",
		answer: "Use the setColor() method with a Color object."
	}, {
		question: "How do you perform custom painting in Java Swing?",
		answer: "Override the paintComponent() method of JPanel"
	}, {
		question: "What does the setRenderingHint() method in Graphics2D do?",
		answer: "It enables features such as anti-aliasing and text smoothing."
	}, {
		question: "Which method in Graphics is used to draw text?",
		answer: "drawString()"
	}, {
		question: "What is the coordinate origin in Java's Graphics class?",
		answer: "Top-left corner of the component"
	}, {
		question: "How can you add smooth edges to drawn shapes in Java?",
		answer: "Enable anti-aliasing using the Graphics2D class"
	}, {
		question: "How do you set the font for drawing text in Java's Graphics class?",
		answer: "Use the setFont() method"
	}, {
		question: "What is the difference between drawRect() and fillRect() methods in Java?",
		answer: "drawRect() draws the border, while fillRect() fills the rectangle with color."
	}, {
		question: "Which of the following is NOT a valid method in the Graphics class?",
		answer: "drawRectangle()"
	}, {
		question: "Which method would you use to draw a line between two points?",
		answer: "drawLine()"
	}, {
		question: "What does overriding the paintComponent() method in a JPanel allow you to do?",
		answer: "Customize the drawing of the component"
	}, {
		question: "What does anti-aliasing do in computer graphics?",
		answer: "It improves the quality of images by smoothing jagged edges."
	}, {
		question: "How can you ensure that custom painting is updated correctly when a component is resized?",
		answer: "Use the paintComponent() method and call super.paintComponent(g)"
	}, {
		question: "What is the purpose of the fillOval() method in Java?",
		answer: "To fill the oval with the current drawing color"
	}, {
		question: "How can you rotate a shape using the Graphics2D class?",
		answer: "Use the rotate() method with an angle value"
	}, {
		question: "What happens when you call repaint() on a Java component?",
		answer: "The component's paintComponent() method is called to redraw it."
	}, {
		question: "How can you draw a circle using the drawOval() method?",
		answer: "Use equal width and height for the bounding rectangle."
	},{ question: "Which year is often considered the birth of modern cloud computing?", answer: "2006" },
{ question: "Which cloud computing service model provides virtualized computing resources over the internet?", answer: "IaaS" },
{ question: "What is one of the key benefits that drove the early adoption of cloud computing?", answer: "Scalability and flexibility" },
{ question: "What was the first widely adopted cloud computing service?", answer: "Amazon Web Services (AWS)" },
{ question: "Who coined the term \"cloud computing\"?", answer: "Google" },
{ question: "Which cloud computing service model offers ready-to-use software applications hosted in the cloud?", answer: "SaaS" },
{ question: "Which cloud computing service model allows developers to build, test, and deploy applications without worrying about underlying infrastructure?", answer: "PaaS" },
{ question: "What is cloud computing?", answer: "On-demand delivery of IT resources over the internet" },
{ question: "Which cloud computing service model provides applications over the internet on a subscription basis?", answer: "Software as a Service (SaaS)" },
{ question: "Which of the following is an example of SaaS?", answer: "Microsoft Office 365" },
{ question: "With a traditional file server, you must purchase additional disk drives to accommodate the extra space.", answer: "Scalable" },
{ question: "Cloud-based computing typically is less expensive than traditional computing", answer: "Cost effective" },
{ question: "Which of the following is an example of a public cloud provider?", answer: "AWS (Amazon Web Services)" },
{ question: "Why is cloud computing considered important for modern businesses?", answer: "It improves scalability and flexibility" },
{ question: "Rather than owning their own computing infrastructure or date centers, companies can rent access to anything from applications to storage from a___.", answer: "Cloud Service Provider" },
{ question: "What is one of the primary advantages of cloud computing?", answer: "Reduced maintenance overhead" },
{ question: "What is one of the benefits of cloud-based networking?", answer: "Centralized management" },
{ question: "You get to consume the services while someone else takes care of making sure that the services run properly.", answer: "Hassle free" },
{ question: "The classic cloud computing model, where users can access a large pool of computing power over the internet.", answer: "Cloud Nine" },
{ question: "Most often referred to as software as a Service (SaaS), fully functional application cab ne delivered via the cloud.", answer: "Applications" },
{ question: "Which aspect of cloud computing security focuses on protecting data from unauthorized access during transmission?", answer: "Data encryption" },
{ question: "When you use IaaS, your purchasing raw computing power that’s accessible via the cloud.", answer: "Infrastructure" },
{ question: "What is an advantage of a private cloud deployment?", answer: "Enhanced customization and control" },
{ question: "Which of the following is a disadvantage of cloud computing?", answer: "Data security concerns" },
{ question: "What is a key benefit of using a hybrid cloud model?", answer: "Reduced complexity in management" },
{ question: "What year did Amazon Web Services (AWS) launch, marking a significant milestone in cloud computing history?", answer: "2006" },
{ question: "The delivery of on-demand computing services.", answer: "Cost" },
{ question: "This class of service refers to providers that give you access to a remote virtual operating platform in which you can build your own application.", answer: "Platform" },
{ question: "What does IaaS stand for?", answer: "Infrastructure as a Service" },
{ question: "Which cloud computing benefit is related to the ability to quickly recover data and applications after a disaster?", answer: "Disaster recovery" },
{ question: "What feature of cloud computing enables users to access applications and data from any device with an internet connection?", answer: "Mobility" },
{ question: "Which benefit of cloud computing allows businesses to pay only for the resources they use?", answer: "Cost-efficiency" },
{ question: "What does elasticity refer to in cloud computing?", answer: "Ability to rapidly scale resources up or down" },
{ question: "What is a primary advantage of cloud computing for businesses?", answer: "Reduced maintenance overhead" },{ question: "The core layer in hierarchical network design is primarily responsible for:", answer: "Fast transport of data across the network" },
{ question: "Which of the following is NOT a phase of network design?", answer: "Maintenance" },
{ question: "Network design involves:", answer: "Both hardware and software" },
{ question: "Which network design approach allows for easier troubleshooting and maintenance?", answer: "Hierarchical design" },
{ question: "What does a network designer consider when designing a network?", answer: "All of the choices" },
{ question: "Which design methodology focuses on dividing network tasks into modules to simplify design?", answer: "Hierarchical design" },
{ question: "The three basic layers of hierarchical network design are:", answer: "Core, Distribution, Access" },
{ question: "Which layer in hierarchical network design connects end devices to the network?", answer: "Access" },
{ question: "What is a key advantage of hierarchical network design?", answer: "Simplicity and scalability" },
{ question: "What is the primary goal of network design?", answer: "All of the choices" },
{ question: "What is an example of physical security in network design?", answer: "Securing server rooms with locks" },
{ question: "A network that is too complex or difficult to maintain cannot function effectively and efficiently.", answer: "Manageability" },
{ question: "What is a fundamental goal in network design?", answer: "Scalability" },
{ question: "In hierarchical network design it interconnects the smaller local networks.", answer: "Distribution" },
{ question: "Network design includes considerations of:", answer: "Both hardware and software" },
{ question: "What is the primary purpose of gathering network requirements?", answer: "To understand the needs of users and applications" },
{ question: "Which design methodology emphasizes iterative development?", answer: "Agile" },
{ question: "It’s a feature that must be designed into the network, not added on after the network is complete.", answer: "Availability" },
{ question: "Why is scalability an important consideration in network design?", answer: "To handle future growth" },
{ question: "Which type of topology is characterized by each device having a dedicated connection to a central hub?", answer: "Star" },
{ question: "Which of the following does not belong to hierarchical design model three basic layers.", answer: "Distribution Layer" },
{ question: "Which step comes first in the network design process?", answer: "Planning the network" },
{ question: "Refers to the planning of the implementation of a computer network infrastructure.", answer: "Network Topology" },
{ question: "A network designed for availability is one that delivers consistent, reliable performance 24 hours a day, 7 days a week.", answer: "Availability" },
{ question: "What is the primary objective of network design?", answer: "Optimize network performance" },
{ question: "Which phase of network design involves understanding the organization's needs and goals?", answer: "Planning" },
{ question: "What does network topology design primarily involve?", answer: "Determining how devices are interconnected" },
{ question: "Scalable network designs can grow to include new user groups and remote sites and can support new applications without impacting the level of service delivered to existing users.", answer: "Manageability" },
{ question: "Is a core service that is required for every network to run smoothly.", answer: "DHCP" },
{ question: "Which security measure protects network devices from unauthorized access?", answer: "Biometric access control" },
{ question: "Which network topology connects each device to a central point?", answer: "Star" },
{ question: "When building a good network, what should be considered to ensure future growth?", answer: "Network segmentation" },
{ question: "Which of the following is a fundamental design goal in network design?", answer: "Scalability" },
{ question: "What is a characteristic of a bus topology?", answer: "Requires more cabling than other topologies" },
{ question: "Which component is crucial for achieving high availability in network design?", answer: "Redundancy" },{ question: "Which of the following correctly declares a variable in JavaScript?", answer: "var name = \"John\";" },
{ question: "Which of the following is NOT a valid JavaScript data type?", answer: "Element" },
{ question: "Which of the following keywords is used to declare a constant in JavaScript?", answer: "const" },
{ question: "What is the output of console.log(2 + 2);?", answer: "4" },
{ question: "In JavaScript, which of these functions displays a pop-up alert box?", answer: "alert()" },
{ question: "What is the result of 5 + \"5\" in JavaScript?", answer: "\"55\"" },
{ question: "To create a button that displays \"Button clicked!\" when clicked, which code is correct?", answer: "<button onclick=\"alert('Button clicked!')\">Click me</button>" },
{ question: "What will typeof \"Hello\" return in JavaScript?", answer: "string" },
{ question: "Which method can be used to round a number to the nearest integer in JavaScript?", answer: "Math.round()" },
{ question: "Which symbol is used for comments in JavaScript?", answer: "//" },
{ question: "What will Boolean(1) return in JavaScript?", answer: "true" },
{ question: "Which of the following is a JavaScript data type?", answer: "Number" },
{ question: "The correct syntax for creating a function in JavaScript is:", answer: "function myFunc() { }" },
{ question: "In JavaScript, arrays are represented by:", answer: "[]" },
{ question: "The console.log() function is used to:", answer: "Display messages in the console" },
{ question: "Which keyword creates a block-scoped variable in JavaScript?", answer: "Both B and C" },
{ question: "JavaScript was primarily created for:", answer: "Web interactivity" },
{ question: "What will console.log(\"10\" + 5); output?", answer: "105" },
{ question: "To declare a variable that cannot be changed, you use:", answer: "const" },
{ question: "Which symbol is used for assignment in JavaScript?", answer: "=" },
{ question: "Which method logs output to the console in JavaScript?", answer: "console.log()" },
{ question: "What does typeof null return in JavaScript?", answer: "object" },
{ question: "JavaScript is primarily executed on the:", answer: "Client-side" },
{ question: "How do you write a single-line comment in JavaScript?", answer: "// comment" },
{ question: "Which loop type is not available in JavaScript?", answer: "repeat" },
{ question: "What does alert(\"Hello World\"); do?", answer: "Displays an alert box with \"Hello World\"" },
{ question: "What is the output of console.log(5 + \"5\");?", answer: "55" },
{ question: "Which method rounds a number down to the nearest integer?", answer: "Math.floor()" },
{ question: "What does typeof \"Hello\" return in JavaScript?", answer: "string" },
{ question: "What keyword is used to create a loop that repeats as long as a condition is true?", answer: "while" },
{ question: "Which operator is used to assign a value to a variable in JavaScript?", answer: "=" },
{ question: "What will Boolean(0) return in JavaScript?", answer: "false" },
{ question: "Which keyword is used to exit a loop in JavaScript?", answer: "break" },
{ question: "The method toUpperCase() is used to:", answer: "Convert a string to uppercase" },
{ question: "Which of the following methods is used to combine two arrays in JavaScript?", answer: "concat()" },
{ question: "In JavaScript, the null keyword signifies:", answer: "A variable with no value" },
{ question: "What is the correct way to check if a variable x is not equal to 10 in JavaScript?", answer: "x != 10" },
{ question: "Which function is used to parse a string to an integer in JavaScript?", answer: "parseInt()" },
{ question: "Which of the following is a valid way to define a function in JavaScript?", answer: "function myFunction() { }" },
{ question: "How can you declare an array in JavaScript?", answer: "var arr = [1,2,3];" },{ question: "Which of these represents a method in an object?", answer: "fullName: function() { return this.firstName + \" \" + this.lastName; }" },
{ question: "Which method creates a new instance of an object in JavaScript?", answer: "new Object()" },
{ question: "How can you add a new property to an existing object?", answer: "object.newProperty = value;" },
{ question: "What is the purpose of the delete keyword in JavaScript?", answer: "To remove a property from an object" },
{ question: "What does person.name return if person = {name: \"Alice\", age: 25};?", answer: "\"Alice\"" },
{ question: "What is the output of console.log(person.fullName()); if person = {firstName: \"John\", lastName: \"Doe\", fullName: function() { return this.firstName + \" \" + this.lastName; }}?", answer: "John Doe" },
{ question: "What is the output of console.log(person[\"age\"]); if person = {name: \"Alice\", age: 30};?", answer: "30" },
{ question: "How can you check if a property exists in a JavaScript object?", answer: "if (property in object)" },
{ question: "In the context of JavaScript objects, what is a constructor function?", answer: "A function that creates new objects" },
{ question: "How do you access the value of a property in a JavaScript object?", answer: "Both object[property] and object.property" },
{ question: "What is the output of console.log(person[\"age\"]); if person = {name: \"Alice\", age: 30};?", answer: "30" },
{ question: "What does Object.assign() do?", answer: "Combines properties of objects into a new object" },
{ question: "How would you delete a property from an object?", answer: "delete object.property;" },
{ question: "How can you check if a property exists in an object?", answer: "if (property in object)" },
{ question: "Which function converts an object to a JSON string?", answer: "JSON.stringify()" },
{ question: "An object in JavaScript is:", answer: "A collection of key-value pairs" },
{ question: "What does person.name return if person = {name: \"John\", age: 25};?", answer: "John" },
{ question: "Which keyword allows access to an object's properties within its methods?", answer: "this" },
{ question: "Which operator is used to access a property using a variable key?", answer: "[]" },
{ question: "Which of the following is a valid way to create an object in JavaScript?", answer: "var obj = {name: \"Alice\", age: 30};" },
{ question: "What will const car = {brand: \"Toyota\"}; car.brand = \"Honda\"; result in?", answer: "Honda" },
{ question: "Which method is used to add a method to an object?", answer: "By assigning a function to an object property" },
{ question: "What is the return type of typeof {}?", answer: "object" },
{ question: "In JavaScript, methods within objects are:", answer: "Properties that contain functions" },
{ question: "How do you create a nested object in JavaScript?", answer: "{ property: { key: value } }" },
{ question: "In JavaScript, objects can have properties and:", answer: "Functions" },
{ question: "What will console.log(person.name.length); display if person = {name: \"Alice\"};?", answer: "5" },
{ question: "Which syntax correctly accesses the value of an object's property?", answer: "object.property" },
{ question: "Which statement correctly adds a new property to an existing object?", answer: "object.newProperty = value;" },
{ question: "What is Object.keys(obj) used for?", answer: "To get all property names in obj" },
{ question: "In a JavaScript object, properties are also known as:", answer: "Attributes" },
{ question: "If an object method returns undefined, what does that mean?", answer: "The method didn’t return a value" },
{ question: "How can you assign an object property using a variable as the key?", answer: "object[variable] = value;" },
{ question: "Which function merges two objects?", answer: "Object.assign()" },
{ question: "What will console.log(car.brand); display if var car = {brand: \"Toyota\"};?", answer: "Toyota" },
{ question: "What is the Object.freeze() method used for?", answer: "To make an object immutable" },
{ question: "What will console.log(Object.keys({a: 1, b: 2}).length); output?", answer: "2" },
{ question: "Which of these is an example of a nested object?", answer: "Both var person = {name: {first: \"Alice\", last: \"Doe\"}, age: 25}; and var person = {name: \"Alice\", age: {years: 25, months: 6}};" },
{ question: "Which method is used to convert an object to a JSON string?", answer: "JSON.stringify()" },
{ question: "What is Object.keys(obj) used for?", answer: "To retrieve all properties in obj" },{ question: "Sa anong aspeto ng lipunan tumutok ang mga dula noong panahon ng Hapon?", answer: "Pagiging aliwan sa kabila ng hirap ng digmaan" },
{ question: "Ano ang ipinapakita ng mga tema ng panitikang Pilipino sa panahon ng Hapon, tulad ng pagmamahal sa kalikasan at pananampalataya?", answer: "Pagsalamin sa mga pamantayan at pagpapahalaga ng kulturang Hapon." },
{ question: "Bakit naging prominente ang wikang Tagalog sa panitikang Pilipino noong panahon ng Hapon?", answer: "Ipinagbawal ng mga Hapon ang paggamit ng Ingles." },
{ question: "Bakit maaaring ituring na “Gintong Panahon” ng maikling kuwento ang panahong ito sa panitikang Pilipino?", answer: "Nagkaroon ng malayang paglalahad sa sariling wika ng karanasan at damdamin ng Pilipino" },
{ question: "Bakit mahalaga ang naging papel ng Liwayway noong panahon ng Hapon?", answer: "Nagbigay ito ng espasyo para sa mga panitikang Pilipino sa sariling wika." },
{ question: "Ano ang pangunahing dahilan kung bakit kakaunti ang naisulat na nobela noong panahon ng Hapon?", answer: "May krisis sa papel at kahirapan sa pamumuhay" },
{ question: "Alin sa mga sumusunod na anyo ng panitikan ang naging pinakamaunlad noong panahon ng Hapon?", answer: "Maikling kuwento" },
{ question: "Paano nakaimpluwensya si Ildefonso Santos sa panitikan noong panahon ng Hapon?", answer: "Binuhay niya ang tanaga, isang uri ng tradisyunal na tula." },
{ question: "Ano ang pangunahing layunin ng pagbabawal sa mga aklat na nasa Ingles at ang pagtutok sa katutubong wika sa panitikan?", answer: "Para mapanatili ang kulturang Pilipino at malayo sa kanluraning impluwensya" },
{ question: "Paano naiiba ang haiku sa tanaga sa mga tula ng panahong ito?", answer: "Ang haiku ay may tatlong taludtod, habang ang tanaga ay may apat na taludtod na may sukat at tugma." },
{ question: "Alin sa mga sumusunod ang naging tanyag na uri ng aliwan sa panahon ng Hapon?", answer: "Musika" },
{ question: "Anong tema ang kadalasang isinusulat ng mga manunulat noong panahon ng Hapon?", answer: "Pagiging masipag at Makabayan" },
{ question: "Bakit marami sa mga artista sa pelikula ang lumipat sa teatro noong panahon ng Hapon?", answer: "Dahil sa kakulangan ng pelikula at pagsasara ng mga sinehan" },
{ question: "Anong anyo ng panitikan ang bihirang isinulat dahil sa krisis sa papel?", answer: "Nobela" },
{ question: "Bakit kakaunti lamang ang naisulat na nobela noong panahon ng Hapon?", answer: "Dahil sa krisis sa papel at kahirapan sa pamumuhay" },
{ question: "Anong lingguhang babasahin ang patuloy na lumabas sa ilalim ng pamamahala ni Kin-Ichi Ishikawa?", answer: "Liwayway" },
{ question: "Alin sa mga sumusunod ang naging epekto ng pagbabawal ng Hapon sa mga aklat na nasa Ingles?", answer: "Lumakas ang paggamit ng mga katutubong wika sa panitikan" },
{ question: "Anong katangian ang dala ng kultura ng Hapon na naging tema sa panitikan?", answer: "Pagiging masipag" },
{ question: "Ano ang pangunahing layunin ng pagbabawal ng Hapon sa mga aklat na Ingles?", answer: "Upang hindi mabahiran ng kanluraning impluwensya ang panitikang Pilipino" },
{ question: "Anong klase ng akda ang pinapaboran ng Surian ng Wikang Pambansa noong panahon ng Hapon?", answer: "Maikling kuwento na sumasalamin sa karanasan ng Pilipino" },
{ question: "Sino ang kauna-unahang Pilipinong sumulat ng soap opera sa radyo", answer: "Liwayway A. Arceo" },
{ question: "Anong sukat ang sinusunod sa bawat taludtod ng tanaga?", answer: "7-7-7-7" },
{ question: "Ano ang pangunahing tema ng mga panitikan sa panahon ng Hapon?", answer: "Buhay sa lalawigan at pagmamahal sa kalikasan" },
{ question: "Sino ang manunulat na kilala sa kanyang dula na \"Sa Pula, Sa Puti\"?", answer: "Francisco Soc Rodrigo" },
{ question: "Ano ang ipinapakita ng mga tema ng panitikan sa panahon ng Hapon?", answer: "Pagmamahal sa kalikasan at pagsisikap" },
{ question: "Alin sa mga sumusunod ang uri ng tulang binuhay ni Ildefonso Santos at may apat na taludtod na may tig-pitong pantig?", answer: "Tanaga" },
{ question: "Aling publikasyon ang patuloy na lumabas noong Panahon ng Hapon sa ilalim ng pangangasiwa ni Kin-Ichi Ishikawa?", answer: "Liwayway" },
{ question: "Sino ang manunulat na nakilala sa kanyang dula na “Sa Pula, Sa Puti” at naging senador ng Pilipinas?", answer: "Francisco Soc Rodrigo" },
{ question: "Ano ang itinuturing na pinakamaunlad na anyo ng panitikan noong Panahon ng Hapon?", answer: "Maikling Kuwento" },
{ question: "Bakit kakaunti ang naisulat na nobela noong Panahon ng Hapon?", answer: "Dahil sa kakulangan ng papel at hirap sa pamumuhay" },{ question: "What is a key advantage of using a file server in a business environment?", answer: "Centralized storage management" },
{ question: "Which type of server is responsible for managing user access and permissions within a network?", answer: "Domain controller" },
{ question: "Which server type is primarily used for hosting websites and web applications?", answer: "Web server" },
{ question: "Which server type is specifically designed for managing email communications?", answer: "Mail server" },
{ question: "What is a disadvantage of using a mail server for email communications?", answer: "Vulnerable to network attacks" },
{ question: "What is the main function of a file server?", answer: "To store and manage files for users on a network" },
{ question: "What is the primary purpose of a server in a network environment?", answer: "To manage network traffic" },
{ question: "Which server type is designed specifically to manage user access and permissions within a network?", answer: "Domain controller" },
{ question: "Example of a popular mail server software is:", answer: "Microsoft Exchange Server" },
{ question: "Which of the following is NOT typically a characteristic of server hardware compared to desktop hardware?", answer: "High-end graphics card" },
{ question: "What is a server in the context of computer networks?", answer: "A device that provides resources or services to other computers on a network" },
{ question: "Example of a file server operating system is:", answer: "Windows Server" },
{ question: "Which of the following servers is used primarily for sending, receiving, and storing email messages?", answer: "Mail server" },
{ question: "What role does a DHCP server play in a network?", answer: "It assigns IP addresses to devices automatically" },
{ question: "What does a print server do?", answer: "It manages and controls printing tasks for multiple printers" },
{ question: "Provide centralized disk storage that can be conveniently shared by client computers on the network.", answer: "File Server" },
{ question: "What is the primary function of a domain controller in a Windows network?", answer: "To control access and security policies within a domain" },
{ question: "Example of a license server software is:", answer: "FlexNet Publisher" },
{ question: "Example of a deployment server software is:", answer: "Ansible" },
{ question: "Which server type is responsible for translating domain names into IP addresses?", answer: "DNS server" },
{ question: "What network device typically connects servers to a local area network (LAN)?", answer: "Switch" },
{ question: "What is the purpose of a deployment server?", answer: "To distribute software installations across multiple devices" },
{ question: "What is the primary role of a firewall in a network?", answer: "To control network traffic and enforce security policies" },
{ question: "It is a server that handles the network’s email needs. It configured with email server software, such as Microsoft Exchange Server.", answer: "Mail Server" },
{ question: "Is a core service that is required for every network to run smoothly.", answer: "DHCP" },
{ question: "Example of an update server software is:", answer: "WSUS (Windows Server Update Services)" },
{ question: "What does an update server typically do?", answer: "It distributes software patches and updates to client computers" },
{ question: "With a traditional file server, you must purchase additional disk drives to accommodate the extra space.", answer: "Scalable" },
{ question: "What protocol is commonly used for securely connecting to servers remotely?", answer: "SSH" },
{ question: "What does DNS stand for in relation to network infrastructure?", answer: "Domain Name System" },
{ question: "What is the primary function of a virtualization management platform?", answer: "To manage virtual machines (VMs) and their configurations" },
{ question: "Which service is responsible for automatically assigning IP addresses to devices in a network?", answer: "DHCP" },
{ question: "How do you typically connect servers within a network to ensure communication?", answer: "By using physical cables" },
{ question: "Example of a DNS server software is:", answer: "BIND (Berkeley Internet Name Domain)" },
{ question: "Example of a virtualization management platform is:", answer: "VMware vSphere" },{ question: "Which parameter would you adjust to change the size of an arc?", answer: "The width and height of the bounding rectangle" },
{ question: "How can you draw an arc that appears as a closed sector?", answer: "Use the fillArc() method with any positive arc angle" },
{ question: "Which method would you use to create an outline of an arc in Java?", answer: "drawArc()" },
{ question: "How can you make an arc start from the top of a circle?", answer: "Set the start angle to 0 degrees" },
{ question: "What happens if you use negative values for the arc angle in the drawArc() method?", answer: "The arc is drawn in a counterclockwise direction" },
{ question: "What happens if you set the arc angle to 0 degrees in the drawArc() method?", answer: "No arc will be displayed" },
{ question: "What does the fillArc() method do if the arc angle is set to 180 degrees?", answer: "Fills a semicircle" },
{ question: "How can you draw a quarter-circle using the fillArc() method?", answer: "Set the arc angle to 90 degrees" },
{ question: "How can you create a full circle using the fillArc() method?", answer: "Set the arc angle to 360 degrees" },
{ question: "What does setting the start angle to 90 degrees in the drawArc() method do?", answer: "Starts the arc from the right side of the circle" },
{ question: "Which of the following will draw a complete circle using the drawArc() method?", answer: "Set the arc angle to 360 degrees" },
{ question: "How can you create a segment that resembles a slice of pie?", answer: "Use the fillArc() method with a positive arc angle" },
{ question: "How can you adjust the size of an arc in Java?", answer: "Change the width and height of the bounding rectangle" },
{ question: "What is required to draw an arc that starts from the bottom-left of a bounding rectangle?", answer: "Set the start angle to 270 degrees" },
{ question: "What effect does setting the arc angle to 360 degrees have in the drawArc() method?", answer: "Draws a full circle" },
{ question: "How can you draw an arc that covers three-quarters of a circle?", answer: "Use the drawArc() method with a 270-degree arc angle" },
{ question: "How can you ensure the smooth appearance of arcs?", answer: "Enable anti-aliasing in the Graphics2D class" },
{ question: "What must be specified to draw an arc in Java?", answer: "x, y coordinates, width, height, start angle, and arc angle" },
{ question: "How can you create a pie chart using the fillArc() method?", answer: "Draw multiple filled arcs with different start and arc angles" },
{ question: "What does a start angle of 90 degrees represent in a typical arc drawing?", answer: "The arc starts from the right side" },
{ question: "What does an arc angle of 180 degrees represent in the drawArc() method?", answer: "A semicircle" },
{ question: "How do you close an arc to create a filled sector?", answer: "Use the fillArc() method with a positive arc angle" },
{ question: "What is the significance of the start angle in the drawArc() method?", answer: "It determines where the arc begins, measured in degrees" },
{ question: "How can you create a filled semicircle?", answer: "Set the arc angle to 180 degrees and use fillArc()" },
{ question: "What does a negative arc angle do in the drawArc() method?", answer: "Draws the arc counterclockwise" },
{ question: "What does the drawArc() method do?", answer: "Draws an arc outline based on specified parameters" },
{ question: "What will happen if you draw an arc with an arc angle greater than 360 degrees?", answer: "The arc will still cover a full circle" },
{ question: "What happens if the start angle is set to 0 degrees in the drawArc() method?", answer: "The arc starts from the right side of the circle" },
{ question: "How can you draw a filled arc using Java's Graphics class?", answer: "Use the fillArc() method" },
{ question: "Which method would you use to draw an arc outline rather than filling it?", answer: "drawArc()" },
{ question: "In which situation would you use the fillArc() method?", answer: "To create a pie chart with filled sections" },
{ question: "How can you make an arc appear as a closed shape?", answer: "Use the fillArc() method with a specified start and arc angle" },
{ question: "How can you draw a semicircle using the drawArc() method?", answer: "Set the arc angle to 180 degrees" },
{ question: "How does the fillArc() method differ from drawArc()?", answer: "fillArc() fills the area covered by the arc, while drawArc() only outlines it" },
{ question: "Which method is used to draw a filled arc?", answer: "fillArc()" },
{ question: "What does the drawArc() method in Java do?", answer: "Draws the outline of an arc" },
{ question: "What parameters are required by the drawArc() method?", answer: "x, y coordinates, width, height, start angle, and arc angle" },
{ question: "Which of the following will draw a full circle using the drawArc() method?", answer: "Set the arc angle to 360 degrees" },
{ question: "What does the arc angle parameter control in the drawArc() method?", answer: "The amount of the arc to be drawn, in degrees" },
{ question: "What does the start angle parameter in the drawArc() method specify?", answer: "The position where the arc begins, measured in degrees" },{ question: "What effect does border-collapse: separate have on a table?", answer: "Displays separate borders for cells" },
{ question: "Which property allows you to add space between table cells?", answer: "border-spacing" },
{ question: "To align text inside table cells, which property is used?", answer: "text-align" },
{ question: "The list-style-type value circle displays which type of bullet?", answer: "Hollow circle" },
{ question: "Which CSS property would you use to change the appearance of a list to use numbers?", answer: "list-style-type" },
{ question: "Which CSS property controls the spacing around table cells?", answer: "border-spacing" },
{ question: "Which value would you use to display uppercase Roman numerals in ordered lists?", answer: "upper-roman" },
{ question: "To prevent gaps between table cells, which property is applied?", answer: "border-collapse" },
{ question: "What does the padding property do when applied to a table cell?", answer: "Adds space between the cell content and its borders" },
{ question: "What does list-style-type: none do?", answer: "Removes the bullets or numbers from the list" },
{ question: "What does the text-align property do when applied to table headers?", answer: "Aligns text to the left" },
{ question: "To style the borders of table cells, which CSS property is used?", answer: "border" },
{ question: "To center a table within its container, which property would you use?", answer: "margin: auto" },
{ question: "Which of the following is a valid value for list-style-type?", answer: "decimal" },
{ question: "To merge table cell borders, which property is used?", answer: "border-collapse" },
{ question: "How do you apply padding to the top of a table cell?", answer: "padding-top" },
{ question: "Which CSS property is used to style the appearance of list bullets?", answer: "list-style-type" },
{ question: "Which list-style-type value is used to remove numbering or bullets from a list?", answer: "none" },
{ question: "If you want to add space between list items, which property would you use?", answer: "margin" },
{ question: "What is the default alignment for text in table headers (<th>)?", answer: "Center" },
{ question: "What happens when you apply list-style-type: none to an unordered list?", answer: "Removes the bullets" },
{ question: "If you want a numbered list, which value do you use for list-style-type?", answer: "decimal" },
{ question: "Which of the following is NOT a valid value for list-style-type?", answer: "inline" },
{ question: "What does list-style-type: square do to an unordered list?", answer: "Changes the list bullets to squares" },
{ question: "What does text-align: left do to table cells?", answer: "Aligns text to the left" },
{ question: "To apply padding to the cells in a table, which CSS property is used?", answer: "padding" },
{ question: "How would you change the background color of table headers (<th>)?", answer: "background-color" },
{ question: "To apply a light gray background to table headers, which code is correct?", answer: "th { background-color: #f2f2f2 }" },
{ question: "If you want to prevent border spacing between table cells, which CSS rule would you apply?", answer: "border-collapse: collapse" },
{ question: "What is the effect of setting margin-left: 20px on a table element?", answer: "Removes the table border" },
{ question: "Which property changes the background of <th> to a light gray?", answer: "background-color: #f2f2f2" },
{ question: "Which CSS rule will indent an ordered list by 20 pixels?", answer: "padding-left: 20px" },
{ question: "To apply padding inside table cells, which CSS property is correct?", answer: "padding" },
{ question: "What effect does width: 100% have on a table?", answer: "It sets the width of the table to 100% of the parent container" },
{ question: "What happens when border: 1px solid black is applied to table cells?", answer: "Borders are displayed around each cell" },
{ question: "What is the default bullet type for an unordered list?", answer: "Disc" },
{ question: "Which list-style-type value is used to display Roman numerals in ordered lists?", answer: "lower-roman" },
{ question: "How do you set the left padding for table cells?", answer: "padding-left" },
{ question: "What does the padding-left property do when applied to a list?", answer: "Adds padding to the left of each list item" },
{ question: "Which property is used to merge the borders of adjacent table cells?", answer: "border-collapse" },{ question: "What does overflow: auto do when applied to an element with floated content?", answer: "Clears the float and ensures the container wraps around the floated elements" },
{ question: "What happens when you apply position: fixed to an element?", answer: "The element remains in the same position on the viewport" },
{ question: "Which property is used to take an element out of the normal flow and position it in relation to its nearest ancestor?", answer: "position: absolute" },
{ question: "How do floated elements behave in relation to normal flow?", answer: "They are taken out of the normal flow" },
{ question: "When using float: left for an image, which CSS property ensures other content flows around the image?", answer: "float" },
{ question: "In CSS normal flow, inline elements:", answer: "Flow horizontally" },
{ question: "Which CSS rule ensures an element stays fixed even when the page is scrolled?", answer: "position: fixed" },
{ question: "What is the default positioning value in CSS?", answer: "static" },
{ question: "Which CSS positioning value moves an element relative to its original position?", answer: "relative" },
{ question: "What does position: absolute do?", answer: "Positions the element relative to the nearest positioned ancestor" },
{ question: "Which CSS property is used to create space between an element and its neighboring elements?", answer: "margin" },
{ question: "Which of the following positioning methods is relative to the nearest ancestor with a non-static position?", answer: "absolute" },
{ question: "The clear property in CSS:", answer: "Prevents an element from being affected by floated elements" },
{ question: "To make an element always appear on top of others, which property is used?", answer: "z-index" },
{ question: "Which value of the position property is used to position an element in relation to its normal flow without affecting other elements?", answer: "relative" },
{ question: "What does overflow: auto do?", answer: "Adds a scrollbar when content overflows" },
{ question: "What does the clear: both property do?", answer: "Forces an element to clear any left and right floated elements" },
{ question: "What does position: sticky do?", answer: "Fixes the element in place when it reaches a specific scroll position" },
{ question: "What happens to an element with position: absolute?", answer: "It is positioned relative to its nearest ancestor with a non-static position" },
{ question: "When you apply float: left to an image, what happens?", answer: "The image is aligned to the left, and other elements wrap around it" },
{ question: "What is the purpose of float: right in CSS?", answer: "Align an element to the right and allow other content to flow around it" },
{ question: "Which CSS property can be used to take an element out of normal flow and position it?", answer: "position" },
{ question: "Which value of position is the default for all HTML elements?", answer: "static" },
{ question: "Which property would you use to keep an element fixed at the top of the viewport when scrolling?", answer: "position: fixed" },
{ question: "Which CSS property is used to control the stacking order of positioned elements?", answer: "z-index" },
{ question: "What is the default behavior of block elements in normal flow?", answer: "Stack vertically" },
{ question: "What does position: relative do to an element?", answer: "Moves it relative to its original position" },
{ question: "The z-index property works only on elements with which type of position?", answer: "fixed and absolute" },
{ question: "The overflow: hidden property:", answer: "Prevents content from spilling out of an element" },
{ question: "Which of the following values can be used with the position property to make an element stay in the same place on the screen, even when scrolling?", answer: "fixed" },
{ question: "What does clear: both do to an element in relation to floated content?", answer: "Prevents the element from being affected by floating content on both sides" },
{ question: "Which of the following is NOT part of the four main positioning types in CSS?", answer: "flexible" },
{ question: "To stack elements above or below one another using CSS, which property is used?", answer: "z-index" },
{ question: "How do you center a block element horizontally in CSS?", answer: "margin: auto;" },
{ question: "Which property would you use to float an image to the right side of the page?", answer: "float: right" },
{ question: "Which property can be used to control the stacking order of positioned elements?", answer: "z-index" },
{ question: "Which value of position allows an element to be positioned relative to the viewport?", answer: "fixed" },
{ question: "When you want an element to stick to the top of the page as you scroll, which CSS value do you use?", answer: "position: sticky" },
{ question: "What happens to an element when you apply position: relative?", answer: "It is moved relative to its original position" },
{ question: "What is the primary function of position: absolute?", answer: "Positions the element relative to the nearest positioned ancestor" },{ question: "What does $age = NULL; do in PHP?", answer: "Sets $age to no value" },
{ question: "Which function is used to define constants in PHP?", answer: "define()" },
{ question: "What will echo \"This is \" . \"PHP\"; output?", answer: "This is PHP" },
{ question: "How do you define a string variable in PHP?", answer: "$name = \"John\"; and $name = 'John';" },
{ question: "What will echo 5 * 5; display in PHP?", answer: "25" },
{ question: "What will the following code output? $name = \"John\"; echo \"Hello, $name!\";", answer: "Hello, John!" },
{ question: "How do you define a floating-point variable in PHP?", answer: "$price = 20.5;" },
{ question: "Which of the following is a Boolean value in PHP?", answer: "1 and 0" },
{ question: "What will the following code output? $x = 15; echo $x + 5;", answer: "20" },
{ question: "Which of the following is a valid PHP constant name?", answer: "PI" },
{ question: "Which operator is used for concatenation in PHP?", answer: "." },
{ question: "What does echo \"Hello World\"; do in PHP?", answer: "Outputs \"Hello World\" to the browser" },
{ question: "Which of the following is a correct PHP variable name?", answer: "$name" },
{ question: "In PHP, define(\"PI\", 3.14); is used to:", answer: "Define a constant" },
{ question: "What is the result of 3 + \"5\" in PHP?", answer: "8" },
{ question: "In PHP, which of the following is a logical operator?", answer: "&&" },
{ question: "What will $x = 10; echo $x; output in PHP?", answer: "10" },
{ question: "What does the == operator do in PHP?", answer: "Checks if values are equal" },
{ question: "What will print \"PHP Rocks!\"; output in PHP?", answer: "PHP Rocks!" },
{ question: "Which PHP function is used to display data in a readable format, particularly for arrays?", answer: "print_r()" },
{ question: "Which operator is used for string concatenation in PHP?", answer: "." },
{ question: "What will $x = 10; echo $x; output?", answer: "10" },
{ question: "In PHP, variables that are declared outside of a function are called:", answer: "Global variables" },
{ question: "PHP variables are denoted by which symbol?", answer: "$" },
{ question: "In PHP, what will echo 5 * \"10\"; output?", answer: "50" },
{ question: "How do you create an empty array in PHP?", answer: "$arr = array();" },
{ question: "In PHP, $x === 10 is true if:", answer: "$x is 10 and of integer type" },
{ question: "What does echo do in PHP?", answer: "Outputs text to the screen" },
{ question: "In PHP, print and echo are used for:", answer: "Outputting data" },
{ question: "What is the purpose of the == operator in PHP?", answer: "Compare values for equality" },
{ question: "Which function can be used to determine the data type of a variable in PHP?", answer: "gettype()" },
{ question: "What does the PHP function empty() check?", answer: "If a variable is empty or zero" },
{ question: "How do you add 1 to a variable $count in PHP?", answer: "$count += 1;" },
{ question: "Which keyword is used to define a constant in PHP?", answer: "define()" },
{ question: "Which of the following is a valid way to declare a PHP variable?", answer: "$name = \"John\";" },
{ question: "PHP scripts are executed on the:", answer: "Server-side" },
{ question: "Which of the following functions returns the length of a string in PHP?", answer: "strlen()" },
{ question: "Which function is used to output structured information about a variable for debugging purposes?", answer: "print_r()" },
{ question: "What does isset() do in PHP?", answer: "Checks if a variable is set and not NULL" },
{ question: "The PHP statement define(\"PI\", 3.14); is used to:", answer: "Define a constant" },{ question: "Alin sa mga sumusunod ang hindi kabilang sa mga hamon ng multikulturalismo?", answer: "Pantay na pagtrato sa lahat ng etnikong grupo" },
{ question: "Ano ang ibig sabihin ng \"rehiyonal na etnosentrismo\"?", answer: "Pagpapahalaga sa sariling rehiyon bilang mas mataas kaysa iba" },
{ question: "Alin sa mga sumusunod ang pangunahing layunin ng multikulturalismo?", answer: "Bigyang-pantay na pagkilala sa lahat ng etnikong grupo" },
{ question: "Ano ang tinutukoy ng \"Kristiyano sa Kapatagan\"?", answer: "Pangunahing pangkat na bumubuo ng mayorya sa Pilipinas" },
{ question: "Ano ang pangunahing layunin ng konsepto ng \"bansang estado\"?", answer: "Magkaroon ng iisang kultura, lahi, at wika" },
{ question: "Saang aspeto ng lipunan madalas napag-iiwanan ang mga pangkat minorya?", answer: "Pulitika, edukasyon, at ekonomiya" },
{ question: "Ano ang pangunahing hamon na kinakaharap ng mga pangkat minorya sa Pilipinas?", answer: "Marginalisasyon at diskriminasyon" },
{ question: "Ano ang posibleng solusyon upang maibsan ang marginalisasyon ng mga pangkat minorya?", answer: "Pagtanggap at pagsasakatuparan ng multikulturalismo" },
{ question: "Ano ang pangunahing dahilan ng rehiyonalismo sa Pilipinas?", answer: "Malakas na pagkilala ng mga Pilipino sa kanilang rehiyon bago pa sa pagiging Pilipino" },
{ question: "Alin sa mga sumusunod ang hindi kabilang sa mga pangunahing katutubong pangkat sa Pilipinas?", answer: "Cebuano" },
{ question: "Alin sa mga sumusunod ang hindi kabilang sa mga pangkat minorya sa Pilipinas?", answer: "Cebuano" },
{ question: "Ano ang layunin ng multikulturalismo sa lipunan?", answer: "Pantay na pagtrato sa lahat ng kultura" },
{ question: "Anong rehiyon sa Pilipinas ang may matibay na pagkakaisa ng mga Muslim?", answer: "Mindanao" },
{ question: "Ano ang tumutukoy sa ideolohiyang tumatanggap sa pagkakaiba-iba ng kultura?", answer: "Multikulturalismo" },
{ question: "Ano ang pangunahing suliranin na nararanasan ng mga pangkat minorya sa Pilipinas?", answer: "Marginalisasyon" },
{ question: "Anong rehiyon sa Pilipinas ang itinuturing na may mas matibay na pagkakaisa ng mga Muslim?", answer: "Mindanao" },
{ question: "Ano ang pangunahing grupo ng mga katutubo sa Luzon?", answer: "Ifugao" },
{ question: "Alin sa mga sumusunod ang nagiging hadlang sa pagkakaisa ng mga Pilipino?", answer: "Rehiyonalismo" },
{ question: "Ano ang tawag sa mga grupong karaniwang napag-iiwanan sa maraming aspeto ng buhay?", answer: "Minorya" },
{ question: "Ano ang tawag sa pananaw na mas mataas ang sariling rehiyon kumpara sa iba?", answer: "Rehiyonal na Etnosentrismo" },
{ question: "Ano ang pangunahing layunin ng panitikan na may kinalaman sa sitwasyon ng mga pangkat minorya?", answer: "Ipakita ang mga karanasan ng mga pangkat na nakakaranas ng diskriminasyon" },
{ question: "Ano ang pangunahing hamon na kinakaharap ng mga Lumad?", answer: "Marginalisasyon" },
{ question: "Ano ang karaniwang epekto ng rehiyonal na diskriminasyon?", answer: "Paglala ng hindi pagkakapantay-pantay" },
{ question: "Ano ang ideolohiyang nagbibigay-diin sa pantay na pagtrato at pagkilala sa lahat ng etnikong grupo?", answer: "Multikulturalismo" },
{ question: "Alin sa mga sumusunod ang maaaring solusyon sa marginalisasyon ng mga minorya?", answer: "Multikulturalismo" },
{ question: "Ano ang layunin ng multikulturalismo?", answer: "Igalang ang pagkakaiba-iba ng kultura" },
{ question: "Ano ang kahulugan ng \"multikultural\"?", answer: "Kalagayan ng pagkakaroon ng maraming kultura sa loob ng isang estado" },
{ question: "Ano ang dapat bigyang-pansin upang mabuo ang isang makatarungang lipunan?", answer: "Pagtanggap sa pagkakaiba-iba ng kultura" },
{ question: "Ano ang itinuturing na pangunahing wika sa Pilipinas?", answer: "Tagalog" },
{ question: "Alin sa mga sumusunod ang pangunahing grupo ng mayorya sa Pilipinas?", answer: "Kristiyano sa Kapatagan" },
{ question: "Alin sa mga sumusunod ang layunin ng bansang estado?", answer: "Magkaroon ng iisang wika, kultura, at lahi" },
{ question: "Saang bahagi ng Pilipinas maraming tribu ng Lumad matatagpuan?", answer: "Mindanao" },
{ question: "Ano ang pangunahing hamon sa pagtatag ng iisang bansa sa Estados Unidos at Canada?", answer: "Kasaysayan ng iba't ibang katutubo at migrasyon" },
{ question: "Ano ang pangunahing problema ng mga katutubo sa Pilipinas?", answer: "Diskriminasyon at marginalisasyon" },
{ question: "Ano ang dahilan ng pagkakaroon ng multikultural na lipunan sa Canada?", answer: "Kasaysayan ng migrasyon" },{ question: "In a Binary Search Tree (BST), where are values less than a node's value located?", answer: "In the left subtree." },
{ question: "What is the first step in inserting a new value into a BST?", answer: "Start at the root and compare the value." },
{ question: "Which of the following is true about binary trees?", answer: "Each node can have at most two children." },
{ question: "How many edges does a tree with n nodes have?", answer: "n - 1" },
{ question: "What happens when deleting a node with two children in a BST?", answer: "The node's value is replaced with its in-order predecessor or successor." },
{ question: "In a tree, what is a leaf node?", answer: "A node that does not have any children." },
{ question: "What is the degree of a node in a tree?", answer: "The number of children it has." },
{ question: "What does the height of a tree represent?", answer: "The longest path from the root to a leaf node." },
{ question: "Which traversal method yields the sorted order of elements in a BST?", answer: "In-order Traversal" },
{ question: "What is the primary characteristic of a tree?", answer: "It consists of nodes connected by edges." },
{ question: "What does the depth of a node in a tree indicate?", answer: "The longest path from the root to that node." },
{ question: "What is the purpose of evaluating an expression tree?", answer: "To calculate the value of the expression represented by the tree." },
{ question: "Which of the following is NOT a common operation on a binary tree?", answer: "Evaluation" },
{ question: "What is the purpose of a binary search tree?", answer: "To manage and organize data efficiently." },
{ question: "What is the result of traversing a BST in in-order?", answer: "The nodes are visited in sorted order." },
{ question: "What is a characteristic of a connected graph?", answer: "There is a path between any two nodes." },
{ question: "What is an expression tree?", answer: "A binary tree used to represent mathematical expressions." },
{ question: "What is the primary difference between operations on a binary tree and expressions on a binary tree?", answer: "The purpose of the tree." },
{ question: "Which of the following describes a binary search tree?", answer: "A tree that maintains a specific ordering of values." },
{ question: "In an expression tree, what do the internal nodes represent?", answer: "Operators" },
{ question: "What is the purpose of checking the balance of a tree?", answer: "To ensure the tree is efficiently organized." },
{ question: "What is the difference between a subtree and a tree?", answer: "A subtree is a tree formed by a node and its descendants." },
{ question: "What is the result of converting an infix expression to postfix notation using an expression tree?", answer: "The expression is represented in postfix notation." },
{ question: "What is the purpose of traversing a binary tree?", answer: "To visit all nodes in a specific order." },
{ question: "What is the result of deleting a node with no children in a BST?", answer: "The node is simply removed." },

{ question: "In a Full Binary Tree, how many children can each node have?", answer: "Either zero or two" },
{ question: "What operation is not part of BST operations?", answer: "Modification" },
{ question: "What is a key feature of a Balanced Binary Tree?", answer: "The height of the left and right subtrees of every node differ by at most one" },
{ question: "What defines a Perfect Binary Tree?", answer: "Every internal node has exactly two children and all leaves are at the same depth" },
{ question: "What is a Binary Search Tree (BST)?", answer: "A tree where each node has at most two children" },
{ question: "What color nodes are used in a Red-Black Tree?", answer: "Red and Black" },
{ question: "What is a primary use of B-Trees?", answer: "Database and file systems" },
{ question: "What characteristic defines a Complete Binary Tree?", answer: "All levels fully filled except possibly the last level" },
{ question: "Where is data stored in a B+ Tree?", answer: "Leaf nodes only" },
{ question: "Who are the inventors of the AVL Tree?", answer: "Adelson-Velsky and Landis" },{ question: "What is a key characteristic of a Full Binary Tree?", answer: "Each node has either zero or two children" },
{ question: "What is the defining property of a Red-Black Tree regarding adjacent nodes?", answer: "No red nodes can be adjacent" },
{ question: "Which operation in a BST involves finding a node with a given key?", answer: "Search" },
{ question: "What is an advantage of using a Balanced Binary Tree?", answer: "Prevents degeneration into a linear structure" },
{ question: "In a Complete Binary Tree, how are the nodes at the last level filled?", answer: "Left to right" },
{ question: "Which binary tree is commonly used for indexing and searching large datasets in databases?", answer: "B+ Tree" },
{ question: "Which type of binary tree ensures that the height difference between left and right subtrees is at most one?", answer: "AVL Tree" },
{ question: "Which traversal method involves visiting the root node first?", answer: "Pre-order traversal" },
{ question: "Which traversal method involves visiting the left subtree, then the root node, and finally the right subtree?", answer: "In-order traversal" },
{ question: "In a BST, how is the left child of a node compared to the node?", answer: "Smaller than the node" },
{ question: "What is the main benefit of using a Balanced Binary Tree?", answer: "Ensures efficient operations" },
{ question: "Which type of binary tree is named after its inventors Adelson-Velsky and Landis?", answer: "AVL Tree" },
{ question: "What is the insertion operation in a BST meant to maintain?", answer: "BST property" },
{ question: "How is data organized in a B-Tree?", answer: "Sorted order" },
{ question: "What structure does a Red-Black Tree prevent by maintaining balance?", answer: "Linear structure" },{ question: "What is the first step in the Quick Sort algorithm?", answer: "Select a pivot element" },
{ question: "Which advanced sorting algorithm is particularly useful for sorting arrays with a large range of integer keys?", answer: "Radix Sort" },
{ question: "In C++, what header file is required to use the standard sort() function?", answer: "algorithm" },
{ question: "In Heap Sort, which data structure is primarily used?", answer: "Heap" },
{ question: "What is a significant advantage of using Merge Sort over Quick Sort?", answer: "It is stable" },
{ question: "In Merge Sort, what is the main process that combines two sorted arrays?", answer: "Merging" },
{ question: "Which advanced sorting algorithm works by repeatedly building a heap from an array?", answer: "Heap Sort" },
{ question: "In Quick Sort, what is the term for the element used to partition the array?", answer: "Pivot" },
{ question: "Which sorting algorithm is especially suitable for linked lists?", answer: "Merge Sort" },
{ question: "What is the main advantage of advanced sorting algorithms like Quick Sort and Merge Sort?", answer: "Efficiency" },
{ question: "What type of sorting algorithm is Radix Sort considered?", answer: "Non-comparative" },
{ question: "Which sorting algorithm is known for its divide-and-conquer strategy?", answer: "Quick Sort" },
{ question: "What is the average-case time complexity of Heap Sort?", answer: "O(n log n)" },
{ question: "What is the worst-case time complexity of Quick Sort?", answer: "O(n^2)" },
{ question: "Which of the following is a stable sorting algorithm?", answer: "Merge Sort" },
{ question: "What is the main disadvantage of Quick Sort compared to Merge Sort?", answer: "It is not stable" },
{ question: "In C++, which function is used to sort an array or vector using Quick Sort by default?", answer: "sort()" },
{ question: "Which sorting algorithm is commonly used in database indexing and searching large datasets?", answer: "Bucket Sort" },
{ question: "Which of the following sorting algorithms is used for external sorting?", answer: "Merge Sort" },
{ question: "In Merge Sort, what is the space complexity in addition to the input array?", answer: "O( n)" },
{ question: "What is the primary purpose of the heapify process in Heap Sort?", answer: "To build a heap from the array" },
{ question: "Which sorting algorithm processes digits of numbers from least significant to most significant?", answer: "Radix Sort" },
{ question: "What is a key characteristic of a stable sorting algorithm?", answer: "It preserves the relative order of equal elements" },{ question: "Which sorting algorithm is most effective for sorting large datasets?", answer: "Quick Sort" },
{ question: "Which sorting algorithm is known for its worst-case time complexity of O(n log n)?", answer: "Quick Sort" },
{ question: "Which sorting algorithm is most effective for sorting large datasets?", answer: "Quick Sort" },{ question: "What is the key feature of responsive design?", answer: "Using flexible layouts that adapt to different screen sizes" },
{ question: "What is the purpose of \"breakpoints\" in responsive design?", answer: "To adapt layouts to specific screen sizes" },
{ question: "What is the primary focus of Mobile HCI?", answer: "Enhancing user interaction with mobile devices" },
{ question: "Which of the following best represents the \"mobile-first\" design approach?", answer: "Prioritizing the design of mobile interfaces before scaling up" },
{ question: "Which interaction gesture is commonly used to zoom in on mobile interfaces?", answer: "Pinch" },
{ question: "What is the \"touch target\" in touchscreen interaction design?", answer: "The area on the screen designed to detect touch inputs" },
{ question: "What is the recommended minimum size for a touch target to ensure usability?", answer: "44x44 pixels" },
{ question: "What is the main advantage of fluid grids in responsive design?", answer: "They automatically adjust to fit screen dimensions." },
{ question: "Which principle of Mobile HCI is concerned with minimizing the number of user actions to complete a task?", answer: "Efficiency" },
{ question: "Which CSS technique is fundamental to implementing responsive design?", answer: "Flexbox and media queries" },
{ question: "A responsive design layout should prioritize:", answer: "Content hierarchy and readability across all devices" },
{ question: "How does haptic feedback enhance touchscreen interaction?", answer: "By providing tactile confirmation of user actions" },
{ question: "In responsive design, what is the benefit of \"mobile-first\" development?", answer: "Prioritizing essential content for mobile users" },
{ question: "Why is touch interaction considered a core component of Mobile HCI?", answer: "It allows for more natural and intuitive user experiences." },
{ question: "Which factor is most critical for improving usability in touchscreen interfaces?", answer: "Ensuring clear visual hierarchy and spacing" },
{ question: "What principle ensures that users receive immediate feedback for their actions on mobile interfaces?", answer: "Responsiveness" },
{ question: "Which principle ensures that a design feels familiar and easy to navigate?", answer: "Consistency" },
{ question: "Which of the following is a challenge in designing touchscreen interactions?", answer: "Avoiding accidental touches" },
{ question: "Why is the \"tap\" gesture often prioritized in mobile designs?", answer: "It is the most natural interaction for users." },
{ question: "Which of the following is NOT a responsive design practice?", answer: "Designing fixed pixel widths" },{ question: "How does \"feedback\" improve touchscreen interaction design?", answer: "It provides users with confirmation of their actions." },
{ question: "What role do personas play in designing mobile interfaces?", answer: "They represent typical users and their needs." },
{ question: "Which of these practices best supports responsive design?", answer: "Prioritizing flexible, grid-based designs" },
{ question: "What is the significance of \"thumb zones\" in touchscreen design?", answer: "They indicate where gestures are most naturally performed." },
{ question: "In mobile HCI, why is it essential to test designs across multiple devices?", answer: "To verify compatibility with various screen sizes and platforms" },
{ question: "Analyzing user behavior to improve app responsiveness across devices involves:", answer: "Understanding screen resolution trends" },
{ question: "What is an example of exploring how users interact with touch gestures?", answer: "Comparing scroll speed preferences across devices" },
{ question: "Which Mobile HCI principle ensures that user interfaces adapt seamlessly to different screen sizes?", answer: "Responsive design" },
{ question: "A mobile game uses haptic feedback to enhance user interaction. This innovation demonstrates which principle?", answer: "Multimodal interaction design" },
{ question: "A mobile app has buttons too small to tap accurately on a smartphone. What principle is most violated?", answer: "Touchscreen interaction principles" },
{ question: "Which statement applies the principle of responsive design?", answer: "Websites should dynamically adjust to varying screen resolutions." },
{ question: "What type of exploration would help identify issues with double-tap gestures on touchscreens?", answer: "Observing touchscreen heatmaps" },
{ question: "An app that uses pinch-to-zoom gestures most effectively explores which touchscreen interaction element?", answer: "Multitouch capability" },
{ question: "A designer tests various layouts to determine which provides the best readability on different smartphones. This is an example of:", answer: "Conducting user research for responsive design" },
{ question: "A designer creates a prototype to explore how users navigate with swipe gestures. This step belongs to which phase of Mobile HCI?", answer: "Exploration of touchscreen interactions" },{ question: "What is the purpose of the fillPolygon() method in Java?", answer: "To fill the area inside a polygon with the current drawing color" },
{ question: "How can you make a polygon appear as a filled shape?", answer: "Call the fillPolygon() method with appropriate coordinates" },
{ question: "How do you ensure a polygon is closed when using the drawPolygon() method?", answer: "Java automatically closes the shape by connecting the last point to the first" },
{ question: "What happens if you provide negative coordinates to the drawPolygon() method?", answer: "The polygon will be drawn outside the visible area" },
{ question: "How can you draw a hexagon using the Graphics class?", answer: "Use the drawPolygon() method with six coordinate pairs" },
{ question: "Which method is used to draw the outline of a polygon?", answer: "drawPolygon()" },
{ question: "Which of the following can be used to create complex shapes with multiple sides?", answer: "drawPolygon()" },
{ question: "What is the effect of calling fillPolygon() with fewer points than needed for a polygon?", answer: "The method will throw an IllegalArgumentException" },
{ question: "What does the number of points parameter in the fillPolygon() method specify?", answer: "The number of vertices used to create the polygon" },
{ question: "How can you fill a star shape in Java?", answer: "Use the fillPolygon() method with the star's vertices" },
{ question: "Which method would you use to create a filled polygon?", answer: "fillPolygon()" },
{ question: "What happens if the number of x-coordinates does not match the number of y-coordinates in the drawPolygon() method?", answer: "The method will throw an IllegalArgumentException" },
{ question: "Which method should be used to ensure that a polygon's edges are smooth?", answer: "Use anti-aliasing with the Graphics2D class" },
{ question: "What does the drawPolygon() method in Java do?", answer: "Draws an outline of a polygon based on the specified coordinates" },
{ question: "How do you specify a triangle using the drawPolygon() method?", answer: "Provide arrays with three x-coordinates and three y-coordinates" },
{ question: "How can you draw a pentagon using Java's Graphics class?", answer: "Use the drawPolygon() method with five coordinate pairs" },
{ question: "Which parameter is NOT required for the fillPolygon() method?", answer: "The color of the polygon" },
{ question: "How can you create a closed shape using the drawPolygon() method?", answer: "The shape is automatically closed by connecting the last point to the first" },
{ question: "How can you define the vertices of a polygon in Java?", answer: "Use arrays of x and y coordinates to specify the points" },
{ question: "What is the result of calling fillPolygon() with overlapping coordinates?", answer: "An error message" },
{ question: "How do you specify the vertices of a polygon in Java?", answer: "By providing arrays of x and y coordinates" },
{ question: "Which of the following is required to draw a filled polygon?", answer: "Provide arrays of x and y coordinates and call the fillPolygon() method" },
{ question: "What does the fillPolygon() method do when called with overlapping coordinates?", answer: "Fills the polygon, possibly creating overlapping sections" },
{ question: "How can you create a filled shape with more than four sides in Java?", answer: "Use the fillPolygon() method with appropriate arrays" },
{ question: "What does setting negative coordinates in the drawPolygon() method do?", answer: "Draws the polygon off-screen" },
{ question: "What does the fillPolygon() method do in Java?", answer: "Draws a filled shape based on the specified points" },
{ question: "How can you draw a pentagon using the Graphics class?", answer: "Use the drawPolygon() method with five pairs of x and y coordinates" },
{ question: "What does the number of points parameter in the fillPolygon() method specify?", answer: "The number of vertices used to create the polygon" },
{ question: "Which method should be used to create a polygon that appears filled on the screen?", answer: "fillPolygon()" },
{ question: "What happens if you call the drawPolygon() method with coordinates outside the visible area?", answer: "The polygon is drawn off-screen and will not be visible" },
{ question: "How can you make a polygon appear with smooth edges in Java?", answer: "Enable anti-aliasing in the Graphics2D class" },
{ question: "Which of the following is true about the Graphics class and drawing polygons?", answer: "It supports drawing both filled and unfilled polygons" },
{ question: "How can you draw a hexagon using Java's Graphics class?", answer: "Use the drawPolygon() method with six pairs of coordinates" },
{ question: "How can you ensure that a polygon is drawn as a closed shape?", answer: "Java automatically connects the last point to the first in drawPolygon()" },
{ question: "Which method would you use to create a polygon with curved sides?", answer: "fillPolygon() combined with curves using the Graphics2D class" },
{ question: "What is the effect of calling drawPolygon() with the same first and last coordinates?", answer: "The shape is drawn as a closed polygon" },
{ question: "How do you create a filled triangle using Java's Graphics class?", answer: "Call the fillPolygon() method with arrays for the three vertices" },
{ question: "How can you draw a polygon with overlapping sides?", answer: "Provide arrays of coordinates that cross over one another" },
{ question: "What happens if the number of x-coordinates does not match the number of y-coordinates in the fillPolygon() method?", answer: "The method will throw an IllegalArgumentException" },
{ question: "How can you draw a complex shape like a star in Java?", answer: "Use the fillPolygon() method with the star's vertices defined in arrays" }


    ];
    
    questionsAndAnswers.forEach(qa => {
        const questionElem = Array.from(document.querySelectorAll(".qtext")).find(el => el.textContent.trim() === qa.question);
        if (questionElem) {
            const answerElem = Array.from(questionElem.parentNode.querySelectorAll("input[type=radio]")).find(input => {
                const labelElem = input.nextElementSibling.querySelector('.flex-fill');
                return labelElem && labelElem.textContent.trim() === qa.answer;
            });
            if (answerElem) {
                answerElem.click();
                actionPerformed = true;
            }
        }
    });

    const nextNav = document.getElementById('mod_quiz-next-nav');
    if (nextNav) {
        nextNav.click();
        actionPerformed = true;
    }

    if (!actionPerformed) {
        const element = document.getElementById('next-activity-link');
        if (element) {
            element.click();
        } else {
            alert("Element not found!");
        }
    }
})();
