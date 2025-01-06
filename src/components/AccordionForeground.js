const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow, TabPanel,  GradientPicker} from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';
import ColorBox from "./ColorBox";


export function AccordionForeground(props){

    // console.log("have props", props);

    const {
        attributes,
        setAttributes
    } = props;

    const themeColors = useSetting( 'color.palette' );
    // upgrade to use "wp.blockEditor.useSettings" instead

    const hasThemeColors = Array.isArray(themeColors) && themeColors.length > 0;

    // Foreground Colorbox Data
    let fgcolorboxes = [
        {'id':'text', 'label':'Text', 'target':'foregroundColor'},
        {'id':'headline', 'label':'Headline', 'target':'headlineColor'},
        {'id':'link', 'label':'Link', 'target':'linkColor'},
        {'id':'blockquote', 'label':'Block Quote', 'target':'blockquoteColor'},
        {'id':'caption', 'label':'Caption', 'target':'captionColor'},
        {'id':'dropcap', 'label':'Dropcap', 'target':'dropcapColor'},
        {'id':'lineart', 'label':'Lineart', 'target':'lineartColor'}
    ];

    // Forground Colorbox Selection Data
    let selectioncolorboxes = [
        {'id':'selectionfg', 'label':'Selected Text', 'target':'selectionFGColor'},
        {'id':'selectionbg', 'label':'Selected Text BG', 'target':'selectionBGColor'}
    ];
   
    // Foreground Tab Contents
    const getForegroundTab = name => {
        // Conditinal Interface for "Foreground" Colors
        if (name == "fgcolor") {
            return (
                <Fragment>
                    {/* Display all Foreground Colorboxes */}
                    {fgcolorboxes.map((currentValue) => {  
                        return( 
                            <ColorBox 
                                label={currentValue.label}
                                id={currentValue.id}
                                target={currentValue.target}
                                key={currentValue.id}
                                attributes={attributes} 
                                setAttributes={setAttributes}
                            /> 
                        )
                    })}
                    {/* Display Key Gradient */}
                    <div className="px-gradientbox">
                        <h2>Key Gradient</h2>
                        <GradientPicker value={attributes.keyGradient} onChange={keyGradient => setAttributes({ keyGradient })} />
                    </div>
                    
                </Fragment>
            );
        }
        // Conditinal Interface for "Foreground Selection" Colors
        if (name == "fgselection") {
            return (
                <Fragment>
                    {/* Add as a Component */}
                    {selectioncolorboxes.map((currentValue) => {  
                        return( 
                            <ColorBox 
                                label={currentValue.label}
                                id={currentValue.id}
                                target={currentValue.target}
                                key={currentValue.id}
                                attributes={attributes} 
                                setAttributes={setAttributes}
                            /> 
                        )
                    })}
                </Fragment>
            );
        }
    };

    return (
        <Fragment>
            {attributes.styleMode=='custom' && (
                <PanelBody title={__("Foreground", "pxblocks")}  className="panel-foreground" initialOpen={false}>
                    <PanelRow>
                        <div className="px-sidepanel">
                            <TabPanel
                                className="px-tabwrap px-tabwrap--centered px-tabwrap--margintop"
                                activeclassName="active-tab"
                                tabs={[
                                    {
                                        name: "fgcolor",
                                        title: "Color",
                                        className: "tab-fgcolor"
                                    },
                                    {
                                        name: "fgselection",
                                        title: "Selection",
                                        className: "tab-fgselection"
                                    },
                                ]}>
                                {tab => getForegroundTab(tab.name)}
                            </TabPanel>
                        </div>
                    </PanelRow>
                </PanelBody>
            )}
        </Fragment>
    );
}
