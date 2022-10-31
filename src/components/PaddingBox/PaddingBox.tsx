import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';
import classes from './styles/index.module.scss';

type PaddingBoxProps = {
	className?: string;
	style?: React.CSSProperties;
	dataTestId?: string;
	tiny?: boolean;
	hrTiny?: boolean;
	vrTiny?: boolean;
	topTiny?: boolean;
	rightTiny?: boolean;
	bottomTiny?: boolean;
	leftTiny?: boolean;
	hrSiblingTiny?: boolean;
	vrSiblingTiny?: boolean;
	scanty?: boolean;
	hrScanty?: boolean;
	vrScanty?: boolean;
	topScanty?: boolean;
	rightScanty?: boolean;
	bottomScanty?: boolean;
	leftScanty?: boolean;
	small?: boolean;
	hrSmall?: boolean;
	vrSmall?: boolean;
	topSmall?: boolean;
	rightSmall?: boolean;
	bottomSmall?: boolean;
	leftSmall?: boolean;
	hrSiblingSmall?: boolean;
	vrSiblingSmall?: boolean;
	normal?: boolean;
	hrNormal?: boolean;
	vrNormal?: boolean;
	topNormal?: boolean;
	rightNormal?: boolean;
	bottomNormal?: boolean;
	leftNormal?: boolean;
	hrSiblingNormal?: boolean;
	vrSiblingNormal?: boolean;
	medium?: boolean;
	hrMedium?: boolean;
	vrMedium?: boolean;
	topMedium?: boolean;
	rightMedium?: boolean;
	bottomMedium?: boolean;
	leftMedium?: boolean;
	hrSiblingMedium?: boolean;
	vrSiblingMedium?: boolean;
	large?: boolean;
	hrLarge?: boolean;
	vrLarge?: boolean;
	topLarge?: boolean;
	rightLarge?: boolean;
	bottomLarge?: boolean;
	leftLarge?: boolean;
	extraLarge?: boolean;
	hrSiblingLarge?: boolean;
	vrSiblingLarge?: boolean;
	hrExtraLarge?: boolean;
	vrExtraLarge?: boolean;
	topExtraLarge?: boolean;
	rightExtraLarge?: boolean;
	bottomExtraLarge?: boolean;
	leftExtraLarge?: boolean;
	hrSiblingExtraLarge?: boolean;
	vrSiblingExtraLarge?: boolean;
	inline?: boolean;
}

