
## Todo
- in all cases, check the "enabled" values before returning anything in css/js. [issue] regarding linear-gradient showing when Gel is enabled but no color value is set.
- there is a know issue with nesting multiple deep where the wide/full does not display. A solution is possible but in the short term just add the classes to get the same effect
- padding function has an issue where if you only input 1 value (and leave others blank), the *others* are rendered as "undefined" - likely fix is inside of calclatedPadding.js
- allow the StyledPreview to also be viewed flat (perhaps with a toggle), in addition to the perspective view
- the new experimental layout features work ok, but look bad. 
- styled previe does not contain newer features like keygradient, or interface colors
- add a clear all function, likely with code such as:

```
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
```

- there can be a mismatch between data that occurs when a name is added after the fact. To reproduce:
1) create an entry with no title and save it. The Url will be a number like 1234
2) selector UI will have a slug "mycooolthing" but the CSS will have a number "1234" 

it seems likely the classname is based on the title, not the slug, and when it doesn't match exactly, it is an issue