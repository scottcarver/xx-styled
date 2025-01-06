// Node modules
import classnames from "classnames";

// WordPress modules
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, store as blockEditorStore, __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import {Fragment } from '@wordpress/element';
import { createBlock, createBlocksFromInnerBlocksTemplate,} from '@wordpress/blocks';

// Custom modules
import './editor.scss';
import StyleControls from "./components/StyleControls";
import AdminStyle from "./components/AdminStyle";
import CustomBlockVariationPicker from "./components/CustomBlockVariationPicker";
import calculated from "../src/library/calculated/calculated";
import { Button } from "@wordpress/components";
import variations from "./variations";

// import BlockVariations from "./components/BlockVariations";

// Export Edit Function
export default function edit(props) {

	// Destructure props
	const {
		attributes: { 
			styleMode, 
			namedStyle,
			fgHeadlineFont,
			fgCopyFont,
			fgCaptionFont,
			blockID,
			clientUUID,
		},
		clientId,
		className, 
		setAttributes,
		isSelected
	} = props;

	/*	*/
	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlocks( clientId ).length > 0,
		[ clientId ]
	);

	const is_inner_block_selected = useSelect(
		( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( clientId )
	  );

	const { updateBlockAttributes, replaceInnerBlocks } = useDispatch( blockEditorStore );

	const MY_TEMPLATE = [
		[ 'core/heading', { content: 'To get started with this Styled Area, edit the sidebar, and delete the placeholder text' } ],
		[ 'core/paragraph', { content: 'Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.' } ],
	];

	// console.log("clientId was: " + clientId);
	
	// console.log('block variations??? ', BlockVariations);
	
	// This will be set upon initial creation, then saved
	/*
	if(!clientUUID){
		console.log("no unique id was set");
		setAttributes({
			clientUUID: clientId
		});
	}
	*/
	// Retrieve a CSS Object
	const styleObj = calculated.calculatedStyleObj(props.attributes);

	// Retrieve/Set Classes
	const classes = classnames(
		clientId,
		"xx-styled",
		"xx-styled--block",
		{[`xx-styled--headlinefont-${fgHeadlineFont}`]: (fgHeadlineFont !== 'inherit' && fgHeadlineFont)},
		{[`xx-styled--copyfont-${fgCopyFont}`]: (fgCopyFont !== 'inherit' && fgCopyFont) },
		{[`xx-styled--captionfont-${fgCaptionFont}`]: (fgCaptionFont !== 'inherit' && fgCaptionFont) }
	);

	// Create a BlockProps Object
	const blockProps = useBlockProps( {
		className: classes,
		// id: "yep",
		style: (styleMode == 'custom' || styleMode == 'named' ) ? styleObj : undefined,
		'data-theme': (styleMode == 'named') ? namedStyle : ''
	});


	/*
	const CustomAppender = ( { parentClientId } ) => {
		const { insertBlock } = useDispatch( blockEditorStore );
		const { openBlockInserter } = useDispatch( blockEditorStore );

		// Get the number of blocks within the parent block.
		const blockCount = useSelect( ( select ) => {
			const editor = select( blockEditorStore );
			if ( !parentClientId ) return 0; // Ensure parentClientId exists.
			return editor.getBlockOrder( parentClientId ).length;
		}, [ parentClientId ] );
	
		return (
			<Button
				variant="primary"
				onClick={ () => {
					if ( parentClientId ) {
						// Insert a block at the end of the InnerBlocks
						openBlockInserter( parentClientId );
						// insertBlock( createBlock( 'core/heading' ), blockCount, parentClientId );
					}
				} }
			>
				Add Heading
			</Button>
		);
	};
	*/
	
	//id: blockID,

	return (
		<div {...blockProps}>
			{/* Admin Padding Preview */}
			<AdminStyle {...props } />
			{/* Sidebar Controls */}
			<StyleControls {...props} />
			{/* Variation Picker */}
			<CustomBlockVariationPicker {...props} />
			{/* Inner Blocks */}
			<InnerBlocks 
				// InnerBlocks.DefaultBlockAppender
				// template={MY_TEMPLATE}
				renderAppender={  (isSelected && hasInnerBlocks) ? InnerBlocks.ButtonBlockAppender : false }
				prioritizedInserterBlocks= {[
					'core/heading', 
					'core/paragraph', 
					'core/image',
					'core/quote',
					'core/spacer',
					'core/code',
				]}
			/>
		
		</div>
	);
}
