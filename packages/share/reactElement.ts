export type ElementType = any;
export type Key = string | number | undefined;
export type Props = any;
export type Ref = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	__demo: string;
}

export const REACT_ELEMENT_FLAG =
	typeof Symbol === 'function' && Symbol.for
		? Symbol.for('reactElement')
		: 0xeac7;
