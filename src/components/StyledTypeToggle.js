const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {ButtonGroup, Button} from '@wordpress/components';

export function StyledTypeToggle(props){

    // console.log("have props", props);

    const {
        attributes: {
            styleMode,
        },
        setAttributes
    } = props;


    return (
        <Fragment>

            {/* Mode Toggle */}
            <div id="styledarea-toggle" className="px-buttongroup px-buttongroup--centered px-buttongroup--padbottom">
                <ButtonGroup aria-label={__("Style Mode")}>
                    <Button
                        variant={styleMode === "custom" ? "primary" : ""}
                        onClick={() => { setAttributes({ styleMode: "custom" }); }}>
                        Custom
                    </Button>
                    <Button
                        variant={styleMode === "named" ? "primary" : ""}
                        onClick={() => { setAttributes({ styleMode: "named" }); }}>
                        Saved
                    </Button>
                    <Button
                        variant={styleMode === "disabled" ? "primary" : ""}
                        onClick={() => { setAttributes({ styleMode: "disabled" }); }}>
                        Disabled
                    </Button>
                </ButtonGroup>
            </div>
        </Fragment>
    )
}
