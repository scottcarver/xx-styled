# Styled Areas - Gutenberg Block
*Styled Areas* is a WP block/plugin which provides the user with a new "Styled Area" block &mdash; a visual editing interface for creating color schemes inside your website. Practically speaking, a Styled Area is a container element which uses CSS Variables to style the foreground/background content inside it.

![Code Preview](src/library/img/styled-controlswithpreview.jpg)

<!-- ## Benefits
- the CSS vars can be used inline, onpage, or in an external stylesheet
- CSS vars are less intrusive than regular CSS rules, they do nothing by default (the `.xx-styled` adds rules)
- create one-off styles in post, or create  -->

## Installation

1. Download this repo and add the "xx-styled" directory to the "plugins" directory of your WordPress installation `/wp-content/plugins/`
2. Activate the plugin through the 'Plugins' screen in WordPress
3. New controls/editors are now available! A new "Styled Areas" posttype in the admin sidebar, a block called "Styled Area" available in the block editor, and a sidebar plugin for managing post styles.


## Description

The block is capable of being used in multiple ways: 

1. **Inline Styles** - the container element is inserted directly into your post and saved in `post_content` (like most block content). This code contains CSS custom properties inside that element's `style` tag.

2. **Saved/Reusable Styles** - these are edited as entries in a traditional WP Post Editor. Now you can create styles and reuse them in multiple places throughout your site.Instead of inlining the CSS, a reference will be placed on the container: `<div data-theme="my-cool-style">`

3. **Post Styles** - Saved Styles can also be assigned at a high level to a Post/Page (in addition to inside the Gutenberg editing interface). Nothing will added to the entry in the Gutenberg editor, but a callback function allows a named style to be added to a high-level page element: `<body data-theme="my-cool-style">`



<!-- 
There is default support if you create light/dark modes:

```
<body data-theme="custom">
<body data-theme="light">
<body data-theme="dark">
``` -->


## Benefits
This approach may help some users style their theme more consistently and dynamically by simplifying how color is added to container blocks and inner elements (p,h1,etc) without controlling each one individually.


## Added Routes
In addition to the 'single' view created by the 'styled' posttype, additional helper urls are added.

### CSS
- Individual Styles - `WPBASE/styled/taffy.css` (slug is used)
- All Styles - `WPBASE/styled/compiled.css` (special name 'compiled' is used)
<!-- - Entry Styles - `WPBASE/styled-entry/[ID].css` (ID is used, this will pluck any used inline/saved styles and place them in a compiled CSS format) -->

### JSON
- Individual JSON - `WPBASE/styled/taffy.json` (returns object)
- Compiled JSON - `WPBASE/styled/compiled.json` (returns arrray of objects). This is used in creating variations.




### Removals
- ro


## Styled Areas versus 
is an alternative approach to using the core styling tools in WordPress.


## Todo
- in all cases, check the "enabled" values before returning anything in css/js. [issue] regarding linear-gradient showing when Gel is enabled but no color value is set.
- there is a know issue with nesting multiple deep where the wide/full does not display. A solution is possible but in the short term just add the classes to get the same effect
- padding function has an issue where if you only input 1 value (and leave others blank), the *others* are rendered as "undefined" - likely fix is inside of calclatedPadding.js