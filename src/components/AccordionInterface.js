const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';
import { ColorPalette } from '@wordpress/block-editor';

import PxColorBox from "../library/helpers/PxColorBox/PxColorBox.js"

export function AccordionInterface({ attributes, setAttributes }){

    let colorboxes = [
        {'name':'interfaceFGColor', 'title':'Foreground'},
        {'name':'interfaceBGColor', 'title':'Background'},
        {'name':'interfaceKeyColor', 'title':'Key'} 
    ];

    if(attributes.styleMode=='named'){ return false; }

    return (
        <Fragment>
            <PanelBody title={__("Interface", "pxblocks")} className="panel-interface" initialOpen={false}>
                <PanelRow>
                    <div className="px-sidepanel">

Before  
                        <PxColorBox name="interfaceFGColor" title="Foreground" attributes={attributes} setAttributes={setAttributes} />
After
                   
                        {colorboxes.map((currentValue) => {
                            const onColorChange = function(colorValue){
                                let cleanColor = (colorValue !== undefined) ? colorValue : '';
                                setAttributes({ [currentValue.name] : cleanColor });
                            }
                            //  <ColorBox color={red} /> 
                            return (
                                <div className="px-colorbox" key={currentValue.name}>
                                    <h2>UI {currentValue.title} Color</h2>
                                    <input type="checkbox" id={`${currentValue.name}Swatch`}  name={`${currentValue.name}Swatch`}></input>
                                    <label htmlFor={`${currentValue.name}Swatch`}>Palette</label>
                                    <ColorPalette value={`${attributes[currentValue.name]}`} onChange={onColorChange} enableAlpha={true} />
                                </div>
                            )
                        })}

                    </div>
                    
                </PanelRow>
            </PanelBody> 
        </Fragment>
    );
}
