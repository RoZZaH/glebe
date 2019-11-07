# Glebe House & Gallery
Milestone Project One: User-Centric Frontend Development - Code Institute 

This project is a speculative redesign of an <abbr title="Office of Public Works">OPW</abbr> website for Glebe House and Gallery in Donegal. The project is not a 1-to-1 representation of the [original site](https://www.glebegallery.ie) but a 'mobile-first' redesign using flexbox.


## Demo
A live demo can be found [here](https://rozzah.github.io/glebe/)


## UX

### User stories

- As a tourist or visitor, I expect to be able to see the key information such as opening times and contact phone numbers and directions immediately and understand quickly what Glebe House is and why I might like to visit. 

- As a tour-guide or teacher I want to able to get to a tour booking form quickly.

- As a local resident I want to see any upcoming exhibitions or talks at the gallery.

- As a student I want to learn more about the house and the artisit Derek Hill and his art collection.

- As a visually impaired user I want the site to make sense to me and be easy to navigate.

### Strategy
In contrast to the existing site, I tried to put the key information about Glebe House and how a group visit might be arranged front and centre on the homepage. I also wanted to simplify the overall structure and mavigation and more efficent use of some of the great images the OPW has by using tinted images in the header.

### Scope
It's clear the OPW's Glebe Gallery website has a wide audience and many stakeholders (such as the Tea Rooms) - while my redesign is not a 1-to-1 representation I tried to cover the most pertient information and facilities, it was probably a bit ambitious to try to reintercodet the entire site; I avoided creating an online tour of the house but this could be implemented as posts.  

### Structure
The home page I designed contains the main messages and functionality up front which are easy to get back to from the common header and footer across the site. This information is supplemented by longer 'article' style pages giving the history of Glebe House and the facilities outside - the gardens and tea-rooms. Events and the collection pages give a short introuction followed by a series of 'posts'.

### Skeleton
Initially I concentrated on getting a responsive header with navigation that would adapt to different resolutions. Then I implemented similiar sections or content splits as the original site such as two columns and one third / two thirds columns. I used page sections, floated images and dividers where appropriate, i.e. for longer pages, and designed 'components' for repeatable blocks of code such as the event posts and the art collection cards. 

### Surface
I tried to use a restrained palette to compliment the images and furnishings of the house. I also used a serif font for headings but sans-serif for easy reading and scaling on the main content. I used css effects such as <code>blend mode</code>, border image, <code>clip-path</code> and <code>object-fit</code> rather than treat the images in a graphics package.

## Technologies
1. HTML
2. CSS - esp. Flexbox
3. 11ty + Nunjucks templating
4. Travis CI monitoring for deployment


## Features
I consciously chose not use a framework like Bootstrap, and to stretch myself and reinforce my knowledge of Flexbox; content reflows and sometimes reorders to make more sense on smaller screens. I used some CSS Transitions to get some user feedback on the contact form.

### Features Left to Implement
I took inspiration for the Opening Times header info from <abbr title="Irish Museum of Modern Art">IMMA</abbr> website, I would like to implement this programmatically using Javascript or similiar - I believe there you can use JSON to add this which is also discoverable by Google My Business and displays opening and closing times in search results as well as your website. They also have a nice feature showing various transport information to get to the Museum - there's no Luas in Donegal but it's a nice feature. I tried to implement a switch of checked/not:checked to toggle visibility of some of the form fields, like [this](https://codepen.io/memco/pen/BajpD) depending on whether you choose between an educational tour or a tourist one but it broke when I redesigned my form using <code>li</code>'s. Also the form needs to be hooked up using Netlify or a similar service. I would probably implement a 'hamburger' menu/icon for mobile (or possibly breadcrumbs). Also the art collection cards should have a hover or lightbox effect to view at a larger full-screen. 


## Testing
The site was extensively tested using Chrome Developer Tools - this however didn't always give an accurate recodesentaion of the site as viewed on a device - so I deployed and checked using an iPad mini and iPhone; it was only by using this strategy and also Firefox's Developer Tools, which has some tools for inspecting flexbox and grid layouts, that I could track down a bug for the Art Collection cards - there was a problem that turned out to be a media query. Even though I had a set cards to flow in a particular way at different resolutions, a max-width query was over-riding it; this was a lesson to me that while software tools are very useful, real world testing on target devices is also needed.

There is no javascript/form validation but the contact form is coded correctly for required fields.

I avoided using 'target="_blank"' for external links, I believe that unless it's a download link '_blank' breaks the back button which is especially unhelpful for mobile users or those using assistive technology.

I downloaded [NVDA screen-reader](https://www.nvaccess.org) and tested the site to make sure it make accessible. This is why I used longer wording in places, so the site would 'sound' right when read. This is becoming something that web designers need to think about, not just for users with accessibility issues, but also from people accessing the site and information in new ways for example 'voice assistants' such as *Alexa* and Google.


## Deployment
This site is hosted using GitHub pages and deployed on it's own gh-pages branch. The deployment happens automatically becasue a service called Travis CI (Continous Improvement) watches the master branch of the **glebe** repository (via API access). My understanding is it uses the file <code>.tavis.yml</code> to spin up a temporary virtual machine and run it's own copy of eleventy on a copy of the '_src' files and push the resulting '_site' files to gh-pages.

To run locally, you can of course clone the repository and access the '_site' folder as html/css; if you want to edit or build the site as coded you'll need to install a copy of **11ty** which is quite straight forward using npm.
<pre>
npm install -g @11ty/eleventy
</pre>
See [11ty/eleventy](https://www.11ty.io/) for documentation.


## Reflections
I hope to gradually improve this project and implement more features when I gain more knowledge of Javascript.
It would be interesting to see if I could include the online tour and remaining pages from the original site without the navigation getting too heavy - something I feel is a shortcoming of the offical site. I'd really need to understand how 11ty implements navigation features like breadcrumbs or parses url slugs rather than just adding a class on the body. 11ty is an exciting prospect as it's agnostic about what tenplating syntax you use, Nunjucks, Jekyll or Handlebars; however because it's quite new the documentation can sometimes be lacking, compared to Jekyll for instance.


## Credits

### Content
All content and images originate from the OPW site [Glebe Gallery](https://www.glebegallery.ie). This project is a purely educational exercise to gain experience in coding and CSS Flexbox in particular. Some introductory paragraphs and captions have been rewritten or reworded to be more tourist friendly.

### Acknowledgements
Kevin Powell's excellent [Responsive Web Design Bootcamp](https://scrimba.com/g/gresponsive) on **scrimba** taught me everything I know about flexbox and refreshed my CSS knowledge.

From Kevin mentioning **[11ty](https://www.11ty.io/)** during the course I came across [Bryan Robinson](https://www.youtube.com/user/MCABryan/playlists) on **YouTube** and he has a great series of videos on creating your first 11ty static site. 

Inspiration to use **[Travis CI](https://travis-ci.org/)** came from a Jonathan Snook [article](https://snook.ca/archives/servers/deploying-11ty-to-gh-pages) and a bit of hunting around 11ty documentation.

The collasping contact form is based on [this example](https://webdesign.tutsplus.com/tutorials/building-responsive-forms-with-flexbox--cms-26767) by [George Martsoukos](https://tutsplus.com/authors/george-martsoukos?_ga=2.170507685.469720841.1573146286-1884537216.1573146286).


**This is for educational use ONLY.** 
