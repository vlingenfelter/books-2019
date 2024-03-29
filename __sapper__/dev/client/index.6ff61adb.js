import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, J as onMount, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, n as noop, q as create_component, r as claim_component, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.2e7b8135.js';

/* src/components/ClickCard.svelte generated by Svelte v3.16.0 */
const file = "src/components/ClickCard.svelte";

function create_fragment(ctx) {
	let div3;
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let t2;

	const block = {
		c: function create() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("front");
			t1 = space();
			div1 = element("div");
			t2 = text("back");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "front");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, "back");
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card__face card__face--front svelte-19kp34e");
			add_location(div0, file, 68, 4, 1100);
			attr_dev(div1, "class", "card__face card__face--back svelte-19kp34e");
			add_location(div1, file, 69, 4, 1158);
			attr_dev(div2, "class", "card svelte-19kp34e");
			add_location(div2, file, 67, 2, 1077);
			attr_dev(div3, "class", "scene scene--card svelte-19kp34e");
			add_location(div3, file, 66, 0, 1043);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, t2);
		},
		p: noop,
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

	onMount(() => {
		card = document.querySelector(".card");

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
		return { props, card };
	};

	$$self.$inject_state = $$props => {
		if ("props" in $$props) $$invalidate(0, props = $$props.props);
		if ("card" in $$props) card = $$props.card;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmZmNjFhZGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NsaWNrQ2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdFxuXHRleHBvcnQgbGV0IHByb3BzID0ge1xuXHQgICAgaW1nOiAnYm9va3MvYWxpdHRsZWxpZmUuanBnJyxcblx0ICAgIHRpdGxlOiAnQSBMaXR0bGUgTGlmZScsXG5cdCAgICBhdXRob3I6ICdIYW55YSBZYW5hZ2loYXJhJyxcblx0ICAgIGFnZTogJzQnLFxuXHQgICAgeWVhcjogJzIwMTYnLFxuXHQgIH1cblxuXHRsZXQgY2FyZDtcblxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcblx0XHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1mbGlwcGVkJyk7XG5cdFx0fSk7XG5cdH0pO1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlPlxuLnNjZW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46Z2xvYmFsKC5jYXJkLmlzLWZsaXBwZWQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jYXJkX19mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2FyZF9fZmFjZS0tZnJvbnQge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5jYXJkX19mYWNlLS1iYWNrIHtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJzY2VuZSBzY2VuZS0tY2FyZFwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCI+ZnJvbnQ8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCI+YmFjazwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BR1ksS0FBSztFQUNaLEdBQUcsRUFBRSx1QkFBdUI7RUFDNUIsS0FBSyxFQUFFLGVBQWU7RUFDdEIsTUFBTSxFQUFFLGtCQUFrQjtFQUMxQixHQUFHLEVBQUUsR0FBRztFQUNSLElBQUksRUFBRSxNQUFNOzs7S0FHWixJQUFJOztDQUVSLE9BQU87RUFDTixJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPOztFQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsT0FBTztHQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
