// In this lesson I have learnt manipulating HTML attributes. In atom attributes are higlighted in orange color. Inside tags, other than tag name, else are attributes. For example, "<a href=​"https:​/​/​www.google.com">​Google​</a>​" in this "href" is attribute and "a" is tag name.

document.querySelector("a");    // "a" means anchor tag.
<a href=​"https:​/​/​www.google.com">​Google​</a>​

document.querySelector("a").attributes;                 // To get the attributes associated with anchor tag "a".
NamedNodeMap {0: href, href: href, length: 1}

document.querySelector("a").getAttribute("href");       // To get values inside attributes.
'https://www.google.com'

document.querySelector("a").setAttribute("href","https:\\www.bing.com");      // To change attribute values or links. we use this line of code.
undefined
