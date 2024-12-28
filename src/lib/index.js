// place files you want to import through the `$lib` alias in this folder.
import EmblaCarousel from 'embla-carousel';

const action = (node, options = {}) => {
	const plugins = options?.plugins || [];
	const embla = EmblaCarousel(node, options, plugins);

	if (options?.store) {
		options.store.set(embla);
	}

	const init = () => node.dispatchEvent(new CustomEvent('e-init', { detail: embla }));
	const reinit = () => node.dispatchEvent(new CustomEvent('e-reinit'));
	const destroy = () => node.dispatchEvent(new CustomEvent('e-destroy'));
	const select = () => node.dispatchEvent(new CustomEvent('e-select'));
	const scroll = () => node.dispatchEvent(new CustomEvent('e-scroll'));
	const resize = () => node.dispatchEvent(new CustomEvent('e-resize'));
	const pointerUp = () => node.dispatchEvent(new CustomEvent('e-pointer-up'));
	const pointerDown = () => node.dispatchEvent(new CustomEvent('e-pointer-down'));

	embla.on('init', init);
	embla.on('reInit', reinit);
	embla.on('destroy', destroy);
	embla.on('select', select);
	embla.on('scroll', scroll);
	embla.on('resize', resize);
	embla.on('pointerUp', pointerUp);
	embla.on('pointerDown', pointerDown);

	return {
		destroy: () => {
			embla.destroy();
			if (options?.store) {
				options.store.set(undefined);
			}
		}
	};
};

export default action;
