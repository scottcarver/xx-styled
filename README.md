# Styled Area, Gutenberg Block
A "styled area" is a set of foreground/background styles which allows InnerBlocks. 

## Description

This block generates 1) inline CSS and 2) CSS Custom Variables onto a container element in your theme. 

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


## Installation

1. Upload the plugin files to the `/wp-content/plugins/xx-styled` directory
2. Activate the plugin through the 'Plugins' screen in WordPress
