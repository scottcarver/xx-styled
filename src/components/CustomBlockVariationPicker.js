import { useBlockProps, InnerBlocks, store as blockEditorStore, __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import variations from "../variations";
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlock, createBlocksFromInnerBlocksTemplate,} from '@wordpress/blocks';

export default function CustomBlockVariationPicker({ attributes, setAttributes, clientId }){

    console.log("clientId were ", clientId);
    const { updateBlockAttributes, replaceInnerBlocks } = useDispatch( blockEditorStore );

	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

    const MY_TEMPLATE = [
		[ 'core/heading', { content: 'To get started with this Styled Area, edit the sidebar, and delete the placeholder text' } ],
		[ 'core/paragraph', { content: 'Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.' } ],
	];

    if(hasInnerBlocks){
        return false;
    }

    return (
        
        <BlockVariationPicker 
            label="Start a Styled Area"
            variations={variations} 
            instructions="Start with common values or skip and choose a Saved Style"
            onSelect={ ( nextVariation ) => {
                console.log("next variation", nextVariation);
                // Next Variation
                if(nextVariation){
                    if (nextVariation.attributes) {
                        setAttributes( nextVariation.attributes );
                    }
                    if(nextVariation.attributes.name === 'saved'){
                        setAttributes({ styleMode: 'named' });
                    }
                    if ( nextVariation.innerBlocks ) {
                        replaceInnerBlocks(
                            clientId,
                            createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks),
                            true
                        );
                    }
                // Skip	
                } else {
                    replaceInnerBlocks(
                        clientId,
                        createBlocksFromInnerBlocksTemplate(MY_TEMPLATE),
                        true
                    );
                }
            } }
            allowSkip 
        />
    );
}