export const PaddingBox = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & PaddingBoxProps>((
	{
		children,
		className,
		style,
		scanty,
		hrScanty,
		vrScanty,
		topScanty,
		rightScanty,
		bottomScanty,
		leftScanty,
		tiny,
		hrTiny,
		vrTiny,
		topTiny,
		rightTiny,
		bottomTiny,
		leftTiny,
		hrSiblingTiny,
		vrSiblingTiny,
		small,
		hrSmall,
		vrSmall,
		topSmall,
		rightSmall,
		bottomSmall,
		leftSmall,
		hrSiblingSmall,
		vrSiblingSmall,
		normal,
		hrNormal,
		vrNormal,
		topNormal,
		rightNormal,
		bottomNormal,
		leftNormal,
		hrSiblingNormal,
		vrSiblingNormal,
		medium,
		hrMedium,
		vrMedium,
		topMedium,
		rightMedium,
		bottomMedium,
		leftMedium,
		hrSiblingMedium,
		vrSiblingMedium,
		large,
		hrLarge,
		vrLarge,
		topLarge,
		rightLarge,
		bottomLarge,
		leftLarge,
		extraLarge,
		hrSiblingLarge,
		vrSiblingLarge,
		hrExtraLarge,
		vrExtraLarge,
		topExtraLarge,
		rightExtraLarge,
		bottomExtraLarge,
		leftExtraLarge,
		hrSiblingExtraLarge,
		vrSiblingExtraLarge,
		dataTestId,
		inline
	}, ref
) => {
	const componentClasses = classNames(
		classes.paddingBox,
		className,
		{
			[classes.paddingBox_inline]: inline,
			[classes.paddingBox_scanty]: scanty,
			[classes.paddingBox_hrScanty]: hrScanty,
			[classes.paddingBox_vrScanty]: vrScanty,
			[classes.paddingBox_topScanty]: topScanty,
			[classes.paddingBox_rightScanty]: rightScanty,
			[classes.paddingBox_bottomScanty]: bottomScanty,
			[classes.paddingBox_leftScanty]: leftScanty,
			[classes.paddingBox_tiny]: tiny,
			[classes.paddingBox_hrTiny]: hrTiny,
			[classes.paddingBox_vrTiny]: vrTiny,
			[classes.paddingBox_topTiny]: topTiny,
			[classes.paddingBox_rightTiny]: rightTiny,
			[classes.paddingBox_bottomTiny]: bottomTiny,
			[classes.paddingBox_leftTiny]: leftTiny,
			[classes.paddingBox_hrSiblingTiny]: hrSiblingTiny,
			[classes.paddingBox_vrSiblingTiny]: vrSiblingTiny,
			[classes.paddingBox_small]: small,
			[classes.paddingBox_hrSmall]: hrSmall,
			[classes.paddingBox_vrSmall]: vrSmall,
			[classes.paddingBox_topSmall]: topSmall,
			[classes.paddingBox_rightSmall]: rightSmall,
			[classes.paddingBox_bottomSmall]: bottomSmall,
			[classes.paddingBox_leftSmall]: leftSmall,
			[classes.paddingBox_hrSiblingSmall]: hrSiblingSmall,
			[classes.paddingBox_vrSiblingSmall]: vrSiblingSmall,
			[classes.paddingBox_normal]: normal,
			[classes.paddingBox_hrNormal]: hrNormal,
			[classes.paddingBox_vrNormal]: vrNormal,
			[classes.paddingBox_topNormal]: topNormal,
			[classes.paddingBox_rightNormal]: rightNormal,
			[classes.paddingBox_bottomNormal]: bottomNormal,
			[classes.paddingBox_leftNormal]: leftNormal,
			[classes.paddingBox_hrSiblingNormal]: hrSiblingNormal,
			[classes.paddingBox_vrSiblingNormal]: vrSiblingNormal,
			[classes.paddingBox_medium]: medium,
			[classes.paddingBox_hrMedium]: hrMedium,
			[classes.paddingBox_vrMedium]: vrMedium,
			[classes.paddingBox_topMedium]: topMedium,
			[classes.paddingBox_rightMedium]: rightMedium,
			[classes.paddingBox_bottomMedium]: bottomMedium,
			[classes.paddingBox_leftMedium]: leftMedium,
			[classes.paddingBox_hrSiblingMedium]: hrSiblingMedium,
			[classes.paddingBox_vrSiblingMedium]: vrSiblingMedium,
			[classes.paddingBox_large]: large,
			[classes.paddingBox_hrLarge]: hrLarge,
			[classes.paddingBox_vrLarge]: vrLarge,
			[classes.paddingBox_topLarge]: topLarge,
			[classes.paddingBox_rightLarge]: rightLarge,
			[classes.paddingBox_bottomLarge]: bottomLarge,
			[classes.paddingBox_hrSiblingLarge]: hrSiblingLarge,
			[classes.paddingBox_vrSiblingLarge]: vrSiblingLarge,
			[classes.paddingBox_leftLarge]: leftLarge,
			[classes.paddingBox_extraLarge]: extraLarge,
			[classes.paddingBox_hrExtraLarge]: hrExtraLarge,
			[classes.paddingBox_vrExtraLarge]: vrExtraLarge,
			[classes.paddingBox_topExtraLarge]: topExtraLarge,
			[classes.paddingBox_rightExtraLarge]: rightExtraLarge,
			[classes.paddingBox_bottomExtraLarge]: bottomExtraLarge,
			[classes.paddingBox_leftExtraLarge]: leftExtraLarge,
			[classes.paddingBox_hrSiblingExtraLarge]: hrSiblingExtraLarge,
			[classes.paddingBox_vrSiblingExtraLarge]: vrSiblingExtraLarge,
			[classes.paddingBox_vrSiblingExtraLarge]: vrSiblingExtraLarge,
		}
	);

	return (
		<div
			className={componentClasses}
			style={style}
			data-testid={dataTestId}
			ref={ref}
		>
			{children}
		</div>
	);
});

PaddingBox.displayName = 'PaddingBox';

export type { PaddingBoxProps };
