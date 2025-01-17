const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow, ComboboxControl} from '@wordpress/components';

export function AccordionSavedStyles(props){

    const {
        attributes: {
            namedStyle,
            styleMode
        },
        setAttributes
    } = props;

    // don't show the control when it is disabled, or a named styled
    if(styleMode!='named'){ return false; }

    return (
        <Fragment>
            <PanelBody title={__("Saved Styles", "pxblocks")}  className="panel-savedstyles" initialOpen={true}>
                {/*  icon="welcome-widgets-menus" */}
                <PanelRow>
                    <div className="px-sidepanel">
                        <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright px-simplerow--hascomboboxcontrol">
                            <ComboboxControl
                                label="Select a Style"
                                placeholder= 'Default'
                                value={namedStyle}
                                allowReset={true}
                                options={global_named_styles}
                                onChange={(newval) => setAttributes({ namedStyle: newval })}
                                onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
                                    option.label.toLowerCase().startsWith(newval.toLowerCase())
                                ))}
                            />
                        </div>

                        <div className="px-simplerow px-simplerow--hasstyletiles">
                            {global_named_styles.map((option) => (
                                 <div className={`styled-tile ${namedStyle == option.value ? "styled-tile--active" : ""}`}
                                key={option.value}>
                                    <button className={"xx-styled xx-styled--hasstyle"} data-theme={option.value} onClick={() => setAttributes({ namedStyle: option.value })} style={{padding:"0px 20px 0px 10px"}} aria-label={"select style " + option.value}>
                                        <h3>Aa</h3>
                                        <p>Lorem Ipsum eget tortor risus.</p>
                                        {/* <span></span><span></span><span></span><span></span> */}
                                    </button>
                                    {option.label}  
                                    <br />
                                    <a href={`../styled/${option.value}/`}>View</a> &nbsp;
                                    <a href={`post.php?post=${option.id}&action=edit`}>Edit</a>
                                    {/* {JSON.stringify(option)} */}
                                </div>
                            ))}
                        </div>
                        <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft">
                            <a href="post-new.php?post_type=styled" style={{padding: "5px"}}>+ Create New Style</a>	
                        </div> 
                    </div>
                </PanelRow>
            </PanelBody>
        </Fragment>
			
    );
}
