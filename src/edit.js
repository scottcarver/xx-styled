import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps, useSetting } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { FormToggle, ColorIndicator, ColorPicker, ColorPalette } from '@wordpress/components';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';
// Mine
import ColorObgtoRgbaString from "./library/ColorObgtoRgbaString";
import './editor.scss';
import { select } from '@wordpress/data';
import myPalette from './library/myPalette';
import undoHex from './library/undoHex';


// const mycolors = useSetting( 'color.palette' ); Doesn't Work
console.log(myPalette);

export default function Edit({
    attributes: {
        blockID,
        styleEnabled,
		foregroundColor,
        backgroundColor0,
        headlineColor,
        linkColor,
        namedStyle
	},  
    className, 
    isSelected, 
    setAttributes, 
    focus, 
    id
}) {

	const styleObj = { 
		'--foregroundColor': foregroundColor, 
		'--backgroundColor0': backgroundColor0 ,
        '--headlineColor': headlineColor,
        '--linkColor': linkColor
	};

	const blockProps = useBlockProps( {
		className: 'xx-styled',
		style: styleEnabled ? styleObj : {}
	});

   // const [ namedStyle, setColor ] = useState ( '#f00' )
   {/* const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];
    */}

    const colors = myPalette;

    
	return (
		<div {...blockProps} data-theme={styleEnabled ? "none" : undoHex(namedStyle) }>
			<InspectorControls>
{/* 
                <div style={{padding:'10px'}}>
                            <ColorPalette
                                colors={ colors }
                                value={ namedStyle }
                                onChange={ ( namedStyle ) => setAttributes({namedStyle}) }
                                disableCustomColors
                            />
                </div>
                     */}

                <h2 style={{margin:'5px'}}>Custom StyleEnabled Value is {styleEnabled}?</h2>
                <FormToggle
                    id="postdateenabled-form-toggle"
                    label={__("Display Post Date?", "pxblocks")}
                    checked={styleEnabled}
                    onChange={value => setAttributes({ styleEnabled: !styleEnabled })}
                /> 
                <br />
                {!styleEnabled &&
                    <Fragment>
                    <Panel>
                        <PanelBody title="Named Styles" icon={ more } initialOpen={ false }>
                            <PanelRow>
                            <ColorPalette
                                colors={ colors }
                                value={ namedStyle }
                                onChange={ ( namedStyle ) => setAttributes({namedStyle}) }
                                disableCustomColors
                            />
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                    </Fragment>
                }
                
                {styleEnabled &&    
                <Fragment>
                    <Panel>
                        <PanelBody title="Foreground" icon={ more } initialOpen={ false }>
                            <PanelRow>
                                <div style={{width: '100%'}}>
                                    <h2>Color</h2>
                                    {/* <ColorIndicator colorValue={foregroundColor} /> */}
                                    <ColorPicker
                                        color={foregroundColor}
                                        onChangeComplete={value =>
                                            setAttributes({ foregroundColor: ColorObgtoRgbaString(value) })
                                        }
                                        enableAlpha
                                    />
                                    {/* Background Color */}
                                    <h2>Headline</h2>
                                    <ColorPicker
                                        color={headlineColor}
                                        onChangeComplete={value =>
                                            setAttributes({ headlineColor: ColorObgtoRgbaString(value) })
                                        }
                                        enableAlpha
                                    />

                                    {/* Link Color */}
                                    <h2>Link</h2>
                                    <ColorPicker
                                        color={linkColor}
                                        onChangeComplete={value =>
                                            setAttributes({ linkColor: ColorObgtoRgbaString(value) })
                                        }
                                        enableAlpha
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody title="Background" icon={ more } initialOpen={ false }>
                            <PanelRow>
                                <div style={{width: '100%'}}>
                                    {/* Background Color */}
                                    <h2>Background</h2>
                                    <ColorPicker
                                        color={backgroundColor0}
                                        onChangeComplete={value =>
                                            setAttributes({ backgroundColor0: ColorObgtoRgbaString(value) })
                                        }
                                        enableAlpha
                                    />
                                </div>
                            </PanelRow>
                        </PanelBody>
                    </Panel>
                </Fragment>
            }
             </InspectorControls>
			<InnerBlocks />
		</div>
	);
}
