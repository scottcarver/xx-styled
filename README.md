# Styled Area Block
A "styled area" is a set of foreground/background styles which allows InnerBlocks. This is an alternative approach to using the core styling tools in WordPress.

## Description

This block generates both 1) inline styles 2) external styles. Each use CSS Variables.

The inline styles will not be visible by default, you must add this data-attribute to your HTML
`<body data-theme="custom">`

It's also easy to switch into light/dark modes:
`<body data-theme="light">`
`<body data-theme="dark">`


## Benefits
1) **Consistent Styles -**
Generating styles on container *makes color themes much more consistent*, without having to add colors individually (p,h1,etc).

2) **Reusable Styles -**
Though it is easy to create styles inline, you can also build up a library of styles and reuse them.

3) **Alternative to Global Styles -**

## Routes
In addition to the 'single' view created by the 'styled' posttype, additional helper urls are added.

### CSS
- Individual Styles - WPBASE/style/taffy.css (slug is used)
- All Styles - WPBASE/style/compiled.css (slug is used)
- Entry Styles - WPBASE/style/entry-[ID].json (ID is used, all posttypes allowed)

### JSON
- Individual JSON - WPBASE/style/taffy.json (returns object)
- Compiled JSON - WPBASE/style/compiled.json (returns arrray of objects). This is used in creating variations.


## Installation

1. Upload the plugin files to the `/wp-content/plugins/xx-styled` directory
2. Activate the plugin through the 'Plugins' screen in WordPress
