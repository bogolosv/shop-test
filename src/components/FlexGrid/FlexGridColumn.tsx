import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';
import classes from './styles/index.module.scss';

type FlexGridColumnProps = {
	start?: boolean;
	end?: boolean;
	vrStart?: boolean;
	vrEnd?: boolean;
	grow?: boolean;
	noGrow?: boolean;
	shrink?: boolean;
	noShrink?: boolean;
	flexBasis?: string;
	basis50?: boolean;
	basis100?: boolean;
	wrappedText?: boolean;
	className?: string;
	style?: CSSProperties;
	children: React.ReactNode
}

export const FlexGridColumn: FC<FlexGridColumnProps> = (
	{
		className,
		children,
		start,
		end,
		vrStart,
		vrEnd,
		grow,
		noGrow,
		shrink,
		noShrink,
		flexBasis,
		basis50,
		basis100,
		wrappedText,
		style,
	}
) => {
	const componentClasses = classNames(
		classes.flexGridColumn,
		className,
		{
			[classes.flexGridColumn_start]: start,
			[classes.flexGridColumn_end]: end,
			[classes.flexGridColumn_vrStart]: vrStart,
			[classes.flexGridColumn_vrEnd]: vrEnd,
			[classes.flexGridColumn_grow]: grow,
			[classes.flexGridColumn_noGrow]: noGrow,
			[classes.flexGridColumn_shrink]: shrink,
			[classes.flexGridColumn_noShrink]: noShrink,
			[classes.flexGridColumn_basis50]: basis50,
			[classes.flexGridColumn_basis100]: basis100,
			[classes.flexGridColumn_wrappedText]: wrappedText,
		}
	);

	const styles = {
		flexBasis,
		...style
	};

	return (
		<div className={componentClasses} style={styles}>{children}</div>
	);
};
