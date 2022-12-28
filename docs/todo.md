
## Todo
- in all cases, check the "enabled" values before returning anything in css/js. [issue] regarding linear-gradient showing when Gel is enabled but no color value is set.
- there is a known issue with nesting multiple deep where the wide/full does not display. A solution is possible but in the short term just add the classes to get the same effect
- padding function has an issue where if you only input 1 value (and leave others blank), the *others* are rendered as "undefined" - likely fix is inside of calclatedPadding.js
- allow the StyledPreview to also be viewed flat (perhaps with a toggle), in addition to the perspective view
- the new experimental layout features work ok, but look bad (see below)
- addition of onpage styles that use a unique class. This would allow for multiple styled areas on the page to be reused
- add a copy/paste feature to the interface to better allow for quick reuse and prototyping
- styled preview does not contain newer features like keygradient, or interface colors
- add a "clear all" function, likely with code such as:

```
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
```
- add a "save this" to inline blocks (perhaps as an overlay)


## Layout Option
In the future, add this to the 'supports' option:

```
	"__experimentalLayout": {
			"allowSizingOnChildren": false,
			"allowInheriting": true,
			"allowEditing": true
		}
```

Currently it looks odd, I don't like how it 1) appears first 2) open by default and 3) the CSS output is undesirable.

