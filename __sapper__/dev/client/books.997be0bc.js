import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, J as onMount, e as element, c as claim_element, b as children, g as detach_dev, K as add_render_callback, l as add_location, m as insert_dev, L as add_resize_listener, n as noop, a as space, q as create_component, h as claim_space, r as claim_component, u as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './index.1c3a53cb.js';

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear()) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

function dsvFormat(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
}

var csv = dsvFormat(",");

var csvParse = csv.parse;

function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

function text(input, init) {
  return fetch(input, init).then(responseText);
}

function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return text(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

var csv$1 = dsvParse(csvParse);

/* src/components/BookList.svelte generated by Svelte v3.16.0 */
const file = "src/components/BookList.svelte";

function create_fragment(ctx) {
	let div;
	let div_resize_listener;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_render_callback(() => /*div_elementresize_handler*/ ctx[1].call(div));
			add_location(div, file, 16, 0, 228);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			div_resize_listener = add_resize_listener(div, /*div_elementresize_handler*/ ctx[1].bind(div));
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			div_resize_listener.cancel();
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
	let w;

	onMount(() => {
		csv$1("books.csv").then(data => {
			console.log(data);
		});
	});

	function div_elementresize_handler() {
		w = this.clientWidth;
		$$invalidate(0, w);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("w" in $$props) $$invalidate(0, w = $$props.w);
	};

	return [w, div_elementresize_handler];
}

class BookList extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BookList",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/books.svelte generated by Svelte v3.16.0 */

function create_fragment$1(ctx) {
	let t;
	let current;
	const booklist = new BookList({ $$inline: true });

	const block = {
		c: function create() {
			t = space();
			create_component(booklist.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
			claim_component(booklist.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(booklist, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(booklist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(booklist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(booklist, detaching);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MuOTk3YmUwYmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1kc3Yvc3JjL2Rzdi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1kc3Yvc3JjL2Nzdi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvdGV4dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mZXRjaC9zcmMvZHN2LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQm9va0xpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBFT0wgPSB7fSxcbiAgICBFT0YgPSB7fSxcbiAgICBRVU9URSA9IDM0LFxuICAgIE5FV0xJTkUgPSAxMCxcbiAgICBSRVRVUk4gPSAxMztcblxuZnVuY3Rpb24gb2JqZWN0Q29udmVydGVyKGNvbHVtbnMpIHtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImRcIiwgXCJyZXR1cm4ge1wiICsgY29sdW1ucy5tYXAoZnVuY3Rpb24obmFtZSwgaSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShuYW1lKSArIFwiOiBkW1wiICsgaSArIFwiXSB8fCBcXFwiXFxcIlwiO1xuICB9KS5qb2luKFwiLFwiKSArIFwifVwiKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tQ29udmVydGVyKGNvbHVtbnMsIGYpIHtcbiAgdmFyIG9iamVjdCA9IG9iamVjdENvbnZlcnRlcihjb2x1bW5zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJvdywgaSkge1xuICAgIHJldHVybiBmKG9iamVjdChyb3cpLCBpLCBjb2x1bW5zKTtcbiAgfTtcbn1cblxuLy8gQ29tcHV0ZSB1bmlxdWUgY29sdW1ucyBpbiBvcmRlciBvZiBkaXNjb3ZlcnkuXG5mdW5jdGlvbiBpbmZlckNvbHVtbnMocm93cykge1xuICB2YXIgY29sdW1uU2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGNvbHVtbnMgPSBbXTtcblxuICByb3dzLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgZm9yICh2YXIgY29sdW1uIGluIHJvdykge1xuICAgICAgaWYgKCEoY29sdW1uIGluIGNvbHVtblNldCkpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtblNldFtjb2x1bW5dID0gY29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb2x1bW5zO1xufVxuXG5mdW5jdGlvbiBwYWQodmFsdWUsIHdpZHRoKSB7XG4gIHZhciBzID0gdmFsdWUgKyBcIlwiLCBsZW5ndGggPSBzLmxlbmd0aDtcbiAgcmV0dXJuIGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbigwKSArIHMgOiBzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRZZWFyKHllYXIpIHtcbiAgcmV0dXJuIHllYXIgPCAwID8gXCItXCIgKyBwYWQoLXllYXIsIDYpXG4gICAgOiB5ZWFyID4gOTk5OSA/IFwiK1wiICsgcGFkKHllYXIsIDYpXG4gICAgOiBwYWQoeWVhciwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCksXG4gICAgICBtaW51dGVzID0gZGF0ZS5nZXRVVENNaW51dGVzKCksXG4gICAgICBzZWNvbmRzID0gZGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICByZXR1cm4gaXNOYU4oZGF0ZSkgPyBcIkludmFsaWQgRGF0ZVwiXG4gICAgICA6IGZvcm1hdFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCA0KSArIFwiLVwiICsgcGFkKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsIDIpICsgXCItXCIgKyBwYWQoZGF0ZS5nZXRVVENEYXRlKCksIDIpXG4gICAgICArIChtaWxsaXNlY29uZHMgPyBcIlRcIiArIHBhZChob3VycywgMikgKyBcIjpcIiArIHBhZChtaW51dGVzLCAyKSArIFwiOlwiICsgcGFkKHNlY29uZHMsIDIpICsgXCIuXCIgKyBwYWQobWlsbGlzZWNvbmRzLCAzKSArIFwiWlwiXG4gICAgICA6IHNlY29uZHMgPyBcIlRcIiArIHBhZChob3VycywgMikgKyBcIjpcIiArIHBhZChtaW51dGVzLCAyKSArIFwiOlwiICsgcGFkKHNlY29uZHMsIDIpICsgXCJaXCJcbiAgICAgIDogbWludXRlcyB8fCBob3VycyA/IFwiVFwiICsgcGFkKGhvdXJzLCAyKSArIFwiOlwiICsgcGFkKG1pbnV0ZXMsIDIpICsgXCJaXCJcbiAgICAgIDogXCJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlbGltaXRlcikge1xuICB2YXIgcmVGb3JtYXQgPSBuZXcgUmVnRXhwKFwiW1xcXCJcIiArIGRlbGltaXRlciArIFwiXFxuXFxyXVwiKSxcbiAgICAgIERFTElNSVRFUiA9IGRlbGltaXRlci5jaGFyQ29kZUF0KDApO1xuXG4gIGZ1bmN0aW9uIHBhcnNlKHRleHQsIGYpIHtcbiAgICB2YXIgY29udmVydCwgY29sdW1ucywgcm93cyA9IHBhcnNlUm93cyh0ZXh0LCBmdW5jdGlvbihyb3csIGkpIHtcbiAgICAgIGlmIChjb252ZXJ0KSByZXR1cm4gY29udmVydChyb3csIGkgLSAxKTtcbiAgICAgIGNvbHVtbnMgPSByb3csIGNvbnZlcnQgPSBmID8gY3VzdG9tQ29udmVydGVyKHJvdywgZikgOiBvYmplY3RDb252ZXJ0ZXIocm93KTtcbiAgICB9KTtcbiAgICByb3dzLmNvbHVtbnMgPSBjb2x1bW5zIHx8IFtdO1xuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VSb3dzKHRleHQsIGYpIHtcbiAgICB2YXIgcm93cyA9IFtdLCAvLyBvdXRwdXQgcm93c1xuICAgICAgICBOID0gdGV4dC5sZW5ndGgsXG4gICAgICAgIEkgPSAwLCAvLyBjdXJyZW50IGNoYXJhY3RlciBpbmRleFxuICAgICAgICBuID0gMCwgLy8gY3VycmVudCBsaW5lIG51bWJlclxuICAgICAgICB0LCAvLyBjdXJyZW50IHRva2VuXG4gICAgICAgIGVvZiA9IE4gPD0gMCwgLy8gY3VycmVudCB0b2tlbiBmb2xsb3dlZCBieSBFT0Y/XG4gICAgICAgIGVvbCA9IGZhbHNlOyAvLyBjdXJyZW50IHRva2VuIGZvbGxvd2VkIGJ5IEVPTD9cblxuICAgIC8vIFN0cmlwIHRoZSB0cmFpbGluZyBuZXdsaW5lLlxuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoTiAtIDEpID09PSBORVdMSU5FKSAtLU47XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChOIC0gMSkgPT09IFJFVFVSTikgLS1OO1xuXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XG4gICAgICBpZiAoZW9mKSByZXR1cm4gRU9GO1xuICAgICAgaWYgKGVvbCkgcmV0dXJuIGVvbCA9IGZhbHNlLCBFT0w7XG5cbiAgICAgIC8vIFVuZXNjYXBlIHF1b3Rlcy5cbiAgICAgIHZhciBpLCBqID0gSSwgYztcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaikgPT09IFFVT1RFKSB7XG4gICAgICAgIHdoaWxlIChJKysgPCBOICYmIHRleHQuY2hhckNvZGVBdChJKSAhPT0gUVVPVEUgfHwgdGV4dC5jaGFyQ29kZUF0KCsrSSkgPT09IFFVT1RFKTtcbiAgICAgICAgaWYgKChpID0gSSkgPj0gTikgZW9mID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoKGMgPSB0ZXh0LmNoYXJDb2RlQXQoSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiArIDEsIGkgLSAxKS5yZXBsYWNlKC9cIlwiL2csIFwiXFxcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGRlbGltaXRlciBvciBuZXdsaW5lLlxuICAgICAgd2hpbGUgKEkgPCBOKSB7XG4gICAgICAgIGlmICgoYyA9IHRleHQuY2hhckNvZGVBdChpID0gSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgZWxzZSBpZiAoYyAhPT0gREVMSU1JVEVSKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiwgaSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBsYXN0IHRva2VuIGJlZm9yZSBFT0YuXG4gICAgICByZXR1cm4gZW9mID0gdHJ1ZSwgdGV4dC5zbGljZShqLCBOKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKHQgPSB0b2tlbigpKSAhPT0gRU9GKSB7XG4gICAgICB2YXIgcm93ID0gW107XG4gICAgICB3aGlsZSAodCAhPT0gRU9MICYmIHQgIT09IEVPRikgcm93LnB1c2godCksIHQgPSB0b2tlbigpO1xuICAgICAgaWYgKGYgJiYgKHJvdyA9IGYocm93LCBuKyspKSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlZm9ybWF0Qm9keShyb3dzLCBjb2x1bW5zKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gZm9ybWF0VmFsdWUocm93W2NvbHVtbl0pO1xuICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHJvd3MsIGNvbHVtbnMpIHtcbiAgICBpZiAoY29sdW1ucyA9PSBudWxsKSBjb2x1bW5zID0gaW5mZXJDb2x1bW5zKHJvd3MpO1xuICAgIHJldHVybiBbY29sdW1ucy5tYXAoZm9ybWF0VmFsdWUpLmpvaW4oZGVsaW1pdGVyKV0uY29uY2F0KHByZWZvcm1hdEJvZHkocm93cywgY29sdW1ucykpLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRCb2R5KHJvd3MsIGNvbHVtbnMpIHtcbiAgICBpZiAoY29sdW1ucyA9PSBudWxsKSBjb2x1bW5zID0gaW5mZXJDb2x1bW5zKHJvd3MpO1xuICAgIHJldHVybiBwcmVmb3JtYXRCb2R5KHJvd3MsIGNvbHVtbnMpLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRSb3dzKHJvd3MpIHtcbiAgICByZXR1cm4gcm93cy5tYXAoZm9ybWF0Um93KS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Um93KHJvdykge1xuICAgIHJldHVybiByb3cubWFwKGZvcm1hdFZhbHVlKS5qb2luKGRlbGltaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIlxuICAgICAgICA6IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogcmVGb3JtYXQudGVzdCh2YWx1ZSArPSBcIlwiKSA/IFwiXFxcIlwiICsgdmFsdWUucmVwbGFjZSgvXCIvZywgXCJcXFwiXFxcIlwiKSArIFwiXFxcIlwiXG4gICAgICAgIDogdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBwYXJzZVJvd3M6IHBhcnNlUm93cyxcbiAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICBmb3JtYXRCb2R5OiBmb3JtYXRCb2R5LFxuICAgIGZvcm1hdFJvd3M6IGZvcm1hdFJvd3MsXG4gICAgZm9ybWF0Um93OiBmb3JtYXRSb3csXG4gICAgZm9ybWF0VmFsdWU6IGZvcm1hdFZhbHVlXG4gIH07XG59XG4iLCJpbXBvcnQgZHN2IGZyb20gXCIuL2Rzdi5qc1wiO1xuXG52YXIgY3N2ID0gZHN2KFwiLFwiKTtcblxuZXhwb3J0IHZhciBjc3ZQYXJzZSA9IGNzdi5wYXJzZTtcbmV4cG9ydCB2YXIgY3N2UGFyc2VSb3dzID0gY3N2LnBhcnNlUm93cztcbmV4cG9ydCB2YXIgY3N2Rm9ybWF0ID0gY3N2LmZvcm1hdDtcbmV4cG9ydCB2YXIgY3N2Rm9ybWF0Qm9keSA9IGNzdi5mb3JtYXRCb2R5O1xuZXhwb3J0IHZhciBjc3ZGb3JtYXRSb3dzID0gY3N2LmZvcm1hdFJvd3M7XG5leHBvcnQgdmFyIGNzdkZvcm1hdFJvdyA9IGNzdi5mb3JtYXRSb3c7XG5leHBvcnQgdmFyIGNzdkZvcm1hdFZhbHVlID0gY3N2LmZvcm1hdFZhbHVlO1xuIiwiZnVuY3Rpb24gcmVzcG9uc2VUZXh0KHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gZmV0Y2goaW5wdXQsIGluaXQpLnRoZW4ocmVzcG9uc2VUZXh0KTtcbn1cbiIsImltcG9ydCB7Y3N2UGFyc2UsIGRzdkZvcm1hdCwgdHN2UGFyc2V9IGZyb20gXCJkMy1kc3ZcIjtcbmltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHRcIjtcblxuZnVuY3Rpb24gZHN2UGFyc2UocGFyc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0LCBpbml0LCByb3cpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgaW5pdCA9PT0gXCJmdW5jdGlvblwiKSByb3cgPSBpbml0LCBpbml0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0ZXh0KGlucHV0LCBpbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcGFyc2UocmVzcG9uc2UsIHJvdyk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRzdihkZWxpbWl0ZXIsIGlucHV0LCBpbml0LCByb3cpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGluaXQgPT09IFwiZnVuY3Rpb25cIikgcm93ID0gaW5pdCwgaW5pdCA9IHVuZGVmaW5lZDtcbiAgdmFyIGZvcm1hdCA9IGRzdkZvcm1hdChkZWxpbWl0ZXIpO1xuICByZXR1cm4gdGV4dChpbnB1dCwgaW5pdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiBmb3JtYXQucGFyc2UocmVzcG9uc2UsIHJvdyk7XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIGNzdiA9IGRzdlBhcnNlKGNzdlBhcnNlKTtcbmV4cG9ydCB2YXIgdHN2ID0gZHN2UGFyc2UodHN2UGFyc2UpO1xuIiwiPHNjcmlwdD5cblx0aW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkLnN2ZWx0ZSc7XG5cdGltcG9ydCAqIGFzIGZldGNoIGZyb20gJ2QzLWZldGNoJztcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0bGV0IHc7XG5cblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0ZmV0Y2guY3N2KCdib29rcy5jc3YnKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHR9KVxuXHR9KVxuXG5cbjwvc2NyaXB0PlxuXG48ZGl2IGJpbmQ6Y2xpZW50V2lkdGg9e3d9PlxuPC9kaXY+Il0sIm5hbWVzIjpbImRzdiIsImNzdiIsImZldGNoLmNzdiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ1IsR0FBRyxHQUFHLEVBQUU7SUFDUixLQUFLLEdBQUcsRUFBRTtJQUNWLE9BQU8sR0FBRyxFQUFFO0lBQ1osTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsU0FBUyxlQUFlLENBQUMsT0FB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
