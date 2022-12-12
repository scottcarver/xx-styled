const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';

import ColorBox from "./ColorBox.js"

export function AccordionInterface({ attributes, setAttributes }){

    let colorboxes = [
        {'name':'interfaceFGColor', 'title':'UI Foreground Color'},
        {'name':'interfaceBGColor', 'title':'UI Background Color'},
        {'name':'interfaceKeyColor', 'title':'UI Key Color'} 
    ];
    
    // don't show the control when it is disabled, or a named styled
    if(attributes.styleMode=='disabled' || attributes.styleMode=='named'){ return false; }

    return (
        <Fragment>
            <PanelBody title={__("Interface", "pxblocks")} className="panel-interface" initialOpen={false}>
                <PanelRow>
                    <div className="px-sidepanel">
              
                        {/* Add as a Component */}
                        {colorboxes.map((currentValue) => {  
                            return( 
                                <ColorBox 
                                    name={currentValue.name}
                                    title={currentValue.title}
                                    attributes={attributes} 
                                    setAttributes={setAttributes}
                                    key={currentValue.name}
                                /> 
                            )
                        })}

                        {/* Add as a raw html */}
                        {/*  
                        {colorboxes.map((currentValue) => {
                            const onColorChange = function(colorValue){
                                let cleanColor = (colorValue !== undefined) ? colorValue : '';
                                setAttributes({ [currentValue.name] : cleanColor });
                            }
                            return (
                                <div className="px-colorbox" key={currentValue.name}>
                                    <h2>UI {currentValue.title} Color</h2>
                                    <input type="checkbox" id={`${currentValue.name}Swatch`}  name={`${currentValue.name}Swatch`}></input>
                                    <label htmlFor={`${currentValue.name}Swatch`}>Palette</label>
                                    <ColorPalette value={`${attributes[currentValue.name]}`} onChange={onColorChange} enableAlpha={true} />
                                </div>
                            )
                        })}
                         */}
                    </div>
                    
                </PanelRow>
            </PanelBody> 
        </Fragment>
    );
}
