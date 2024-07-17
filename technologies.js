document.addEventListener("DOMContentLoaded", () => {
    const technologyIconAWS = document.getElementById("technologyIconAWS");
    const technologyIconAngular = document.getElementById("technologyIconAngular");
    const technologyIconKafka = document.getElementById("technologyIconKafka");
    const technologyIconCAD = document.getElementById("technologyIconCAD");
    const technologyIconDocker = document.getElementById("technologyIconDocker");
    const technologyIconDrupal = document.getElementById("technologyIconDrupal");
    const technologyIconFigma = document.getElementById("technologyIconFigma");
    const technologyIconFusion = document.getElementById("technologyIconFusion");
    const technologyIconGit = document.getElementById("technologyIconGit");
    const technologyIconMatlab = document.getElementById("technologyIconMatlab");
    const technologyIconPlotLib = document.getElementById("technologyIconPlotLib");
    const technologyIconNodeJS = document.getElementById("technologyIconNodeJS");
    const technologyIconNumpy = document.getElementById("technologyIconNumpy");
    const technologyIconPlotly = document.getElementById("technologyIconPlotly");
    const technologyIconSelenium = document.getElementById("technologyIconSelenium");
    const technologyIconSolidity = document.getElementById("technologyIconSolidity");
    const technologyIconXML = document.getElementById("technologyIconXML");

    const technologyInfo = document.getElementById("technologyInfo");
    const technologyInfoText = document.getElementById("technologyInfoText");

    // Initialize an object to keep track of the state of each icon
    const iconStates = {
        AWS: false,
        Angular: false,
        Kafka: false,
        CAD: false,
        Docker: false,
        Drupal: false,
        Figma: false,
        Fusion: false,
        Git: false,
        Matlab: false,
        PlotLib: false,
        NodeJS: false,
        Numpy: false,
        Plotly: false,
        Selenium: false,
        Solidity: false,
        XML: false,
    };

    let lastClickedIcon = null;

    const toggleDisplay = (iconId) => {
        if (lastClickedIcon === iconId) {
            // If the same icon is clicked again, toggle visibility
            technologyInfo.style.display = (technologyInfo.style.display === "flex") ? "none" : "flex";
            iconStates[iconId] = !iconStates[iconId];
        } else {
            // If a different icon is clicked, show the technologyInfo and update its content
            technologyInfo.style.display = "flex";
            // Update the contents of technologyInfo based on iconId
            // This is where you update the content of technologyInfo
            var technologyContent = "N/A";
            if (iconId === "AWS") {
                technologyContent = "During my experience with AWS, I leveraged EC2 instances and S3 storage for scalable web applications. I also utilized AWS Lambda for serverless functions to handle backend processes efficiently.";
            } else if (iconId === "Angular") {
                technologyContent = "In my projects using Angular, I developed dynamic single-page applications (SPAs) with responsive design and modular architecture. I implemented data binding and dependency injection for seamless integration of services.";
            } else if (iconId === "Kafka") {
                technologyContent = "I have experience with Apache Kafka in setting up data streaming pipelines. I used Kafka to handle real-time data feeds and integrated it with Spark for data processing and analytics.";
            } else if (iconId === "CAD") {
                technologyContent = "I utilized CAD software, particularly AutoCAD, for designing and modeling engineering projects. My work included creating detailed schematics and 3D models for manufacturing components.";
            } else if (iconId === "Docker") {
                technologyContent = "My use of Docker involved containerizing applications for consistent development and deployment environments. I also set up Docker Compose for managing multi-container Docker applications.";
            } else if (iconId === "Drupal") {
                technologyContent = "I worked on Drupal for content management system (CMS) projects, customizing themes and developing modules to enhance site functionality. I also handled site migrations and performance optimization.";
            } else if (iconId === "Figma") {
                technologyContent = "Using Figma, I designed user interfaces (UI) and created interactive prototypes for web and mobile applications. I collaborated with teams to iterate on designs and ensure user-friendly experiences.";
            } else if (iconId === "Fusion") {
                technologyContent = "My experience with Fusion 360 includes creating 3D models and simulations for mechanical designs. I utilized its CAD, CAM, and CAE capabilities to develop and test product prototypes.";
            } else if (iconId === "Git") {
                technologyContent = "I have extensive experience with Git for version control, managing code repositories, and collaborating with teams using branching and merging strategies. I also used GitHub for project hosting and issue tracking.";
            } else if (iconId === "Matlab") {
                technologyContent = "In MATLAB, I developed algorithms for data analysis and visualization. My work involved signal processing, numerical modeling, and creating GUIs for engineering applications.";
            } else if (iconId === "PlotLib") {
                technologyContent = "Using Matplotlib, I created a variety of data visualizations, including line plots, bar charts, and scatter plots. I used it extensively in data analysis projects to illustrate trends and patterns.";
            } else if (iconId === "NodeJS") {
                technologyContent = "I used Node.js to build scalable backend services and APIs. My projects involved creating RESTful endpoints, managing database interactions, and integrating with frontend frameworks.";
            } else if (iconId === "Numpy") {
                technologyContent = "With NumPy, I performed numerical computations and data manipulation for scientific research. I used its powerful array operations to handle large datasets and complex mathematical functions.";
            } else if (iconId === "Plotly") {
                technologyContent = "I leveraged Plotly for creating interactive and visually appealing plots. It was particularly useful in data analytics projects where dynamic and customizable visualizations were required.";
            } else if (iconId === "Selenium") {
                technologyContent = "I utilized Selenium for automating web application testing. I wrote scripts to perform end-to-end testing, ensuring application functionality and identifying issues across different browsers.";
            } else if (iconId === "Solidity") {
                technologyContent = "My experience with Solidity involved developing smart contracts for blockchain applications. I wrote and deployed contracts on the Ethereum network, focusing on security and efficiency.";
            } else if (iconId === "XML") {
                technologyContent = "I used XML for data interchange in various projects, including configuration files and data serialization. I also worked with XSLT for transforming XML data into different formats.";
            }
            

            technologyInfo.textContent = technologyContent;

            // Reset all other icons' states
            for (const key in iconStates) {
                if (iconStates.hasOwnProperty(key) && key !== iconId) {
                    iconStates[key] = false;
                }
            }
            iconStates[iconId] = true;
        }
        lastClickedIcon = iconId;
    };

    technologyIconAWS.addEventListener("click", () => toggleDisplay("AWS"));
    technologyIconAngular.addEventListener("click", () => toggleDisplay("Angular"));
    technologyIconKafka.addEventListener("click", () => toggleDisplay("Kafka"));
    technologyIconCAD.addEventListener("click", () => toggleDisplay("CAD"));
    technologyIconDocker.addEventListener("click", () => toggleDisplay("Docker"));
    technologyIconDrupal.addEventListener("click", () => toggleDisplay("Drupal"));
    technologyIconFigma.addEventListener("click", () => toggleDisplay("Figma"));
    technologyIconFusion.addEventListener("click", () => toggleDisplay("Fusion"));
    technologyIconGit.addEventListener("click", () => toggleDisplay("Git"));
    technologyIconMatlab.addEventListener("click", () => toggleDisplay("Matlab"));
    technologyIconPlotLib.addEventListener("click", () => toggleDisplay("PlotLib"));
    technologyIconNodeJS.addEventListener("click", () => toggleDisplay("NodeJS"));
    technologyIconNumpy.addEventListener("click", () => toggleDisplay("Numpy"));
    technologyIconPlotly.addEventListener("click", () => toggleDisplay("Plotly"));
    technologyIconSelenium.addEventListener("click", () => toggleDisplay("Selenium"));
    technologyIconSolidity.addEventListener("click", () => toggleDisplay("Solidity"));
    technologyIconXML.addEventListener("click", () => toggleDisplay("XML"));
});
