/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'blank',
		title: __( 'Blank' ),
		// description: __( 'Use empty default Values' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
				/>
			</SVG>
		),
		attributes: {
			"backgroundColor": undefined,
			"foregroundColor": undefined,
			"headlineColor": undefined,
			"spacingMobile":"0px",
			"spacingTablet":"0px",
			"spacingDesktop":"0px"
		},
		innerBlocks: [
			["core/heading", { "level": 3, "content": "To get started with this Styled Area, edit the sidebar, and delete the placeholder text" }],
			["core/paragraph", { "content": "Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat." }]
		],
		// scope: [ 'block' ],
	},
	{
		name: 'light',
		title: __( 'Light' ),
		// description: __( 'Light Color theme' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
				/>
			</SVG>
		),
		attributes: {
			"backgroundColor": "#fff",
			"foregroundColor": "#000",
			"headlineColor": "#000",
			"spacingMobile":{"top":"30px","right":"30px","bottom":"30px","left":"30px"},
			"spacingTablet":{"top":"30px","right":"30px","bottom":"30px","left":"30px"},
			"spacingDesktop":{"top":"50px","right":"50px","bottom":"50px","left":"50px"}
		},
		innerBlocks: [
			["core/heading", { "level": 3, "content": "To get started with this Styled Area, edit the sidebar, and delete the placeholder text" }],
			["core/paragraph", { "content": "Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat." }]
		],
		// scope: [ 'block' ],
	},
	{
		name: 'dark',
		title: __( 'Dark' ),
		// description: __( 'Dark Color theme' ),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
				/>
			</SVG>
		),
		attributes: {
			"backgroundColor": "#222",
			"foregroundColor": "#fff",
			"headlineColor": "#fff",
			"spacingMobile":{"top":"30px","right":"30px","bottom":"30px","left":"30px"},
			"spacingTablet":{"top":"30px","right":"30px","bottom":"30px","left":"30px"},
			"spacingDesktop":{"top":"50px","right":"50px","bottom":"50px","left":"50px"}
		},
		innerBlocks: [
			["core/heading", { "level": 3, "content": "To get started with this Styled Area, edit the sidebar, and delete the placeholder text" }],
			["core/paragraph", { "content": "Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat." }]
		],
		
		// scope: [ 'block' ],
	},
	
];

export default variations;

