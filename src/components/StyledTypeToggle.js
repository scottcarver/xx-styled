const { __ } = wp.i18n;
import {Fragment} from '@wordpress/element';
import {PanelBody, PanelRow, FormToggle} from '@wordpress/components';
import {ComboboxControl, ButtonGroup, Button} from '@wordpress/components';

export function StyledTypeToggle(props){

    console.log("have props", props);

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
                            setAttributes({ styleEnabled: false });
                        }}>
                        Disabled
                    </Button>
                    <Button
                        isDefault
                        isPrimary={styleMode === "named"}
                        onClick={() => {
                            setAttributes({ styleMode: "named" });
                            setAttributes({ styleEnabled: true });
                        }}>
                        Named
                    </Button>
                    <Button
                        isDefault
                        isPrimary={styleMode === "custom"}
                        onClick={() => {
                            setAttributes({ styleMode: "custom" });
                            setAttributes({ styleEnabled: true });
                        }}>
                        Custom
                    </Button>
                </ButtonGroup>
            </div>
        </Fragment>
    )
}
