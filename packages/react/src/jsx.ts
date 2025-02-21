import {
	ElementType,
	Key,
	Props,
	REACT_ELEMENT_FLAG,
	ReactElementType,
	Ref
} from 'share/reactElement';

const createReactElement = (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType => {
	return {
		$$typeof: REACT_ELEMENT_FLAG,
		type,
		props,
		ref,
		key,
		__demo: 'ztw'
	};
};

export const jsx = (
	outType: ElementType,
	config: any,
	...extraChildren: any
) => {
	const type = outType;
	const props: any = {};
	let ref, key;
	Reflect.ownKeys(config).map((configKey) => {
		switch (configKey) {
			case 'key': {
				key = String(config[configKey]);
				return;
			}
			case 'ref': {
				ref = config[configKey];
				return;
			}
			default: {
				props[configKey] = config[configKey];
			}
		}
	});
	if (extraChildren) {
		props.chidlren =
			extraChildren.length === 1 ? extraChildren[0] : extraChildren;
	}
	return createReactElement(type, key, ref, props);
};
