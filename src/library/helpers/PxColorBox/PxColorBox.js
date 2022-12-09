import { ColorPalette } from '@wordpress/block-editor';


export default function PxColorBox(props){

    const {
        name, 
        title,
        attributes,
		setAttributes
	} = props;

    
    // { name, title, attributes, setAttributes }

    const onColorChange = function(colorValue){
        let cleanColor = (colorValue !== undefined) ? colorValue : '';
        console.log("cleanColor is ", cleanColor);
        console.log("name is ", name);
        // console.log(setAttributes);
        console.log(props);
        setAttributes({ [name] : cleanColor });
    }

    return (
        <div className="px-colorbox">
            <h2>UI {title} Color</h2>
            <input type="checkbox" id={`${name}Swatch`}  name={`${name}Swatch`}></input>
            <label htmlFor={`${name}Swatch`}>Palette</label>
            <p>{`${name}`}</p>
            <ColorPalette value={attributes[name]} onChange={onColorChange} enableAlpha={true} />
        </div>
    );
}
