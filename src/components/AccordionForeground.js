const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow, FormToggle} from '@wordpress/components';
import {ComboboxControl,  TabPanel, Button, ButtonGroup} from '@wordpress/components';
import { ColorPalette} from '@wordpress/block-editor';

export function AccordionForeground(props){

    console.log("have props", props);

    const {
        attributes: {
            namedstyle,
            styleEnabled,
            styleMode,
            heightEnabled,
            bgColorEnabled,
            bgGradientEnabled,
            bgImageEnabled,
            bgGelEnabled,
            backgroundStackFirst,
            headlineColor,
            foregroundColor,
            linkColor,
            dropcapColor,
            blockquoteColor,
            lineartColor,
            selectionFGColor,
            selectionBGColor,
            foregroundHeadlineFont,
            foregroundCopyFont,
            foregroundCaptionFont,
        },
        setAttributes
    } = props;

    const getForegroundTab = name => {
			
        if (name == "fgcolor") {
            return (
                <Fragment>
                    <div className="px-colorbox">
                        <h2>Headline</h2>
                        <input type="checkbox" id="headlineSwatch" name="headlineSwatch"></input>
                        <label htmlFor="headlineSwatch">Palette</label>
                        <ColorPalette value={headlineColor} onChange={headlineColor => setAttributes({ headlineColor })} />
                    </div>
                    <div className="px-colorbox">
                        <h2>Text</h2>
                        <input type="checkbox" id="textSwatch" name="textSwatch"></input>
                        <label htmlFor="textSwatch">Palette</label>
                        <ColorPalette value={foregroundColor} onChange={foregroundColor => setAttributes({ foregroundColor })} />
                    </div>
                    <div className="px-colorbox">
                        <h2>Link</h2>
                        <input type="checkbox" id="linkSwatch" name="linkSwatch"></input>
                        <label htmlFor="linkSwatch">Palette</label>
                        <ColorPalette value={linkColor} onChange={linkColor => setAttributes({ linkColor })} />
                    </div>
                    <div className="px-colorbox">
                        <h2>Block Quote</h2>
                        <input type="checkbox" id="blockquoteSwatch" name="blockquoteSwatch"></input>
                        <label htmlFor="blockquoteSwatch">Palette</label>
                        <ColorPalette value={blockquoteColor} onChange={blockquoteColor => setAttributes({ blockquoteColor })} />
                    </div>
                    <div className="px-colorbox">
                        <h2>Dropcap</h2>
                        <input type="checkbox" id="dropcapSwatch" name="dropcapSwatch"></input>
                        <label htmlFor="dropcapSwatch">Palette</label>
                        <ColorPalette value={dropcapColor} onChange={dropcapColor => setAttributes({ dropcapColor })} />
                    </div>
                    <div className="px-colorbox">
                        <h2>Lineart</h2>
                        <input type="checkbox" id="lineartSwatch" name="lineartSwatch"></input>
                        <label htmlFor="lineartSwatch">Palette</label>
                        <ColorPalette value={lineartColor} onChange={lineartColor => setAttributes({ lineartColor })} />
                    </div>
                </Fragment>
            );
        }
        if (name == "fgselection") {
            return (
                <Fragment>
                    <div className="px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow">
                        <h2>Selected Text</h2>
                        <input type="checkbox" id="selectionfgSwatch" name="selectionfgSwatch"></input>
                        <label htmlFor="selectionfgSwatch">Palette</label>
                        <ColorPalette
                            value={selectionFGColor}
                            onChange={selectionFGColor => setAttributes({ selectionFGColor })}
                        />
                    </div>
                    <div className="px-colorbox px-colorbox--marginabove">
                        <h2>Selected Text BG</h2>
                        <input type="checkbox" id="selectionbgSwatch" name="selectionbgSwatch"></input>
                        <label htmlFor="selectionbgSwatch">Palette</label>
                        <ColorPalette
                            value={selectionBGColor}
                            onChange={selectionBGColor => setAttributes({ selectionBGColor })}
                        />
                    </div>
                </Fragment>
            );
        }
    };


    return (
        <Fragment>
                {styleMode=='custom' && (
                <Fragment>
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
                                            className: "tab-one"
                                        },
                                        {
                                            name: "fgselection",
                                            title: "Selection",
                                            className: "tab-two"
                                        },
                                    ]}>
                                    {tab => getForegroundTab(tab.name)}
                                </TabPanel>
                            </div>
                        </PanelRow>
                    </PanelBody>
                </Fragment>
                )}
        </Fragment>
    );
}
