// WordPress modules
import { ColorPalette } from '@wordpress/block-editor';

// Custom Modules
import calculated from "../../library/calculated/calculated";


// Export colorbox
export default function PxColorBox(props){

    const {
        name, 
        title,
        attributes,
		setAttributes
	} = props;

    const onColorChange = function(colorValue){
        let cleanColor = (colorValue !== undefined) ? colorValue : '';
        // let colorTransparent = calculated.calculatedRgbaString(cleanColor);
        // console.log("cleanColor, colorTransparent", cleanColor, colorTransparent);
        setAttributes({ [name] : cleanColor });
    }

    return (
        <div className="px-colorbox">
            <h2>{title}</h2>
            <input type="checkbox" id={`${name}Swatch`}  name={`${name}Swatch`}></input>
            <label htmlFor={`${name}Swatch`}>Palette</label>
            <ColorPalette value={attributes[name]} onChange={onColorChange} enableAlpha={true} />
        </div>
    );
}