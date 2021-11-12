// Import the Cloudinary class.
import { CloudinaryImage } from "@cloudinary/url-gen";

import {
  lazyload,
  responsive,
  accessibility,
  placeholder,
  HtmlImageLayer
} from "@cloudinary/html";

// Render the images in an 'img' element.
const imgTag = document.createElement("img");
document.body.appendChild(imgTag);

const imgTag2 = document.createElement("img");
document.body.appendChild(imgTag2);

const imgTag3 = document.createElement("img");
document.body.appendChild(imgTag3);

const imgTag4 = document.createElement("img");
document.body.appendChild(imgTag4);

// Create your images
const myImage = new CloudinaryImage("docs/colored_pencils", {
  cloudName: "demo"
});

const myImage2 = new CloudinaryImage("docs/piechart", {
  cloudName: "demo"
});

const myImage3 = new CloudinaryImage("flowers", {
  cloudName: "demo"
});

const myImage4 = new CloudinaryImage("sample", {
  cloudName: "demo"
});

// Wire up Cloudinary to work with the elements and use the responsive and placeholder plugins
new HtmlImageLayer(imgTag, myImage, [
  responsive(),
  placeholder("predominant-color")
]);

// Use the responsive and colorblind plugins
new HtmlImageLayer(imgTag2, myImage2, [
  responsive(),
  accessibility("colorblind")
]);

// Use the lazyload and responsive plugins
new HtmlImageLayer(imgTag3, myImage3, [lazyload(), responsive()]);

// Use all four plugins
new HtmlImageLayer(imgTag4, myImage4, [
  lazyload(),
  responsive(),
  accessibility(),
  placeholder()
]);
