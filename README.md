# Drip Cloud Website Project

**Project:** Drip Cloud E-Commerce Website  
**Course:** Web Development (WEDE5020)  
**Student:** Vincent Jonas  
**Student number:** ST10503108

## Project Overview

Drip Cloud is a South African streetwear brand website developed as part of the Web Development coursework. The website introduces the brand and provides information about its products, enquiries and contact details. It is a multi-page website built with HTML and CSS, with responsive layouts for desktop, tablet and mobile screens.

## Website Goals

- Present the Drip Cloud brand and its products.
- Help visitors navigate the website and find product and contact information.
- Let visitors make product enquiries and contact the organisation.
- Provide a consistent, responsive experience across screen sizes.

## Website Pages and Features

- **Home:** Introduces the brand and links to key pages.
- **About Us:** Presents the brand story, mission, vision and values.
- **Products:** Displays products, descriptions and prices.
- **Enquiry:** Provides a form for product enquiries.
- **Contact Us:** Provides contact details and a selector for Rosebank International Nelson Mandela Bay and Torga Optical Greenacres Mall.
- **Thank You:** Confirms an enquiry and offers links to continue browsing.
- Product search, sorting, result counts and no-results feedback.
- About-page accordion and product-image lightbox with keyboard controls and mobile swipe support.
- Interactive selector for the two contact locations.
- Enquiry estimate/availability response and prefilled email drafts from both forms.
- Shared navigation and external CSS styling across the website pages.
- Responsive layouts, product images, forms, and hover and focus styles.

## Repository Structure



```text
DripCloud-website/
├── index.html           # Home page
├── pages/               # About, Products, Enquiry, Contact and Thank You pages
├── css/                 # Shared stylesheets
├── js/                  # Shared JavaScript interactions
├── image/               # Website and product images
├── wireframes/          # Planning wireframes
├── screenshots/         # Desktop, tablet and mobile evidence for this README
├── robots.txt          # Crawler access guidance and sitemap location
├── sitemap.xml         # Public indexable website pages
├── CHANGELOG.md         # Record of project development
└── README.md            # Project information and instructions
```

## Technologies and Tools

- HTML5 and CSS3
- JavaScript for product search, sorting, accordion behavior and the product image gallery
- Visual Studio Code and Live Server
- Git and GitHub
- Responsive Web Design

## Design, Responsiveness and Accessibility

The site uses a streetwear-inspired style with dark headers and footers, light content areas, and high-contrast text. The shared stylesheet controls typography, colour, spacing, navigation, buttons, product cards, forms, images and page layouts. Responsive breakpoints adapt the navigation, product grids, typography, images, map and page spacing to smaller screens.

The pages use semantic elements such as `header`, `nav`, `main`, `section` and `footer`. Product images have descriptive alt text. Form controls have labels, length limits and custom validation messages. Both forms prepare email drafts addressed to `support@dripcloud.co.za`; the visitor must send the draft from an email client.
The planning and interface choices are informed by user-experience and e-commerce literature (Cyr, 2008; Garrett, 2002; Interaction Design Foundation, 2026; Nielsen Norman Group, 2025; Palmer, 2002; Robins and Holmes, 2008). Accessibility and semantic-markup checks refer to W3C (2026) and W3Schools (2026).

Page titles and descriptions are written to describe each page; Google may use title elements and meta descriptions when generating search-result text (Google Search Central, n.d.-c). Product-image alt text describes the visible image in context (Google Search Central, n.d.-a). The crawler files follow guidance for robots.txt and sitemaps (Google Search Central, n.d.-b; Google Search Central, n.d.-d). Form fields use HTML length constraints with JavaScript validation feedback (MDN, n.d.).

## Responsive Website Screenshots

The screenshots below show the homepage at desktop, tablet and mobile sizes. The image files are stored in the repository's `screenshots/` folder.

### Desktop

![Drip Cloud website at desktop size](screenshots/Home_desktop.png)

### Tablet

![Drip Cloud website at tablet size](screenshots/Home_tablet.png)

### Mobile

![Drip Cloud website at mobile size](screenshots/Home_mobile.png)

## Part 1 Feedback and Improvements

**Feedback received:** The Part 1 submission was a ZIP file. The marker advised me to follow the submission instructions and stated that zipped folders would not be accepted.

**Action for Part 2:** The Part 2 submission included the GitHub repository link and the deployed website link.

**Action for Part 3:** Push the completed website and README updates to the GitHub repository, then submit the repository link and deployed website link through the LMS. Do not submit the website as a ZIP file.

## Part 2 Feedback and Part 3 Actions

**Feedback received:** The Part 2 marker noted that the README did not show specific records of changes made in response to Part 1 feedback, said the repository needed to be organised, and noted that README screenshots were missing. The Part 1 feedback text provided also stated that the submission should follow the instructions and that ZIP submissions would not be accepted; it gave the general direction to review feedback and make improvements, without criterion-specific comments.

**Actions recorded:** The project is organised into separate `pages/`, `css/`, `js/`, `image/`, `wireframes/` and `screenshots/` folders. Desktop, tablet and mobile homepage screenshots are linked in this README. Part 1 feedback actions and subsequent Part 2/Part 3 development are recorded in `CHANGELOG.md`. Future submissions will use the public repository and deployed-site links instead of a ZIP file.
## Part 2 Improvements

