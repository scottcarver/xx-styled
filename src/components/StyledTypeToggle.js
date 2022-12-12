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
                        isDefault
                        isPrimary={styleMode === "disabled"}
                        onClick={() => {
                            setAttributes({ styleMode: "disabled" });
                        }}>
                        Disabled
                    </Button>
                    <Button
                        isDefault
                        isPrimary={styleMode === "named"}
                        onClick={() => {
                            setAttributes({ styleMode: "named" });
                        }}>
                        Named
                    </Button>
                    <Button
                        isDefault
                        isPrimary={styleMode === "custom"}
                        onClick={() => {
                            setAttributes({ styleMode: "custom" });
                        }}>
                        Custom
                    </Button>
                </ButtonGroup>
            </div>
        </Fragment>
    )
}
