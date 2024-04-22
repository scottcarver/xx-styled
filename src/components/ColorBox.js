// WordPress modules
import { ColorPalette } from '@wordpress/block-editor';

// Export ColorBox
export default function ColorBox(props){

    const {
        label,
        id,
        target,
        attributes,
		setAttributes
	} = props;
    
    const onColorChange = function(colorValue){
        setAttributes({ [target] : colorValue });
    }

    return (
        <div className="px-colorbox px-colorbox--nudgecontentleft">
            <h2>{label}</h2>
            <input type="checkbox" id={`${id}Swatch`}  name={`${id}Swatch`}></input>
            <label htmlFor={`${id}Swatch`}>Palette</label>
            <ColorPalette value={attributes[target]} onChange={onColorChange} enableAlpha={true} />
        </div>
    );
}