Part 2 focused on CSS styling and responsive design. The recorded updates include:

- Updated and linked the external stylesheet across the website pages.
- Added default styles, typography, layout, colour and decoration.
- Added hover, focus and active pseudo-classes.
- Added tablet, mobile and small-screen breakpoints.
- Improved responsive navigation, product images, product grids, typography and contact map styling.
- Removed unnecessary inline styling and improved the Thank You page layout.
- Recorded Part 1 feedback improvements in `CHANGELOG.md`.

## Part 3 Keyword Focus

The phrases below were selected from the actual brand, product and location content. They are content targets, not claims about measured search volume.

| Page | Focus phrases |
|---|---|
| Home | DRIP CLOUD, South African streetwear, urban clothing |
| About | DRIP CLOUD brand, South African streetwear brand |
| Products | streetwear products, T-shirts, tracksuits, hoodies |
| Enquiry | product availability, clothing size enquiry, pre-order |
| Contact | DRIP CLOUD contact, Nelson Mandela Bay locations, Greenacres Mall |
## Part 3 Progress

Mark an implementation item complete after the local change is checked. Keep public deployment checks unchecked until the pushed site is checked.

- [x] Record the Part 2 marker feedback response, repository organisation and screenshot evidence.
- [x] Implement an About page accordion and a product image lightbox with keyboard controls and mobile swipe support.
- [x] Add dynamic product filtering, sorting, result counts and no-results feedback.
- [x] Verify search, sorting, no-results feedback, lightbox navigation and accordion behavior at desktop and mobile viewport sizes; no browser console warnings or errors appeared during these checks.
- [ ] Verify lightbox swipe navigation on a physical touch device.
- [x] Add and verify an interactive map selector for Rosebank International Nelson Mandela Bay and Torga Optical Greenacres Mall.
- [x] Add page-specific titles, meta descriptions and meta keyword tags to all six pages.
- [x] Review product image alt text against the images; existing image filenames are unchanged.
- [x] Map page-specific search phrases to the current brand, product and location content; document the selected phrases above.
- [x] Create `robots.txt` and `sitemap.xml` using the public GitHub Pages URL; validate the sitemap XML locally.
- [ ] Verify the crawler files and SEO changes on the deployed site after publishing.
- [x] Provide enquiry controls, client-side validation, a dynamic estimate/availability response and a prepared email draft.
- [x] Provide contact controls, client-side validation and a prefilled email handoff through the visitor email client.
- [ ] Configure and test an AJAX form endpoint; GitHub Pages does not receive form submissions by itself.
- [ ] Deploy the site and check every page and feature.
- [ ] Capture final desktop, tablet and mobile screenshots after the Part 3 features are complete.
- [x] Update the references and changelog.
- [ ] Commit and push the finished updates with descriptive messages.
- [ ] Test an AJAX form endpoint if the final submission requires asynchronous delivery; the current static-site forms hand off through mailto and do not store submissions.

## GitHub and Deployment

- **Repository:** https://github.com/vincentjonas065/DripCloud-website
- **Live website:** https://vincentjonas065.github.io/DripCloud-website/

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/vincentjonas065/DripCloud-website.git
```

2. Open the project folder in Visual Studio Code.
3. Open `index.html` with Live Server or in a modern web browser.

## References

CYR, D., 2008. Modeling web site design across cultures: perspectives from Latin America, Europe, and the United States. *Journal of the Association for Information Systems*, 9(8), pp.439-465.

GARRETT, J.J., 2002. *The Elements of User Experience: User-Centered Design for the Web*. New Riders.

GOOGLE SEARCH CENTRAL, n.d.-a. Image SEO best practices [online]. Available at: https://developers.google.com/search/docs/appearance/google-images [Accessed 2 November 2026].

GOOGLE SEARCH CENTRAL, n.d.-b. Robots.txt introduction and guide [online]. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro [Accessed 2 November 2026].

GOOGLE SEARCH CENTRAL, n.d.-c. SEO Starter Guide: The Basics [online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 2 November 2026].

GOOGLE SEARCH CENTRAL, n.d.-d. What is a sitemap? [online]. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview [Accessed 2 November 2026].

INTERACTION DESIGN FOUNDATION, 2026. *E-commerce UI/UX: Best Practices for Online Stores* [online]. Available at: https://www.interaction-design.org/literature/article/e-commerce-ui-ux [Accessed 5 August 2026].

MDN, n.d. Client-side form validation [online]. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 2 November 2026].

NIELSEN NORMAN GROUP, 2025. *E-commerce User Experience* [online]. Available at: https://www.nngroup.com/articles/e-commerce-usability/ [Accessed 5 August 2026].

PALMER, J.W., 2002. Web site usability, design and performance metrics. *Information Systems Research*, 13(2), pp.151-167.

ROBINS, D. and HOLMES, J., 2008. Aesthetics and credibility in web site design. *Information Processing & Management*, 44(1), pp.386-399.

WORLD WIDE WEB CONSORTIUM (W3C), 2026. *Web Content Accessibility Guidelines (WCAG) 2.2* [online]. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 5 August 2026].

W3SCHOOLS, 2026. *HTML5 Semantic Elements* [online]. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 5 August 2026].