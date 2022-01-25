export const getValueAtIndex = (index, href) => {
	var str = href;
	return str.split('/')[index];
};
