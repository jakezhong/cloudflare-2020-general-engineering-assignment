class PageTransformer {
  constructor(links) {
      this.links = links;
  }

  async element(element) {
    const id = element.getAttribute("id");

    switch(id) {
      case "links": {
        this.links.map(link => {
          element.append(`<a href="${link.url}" target="_blank">${link.name}</a>`, {html: true});
        });
        break;
      }
      case "profile": {

        const style = element.getAttribute("style");
        
        if (typeof style === "string") {
          element.setAttribute("style", style.replace("display: none", ""));
        }
        break;
      }
      case "avatar": {
        element.setAttribute("src", "https://i.pinimg.com/564x/ea/58/2a/ea582a5557c1b596344d030fac1b5358.jpg");

        break;
      }
      case "name": {
        element.append("jakezhong");

        break;
      }
      case "social": {
        break;
      }
    }
  }
}

const data = [
  {"name": "Home", "url": "https://www.cloudflare.com/"},
  {"name": "Contact", "url": "https://www.cloudflare.com/plans/enterprise/contact/"},
  {"name": "Plans", "url": "https://www.cloudflare.com/plans/"}
];

const dataJson = JSON.stringify(data);

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const init = (type) => {
    return {
      headers: {
        "content-type": type + ";charset=UTF-8",
      },
    }
  }
  
  if (request.url.match(/\/links$/)) {
    return new Response(dataJson, init("application/json") );
  } else {
    const response = await fetch("https://static-links-page.signalnerve.workers.dev", init("text/html") );

    return new HTMLRewriter()
      .on("div#links", new PageTransformer(data))
      .on("div#profile", new PageTransformer())
      .on("img#avatar", new PageTransformer())
      .on("h1#name", new PageTransformer())
      .on("div#social", new PageTransformer())
      .transform(response);

  }
}
