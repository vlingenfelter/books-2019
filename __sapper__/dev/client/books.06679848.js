import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, a as space, t as text, c as claim_element, b as children, g as detach_dev, h as claim_space, f as claim_text, j as attr_dev, J as set_style, l as add_location, m as insert_dev, o as append_dev, n as noop, q as create_component, r as claim_component, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.ac99252f.js';

/* src/components/Card.svelte generated by Svelte v3.16.0 */

const file = "src/components/Card.svelte";

function create_fragment(ctx) {
	let div3;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;

	const block = {
		c: function create() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("John Doe");
			t2 = space();
			p0 = element("p");
			t3 = text("Architect & Engineer");
			t4 = space();
			p1 = element("p");
			t5 = text("We love that guy");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, style: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "John Doe");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Architect & Engineer");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "We love that guy");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "alittlelife.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Avatar");
			set_style(img, "width", "300px");
			add_location(img, file, 51, 6, 1390);
			attr_dev(div0, "class", "flip-card-front svelte-npksks");
			add_location(div0, file, 50, 4, 1354);
			add_location(h1, file, 54, 6, 1502);
			add_location(p0, file, 55, 6, 1526);
			add_location(p1, file, 56, 6, 1560);
			attr_dev(div1, "class", "flip-card-back svelte-npksks");
			add_location(div1, file, 53, 4, 1467);
			attr_dev(div2, "class", "flip-card-inner svelte-npksks");
			add_location(div2, file, 49, 2, 1320);
			attr_dev(div3, "class", "flip-card svelte-npksks");
			add_location(div3, file, 48, 0, 1294);
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
			append_dev(div1, p0);
			append_dev(p0, t3);
			append_dev(div1, t4);
			append_dev(div1, p1);
			append_dev(p1, t5);
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

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/books.svelte generated by Svelte v3.16.0 */

function create_fragment$1(ctx) {
	let t;
	let current;
	const card = new Card({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			create_component(card.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
			claim_component(card.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(card, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(card, detaching);
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

class Books extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Books",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Books;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MuMDY2Nzk4NDguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
