import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, J as onMount, e as element, a as space, t as text, c as claim_element, b as children, g as detach_dev, h as claim_space, f as claim_text, j as attr_dev, l as add_location, k as null_to_empty, m as insert_dev, o as append_dev, B as set_data_dev, n as noop, q as create_component, r as claim_component, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.2e7b8135.js';

/* src/components/ClickCard.svelte generated by Svelte v3.16.0 */
const file = "src/components/ClickCard.svelte";

function create_fragment(ctx) {
	let div3;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h1;
	let t1_value = /*props*/ ctx[0].title + "";
	let t1;
	let t2;
	let p;
	let t3_value = /*props*/ ctx[0].author + "";
	let t3;
	let div2_class_value;

	const block = {
		c: function create() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*props*/ ctx[0].img)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*props*/ ctx[0].title);
			attr_dev(img, "class", "svelte-1rehdbb");
			add_location(img, file, 65, 5, 1054);
			attr_dev(div0, "class", "card__face card__face--front svelte-1rehdbb");
			add_location(div0, file, 64, 4, 1006);
			add_location(h1, file, 68, 5, 1157);
			add_location(p, file, 69, 6, 1186);
			attr_dev(div1, "class", "card__face card__face--back svelte-1rehdbb");
			add_location(div1, file, 67, 4, 1110);
			attr_dev(div2, "class", div2_class_value = "" + (null_to_empty(`card ${/*props*/ ctx[0].img}`) + " svelte-1rehdbb"));
			add_location(div2, file, 63, 2, 968);
			attr_dev(div3, "class", "scene scene--card svelte-1rehdbb");
			add_location(div3, file, 62, 0, 934);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, img);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*props*/ 1 && img.src !== (img_src_value = /*props*/ ctx[0].img)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*props*/ 1 && img_alt_value !== (img_alt_value = /*props*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*props*/ 1 && t1_value !== (t1_value = /*props*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*props*/ 1 && t3_value !== (t3_value = /*props*/ ctx[0].author + "")) set_data_dev(t3, t3_value);

			if (dirty & /*props*/ 1 && div2_class_value !== (div2_class_value = "" + (null_to_empty(`card ${/*props*/ ctx[0].img}`) + " svelte-1rehdbb"))) {
				attr_dev(div2, "class", div2_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { props = {
		img: "books/alittlelife.jpg",
		title: "A Little Life",
		author: "Hanya Yanagihara",
		age: "4",
		year: "2016"
	} } = $$props;

	let card;
	let el;

	onMount(() => {
		card = document.querySelector(`.${props.img}`);

		card.addEventListener("click", function () {
			card.classList.toggle("is-flipped");
		});
	});

	const writable_props = ["props"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ClickCard> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("props" in $$props) $$invalidate(0, props = $$props.props);
	};

	$$self.$capture_state = () => {
		return { props, card, el };
	};

	$$self.$inject_state = $$props => {
		if ("props" in $$props) $$invalidate(0, props = $$props.props);
		if ("card" in $$props) card = $$props.card;
		if ("el" in $$props) el = $$props.el;
	};

	return [props];
}

class ClickCard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { props: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ClickCard",
			options,
			id: create_fragment.name
		});
	}

	get props() {
		throw new Error("<ClickCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set props(value) {
		throw new Error("<ClickCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.16.0 */
const file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
	let h1;
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let current;
	const clickcard = new ClickCard({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Hello. Here are some books.");
			t1 = space();
			img = element("img");
			t2 = space();
			create_component(clickcard.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Hello. Here are some books.");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
			t2 = claim_space(nodes);
			claim_component(clickcard.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$1, 10, 0, 124);
			attr_dev(img, "alt", "Line");
			if (img.src !== (img_src_value = "./allbooks.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-ojzt9c");
			add_location(img, file$1, 11, 0, 161);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t2, anchor);
			mount_component(clickcard, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(clickcard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(clickcard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t2);
			destroy_component(clickcard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTY0NDgzMmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NsaWNrQ2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBwcm9wcyA9IHtcblx0ICAgIGltZzogJ2Jvb2tzL2FsaXR0bGVsaWZlLmpwZycsXG5cdCAgICB0aXRsZTogJ0EgTGl0dGxlIExpZmUnLFxuXHQgICAgYXV0aG9yOiAnSGFueWEgWWFuYWdpaGFyYScsXG5cdCAgICBhZ2U6ICc0Jyxcblx0ICAgIHllYXI6ICcyMDE2Jyxcblx0ICB9XG5cblx0bGV0IGNhcmQ7XG5cdGxldCBlbDtcblxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cHJvcHMuaW1nfWApO1xuXHRcdGNhcmQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0ICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZsaXBwZWQnKTtcblx0XHR9KTtcblx0fSk7XG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG4uc2NlbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Z2xvYmFsKC5jYXJkLmlzLWZsaXBwZWQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jYXJkX19mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmltZyB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4uY2FyZF9fZmFjZS0tYmFjayB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwic2NlbmUgc2NlbmUtLWNhcmRcIj5cbiAgPGRpdiBjbGFzcz17YGNhcmQgJHtwcm9wcy5pbWd9YH0+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIj5cbiAgICBcdDxpbWcgc3JjPXtwcm9wcy5pbWd9IGFsdD17cHJvcHMudGl0bGV9ID5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCI+XG4gICAgXHQ8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICA8cD57cHJvcHMuYXV0aG9yfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzBCQW9FVSxHQUFLLElBQUMsS0FBSzs7OzswQkFDWCxHQUFLLElBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FKUCxHQUFLLElBQUMsR0FBRztrREFBTyxHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7O29GQUZwQixHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFFaEIsR0FBSyxJQUFDLEdBQUc7Ozs7MkVBQU8sR0FBSyxJQUFDLEtBQUs7Ozs7aUVBR2hDLEdBQUssSUFBQyxLQUFLO2lFQUNYLEdBQUssSUFBQyxNQUFNOzs2R0FOQSxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1RG5CLEtBQUs7RUFDWixHQUFHLEVBQUUsdUJBQXVCO0VBQzVCLEtBQUssRUFBRSxlQUFlO0VBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7RUFDMUIsR0FBRyxFQUFFLEdBQUc7RUFDUixJQUFJLEVBQUUsTUFBTTs7O0tBR1osSUFBSTtLQUNKLEVBQUU7O0NBRU4sT0FBTztFQUNOLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxHQUFHOztFQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsT0FBTztHQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
