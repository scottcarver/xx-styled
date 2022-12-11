const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow, FormToggle} from '@wordpress/components';
import {ComboboxControl} from '@wordpress/components';
import BGTabs from "./BGTabs";

export function AccordionBackground(props){

    console.log("have props", props);

    const {
        attributes: {
            bgColorEnabled,
            bgGradientEnabled,
            bgImageEnabled,
            bgGelEnabled,
            backgroundStackFirst,
            styleMode,
        },
        setAttributes
    } = props;


    // Destructure props
    /*
	const {
		attributes: { 
            bgColorEnabled,
            bgGradientEnabled,
            bgImageEnabled,
            bgGelEnabled,
            toggleGelEnabled,
            toggleImageEnabled,
            toggleGradientEnabled,
            backgroundStackFirst,
            toggleBgColorEnabled,
            styleMode,
		},
		setAttributes
	} = props;

    */
   
    const fontOptions = global_named_fonts;

    // Toggles
    const toggleStyleEnabled = () => setAttributes({ styleEnabled: !styleEnabled });
    const toggleBgColorEnabled = () => { setAttributes({ bgColorEnabled: !bgColorEnabled }); };
    const toggleGradientEnabled = () => { setAttributes({ bgGradientEnabled: !bgGradientEnabled }); };
    const toggleImageEnabled = () => { setAttributes({ bgImageEnabled: !bgImageEnabled }); };
    const toggleGelEnabled = () => { setAttributes({ bgGelEnabled: !bgGelEnabled }); };
    const toggleFgEnabled = () => setAttributes({ foregroundEnabled: !foregroundEnabled });
    const toggleHeightEnabled = () => setAttributes({ heightEnabled: !heightEnabled });
    const toggleBgStack = backgroundStackFirst =>
        function() {
            if (backgroundStackFirst == "image") {
                setAttributes({ backgroundStackFirst: "gradient" });
            }
            if (backgroundStackFirst == "gradient") {
                setAttributes({ backgroundStackFirst: "image" });
            }
        };
        
        
    
    if(styleMode=='disabled'){ return false; }
    // return (<p>boop</p>);
    return (
        <Fragment>
           <PanelBody title={__("Background", "pxblocks")} className="panel-background" initialOpen={false}>
					{/*  icon="format-image" */}
                <PanelRow>
                    <div className="px-sidepanel">
                        <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                            <label htmlFor="bggel-styleenabled-form-toggle">{__("Gel", "pxblocks")}</label>
                            <FormToggle
                                id="bggel-styleenabled-form-toggle"
                                label={__("Gel", "pxblocks")}
                                checked={bgGelEnabled}
                                onChange={toggleGelEnabled}
                            />
                        </div>
                        {/* When Gradient is first, order them that way */}
                        {backgroundStackFirst === "gradient" ? (
                            <Fragment>
                                <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                                    <label htmlFor="gradient-styleenabled-form-toggle">{__("Gradient", "pxblocks")}</label>
                                    <FormToggle
                                        id="gradient-styleenabled-form-toggle"
                                        label={__("Gradient", "pxblocks")}
                                        checked={bgGradientEnabled}
                                        onChange={toggleGradientEnabled}
                                    />
                                </div>
                                <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                                    <label htmlFor="bgimage-styleenabled-form-toggle">{__("Image", "pxblocks")}</label>
                                    <FormToggle
                                        id="bgimage-styleenabled-form-toggle"
                                        label={__("Image", "pxblocks")}
                                        checked={bgImageEnabled}
                                        onChange={toggleImageEnabled}
                                    />
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                                    <label htmlFor="bgimage-styleenabled-form-toggle">{__("Image", "pxblocks")}</label>
                                    <FormToggle
                                        id="bgimage-styleenabled-form-toggle"
                                        label={__("Image", "pxblocks")}
                                        checked={bgImageEnabled}
                                        onChange={toggleImageEnabled}
                                    />
                                </div>

                                <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                                    <label htmlFor="gradient-styleenabled-form-toggle">{__("Gradient", "pxblocks")}</label>
                                    <FormToggle
                                        id="gradient-styleenabled-form-toggle"
                                        label={__("Gradient", "pxblocks")}
                                        checked={bgGradientEnabled}
                                        onChange={toggleGradientEnabled}
                                    />
                                </div>
                            </Fragment>
                        )}
                        <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                            <label htmlFor="bg-styleenabled-form-toggle">{__("Base Color", "pxblocks")}</label>
                            <FormToggle
                                id="bg-styleenabled-form-toggle"
                                label={__("Base Color", "pxblocks")}
                                checked={bgColorEnabled}
                                onChange={toggleBgColorEnabled}
                            />
                        </div>
                        {bgGradientEnabled && bgImageEnabled && (
                            <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
                                <label htmlFor="bgimage-stackfirst-form-toggle">{__("Re-Order Gradient & Image", "pxblocks")}</label>
                                <FormToggle
                                    id="bgimage-stackfirst-form-toggle"
                                    label={__("Image over Gradient?", "pxblocks")}
                                    checked={backgroundStackFirst == "image"}
                                    onChange={toggleBgStack(backgroundStackFirst)}
                                />
                            </div>
                        )}


                        <BGTabs {...{ setAttributes, ...props }} />

                    </div>
                </PanelRow>
            </PanelBody>
        </Fragment>
    );
}
