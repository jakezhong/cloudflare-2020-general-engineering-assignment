// Declare some global variables
const data = [
  {"name": "Home", "url": "https://www.cloudflare.com/"},
  {"name": "Contact", "url": "https://www.cloudflare.com/plans/enterprise/contact/"},
  {"name": "Plans", "url": "https://www.cloudflare.com/plans/"}
];

// Convert the array to JSON format
const dataJson = JSON.stringify(data);

// Initialize social media svgs
const codepenSvg = '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>CodePen icon</title><path fill="#1a202c" d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"></path></svg>';

const githubSvg = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path fill="#1a202c" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>';

const instagramSvg = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path fill="#1a202c" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>';

const linkedinSvg = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path fill="#1a202c" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>';

// Declare a class for the usage of HTMLRewriter()
class PageTransformer {
  constructor(links) {
      this.links = links;
  }

  // Generate different HTML elements based on the selectors
  async element(element) {
    const id = element.getAttribute("id");

    switch(id) {
      case "links": {
        // Generate a list of links
        this.links.map(link => {
          element.append(`<a href="${link.url}" target="_blank">${link.name}</a>`, {html: true});
        });
        break;
      }
      case "profile": {
        // Remove the display: none 
        const style = element.getAttribute("style");
        
        if (typeof style === "string") {
          element.setAttribute("style", style.replace("display: none", ""));
        }
        break;
      }
      case "avatar": {
        // Generate a avatar image
        element.setAttribute("src", "https://flyclipart.com/thumb2/pokemon-hd-png-transparent-pokemon-hd-images-179236.png");
        element.setAttribute("alt", "Jake Zhong Avatar");

        break;
      }
      case "name": {
        // Fill in a username
        element.append("jakezhong");

        break;
      }
      case "social": {
        // Generate svgs for social media
        const style = element.getAttribute("style");
        const socials = [
          {"name": "linkedin", "url": "https://www.linkedin.com/in/jake-zhong/", "svg": linkedinSvg},
          {"name": "github", "url": "https://github.com/jakezhong", "svg": githubSvg},
          {"name": "codepen", "url": "https://codepen.io/jakezhong", "svg": codepenSvg},
          {"name": "instagram", "url": "https://www.instagram.com/jakezhong_", "svg": instagramSvg}
        ];

        // Remove the display: none
        if (typeof style === "string") {
          element.setAttribute("style", style.replace("display: none", ""));
        }

        // Generate a list of social media links and svgs
        socials.map(social => {
          element.append(`<a href="${social.url}" target="_blank">${social.svg}</a>`, {html: true});
        });
        break;
      }
      case null: {
        // Selecting element with no id
        if (element.tagName === "title") {
          // Replace the page title
          element.setInnerContent("Jake Zhong - General Engineering Assignment");
        } else if (element.tagName === "style") {
          // Adding custom css style
          element.append("@keyframes gradient-change { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }");

          element.append("\n.bg-gray-900 {background-color: #f38020; background: linear-gradient(to right, #f38020 0%, #fbae40 100%); background-size: 200% 100%; background-position: 0 center; animation: gradient-change 10s ease infinite;}", {html: true});

          element.append("\nsvg {background-color: #f38020; background: linear-gradient(to right, #f38020 0%, #fbae40 100%); background-size: 200% 100%; background-position: 0 center; animation: gradient-change 10s ease infinite;}", {html: true});

          element.append("\n#links a:hover {background-color: #1a202c; }", {html: true});
        }

        break;
      }
    }
  }
}

// A method to fetch the response
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
})

// A method to handle the response
async function handleRequest(request) {
  // Declare a function to generate custom headers
  const init = (type) => {
    return {
      headers: {
        "content-type": type + ";charset=UTF-8",
      },
    }
  }
  
  // If the url contains links, return the json object, otherwise, return a static HTML page
  if (request.url.match(/\/links$/)) {
    return new Response(dataJson, init("application/json") );
  } else {
    const response = await fetch("https://static-links-page.signalnerve.workers.dev", init("text/html") );

    // Rewrite the static HTML page with custom content
    return new HTMLRewriter()
      .on("#links", new PageTransformer(data))
      .on("#profile", new PageTransformer())
      .on("#avatar", new PageTransformer())
      .on("#name", new PageTransformer())
      .on("#social", new PageTransformer())
      .on("title", new PageTransformer())
      .on("style", new PageTransformer())
      .transform(response);
  }
}
