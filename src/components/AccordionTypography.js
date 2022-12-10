const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow} from '@wordpress/components';
import {ComboboxControl} from '@wordpress/components';

export function AccordionTypography({ attributes, setAttributes }){

const fontOptions = global_named_fonts;
    
    if(attributes.styleMode=='disabled'){ return false; }

    return (
        <Fragment>
            <PanelBody title={__("Typography", "pxblocks")} className="panel-typography" initialOpen={false}>
                <PanelRow>
                    {/* Dropdown */}
                    {fontOptions.length > 0 && (
                        <div className="px-sidepanel">
                             {/* Headline Select Menu */}
                            <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
                                <ComboboxControl
                                    label="Headline Font Family"
                                    placeholder= 'Initial'
                                    value={attributes.foregroundHeadlineFont}
                                    allowReset={true}
                                    options={fontOptions}
                                    onChange={(newval) => setAttributes({ foregroundHeadlineFont: newval })}
                                    onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
                                        option.label.toLowerCase().startsWith(newval.toLowerCase())
                                    ))}
                                />
                            </div>
                             {/* Copy Select Menu */}
                            <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
                                <ComboboxControl
                                    label="Copy Font Family"
                                    placeholder= 'Initial'
                                    value={attributes.foregroundCopyFont}
                                    allowReset={true}
                                    options={fontOptions}
                                    onChange={(newval) => setAttributes({ foregroundCopyFont: newval })}
                                    onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
                                        option.label.toLowerCase().startsWith(newval.toLowerCase())
                                    ))}
                                />
                            </div>
                             {/* Caption Select Menu */}
                            <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
                                <ComboboxControl
                                    label="Caption Font Family"
                                    placeholder= 'Initial'
                                    value={attributes.foregroundCaptionFont}
                                    allowReset={true}
                                    options={fontOptions}
                                    onChange={(newval) => setAttributes({ foregroundCaptionFont: newval })}
                                    onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
                                        option.label.toLowerCase().startsWith(newval.toLowerCase())
                                    ))}
                                />
                            </div>
                        </div>
                        
                    )}
                    {/* Fallback note */}
                    {fontOptions.length == 0 && (
                        <p> No Font Families defined in theme.json, <a href="https://fullsiteediting.com/lessons/theme-json-typography-options/" target="_blank">read more</a>.</p>
                    )}
                    
                </PanelRow>
            </PanelBody>
        </Fragment>
    );
}
