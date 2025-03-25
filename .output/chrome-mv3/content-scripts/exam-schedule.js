var examSchedule = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineContentScript(definition2) {
    return definition2;
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  let legacy_mode_flag = false;
  function enable_legacy_mode_flag() {
    legacy_mode_flag = true;
  }
  enable_legacy_mode_flag();
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const PROPS_IS_IMMUTABLE = 1;
  const PROPS_IS_RUNES = 1 << 1;
  const PROPS_IS_UPDATED = 1 << 2;
  const PROPS_IS_BINDABLE = 1 << 3;
  const PROPS_IS_LAZY_INITIAL = 1 << 4;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const UNINITIALIZED = Symbol();
  const FILENAME = Symbol("filename");
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  const DEV = true;
  var is_array = Array.isArray;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  function run(fn) {
    return fn();
  }
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  const EFFECT_TRANSPARENT = 1 << 16;
  const LEGACY_DERIVED_PROP = 1 << 17;
  const INSPECT_EFFECT = 1 << 18;
  const HEAD_EFFECT = 1 << 19;
  const EFFECT_HAS_DERIVED = 1 << 20;
  const STATE_SYMBOL = Symbol("$state");
  const STATE_SYMBOL_METADATA = Symbol("$state metadata");
  const LEGACY_PROPS = Symbol("legacy props");
  function equals$1(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function component_api_changed(parent, method, component) {
    {
      const error = new Error(`component_api_changed
${parent} called \`${method}\` on an instance of ${component}, which is no longer valid in Svelte 5
https://svelte.dev/e/component_api_changed`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function component_api_invalid_new(component, name) {
    {
      const error = new Error(`component_api_invalid_new
Attempted to instantiate ${component} with \`new ${name}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.
https://svelte.dev/e/component_api_invalid_new`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function derived_references_self() {
    {
      const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function effect_in_teardown(rune) {
    {
      const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function effect_in_unowned_derived() {
    {
      const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function effect_orphan(rune) {
    {
      const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function effect_update_depth_exceeded() {
    {
      const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function rune_outside_svelte(rune) {
    {
      const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function state_descriptors_fixed() {
    {
      const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function state_prototype_fixed() {
    {
      const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function state_unsafe_local_read() {
    {
      const error = new Error(`state_unsafe_local_read
Reading state that was created inside the same derived is forbidden. Consider using \`untrack\` to read locally created state
https://svelte.dev/e/state_unsafe_local_read`);
      error.name = "Svelte error";
      throw error;
    }
  }
  function state_unsafe_mutation() {
    {
      const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
      error.name = "Svelte error";
      throw error;
    }
  }
  let inspect_effects = /* @__PURE__ */ new Set();
  function set_inspect_effects(v) {
    inspect_effects = v;
  }
  function source(v, stack2) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals: equals$1,
      version: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false) {
    var _a2;
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
      ((_a2 = component_context.l).s ?? (_a2.s = [])).push(s);
    }
    return s;
  }
  function mutable_state(v, immutable = false) {
    return /* @__PURE__ */ push_derived_source(/* @__PURE__ */ mutable_source(v, immutable));
  }
  // @__NO_SIDE_EFFECTS__
  function push_derived_source(source2) {
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      if (derived_sources === null) {
        set_derived_sources([source2]);
      } else {
        derived_sources.push(source2);
      }
    }
    return source2;
  }
  function set(source2, value) {
    if (active_reaction !== null && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
    // we allow the mutation.
    (derived_sources === null || !derived_sources.includes(source2))) {
      state_unsafe_mutation();
    }
    return internal_set(source2, value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      source2.v = value;
      source2.version = increment_version();
      mark_reactions(source2, DIRTY);
      if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0) {
        if (new_deps !== null && new_deps.includes(source2)) {
          set_signal_status(active_effect, DIRTY);
          schedule_effect(active_effect);
        } else {
          if (untracked_writes === null) {
            set_untracked_writes([source2]);
          } else {
            untracked_writes.push(source2);
          }
        }
      }
      if (inspect_effects.size > 0) {
        const inspects = Array.from(inspect_effects);
        var previously_flushing_effect = is_flushing_effect;
        set_is_flushing_effect(true);
        try {
          for (const effect2 of inspects) {
            if ((effect2.f & CLEAN) !== 0) {
              set_signal_status(effect2, MAYBE_DIRTY);
            }
            if (check_dirtiness(effect2)) {
              update_effect(effect2);
            }
          }
        } finally {
          set_is_flushing_effect(previously_flushing_effect);
        }
        inspect_effects.clear();
      }
    }
    return value;
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var runes = is_runes();
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      if (!runes && reaction === active_effect) continue;
      if ((flags & INSPECT_EFFECT) !== 0) {
        inspect_effects.add(reaction);
        continue;
      }
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  var bold = "font-weight: bold";
  var normal = "font-weight: normal";
  function ownership_invalid_mutation(component, owner) {
    {
      console.warn(`%c[svelte] ownership_invalid_mutation
%c${component ? `${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}
https://svelte.dev/e/ownership_invalid_mutation`, bold, normal);
    }
  }
  function state_proxy_equality_mismatch(operator) {
    {
      console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
    }
  }
  let hydrating = false;
  const boundaries = {};
  const chrome_pattern = /at (?:.+ \()?(.+):(\d+):(\d+)\)?$/;
  const firefox_pattern = /@(.+):(\d+):(\d+)$/;
  function get_stack() {
    const stack2 = new Error().stack;
    if (!stack2) return null;
    const entries = [];
    for (const line of stack2.split("\n")) {
      let match = chrome_pattern.exec(line) ?? firefox_pattern.exec(line);
      if (match) {
        entries.push({
          file: match[1],
          line: +match[2],
          column: +match[3]
        });
      }
    }
    return entries;
  }
  function get_component() {
    var _a2;
    const stack2 = (_a2 = get_stack()) == null ? void 0 : _a2.slice(4);
    if (!stack2) return null;
    for (let i = 0; i < stack2.length; i++) {
      const entry = stack2[i];
      const modules = boundaries[entry.file];
      if (!modules) {
        if (i === 0) return null;
        continue;
      }
      for (const module of modules) {
        if (module.end == null) {
          return null;
        }
        if (module.start.line < entry.line && module.end.line > entry.line) {
          return module.component;
        }
      }
    }
    return null;
  }
  function mark_module_start() {
    var _a2, _b2;
    const start = (_a2 = get_stack()) == null ? void 0 : _a2[2];
    if (start) {
      (boundaries[_b2 = start.file] ?? (boundaries[_b2] = [])).push({
        start,
        // @ts-expect-error
        end: null,
        // @ts-expect-error we add the component at the end, since HMR will overwrite the function
        component: null
      });
    }
  }
  function mark_module_end(component) {
    var _a2;
    const end = (_a2 = get_stack()) == null ? void 0 : _a2[2];
    if (end) {
      const boundaries_file = boundaries[end.file];
      const boundary = boundaries_file[boundaries_file.length - 1];
      boundary.end = end;
      boundary.component = component;
    }
  }
  function widen_ownership(from, to) {
    if (to.owners === null) {
      return;
    }
    while (from) {
      if (from.owners === null) {
        to.owners = null;
        break;
      }
      for (const owner of from.owners) {
        to.owners.add(owner);
      }
      from = from.parent;
    }
  }
  function has_owner(metadata, component) {
    if (metadata.owners === null) {
      return true;
    }
    return metadata.owners.has(component) || metadata.parent !== null && has_owner(metadata.parent, component);
  }
  function get_owner(metadata) {
    var _a2;
    return ((_a2 = metadata == null ? void 0 : metadata.owners) == null ? void 0 : _a2.values().next().value) ?? get_owner(
      /** @type {ProxyMetadata} */
      metadata.parent
    );
  }
  function check_ownership(metadata) {
    const component = get_component();
    if (component && !has_owner(metadata, component)) {
      let original = get_owner(metadata);
      if (original[FILENAME] !== component[FILENAME]) {
        ownership_invalid_mutation(component[FILENAME], original[FILENAME]);
      } else {
        ownership_invalid_mutation();
      }
    }
  }
  function proxy(value, parent = null, prev) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = source(0);
    if (is_proxied_array) {
      sources.set("length", source(
        /** @type {any[]} */
        value.length
      ));
    }
    var metadata;
    {
      metadata = {
        parent,
        owners: null
      };
      {
        metadata.owners = parent === null ? component_context !== null ? /* @__PURE__ */ new Set([component_context.function]) : null : /* @__PURE__ */ new Set();
      }
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            s = source(descriptor.value);
            sources.set(prop2, s);
          } else {
            set(s, proxy(descriptor.value, metadata));
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              sources.set(prop2, source(UNINITIALIZED));
            }
          } else {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n < ls.v) {
                set(ls, n);
              }
            }
            set(s, UNINITIALIZED);
            update_version(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          var _a2;
          if (prop2 === STATE_SYMBOL_METADATA) {
            return metadata;
          }
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata));
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            {
              var prop_metadata = v == null ? void 0 : v[STATE_SYMBOL_METADATA];
              if (prop_metadata && (prop_metadata == null ? void 0 : prop_metadata.parent) !== metadata) {
                widen_ownership(metadata, prop_metadata);
              }
            }
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2 == null ? void 0 : source2.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          var _a2;
          if (prop2 === STATE_SYMBOL_METADATA) {
            return true;
          }
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            if (s === void 0) {
              s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED);
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var _a2;
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = source(UNINITIALIZED);
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
              s = source(void 0);
              set(s, proxy(value2, metadata));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            set(s, proxy(value2, metadata));
          }
          {
            var prop_metadata = value2 == null ? void 0 : value2[STATE_SYMBOL_METADATA];
            if (prop_metadata && (prop_metadata == null ? void 0 : prop_metadata.parent) !== metadata) {
              widen_ownership(metadata, prop_metadata);
            }
            check_ownership(metadata);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor == null ? void 0 : descriptor.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            update_version(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function update_version(signal, d = 1) {
    set(signal, signal.v + d);
  }
  function get_proxied_value(value) {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
    return value;
  }
  function is(a, b) {
    return Object.is(get_proxied_value(a), get_proxied_value(b));
  }
  function init_array_prototype_warnings() {
    const array_prototype2 = Array.prototype;
    const cleanup = Array.__svelte_cleanup;
    if (cleanup) {
      cleanup();
    }
    const { indexOf, lastIndexOf, includes } = array_prototype2;
    array_prototype2.indexOf = function(item, from_index) {
      const index2 = indexOf.call(this, item, from_index);
      if (index2 === -1) {
        for (let i = from_index ?? 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.indexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.lastIndexOf = function(item, from_index) {
      const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
      if (index2 === -1) {
        for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.lastIndexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.includes = function(item, from_index) {
      const has = includes.call(this, item, from_index);
      if (!has) {
        for (let i = 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.includes(...)");
            break;
          }
        }
      }
      return has;
    };
    Array.__svelte_cleanup = () => {
      array_prototype2.indexOf = indexOf;
      array_prototype2.lastIndexOf = lastIndexOf;
      array_prototype2.includes = includes;
    };
  }
  function strict_equals(a, b, equal = true) {
    try {
      if (a === b !== (get_proxied_value(a) === get_proxied_value(b))) {
        state_proxy_equality_mismatch(equal ? "===" : "!==");
      }
    } catch {
    }
    return a === b === equal;
  }
  function equals(a, b, equal = true) {
    if (a == b !== (get_proxied_value(a) == get_proxied_value(b))) {
      state_proxy_equality_mismatch(equal ? "==" : "!=");
    }
    return a == b === equal;
  }
  var $window;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    element_prototype.__click = void 0;
    element_prototype.__className = "";
    element_prototype.__attributes = null;
    element_prototype.__styles = null;
    element_prototype.__e = void 0;
    Text.prototype.__t = void 0;
    {
      element_prototype.__svelte_meta = null;
      init_array_prototype_warnings();
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function first_child(fragment, is_text) {
    {
      var first = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ get_first_child(
          /** @type {Node} */
          fragment
        )
      );
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    if (active_effect === null) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_HAS_DERIVED;
    }
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    const signal = {
      children: null,
      ctx: component_context,
      deps: null,
      equals: equals$1,
      f: flags,
      fn,
      reactions: null,
      v: (
        /** @type {V} */
        null
      ),
      version: 0,
      parent: parent_derived ?? active_effect
    };
    if (parent_derived !== null) {
      (parent_derived.children ?? (parent_derived.children = [])).push(signal);
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_children(derived2) {
    var children = derived2.children;
    if (children !== null) {
      derived2.children = null;
      for (var i = 0; i < children.length; i += 1) {
        var child2 = children[i];
        if ((child2.f & DERIVED) !== 0) {
          destroy_derived(
            /** @type {Derived} */
            child2
          );
        } else {
          destroy_effect(
            /** @type {Effect} */
            child2
          );
        }
      }
    }
  }
  let stack = [];
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      let prev_inspect_effects = inspect_effects;
      set_inspect_effects(/* @__PURE__ */ new Set());
      try {
        if (stack.includes(derived2)) {
          derived_references_self();
        }
        stack.push(derived2);
        destroy_derived_children(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
        set_inspect_effects(prev_inspect_effects);
        stack.pop();
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived2, status);
    if (!derived2.equals(value)) {
      derived2.v = value;
      derived2.version = increment_version();
    }
  }
  function destroy_derived(derived2) {
    destroy_derived_children(derived2);
    remove_reactions(derived2, 0);
    set_signal_status(derived2, DESTROYED);
    derived2.v = derived2.children = derived2.deps = derived2.ctx = derived2.reactions = null;
  }
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan(rune);
    }
    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0) {
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown(rune);
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var is_root = (type & ROOT_EFFECT) !== 0;
    var parent_effect = active_effect;
    {
      while (parent_effect !== null && (parent_effect.f & INSPECT_EFFECT) !== 0) {
        parent_effect = parent_effect.parent;
      }
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      deriveds: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent: is_root ? null : parent_effect,
      prev: null,
      teardown: null,
      transitions: null,
      version: 0
    };
    {
      effect2.component_function = dev_current_component_function;
    }
    if (sync) {
      var previously_flushing_effect = is_flushing_effect;
      try {
        set_is_flushing_effect(true);
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_HAS_DERIVED) === 0;
    if (!inert && !is_root && push2) {
      if (parent_effect !== null) {
        push_effect(effect2, parent_effect);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.children ?? (derived2.children = [])).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect("$effect");
    var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
    {
      define_property(fn, "name", {
        value: "$effect"
      });
    }
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push({
        fn,
        effect: active_effect,
        reaction: active_reaction
      });
    } else {
      var signal = effect(fn);
      return signal;
    }
  }
  function user_pre_effect(fn) {
    validate_effect("$effect.pre");
    {
      define_property(fn, "name", {
        value: "$effect.pre"
      });
    }
    return render_effect(fn);
  }
  function component_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function render_effect(fn) {
    return create_effect(RENDER_EFFECT, fn, true);
  }
  function template_effect(fn) {
    {
      define_property(fn, "name", {
        value: "{expression}"
      });
    }
    return block(fn);
  }
  function block(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }
  function branch(fn, push2 = true) {
    return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_deriveds(signal) {
    var deriveds = signal.deriveds;
    if (deriveds !== null) {
      signal.deriveds = null;
      for (var i = 0; i < deriveds.length; i += 1) {
        destroy_derived(deriveds[i]);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      var next = effect2.next;
      destroy_effect(effect2, remove_dom);
      effect2 = next;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      var node = effect2.nodes_start;
      var end = effect2.nodes_end;
      while (node !== null) {
        var next = node === end ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_next_sibling(node)
        );
        node.remove();
        node = next;
      }
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    destroy_effect_deriveds(effect2);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    {
      effect2.component_function = null;
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next = effect2.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition of effect2.transitions) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    if (check_dirtiness(effect2)) {
      update_effect(effect2);
    }
    effect2.f ^= INERT;
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition of effect2.transitions) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  let is_micro_task_queued$1 = false;
  let current_queued_micro_tasks = [];
  function process_micro_tasks() {
    is_micro_task_queued$1 = false;
    const tasks = current_queued_micro_tasks.slice();
    current_queued_micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (!is_micro_task_queued$1) {
      is_micro_task_queued$1 = true;
      queueMicrotask(process_micro_tasks);
    }
    current_queued_micro_tasks.push(fn);
  }
  const handled_errors = /* @__PURE__ */ new WeakSet();
  let is_throwing_error = false;
  let is_micro_task_queued = false;
  let last_scheduled_effect = null;
  let is_flushing_effect = false;
  let is_destroying_effect = false;
  function set_is_flushing_effect(value) {
    is_flushing_effect = value;
  }
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let queued_root_effects = [];
  let flush_count = 0;
  let dev_effect_stack = [];
  let active_reaction = null;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let derived_sources = null;
  function set_derived_sources(sources) {
    derived_sources = sources;
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let current_version = 1;
  let skip_reaction = false;
  let component_context = null;
  let dev_current_component_function = null;
  function increment_version() {
    return ++current_version;
  }
  function is_runes() {
    return !legacy_mode_flag || component_context !== null && component_context.l === null;
  }
  function check_dirtiness(reaction) {
    var _a2, _b2;
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        if ((flags & DISCONNECTED) !== 0) {
          for (i = 0; i < dependencies.length; i++) {
            ((_a2 = dependencies[i]).reactions ?? (_a2.reactions = [])).push(reaction);
          }
          reaction.f ^= DISCONNECTED;
        }
        for (i = 0; i < dependencies.length; i++) {
          var dependency = dependencies[i];
          if (check_dirtiness(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (is_unowned && active_effect !== null && !skip_reaction && !((_b2 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _b2.includes(reaction))) {
            (dependency.reactions ?? (dependency.reactions = [])).push(reaction);
          }
          if (dependency.version > reaction.version) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function propagate_error(error, effect2) {
    var current = effect2;
    while (current !== null) {
      if ((current.f & BOUNDARY_EFFECT) !== 0) {
        try {
          current.fn(error);
          return;
        } catch {
          current.f ^= BOUNDARY_EFFECT;
        }
      }
      current = current.parent;
    }
    is_throwing_error = false;
    throw error;
  }
  function should_rethrow_error(effect2) {
    return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
  }
  function handle_error(error, effect2, previous_effect, component_context2) {
    var _a2, _b2;
    if (is_throwing_error) {
      if (previous_effect === null) {
        is_throwing_error = false;
      }
      if (should_rethrow_error(effect2)) {
        throw error;
      }
      return;
    }
    if (previous_effect !== null) {
      is_throwing_error = true;
    }
    if (component_context2 === null || !(error instanceof Error) || handled_errors.has(error)) {
      propagate_error(error, effect2);
      return;
    }
    handled_errors.add(error);
    const component_stack = [];
    const effect_name = (_a2 = effect2.fn) == null ? void 0 : _a2.name;
    if (effect_name) {
      component_stack.push(effect_name);
    }
    let current_context = component_context2;
    while (current_context !== null) {
      {
        var filename = (_b2 = current_context.function) == null ? void 0 : _b2[FILENAME];
        if (filename) {
          const file = filename.split("/").pop();
          component_stack.push(file);
        }
      }
      current_context = current_context.p;
    }
    const indent = /Firefox/.test(navigator.userAgent) ? "  " : "	";
    define_property(error, "message", {
      value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
    });
    define_property(error, "component_stack", {
      value: component_stack
    });
    const stack2 = error.stack;
    if (stack2) {
      const lines = stack2.split("\n");
      const new_lines = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes("svelte/src/internal")) {
          continue;
        }
        new_lines.push(line);
      }
      define_property(error, "stack", {
        value: new_lines.join("\n")
      });
    }
    propagate_error(error, effect2);
    if (should_rethrow_error(effect2)) {
      throw error;
    }
  }
  function update_reaction(reaction) {
    var _a2;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var prev_derived_sources = derived_sources;
    var previous_component_context = component_context;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
    derived_sources = null;
    component_context = reaction.ctx;
    try {
      var result2 = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      return result2;
    } finally {
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      derived_sources = prev_derived_sources;
      component_context = previous_component_context;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = reactions.indexOf(signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var previous_component_context = component_context;
    active_effect = effect2;
    {
      var previous_component_fn = dev_current_component_function;
      dev_current_component_function = effect2.component_function;
    }
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      destroy_effect_deriveds(effect2);
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.version = current_version;
      if (DEV) {
        dev_effect_stack.push(effect2);
      }
    } catch (error) {
      handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
    } finally {
      active_effect = previous_effect;
      {
        dev_current_component_function = previous_component_fn;
      }
    }
  }
  function log_effect_stack() {
    console.error(
      "Last ten effects were: ",
      dev_effect_stack.slice(-10).map((d) => d.fn)
    );
    dev_effect_stack = [];
  }
  function infinite_loop_guard() {
    if (flush_count > 1e3) {
      flush_count = 0;
      try {
        effect_update_depth_exceeded();
      } catch (error) {
        {
          define_property(error, "stack", {
            value: ""
          });
        }
        if (last_scheduled_effect !== null) {
          {
            try {
              handle_error(error, last_scheduled_effect, null, null);
            } catch (e) {
              log_effect_stack();
              throw e;
            }
          }
        } else {
          {
            log_effect_stack();
          }
          throw error;
        }
      }
    }
    flush_count++;
  }
  function flush_queued_root_effects(root_effects) {
    var length = root_effects.length;
    if (length === 0) {
      return;
    }
    infinite_loop_guard();
    var previously_flushing_effect = is_flushing_effect;
    is_flushing_effect = true;
    try {
      for (var i = 0; i < length; i++) {
        var effect2 = root_effects[i];
        if ((effect2.f & CLEAN) === 0) {
          effect2.f ^= CLEAN;
        }
        var collected_effects = [];
        process_effects(effect2, collected_effects);
        flush_queued_effects(collected_effects);
      }
    } finally {
      is_flushing_effect = previously_flushing_effect;
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
            if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
              if (effect2.teardown === null) {
                unlink_effect(effect2);
              } else {
                effect2.fn = null;
              }
            }
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
    }
  }
  function process_deferred() {
    is_micro_task_queued = false;
    if (flush_count > 1001) {
      return;
    }
    const previous_queued_root_effects = queued_root_effects;
    queued_root_effects = [];
    flush_queued_root_effects(previous_queued_root_effects);
    if (!is_micro_task_queued) {
      flush_count = 0;
      last_scheduled_effect = null;
      {
        dev_effect_stack = [];
      }
    }
  }
  function schedule_effect(signal) {
    {
      if (!is_micro_task_queued) {
        is_micro_task_queued = true;
        queueMicrotask(process_deferred);
      }
    }
    last_scheduled_effect = signal;
    var effect2 = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  function process_effects(effect2, collected_effects) {
    var current_effect = effect2.first;
    var effects = [];
    main_loop: while (current_effect !== null) {
      var flags = current_effect.f;
      var is_branch = (flags & BRANCH_EFFECT) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      var sibling2 = current_effect.next;
      if (!is_skippable_branch && (flags & INERT) === 0) {
        if ((flags & RENDER_EFFECT) !== 0) {
          if (is_branch) {
            current_effect.f ^= CLEAN;
          } else {
            try {
              if (check_dirtiness(current_effect)) {
                update_effect(current_effect);
              }
            } catch (error) {
              handle_error(error, current_effect, null, current_effect.ctx);
            }
          }
          var child2 = current_effect.first;
          if (child2 !== null) {
            current_effect = child2;
            continue;
          }
        } else if ((flags & EFFECT) !== 0) {
          effects.push(current_effect);
        }
      }
      if (sibling2 === null) {
        let parent = current_effect.parent;
        while (parent !== null) {
          if (effect2 === parent) {
            break main_loop;
          }
          var parent_sibling = parent.next;
          if (parent_sibling !== null) {
            current_effect = parent_sibling;
            continue main_loop;
          }
          parent = parent.parent;
        }
      }
      current_effect = sibling2;
    }
    for (var i = 0; i < effects.length; i++) {
      child2 = effects[i];
      collected_effects.push(child2);
      process_effects(child2, collected_effects);
    }
  }
  function get(signal) {
    var _a2;
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (is_derived && (flags & DESTROYED) !== 0) {
      var value = execute_derived(
        /** @type {Derived} */
        signal
      );
      destroy_derived(
        /** @type {Derived} */
        signal
      );
      return value;
    }
    if (active_reaction !== null) {
      if (derived_sources !== null && derived_sources.includes(signal)) {
        state_unsafe_local_read();
      }
      var deps = active_reaction.deps;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal];
      } else {
        new_deps.push(signal);
      }
      if (untracked_writes !== null && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0 && untracked_writes.includes(signal)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived2.parent;
      var target = derived2;
      while (parent !== null) {
        if ((parent.f & DERIVED) !== 0) {
          var parent_derived = (
            /** @type {Derived} */
            parent
          );
          target = parent_derived;
          parent = parent_derived.parent;
        } else {
          var parent_effect = (
            /** @type {Effect} */
            parent
          );
          if (!((_a2 = parent_effect.deriveds) == null ? void 0 : _a2.includes(target))) {
            (parent_effect.deriveds ?? (parent_effect.deriveds = [])).push(target);
          }
          break;
        }
      }
    }
    if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      if (check_dirtiness(derived2)) {
        update_derived(derived2);
      }
    }
    return signal.v;
  }
  function untrack(fn) {
    const previous_reaction = active_reaction;
    try {
      active_reaction = null;
      return fn();
    } finally {
      active_reaction = previous_reaction;
    }
  }
  const STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      m: false,
      s: props,
      x: null,
      l: null
    };
    if (legacy_mode_flag && !runes) {
      component_context.l = {
        s: null,
        u: null,
        r1: [],
        r2: source(false)
      };
    }
    {
      component_context.function = fn;
      dev_current_component_function = fn;
    }
  }
  function pop(component) {
    var _a2;
    const context_stack_item = component_context;
    if (context_stack_item !== null) {
      if (component !== void 0) {
        context_stack_item.x = component;
      }
      const component_effects = context_stack_item.e;
      if (component_effects !== null) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        context_stack_item.e = null;
        try {
          for (var i = 0; i < component_effects.length; i++) {
            var component_effect = component_effects[i];
            set_active_effect(component_effect.effect);
            set_active_reaction(component_effect.reaction);
            effect(component_effect.fn);
          }
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
        }
      }
      component_context = context_stack_item.p;
      {
        dev_current_component_function = ((_a2 = context_stack_item.p) == null ? void 0 : _a2.function) ?? null;
      }
      context_stack_item.m = true;
    }
    return component || /** @type {T} */
    {};
  }
  function deep_read_state(value) {
    if (typeof value !== "object" || !value || value instanceof EventTarget) {
      return;
    }
    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key in value) {
        const prop2 = value[key];
        if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
          deep_read(prop2);
        }
      }
    }
  }
  function deep_read(value, visited = /* @__PURE__ */ new Set()) {
    if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
    !(value instanceof EventTarget) && !visited.has(value)) {
      visited.add(value);
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key in value) {
        try {
          deep_read(value[key], visited);
        } catch (e) {
        }
      }
      const proto = get_prototype_of(value);
      if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
        const descriptors = get_descriptors(proto);
        for (let key in descriptors) {
          const get2 = descriptors[key].get;
          if (get2) {
            try {
              get2.call(value);
            } catch (e) {
            }
          }
        }
      }
    }
  }
  {
    let throw_rune_error = function(rune) {
      if (!(rune in globalThis)) {
        let value;
        Object.defineProperty(globalThis, rune, {
          configurable: true,
          // eslint-disable-next-line getter-return
          get: () => {
            if (value !== void 0) {
              return value;
            }
            rune_outside_svelte(rune);
          },
          set: (v) => {
            value = v;
          }
        });
      }
    };
    throw_rune_error("$state");
    throw_rune_error("$effect");
    throw_rune_error("$derived");
    throw_rune_error("$inspect");
    throw_rune_error("$props");
    throw_rune_error("$bindable");
  }
  function add_locations(fn, filename, locations) {
    return (...args) => {
      const dom = fn(...args);
      var node = dom.nodeType === 11 ? dom.firstChild : dom;
      assign_locations(node, filename, locations);
      return dom;
    };
  }
  function assign_location(element, filename, location2) {
    element.__svelte_meta = {
      loc: { file: filename, line: location2[0], column: location2[1] }
    };
    if (location2[2]) {
      assign_locations(element.firstChild, filename, location2[2]);
    }
  }
  function assign_locations(node, filename, locations) {
    var i = 0;
    while (node && i < locations.length) {
      if (node.nodeType === 1) {
        assign_location(
          /** @type {Element} */
          node,
          filename,
          locations[i++]
        );
      }
      node = node.nextSibling;
    }
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture, passive) {
    var options = { capture, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || dom === window || dom === document) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function handle_event_propagation(event2) {
    var _a2;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a2 = event2.composedPath) == null ? void 0 : _a2.call(event2)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated !== void 0 && !/** @type {any} */
          current_target.disabled) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function create_fragment_from_html(html) {
    var elem = document.createElement("template");
    elem.innerHTML = html;
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function template(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {Node} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function text(value = "") {
    {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
  }
  function comment() {
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text2.__t ?? (text2.__t = text2.nodeValue))) {
      text2.__t = str;
      text2.nodeValue = str == null ? "" : str + "";
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive });
        var n = document_listeners.get(event_name);
        if (n === void 0) {
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component = void 0;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        component = Component(anchor_node, props) || {};
        if (context) {
          pop();
        }
      });
      return () => {
        var _a2;
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function check_target(target) {
    if (target) {
      component_api_invalid_new(target[FILENAME] ?? "a component", target.name);
    }
  }
  function legacy_api() {
    const component = component_context == null ? void 0 : component_context.function;
    function error(method) {
      var _a2;
      const parent = ((_a2 = get_component()) == null ? void 0 : _a2[FILENAME]) ?? "Something";
      component_api_changed(parent, method, component[FILENAME]);
    }
    return {
      $destroy: () => error("$destroy()"),
      $on: () => error("$on(...)"),
      $set: () => error("$set(...)")
    };
  }
  function if_block(node, fn, elseif = false) {
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = elseif ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      if (condition) {
        if (consequent_effect) {
          resume_effect(consequent_effect);
        } else if (fn2) {
          consequent_effect = branch(() => fn2(anchor));
        }
        if (alternate_effect) {
          pause_effect(alternate_effect, () => {
            alternate_effect = null;
          });
        }
      } else {
        if (alternate_effect) {
          resume_effect(alternate_effect);
        } else if (fn2) {
          alternate_effect = branch(() => fn2(anchor));
        }
        if (consequent_effect) {
          pause_effect(consequent_effect, () => {
            consequent_effect = null;
          });
        }
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state, items, controlled_anchor, items_map) {
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state = { flags, items: /* @__PURE__ */ new Map(), first: null };
    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = parent_node.appendChild(create_text());
    }
    var fallback = null;
    var was_empty = false;
    block(() => {
      var collection = get_collection();
      var array = is_array(collection) ? collection : collection == null ? [] : array_from(collection);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      {
        var effect2 = (
          /** @type {Effect} */
          active_reaction
        );
        reconcile(
          array,
          state,
          anchor,
          render_fn,
          flags,
          (effect2.f & INERT) !== 0,
          get_key,
          get_collection
        );
      }
      if (fallback_fn !== null) {
        if (length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
      get_collection();
    });
  }
  function reconcile(array, state, anchor, render_fn, flags, is_inert, get_key, get_collection) {
    var _a2, _b2, _c, _d;
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
    var length = array.length;
    var items = state.items;
    var first = state.first;
    var current = first;
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);
        if (item !== void 0) {
          (_a2 = item.a) == null ? void 0 : _a2.measure();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === void 0) {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state,
          prev,
          prev === null ? state.first : prev.next,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        items.set(key, prev);
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
      if (should_update) {
        update_item(item, value, i, flags);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          (_b2 = item.a) == null ? void 0 : _b2.unfix();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
        }
      }
      if (item !== current) {
        if (seen !== void 0 && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state, a.prev, b.next);
            link(state, prev, a);
            link(state, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state, item.prev, item.next);
            link(state, item, prev === null ? state.first : prev.next);
            link(state, prev, item);
            prev = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if (is_inert || (current.e.f & INERT) === 0) {
            (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev = item;
      current = item.next;
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = seen === void 0 ? [] : array_from(seen);
      while (current !== null) {
        if (is_inert || (current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
          }
        }
        pause_effects(state, to_destroy, controlled_anchor, items);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        var _a3;
        if (to_animate === void 0) return;
        for (item of to_animate) {
          (_a3 = item.a) == null ? void 0 : _a3.apply();
        }
      });
    }
    active_effect.first = state.first && state.first.e;
    active_effect.last = prev && prev.e;
  }
  function update_item(item, value, index2, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }
    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(
        /** @type {Value<number>} */
        item.i,
        index2
      );
    } else {
      item.i = index2;
    }
  }
  function create_item(anchor, state, prev, next, value, key, index2, render_fn, flags, get_collection) {
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    if (reactive) {
      v.debug = () => {
        var collection_index = typeof i === "number" ? index2 : i.v;
        get_collection()[collection_index];
      };
    }
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next
    };
    try {
      item.e = branch(() => render_fn(anchor, v, i), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next && next.e;
      if (prev === null) {
        state.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next !== null) {
        next.prev = item;
        next.e.prev = item.e;
      }
      return item;
    } finally {
    }
  }
  function move(item, next, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next ? (
      /** @type {TemplateNode} */
      next.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state, prev, next) {
    if (prev === null) {
      state.first = next;
    } else {
      prev.next = next;
      prev.e.next = next && next.e;
    }
    if (next !== null) {
      next.prev = prev;
      next.e.prev = prev && prev.e;
    }
  }
  function set_value(element, value) {
    var attributes = element.__attributes ?? (element.__attributes = {});
    if (attributes.value === (attributes.value = // treat null and undefined the same for the initial value
    value ?? void 0) || // @ts-expect-error
    // `progress` elements always need their value set when its `0`
    element.value === value && (value !== 0 || element.nodeName !== "PROGRESS")) {
      return;
    }
    element.value = value;
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = element.__attributes ?? (element.__attributes = {});
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function toggle_class(dom, class_name, value) {
    if (value) {
      if (dom.classList.contains(class_name)) return;
      dom.classList.add(class_name);
    } else {
      if (!dom.classList.contains(class_name)) return;
      dom.classList.remove(class_name);
    }
  }
  function select_option(select, value, mounting) {
    if (select.multiple) {
      return select_options(select, value);
    }
    for (var option of select.options) {
      var option_value = get_option_value(option);
      if (is(option_value, value)) {
        option.selected = true;
        return;
      }
    }
    if (!mounting || value !== void 0) {
      select.selectedIndex = -1;
    }
  }
  function init_select(select, get_value) {
    let mounting = true;
    effect(() => {
      {
        select_option(select, untrack(get_value), mounting);
      }
      mounting = false;
      var observer = new MutationObserver(() => {
        var value = select.__value;
        select_option(select, value);
      });
      observer.observe(select, {
        // Listen to option element changes
        childList: true,
        subtree: true,
        // because of <optgroup>
        // Listen to option element value attribute changes
        // (doesn't get notified of select value changes,
        // because that property is not reflected as an attribute)
        attributes: true,
        attributeFilter: ["value"]
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  function select_options(select, value) {
    for (var option of select.options) {
      option.selected = ~value.indexOf(get_option_value(option));
    }
  }
  function get_option_value(option) {
    if ("__value" in option) {
      return option.__value;
    } else {
      return option.value;
    }
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }
  function init(immutable = false) {
    const context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    const callbacks = context.l.u;
    if (!callbacks) return;
    let props = () => deep_read_state(context.s);
    if (immutable) {
      let version = 0;
      let prev = (
        /** @type {Record<string, any>} */
        {}
      );
      const d = /* @__PURE__ */ derived(() => {
        let changed = false;
        const props2 = context.s;
        for (const key in props2) {
          if (props2[key] !== prev[key]) {
            prev[key] = props2[key];
            changed = true;
          }
        }
        if (changed) version++;
        return version;
      });
      props = () => get(d);
    }
    if (callbacks.b.length) {
      user_pre_effect(() => {
        observe_all(context, props);
        run_all(callbacks.b);
      });
    }
    user_effect(() => {
      const fns = untrack(() => callbacks.m.map(run));
      return () => {
        for (const fn of fns) {
          if (typeof fn === "function") {
            fn();
          }
        }
      };
    });
    if (callbacks.a.length) {
      user_effect(() => {
        observe_all(context, props);
        run_all(callbacks.a);
      });
    }
  }
  function observe_all(context, props) {
    if (context.l.s) {
      for (const signal of context.l.s) get(signal);
    }
    props();
  }
  let is_store_binding = false;
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }
  function with_parent_branch(fn) {
    var effect2 = active_effect;
    var previous_effect = active_effect;
    while (effect2 !== null && (effect2.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      effect2 = effect2.parent;
    }
    try {
      set_active_effect(effect2);
      return fn();
    } finally {
      set_active_effect(previous_effect);
    }
  }
  function prop(props, key, flags, fallback) {
    var _a2;
    var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
    var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
    var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
    var is_store_sub = false;
    var prop_value;
    if (bindable) {
      [prop_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key]
      ));
    } else {
      prop_value = /** @type {V} */
      props[key];
    }
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    var setter = ((_a2 = get_descriptor(props, key)) == null ? void 0 : _a2.set) ?? (is_entry_props && bindable && key in props ? (v) => props[key] = v : void 0);
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var fallback_used = false;
    var get_fallback = () => {
      fallback_used = true;
      if (fallback_dirty) {
        fallback_dirty = false;
        if (lazy) {
          fallback_value = untrack(
            /** @type {() => V} */
            fallback
          );
        } else {
          fallback_value = /** @type {V} */
          fallback;
        }
      }
      return fallback_value;
    };
    var getter;
    if (runes) {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        fallback_used = false;
        return value;
      };
    } else {
      var derived_getter = with_parent_branch(
        () => (immutable ? derived : derived_safe_equal)(() => (
          /** @type {V} */
          props[key]
        ))
      );
      derived_getter.f |= LEGACY_DERIVED_PROP;
      getter = () => {
        var value = get(derived_getter);
        if (value !== void 0) fallback_value = /** @type {V} */
        void 0;
        return value === void 0 ? fallback_value : value;
      };
    }
    if ((flags & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        } else {
          return getter();
        }
      };
    }
    var from_child = false;
    var was_from_child = false;
    var inner_current_value = /* @__PURE__ */ mutable_source(prop_value);
    var current_value = with_parent_branch(
      () => /* @__PURE__ */ derived(() => {
        var parent_value = getter();
        var child_value = get(inner_current_value);
        if (from_child) {
          from_child = false;
          was_from_child = true;
          return child_value;
        }
        was_from_child = false;
        return inner_current_value.v = parent_value;
      })
    );
    if (!immutable) current_value.equals = safe_equals;
    return function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(current_value) : runes && bindable ? proxy(value) : value;
        if (!current_value.equals(new_value)) {
          from_child = true;
          set(inner_current_value, new_value);
          if (fallback_used && fallback_value !== void 0) {
            fallback_value = new_value;
          }
          untrack(() => get(current_value));
        }
        return value;
      }
      return get(current_value);
    };
  }
  function resolveUrl(url, baseUrl) {
    if (url.match(/^[a-z]+:\/\//i)) {
      return url;
    }
    if (url.match(/^\/\//)) {
      return window.location.protocol + url;
    }
    if (url.match(/^[a-z]+:/i)) {
      return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
      base.href = baseUrl;
    }
    a.href = url;
    return a.href;
  }
  const uuid = /* @__PURE__ */ (() => {
    let counter = 0;
    const random = () => (
      // eslint-disable-next-line no-bitwise
      `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
    );
    return () => {
      counter += 1;
      return `u${random()}${counter}`;
    };
  })();
  function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i++) {
      arr.push(arrayLike[i]);
    }
    return arr;
  }
  function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace("px", "")) : 0;
  }
  function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
  }
  function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
  }
  function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
  }
  function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
      FINAL_PROCESS = process;
    } catch (e) {
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
      ratio = parseInt(val, 10);
      if (Number.isNaN(ratio)) {
        ratio = 1;
      }
    }
    return ratio || window.devicePixelRatio || 1;
  }
  const canvasDimensionLimit = 16384;
  function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
      if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvas.height) {
          canvas.height *= canvasDimensionLimit / canvas.width;
          canvas.width = canvasDimensionLimit;
        } else {
          canvas.width *= canvasDimensionLimit / canvas.height;
          canvas.height = canvasDimensionLimit;
        }
      } else if (canvas.width > canvasDimensionLimit) {
        canvas.height *= canvasDimensionLimit / canvas.width;
        canvas.width = canvasDimensionLimit;
      } else {
        canvas.width *= canvasDimensionLimit / canvas.height;
        canvas.height = canvasDimensionLimit;
      }
    }
  }
  function createImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decode = () => resolve(img);
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = url;
    });
  }
  async function svgToDataURL(svg) {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }
  async function nodeToDataURL(node, width, height) {
    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    const foreignObject = document.createElementNS(xmlns, "foreignObject");
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.setAttribute("x", "0");
    foreignObject.setAttribute("y", "0");
    foreignObject.setAttribute("externalResourcesRequired", "true");
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
  }
  const isInstanceOfElement = (node, instance) => {
    if (node instanceof instance)
      return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
      return false;
    return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
  };
  function formatCSSText(style) {
    const content = style.getPropertyValue("content");
    return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
  }
  function formatCSSProperties(style) {
    return toArray(style).map((name) => {
      const value = style.getPropertyValue(name);
      const priority = style.getPropertyPriority(name);
      return `${name}: ${value}${priority ? " !important" : ""};`;
    }).join(" ");
  }
  function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
  }
  function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue("content");
    if (content === "" || content === "none") {
      return;
    }
    const className = uuid();
    try {
      clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
      return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
  }
  function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ":before");
    clonePseudoElement(nativeNode, clonedNode, ":after");
  }
  const WOFF = "application/font-woff";
  const JPEG = "image/jpeg";
  const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
  };
  function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
  }
  function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
  }
  function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
  }
  function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
  }
  function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
  }
  async function fetchAsDataURL(url, init2, process2) {
    const res = await fetch(url, init2);
    if (res.status === 404) {
      throw new Error(`Resource "${res.url}" not found`);
    }
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => {
        try {
          resolve(process2({ res, result: reader.result }));
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsDataURL(blob);
    });
  }
  const cache = {};
  function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, "");
    if (includeQueryParams) {
      key = url;
    }
    if (/ttf|otf|eot|woff2?/i.test(key)) {
      key = key.replace(/.*\//, "");
    }
    return contentType ? `[${contentType}]${key}` : key;
  }
  async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
      return cache[cacheKey];
    }
    if (options.cacheBust) {
      resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
    }
    let dataURL;
    try {
      const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result: result2 }) => {
        if (!contentType) {
          contentType = res.headers.get("Content-Type") || "";
        }
        return getContentFromDataUrl(result2);
      });
      dataURL = makeDataUrl(content, contentType);
    } catch (error) {
      dataURL = options.imagePlaceholder || "";
      let msg = `Failed to fetch resource: ${resourceUrl}`;
      if (error) {
        msg = typeof error === "string" ? error : error.message;
      }
      if (msg) {
        console.warn(msg);
      }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
  }
  async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === "data:,") {
      return canvas.cloneNode(false);
    }
    return createImage(dataURL);
  }
  async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL2 = canvas.toDataURL();
      return createImage(dataURL2);
    }
    const poster = video.poster;
    const contentType = getMimeType(poster);
    const dataURL = await resourceToDataURL(poster, contentType, options);
    return createImage(dataURL);
  }
  async function cloneIFrameElement(iframe) {
    var _a2;
    try {
      if ((_a2 = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body) {
        return await cloneNode(iframe.contentDocument.body, {}, true);
      }
    } catch (_b2) {
    }
    return iframe.cloneNode(false);
  }
  async function cloneSingleNode(node, options) {
    if (isInstanceOfElement(node, HTMLCanvasElement)) {
      return cloneCanvasElement(node);
    }
    if (isInstanceOfElement(node, HTMLVideoElement)) {
      return cloneVideoElement(node, options);
    }
    if (isInstanceOfElement(node, HTMLIFrameElement)) {
      return cloneIFrameElement(node);
    }
    return node.cloneNode(false);
  }
  const isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
  async function cloneChildren(nativeNode, clonedNode, options) {
    var _a2, _b2;
    let children = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
      children = toArray(nativeNode.assignedNodes());
    } else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a2 = nativeNode.contentDocument) === null || _a2 === void 0 ? void 0 : _a2.body)) {
      children = toArray(nativeNode.contentDocument.body.childNodes);
    } else {
      children = toArray(((_b2 = nativeNode.shadowRoot) !== null && _b2 !== void 0 ? _b2 : nativeNode).childNodes);
    }
    if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) {
      return clonedNode;
    }
    await children.reduce((deferred, child2) => deferred.then(() => cloneNode(child2, options)).then((clonedChild) => {
      if (clonedChild) {
        clonedNode.appendChild(clonedChild);
      }
    }), Promise.resolve());
    return clonedNode;
  }
  function cloneCSSStyle(nativeNode, clonedNode) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
      return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
      targetStyle.cssText = sourceStyle.cssText;
      targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else {
      toArray(sourceStyle).forEach((name) => {
        let value = sourceStyle.getPropertyValue(name);
        if (name === "font-size" && value.endsWith("px")) {
          const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
          value = `${reducedFont}px`;
        }
        if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") {
          value = "block";
        }
        if (name === "d" && clonedNode.getAttribute("d")) {
          value = `path(${clonedNode.getAttribute("d")})`;
        }
        targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
      });
    }
  }
  function cloneInputValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) {
      clonedNode.innerHTML = nativeNode.value;
    }
    if (isInstanceOfElement(nativeNode, HTMLInputElement)) {
      clonedNode.setAttribute("value", nativeNode.value);
    }
  }
  function cloneSelectValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
      const clonedSelect = clonedNode;
      const selectedOption = Array.from(clonedSelect.children).find((child2) => nativeNode.value === child2.getAttribute("value"));
      if (selectedOption) {
        selectedOption.setAttribute("selected", "");
      }
    }
  }
  function decorate(nativeNode, clonedNode) {
    if (isInstanceOfElement(clonedNode, Element)) {
      cloneCSSStyle(nativeNode, clonedNode);
      clonePseudoElements(nativeNode, clonedNode);
      cloneInputValue(nativeNode, clonedNode);
      cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
  }
  async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
    if (uses.length === 0) {
      return clone;
    }
    const processedDefs = {};
    for (let i = 0; i < uses.length; i++) {
      const use = uses[i];
      const id = use.getAttribute("xlink:href");
      if (id) {
        const exist = clone.querySelector(id);
        const definition2 = document.querySelector(id);
        if (!exist && definition2 && !processedDefs[id]) {
          processedDefs[id] = await cloneNode(definition2, options, true);
        }
      }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
      const ns = "http://www.w3.org/1999/xhtml";
      const svg = document.createElementNS(ns, "svg");
      svg.setAttribute("xmlns", ns);
      svg.style.position = "absolute";
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.overflow = "hidden";
      svg.style.display = "none";
      const defs = document.createElementNS(ns, "defs");
      svg.appendChild(defs);
      for (let i = 0; i < nodes.length; i++) {
        defs.appendChild(nodes[i]);
      }
      clone.appendChild(svg);
    }
    return clone;
  }
  async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
      return null;
    }
    return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
  }
  const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
  const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function toRegex(url) {
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
  }
  function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
      urls.push(url);
      return raw;
    });
    return urls.filter((url) => !isDataUrl(url));
  }
  async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
      const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
      const contentType = getMimeType(resourceURL);
      let dataURL;
      if (getContentFromUrl) ;
      else {
        dataURL = await resourceToDataURL(resolvedURL, contentType, options);
      }
      return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    } catch (error) {
    }
    return cssText;
  }
  function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
      while (true) {
        const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
        if (!format) {
          return "";
        }
        if (format === preferredFontFormat) {
          return `src: ${src};`;
        }
      }
    });
  }
  function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
  }
  async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
      return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
  }
  async function embedProp(propName, node, options) {
    var _a2;
    const propValue = (_a2 = node.style) === null || _a2 === void 0 ? void 0 : _a2.getPropertyValue(propName);
    if (propValue) {
      const cssString = await embedResources(propValue, null, options);
      node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
      return true;
    }
    return false;
  }
  async function embedBackground(clonedNode, options) {
    if (!await embedProp("background", clonedNode, options)) {
      await embedProp("background-image", clonedNode, options);
    }
    if (!await embedProp("mask", clonedNode, options)) {
      await embedProp("mask-image", clonedNode, options);
    }
  }
  async function embedImageNode(clonedNode, options) {
    const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
    if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) {
      return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await resourceToDataURL(url, getMimeType(url), options);
    await new Promise((resolve, reject) => {
      clonedNode.onload = resolve;
      clonedNode.onerror = reject;
      const image = clonedNode;
      if (image.decode) {
        image.decode = resolve;
      }
      if (image.loading === "lazy") {
        image.loading = "eager";
      }
      if (isImageElement) {
        clonedNode.srcset = "";
        clonedNode.src = dataURL;
      } else {
        clonedNode.href.baseVal = dataURL;
      }
    });
  }
  async function embedChildren(clonedNode, options) {
    const children = toArray(clonedNode.childNodes);
    const deferreds = children.map((child2) => embedImages(child2, options));
    await Promise.all(deferreds).then(() => clonedNode);
  }
  async function embedImages(clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
      await embedBackground(clonedNode, options);
      await embedImageNode(clonedNode, options);
      await embedChildren(clonedNode, options);
    }
  }
  function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
      style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
      style.width = `${options.width}px`;
    }
    if (options.height) {
      style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
      Object.keys(manual).forEach((key) => {
        style[key] = manual[key];
      });
    }
    return node;
  }
  const cssFetchCache = {};
  async function fetchCSS(url) {
    let cache2 = cssFetchCache[url];
    if (cache2 != null) {
      return cache2;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache2 = { url, cssText };
    cssFetchCache[url] = cache2;
    return cache2;
  }
  async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc) => {
      let url = loc.replace(regexUrl, "$1");
      if (!url.startsWith("https://")) {
        url = new URL(url, data.url).href;
      }
      return fetchAsDataURL(url, options.fetchRequestInit, ({ result: result2 }) => {
        cssText = cssText.replace(loc, `url(${result2})`);
        return [loc, result2];
      });
    });
    return Promise.all(loadFonts).then(() => cssText);
  }
  function parseCSS(source2) {
    if (source2 == null) {
      return [];
    }
    const result2 = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    let cssText = source2.replace(commentsRegex, "");
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    while (true) {
      const matches = keyframesRegex.exec(cssText);
      if (matches === null) {
        break;
      }
      result2.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    const combinedCSSRegex = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    while (true) {
      let matches = importRegex.exec(cssText);
      if (matches === null) {
        matches = unifiedRegex.exec(cssText);
        if (matches === null) {
          break;
        } else {
          importRegex.lastIndex = unifiedRegex.lastIndex;
        }
      } else {
        unifiedRegex.lastIndex = importRegex.lastIndex;
      }
      result2.push(matches[0]);
    }
    return result2;
  }
  async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    styleSheets.forEach((sheet) => {
      if ("cssRules" in sheet) {
        try {
          toArray(sheet.cssRules || []).forEach((item, index2) => {
            if (item.type === CSSRule.IMPORT_RULE) {
              let importIndex = index2 + 1;
              const url = item.href;
              const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
                try {
                  sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
                } catch (error) {
                  console.error("Error inserting rule from remote css", {
                    rule,
                    error
                  });
                }
              })).catch((e) => {
                console.error("Error loading remote css", e.toString());
              });
              deferreds.push(deferred);
            }
          });
        } catch (e) {
          const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
          if (sheet.href != null) {
            deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
              inline.insertRule(rule, sheet.cssRules.length);
            })).catch((err) => {
              console.error("Error loading remote stylesheet", err);
            }));
          }
          console.error("Error inlining remote css file", e);
        }
      }
    });
    return Promise.all(deferreds).then(() => {
      styleSheets.forEach((sheet) => {
        if ("cssRules" in sheet) {
          try {
            toArray(sheet.cssRules || []).forEach((item) => {
              ret.push(item);
            });
          } catch (e) {
            console.error(`Error while reading CSS rules from ${sheet.href}`, e);
          }
        }
      });
      return ret;
    });
  }
  function getWebFontRules(cssRules) {
    return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
  }
  async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
      throw new Error("Provided element is not within a Document");
    }
    const styleSheets = toArray(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
  }
  async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const cssTexts = await Promise.all(rules.map((rule) => {
      const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
      return embedResources(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join("\n");
  }
  async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
    if (cssText) {
      const styleNode = document.createElement("style");
      const sytleContent = document.createTextNode(cssText);
      styleNode.appendChild(sytleContent);
      if (clonedNode.firstChild) {
        clonedNode.insertBefore(styleNode, clonedNode.firstChild);
      } else {
        clonedNode.appendChild(styleNode);
      }
    }
  }
  async function toSvg(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const clonedNode = await cloneNode(node, options, true);
    await embedWebFonts(clonedNode, options);
    await embedImages(clonedNode, options);
    applyStyle(clonedNode, options);
    const datauri = await nodeToDataURL(clonedNode, width, height);
    return datauri;
  }
  async function toCanvas(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const svg = await toSvg(node, options);
    const img = await createImage(svg);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const ratio = options.pixelRatio || getPixelRatio();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
      checkCanvasDimensions(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
      context.fillStyle = options.backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
  }
  async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
  }
  mark_module_start();
  Exam_schedule[FILENAME] = "src/lib/components/exam-schedule.svelte";
  var root_2 = add_locations(/* @__PURE__ */ template(`<select name="mid_or_final" class="bg-slate-100"><option>Mid Term</option><option>Final</option></select>`), Exam_schedule[FILENAME], [
    [46, 6, [[47, 7], [48, 7]]]
  ]);
  var root_3 = add_locations(/* @__PURE__ */ template(`<span> </span>`), Exam_schedule[FILENAME], [[51, 6]]);
  var root_8 = add_locations(/* @__PURE__ */ template(`<span>ไม่ทราบ</span>`), Exam_schedule[FILENAME], [[72, 11]]);
  var root_6 = add_locations(/* @__PURE__ */ template(`<td class="whitespace-nowrap p-2"><!></td>`), Exam_schedule[FILENAME], [[63, 9]]);
  var root_10 = add_locations(/* @__PURE__ */ template(`<span>ไม่ทราบ</span>`), Exam_schedule[FILENAME], [[88, 10]]);
  var root_5 = add_locations(/* @__PURE__ */ template(`<tr class="border text-sm font-light"><!><td class="whitespace-nowrap p-2"><!></td><td class="whitespace-nowrap p-2"> </td><td class="whitespace-nowrap p-2"> </td><td class="whitespace-nowrap p-2"> </td><td class="whitespace-nowrap p-2"> </td><td class="whitespace-nowrap p-2"> </td><td class="p-2"> </td></tr>`), Exam_schedule[FILENAME], [
    [
      61,
      7,
      [
        [76, 8],
        [91, 8],
        [94, 8],
        [97, 8],
        [100, 8],
        [103, 8],
        [106, 8]
      ]
    ]
  ]);
  var root_1 = add_locations(/* @__PURE__ */ template(`<div class="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100 text-slate-900"><div class="w-10/12 bg-slate-100"><div class="w-full border p-4 text-slate-900"><p class="text-center"> </p> <p class="text-center"> </p> <p class="text-center"> </p> <p class="text-center"> </p> <form action="report_examtable_show.php" method="post"><input type="hidden" name="year" id="year"> <input type="hidden" name="semester" id="semester"> <input type="hidden" name="student_id" id="student_id"> <!></form></div> <table class="w-full"><tbody></tbody></table></div></div>`), Exam_schedule[FILENAME], [
    [
      25,
      1,
      [
        [
          28,
          2,
          [
            [
              29,
              3,
              [
                [30, 4],
                [31, 4],
                [32, 4],
                [33, 4],
                [
                  34,
                  4,
                  [[42, 5], [43, 5], [44, 5]]
                ]
              ]
            ],
            [57, 3, [[58, 4]]]
          ]
        ]
      ]
    ]
  ]);
  var root_11 = add_locations(/* @__PURE__ */ template(`, <div></div>`, 1), Exam_schedule[FILENAME], [[119, 1]]);
  var root = add_locations(/* @__PURE__ */ template(`<!> <!> <div class="fixed bottom-4 right-4 flex gap-2"><button class="border bg-slate-100 p-2 outline outline-0 outline-slate-200 transition-all hover:shadow-lg hover:outline-2 active:bg-slate-200" aria-label="download"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg></button> <button class="border bg-slate-100 p-2 outline outline-0 outline-slate-200 transition-all hover:shadow-lg hover:outline-2 active:bg-slate-200"> </button></div>`, 1), Exam_schedule[FILENAME], [
    [
      122,
      0,
      [
        [
          123,
          1,
          [[128, 2, [[136, 3]]]]
        ],
        [143, 1]
      ]
    ]
  ]);
  function Exam_schedule($$anchor, $$props) {
    check_target(new.target);
    push($$props, false, Exam_schedule);
    let schedule = prop($$props, "schedule", 8);
    let data = prop($$props, "data", 8);
    let oldTable = prop($$props, "oldTable", 12);
    let form = mutable_state();
    let table = mutable_state();
    let downloading = mutable_state(false);
    let useNewDesign = mutable_state(true);
    const download = async () => {
      set(downloading, true);
      const dataUrl = await toPng(get(table));
      set(downloading, false);
      const link2 = document.createElement("a");
      link2.download = "image.png";
      link2.href = dataUrl;
      link2.click();
    };
    init();
    var fragment = root();
    var node = first_child(fragment);
    {
      var consequent_4 = ($$anchor2) => {
        var div = root_1();
        var div_1 = child(div);
        var div_2 = child(div_1);
        var p = child(div_2);
        var text$1 = child(p);
        var p_1 = sibling(p, 2);
        var text_1 = child(p_1);
        var p_2 = sibling(p_1, 2);
        var text_2 = child(p_2);
        var p_3 = sibling(p_2, 2);
        var text_3 = child(p_3);
        var form_1 = sibling(p_3, 2);
        var input = child(form_1);
        var input_1 = sibling(input, 2);
        var input_2 = sibling(input_1, 2);
        var node_1 = sibling(input_2, 2);
        {
          var consequent = ($$anchor3) => {
            var select = root_2();
            init_select(select, () => data().term);
            var select_value;
            var option = child(select);
            option.value = null == (option.__value = "M") ? "" : "M";
            var option_1 = sibling(option);
            option_1.value = null == (option_1.__value = "F") ? "" : "F";
            template_effect(() => {
              if (select_value !== (select_value = data().term)) {
                select.value = null == (select.__value = data().term) ? "" : data().term, select_option(select, data().term);
              }
            });
            append($$anchor3, select);
          };
          var alternate = ($$anchor3) => {
            var span = root_3();
            var text_4 = child(span);
            template_effect(() => set_text(text_4, strict_equals(data().term, "M") ? "Mid Term" : "Final"));
            append($$anchor3, span);
          };
          if_block(node_1, ($$render) => {
            if (!get(downloading)) $$render(consequent);
            else $$render(alternate, false);
          });
        }
        bind_this(form_1, ($$value) => set(form, $$value), () => get(form));
        var table_1 = sibling(div_2, 2);
        var tbody = child(table_1);
        each(tbody, 5, schedule, index, ($$anchor3, day, indexDay) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          each(node_2, 1, () => get(day).subject, index, ($$anchor4, subject, index2) => {
            var tr = root_5();
            toggle_class(tr, "bg-slate-200", equals(indexDay % 2, 1));
            var node_3 = child(tr);
            {
              var consequent_2 = ($$anchor5) => {
                var td = root_6();
                var node_4 = child(td);
                {
                  var consequent_1 = ($$anchor6) => {
                    var text_5 = text();
                    template_effect(() => set_text(text_5, new Date(get(day).date).toLocaleDateString(["th-TH"], {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })));
                    append($$anchor6, text_5);
                  };
                  var alternate_1 = ($$anchor6) => {
                    var span_1 = root_8();
                    append($$anchor6, span_1);
                  };
                  if_block(node_4, ($$render) => {
                    if (get(day).date) $$render(consequent_1);
                    else $$render(alternate_1, false);
                  });
                }
                template_effect(() => set_attribute(td, "rowspan", get(day).subject.length));
                append($$anchor5, td);
              };
              if_block(node_3, ($$render) => {
                if (strict_equals(index2, 0)) $$render(consequent_2);
              });
            }
            var td_1 = sibling(node_3);
            var node_5 = child(td_1);
            {
              var consequent_3 = ($$anchor5) => {
                var text_6 = text();
                const stringified_text = /* @__PURE__ */ derived_safe_equal(() => new Date(get(subject).startTime).toLocaleTimeString(["en-EN"], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false
                }) ?? "");
                const stringified_text_1 = /* @__PURE__ */ derived_safe_equal(() => new Date(get(subject).endTime).toLocaleTimeString(["en-EN"], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false
                }) ?? "");
                template_effect(() => set_text(text_6, `${get(stringified_text)} - ${get(stringified_text_1)}`));
                append($$anchor5, text_6);
              };
              var alternate_2 = ($$anchor5) => {
                var span_2 = root_10();
                append($$anchor5, span_2);
              };
              if_block(node_5, ($$render) => {
                if (get(subject).startTime && get(subject).endTime) $$render(consequent_3);
                else $$render(alternate_2, false);
              });
            }
            var td_2 = sibling(td_1);
            var text_7 = child(td_2);
            var td_3 = sibling(td_2);
            var text_8 = child(td_3);
            var td_4 = sibling(td_3);
            var text_9 = child(td_4);
            var td_5 = sibling(td_4);
            var text_10 = child(td_5);
            var td_6 = sibling(td_5);
            var text_11 = child(td_6);
            var td_7 = sibling(td_6);
            var text_12 = child(td_7);
            template_effect(() => {
              set_text(text_7, get(subject).subjectCode);
              set_text(text_8, get(subject).subjectName);
              set_text(text_9, get(subject).sec);
              set_text(text_10, get(subject).credit);
              set_text(text_11, get(subject).examType);
              set_text(text_12, get(subject).room);
            });
            append($$anchor4, tr);
          });
          append($$anchor3, fragment_1);
        });
        bind_this(div_1, ($$value) => set(table, $$value), () => get(table));
        template_effect(() => {
          set_text(text$1, data().faculty);
          set_text(text_1, data().departmentAndProgramme);
          set_text(text_2, data().semesterAndYear);
          set_text(text_3, data().studentInfo);
          set_value(input, data().year);
          set_value(input_1, data().semester);
          set_value(input_2, data().student_id);
        });
        event("change", form_1, () => {
          get(form).submit();
        });
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (get(useNewDesign)) $$render(consequent_4);
      });
    }
    var node_6 = sibling(node, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var fragment_4 = root_11();
        var div_3 = sibling(first_child(fragment_4));
        bind_this(div_3, ($$value) => oldTable($$value), () => oldTable());
        append($$anchor2, fragment_4);
      };
      if_block(node_6, ($$render) => {
        if (!get(useNewDesign)) $$render(consequent_5);
      });
    }
    var div_4 = sibling(node_6, 2);
    var button = child(div_4);
    var button_1 = sibling(button, 2);
    var text_13 = child(button_1);
    template_effect(() => set_text(text_13, get(useNewDesign) ? "New Design" : "Old Design"));
    event("click", button, download);
    event("click", button_1, () => set(useNewDesign, !get(useNewDesign)));
    append($$anchor, fragment);
    return pop({ ...legacy_api() });
  }
  mark_module_end(Exam_schedule);
  const constants = {
    appName: "KMITL DLC",
    utcOffset: 7,
    messages: {
      scrapeError: "Scraping error."
    },
    scraper: {
      classTypes: {
        lecture: ["ท", "L"],
        lab: ["ป", "P"]
      },
      days: {
        "อา.": 0,
        "จ.": 1,
        "อ.": 2,
        "พ.": 3,
        "พฤ.": 4,
        "ศ.": 5,
        "ส.": 6,
        Sun: 0,
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6
      }
    },
    apiPaths: {
      newReg: "https://k8s.reg.kmitl.ac.th/reg/api/?level_id=1&function="
    }
  };
  examSchedule;
  function renderExamSchedule() {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
    let start = 17;
    let getSubject = [];
    const oldTable = document.createElement("div");
    oldTable.innerHTML = document.body.innerHTML;
    const monthTxt2Num = {
      "ม.ค.": "1",
      "ก.พ.": "2",
      "มี.ค.": "3",
      "เม.ย.": "4",
      "พ.ค.": "5",
      "มิ.ย.": "6",
      "ก.ค.": "7",
      "ส.ค.": "8",
      "ก.ย.": "9",
      "ต.ค.": "10",
      "พ.ย.": "11",
      "ธ.ค.": "12",
      Jan: "1",
      Feb: "2",
      Mar: "3",
      Apr: "4",
      May: "5",
      Jun: "6",
      Jul: "7",
      Aug: "8",
      Sep: "9",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    };
    const fontPrompt = document.createElement("style");
    fontPrompt.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');
  `;
    document.head.appendChild(fontPrompt);
    while (true) {
      const rawData = document.querySelector(
        `body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(${start})`
      );
      if (!rawData) {
        break;
      }
      const getSubjectInfo = [];
      for (let i = 0; i < rawData.children.length; i += 2) {
        const element = rawData.children[i];
        const text2 = element.textContent;
        getSubjectInfo.push(text2);
      }
      const isExist = getSubject.find((e) => e.order === getSubjectInfo[0]);
      if (isExist) {
        isExist.examType = isExist.examType + (getSubjectInfo[5] ? `/${String(getSubjectInfo[5]).trim()}` : "");
        start += 2;
        continue;
      }
      const dateScrape = (_a2 = getSubjectInfo[6]) == null ? void 0 : _a2.split(" ");
      const date = dateScrape && dateScrape.length > 1 ? /* @__PURE__ */ new Date(
        `20${Number(dateScrape[3])}-${monthTxt2Num[dateScrape[2]]}-${dateScrape[1]}`
      ) : /* @__PURE__ */ new Date(0);
      const timeScrape = (_b2 = getSubjectInfo[7]) == null ? void 0 : _b2.replace("น.", "").trim().split("-").map((e) => e.split(":"));
      let startTime;
      let endTime;
      if (timeScrape && timeScrape.length == 2) {
        startTime = new Date(date).setHours(parseInt(timeScrape[0][0]), parseInt(timeScrape[0][1]));
        endTime = new Date(date).setHours(parseInt(timeScrape[1][0]), parseInt(timeScrape[1][1]));
      }
      const data = {
        order: getSubjectInfo[0] ? getSubjectInfo[0] : "",
        subjectCode: getSubjectInfo[1] ? getSubjectInfo[1] : "",
        subjectName: getSubjectInfo[2] ? getSubjectInfo[2] : "",
        sec: getSubjectInfo[3] ? getSubjectInfo[3] : "",
        credit: getSubjectInfo[4] ? getSubjectInfo[4] : "",
        examType: getSubjectInfo[5] ? String(getSubjectInfo[5]).trim() : "",
        startTime: startTime ? new Date(startTime) : /* @__PURE__ */ new Date(0),
        endTime: endTime ? new Date(endTime) : /* @__PURE__ */ new Date(0),
        date,
        room: getSubjectInfo[8] ? getSubjectInfo[8] : ""
      };
      getSubject.push(data);
      start += 2;
    }
    getSubject = getSubject.sort((a, b) => {
      var _a3, _b3;
      if (a.startTime && b.startTime) {
        return ((_a3 = a.startTime) == null ? void 0 : _a3.getTime()) - ((_b3 = b.startTime) == null ? void 0 : _b3.getTime());
      } else {
        if (a.startTime) {
          return -1;
        } else if (b.startTime) {
          return 1;
        }
      }
      return 0;
    });
    const schedule = [];
    getSubject.forEach((e) => {
      const isExist = schedule.find((f) => {
        var _a3, _b3;
        return ((_a3 = f.date) == null ? void 0 : _a3.getTime()) === ((_b3 = e.date) == null ? void 0 : _b3.getTime());
      });
      if (isExist) {
        isExist.subject.push(e);
      } else {
        schedule.push({ date: e.date, subject: [e] });
      }
    });
    const personalInfo = {
      term: ((_c = document.querySelector("#mid_or_final")) == null ? void 0 : _c.value) || constants.messages.scrapeError,
      faculty: ((_d = document.querySelector(
        "body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(4) > td > strong"
      )) == null ? void 0 : _d.textContent) || constants.messages.scrapeError,
      departmentAndProgramme: ((_e = document.querySelector(
        "body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(6) > td"
      )) == null ? void 0 : _e.textContent) || constants.messages.scrapeError,
      semesterAndYear: ((_f = document.querySelector(
        "body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(8) > td"
      )) == null ? void 0 : _f.textContent) || constants.messages.scrapeError,
      idAndName: ((_g = document.querySelector(
        "body > center > form > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(10) > td"
      )) == null ? void 0 : _g.textContent) || constants.messages.scrapeError,
      year: ((_h = document.querySelector("#year")) == null ? void 0 : _h.value) || constants.messages.scrapeError,
      semester: ((_i = document.querySelector("#semester")) == null ? void 0 : _i.value) || constants.messages.scrapeError,
      studentId: ((_j = document.querySelector("#student_id")) == null ? void 0 : _j.value) || constants.messages.scrapeError
    };
    document.body.innerHTML = "";
    const oldStyles = document.head.querySelector("link[type='text/css']");
    if (oldStyles) document.head.removeChild(oldStyles);
    console.log(schedule);
    console.log(personalInfo);
    mount(Exam_schedule, {
      target: document.body,
      props: {
        schedule,
        data: personalInfo,
        oldTable
      }
    });
  }
  examSchedule;
  const definition = defineContentScript({
    matches: ["*://*.reg.kmitl.ac.th/u_student/report_examtable_show.php"],
    main() {
      renderExamSchedule();
    }
  });
  examSchedule;
  const browser = (
    // @ts-expect-error
    ((_b = (_a = globalThis.browser) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id) == null ? globalThis.chrome : (
      // @ts-expect-error
      globalThis.browser
    )
  );
  function print$1(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger$1 = {
    debug: (...args) => print$1(console.debug, ...args),
    log: (...args) => print$1(console.log, ...args),
    warn: (...args) => print$1(console.warn, ...args),
    error: (...args) => print$1(console.error, ...args)
  };
  const _WxtLocationChangeEvent = class _WxtLocationChangeEvent extends Event {
    constructor(newUrl, oldUrl) {
      super(_WxtLocationChangeEvent.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
  };
  __publicField(_WxtLocationChangeEvent, "EVENT_NAME", getUniqueEventName("wxt:locationchange"));
  let WxtLocationChangeEvent = _WxtLocationChangeEvent;
  function getUniqueEventName(eventName) {
    var _a2;
    return `${(_a2 = browser == null ? void 0 : browser.runtime) == null ? void 0 : _a2.id}:${"exam-schedule"}:${eventName}`;
  }
  function createLocationWatcher(ctx) {
    let interval;
    let oldUrl;
    return {
      /**
       * Ensure the location watcher is actively looking for URL changes. If it's already watching,
       * this is a noop.
       */
      run() {
        if (interval != null) return;
        oldUrl = new URL(location.href);
        interval = ctx.setInterval(() => {
          let newUrl = new URL(location.href);
          if (newUrl.href !== oldUrl.href) {
            window.dispatchEvent(new WxtLocationChangeEvent(newUrl, oldUrl));
            oldUrl = newUrl;
          }
        }, 1e3);
      }
    };
  }
  const _ContentScriptContext = class _ContentScriptContext {
    constructor(contentScriptName, options) {
      __publicField(this, "isTopFrame", window.self === window.top);
      __publicField(this, "abortController");
      __publicField(this, "locationWatcher", createLocationWatcher(this));
      __publicField(this, "receivedMessageIds", /* @__PURE__ */ new Set());
      this.contentScriptName = contentScriptName;
      this.options = options;
      this.abortController = new AbortController();
      if (this.isTopFrame) {
        this.listenForNewerScripts({ ignoreFirstEvent: true });
        this.stopOldScripts();
      } else {
        this.listenForNewerScripts();
      }
    }
    get signal() {
      return this.abortController.signal;
    }
    abort(reason) {
      return this.abortController.abort(reason);
    }
    get isInvalid() {
      if (browser.runtime.id == null) {
        this.notifyInvalidated();
      }
      return this.signal.aborted;
    }
    get isValid() {
      return !this.isInvalid;
    }
    /**
     * Add a listener that is called when the content script's context is invalidated.
     *
     * @returns A function to remove the listener.
     *
     * @example
     * browser.runtime.onMessage.addListener(cb);
     * const removeInvalidatedListener = ctx.onInvalidated(() => {
     *   browser.runtime.onMessage.removeListener(cb);
     * })
     * // ...
     * removeInvalidatedListener();
     */
    onInvalidated(cb) {
      this.signal.addEventListener("abort", cb);
      return () => this.signal.removeEventListener("abort", cb);
    }
    /**
     * Return a promise that never resolves. Useful if you have an async function that shouldn't run
     * after the context is expired.
     *
     * @example
     * const getValueFromStorage = async () => {
     *   if (ctx.isInvalid) return ctx.block();
     *
     *   // ...
     * }
     */
    block() {
      return new Promise(() => {
      });
    }
    /**
     * Wrapper around `window.setInterval` that automatically clears the interval when invalidated.
     */
    setInterval(handler, timeout) {
      const id = setInterval(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearInterval(id));
      return id;
    }
    /**
     * Wrapper around `window.setTimeout` that automatically clears the interval when invalidated.
     */
    setTimeout(handler, timeout) {
      const id = setTimeout(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearTimeout(id));
      return id;
    }
    /**
     * Wrapper around `window.requestAnimationFrame` that automatically cancels the request when
     * invalidated.
     */
    requestAnimationFrame(callback) {
      const id = requestAnimationFrame((...args) => {
        if (this.isValid) callback(...args);
      });
      this.onInvalidated(() => cancelAnimationFrame(id));
      return id;
    }
    /**
     * Wrapper around `window.requestIdleCallback` that automatically cancels the request when
     * invalidated.
     */
    requestIdleCallback(callback, options) {
      const id = requestIdleCallback((...args) => {
        if (!this.signal.aborted) callback(...args);
      }, options);
      this.onInvalidated(() => cancelIdleCallback(id));
      return id;
    }
    addEventListener(target, type, handler, options) {
      var _a2;
      if (type === "wxt:locationchange") {
        if (this.isValid) this.locationWatcher.run();
      }
      (_a2 = target.addEventListener) == null ? void 0 : _a2.call(
        target,
        type.startsWith("wxt:") ? getUniqueEventName(type) : type,
        handler,
        {
          ...options,
          signal: this.signal
        }
      );
    }
    /**
     * @internal
     * Abort the abort controller and execute all `onInvalidated` listeners.
     */
    notifyInvalidated() {
      this.abort("Content script context invalidated");
      logger$1.debug(
        `Content script "${this.contentScriptName}" context invalidated`
      );
    }
    stopOldScripts() {
      window.postMessage(
        {
          type: _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
          messageId: Math.random().toString(36).slice(2)
        },
        "*"
      );
    }
    verifyScriptStartedEvent(event2) {
      var _a2, _b2, _c;
      const isScriptStartedEvent = ((_a2 = event2.data) == null ? void 0 : _a2.type) === _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE;
      const isSameContentScript = ((_b2 = event2.data) == null ? void 0 : _b2.contentScriptName) === this.contentScriptName;
      const isNotDuplicate = !this.receivedMessageIds.has((_c = event2.data) == null ? void 0 : _c.messageId);
      return isScriptStartedEvent && isSameContentScript && isNotDuplicate;
    }
    listenForNewerScripts(options) {
      let isFirst = true;
      const cb = (event2) => {
        if (this.verifyScriptStartedEvent(event2)) {
          this.receivedMessageIds.add(event2.data.messageId);
          const wasFirst = isFirst;
          isFirst = false;
          if (wasFirst && (options == null ? void 0 : options.ignoreFirstEvent)) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", cb);
      this.onInvalidated(() => removeEventListener("message", cb));
    }
  };
  __publicField(_ContentScriptContext, "SCRIPT_STARTED_MESSAGE_TYPE", getUniqueEventName(
    "wxt:content-script-started"
  ));
  let ContentScriptContext = _ContentScriptContext;
  const nullKey = Symbol("null");
  let keyCounter = 0;
  class ManyKeysMap extends Map {
    constructor() {
      super();
      this._objectHashes = /* @__PURE__ */ new WeakMap();
      this._symbolHashes = /* @__PURE__ */ new Map();
      this._publicKeys = /* @__PURE__ */ new Map();
      const [pairs] = arguments;
      if (pairs === null || pairs === void 0) {
        return;
      }
      if (typeof pairs[Symbol.iterator] !== "function") {
        throw new TypeError(typeof pairs + " is not iterable (cannot read property Symbol(Symbol.iterator))");
      }
      for (const [keys, value] of pairs) {
        this.set(keys, value);
      }
    }
    _getPublicKeys(keys, create = false) {
      if (!Array.isArray(keys)) {
        throw new TypeError("The keys parameter must be an array");
      }
      const privateKey = this._getPrivateKey(keys, create);
      let publicKey;
      if (privateKey && this._publicKeys.has(privateKey)) {
        publicKey = this._publicKeys.get(privateKey);
      } else if (create) {
        publicKey = [...keys];
        this._publicKeys.set(privateKey, publicKey);
      }
      return { privateKey, publicKey };
    }
    _getPrivateKey(keys, create = false) {
      const privateKeys = [];
      for (let key of keys) {
        if (key === null) {
          key = nullKey;
        }
        const hashes = typeof key === "object" || typeof key === "function" ? "_objectHashes" : typeof key === "symbol" ? "_symbolHashes" : false;
        if (!hashes) {
          privateKeys.push(key);
        } else if (this[hashes].has(key)) {
          privateKeys.push(this[hashes].get(key));
        } else if (create) {
          const privateKey = `@@mkm-ref-${keyCounter++}@@`;
          this[hashes].set(key, privateKey);
          privateKeys.push(privateKey);
        } else {
          return false;
        }
      }
      return JSON.stringify(privateKeys);
    }
    set(keys, value) {
      const { publicKey } = this._getPublicKeys(keys, true);
      return super.set(publicKey, value);
    }
    get(keys) {
      const { publicKey } = this._getPublicKeys(keys);
      return super.get(publicKey);
    }
    has(keys) {
      const { publicKey } = this._getPublicKeys(keys);
      return super.has(publicKey);
    }
    delete(keys) {
      const { publicKey, privateKey } = this._getPublicKeys(keys);
      return Boolean(publicKey && super.delete(publicKey) && this._publicKeys.delete(privateKey));
    }
    clear() {
      super.clear();
      this._symbolHashes.clear();
      this._publicKeys.clear();
    }
    get [Symbol.toStringTag]() {
      return "ManyKeysMap";
    }
    get size() {
      return super.size;
    }
  }
  new ManyKeysMap();
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (async () => {
    try {
      initPlugins();
      const { main, ...options } = definition;
      const ctx = new ContentScriptContext("exam-schedule", options);
      return await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"exam-schedule"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();
  return result;
}();
examSchedule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbS1zY2hlZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE5LjI5X0B0eXBlcytub2RlQDIyLjEwLjJfcm9sbHVwQDQuMjkuMV95YW1sQDIuNi4xL25vZGVfbW9kdWxlcy93eHQvZGlzdC9zYW5kYm94L2RlZmluZS1jb250ZW50LXNjcmlwdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy92ZXJzaW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvZGlzY2xvc2UtdmVyc2lvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2ZsYWdzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvZmxhZ3MvbGVnYWN5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvdXRpbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vZXNtLWVudkAxLjIuMS9ub2RlX21vZHVsZXMvZXNtLWVudi90cnVlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvc2hhcmVkL3V0aWxzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2VxdWFsaXR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Vycm9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L3NvdXJjZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvd2FybmluZ3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL2h5ZHJhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kZXYvb3duZXJzaGlwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3Byb3h5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi9lcXVhbGl0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vb3BlcmF0aW9ucy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9yZWFjdGl2aXR5L2Rlcml2ZWRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvZWZmZWN0cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vdGFzay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9ydW50aW1lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2Rldi9lbGVtZW50cy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvYmluZGluZ3Mvc2hhcmVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9ldmVudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3JlY29uY2lsZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL3RlbXBsYXRlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3JlbmRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kZXYvbGVnYWN5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9ibG9ja3MvaWYuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvZG9tL2Jsb2Nrcy9lYWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9hdHRyaWJ1dGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9jbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVANS4xNi4wL25vZGVfbW9kdWxlcy9zdmVsdGUvc3JjL2ludGVybmFsL2NsaWVudC9kb20vZWxlbWVudHMvYmluZGluZ3Mvc2VsZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9lbGVtZW50cy9iaW5kaW5ncy90aGlzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L2RvbS9sZWdhY3kvbGlmZWN5Y2xlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUA1LjE2LjAvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvaW50ZXJuYWwvY2xpZW50L3JlYWN0aXZpdHkvc3RvcmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDUuMTYuMC9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9pbnRlcm5hbC9jbGllbnQvcmVhY3Rpdml0eS9wcm9wcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9odG1sLXRvLWltYWdlQDEuMTEuMTEvbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvdXRpbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9odG1sLXRvLWltYWdlQDEuMTEuMTEvbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvY2xvbmUtcHNldWRvcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9odG1sLXRvLWltYWdlQDEuMTEuMTEvbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvbWltZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaHRtbC10by1pbWFnZUAxLjExLjExL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2RhdGF1cmwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaHRtbC10by1pbWFnZUAxLjExLjExL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2Nsb25lLW5vZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaHRtbC10by1pbWFnZUAxLjExLjExL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2VtYmVkLXJlc291cmNlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9odG1sLXRvLWltYWdlQDEuMTEuMTEvbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvZW1iZWQtaW1hZ2VzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2h0bWwtdG8taW1hZ2VAMS4xMS4xMS9ub2RlX21vZHVsZXMvaHRtbC10by1pbWFnZS9lcy9hcHBseS1zdHlsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9odG1sLXRvLWltYWdlQDEuMTEuMTEvbm9kZV9tb2R1bGVzL2h0bWwtdG8taW1hZ2UvZXMvZW1iZWQtd2ViZm9udHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaHRtbC10by1pbWFnZUAxLjExLjExL25vZGVfbW9kdWxlcy9odG1sLXRvLWltYWdlL2VzL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2V4YW0tc2NoZWR1bGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2xpYi9jb25zdGFudHMudHMiLCIuLi8uLi8uLi9zcmMvbGliL3V0aWwvcmVuZGVyZXIvZXhhbS1zY2hlZHVsZS50cyIsIi4uLy4uLy4uL3NyYy9lbnRyeXBvaW50cy9leGFtLXNjaGVkdWxlLmNvbnRlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vd3h0QDAuMTkuMjlfQHR5cGVzK25vZGVAMjIuMTAuMl9yb2xsdXBANC4yOS4xX3lhbWxAMi42LjEvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2Jyb3dzZXIvY2hyb21lLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4xOS4yOV9AdHlwZXMrbm9kZUAyMi4xMC4yX3JvbGx1cEA0LjI5LjFfeWFtbEAyLjYuMS9ub2RlX21vZHVsZXMvd3h0L2Rpc3Qvc2FuZGJveC91dGlscy9sb2dnZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE5LjI5X0B0eXBlcytub2RlQDIyLjEwLjJfcm9sbHVwQDQuMjkuMV95YW1sQDIuNi4xL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2N1c3RvbS1ldmVudHMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE5LjI5X0B0eXBlcytub2RlQDIyLjEwLjJfcm9sbHVwQDQuMjkuMV95YW1sQDIuNi4xL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2xvY2F0aW9uLXdhdGNoZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE5LjI5X0B0eXBlcytub2RlQDIyLjEwLjJfcm9sbHVwQDQuMjkuMV95YW1sQDIuNi4xL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2NvbnRlbnQtc2NyaXB0LWNvbnRleHQubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21hbnkta2V5cy1tYXBAMi4wLjEvbm9kZV9tb2R1bGVzL21hbnkta2V5cy1tYXAvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQDFuYXRzdSt3YWl0LWVsZW1lbnRANC4xLjIvbm9kZV9tb2R1bGVzL0AxbmF0c3Uvd2FpdC1lbGVtZW50L2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWZpbmVDb250ZW50U2NyaXB0KGRlZmluaXRpb24pIHtcbiAgcmV0dXJuIGRlZmluaXRpb247XG59XG4iLCIvLyBnZW5lcmF0ZWQgZHVyaW5nIHJlbGVhc2UsIGRvIG5vdCBtb2RpZnlcblxuLyoqXG4gKiBUaGUgY3VycmVudCB2ZXJzaW9uLCBhcyBzZXQgaW4gcGFja2FnZS5qc29uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1jb21waWxlciNzdmVsdGUtdmVyc2lvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNS4xNi4wJztcbmV4cG9ydCBjb25zdCBQVUJMSUNfVkVSU0lPTiA9ICc1JztcbiIsImltcG9ydCB7IFBVQkxJQ19WRVJTSU9OIH0gZnJvbSAnLi4vdmVyc2lvbi5qcyc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0Ly8gQHRzLWlnbm9yZVxuXHQod2luZG93Ll9fc3ZlbHRlIHx8PSB7IHY6IG5ldyBTZXQoKSB9KS52LmFkZChQVUJMSUNfVkVSU0lPTik7XG4iLCJleHBvcnQgbGV0IGxlZ2FjeV9tb2RlX2ZsYWcgPSBmYWxzZTtcbmV4cG9ydCBsZXQgdHJhY2luZ19tb2RlX2ZsYWcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZV9sZWdhY3lfbW9kZV9mbGFnKCkge1xuXHRsZWdhY3lfbW9kZV9mbGFnID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZV90cmFjaW5nX21vZGVfZmxhZygpIHtcblx0dHJhY2luZ19tb2RlX2ZsYWcgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgZW5hYmxlX2xlZ2FjeV9tb2RlX2ZsYWcgfSBmcm9tICcuL2luZGV4LmpzJztcblxuZW5hYmxlX2xlZ2FjeV9tb2RlX2ZsYWcoKTtcbiIsImV4cG9ydCBjb25zdCBFQUNIX0lURU1fUkVBQ1RJVkUgPSAxO1xuZXhwb3J0IGNvbnN0IEVBQ0hfSU5ERVhfUkVBQ1RJVkUgPSAxIDw8IDE7XG4vKiogU2VlIEVhY2hCbG9jayBpbnRlcmZhY2UgbWV0YWRhdGEuaXNfY29udHJvbGxlZCBmb3IgYW4gZXhwbGFuYXRpb24gd2hhdCB0aGlzIGlzICovXG5leHBvcnQgY29uc3QgRUFDSF9JU19DT05UUk9MTEVEID0gMSA8PCAyO1xuZXhwb3J0IGNvbnN0IEVBQ0hfSVNfQU5JTUFURUQgPSAxIDw8IDM7XG5leHBvcnQgY29uc3QgRUFDSF9JVEVNX0lNTVVUQUJMRSA9IDEgPDwgNDtcblxuZXhwb3J0IGNvbnN0IFBST1BTX0lTX0lNTVVUQUJMRSA9IDE7XG5leHBvcnQgY29uc3QgUFJPUFNfSVNfUlVORVMgPSAxIDw8IDE7XG5leHBvcnQgY29uc3QgUFJPUFNfSVNfVVBEQVRFRCA9IDEgPDwgMjtcbmV4cG9ydCBjb25zdCBQUk9QU19JU19CSU5EQUJMRSA9IDEgPDwgMztcbmV4cG9ydCBjb25zdCBQUk9QU19JU19MQVpZX0lOSVRJQUwgPSAxIDw8IDQ7XG5cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0lOID0gMTtcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX09VVCA9IDEgPDwgMTtcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0dMT0JBTCA9IDEgPDwgMjtcblxuZXhwb3J0IGNvbnN0IFRFTVBMQVRFX0ZSQUdNRU5UID0gMTtcbmV4cG9ydCBjb25zdCBURU1QTEFURV9VU0VfSU1QT1JUX05PREUgPSAxIDw8IDE7XG5cbmV4cG9ydCBjb25zdCBIWURSQVRJT05fU1RBUlQgPSAnWyc7XG4vKiogdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIGB7OmVsc2V9Li4uYCBibG9jayB3YXMgcmVuZGVyZWQgKi9cbmV4cG9ydCBjb25zdCBIWURSQVRJT05fU1RBUlRfRUxTRSA9ICdbISc7XG5leHBvcnQgY29uc3QgSFlEUkFUSU9OX0VORCA9ICddJztcbmV4cG9ydCBjb25zdCBIWURSQVRJT05fRVJST1IgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfSVNfTkFNRVNQQUNFRCA9IDE7XG5leHBvcnQgY29uc3QgRUxFTUVOVF9QUkVTRVJWRV9BVFRSSUJVVEVfQ0FTRSA9IDEgPDwgMTtcblxuZXhwb3J0IGNvbnN0IFVOSU5JVElBTElaRUQgPSBTeW1ib2woKTtcblxuLy8gRGV2LXRpbWUgY29tcG9uZW50IHByb3BlcnRpZXNcbmV4cG9ydCBjb25zdCBGSUxFTkFNRSA9IFN5bWJvbCgnZmlsZW5hbWUnKTtcbmV4cG9ydCBjb25zdCBITVIgPSBTeW1ib2woJ2htcicpO1xuXG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX1NWRyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX01BVEhNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuLy8gd2UgdXNlIGEgbGlzdCBvZiBpZ25vcmFibGUgcnVudGltZSB3YXJuaW5ncyBiZWNhdXNlIG5vdCBldmVyeSBydW50aW1lIHdhcm5pbmdcbi8vIGNhbiBiZSBpZ25vcmVkIGFuZCB3ZSB3YW50IHRvIGtlZXAgdGhlIHZhbGlkYXRpb24gZm9yIHN2ZWx0ZS1pZ25vcmUgaW4gcGxhY2VcbmV4cG9ydCBjb25zdCBJR05PUkFCTEVfUlVOVElNRV9XQVJOSU5HUyA9IC8qKiBAdHlwZSB7Y29uc3R9ICovIChbXG5cdCdzdGF0ZV9zbmFwc2hvdF91bmNsb25lYWJsZScsXG5cdCdiaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZScsXG5cdCdoeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWQnLFxuXHQnaHlkcmF0aW9uX2h0bWxfY2hhbmdlZCcsXG5cdCdvd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nJyxcblx0J293bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uJ1xuXSk7XG5cbi8qKlxuICogV2hpdGVzcGFjZSBpbnNpZGUgb25lIG9mIHRoZXNlIGVsZW1lbnRzIHdpbGwgbm90IHJlc3VsdCBpblxuICogYSB3aGl0ZXNwYWNlIG5vZGUgYmVpbmcgY3JlYXRlZCBpbiBhbnkgY2lyY3Vtc3RhbmNlcy4gKFRoaXNcbiAqIGxpc3QgaXMgYWxtb3N0IGNlcnRhaW5seSB2ZXJ5IGluY29tcGxldGUpXG4gKiBUT0RPIHRoaXMgaXMgY3VycmVudGx5IHVudXNlZFxuICovXG5leHBvcnQgY29uc3QgRUxFTUVOVFNfV0lUSE9VVF9URVhUID0gWydhdWRpbycsICdkYXRhbGlzdCcsICdkbCcsICdvcHRncm91cCcsICdzZWxlY3QnLCAndmlkZW8nXTtcbiIsImNvbnN0IHJlZ2V4X3JldHVybl9jaGFyYWN0ZXJzID0gL1xcci9nO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoKHN0cikge1xuXHRzdHIgPSBzdHIucmVwbGFjZShyZWdleF9yZXR1cm5fY2hhcmFjdGVycywgJycpO1xuXHRsZXQgaGFzaCA9IDUzODE7XG5cdGxldCBpID0gc3RyLmxlbmd0aDtcblxuXHR3aGlsZSAoaS0tKSBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcblx0cmV0dXJuIChoYXNoID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmNvbnN0IFZPSURfRUxFTUVOVF9OQU1FUyA9IFtcblx0J2FyZWEnLFxuXHQnYmFzZScsXG5cdCdicicsXG5cdCdjb2wnLFxuXHQnY29tbWFuZCcsXG5cdCdlbWJlZCcsXG5cdCdocicsXG5cdCdpbWcnLFxuXHQnaW5wdXQnLFxuXHQna2V5Z2VuJyxcblx0J2xpbmsnLFxuXHQnbWV0YScsXG5cdCdwYXJhbScsXG5cdCdzb3VyY2UnLFxuXHQndHJhY2snLFxuXHQnd2JyJ1xuXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbmFtZWAgaXMgb2YgYSB2b2lkIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcblx0cmV0dXJuIFZPSURfRUxFTUVOVF9OQU1FUy5pbmNsdWRlcyhuYW1lKSB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICchZG9jdHlwZSc7XG59XG5cbmNvbnN0IFJFU0VSVkVEX1dPUkRTID0gW1xuXHQnYXJndW1lbnRzJyxcblx0J2F3YWl0Jyxcblx0J2JyZWFrJyxcblx0J2Nhc2UnLFxuXHQnY2F0Y2gnLFxuXHQnY2xhc3MnLFxuXHQnY29uc3QnLFxuXHQnY29udGludWUnLFxuXHQnZGVidWdnZXInLFxuXHQnZGVmYXVsdCcsXG5cdCdkZWxldGUnLFxuXHQnZG8nLFxuXHQnZWxzZScsXG5cdCdlbnVtJyxcblx0J2V2YWwnLFxuXHQnZXhwb3J0Jyxcblx0J2V4dGVuZHMnLFxuXHQnZmFsc2UnLFxuXHQnZmluYWxseScsXG5cdCdmb3InLFxuXHQnZnVuY3Rpb24nLFxuXHQnaWYnLFxuXHQnaW1wbGVtZW50cycsXG5cdCdpbXBvcnQnLFxuXHQnaW4nLFxuXHQnaW5zdGFuY2VvZicsXG5cdCdpbnRlcmZhY2UnLFxuXHQnbGV0Jyxcblx0J25ldycsXG5cdCdudWxsJyxcblx0J3BhY2thZ2UnLFxuXHQncHJpdmF0ZScsXG5cdCdwcm90ZWN0ZWQnLFxuXHQncHVibGljJyxcblx0J3JldHVybicsXG5cdCdzdGF0aWMnLFxuXHQnc3VwZXInLFxuXHQnc3dpdGNoJyxcblx0J3RoaXMnLFxuXHQndGhyb3cnLFxuXHQndHJ1ZScsXG5cdCd0cnknLFxuXHQndHlwZW9mJyxcblx0J3ZhcicsXG5cdCd2b2lkJyxcblx0J3doaWxlJyxcblx0J3dpdGgnLFxuXHQneWllbGQnXG5dO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGB3b3JkYCBpcyBhIHJlc2VydmVkIEphdmFTY3JpcHQga2V5d29yZFxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3Jlc2VydmVkKHdvcmQpIHtcblx0cmV0dXJuIFJFU0VSVkVEX1dPUkRTLmluY2x1ZGVzKHdvcmQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19jYXB0dXJlX2V2ZW50KG5hbWUpIHtcblx0cmV0dXJuIG5hbWUuZW5kc1dpdGgoJ2NhcHR1cmUnKSAmJiBuYW1lICE9PSAnZ290cG9pbnRlcmNhcHR1cmUnICYmIG5hbWUgIT09ICdsb3N0cG9pbnRlcmNhcHR1cmUnO1xufVxuXG4vKiogTGlzdCBvZiBFbGVtZW50IGV2ZW50cyB0aGF0IHdpbGwgYmUgZGVsZWdhdGVkICovXG5jb25zdCBERUxFR0FURURfRVZFTlRTID0gW1xuXHQnYmVmb3JlaW5wdXQnLFxuXHQnY2xpY2snLFxuXHQnY2hhbmdlJyxcblx0J2RibGNsaWNrJyxcblx0J2NvbnRleHRtZW51Jyxcblx0J2ZvY3VzaW4nLFxuXHQnZm9jdXNvdXQnLFxuXHQnaW5wdXQnLFxuXHQna2V5ZG93bicsXG5cdCdrZXl1cCcsXG5cdCdtb3VzZWRvd24nLFxuXHQnbW91c2Vtb3ZlJyxcblx0J21vdXNlb3V0Jyxcblx0J21vdXNlb3ZlcicsXG5cdCdtb3VzZXVwJyxcblx0J3BvaW50ZXJkb3duJyxcblx0J3BvaW50ZXJtb3ZlJyxcblx0J3BvaW50ZXJvdXQnLFxuXHQncG9pbnRlcm92ZXInLFxuXHQncG9pbnRlcnVwJyxcblx0J3RvdWNoZW5kJyxcblx0J3RvdWNobW92ZScsXG5cdCd0b3VjaHN0YXJ0J1xuXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgZXZlbnRfbmFtZWAgaXMgYSBkZWxlZ2F0ZWQgZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudF9uYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19kZWxlZ2F0ZWQoZXZlbnRfbmFtZSkge1xuXHRyZXR1cm4gREVMRUdBVEVEX0VWRU5UUy5pbmNsdWRlcyhldmVudF9uYW1lKTtcbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGVzIHRoYXQgYXJlIGJvb2xlYW4sIGkuZS4gdGhleSBhcmUgcHJlc2VudCBvciBub3QgcHJlc2VudC5cbiAqL1xuY29uc3QgRE9NX0JPT0xFQU5fQVRUUklCVVRFUyA9IFtcblx0J2FsbG93ZnVsbHNjcmVlbicsXG5cdCdhc3luYycsXG5cdCdhdXRvZm9jdXMnLFxuXHQnYXV0b3BsYXknLFxuXHQnY2hlY2tlZCcsXG5cdCdjb250cm9scycsXG5cdCdkZWZhdWx0Jyxcblx0J2Rpc2FibGVkJyxcblx0J2Zvcm1ub3ZhbGlkYXRlJyxcblx0J2hpZGRlbicsXG5cdCdpbmRldGVybWluYXRlJyxcblx0J2lzbWFwJyxcblx0J2xvb3AnLFxuXHQnbXVsdGlwbGUnLFxuXHQnbXV0ZWQnLFxuXHQnbm9tb2R1bGUnLFxuXHQnbm92YWxpZGF0ZScsXG5cdCdvcGVuJyxcblx0J3BsYXlzaW5saW5lJyxcblx0J3JlYWRvbmx5Jyxcblx0J3JlcXVpcmVkJyxcblx0J3JldmVyc2VkJyxcblx0J3NlYW1sZXNzJyxcblx0J3NlbGVjdGVkJyxcblx0J3dlYmtpdGRpcmVjdG9yeSdcbl07XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5hbWVgIGlzIGEgYm9vbGVhbiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19ib29sZWFuX2F0dHJpYnV0ZShuYW1lKSB7XG5cdHJldHVybiBET01fQk9PTEVBTl9BVFRSSUJVVEVTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG4vKipcbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fVxuICogTGlzdCBvZiBhdHRyaWJ1dGUgbmFtZXMgdGhhdCBzaG91bGQgYmUgYWxpYXNlZCB0byB0aGVpciBwcm9wZXJ0eSBuYW1lc1xuICogYmVjYXVzZSB0aGV5IGJlaGF2ZSBkaWZmZXJlbnRseSBiZXR3ZWVuIHNldHRpbmcgdGhlbSBhcyBhbiBhdHRyaWJ1dGUgYW5kXG4gKiBzZXR0aW5nIHRoZW0gYXMgYSBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgQVRUUklCVVRFX0FMSUFTRVMgPSB7XG5cdC8vIG5vIGBjbGFzczogJ2NsYXNzTmFtZSdgIGJlY2F1c2Ugd2UgaGFuZGxlIHRoYXQgc2VwYXJhdGVseVxuXHRmb3Jtbm92YWxpZGF0ZTogJ2Zvcm1Ob1ZhbGlkYXRlJyxcblx0aXNtYXA6ICdpc01hcCcsXG5cdG5vbW9kdWxlOiAnbm9Nb2R1bGUnLFxuXHRwbGF5c2lubGluZTogJ3BsYXlzSW5saW5lJyxcblx0cmVhZG9ubHk6ICdyZWFkT25seScsXG5cdGRlZmF1bHR2YWx1ZTogJ2RlZmF1bHRWYWx1ZScsXG5cdGRlZmF1bHRjaGVja2VkOiAnZGVmYXVsdENoZWNrZWQnLFxuXHRzcmNvYmplY3Q6ICdzcmNPYmplY3QnXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVfYXR0cmlidXRlKG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIEFUVFJJQlVURV9BTElBU0VTW25hbWVdID8/IG5hbWU7XG59XG5cbmNvbnN0IERPTV9QUk9QRVJUSUVTID0gW1xuXHQuLi5ET01fQk9PTEVBTl9BVFRSSUJVVEVTLFxuXHQnZm9ybU5vVmFsaWRhdGUnLFxuXHQnaXNNYXAnLFxuXHQnbm9Nb2R1bGUnLFxuXHQncGxheXNJbmxpbmUnLFxuXHQncmVhZE9ubHknLFxuXHQndmFsdWUnLFxuXHQnaW5lcnQnLFxuXHQndm9sdW1lJyxcblx0J2RlZmF1bHRWYWx1ZScsXG5cdCdkZWZhdWx0Q2hlY2tlZCcsXG5cdCdzcmNPYmplY3QnXG5dO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19kb21fcHJvcGVydHkobmFtZSkge1xuXHRyZXR1cm4gRE9NX1BST1BFUlRJRVMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IE5PTl9TVEFUSUNfUFJPUEVSVElFUyA9IFsnYXV0b2ZvY3VzJywgJ211dGVkJywgJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCddO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBhdHRyaWJ1dGUgY2Fubm90IGJlIHNldCB0aHJvdWdoIHRoZSB0ZW1wbGF0ZVxuICogc3RyaW5nLCBpLmUuIG5lZWRzIHNvbWUga2luZCBvZiBKYXZhU2NyaXB0IGhhbmRsaW5nIHRvIHdvcmsuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2Fubm90X2JlX3NldF9zdGF0aWNhbGx5KG5hbWUpIHtcblx0cmV0dXJuIE5PTl9TVEFUSUNfUFJPUEVSVElFUy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuLyoqXG4gKiBTdWJzZXQgb2YgZGVsZWdhdGVkIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGFzc2l2ZSBieSBkZWZhdWx0LlxuICogVGhlc2UgdHdvIGFyZSBhbHJlYWR5IHBhc3NpdmUgdmlhIGJyb3dzZXIgZGVmYXVsdHMgb24gd2luZG93LCBkb2N1bWVudCBhbmQgYm9keS5cbiAqIEJ1dCBzaW5jZVxuICogLSB3ZSdyZSBkZWxlZ2F0aW5nIHRoZW1cbiAqIC0gdGhleSBoYXBwZW4gb2Z0ZW5cbiAqIC0gdGhleSBhcHBseSB0byBtb2JpbGUgd2hpY2ggaXMgZ2VuZXJhbGx5IGxlc3MgcGVyZm9ybWFudFxuICogd2UncmUgbWFya2luZyB0aGVtIGFzIHBhc3NpdmUgYnkgZGVmYXVsdCBmb3Igb3RoZXIgZWxlbWVudHMsIHRvby5cbiAqL1xuY29uc3QgUEFTU0lWRV9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJ107XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5hbWVgIGlzIGEgcGFzc2l2ZSBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzX3Bhc3NpdmVfZXZlbnQobmFtZSkge1xuXHRyZXR1cm4gUEFTU0lWRV9FVkVOVFMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IENPTlRFTlRfRURJVEFCTEVfQklORElOR1MgPSBbJ3RleHRDb250ZW50JywgJ2lubmVySFRNTCcsICdpbm5lclRleHQnXTtcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICovXG5leHBvcnQgZnVuY3Rpb24gaXNfY29udGVudF9lZGl0YWJsZV9iaW5kaW5nKG5hbWUpIHtcblx0cmV0dXJuIENPTlRFTlRfRURJVEFCTEVfQklORElOR1MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IExPQURfRVJST1JfRUxFTUVOVFMgPSBbXG5cdCdib2R5Jyxcblx0J2VtYmVkJyxcblx0J2lmcmFtZScsXG5cdCdpbWcnLFxuXHQnbGluaycsXG5cdCdvYmplY3QnLFxuXHQnc2NyaXB0Jyxcblx0J3N0eWxlJyxcblx0J3RyYWNrJ1xuXTtcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBlbWl0cyBgbG9hZGAgYW5kIGBlcnJvcmAgZXZlbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfbG9hZF9lcnJvcl9lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIExPQURfRVJST1JfRUxFTUVOVFMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IFNWR19FTEVNRU5UUyA9IFtcblx0J2FsdEdseXBoJyxcblx0J2FsdEdseXBoRGVmJyxcblx0J2FsdEdseXBoSXRlbScsXG5cdCdhbmltYXRlJyxcblx0J2FuaW1hdGVDb2xvcicsXG5cdCdhbmltYXRlTW90aW9uJyxcblx0J2FuaW1hdGVUcmFuc2Zvcm0nLFxuXHQnY2lyY2xlJyxcblx0J2NsaXBQYXRoJyxcblx0J2NvbG9yLXByb2ZpbGUnLFxuXHQnY3Vyc29yJyxcblx0J2RlZnMnLFxuXHQnZGVzYycsXG5cdCdkaXNjYXJkJyxcblx0J2VsbGlwc2UnLFxuXHQnZmVCbGVuZCcsXG5cdCdmZUNvbG9yTWF0cml4Jyxcblx0J2ZlQ29tcG9uZW50VHJhbnNmZXInLFxuXHQnZmVDb21wb3NpdGUnLFxuXHQnZmVDb252b2x2ZU1hdHJpeCcsXG5cdCdmZURpZmZ1c2VMaWdodGluZycsXG5cdCdmZURpc3BsYWNlbWVudE1hcCcsXG5cdCdmZURpc3RhbnRMaWdodCcsXG5cdCdmZURyb3BTaGFkb3cnLFxuXHQnZmVGbG9vZCcsXG5cdCdmZUZ1bmNBJyxcblx0J2ZlRnVuY0InLFxuXHQnZmVGdW5jRycsXG5cdCdmZUZ1bmNSJyxcblx0J2ZlR2F1c3NpYW5CbHVyJyxcblx0J2ZlSW1hZ2UnLFxuXHQnZmVNZXJnZScsXG5cdCdmZU1lcmdlTm9kZScsXG5cdCdmZU1vcnBob2xvZ3knLFxuXHQnZmVPZmZzZXQnLFxuXHQnZmVQb2ludExpZ2h0Jyxcblx0J2ZlU3BlY3VsYXJMaWdodGluZycsXG5cdCdmZVNwb3RMaWdodCcsXG5cdCdmZVRpbGUnLFxuXHQnZmVUdXJidWxlbmNlJyxcblx0J2ZpbHRlcicsXG5cdCdmb250Jyxcblx0J2ZvbnQtZmFjZScsXG5cdCdmb250LWZhY2UtZm9ybWF0Jyxcblx0J2ZvbnQtZmFjZS1uYW1lJyxcblx0J2ZvbnQtZmFjZS1zcmMnLFxuXHQnZm9udC1mYWNlLXVyaScsXG5cdCdmb3JlaWduT2JqZWN0Jyxcblx0J2cnLFxuXHQnZ2x5cGgnLFxuXHQnZ2x5cGhSZWYnLFxuXHQnaGF0Y2gnLFxuXHQnaGF0Y2hwYXRoJyxcblx0J2hrZXJuJyxcblx0J2ltYWdlJyxcblx0J2xpbmUnLFxuXHQnbGluZWFyR3JhZGllbnQnLFxuXHQnbWFya2VyJyxcblx0J21hc2snLFxuXHQnbWVzaCcsXG5cdCdtZXNoZ3JhZGllbnQnLFxuXHQnbWVzaHBhdGNoJyxcblx0J21lc2hyb3cnLFxuXHQnbWV0YWRhdGEnLFxuXHQnbWlzc2luZy1nbHlwaCcsXG5cdCdtcGF0aCcsXG5cdCdwYXRoJyxcblx0J3BhdHRlcm4nLFxuXHQncG9seWdvbicsXG5cdCdwb2x5bGluZScsXG5cdCdyYWRpYWxHcmFkaWVudCcsXG5cdCdyZWN0Jyxcblx0J3NldCcsXG5cdCdzb2xpZGNvbG9yJyxcblx0J3N0b3AnLFxuXHQnc3ZnJyxcblx0J3N3aXRjaCcsXG5cdCdzeW1ib2wnLFxuXHQndGV4dCcsXG5cdCd0ZXh0UGF0aCcsXG5cdCd0cmVmJyxcblx0J3RzcGFuJyxcblx0J3Vua25vd24nLFxuXHQndXNlJyxcblx0J3ZpZXcnLFxuXHQndmtlcm4nXG5dO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19zdmcobmFtZSkge1xuXHRyZXR1cm4gU1ZHX0VMRU1FTlRTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBNQVRITUxfRUxFTUVOVFMgPSBbXG5cdCdhbm5vdGF0aW9uJyxcblx0J2Fubm90YXRpb24teG1sJyxcblx0J21hY3Rpb24nLFxuXHQnbWF0aCcsXG5cdCdtZXJyb3InLFxuXHQnbWZyYWMnLFxuXHQnbWknLFxuXHQnbW11bHRpc2NyaXB0cycsXG5cdCdtbicsXG5cdCdtbycsXG5cdCdtb3ZlcicsXG5cdCdtcGFkZGVkJyxcblx0J21waGFudG9tJyxcblx0J21wcmVzY3JpcHRzJyxcblx0J21yb290Jyxcblx0J21yb3cnLFxuXHQnbXMnLFxuXHQnbXNwYWNlJyxcblx0J21zcXJ0Jyxcblx0J21zdHlsZScsXG5cdCdtc3ViJyxcblx0J21zdWJzdXAnLFxuXHQnbXN1cCcsXG5cdCdtdGFibGUnLFxuXHQnbXRkJyxcblx0J210ZXh0Jyxcblx0J210cicsXG5cdCdtdW5kZXInLFxuXHQnbXVuZGVyb3ZlcicsXG5cdCdzZW1hbnRpY3MnXG5dO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19tYXRobWwobmFtZSkge1xuXHRyZXR1cm4gTUFUSE1MX0VMRU1FTlRTLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBSVU5FUyA9IC8qKiBAdHlwZSB7Y29uc3R9ICovIChbXG5cdCckc3RhdGUnLFxuXHQnJHN0YXRlLnJhdycsXG5cdCckc3RhdGUuc25hcHNob3QnLFxuXHQnJHByb3BzJyxcblx0JyRiaW5kYWJsZScsXG5cdCckZGVyaXZlZCcsXG5cdCckZGVyaXZlZC5ieScsXG5cdCckZWZmZWN0Jyxcblx0JyRlZmZlY3QucHJlJyxcblx0JyRlZmZlY3QudHJhY2tpbmcnLFxuXHQnJGVmZmVjdC5yb290Jyxcblx0JyRpbnNwZWN0Jyxcblx0JyRpbnNwZWN0KCkud2l0aCcsXG5cdCckaW5zcGVjdC50cmFjZScsXG5cdCckaG9zdCdcbl0pO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmFtZSBpcyBSVU5FU1tudW1iZXJdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcnVuZShuYW1lKSB7XG5cdHJldHVybiBSVU5FUy5pbmNsdWRlcygvKiogQHR5cGUge1JVTkVTW251bWJlcl19ICovIChuYW1lKSk7XG59XG5cbi8qKiBMaXN0IG9mIGVsZW1lbnRzIHRoYXQgcmVxdWlyZSByYXcgY29udGVudHMgYW5kIHNob3VsZCBub3QgaGF2ZSBTU1IgY29tbWVudHMgcHV0IGluIHRoZW0gKi9cbmNvbnN0IFJBV19URVhUX0VMRU1FTlRTID0gLyoqIEB0eXBlIHtjb25zdH0gKi8gKFsndGV4dGFyZWEnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3RpdGxlJ10pO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IG5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19yYXdfdGV4dF9lbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIFJBV19URVhUX0VMRU1FTlRTLmluY2x1ZGVzKC8qKiBAdHlwZSB7UkFXX1RFWFRfRUxFTUVOVFNbbnVtYmVyXX0gKi8gKG5hbWUpKTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGRldnRvb2xzIHRyeWluZyB0byBtYWtlIGBsb2NhdGlvbmAgYSBjbGlja2FibGUgbGluayBieSBpbnNlcnRpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gbG9jYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplX2xvY2F0aW9uKGxvY2F0aW9uKSB7XG5cdHJldHVybiBsb2NhdGlvbj8ucmVwbGFjZSgvXFwvL2csICcvXFx1MjAwYicpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgdHJ1ZTtcbiIsIi8vIFN0b3JlIHRoZSByZWZlcmVuY2VzIHRvIGdsb2JhbHMgaW4gY2FzZSBzb21lb25lIHRyaWVzIHRvIG1vbmtleSBwYXRjaCB0aGVzZSwgY2F1c2luZyB0aGUgYmVsb3dcbi8vIHRvIGRlLW9wdCAodGhpcyBvY2N1cnMgb2Z0ZW4gd2hlbiB1c2luZyBwb3B1bGFyIGV4dGVuc2lvbnMpLlxuZXhwb3J0IHZhciBpc19hcnJheSA9IEFycmF5LmlzQXJyYXk7XG5leHBvcnQgdmFyIGFycmF5X2Zyb20gPSBBcnJheS5mcm9tO1xuZXhwb3J0IHZhciBvYmplY3Rfa2V5cyA9IE9iamVjdC5rZXlzO1xuZXhwb3J0IHZhciBkZWZpbmVfcHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5leHBvcnQgdmFyIGdldF9kZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmV4cG9ydCB2YXIgZ2V0X2Rlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG5leHBvcnQgdmFyIG9iamVjdF9wcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZXhwb3J0IHZhciBhcnJheV9wcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5leHBvcnQgdmFyIGdldF9wcm90b3R5cGVfb2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHRoaW5nXG4gKiBAcmV0dXJucyB7dGhpbmcgaXMgRnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuXHRyZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RoZW4vaXMtcHJvbWlzZS9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbi8qKlxuICogQHRlbXBsYXRlIFtUPWFueV1cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIFByb21pc2VMaWtlPFQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlPy50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKiogQHBhcmFtIHtGdW5jdGlvbn0gZm4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oZm4pIHtcblx0cmV0dXJuIGZuKCk7XG59XG5cbi8qKiBAcGFyYW0ge0FycmF5PCgpID0+IHZvaWQ+fSBhcnIgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5fYWxsKGFycikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGFycltpXSgpO1xuXHR9XG59XG5cbi8qKlxuICogVE9ETyByZXBsYWNlIHdpdGggUHJvbWlzZS53aXRoUmVzb2x2ZXJzIG9uY2Ugc3VwcG9ydGVkIHdpZGVseSBlbm91Z2hcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcblx0LyoqIEB0eXBlIHsodmFsdWU6IFQpID0+IHZvaWR9ICovXG5cdHZhciByZXNvbHZlO1xuXG5cdC8qKiBAdHlwZSB7KHJlYXNvbjogYW55KSA9PiB2b2lkfSAqL1xuXHR2YXIgcmVqZWN0O1xuXG5cdC8qKiBAdHlwZSB7UHJvbWlzZTxUPn0gKi9cblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRyZXNvbHZlID0gcmVzO1xuXHRcdHJlamVjdCA9IHJlajtcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4geyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QgfTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHBhcmFtIHtWIHwgKCgpID0+IFYpfSBmYWxsYmFja1xuICogQHBhcmFtIHtib29sZWFufSBbbGF6eV1cbiAqIEByZXR1cm5zIHtWfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFsbGJhY2sodmFsdWUsIGZhbGxiYWNrLCBsYXp5ID0gZmFsc2UpIHtcblx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWRcblx0XHQ/IGxhenlcblx0XHRcdD8gLyoqIEB0eXBlIHsoKSA9PiBWfSAqLyAoZmFsbGJhY2spKClcblx0XHRcdDogLyoqIEB0eXBlIHtWfSAqLyAoZmFsbGJhY2spXG5cdFx0OiB2YWx1ZTtcbn1cbiIsImV4cG9ydCBjb25zdCBERVJJVkVEID0gMSA8PCAxO1xuZXhwb3J0IGNvbnN0IEVGRkVDVCA9IDEgPDwgMjtcbmV4cG9ydCBjb25zdCBSRU5ERVJfRUZGRUNUID0gMSA8PCAzO1xuZXhwb3J0IGNvbnN0IEJMT0NLX0VGRkVDVCA9IDEgPDwgNDtcbmV4cG9ydCBjb25zdCBCUkFOQ0hfRUZGRUNUID0gMSA8PCA1O1xuZXhwb3J0IGNvbnN0IFJPT1RfRUZGRUNUID0gMSA8PCA2O1xuZXhwb3J0IGNvbnN0IEJPVU5EQVJZX0VGRkVDVCA9IDEgPDwgNztcbmV4cG9ydCBjb25zdCBVTk9XTkVEID0gMSA8PCA4O1xuZXhwb3J0IGNvbnN0IERJU0NPTk5FQ1RFRCA9IDEgPDwgOTtcbmV4cG9ydCBjb25zdCBDTEVBTiA9IDEgPDwgMTA7XG5leHBvcnQgY29uc3QgRElSVFkgPSAxIDw8IDExO1xuZXhwb3J0IGNvbnN0IE1BWUJFX0RJUlRZID0gMSA8PCAxMjtcbmV4cG9ydCBjb25zdCBJTkVSVCA9IDEgPDwgMTM7XG5leHBvcnQgY29uc3QgREVTVFJPWUVEID0gMSA8PCAxNDtcbmV4cG9ydCBjb25zdCBFRkZFQ1RfUkFOID0gMSA8PCAxNTtcbi8qKiAnVHJhbnNwYXJlbnQnIGVmZmVjdHMgZG8gbm90IGNyZWF0ZSBhIHRyYW5zaXRpb24gYm91bmRhcnkgKi9cbmV4cG9ydCBjb25zdCBFRkZFQ1RfVFJBTlNQQVJFTlQgPSAxIDw8IDE2O1xuLyoqIFN2ZWx0ZSA0IGxlZ2FjeSBtb2RlIHByb3BzIG5lZWQgdG8gYmUgaGFuZGxlZCB3aXRoIGRlcml2ZWRzIGFuZCBiZSByZWNvZ25pemVkIGVsc2V3aGVyZSwgaGVuY2UgdGhlIGRlZGljYXRlZCBmbGFnICovXG5leHBvcnQgY29uc3QgTEVHQUNZX0RFUklWRURfUFJPUCA9IDEgPDwgMTc7XG5leHBvcnQgY29uc3QgSU5TUEVDVF9FRkZFQ1QgPSAxIDw8IDE4O1xuZXhwb3J0IGNvbnN0IEhFQURfRUZGRUNUID0gMSA8PCAxOTtcbmV4cG9ydCBjb25zdCBFRkZFQ1RfSEFTX0RFUklWRUQgPSAxIDw8IDIwO1xuXG5leHBvcnQgY29uc3QgU1RBVEVfU1lNQk9MID0gU3ltYm9sKCckc3RhdGUnKTtcbmV4cG9ydCBjb25zdCBTVEFURV9TWU1CT0xfTUVUQURBVEEgPSBTeW1ib2woJyRzdGF0ZSBtZXRhZGF0YScpO1xuZXhwb3J0IGNvbnN0IExFR0FDWV9QUk9QUyA9IFN5bWJvbCgnbGVnYWN5IHByb3BzJyk7XG5leHBvcnQgY29uc3QgTE9BRElOR19BVFRSX1NZTUJPTCA9IFN5bWJvbCgnJyk7XG4iLCIvKiogQGltcG9ydCB7IEVxdWFscyB9IGZyb20gJyNjbGllbnQnICovXG4vKiogQHR5cGUge0VxdWFsc30gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHModmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSB0aGlzLnY7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3dufSBhXG4gKiBAcGFyYW0ge3Vua25vd259IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPSBhXG5cdFx0PyBiID09IGJcblx0XHQ6IGEgIT09IGIgfHwgKGEgIT09IG51bGwgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IGFcbiAqIEBwYXJhbSB7dW5rbm93bn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuXHRyZXR1cm4gYSAhPT0gYjtcbn1cblxuLyoqIEB0eXBlIHtFcXVhbHN9ICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9lcXVhbHModmFsdWUpIHtcblx0cmV0dXJuICFzYWZlX25vdF9lcXVhbCh2YWx1ZSwgdGhpcy52KTtcbn1cbiIsIi8qIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgc2NyaXB0cy9wcm9jZXNzLW1lc3NhZ2VzL2luZGV4LmpzLiBEbyBub3QgZWRpdCEgKi9cblxuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5cbi8qKlxuICogVXNpbmcgYGJpbmQ6dmFsdWVgIHRvZ2V0aGVyIHdpdGggYSBjaGVja2JveCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gVXNlIGBiaW5kOmNoZWNrZWRgIGluc3RlYWRcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRfaW52YWxpZF9jaGVja2JveF92YWx1ZSgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBiaW5kX2ludmFsaWRfY2hlY2tib3hfdmFsdWVcXG5Vc2luZyBcXGBiaW5kOnZhbHVlXFxgIHRvZ2V0aGVyIHdpdGggYSBjaGVja2JveCBpbnB1dCBpcyBub3QgYWxsb3dlZC4gVXNlIFxcYGJpbmQ6Y2hlY2tlZFxcYCBpbnN0ZWFkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2NoZWNrYm94X3ZhbHVlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kX2ludmFsaWRfY2hlY2tib3hfdmFsdWVgKTtcblx0fVxufVxuXG4vKipcbiAqIENvbXBvbmVudCAlY29tcG9uZW50JSBoYXMgYW4gZXhwb3J0IG5hbWVkIGAla2V5JWAgdGhhdCBhIGNvbnN1bWVyIGNvbXBvbmVudCBpcyB0cnlpbmcgdG8gYWNjZXNzIHVzaW5nIGBiaW5kOiVrZXklYCwgd2hpY2ggaXMgZGlzYWxsb3dlZC4gSW5zdGVhZCwgdXNlIGBiaW5kOnRoaXNgIChlLmcuIGA8JW5hbWUlIGJpbmQ6dGhpcz17Y29tcG9uZW50fSAvPmApIGFuZCB0aGVuIGFjY2VzcyB0aGUgcHJvcGVydHkgb24gdGhlIGJvdW5kIGNvbXBvbmVudCBpbnN0YW5jZSAoZS5nLiBgY29tcG9uZW50LiVrZXklYClcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kX2ludmFsaWRfZXhwb3J0KGNvbXBvbmVudCwga2V5LCBuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgYmluZF9pbnZhbGlkX2V4cG9ydFxcbkNvbXBvbmVudCAke2NvbXBvbmVudH0gaGFzIGFuIGV4cG9ydCBuYW1lZCBcXGAke2tleX1cXGAgdGhhdCBhIGNvbnN1bWVyIGNvbXBvbmVudCBpcyB0cnlpbmcgdG8gYWNjZXNzIHVzaW5nIFxcYGJpbmQ6JHtrZXl9XFxgLCB3aGljaCBpcyBkaXNhbGxvd2VkLiBJbnN0ZWFkLCB1c2UgXFxgYmluZDp0aGlzXFxgIChlLmcuIFxcYDwke25hbWV9IGJpbmQ6dGhpcz17Y29tcG9uZW50fSAvPlxcYCkgYW5kIHRoZW4gYWNjZXNzIHRoZSBwcm9wZXJ0eSBvbiB0aGUgYm91bmQgY29tcG9uZW50IGluc3RhbmNlIChlLmcuIFxcYGNvbXBvbmVudC4ke2tleX1cXGApXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2V4cG9ydGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9pbnZhbGlkX2V4cG9ydGApO1xuXHR9XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgaXMgYXR0ZW1wdGluZyB0byBiaW5kIHRvIGEgbm9uLWJpbmRhYmxlIHByb3BlcnR5IGAla2V5JWAgYmVsb25naW5nIHRvICVjb21wb25lbnQlIChpLmUuIGA8JW5hbWUlIGJpbmQ6JWtleSU9ey4uLn0+YCkuIFRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBiaW5kYWJsZTogYGxldCB7ICVrZXklID0gJGJpbmRhYmxlKCkgfSA9ICRwcm9wcygpYFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRfbm90X2JpbmRhYmxlKGtleSwgY29tcG9uZW50LCBuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgYmluZF9ub3RfYmluZGFibGVcXG5BIGNvbXBvbmVudCBpcyBhdHRlbXB0aW5nIHRvIGJpbmQgdG8gYSBub24tYmluZGFibGUgcHJvcGVydHkgXFxgJHtrZXl9XFxgIGJlbG9uZ2luZyB0byAke2NvbXBvbmVudH0gKGkuZS4gXFxgPCR7bmFtZX0gYmluZDoke2tleX09ey4uLn0+XFxgKS4gVG8gbWFyayBhIHByb3BlcnR5IGFzIGJpbmRhYmxlOiBcXGBsZXQgeyAke2tleX0gPSAkYmluZGFibGUoKSB9ID0gJHByb3BzKClcXGBcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kX25vdF9iaW5kYWJsZWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYmluZF9ub3RfYmluZGFibGVgKTtcblx0fVxufVxuXG4vKipcbiAqICVwYXJlbnQlIGNhbGxlZCBgJW1ldGhvZCVgIG9uIGFuIGluc3RhbmNlIG9mICVjb21wb25lbnQlLCB3aGljaCBpcyBubyBsb25nZXIgdmFsaWQgaW4gU3ZlbHRlIDVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudF9hcGlfY2hhbmdlZChwYXJlbnQsIG1ldGhvZCwgY29tcG9uZW50KSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgY29tcG9uZW50X2FwaV9jaGFuZ2VkXFxuJHtwYXJlbnR9IGNhbGxlZCBcXGAke21ldGhvZH1cXGAgb24gYW4gaW5zdGFuY2Ugb2YgJHtjb21wb25lbnR9LCB3aGljaCBpcyBubyBsb25nZXIgdmFsaWQgaW4gU3ZlbHRlIDVcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9jb21wb25lbnRfYXBpX2NoYW5nZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2NvbXBvbmVudF9hcGlfY2hhbmdlZGApO1xuXHR9XG59XG5cbi8qKlxuICogQXR0ZW1wdGVkIHRvIGluc3RhbnRpYXRlICVjb21wb25lbnQlIHdpdGggYG5ldyAlbmFtZSVgLCB3aGljaCBpcyBubyBsb25nZXIgdmFsaWQgaW4gU3ZlbHRlIDUuIElmIHRoaXMgY29tcG9uZW50IGlzIG5vdCB1bmRlciB5b3VyIGNvbnRyb2wsIHNldCB0aGUgYGNvbXBhdGliaWxpdHkuY29tcG9uZW50QXBpYCBjb21waWxlciBvcHRpb24gdG8gYDRgIHRvIGtlZXAgaXQgd29ya2luZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRfYXBpX2ludmFsaWRfbmV3KGNvbXBvbmVudCwgbmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGNvbXBvbmVudF9hcGlfaW52YWxpZF9uZXdcXG5BdHRlbXB0ZWQgdG8gaW5zdGFudGlhdGUgJHtjb21wb25lbnR9IHdpdGggXFxgbmV3ICR7bmFtZX1cXGAsIHdoaWNoIGlzIG5vIGxvbmdlciB2YWxpZCBpbiBTdmVsdGUgNS4gSWYgdGhpcyBjb21wb25lbnQgaXMgbm90IHVuZGVyIHlvdXIgY29udHJvbCwgc2V0IHRoZSBcXGBjb21wYXRpYmlsaXR5LmNvbXBvbmVudEFwaVxcYCBjb21waWxlciBvcHRpb24gdG8gXFxgNFxcYCB0byBrZWVwIGl0IHdvcmtpbmcuXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29tcG9uZW50X2FwaV9pbnZhbGlkX25ld2ApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29tcG9uZW50X2FwaV9pbnZhbGlkX25ld2ApO1xuXHR9XG59XG5cbi8qKlxuICogQSBkZXJpdmVkIHZhbHVlIGNhbm5vdCByZWZlcmVuY2UgaXRzZWxmIHJlY3Vyc2l2ZWx5XG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmVkX3JlZmVyZW5jZXNfc2VsZigpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBkZXJpdmVkX3JlZmVyZW5jZXNfc2VsZlxcbkEgZGVyaXZlZCB2YWx1ZSBjYW5ub3QgcmVmZXJlbmNlIGl0c2VsZiByZWN1cnNpdmVseVxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2Rlcml2ZWRfcmVmZXJlbmNlc19zZWxmYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9kZXJpdmVkX3JlZmVyZW5jZXNfc2VsZmApO1xuXHR9XG59XG5cbi8qKlxuICogS2V5ZWQgZWFjaCBibG9jayBoYXMgZHVwbGljYXRlIGtleSBgJXZhbHVlJWAgYXQgaW5kZXhlcyAlYSUgYW5kICViJVxuICogQHBhcmFtIHtzdHJpbmd9IGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBiXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZCB8IG51bGx9IFt2YWx1ZV1cbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhY2hfa2V5X2R1cGxpY2F0ZShhLCBiLCB2YWx1ZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGVhY2hfa2V5X2R1cGxpY2F0ZVxcbiR7dmFsdWUgPyBgS2V5ZWQgZWFjaCBibG9jayBoYXMgZHVwbGljYXRlIGtleSBcXGAke3ZhbHVlfVxcYCBhdCBpbmRleGVzICR7YX0gYW5kICR7Yn1gIDogYEtleWVkIGVhY2ggYmxvY2sgaGFzIGR1cGxpY2F0ZSBrZXkgYXQgaW5kZXhlcyAke2F9IGFuZCAke2J9YH1cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9lYWNoX2tleV9kdXBsaWNhdGVgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2VhY2hfa2V5X2R1cGxpY2F0ZWApO1xuXHR9XG59XG5cbi8qKlxuICogYCVydW5lJWAgY2Fubm90IGJlIHVzZWQgaW5zaWRlIGFuIGVmZmVjdCBjbGVhbnVwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcnVuZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X2luX3RlYXJkb3duKHJ1bmUpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBlZmZlY3RfaW5fdGVhcmRvd25cXG5cXGAke3J1bmV9XFxgIGNhbm5vdCBiZSB1c2VkIGluc2lkZSBhbiBlZmZlY3QgY2xlYW51cCBmdW5jdGlvblxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2VmZmVjdF9pbl90ZWFyZG93bmApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X2luX3RlYXJkb3duYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBFZmZlY3QgY2Fubm90IGJlIGNyZWF0ZWQgaW5zaWRlIGEgYCRkZXJpdmVkYCB2YWx1ZSB0aGF0IHdhcyBub3QgaXRzZWxmIGNyZWF0ZWQgaW5zaWRlIGFuIGVmZmVjdFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBlZmZlY3RfaW5fdW5vd25lZF9kZXJpdmVkXFxuRWZmZWN0IGNhbm5vdCBiZSBjcmVhdGVkIGluc2lkZSBhIFxcYCRkZXJpdmVkXFxgIHZhbHVlIHRoYXQgd2FzIG5vdCBpdHNlbGYgY3JlYXRlZCBpbnNpZGUgYW4gZWZmZWN0XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZGApO1xuXHR9XG59XG5cbi8qKlxuICogYCVydW5lJWAgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYW4gZWZmZWN0IChlLmcuIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24pXG4gKiBAcGFyYW0ge3N0cmluZ30gcnVuZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X29ycGhhbihydW5lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZWZmZWN0X29ycGhhblxcblxcYCR7cnVuZX1cXGAgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYW4gZWZmZWN0IChlLmcuIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24pXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X29ycGhhbmApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X29ycGhhbmApO1xuXHR9XG59XG5cbi8qKlxuICogTWF4aW11bSB1cGRhdGUgZGVwdGggZXhjZWVkZWQuIFRoaXMgY2FuIGhhcHBlbiB3aGVuIGEgcmVhY3RpdmUgYmxvY2sgb3IgZWZmZWN0IHJlcGVhdGVkbHkgc2V0cyBhIG5ldyB2YWx1ZS4gU3ZlbHRlIGxpbWl0cyB0aGUgbnVtYmVyIG9mIG5lc3RlZCB1cGRhdGVzIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHNcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgZWZmZWN0X3VwZGF0ZV9kZXB0aF9leGNlZWRlZFxcbk1heGltdW0gdXBkYXRlIGRlcHRoIGV4Y2VlZGVkLiBUaGlzIGNhbiBoYXBwZW4gd2hlbiBhIHJlYWN0aXZlIGJsb2NrIG9yIGVmZmVjdCByZXBlYXRlZGx5IHNldHMgYSBuZXcgdmFsdWUuIFN2ZWx0ZSBsaW1pdHMgdGhlIG51bWJlciBvZiBuZXN0ZWQgdXBkYXRlcyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X3VwZGF0ZV9kZXB0aF9leGNlZWRlZGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvZWZmZWN0X3VwZGF0ZV9kZXB0aF9leGNlZWRlZGApO1xuXHR9XG59XG5cbi8qKlxuICogRmFpbGVkIHRvIGh5ZHJhdGUgdGhlIGFwcGxpY2F0aW9uXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRpb25fZmFpbGVkKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGh5ZHJhdGlvbl9mYWlsZWRcXG5GYWlsZWQgdG8gaHlkcmF0ZSB0aGUgYXBwbGljYXRpb25cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fZmFpbGVkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fZmFpbGVkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb3VsZCBub3QgYHtAcmVuZGVyfWAgc25pcHBldCBkdWUgdG8gdGhlIGV4cHJlc3Npb24gYmVpbmcgYG51bGxgIG9yIGB1bmRlZmluZWRgLiBDb25zaWRlciB1c2luZyBvcHRpb25hbCBjaGFpbmluZyBge0ByZW5kZXIgc25pcHBldD8uKCl9YFxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZF9zbmlwcGV0KCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGludmFsaWRfc25pcHBldFxcbkNvdWxkIG5vdCBcXGB7QHJlbmRlcn1cXGAgc25pcHBldCBkdWUgdG8gdGhlIGV4cHJlc3Npb24gYmVpbmcgXFxgbnVsbFxcYCBvciBcXGB1bmRlZmluZWRcXGAuIENvbnNpZGVyIHVzaW5nIG9wdGlvbmFsIGNoYWluaW5nIFxcYHtAcmVuZGVyIHNuaXBwZXQ/LigpfVxcYFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfc25pcHBldGApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaW52YWxpZF9zbmlwcGV0YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBgJW5hbWUlKC4uLilgIGNhbm5vdCBiZSB1c2VkIGluIHJ1bmVzIG1vZGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWZlY3ljbGVfbGVnYWN5X29ubHkobmFtZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYGxpZmVjeWNsZV9sZWdhY3lfb25seVxcblxcYCR7bmFtZX0oLi4uKVxcYCBjYW5ub3QgYmUgdXNlZCBpbiBydW5lcyBtb2RlXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGlmZWN5Y2xlX2xlZ2FjeV9vbmx5YCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9saWZlY3ljbGVfbGVnYWN5X29ubHlgKTtcblx0fVxufVxuXG4vKipcbiAqIENhbm5vdCBkbyBgYmluZDola2V5JT17dW5kZWZpbmVkfWAgd2hlbiBgJWtleSVgIGhhcyBhIGZhbGxiYWNrIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wc19pbnZhbGlkX3ZhbHVlKGtleSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYHByb3BzX2ludmFsaWRfdmFsdWVcXG5DYW5ub3QgZG8gXFxgYmluZDoke2tleX09e3VuZGVmaW5lZH1cXGAgd2hlbiBcXGAke2tleX1cXGAgaGFzIGEgZmFsbGJhY2sgdmFsdWVcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9wcm9wc19pbnZhbGlkX3ZhbHVlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9wcm9wc19pbnZhbGlkX3ZhbHVlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXN0IGVsZW1lbnQgcHJvcGVydGllcyBvZiBgJHByb3BzKClgIHN1Y2ggYXMgYCVwcm9wZXJ0eSVgIGFyZSByZWFkb25seVxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7bmV2ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wc19yZXN0X3JlYWRvbmx5KHByb3BlcnR5KSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgcHJvcHNfcmVzdF9yZWFkb25seVxcblJlc3QgZWxlbWVudCBwcm9wZXJ0aWVzIG9mIFxcYCRwcm9wcygpXFxgIHN1Y2ggYXMgXFxgJHtwcm9wZXJ0eX1cXGAgYXJlIHJlYWRvbmx5XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcHJvcHNfcmVzdF9yZWFkb25seWApO1xuXG5cdFx0ZXJyb3IubmFtZSA9ICdTdmVsdGUgZXJyb3InO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvcHJvcHNfcmVzdF9yZWFkb25seWApO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGAlcnVuZSVgIHJ1bmUgaXMgb25seSBhdmFpbGFibGUgaW5zaWRlIGAuc3ZlbHRlYCBhbmQgYC5zdmVsdGUuanMvdHNgIGZpbGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gcnVuZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuZV9vdXRzaWRlX3N2ZWx0ZShydW5lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgcnVuZV9vdXRzaWRlX3N2ZWx0ZVxcblRoZSBcXGAke3J1bmV9XFxgIHJ1bmUgaXMgb25seSBhdmFpbGFibGUgaW5zaWRlIFxcYC5zdmVsdGVcXGAgYW5kIFxcYC5zdmVsdGUuanMvdHNcXGAgZmlsZXNcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9ydW5lX291dHNpZGVfc3ZlbHRlYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9ydW5lX291dHNpZGVfc3ZlbHRlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0eSBkZXNjcmlwdG9ycyBkZWZpbmVkIG9uIGAkc3RhdGVgIG9iamVjdHMgbXVzdCBjb250YWluIGB2YWx1ZWAgYW5kIGFsd2F5cyBiZSBgZW51bWVyYWJsZWAsIGBjb25maWd1cmFibGVgIGFuZCBgd3JpdGFibGVgLlxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWRcXG5Qcm9wZXJ0eSBkZXNjcmlwdG9ycyBkZWZpbmVkIG9uIFxcYCRzdGF0ZVxcYCBvYmplY3RzIG11c3QgY29udGFpbiBcXGB2YWx1ZVxcYCBhbmQgYWx3YXlzIGJlIFxcYGVudW1lcmFibGVcXGAsIFxcYGNvbmZpZ3VyYWJsZVxcYCBhbmQgXFxgd3JpdGFibGVcXGAuXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX2Rlc2NyaXB0b3JzX2ZpeGVkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDYW5ub3Qgc2V0IHByb3RvdHlwZSBvZiBgJHN0YXRlYCBvYmplY3RcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX3Byb3RvdHlwZV9maXhlZCgpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBzdGF0ZV9wcm90b3R5cGVfZml4ZWRcXG5DYW5ub3Qgc2V0IHByb3RvdHlwZSBvZiBcXGAkc3RhdGVcXGAgb2JqZWN0XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfcHJvdG90eXBlX2ZpeGVkYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV9wcm90b3R5cGVfZml4ZWRgKTtcblx0fVxufVxuXG4vKipcbiAqIFJlYWRpbmcgc3RhdGUgdGhhdCB3YXMgY3JlYXRlZCBpbnNpZGUgdGhlIHNhbWUgZGVyaXZlZCBpcyBmb3JiaWRkZW4uIENvbnNpZGVyIHVzaW5nIGB1bnRyYWNrYCB0byByZWFkIGxvY2FsbHkgY3JlYXRlZCBzdGF0ZVxuICogQHJldHVybnMge25ldmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVfdW5zYWZlX2xvY2FsX3JlYWQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgc3RhdGVfdW5zYWZlX2xvY2FsX3JlYWRcXG5SZWFkaW5nIHN0YXRlIHRoYXQgd2FzIGNyZWF0ZWQgaW5zaWRlIHRoZSBzYW1lIGRlcml2ZWQgaXMgZm9yYmlkZGVuLiBDb25zaWRlciB1c2luZyBcXGB1bnRyYWNrXFxgIHRvIHJlYWQgbG9jYWxseSBjcmVhdGVkIHN0YXRlXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfdW5zYWZlX2xvY2FsX3JlYWRgKTtcblxuXHRcdGVycm9yLm5hbWUgPSAnU3ZlbHRlIGVycm9yJztcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Vuc2FmZV9sb2NhbF9yZWFkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGluZyBzdGF0ZSBpbnNpZGUgYSBkZXJpdmVkIG9yIGEgdGVtcGxhdGUgZXhwcmVzc2lvbiBpcyBmb3JiaWRkZW4uIElmIHRoZSB2YWx1ZSBzaG91bGQgbm90IGJlIHJlYWN0aXZlLCBkZWNsYXJlIGl0IHdpdGhvdXQgYCRzdGF0ZWBcbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX3Vuc2FmZV9tdXRhdGlvbigpIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBzdGF0ZV91bnNhZmVfbXV0YXRpb25cXG5VcGRhdGluZyBzdGF0ZSBpbnNpZGUgYSBkZXJpdmVkIG9yIGEgdGVtcGxhdGUgZXhwcmVzc2lvbiBpcyBmb3JiaWRkZW4uIElmIHRoZSB2YWx1ZSBzaG91bGQgbm90IGJlIHJlYWN0aXZlLCBkZWNsYXJlIGl0IHdpdGhvdXQgXFxgJHN0YXRlXFxgXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2Uvc3RhdGVfdW5zYWZlX211dGF0aW9uYCk7XG5cblx0XHRlcnJvci5uYW1lID0gJ1N2ZWx0ZSBlcnJvcic7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9zdGF0ZV91bnNhZmVfbXV0YXRpb25gKTtcblx0fVxufSIsIi8qKiBAaW1wb3J0IHsgRGVyaXZlZCwgRWZmZWN0LCBSZWFjdGlvbiwgU291cmNlLCBWYWx1ZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7XG5cdGNvbXBvbmVudF9jb250ZXh0LFxuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdG5ld19kZXBzLFxuXHRhY3RpdmVfZWZmZWN0LFxuXHR1bnRyYWNrZWRfd3JpdGVzLFxuXHRnZXQsXG5cdGlzX3J1bmVzLFxuXHRzY2hlZHVsZV9lZmZlY3QsXG5cdHNldF91bnRyYWNrZWRfd3JpdGVzLFxuXHRzZXRfc2lnbmFsX3N0YXR1cyxcblx0dW50cmFjayxcblx0aW5jcmVtZW50X3ZlcnNpb24sXG5cdHVwZGF0ZV9lZmZlY3QsXG5cdGRlcml2ZWRfc291cmNlcyxcblx0c2V0X2Rlcml2ZWRfc291cmNlcyxcblx0Y2hlY2tfZGlydGluZXNzLFxuXHRzZXRfaXNfZmx1c2hpbmdfZWZmZWN0LFxuXHRpc19mbHVzaGluZ19lZmZlY3Rcbn0gZnJvbSAnLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBlcXVhbHMsIHNhZmVfZXF1YWxzIH0gZnJvbSAnLi9lcXVhbGl0eS5qcyc7XG5pbXBvcnQge1xuXHRDTEVBTixcblx0REVSSVZFRCxcblx0RElSVFksXG5cdEJSQU5DSF9FRkZFQ1QsXG5cdElOU1BFQ1RfRUZGRUNULFxuXHRVTk9XTkVELFxuXHRNQVlCRV9ESVJUWSxcblx0QkxPQ0tfRUZGRUNUXG59IGZyb20gJy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgKiBhcyBlIGZyb20gJy4uL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBsZWdhY3lfbW9kZV9mbGFnLCB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uLy4uL2ZsYWdzL2luZGV4LmpzJztcbmltcG9ydCB7IGdldF9zdGFjayB9IGZyb20gJy4uL2Rldi90cmFjaW5nLmpzJztcblxuZXhwb3J0IGxldCBpbnNwZWN0X2VmZmVjdHMgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogQHBhcmFtIHtTZXQ8YW55Pn0gdlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2luc3BlY3RfZWZmZWN0cyh2KSB7XG5cdGluc3BlY3RfZWZmZWN0cyA9IHY7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdlxuICogQHBhcmFtIHtFcnJvciB8IG51bGx9IFtzdGFja11cbiAqIEByZXR1cm5zIHtTb3VyY2U8Vj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3VyY2Uodiwgc3RhY2spIHtcblx0LyoqIEB0eXBlIHtWYWx1ZX0gKi9cblx0dmFyIHNpZ25hbCA9IHtcblx0XHRmOiAwLCAvLyBUT0RPIGlkZWFsbHkgd2UgY291bGQgc2tpcCB0aGlzIGFsdG9nZXRoZXIsIGJ1dCBpdCBjYXVzZXMgdHlwZSBlcnJvcnNcblx0XHR2LFxuXHRcdHJlYWN0aW9uczogbnVsbCxcblx0XHRlcXVhbHMsXG5cdFx0dmVyc2lvbjogMFxuXHR9O1xuXG5cdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcpIHtcblx0XHRzaWduYWwuY3JlYXRlZCA9IHN0YWNrID8/IGdldF9zdGFjaygnQ3JlYXRlZEF0Jyk7XG5cdFx0c2lnbmFsLmRlYnVnID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBzaWduYWw7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdGUodikge1xuXHRyZXR1cm4gcHVzaF9kZXJpdmVkX3NvdXJjZShzb3VyY2UodikpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1Z9IGluaXRpYWxfdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbXV0YWJsZV1cbiAqIEByZXR1cm5zIHtTb3VyY2U8Vj59XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGFibGVfc291cmNlKGluaXRpYWxfdmFsdWUsIGltbXV0YWJsZSA9IGZhbHNlKSB7XG5cdGNvbnN0IHMgPSBzb3VyY2UoaW5pdGlhbF92YWx1ZSk7XG5cdGlmICghaW1tdXRhYmxlKSB7XG5cdFx0cy5lcXVhbHMgPSBzYWZlX2VxdWFscztcblx0fVxuXG5cdC8vIGJpbmQgdGhlIHNpZ25hbCB0byB0aGUgY29tcG9uZW50IGNvbnRleHQsIGluIGNhc2Ugd2UgbmVlZCB0b1xuXHQvLyB0cmFjayB1cGRhdGVzIHRvIHRyaWdnZXIgYmVmb3JlVXBkYXRlL2FmdGVyVXBkYXRlIGNhbGxiYWNrc1xuXHRpZiAobGVnYWN5X21vZGVfZmxhZyAmJiBjb21wb25lbnRfY29udGV4dCAhPT0gbnVsbCAmJiBjb21wb25lbnRfY29udGV4dC5sICE9PSBudWxsKSB7XG5cdFx0KGNvbXBvbmVudF9jb250ZXh0LmwucyA/Pz0gW10pLnB1c2gocyk7XG5cdH1cblxuXHRyZXR1cm4gcztcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtWfSB2XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW11dGFibGVdXG4gKiBAcmV0dXJucyB7U291cmNlPFY+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YWJsZV9zdGF0ZSh2LCBpbW11dGFibGUgPSBmYWxzZSkge1xuXHRyZXR1cm4gcHVzaF9kZXJpdmVkX3NvdXJjZShtdXRhYmxlX3NvdXJjZSh2LCBpbW11dGFibGUpKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTb3VyY2U8Vj59IHNvdXJjZVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmZ1bmN0aW9uIHB1c2hfZGVyaXZlZF9zb3VyY2Uoc291cmNlKSB7XG5cdGlmIChhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiYgKGFjdGl2ZV9yZWFjdGlvbi5mICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRpZiAoZGVyaXZlZF9zb3VyY2VzID09PSBudWxsKSB7XG5cdFx0XHRzZXRfZGVyaXZlZF9zb3VyY2VzKFtzb3VyY2VdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVyaXZlZF9zb3VyY2VzLnB1c2goc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc291cmNlO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1ZhbHVlPFY+fSBzb3VyY2VcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZShzb3VyY2UsIHZhbHVlKSB7XG5cdHNldChcblx0XHRzb3VyY2UsXG5cdFx0dW50cmFjaygoKSA9PiBnZXQoc291cmNlKSlcblx0KTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1NvdXJjZTxWPn0gc291cmNlXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChzb3VyY2UsIHZhbHVlKSB7XG5cdGlmIChcblx0XHRhY3RpdmVfcmVhY3Rpb24gIT09IG51bGwgJiZcblx0XHRpc19ydW5lcygpICYmXG5cdFx0KGFjdGl2ZV9yZWFjdGlvbi5mICYgKERFUklWRUQgfCBCTE9DS19FRkZFQ1QpKSAhPT0gMCAmJlxuXHRcdC8vIElmIHRoZSBzb3VyY2Ugd2FzIGNyZWF0ZWQgbG9jYWxseSB3aXRoaW4gdGhlIGN1cnJlbnQgZGVyaXZlZCwgdGhlblxuXHRcdC8vIHdlIGFsbG93IHRoZSBtdXRhdGlvbi5cblx0XHQoZGVyaXZlZF9zb3VyY2VzID09PSBudWxsIHx8ICFkZXJpdmVkX3NvdXJjZXMuaW5jbHVkZXMoc291cmNlKSlcblx0KSB7XG5cdFx0ZS5zdGF0ZV91bnNhZmVfbXV0YXRpb24oKTtcblx0fVxuXG5cdHJldHVybiBpbnRlcm5hbF9zZXQoc291cmNlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7U291cmNlPFY+fSBzb3VyY2VcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEByZXR1cm5zIHtWfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJuYWxfc2V0KHNvdXJjZSwgdmFsdWUpIHtcblx0aWYgKCFzb3VyY2UuZXF1YWxzKHZhbHVlKSkge1xuXHRcdHNvdXJjZS52ID0gdmFsdWU7XG5cdFx0c291cmNlLnZlcnNpb24gPSBpbmNyZW1lbnRfdmVyc2lvbigpO1xuXG5cdFx0aWYgKERFViAmJiB0cmFjaW5nX21vZGVfZmxhZykge1xuXHRcdFx0c291cmNlLnVwZGF0ZWQgPSBnZXRfc3RhY2soJ1VwZGF0ZWRBdCcpO1xuXHRcdH1cblxuXHRcdG1hcmtfcmVhY3Rpb25zKHNvdXJjZSwgRElSVFkpO1xuXG5cdFx0Ly8gSWYgdGhlIGN1cnJlbnQgc2lnbmFsIGlzIHJ1bm5pbmcgZm9yIHRoZSBmaXJzdCB0aW1lLCBpdCB3b24ndCBoYXZlIGFueVxuXHRcdC8vIHJlYWN0aW9ucyBhcyB3ZSBvbmx5IGFsbG9jYXRlIGFuZCBhc3NpZ24gdGhlIHJlYWN0aW9ucyBhZnRlciB0aGUgc2lnbmFsXG5cdFx0Ly8gaGFzIGZ1bGx5IGV4ZWN1dGVkLiBTbyBpbiB0aGUgY2FzZSBvZiBlbnN1cmluZyBpdCByZWdpc3RlcnMgdGhlIHJlYWN0aW9uXG5cdFx0Ly8gcHJvcGVybHkgZm9yIGl0c2VsZiwgd2UgbmVlZCB0byBlbnN1cmUgdGhlIGN1cnJlbnQgZWZmZWN0IGFjdHVhbGx5IGdldHNcblx0XHQvLyBzY2hlZHVsZWQuIGkuZTogYCRlZmZlY3QoKCkgPT4geCsrKWBcblx0XHRpZiAoXG5cdFx0XHRpc19ydW5lcygpICYmXG5cdFx0XHRhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmXG5cdFx0XHQoYWN0aXZlX2VmZmVjdC5mICYgQ0xFQU4pICE9PSAwICYmXG5cdFx0XHQoYWN0aXZlX2VmZmVjdC5mICYgQlJBTkNIX0VGRkVDVCkgPT09IDBcblx0XHQpIHtcblx0XHRcdGlmIChuZXdfZGVwcyAhPT0gbnVsbCAmJiBuZXdfZGVwcy5pbmNsdWRlcyhzb3VyY2UpKSB7XG5cdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKGFjdGl2ZV9lZmZlY3QsIERJUlRZKTtcblx0XHRcdFx0c2NoZWR1bGVfZWZmZWN0KGFjdGl2ZV9lZmZlY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHVudHJhY2tlZF93cml0ZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHRzZXRfdW50cmFja2VkX3dyaXRlcyhbc291cmNlXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dW50cmFja2VkX3dyaXRlcy5wdXNoKHNvdXJjZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoREVWICYmIGluc3BlY3RfZWZmZWN0cy5zaXplID4gMCkge1xuXHRcdFx0Y29uc3QgaW5zcGVjdHMgPSBBcnJheS5mcm9tKGluc3BlY3RfZWZmZWN0cyk7XG5cdFx0XHR2YXIgcHJldmlvdXNseV9mbHVzaGluZ19lZmZlY3QgPSBpc19mbHVzaGluZ19lZmZlY3Q7XG5cdFx0XHRzZXRfaXNfZmx1c2hpbmdfZWZmZWN0KHRydWUpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZmZlY3Qgb2YgaW5zcGVjdHMpIHtcblx0XHRcdFx0XHQvLyBNYXJrIGNsZWFuIGluc3BlY3QtZWZmZWN0cyBhcyBtYXliZSBkaXJ0eSBhbmQgdGhlbiBjaGVjayB0aGVpciBkaXJ0aW5lc3Ncblx0XHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGp1c3QgdXBkYXRpbmcgdGhlIGVmZmVjdHMgLSB0aGlzIHdheSB3ZSBhdm9pZCBvdmVyZmlyaW5nLlxuXHRcdFx0XHRcdGlmICgoZWZmZWN0LmYgJiBDTEVBTikgIT09IDApIHtcblx0XHRcdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgTUFZQkVfRElSVFkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKGVmZmVjdCkpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHNldF9pc19mbHVzaGluZ19lZmZlY3QocHJldmlvdXNseV9mbHVzaGluZ19lZmZlY3QpO1xuXHRcdFx0fVxuXHRcdFx0aW5zcGVjdF9lZmZlY3RzLmNsZWFyKCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VmFsdWV9IHNpZ25hbFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyBzaG91bGQgYmUgRElSVFkgb3IgTUFZQkVfRElSVFlcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBtYXJrX3JlYWN0aW9ucyhzaWduYWwsIHN0YXR1cykge1xuXHR2YXIgcmVhY3Rpb25zID0gc2lnbmFsLnJlYWN0aW9ucztcblx0aWYgKHJlYWN0aW9ucyA9PT0gbnVsbCkgcmV0dXJuO1xuXG5cdHZhciBydW5lcyA9IGlzX3J1bmVzKCk7XG5cdHZhciBsZW5ndGggPSByZWFjdGlvbnMubGVuZ3RoO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcmVhY3Rpb24gPSByZWFjdGlvbnNbaV07XG5cdFx0dmFyIGZsYWdzID0gcmVhY3Rpb24uZjtcblxuXHRcdC8vIFNraXAgYW55IGVmZmVjdHMgdGhhdCBhcmUgYWxyZWFkeSBkaXJ0eVxuXHRcdGlmICgoZmxhZ3MgJiBESVJUWSkgIT09IDApIGNvbnRpbnVlO1xuXG5cdFx0Ly8gSW4gbGVnYWN5IG1vZGUsIHNraXAgdGhlIGN1cnJlbnQgZWZmZWN0IHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHNcblx0XHRpZiAoIXJ1bmVzICYmIHJlYWN0aW9uID09PSBhY3RpdmVfZWZmZWN0KSBjb250aW51ZTtcblxuXHRcdC8vIEluc3BlY3QgZWZmZWN0cyBuZWVkIHRvIHJ1biBpbW1lZGlhdGVseSwgc28gdGhhdCB0aGUgc3RhY2sgdHJhY2UgbWFrZXMgc2Vuc2Vcblx0XHRpZiAoREVWICYmIChmbGFncyAmIElOU1BFQ1RfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0aW5zcGVjdF9lZmZlY3RzLmFkZChyZWFjdGlvbik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZXRfc2lnbmFsX3N0YXR1cyhyZWFjdGlvbiwgc3RhdHVzKTtcblxuXHRcdC8vIElmIHRoZSBzaWduYWwgYSkgd2FzIHByZXZpb3VzbHkgY2xlYW4gb3IgYikgaXMgYW4gdW5vd25lZCBkZXJpdmVkLCB0aGVuIG1hcmsgaXRcblx0XHRpZiAoKGZsYWdzICYgKENMRUFOIHwgVU5PV05FRCkpICE9PSAwKSB7XG5cdFx0XHRpZiAoKGZsYWdzICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRcdFx0bWFya19yZWFjdGlvbnMoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAocmVhY3Rpb24pLCBNQVlCRV9ESVJUWSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzY2hlZHVsZV9lZmZlY3QoLyoqIEB0eXBlIHtFZmZlY3R9ICovIChyZWFjdGlvbikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLyogVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBzY3JpcHRzL3Byb2Nlc3MtbWVzc2FnZXMvaW5kZXguanMuIERvIG5vdCBlZGl0ISAqL1xuXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcblxudmFyIGJvbGQgPSAnZm9udC13ZWlnaHQ6IGJvbGQnO1xudmFyIG5vcm1hbCA9ICdmb250LXdlaWdodDogbm9ybWFsJztcblxuLyoqXG4gKiBBc3NpZ25tZW50IHRvIGAlcHJvcGVydHklYCBwcm9wZXJ0eSAoJWxvY2F0aW9uJSkgd2lsbCBldmFsdWF0ZSB0byB0aGUgcmlnaHQtaGFuZCBzaWRlLCBub3QgdGhlIHZhbHVlIG9mIGAlcHJvcGVydHklYCBmb2xsb3dpbmcgdGhlIGFzc2lnbm1lbnQuIFRoaXMgbWF5IHJlc3VsdCBpbiB1bmV4cGVjdGVkIGJlaGF2aW91ci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25tZW50X3ZhbHVlX3N0YWxlKHByb3BlcnR5LCBsb2NhdGlvbikge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGFzc2lnbm1lbnRfdmFsdWVfc3RhbGVcXG4lY0Fzc2lnbm1lbnQgdG8gXFxgJHtwcm9wZXJ0eX1cXGAgcHJvcGVydHkgKCR7bG9jYXRpb259KSB3aWxsIGV2YWx1YXRlIHRvIHRoZSByaWdodC1oYW5kIHNpZGUsIG5vdCB0aGUgdmFsdWUgb2YgXFxgJHtwcm9wZXJ0eX1cXGAgZm9sbG93aW5nIHRoZSBhc3NpZ25tZW50LiBUaGlzIG1heSByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvdXIuXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvYXNzaWdubWVudF92YWx1ZV9zdGFsZWAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9hc3NpZ25tZW50X3ZhbHVlX3N0YWxlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBgJWJpbmRpbmclYCAoJWxvY2F0aW9uJSkgaXMgYmluZGluZyB0byBhIG5vbi1yZWFjdGl2ZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IGJpbmRpbmdcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gW2xvY2F0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmUoYmluZGluZywgbG9jYXRpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBiaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZVxcbiVjJHtsb2NhdGlvbiA/IGBcXGAke2JpbmRpbmd9XFxgICgke2xvY2F0aW9ufSkgaXMgYmluZGluZyB0byBhIG5vbi1yZWFjdGl2ZSBwcm9wZXJ0eWAgOiBgXFxgJHtiaW5kaW5nfVxcYCBpcyBiaW5kaW5nIHRvIGEgbm9uLXJlYWN0aXZlIHByb3BlcnR5YH1cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZWAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9iaW5kaW5nX3Byb3BlcnR5X25vbl9yZWFjdGl2ZWApO1xuXHR9XG59XG5cbi8qKlxuICogWW91ciBgY29uc29sZS4lbWV0aG9kJWAgY29udGFpbmVkIGAkc3RhdGVgIHByb3hpZXMuIENvbnNpZGVyIHVzaW5nIGAkaW5zcGVjdCguLi4pYCBvciBgJHN0YXRlLnNuYXBzaG90KC4uLilgIGluc3RlYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnNvbGVfbG9nX3N0YXRlKG1ldGhvZCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGNvbnNvbGVfbG9nX3N0YXRlXFxuJWNZb3VyIFxcYGNvbnNvbGUuJHttZXRob2R9XFxgIGNvbnRhaW5lZCBcXGAkc3RhdGVcXGAgcHJveGllcy4gQ29uc2lkZXIgdXNpbmcgXFxgJGluc3BlY3QoLi4uKVxcYCBvciBcXGAkc3RhdGUuc25hcHNob3QoLi4uKVxcYCBpbnN0ZWFkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29uc29sZV9sb2dfc3RhdGVgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvY29uc29sZV9sb2dfc3RhdGVgKTtcblx0fVxufVxuXG4vKipcbiAqICVoYW5kbGVyJSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gRGlkIHlvdSBtZWFuIHRvICVzdWdnZXN0aW9uJT9cbiAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VnZ2VzdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRfaGFuZGxlcl9pbnZhbGlkKGhhbmRsZXIsIHN1Z2dlc3Rpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBldmVudF9oYW5kbGVyX2ludmFsaWRcXG4lYyR7aGFuZGxlcn0gc2hvdWxkIGJlIGEgZnVuY3Rpb24uIERpZCB5b3UgbWVhbiB0byAke3N1Z2dlc3Rpb259P1xcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2V2ZW50X2hhbmRsZXJfaW52YWxpZGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9ldmVudF9oYW5kbGVyX2ludmFsaWRgKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSBgJWF0dHJpYnV0ZSVgIGF0dHJpYnV0ZSBvbiBgJWh0bWwlYCBjaGFuZ2VkIGl0cyB2YWx1ZSBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUsIGAldmFsdWUlYCwgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWQoYXR0cmlidXRlLCBodG1sLCB2YWx1ZSkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGh5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZFxcbiVjVGhlIFxcYCR7YXR0cmlidXRlfVxcYCBhdHRyaWJ1dGUgb24gXFxgJHtodG1sfVxcYCBjaGFuZ2VkIGl0cyB2YWx1ZSBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUsIFxcYCR7dmFsdWV9XFxgLCB3aWxsIGJlIGlnbm9yZWQgaW4gZmF2b3VyIG9mIHRoZSBzZXJ2ZXIgdmFsdWVcXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fYXR0cmlidXRlX2NoYW5nZWRgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2F0dHJpYnV0ZV9jaGFuZ2VkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgdmFsdWUgb2YgYW4gYHtAaHRtbCAuLi59YCBibG9jayAlbG9jYXRpb24lIGNoYW5nZWQgYmV0d2VlbiBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzLiBUaGUgY2xpZW50IHZhbHVlIHdpbGwgYmUgaWdub3JlZCBpbiBmYXZvdXIgb2YgdGhlIHNlcnZlciB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbbG9jYXRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRpb25faHRtbF9jaGFuZ2VkKGxvY2F0aW9uKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gaHlkcmF0aW9uX2h0bWxfY2hhbmdlZFxcbiVjJHtsb2NhdGlvbiA/IGBUaGUgdmFsdWUgb2YgYW4gXFxge0BodG1sIC4uLn1cXGAgYmxvY2sgJHtsb2NhdGlvbn0gY2hhbmdlZCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlYCA6IFwiVGhlIHZhbHVlIG9mIGFuIGB7QGh0bWwgLi4ufWAgYmxvY2sgY2hhbmdlZCBiZXR3ZWVuIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMuIFRoZSBjbGllbnQgdmFsdWUgd2lsbCBiZSBpZ25vcmVkIGluIGZhdm91ciBvZiB0aGUgc2VydmVyIHZhbHVlXCJ9XFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX2h0bWxfY2hhbmdlZGAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25faHRtbF9jaGFuZ2VkYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBIeWRyYXRpb24gZmFpbGVkIGJlY2F1c2UgdGhlIGluaXRpYWwgVUkgZG9lcyBub3QgbWF0Y2ggd2hhdCB3YXMgcmVuZGVyZWQgb24gdGhlIHNlcnZlci4gVGhlIGVycm9yIG9jY3VycmVkIG5lYXIgJWxvY2F0aW9uJVxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbbG9jYXRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRpb25fbWlzbWF0Y2gobG9jYXRpb24pIHtcblx0aWYgKERFVikge1xuXHRcdGNvbnNvbGUud2FybihgJWNbc3ZlbHRlXSBoeWRyYXRpb25fbWlzbWF0Y2hcXG4lYyR7bG9jYXRpb24gPyBgSHlkcmF0aW9uIGZhaWxlZCBiZWNhdXNlIHRoZSBpbml0aWFsIFVJIGRvZXMgbm90IG1hdGNoIHdoYXQgd2FzIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSBlcnJvciBvY2N1cnJlZCBuZWFyICR7bG9jYXRpb259YCA6IFwiSHlkcmF0aW9uIGZhaWxlZCBiZWNhdXNlIHRoZSBpbml0aWFsIFVJIGRvZXMgbm90IG1hdGNoIHdoYXQgd2FzIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcIn1cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9oeWRyYXRpb25fbWlzbWF0Y2hgLCBib2xkLCBub3JtYWwpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihgaHR0cHM6Ly9zdmVsdGUuZGV2L2UvaHlkcmF0aW9uX21pc21hdGNoYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgYHJlbmRlcmAgZnVuY3Rpb24gcGFzc2VkIHRvIGBjcmVhdGVSYXdTbmlwcGV0YCBzaG91bGQgcmV0dXJuIEhUTUwgZm9yIGEgc2luZ2xlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyKCkge1xuXHRpZiAoREVWKSB7XG5cdFx0Y29uc29sZS53YXJuKGAlY1tzdmVsdGVdIGludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyXFxuJWNUaGUgXFxgcmVuZGVyXFxgIGZ1bmN0aW9uIHBhc3NlZCB0byBcXGBjcmVhdGVSYXdTbmlwcGV0XFxgIHNob3VsZCByZXR1cm4gSFRNTCBmb3IgYSBzaW5nbGUgZWxlbWVudFxcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2ludmFsaWRfcmF3X3NuaXBwZXRfcmVuZGVyYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBEZXRlY3RlZCBhIG1pZ3JhdGVkIGAkOmAgcmVhY3RpdmUgYmxvY2sgaW4gYCVmaWxlbmFtZSVgIHRoYXQgYm90aCBhY2Nlc3NlcyBhbmQgdXBkYXRlcyB0aGUgc2FtZSByZWFjdGl2ZSB2YWx1ZS4gVGhpcyBtYXkgY2F1c2UgcmVjdXJzaXZlIHVwZGF0ZXMgd2hlbiBjb252ZXJ0ZWQgdG8gYW4gYCRlZmZlY3RgLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lfcmVjdXJzaXZlX3JlYWN0aXZlX2Jsb2NrKGZpbGVuYW1lKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9ja1xcbiVjRGV0ZWN0ZWQgYSBtaWdyYXRlZCBcXGAkOlxcYCByZWFjdGl2ZSBibG9jayBpbiBcXGAke2ZpbGVuYW1lfVxcYCB0aGF0IGJvdGggYWNjZXNzZXMgYW5kIHVwZGF0ZXMgdGhlIHNhbWUgcmVhY3RpdmUgdmFsdWUuIFRoaXMgbWF5IGNhdXNlIHJlY3Vyc2l2ZSB1cGRhdGVzIHdoZW4gY29udmVydGVkIHRvIGFuIFxcYCRlZmZlY3RcXGAuXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGVnYWN5X3JlY3Vyc2l2ZV9yZWFjdGl2ZV9ibG9ja2AsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9sZWdhY3lfcmVjdXJzaXZlX3JlYWN0aXZlX2Jsb2NrYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUcmllZCB0byB1bm1vdW50IGEgY29tcG9uZW50IHRoYXQgd2FzIG5vdCBtb3VudGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWZlY3ljbGVfZG91YmxlX3VubW91bnQoKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gbGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50XFxuJWNUcmllZCB0byB1bm1vdW50IGEgY29tcG9uZW50IHRoYXQgd2FzIG5vdCBtb3VudGVkXFxuaHR0cHM6Ly9zdmVsdGUuZGV2L2UvbGlmZWN5Y2xlX2RvdWJsZV91bm1vdW50YCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL2xpZmVjeWNsZV9kb3VibGVfdW5tb3VudGApO1xuXHR9XG59XG5cbi8qKlxuICogJXBhcmVudCUgcGFzc2VkIGEgdmFsdWUgdG8gJWNoaWxkJSB3aXRoIGBiaW5kOmAsIGJ1dCB0aGUgdmFsdWUgaXMgb3duZWQgYnkgJW93bmVyJS4gQ29uc2lkZXIgY3JlYXRpbmcgYSBiaW5kaW5nIGJldHdlZW4gJW93bmVyJSBhbmQgJXBhcmVudCVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGlsZFxuICogQHBhcmFtIHtzdHJpbmd9IG93bmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nKHBhcmVudCwgY2hpbGQsIG93bmVyKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gb3duZXJzaGlwX2ludmFsaWRfYmluZGluZ1xcbiVjJHtwYXJlbnR9IHBhc3NlZCBhIHZhbHVlIHRvICR7Y2hpbGR9IHdpdGggXFxgYmluZDpcXGAsIGJ1dCB0aGUgdmFsdWUgaXMgb3duZWQgYnkgJHtvd25lcn0uIENvbnNpZGVyIGNyZWF0aW5nIGEgYmluZGluZyBiZXR3ZWVuICR7b3duZXJ9IGFuZCAke3BhcmVudH1cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9iaW5kaW5nYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL293bmVyc2hpcF9pbnZhbGlkX2JpbmRpbmdgKTtcblx0fVxufVxuXG4vKipcbiAqICVjb21wb25lbnQlIG11dGF0ZWQgYSB2YWx1ZSBvd25lZCBieSAlb3duZXIlLiBUaGlzIGlzIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkLiBDb25zaWRlciBwYXNzaW5nIHZhbHVlcyB0byBjaGlsZCBjb21wb25lbnRzIHdpdGggYGJpbmQ6YCwgb3IgdXNlIGEgY2FsbGJhY2sgaW5zdGVhZFxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbY29tcG9uZW50XVxuICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsfSBbb3duZXJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbihjb21wb25lbnQsIG93bmVyKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gb3duZXJzaGlwX2ludmFsaWRfbXV0YXRpb25cXG4lYyR7Y29tcG9uZW50ID8gYCR7Y29tcG9uZW50fSBtdXRhdGVkIGEgdmFsdWUgb3duZWQgYnkgJHtvd25lcn0uIFRoaXMgaXMgc3Ryb25nbHkgZGlzY291cmFnZWQuIENvbnNpZGVyIHBhc3NpbmcgdmFsdWVzIHRvIGNoaWxkIGNvbXBvbmVudHMgd2l0aCBcXGBiaW5kOlxcYCwgb3IgdXNlIGEgY2FsbGJhY2sgaW5zdGVhZGAgOiBcIk11dGF0aW5nIGEgdmFsdWUgb3V0c2lkZSB0aGUgY29tcG9uZW50IHRoYXQgY3JlYXRlZCBpdCBpcyBzdHJvbmdseSBkaXNjb3VyYWdlZC4gQ29uc2lkZXIgcGFzc2luZyB2YWx1ZXMgdG8gY2hpbGQgY29tcG9uZW50cyB3aXRoIGBiaW5kOmAsIG9yIHVzZSBhIGNhbGxiYWNrIGluc3RlYWRcIn1cXG5odHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbmAsIGJvbGQsIG5vcm1hbCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKGBodHRwczovL3N2ZWx0ZS5kZXYvZS9vd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbmApO1xuXHR9XG59XG5cbi8qKlxuICogUmVhY3RpdmUgYCRzdGF0ZSguLi4pYCBwcm94aWVzIGFuZCB0aGUgdmFsdWVzIHRoZXkgcHJveHkgaGF2ZSBkaWZmZXJlbnQgaWRlbnRpdGllcy4gQmVjYXVzZSBvZiB0aGlzLCBjb21wYXJpc29ucyB3aXRoIGAlb3BlcmF0b3IlYCB3aWxsIHByb2R1Y2UgdW5leHBlY3RlZCByZXN1bHRzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3BlcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKG9wZXJhdG9yKSB7XG5cdGlmIChERVYpIHtcblx0XHRjb25zb2xlLndhcm4oYCVjW3N2ZWx0ZV0gc3RhdGVfcHJveHlfZXF1YWxpdHlfbWlzbWF0Y2hcXG4lY1JlYWN0aXZlIFxcYCRzdGF0ZSguLi4pXFxgIHByb3hpZXMgYW5kIHRoZSB2YWx1ZXMgdGhleSBwcm94eSBoYXZlIGRpZmZlcmVudCBpZGVudGl0aWVzLiBCZWNhdXNlIG9mIHRoaXMsIGNvbXBhcmlzb25zIHdpdGggXFxgJHtvcGVyYXRvcn1cXGAgd2lsbCBwcm9kdWNlIHVuZXhwZWN0ZWQgcmVzdWx0c1xcbmh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoYCwgYm9sZCwgbm9ybWFsKTtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oYGh0dHBzOi8vc3ZlbHRlLmRldi9lL3N0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoYCk7XG5cdH1cbn0iLCIvKiogQGltcG9ydCB7IFRlbXBsYXRlTm9kZSB9IGZyb20gJyNjbGllbnQnICovXG5cbmltcG9ydCB7XG5cdEhZRFJBVElPTl9FTkQsXG5cdEhZRFJBVElPTl9FUlJPUixcblx0SFlEUkFUSU9OX1NUQVJULFxuXHRIWURSQVRJT05fU1RBUlRfRUxTRVxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBnZXRfbmV4dF9zaWJsaW5nIH0gZnJvbSAnLi9vcGVyYXRpb25zLmpzJztcblxuLyoqXG4gKiBVc2UgdGhpcyB2YXJpYWJsZSB0byBndWFyZCBldmVyeXRoaW5nIHJlbGF0ZWQgdG8gaHlkcmF0aW9uIGNvZGUgc28gaXQgY2FuIGJlIHRyZWVzaGFrZW4gb3V0XG4gKiBpZiB0aGUgdXNlciBkb2Vzbid0IHVzZSB0aGUgYGh5ZHJhdGVgIG1ldGhvZCBhbmQgdGhlc2UgY29kZSBwYXRocyBhcmUgdGhlcmVmb3JlIG5vdCBuZWVkZWQuXG4gKi9cbmV4cG9ydCBsZXQgaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2h5ZHJhdGluZyh2YWx1ZSkge1xuXHRoeWRyYXRpbmcgPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGUgbm9kZSB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBoeWRyYXRlZC4gVGhpcyBzdGFydHMgb3V0IGFzIHRoZSBmaXJzdCBub2RlIGluc2lkZSB0aGUgb3BlbmluZ1xuICogPCEtLVstLT4gY29tbWVudCwgYW5kIHVwZGF0ZXMgZWFjaCB0aW1lIGEgY29tcG9uZW50IGNhbGxzIGAkLmNoaWxkKC4uLilgIG9yIGAkLnNpYmxpbmcoLi4uKWAuXG4gKiBXaGVuIGVudGVyaW5nIGEgYmxvY2sgKGUuZy4gYHsjaWYgLi4ufWApLCBgaHlkcmF0ZV9ub2RlYCBpcyB0aGUgYmxvY2sgb3BlbmluZyBjb21tZW50OyBieSB0aGVcbiAqIHRpbWUgd2UgbGVhdmUgdGhlIGJsb2NrIGl0IGlzIHRoZSBjbG9zaW5nIGNvbW1lbnQsIHdoaWNoIHNlcnZlcyBhcyB0aGUgYmxvY2sncyBhbmNob3IuXG4gKiBAdHlwZSB7VGVtcGxhdGVOb2RlfVxuICovXG5leHBvcnQgbGV0IGh5ZHJhdGVfbm9kZTtcblxuLyoqIEBwYXJhbSB7VGVtcGxhdGVOb2RlfSBub2RlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2h5ZHJhdGVfbm9kZShub2RlKSB7XG5cdGlmIChub2RlID09PSBudWxsKSB7XG5cdFx0dy5oeWRyYXRpb25fbWlzbWF0Y2goKTtcblx0XHR0aHJvdyBIWURSQVRJT05fRVJST1I7XG5cdH1cblxuXHRyZXR1cm4gKGh5ZHJhdGVfbm9kZSA9IG5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZV9uZXh0KCkge1xuXHRyZXR1cm4gc2V0X2h5ZHJhdGVfbm9kZSgvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcoaHlkcmF0ZV9ub2RlKSkpO1xufVxuXG4vKiogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IG5vZGUgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldChub2RlKSB7XG5cdGlmICghaHlkcmF0aW5nKSByZXR1cm47XG5cblx0Ly8gSWYgdGhlIG5vZGUgaGFzIHJlbWFpbmluZyBzaWJsaW5ncywgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nXG5cdGlmIChnZXRfbmV4dF9zaWJsaW5nKGh5ZHJhdGVfbm9kZSkgIT09IG51bGwpIHtcblx0XHR3Lmh5ZHJhdGlvbl9taXNtYXRjaCgpO1xuXHRcdHRocm93IEhZRFJBVElPTl9FUlJPUjtcblx0fVxuXG5cdGh5ZHJhdGVfbm9kZSA9IG5vZGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MVGVtcGxhdGVFbGVtZW50fSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZV90ZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUZW1wbGF0ZU5vZGUgZG9lc24ndCBpbmNsdWRlIERvY3VtZW50RnJhZ21lbnQsIGJ1dCBpdCdzIGFjdHVhbGx5IGZpbmVcblx0XHRoeWRyYXRlX25vZGUgPSB0ZW1wbGF0ZS5jb250ZW50O1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0KGNvdW50ID0gMSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0dmFyIGkgPSBjb3VudDtcblx0XHR2YXIgbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdG5vZGUgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcobm9kZSkpO1xuXHRcdH1cblxuXHRcdGh5ZHJhdGVfbm9kZSA9IG5vZGU7XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBub2RlcyBzdGFydGluZyBhdCBgaHlkcmF0ZV9ub2RlYCB1cCB1bnRpbCB0aGUgbmV4dCBoeWRyYXRpb24gZW5kIGNvbW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9ub2RlcygpIHtcblx0dmFyIGRlcHRoID0gMDtcblx0dmFyIG5vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuXHRcdFx0dmFyIGRhdGEgPSAvKiogQHR5cGUge0NvbW1lbnR9ICovIChub2RlKS5kYXRhO1xuXG5cdFx0XHRpZiAoZGF0YSA9PT0gSFlEUkFUSU9OX0VORCkge1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDApIHJldHVybiBub2RlO1xuXHRcdFx0XHRkZXB0aCAtPSAxO1xuXHRcdFx0fSBlbHNlIGlmIChkYXRhID09PSBIWURSQVRJT05fU1RBUlQgfHwgZGF0YSA9PT0gSFlEUkFUSU9OX1NUQVJUX0VMU0UpIHtcblx0XHRcdFx0ZGVwdGggKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgbmV4dCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhub2RlKSk7XG5cdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRub2RlID0gbmV4dDtcblx0fVxufVxuIiwiLyoqIEBpbXBvcnQgeyBQcm94eU1ldGFkYXRhIH0gZnJvbSAnI2NsaWVudCcgKi9cbi8qKiBAdHlwZWRlZiB7eyBmaWxlOiBzdHJpbmcsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIgfX0gTG9jYXRpb24gKi9cblxuaW1wb3J0IHsgU1RBVEVfU1lNQk9MX01FVEFEQVRBIH0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHJlbmRlcl9lZmZlY3QsIHVzZXJfcHJlX2VmZmVjdCB9IGZyb20gJy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gfSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGdldF9wcm90b3R5cGVfb2YgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBGSUxFTkFNRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5cbi8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgQXJyYXk8eyBzdGFydDogTG9jYXRpb24sIGVuZDogTG9jYXRpb24sIGNvbXBvbmVudDogRnVuY3Rpb24gfT4+fSAqL1xuY29uc3QgYm91bmRhcmllcyA9IHt9O1xuXG5jb25zdCBjaHJvbWVfcGF0dGVybiA9IC9hdCAoPzouKyBcXCgpPyguKyk6KFxcZCspOihcXGQrKVxcKT8kLztcbmNvbnN0IGZpcmVmb3hfcGF0dGVybiA9IC9AKC4rKTooXFxkKyk6KFxcZCspJC87XG5cbmZ1bmN0aW9uIGdldF9zdGFjaygpIHtcblx0Y29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcblx0aWYgKCFzdGFjaykgcmV0dXJuIG51bGw7XG5cblx0Y29uc3QgZW50cmllcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgbGluZSBvZiBzdGFjay5zcGxpdCgnXFxuJykpIHtcblx0XHRsZXQgbWF0Y2ggPSBjaHJvbWVfcGF0dGVybi5leGVjKGxpbmUpID8/IGZpcmVmb3hfcGF0dGVybi5leGVjKGxpbmUpO1xuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRlbnRyaWVzLnB1c2goe1xuXHRcdFx0XHRmaWxlOiBtYXRjaFsxXSxcblx0XHRcdFx0bGluZTogK21hdGNoWzJdLFxuXHRcdFx0XHRjb2x1bW46ICttYXRjaFszXVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVudHJpZXM7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGljaCBgLnN2ZWx0ZWAgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIGZvciBhIGdpdmVuIHN0YXRlIGNoYW5nZVxuICogQHJldHVybnMge0Z1bmN0aW9uIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9jb21wb25lbnQoKSB7XG5cdC8vIGZpcnN0IDQgbGluZXMgYXJlIHN2ZWx0ZSBpbnRlcm5hbHM7IGFkanVzdCB0aGlzIG51bWJlciBpZiB3ZSBjaGFuZ2UgdGhlIGludGVybmFsIGNhbGwgc3RhY2tcblx0Y29uc3Qgc3RhY2sgPSBnZXRfc3RhY2soKT8uc2xpY2UoNCk7XG5cdGlmICghc3RhY2spIHJldHVybiBudWxsO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBlbnRyeSA9IHN0YWNrW2ldO1xuXHRcdGNvbnN0IG1vZHVsZXMgPSBib3VuZGFyaWVzW2VudHJ5LmZpbGVdO1xuXHRcdGlmICghbW9kdWxlcykge1xuXHRcdFx0Ly8gSWYgdGhlIGZpcnN0IGVudHJ5IGlzIG5vdCBhIGNvbXBvbmVudCwgdGhhdCBtZWFucyB0aGUgbW9kaWZpY2F0aW9uIHZlcnkgbGlrZWx5IGhhcHBlbmVkXG5cdFx0XHQvLyB3aXRoaW4gYSAuc3ZlbHRlLmpzIGZpbGUsIHBvc3NpYmx5IHRyaWdnZXJlZCBieSBhIGNvbXBvbmVudC4gU2luY2UgdGhlc2UgZmlsZXMgYXJlIG5vdCBwYXJ0XG5cdFx0XHQvLyBvZiB0aGUgYm9uZGFyaWVzL2NvbXBvbmVudCBjb250ZXh0IGhldXJpc3RpYywgd2UgbmVlZCB0byBiYWlsIGluIHRoaXMgY2FzZSwgZWxzZSB3ZSB3b3VsZFxuXHRcdFx0Ly8gaGF2ZSBmYWxzZSBwb3NpdGl2ZXMgd2hlbiB0aGUgLnN2ZWx0ZS50cyBmaWxlIHByb3ZpZGVzIGEgc3RhdGUgY3JlYXRvciBmdW5jdGlvbiwgZW5jYXBzdWxhdGluZ1xuXHRcdFx0Ly8gdGhlIHN0YXRlIGFuZCBpdHMgbXV0YXRpb25zLCBhbmQgaXMgYmVpbmcgY2FsbGVkIGZyb20gYSBjb21wb25lbnQgb3RoZXIgdGhhbiB0aGUgb25lIHdob1xuXHRcdFx0Ly8gY2FsbGVkIHRoZSBzdGF0ZSBjcmVhdG9yIGZ1bmN0aW9uLlxuXHRcdFx0aWYgKGkgPT09IDApIHJldHVybiBudWxsO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuXHRcdFx0aWYgKG1vZHVsZS5lbmQgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuc3RhcnQubGluZSA8IGVudHJ5LmxpbmUgJiYgbW9kdWxlLmVuZC5saW5lID4gZW50cnkubGluZSkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmNvbXBvbmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IEFERF9PV05FUiA9IFN5bWJvbCgnQUREX09XTkVSJyk7XG5cbi8qKlxuICogVG9nZXRoZXIgd2l0aCBgbWFya19tb2R1bGVfZW5kYCwgdGhpcyBmdW5jdGlvbiBlc3RhYmxpc2hlcyB0aGUgYm91bmRhcmllcyBvZiBhIGAuc3ZlbHRlYCBmaWxlLFxuICogc3VjaCB0aGF0IHN1YnNlcXVlbnQgY2FsbHMgdG8gYGdldF9jb21wb25lbnRgIGNhbiB0ZWxsIHVzIHdoaWNoIGNvbXBvbmVudCBpcyByZXNwb25zaWJsZVxuICogZm9yIGEgZ2l2ZW4gc3RhdGUgY2hhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrX21vZHVsZV9zdGFydCgpIHtcblx0Y29uc3Qgc3RhcnQgPSBnZXRfc3RhY2soKT8uWzJdO1xuXG5cdGlmIChzdGFydCkge1xuXHRcdChib3VuZGFyaWVzW3N0YXJ0LmZpbGVdID8/PSBbXSkucHVzaCh7XG5cdFx0XHRzdGFydCxcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGVuZDogbnVsbCxcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Igd2UgYWRkIHRoZSBjb21wb25lbnQgYXQgdGhlIGVuZCwgc2luY2UgSE1SIHdpbGwgb3ZlcndyaXRlIHRoZSBmdW5jdGlvblxuXHRcdFx0Y29tcG9uZW50OiBudWxsXG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtfbW9kdWxlX2VuZChjb21wb25lbnQpIHtcblx0Y29uc3QgZW5kID0gZ2V0X3N0YWNrKCk/LlsyXTtcblxuXHRpZiAoZW5kKSB7XG5cdFx0Y29uc3QgYm91bmRhcmllc19maWxlID0gYm91bmRhcmllc1tlbmQuZmlsZV07XG5cdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzX2ZpbGVbYm91bmRhcmllc19maWxlLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ym91bmRhcnkuZW5kID0gZW5kO1xuXHRcdGJvdW5kYXJ5LmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmplY3RcbiAqIEBwYXJhbSB7YW55fSBvd25lclxuICogQHBhcmFtIHtib29sZWFufSBbZ2xvYmFsXVxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcF93YXJuaW5nXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX293bmVyKG9iamVjdCwgb3duZXIsIGdsb2JhbCA9IGZhbHNlLCBza2lwX3dhcm5pbmcgPSBmYWxzZSkge1xuXHRpZiAob2JqZWN0ICYmICFnbG9iYWwpIHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb247XG5cdFx0Y29uc3QgbWV0YWRhdGEgPSBvYmplY3RbU1RBVEVfU1lNQk9MX01FVEFEQVRBXTtcblx0XHRpZiAobWV0YWRhdGEgJiYgIWhhc19vd25lcihtZXRhZGF0YSwgY29tcG9uZW50KSkge1xuXHRcdFx0bGV0IG9yaWdpbmFsID0gZ2V0X293bmVyKG1ldGFkYXRhKTtcblxuXHRcdFx0aWYgKG93bmVyW0ZJTEVOQU1FXSAhPT0gY29tcG9uZW50W0ZJTEVOQU1FXSAmJiAhc2tpcF93YXJuaW5nKSB7XG5cdFx0XHRcdHcub3duZXJzaGlwX2ludmFsaWRfYmluZGluZyhjb21wb25lbnRbRklMRU5BTUVdLCBvd25lcltGSUxFTkFNRV0sIG9yaWdpbmFsW0ZJTEVOQU1FXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YWRkX293bmVyX3RvX29iamVjdChvYmplY3QsIG93bmVyLCBuZXcgU2V0KCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdW5rbm93bn0gZ2V0X29iamVjdFxuICogQHBhcmFtIHthbnl9IENvbXBvbmVudFxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcF93YXJuaW5nXVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX293bmVyX2VmZmVjdChnZXRfb2JqZWN0LCBDb21wb25lbnQsIHNraXBfd2FybmluZyA9IGZhbHNlKSB7XG5cdHVzZXJfcHJlX2VmZmVjdCgoKSA9PiB7XG5cdFx0YWRkX293bmVyKGdldF9vYmplY3QoKSwgQ29tcG9uZW50LCBmYWxzZSwgc2tpcF93YXJuaW5nKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhIHwgbnVsbH0gZnJvbVxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhfSB0b1xuICovXG5leHBvcnQgZnVuY3Rpb24gd2lkZW5fb3duZXJzaGlwKGZyb20sIHRvKSB7XG5cdGlmICh0by5vd25lcnMgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3aGlsZSAoZnJvbSkge1xuXHRcdGlmIChmcm9tLm93bmVycyA9PT0gbnVsbCkge1xuXHRcdFx0dG8ub3duZXJzID0gbnVsbDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qgb3duZXIgb2YgZnJvbS5vd25lcnMpIHtcblx0XHRcdHRvLm93bmVycy5hZGQob3duZXIpO1xuXHRcdH1cblxuXHRcdGZyb20gPSBmcm9tLnBhcmVudDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG93bmVyXG4gKiBAcGFyYW0ge1NldDxhbnk+fSBzZWVuXG4gKi9cbmZ1bmN0aW9uIGFkZF9vd25lcl90b19vYmplY3Qob2JqZWN0LCBvd25lciwgc2Vlbikge1xuXHRjb25zdCBtZXRhZGF0YSA9IC8qKiBAdHlwZSB7UHJveHlNZXRhZGF0YX0gKi8gKG9iamVjdD8uW1NUQVRFX1NZTUJPTF9NRVRBREFUQV0pO1xuXG5cdGlmIChtZXRhZGF0YSkge1xuXHRcdC8vIHRoaXMgaXMgYSBzdGF0ZSBwcm94eSwgYWRkIG93bmVyIGRpcmVjdGx5LCBpZiBub3QgZ2xvYmFsbHkgc2hhcmVkXG5cdFx0aWYgKCdvd25lcnMnIGluIG1ldGFkYXRhICYmIG1ldGFkYXRhLm93bmVycyAhPSBudWxsKSB7XG5cdFx0XHRtZXRhZGF0YS5vd25lcnMuYWRkKG93bmVyKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKHNlZW4uaGFzKG9iamVjdCkpIHJldHVybjtcblx0XHRzZWVuLmFkZChvYmplY3QpO1xuXHRcdGlmIChBRERfT1dORVIgaW4gb2JqZWN0ICYmIG9iamVjdFtBRERfT1dORVJdKSB7XG5cdFx0XHQvLyB0aGlzIGlzIGEgY2xhc3Mgd2l0aCBzdGF0ZSBmaWVsZHMuIHdlIHB1dCB0aGlzIGluIGEgcmVuZGVyIGVmZmVjdFxuXHRcdFx0Ly8gc28gdGhhdCBpZiBzdGF0ZSBpcyByZXBsYWNlZCAoZS5nLiBgaW5zdGFuY2UubmFtZSA9IHsgZmlyc3QsIGxhc3QgfWApXG5cdFx0XHQvLyB0aGUgbmV3IHN0YXRlIGlzIGFsc28gY28tb3duZWQgYnkgdGhlIGNhbGxlciBvZiBgZ2V0Q29udGV4dGBcblx0XHRcdHJlbmRlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdFx0XHRvYmplY3RbQUREX09XTkVSXShvd25lcik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHByb3RvID0gZ2V0X3Byb3RvdHlwZV9vZihvYmplY3QpO1xuXG5cdFx0XHRpZiAocHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpIHtcblx0XHRcdFx0Ly8gcmVjdXJzZSB1bnRpbCB3ZSBmaW5kIGEgc3RhdGUgcHJveHlcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdFx0YWRkX293bmVyX3RvX29iamVjdChvYmplY3Rba2V5XSwgb3duZXIsIHNlZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHByb3RvID09PSBBcnJheS5wcm90b3R5cGUpIHtcblx0XHRcdFx0Ly8gcmVjdXJzZSB1bnRpbCB3ZSBmaW5kIGEgc3RhdGUgcHJveHlcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRhZGRfb3duZXJfdG9fb2JqZWN0KG9iamVjdFtpXSwgb3duZXIsIHNlZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhfSBtZXRhZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzX293bmVyKG1ldGFkYXRhLCBjb21wb25lbnQpIHtcblx0aWYgKG1ldGFkYXRhLm93bmVycyA9PT0gbnVsbCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHRtZXRhZGF0YS5vd25lcnMuaGFzKGNvbXBvbmVudCkgfHxcblx0XHQobWV0YWRhdGEucGFyZW50ICE9PSBudWxsICYmIGhhc19vd25lcihtZXRhZGF0YS5wYXJlbnQsIGNvbXBvbmVudCkpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhfSBtZXRhZGF0YVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0X293bmVyKG1ldGFkYXRhKSB7XG5cdHJldHVybiAoXG5cdFx0bWV0YWRhdGE/Lm93bmVycz8udmFsdWVzKCkubmV4dCgpLnZhbHVlID8/XG5cdFx0Z2V0X293bmVyKC8qKiBAdHlwZSB7UHJveHlNZXRhZGF0YX0gKi8gKG1ldGFkYXRhLnBhcmVudCkpXG5cdCk7XG59XG5cbmxldCBza2lwID0gZmFsc2U7XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwX293bmVyc2hpcF92YWxpZGF0aW9uKGZuKSB7XG5cdHNraXAgPSB0cnVlO1xuXHRmbigpO1xuXHRza2lwID0gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhfSBtZXRhZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfb3duZXJzaGlwKG1ldGFkYXRhKSB7XG5cdGlmIChza2lwKSByZXR1cm47XG5cblx0Y29uc3QgY29tcG9uZW50ID0gZ2V0X2NvbXBvbmVudCgpO1xuXG5cdGlmIChjb21wb25lbnQgJiYgIWhhc19vd25lcihtZXRhZGF0YSwgY29tcG9uZW50KSkge1xuXHRcdGxldCBvcmlnaW5hbCA9IGdldF9vd25lcihtZXRhZGF0YSk7XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0aWYgKG9yaWdpbmFsW0ZJTEVOQU1FXSAhPT0gY29tcG9uZW50W0ZJTEVOQU1FXSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0dy5vd25lcnNoaXBfaW52YWxpZF9tdXRhdGlvbihjb21wb25lbnRbRklMRU5BTUVdLCBvcmlnaW5hbFtGSUxFTkFNRV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3Lm93bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uKCk7XG5cdFx0fVxuXHR9XG59XG4iLCIvKiogQGltcG9ydCB7IFByb3h5TWV0YWRhdGEsIFByb3h5U3RhdGVPYmplY3QsIFNvdXJjZSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGdldCwgY29tcG9uZW50X2NvbnRleHQsIGFjdGl2ZV9lZmZlY3QgfSBmcm9tICcuL3J1bnRpbWUuanMnO1xuaW1wb3J0IHtcblx0YXJyYXlfcHJvdG90eXBlLFxuXHRnZXRfZGVzY3JpcHRvcixcblx0Z2V0X3Byb3RvdHlwZV9vZixcblx0aXNfYXJyYXksXG5cdG9iamVjdF9wcm90b3R5cGVcbn0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IGNoZWNrX293bmVyc2hpcCwgd2lkZW5fb3duZXJzaGlwIH0gZnJvbSAnLi9kZXYvb3duZXJzaGlwLmpzJztcbmltcG9ydCB7IHNvdXJjZSwgc2V0IH0gZnJvbSAnLi9yZWFjdGl2aXR5L3NvdXJjZXMuanMnO1xuaW1wb3J0IHsgU1RBVEVfU1lNQk9MLCBTVEFURV9TWU1CT0xfTUVUQURBVEEgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBVTklOSVRJQUxJWkVEIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgZ2V0X3N0YWNrIH0gZnJvbSAnLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQgeyB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uL2ZsYWdzL2luZGV4LmpzJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSB2YWx1ZVxuICogQHBhcmFtIHtQcm94eU1ldGFkYXRhIHwgbnVsbH0gW3BhcmVudF1cbiAqIEBwYXJhbSB7U291cmNlPFQ+fSBbcHJldl0gZGV2IG1vZGUgb25seVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSh2YWx1ZSwgcGFyZW50ID0gbnVsbCwgcHJldikge1xuXHQvKiogQHR5cGUge0Vycm9yIHwgbnVsbH0gKi9cblx0dmFyIHN0YWNrID0gbnVsbDtcblx0aWYgKERFViAmJiB0cmFjaW5nX21vZGVfZmxhZykge1xuXHRcdHN0YWNrID0gZ2V0X3N0YWNrKCdDcmVhdGVkQXQnKTtcblx0fVxuXHQvLyBpZiBub24tcHJveHlhYmxlLCBvciBpcyBhbHJlYWR5IGEgcHJveHksIHJldHVybiBgdmFsdWVgXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IFNUQVRFX1NZTUJPTCBpbiB2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IGdldF9wcm90b3R5cGVfb2YodmFsdWUpO1xuXG5cdGlmIChwcm90b3R5cGUgIT09IG9iamVjdF9wcm90b3R5cGUgJiYgcHJvdG90eXBlICE9PSBhcnJheV9wcm90b3R5cGUpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHQvKiogQHR5cGUge01hcDxhbnksIFNvdXJjZTxhbnk+Pn0gKi9cblx0dmFyIHNvdXJjZXMgPSBuZXcgTWFwKCk7XG5cdHZhciBpc19wcm94aWVkX2FycmF5ID0gaXNfYXJyYXkodmFsdWUpO1xuXHR2YXIgdmVyc2lvbiA9IHNvdXJjZSgwKTtcblxuXHRpZiAoaXNfcHJveGllZF9hcnJheSkge1xuXHRcdC8vIFdlIG5lZWQgdG8gY3JlYXRlIHRoZSBsZW5ndGggc291cmNlIGVhZ2VybHkgdG8gZW5zdXJlIHRoYXRcblx0XHQvLyBtdXRhdGlvbnMgdG8gdGhlIGFycmF5IGFyZSBwcm9wZXJseSBzeW5jZWQgd2l0aCBvdXIgcHJveHlcblx0XHRzb3VyY2VzLnNldCgnbGVuZ3RoJywgc291cmNlKC8qKiBAdHlwZSB7YW55W119ICovICh2YWx1ZSkubGVuZ3RoLCBzdGFjaykpO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtQcm94eU1ldGFkYXRhfSAqL1xuXHR2YXIgbWV0YWRhdGE7XG5cblx0aWYgKERFVikge1xuXHRcdG1ldGFkYXRhID0ge1xuXHRcdFx0cGFyZW50LFxuXHRcdFx0b3duZXJzOiBudWxsXG5cdFx0fTtcblxuXHRcdGlmIChwcmV2KSB7XG5cdFx0XHQvLyBSZXVzZSBvd25lcnMgZnJvbSBwcmV2aW91cyBzdGF0ZTsgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhc3NpZ25tZW50IGlzIG5vdCBndWFyYW50ZWVkIHRvIGhhdmUgY29ycmVjdCBjb21wb25lbnQgY29udGV4dC5cblx0XHRcdC8vIElmIG5vIHByZXZpb3VzIHByb3h5IGV4aXN0cyB3ZSBwbGF5IGl0IHNhZmUgYW5kIGFzc3VtZSBvd25lcmxlc3Mgc3RhdGVcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGNvbnN0IHByZXZfb3duZXJzID0gcHJldi52Py5bU1RBVEVfU1lNQk9MX01FVEFEQVRBXT8ub3duZXJzO1xuXHRcdFx0bWV0YWRhdGEub3duZXJzID0gcHJldl9vd25lcnMgPyBuZXcgU2V0KHByZXZfb3duZXJzKSA6IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ldGFkYXRhLm93bmVycyA9XG5cdFx0XHRcdHBhcmVudCA9PT0gbnVsbFxuXHRcdFx0XHRcdD8gY29tcG9uZW50X2NvbnRleHQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gbmV3IFNldChbY29tcG9uZW50X2NvbnRleHQuZnVuY3Rpb25dKVxuXHRcdFx0XHRcdFx0OiBudWxsXG5cdFx0XHRcdFx0OiBuZXcgU2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm94eSgvKiogQHR5cGUge2FueX0gKi8gKHZhbHVlKSwge1xuXHRcdGRlZmluZVByb3BlcnR5KF8sIHByb3AsIGRlc2NyaXB0b3IpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0ISgndmFsdWUnIGluIGRlc2NyaXB0b3IpIHx8XG5cdFx0XHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID09PSBmYWxzZSB8fFxuXHRcdFx0XHRkZXNjcmlwdG9yLmVudW1lcmFibGUgPT09IGZhbHNlIHx8XG5cdFx0XHRcdGRlc2NyaXB0b3Iud3JpdGFibGUgPT09IGZhbHNlXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gd2UgZGlzYWxsb3cgbm9uLWJhc2ljIGRlc2NyaXB0b3JzLCBiZWNhdXNlIHVubGVzcyB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZVxuXHRcdFx0XHQvLyB0YXJnZXQgb2JqZWN0IOKAlCB3aGljaCB3ZSBhdm9pZCwgc28gdGhhdCBzdGF0ZSBjYW4gYmUgZm9ya2VkIOKAlCB3ZSB3aWxsIHJ1blxuXHRcdFx0XHQvLyBhZm91bCBvZiB0aGUgdmFyaW91cyBpbnZhcmlhbnRzXG5cdFx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5L1Byb3h5L2dldE93blByb3BlcnR5RGVzY3JpcHRvciNpbnZhcmlhbnRzXG5cdFx0XHRcdGUuc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRzID0gc291cmNlKGRlc2NyaXB0b3IudmFsdWUsIHN0YWNrKTtcblx0XHRcdFx0c291cmNlcy5zZXQocHJvcCwgcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXQocywgcHJveHkoZGVzY3JpcHRvci52YWx1ZSwgbWV0YWRhdGEpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCkge1xuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAocHJvcCBpbiB0YXJnZXQpIHtcblx0XHRcdFx0XHRzb3VyY2VzLnNldChwcm9wLCBzb3VyY2UoVU5JTklUSUFMSVpFRCwgc3RhY2spKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2hlbiB3b3JraW5nIHdpdGggYXJyYXlzLCB3ZSBuZWVkIHRvIGFsc28gZW5zdXJlIHdlIHVwZGF0ZSB0aGUgbGVuZ3RoIHdoZW4gcmVtb3Zpbmdcblx0XHRcdFx0Ly8gYW4gaW5kZXhlZCBwcm9wZXJ0eVxuXHRcdFx0XHRpZiAoaXNfcHJveGllZF9hcnJheSAmJiB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YXIgbHMgPSAvKiogQHR5cGUge1NvdXJjZTxudW1iZXI+fSAqLyAoc291cmNlcy5nZXQoJ2xlbmd0aCcpKTtcblx0XHRcdFx0XHR2YXIgbiA9IE51bWJlcihwcm9wKTtcblxuXHRcdFx0XHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKG4pICYmIG4gPCBscy52KSB7XG5cdFx0XHRcdFx0XHRzZXQobHMsIG4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzZXQocywgVU5JTklUSUFMSVpFRCk7XG5cdFx0XHRcdHVwZGF0ZV92ZXJzaW9uKHZlcnNpb24pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Z2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcblx0XHRcdGlmIChERVYgJiYgcHJvcCA9PT0gU1RBVEVfU1lNQk9MX01FVEFEQVRBKSB7XG5cdFx0XHRcdHJldHVybiBtZXRhZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByb3AgPT09IFNUQVRFX1NZTUJPTCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHR2YXIgZXhpc3RzID0gcHJvcCBpbiB0YXJnZXQ7XG5cblx0XHRcdC8vIGNyZWF0ZSBhIHNvdXJjZSwgYnV0IG9ubHkgaWYgaXQncyBhbiBvd24gcHJvcGVydHkgYW5kIG5vdCBhIHByb3RvdHlwZSBwcm9wZXJ0eVxuXHRcdFx0aWYgKHMgPT09IHVuZGVmaW5lZCAmJiAoIWV4aXN0cyB8fCBnZXRfZGVzY3JpcHRvcih0YXJnZXQsIHByb3ApPy53cml0YWJsZSkpIHtcblx0XHRcdFx0cyA9IHNvdXJjZShwcm94eShleGlzdHMgPyB0YXJnZXRbcHJvcF0gOiBVTklOSVRJQUxJWkVELCBtZXRhZGF0YSksIHN0YWNrKTtcblx0XHRcdFx0c291cmNlcy5zZXQocHJvcCwgcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIHYgPSBnZXQocyk7XG5cblx0XHRcdFx0Ly8gSW4gY2FzZSBvZiBzb21ldGhpbmcgbGlrZSBgZm9vID0gYmFyLm1hcCguLi4pYCwgZm9vIHdvdWxkIGhhdmUgb3duZXJzaGlwXG5cdFx0XHRcdC8vIG9mIHRoZSBhcnJheSBpdHNlbGYsIHdoaWxlIHRoZSBpbmRpdmlkdWFsIGl0ZW1zIHdvdWxkIGhhdmUgb3duZXJzaGlwXG5cdFx0XHRcdC8vIG9mIHRoZSBjb21wb25lbnQgdGhhdCBjcmVhdGVkIGJhci4gVGhhdCBtZWFucyBpZiB3ZSBsYXRlciBkbyBgZm9vWzBdLmJheiA9IDQyYCxcblx0XHRcdFx0Ly8gd2UgY291bGQgZ2V0IGEgZmFsc2UtcG9zaXRpdmUgb3duZXJzaGlwIHZpb2xhdGlvbiwgc2luY2UgdGhlIHR3byBwcm94aWVzXG5cdFx0XHRcdC8vIGFyZSBub3QgY29ubmVjdGVkIHRvIGVhY2ggb3RoZXIgdmlhIHRoZSBwYXJlbnQgbWV0YWRhdGEgcmVsYXRpb25zaGlwLlxuXHRcdFx0XHQvLyBGb3IgdGhpcyByZWFzb24sIHdlIG5lZWQgdG8gd2lkZW4gdGhlIG93bmVyc2hpcCBvZiB0aGUgY2hpbGRyZW5cblx0XHRcdFx0Ly8gdXBvbiBhY2Nlc3Mgd2hlbiB3ZSBkZXRlY3QgdGhleSBhcmUgbm90IGNvbm5lY3RlZC5cblx0XHRcdFx0aWYgKERFVikge1xuXHRcdFx0XHRcdC8qKiBAdHlwZSB7UHJveHlNZXRhZGF0YSB8IHVuZGVmaW5lZH0gKi9cblx0XHRcdFx0XHR2YXIgcHJvcF9tZXRhZGF0YSA9IHY/LltTVEFURV9TWU1CT0xfTUVUQURBVEFdO1xuXHRcdFx0XHRcdGlmIChwcm9wX21ldGFkYXRhICYmIHByb3BfbWV0YWRhdGE/LnBhcmVudCAhPT0gbWV0YWRhdGEpIHtcblx0XHRcdFx0XHRcdHdpZGVuX293bmVyc2hpcChtZXRhZGF0YSwgcHJvcF9tZXRhZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHYgPT09IFVOSU5JVElBTElaRUQgPyB1bmRlZmluZWQgOiB2O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG5cdFx0fSxcblxuXHRcdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApIHtcblx0XHRcdHZhciBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcblxuXHRcdFx0aWYgKGRlc2NyaXB0b3IgJiYgJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHRcdGlmIChzKSBkZXNjcmlwdG9yLnZhbHVlID0gZ2V0KHMpO1xuXHRcdFx0fSBlbHNlIGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSA9IHNvdXJjZXMuZ2V0KHByb3ApO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBzb3VyY2U/LnY7XG5cblx0XHRcdFx0aWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBVTklOSVRJQUxJWkVEKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGVzY3JpcHRvcjtcblx0XHR9LFxuXG5cdFx0aGFzKHRhcmdldCwgcHJvcCkge1xuXHRcdFx0aWYgKERFViAmJiBwcm9wID09PSBTVEFURV9TWU1CT0xfTUVUQURBVEEpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcm9wID09PSBTVEFURV9TWU1CT0wpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gc291cmNlcy5nZXQocHJvcCk7XG5cdFx0XHR2YXIgaGFzID0gKHMgIT09IHVuZGVmaW5lZCAmJiBzLnYgIT09IFVOSU5JVElBTElaRUQpIHx8IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0cyAhPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdChhY3RpdmVfZWZmZWN0ICE9PSBudWxsICYmICghaGFzIHx8IGdldF9kZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk/LndyaXRhYmxlKSlcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cyA9IHNvdXJjZShoYXMgPyBwcm94eSh0YXJnZXRbcHJvcF0sIG1ldGFkYXRhKSA6IFVOSU5JVElBTElaRUQsIHN0YWNrKTtcblx0XHRcdFx0XHRzb3VyY2VzLnNldChwcm9wLCBzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZSA9IGdldChzKTtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBVTklOSVRJQUxJWkVEKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBoYXM7XG5cdFx0fSxcblxuXHRcdHNldCh0YXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuXHRcdFx0dmFyIHMgPSBzb3VyY2VzLmdldChwcm9wKTtcblx0XHRcdHZhciBoYXMgPSBwcm9wIGluIHRhcmdldDtcblxuXHRcdFx0Ly8gdmFyaWFibGUubGVuZ3RoID0gdmFsdWUgLT4gY2xlYXIgYWxsIHNpZ25hbHMgd2l0aCBpbmRleCA+PSB2YWx1ZVxuXHRcdFx0aWYgKGlzX3Byb3hpZWRfYXJyYXkgJiYgcHJvcCA9PT0gJ2xlbmd0aCcpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHZhbHVlOyBpIDwgLyoqIEB0eXBlIHtTb3VyY2U8bnVtYmVyPn0gKi8gKHMpLnY7IGkgKz0gMSkge1xuXHRcdFx0XHRcdHZhciBvdGhlcl9zID0gc291cmNlcy5nZXQoaSArICcnKTtcblx0XHRcdFx0XHRpZiAob3RoZXJfcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRzZXQob3RoZXJfcywgVU5JTklUSUFMSVpFRCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpIGluIHRhcmdldCkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGl0ZW0gZXhpc3RzIGluIHRoZSBvcmlnaW5hbCwgd2UgbmVlZCB0byBjcmVhdGUgYSB1bmluaXRpYWxpemVkIHNvdXJjZSxcblx0XHRcdFx0XHRcdC8vIGVsc2UgYSBsYXRlciByZWFkIG9mIHRoZSBwcm9wZXJ0eSB3b3VsZCByZXN1bHQgaW4gYSBzb3VyY2UgYmVpbmcgY3JlYXRlZCB3aXRoXG5cdFx0XHRcdFx0XHQvLyB0aGUgdmFsdWUgb2YgdGhlIG9yaWdpbmFsIGl0ZW0gYXQgdGhhdCBpbmRleC5cblx0XHRcdFx0XHRcdG90aGVyX3MgPSBzb3VyY2UoVU5JTklUSUFMSVpFRCwgc3RhY2spO1xuXHRcdFx0XHRcdFx0c291cmNlcy5zZXQoaSArICcnLCBvdGhlcl9zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZW4ndCB5ZXQgY3JlYXRlZCBhIHNvdXJjZSBmb3IgdGhpcyBwcm9wZXJ0eSwgd2UgbmVlZCB0byBlbnN1cmVcblx0XHRcdC8vIHdlIGRvIHNvIG90aGVyd2lzZSBpZiB3ZSByZWFkIGl0IGxhdGVyLCB0aGVuIHRoZSB3cml0ZSB3b24ndCBiZSB0cmFja2VkIGFuZFxuXHRcdFx0Ly8gdGhlIGhldXJpc3RpY3Mgb2YgZWZmZWN0cyB3aWxsIGJlIGRpZmZlcmVudCB2cyBpZiB3ZSBoYWQgcmVhZCB0aGUgcHJveGllZFxuXHRcdFx0Ly8gb2JqZWN0IHByb3BlcnR5IGJlZm9yZSB3cml0aW5nIHRvIHRoYXQgcHJvcGVydHkuXG5cdFx0XHRpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmICghaGFzIHx8IGdldF9kZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk/LndyaXRhYmxlKSB7XG5cdFx0XHRcdFx0cyA9IHNvdXJjZSh1bmRlZmluZWQsIHN0YWNrKTtcblx0XHRcdFx0XHRzZXQocywgcHJveHkodmFsdWUsIG1ldGFkYXRhKSk7XG5cdFx0XHRcdFx0c291cmNlcy5zZXQocHJvcCwgcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhcyA9IHMudiAhPT0gVU5JTklUSUFMSVpFRDtcblx0XHRcdFx0c2V0KHMsIHByb3h5KHZhbHVlLCBtZXRhZGF0YSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoREVWKSB7XG5cdFx0XHRcdC8qKiBAdHlwZSB7UHJveHlNZXRhZGF0YSB8IHVuZGVmaW5lZH0gKi9cblx0XHRcdFx0dmFyIHByb3BfbWV0YWRhdGEgPSB2YWx1ZT8uW1NUQVRFX1NZTUJPTF9NRVRBREFUQV07XG5cdFx0XHRcdGlmIChwcm9wX21ldGFkYXRhICYmIHByb3BfbWV0YWRhdGE/LnBhcmVudCAhPT0gbWV0YWRhdGEpIHtcblx0XHRcdFx0XHR3aWRlbl9vd25lcnNoaXAobWV0YWRhdGEsIHByb3BfbWV0YWRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrX293bmVyc2hpcChtZXRhZGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXcgdmFsdWUgYmVmb3JlIHVwZGF0aW5nIGFueSBzaWduYWxzIHNvIHRoYXQgYW55IGxpc3RlbmVycyBnZXQgdGhlIG5ldyB2YWx1ZVxuXHRcdFx0aWYgKGRlc2NyaXB0b3I/LnNldCkge1xuXHRcdFx0XHRkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaGFzKSB7XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgbXV0YXRlZCBhbiBhcnJheSBkaXJlY3RseSwgd2UgbWlnaHQgbmVlZCB0b1xuXHRcdFx0XHQvLyBzaWduYWwgdGhhdCBsZW5ndGggaGFzIGFsc28gY2hhbmdlZC4gRG8gaXQgYmVmb3JlIHVwZGF0aW5nIG1ldGFkYXRhXG5cdFx0XHRcdC8vIHRvIGVuc3VyZSB0aGF0IGl0ZXJhdGluZyBvdmVyIHRoZSBhcnJheSBhcyBhIHJlc3VsdCBvZiBhIG1ldGFkYXRhIHVwZGF0ZVxuXHRcdFx0XHQvLyB3aWxsIG5vdCBjYXVzZSB0aGUgbGVuZ3RoIHRvIGJlIG91dCBvZiBzeW5jLlxuXHRcdFx0XHRpZiAoaXNfcHJveGllZF9hcnJheSAmJiB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YXIgbHMgPSAvKiogQHR5cGUge1NvdXJjZTxudW1iZXI+fSAqLyAoc291cmNlcy5nZXQoJ2xlbmd0aCcpKTtcblx0XHRcdFx0XHR2YXIgbiA9IE51bWJlcihwcm9wKTtcblxuXHRcdFx0XHRcdGlmIChOdW1iZXIuaXNJbnRlZ2VyKG4pICYmIG4gPj0gbHMudikge1xuXHRcdFx0XHRcdFx0c2V0KGxzLCBuICsgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dXBkYXRlX3ZlcnNpb24odmVyc2lvbik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRvd25LZXlzKHRhcmdldCkge1xuXHRcdFx0Z2V0KHZlcnNpb24pO1xuXG5cdFx0XHR2YXIgb3duX2tleXMgPSBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5maWx0ZXIoKGtleSkgPT4ge1xuXHRcdFx0XHR2YXIgc291cmNlID0gc291cmNlcy5nZXQoa2V5KTtcblx0XHRcdFx0cmV0dXJuIHNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IHNvdXJjZS52ICE9PSBVTklOSVRJQUxJWkVEO1xuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAodmFyIFtrZXksIHNvdXJjZV0gb2Ygc291cmNlcykge1xuXHRcdFx0XHRpZiAoc291cmNlLnYgIT09IFVOSU5JVElBTElaRUQgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuXHRcdFx0XHRcdG93bl9rZXlzLnB1c2goa2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3duX2tleXM7XG5cdFx0fSxcblxuXHRcdHNldFByb3RvdHlwZU9mKCkge1xuXHRcdFx0ZS5zdGF0ZV9wcm90b3R5cGVfZml4ZWQoKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U291cmNlPG51bWJlcj59IHNpZ25hbFxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICovXG5mdW5jdGlvbiB1cGRhdGVfdmVyc2lvbihzaWduYWwsIGQgPSAxKSB7XG5cdHNldChzaWduYWwsIHNpZ25hbC52ICsgZCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRfcHJveGllZF92YWx1ZSh2YWx1ZSkge1xuXHRpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBTVEFURV9TWU1CT0wgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWVbU1RBVEVfU1lNQk9MXTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gYVxuICogQHBhcmFtIHthbnl9IGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKGEsIGIpIHtcblx0cmV0dXJuIE9iamVjdC5pcyhnZXRfcHJveGllZF92YWx1ZShhKSwgZ2V0X3Byb3hpZWRfdmFsdWUoYikpO1xufVxuIiwiaW1wb3J0ICogYXMgdyBmcm9tICcuLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBnZXRfcHJveGllZF92YWx1ZSB9IGZyb20gJy4uL3Byb3h5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfYXJyYXlfcHJvdG90eXBlX3dhcm5pbmdzKCkge1xuXHRjb25zdCBhcnJheV9wcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cdC8vIFRoZSBSRVBMIGVuZHMgdXAgaGVyZSBvdmVyIGFuZCBvdmVyLCBhbmQgdGhpcyBwcmV2ZW50cyBpdCBmcm9tIGFkZGluZyBtb3JlIGFuZCBtb3JlIHBhdGNoZXNcblx0Ly8gb2YgdGhlIHNhbWUga2luZCB0byB0aGUgcHJvdG90eXBlLCB3aGljaCB3b3VsZCBzbG93IGRvd24gZXZlcnl0aGluZyBvdmVyIHRpbWUuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0Y29uc3QgY2xlYW51cCA9IEFycmF5Ll9fc3ZlbHRlX2NsZWFudXA7XG5cdGlmIChjbGVhbnVwKSB7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y29uc3QgeyBpbmRleE9mLCBsYXN0SW5kZXhPZiwgaW5jbHVkZXMgfSA9IGFycmF5X3Byb3RvdHlwZTtcblxuXHRhcnJheV9wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtLCBmcm9tX2luZGV4KSB7XG5cdFx0Y29uc3QgaW5kZXggPSBpbmRleE9mLmNhbGwodGhpcywgaXRlbSwgZnJvbV9pbmRleCk7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gZnJvbV9pbmRleCA/PyAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5pbmRleE9mKC4uLiknKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleDtcblx0fTtcblxuXHRhcnJheV9wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSwgZnJvbV9pbmRleCkge1xuXHRcdC8vIHdlIG5lZWQgdG8gc3BlY2lmeSB0aGlzLmxlbmd0aCAtIDEgYmVjYXVzZSBpdCdzIHByb2JhYmx5IHVzaW5nIHNvbWV0aGluZyBsaWtlXG5cdFx0Ly8gYGFyZ3VtZW50c2AgaW5zaWRlIHNvIHBhc3NpbmcgdW5kZWZpbmVkIGlzIGRpZmZlcmVudCBmcm9tIG5vdCBwYXNzaW5nIGFueXRoaW5nXG5cdFx0Y29uc3QgaW5kZXggPSBsYXN0SW5kZXhPZi5jYWxsKHRoaXMsIGl0ZW0sIGZyb21faW5kZXggPz8gdGhpcy5sZW5ndGggLSAxKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IChmcm9tX2luZGV4ID8/IHRoaXMubGVuZ3RoIC0gMSk7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5sYXN0SW5kZXhPZiguLi4pJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0YXJyYXlfcHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gKGl0ZW0sIGZyb21faW5kZXgpIHtcblx0XHRjb25zdCBoYXMgPSBpbmNsdWRlcy5jYWxsKHRoaXMsIGl0ZW0sIGZyb21faW5kZXgpO1xuXG5cdFx0aWYgKCFoYXMpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoZ2V0X3Byb3hpZWRfdmFsdWUodGhpc1tpXSkgPT09IGl0ZW0pIHtcblx0XHRcdFx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKCdhcnJheS5pbmNsdWRlcyguLi4pJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaGFzO1xuXHR9O1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0QXJyYXkuX19zdmVsdGVfY2xlYW51cCA9ICgpID0+IHtcblx0XHRhcnJheV9wcm90b3R5cGUuaW5kZXhPZiA9IGluZGV4T2Y7XG5cdFx0YXJyYXlfcHJvdG90eXBlLmxhc3RJbmRleE9mID0gbGFzdEluZGV4T2Y7XG5cdFx0YXJyYXlfcHJvdG90eXBlLmluY2x1ZGVzID0gaW5jbHVkZXM7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGFcbiAqIEBwYXJhbSB7YW55fSBiXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVxdWFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmljdF9lcXVhbHMoYSwgYiwgZXF1YWwgPSB0cnVlKSB7XG5cdC8vIHRyeS1jYXRjaCBuZWVkZWQgYmVjYXVzZSB0aGlzIHRyaWVzIHRvIHJlYWQgcHJvcGVydGllcyBvZiBgYWAgYW5kIGBiYCxcblx0Ly8gd2hpY2ggY291bGQgYmUgZGlzYWxsb3dlZCBmb3IgZXhhbXBsZSBpbiBhIHNlY3VyZSBjb250ZXh0XG5cdHRyeSB7XG5cdFx0aWYgKChhID09PSBiKSAhPT0gKGdldF9wcm94aWVkX3ZhbHVlKGEpID09PSBnZXRfcHJveGllZF92YWx1ZShiKSkpIHtcblx0XHRcdHcuc3RhdGVfcHJveHlfZXF1YWxpdHlfbWlzbWF0Y2goZXF1YWwgPyAnPT09JyA6ICchPT0nKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRyZXR1cm4gKGEgPT09IGIpID09PSBlcXVhbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gYVxuICogQHBhcmFtIHthbnl9IGJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXF1YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIsIGVxdWFsID0gdHJ1ZSkge1xuXHRpZiAoKGEgPT0gYikgIT09IChnZXRfcHJveGllZF92YWx1ZShhKSA9PSBnZXRfcHJveGllZF92YWx1ZShiKSkpIHtcblx0XHR3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoKGVxdWFsID8gJz09JyA6ICchPScpO1xuXHR9XG5cblx0cmV0dXJuIChhID09IGIpID09PSBlcXVhbDtcbn1cbiIsIi8qKiBAaW1wb3J0IHsgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IGh5ZHJhdGVfbm9kZSwgaHlkcmF0aW5nLCBzZXRfaHlkcmF0ZV9ub2RlIH0gZnJvbSAnLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBpbml0X2FycmF5X3Byb3RvdHlwZV93YXJuaW5ncyB9IGZyb20gJy4uL2Rldi9lcXVhbGl0eS5qcyc7XG5pbXBvcnQgeyBnZXRfZGVzY3JpcHRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5cbi8vIGV4cG9ydCB0aGVzZSBmb3IgcmVmZXJlbmNlIGluIHRoZSBjb21waWxlZCBjb2RlLCBtYWtpbmcgZ2xvYmFsIG5hbWUgZGVkdXBsaWNhdGlvbiB1bm5lY2Vzc2FyeVxuLyoqIEB0eXBlIHtXaW5kb3d9ICovXG5leHBvcnQgdmFyICR3aW5kb3c7XG5cbi8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG5leHBvcnQgdmFyICRkb2N1bWVudDtcblxuLyoqIEB0eXBlIHsoKSA9PiBOb2RlIHwgbnVsbH0gKi9cbnZhciBmaXJzdF9jaGlsZF9nZXR0ZXI7XG4vKiogQHR5cGUgeygpID0+IE5vZGUgfCBudWxsfSAqL1xudmFyIG5leHRfc2libGluZ19nZXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGVzZSBsYXppbHkgdG8gYXZvaWQgaXNzdWVzIHdoZW4gdXNpbmcgdGhlIHJ1bnRpbWUgaW4gYSBzZXJ2ZXIgY29udGV4dFxuICogd2hlcmUgdGhlc2UgZ2xvYmFscyBhcmUgbm90IGF2YWlsYWJsZSB3aGlsZSBhdm9pZGluZyBhIHNlcGFyYXRlIHNlcnZlciBlbnRyeSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9vcGVyYXRpb25zKCkge1xuXHRpZiAoJHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JHdpbmRvdyA9IHdpbmRvdztcblx0JGRvY3VtZW50ID0gZG9jdW1lbnQ7XG5cblx0dmFyIGVsZW1lbnRfcHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cdHZhciBub2RlX3Byb3RvdHlwZSA9IE5vZGUucHJvdG90eXBlO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0Zmlyc3RfY2hpbGRfZ2V0dGVyID0gZ2V0X2Rlc2NyaXB0b3Iobm9kZV9wcm90b3R5cGUsICdmaXJzdENoaWxkJykuZ2V0O1xuXHQvLyBAdHMtaWdub3JlXG5cdG5leHRfc2libGluZ19nZXR0ZXIgPSBnZXRfZGVzY3JpcHRvcihub2RlX3Byb3RvdHlwZSwgJ25leHRTaWJsaW5nJykuZ2V0O1xuXG5cdC8vIHRoZSBmb2xsb3dpbmcgYXNzaWdubWVudHMgaW1wcm92ZSBwZXJmIG9mIGxvb2t1cHMgb24gRE9NIG5vZGVzXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0ZWxlbWVudF9wcm90b3R5cGUuX19jbGljayA9IHVuZGVmaW5lZDtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRlbGVtZW50X3Byb3RvdHlwZS5fX2NsYXNzTmFtZSA9ICcnO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGVsZW1lbnRfcHJvdG90eXBlLl9fYXR0cmlidXRlcyA9IG51bGw7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0ZWxlbWVudF9wcm90b3R5cGUuX19zdHlsZXMgPSBudWxsO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGVsZW1lbnRfcHJvdG90eXBlLl9fZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFRleHQucHJvdG90eXBlLl9fdCA9IHVuZGVmaW5lZDtcblxuXHRpZiAoREVWKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGVsZW1lbnRfcHJvdG90eXBlLl9fc3ZlbHRlX21ldGEgPSBudWxsO1xuXG5cdFx0aW5pdF9hcnJheV9wcm90b3R5cGVfd2FybmluZ3MoKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1RleHR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfdGV4dCh2YWx1ZSA9ICcnKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtOb2RlfSBOXG4gKiBAcGFyYW0ge059IG5vZGVcbiAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAqL1xuLypAX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gZ2V0X2ZpcnN0X2NoaWxkKG5vZGUpIHtcblx0cmV0dXJuIGZpcnN0X2NoaWxkX2dldHRlci5jYWxsKG5vZGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gTlxuICogQHBhcmFtIHtOfSBub2RlXG4gKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gKi9cbi8qQF9fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldF9uZXh0X3NpYmxpbmcobm9kZSkge1xuXHRyZXR1cm4gbmV4dF9zaWJsaW5nX2dldHRlci5jYWxsKG5vZGUpO1xufVxuXG4vKipcbiAqIERvbid0IG1hcmsgdGhpcyBhcyBzaWRlLWVmZmVjdC1mcmVlLCBoeWRyYXRpb24gbmVlZHMgdG8gd2FsayBhbGwgbm9kZXNcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gTlxuICogQHBhcmFtIHtOfSBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX3RleHRcbiAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkKG5vZGUsIGlzX3RleHQpIHtcblx0aWYgKCFoeWRyYXRpbmcpIHtcblx0XHRyZXR1cm4gZ2V0X2ZpcnN0X2NoaWxkKG5vZGUpO1xuXHR9XG5cblx0dmFyIGNoaWxkID0gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQoaHlkcmF0ZV9ub2RlKSk7XG5cblx0Ly8gQ2hpbGQgY2FuIGJlIG51bGwgaWYgd2UgaGF2ZSBhbiBlbGVtZW50IHdpdGggYSBzaW5nbGUgY2hpbGQsIGxpa2UgYDxwPnt0ZXh0fTwvcD5gLCB3aGVyZSBgdGV4dGAgaXMgZW1wdHlcblx0aWYgKGNoaWxkID09PSBudWxsKSB7XG5cdFx0Y2hpbGQgPSBoeWRyYXRlX25vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlX3RleHQoKSk7XG5cdH0gZWxzZSBpZiAoaXNfdGV4dCAmJiBjaGlsZC5ub2RlVHlwZSAhPT0gMykge1xuXHRcdHZhciB0ZXh0ID0gY3JlYXRlX3RleHQoKTtcblx0XHRjaGlsZD8uYmVmb3JlKHRleHQpO1xuXHRcdHNldF9oeWRyYXRlX25vZGUodGV4dCk7XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH1cblxuXHRzZXRfaHlkcmF0ZV9ub2RlKGNoaWxkKTtcblx0cmV0dXJuIGNoaWxkO1xufVxuXG4vKipcbiAqIERvbid0IG1hcmsgdGhpcyBhcyBzaWRlLWVmZmVjdC1mcmVlLCBoeWRyYXRpb24gbmVlZHMgdG8gd2FsayBhbGwgbm9kZXNcbiAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudCB8IFRlbXBsYXRlTm9kZVtdfSBmcmFnbWVudFxuICogQHBhcmFtIHtib29sZWFufSBpc190ZXh0XG4gKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdF9jaGlsZChmcmFnbWVudCwgaXNfdGV4dCkge1xuXHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdC8vIHdoZW4gbm90IGh5ZHJhdGluZywgYGZyYWdtZW50YCBpcyBhIGBEb2N1bWVudEZyYWdtZW50YCAodGhlIHJlc3VsdCBvZiBjYWxsaW5nIGBvcGVuX2ZyYWdgKVxuXHRcdHZhciBmaXJzdCA9IC8qKiBAdHlwZSB7RG9jdW1lbnRGcmFnbWVudH0gKi8gKGdldF9maXJzdF9jaGlsZCgvKiogQHR5cGUge05vZGV9ICovIChmcmFnbWVudCkpKTtcblxuXHRcdC8vIFRPRE8gcHJldmVudCB1c2VyIGNvbW1lbnRzIHdpdGggdGhlIGVtcHR5IHN0cmluZyB3aGVuIHByZXNlcnZlQ29tbWVudHMgaXMgdHJ1ZVxuXHRcdGlmIChmaXJzdCBpbnN0YW5jZW9mIENvbW1lbnQgJiYgZmlyc3QuZGF0YSA9PT0gJycpIHJldHVybiBnZXRfbmV4dF9zaWJsaW5nKGZpcnN0KTtcblxuXHRcdHJldHVybiBmaXJzdDtcblx0fVxuXG5cdC8vIGlmIGFuIHtleHByZXNzaW9ufSBpcyBlbXB0eSBkdXJpbmcgU1NSLCB0aGVyZSBtaWdodCBiZSBub1xuXHQvLyB0ZXh0IG5vZGUgdG8gaHlkcmF0ZSDigJQgd2UgbXVzdCB0aGVyZWZvcmUgY3JlYXRlIG9uZVxuXHRpZiAoaXNfdGV4dCAmJiBoeWRyYXRlX25vZGU/Lm5vZGVUeXBlICE9PSAzKSB7XG5cdFx0dmFyIHRleHQgPSBjcmVhdGVfdGV4dCgpO1xuXG5cdFx0aHlkcmF0ZV9ub2RlPy5iZWZvcmUodGV4dCk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZSh0ZXh0KTtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdHJldHVybiBoeWRyYXRlX25vZGU7XG59XG5cbi8qKlxuICogRG9uJ3QgbWFyayB0aGlzIGFzIHNpZGUtZWZmZWN0LWZyZWUsIGh5ZHJhdGlvbiBuZWVkcyB0byB3YWxrIGFsbCBub2Rlc1xuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtib29sZWFufSBpc190ZXh0XG4gKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWJsaW5nKG5vZGUsIGNvdW50ID0gMSwgaXNfdGV4dCA9IGZhbHNlKSB7XG5cdGxldCBuZXh0X3NpYmxpbmcgPSBoeWRyYXRpbmcgPyBoeWRyYXRlX25vZGUgOiBub2RlO1xuXHR2YXIgbGFzdF9zaWJsaW5nO1xuXG5cdHdoaWxlIChjb3VudC0tKSB7XG5cdFx0bGFzdF9zaWJsaW5nID0gbmV4dF9zaWJsaW5nO1xuXHRcdG5leHRfc2libGluZyA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoZ2V0X25leHRfc2libGluZyhuZXh0X3NpYmxpbmcpKTtcblx0fVxuXG5cdGlmICghaHlkcmF0aW5nKSB7XG5cdFx0cmV0dXJuIG5leHRfc2libGluZztcblx0fVxuXG5cdHZhciB0eXBlID0gbmV4dF9zaWJsaW5nPy5ub2RlVHlwZTtcblxuXHQvLyBpZiBhIHNpYmxpbmcge2V4cHJlc3Npb259IGlzIGVtcHR5IGR1cmluZyBTU1IsIHRoZXJlIG1pZ2h0IGJlIG5vXG5cdC8vIHRleHQgbm9kZSB0byBoeWRyYXRlIOKAlCB3ZSBtdXN0IHRoZXJlZm9yZSBjcmVhdGUgb25lXG5cdGlmIChpc190ZXh0ICYmIHR5cGUgIT09IDMpIHtcblx0XHR2YXIgdGV4dCA9IGNyZWF0ZV90ZXh0KCk7XG5cdFx0Ly8gSWYgdGhlIG5leHQgc2libGluZyBpcyBgbnVsbGAgYW5kIHdlJ3JlIGhhbmRsaW5nIHRleHQgdGhlbiBpdCdzIGJlY2F1c2Vcblx0XHQvLyB0aGUgU1NSIGNvbnRlbnQgd2FzIGVtcHR5IGZvciB0aGUgdGV4dCwgc28gd2UgbmVlZCB0byBnZW5lcmF0ZSBhIG5ldyB0ZXh0XG5cdFx0Ly8gbm9kZSBhbmQgaW5zZXJ0IGl0IGFmdGVyIHRoZSBsYXN0IHNpYmxpbmdcblx0XHRpZiAobmV4dF9zaWJsaW5nID09PSBudWxsKSB7XG5cdFx0XHRsYXN0X3NpYmxpbmc/LmFmdGVyKHRleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXh0X3NpYmxpbmcuYmVmb3JlKHRleHQpO1xuXHRcdH1cblx0XHRzZXRfaHlkcmF0ZV9ub2RlKHRleHQpO1xuXHRcdHJldHVybiB0ZXh0O1xuXHR9XG5cblx0c2V0X2h5ZHJhdGVfbm9kZShuZXh0X3NpYmxpbmcpO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChuZXh0X3NpYmxpbmcpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7Tm9kZX0gTlxuICogQHBhcmFtIHtOfSBub2RlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX3RleHRfY29udGVudChub2RlKSB7XG5cdG5vZGUudGV4dENvbnRlbnQgPSAnJztcbn1cbiIsIi8qKiBAaW1wb3J0IHsgRGVyaXZlZCwgRWZmZWN0IH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHtcblx0Q0xFQU4sXG5cdERFUklWRUQsXG5cdERFU1RST1lFRCxcblx0RElSVFksXG5cdEVGRkVDVF9IQVNfREVSSVZFRCxcblx0TUFZQkVfRElSVFksXG5cdFVOT1dORURcbn0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7XG5cdGFjdGl2ZV9yZWFjdGlvbixcblx0YWN0aXZlX2VmZmVjdCxcblx0cmVtb3ZlX3JlYWN0aW9ucyxcblx0c2V0X3NpZ25hbF9zdGF0dXMsXG5cdHNraXBfcmVhY3Rpb24sXG5cdHVwZGF0ZV9yZWFjdGlvbixcblx0aW5jcmVtZW50X3ZlcnNpb24sXG5cdHNldF9hY3RpdmVfZWZmZWN0LFxuXHRjb21wb25lbnRfY29udGV4dFxufSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGVxdWFscywgc2FmZV9lcXVhbHMgfSBmcm9tICcuL2VxdWFsaXR5LmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi4vZXJyb3JzLmpzJztcbmltcG9ydCB7IGRlc3Ryb3lfZWZmZWN0IH0gZnJvbSAnLi9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGluc3BlY3RfZWZmZWN0cywgc2V0X2luc3BlY3RfZWZmZWN0cyB9IGZyb20gJy4vc291cmNlcy5qcyc7XG5pbXBvcnQgeyBnZXRfc3RhY2sgfSBmcm9tICcuLi9kZXYvdHJhY2luZy5qcyc7XG5pbXBvcnQgeyB0cmFjaW5nX21vZGVfZmxhZyB9IGZyb20gJy4uLy4uL2ZsYWdzL2luZGV4LmpzJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHsoKSA9PiBWfSBmblxuICogQHJldHVybnMge0Rlcml2ZWQ8Vj59XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZWQoZm4pIHtcblx0dmFyIGZsYWdzID0gREVSSVZFRCB8IERJUlRZO1xuXG5cdGlmIChhY3RpdmVfZWZmZWN0ID09PSBudWxsKSB7XG5cdFx0ZmxhZ3MgfD0gVU5PV05FRDtcblx0fSBlbHNlIHtcblx0XHQvLyBTaW5jZSBkZXJpdmVkcyBhcmUgZXZhbHVhdGVkIGxhemlseSwgYW55IGVmZmVjdHMgY3JlYXRlZCBpbnNpZGUgdGhlbSBhcmVcblx0XHQvLyBjcmVhdGVkIHRvbyBsYXRlIHRvIGVuc3VyZSB0aGF0IHRoZSBwYXJlbnQgZWZmZWN0IGlzIGFkZGVkIHRvIHRoZSB0cmVlXG5cdFx0YWN0aXZlX2VmZmVjdC5mIHw9IEVGRkVDVF9IQVNfREVSSVZFRDtcblx0fVxuXG5cdHZhciBwYXJlbnRfZGVyaXZlZCA9XG5cdFx0YWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmIChhY3RpdmVfcmVhY3Rpb24uZiAmIERFUklWRUQpICE9PSAwXG5cdFx0XHQ/IC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGFjdGl2ZV9yZWFjdGlvbilcblx0XHRcdDogbnVsbDtcblxuXHQvKiogQHR5cGUge0Rlcml2ZWQ8Vj59ICovXG5cdGNvbnN0IHNpZ25hbCA9IHtcblx0XHRjaGlsZHJlbjogbnVsbCxcblx0XHRjdHg6IGNvbXBvbmVudF9jb250ZXh0LFxuXHRcdGRlcHM6IG51bGwsXG5cdFx0ZXF1YWxzLFxuXHRcdGY6IGZsYWdzLFxuXHRcdGZuLFxuXHRcdHJlYWN0aW9uczogbnVsbCxcblx0XHR2OiAvKiogQHR5cGUge1Z9ICovIChudWxsKSxcblx0XHR2ZXJzaW9uOiAwLFxuXHRcdHBhcmVudDogcGFyZW50X2Rlcml2ZWQgPz8gYWN0aXZlX2VmZmVjdFxuXHR9O1xuXG5cdGlmIChERVYgJiYgdHJhY2luZ19tb2RlX2ZsYWcpIHtcblx0XHRzaWduYWwuY3JlYXRlZCA9IGdldF9zdGFjaygnQ3JlYXRlZEF0Jyk7XG5cdH1cblxuXHRpZiAocGFyZW50X2Rlcml2ZWQgIT09IG51bGwpIHtcblx0XHQocGFyZW50X2Rlcml2ZWQuY2hpbGRyZW4gPz89IFtdKS5wdXNoKHNpZ25hbCk7XG5cdH1cblxuXHRyZXR1cm4gc2lnbmFsO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0geygpID0+IFZ9IGZuXG4gKiBAcmV0dXJucyB7RGVyaXZlZDxWPn1cbiAqL1xuLyojX19OT19TSURFX0VGRkVDVFNfXyovXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlZF9zYWZlX2VxdWFsKGZuKSB7XG5cdGNvbnN0IHNpZ25hbCA9IGRlcml2ZWQoZm4pO1xuXHRzaWduYWwuZXF1YWxzID0gc2FmZV9lcXVhbHM7XG5cdHJldHVybiBzaWduYWw7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZGVzdHJveV9kZXJpdmVkX2NoaWxkcmVuKGRlcml2ZWQpIHtcblx0dmFyIGNoaWxkcmVuID0gZGVyaXZlZC5jaGlsZHJlbjtcblxuXHRpZiAoY2hpbGRyZW4gIT09IG51bGwpIHtcblx0XHRkZXJpdmVkLmNoaWxkcmVuID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKChjaGlsZC5mICYgREVSSVZFRCkgIT09IDApIHtcblx0XHRcdFx0ZGVzdHJveV9kZXJpdmVkKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGNoaWxkKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZXN0cm95X2VmZmVjdCgvKiogQHR5cGUge0VmZmVjdH0gKi8gKGNoaWxkKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSB1cGRhdGluZyBkZXJpdmVkcywgdXNlZCB0byBkZXRlY3QgaW5maW5pdGUgcmVjdXJzaW9uXG4gKiBpbiBkZXYgbW9kZSBhbmQgcHJvdmlkZSBhIG5pY2VyIGVycm9yIHRoYW4gJ3RvbyBtdWNoIHJlY3Vyc2lvbidcbiAqIEB0eXBlIHtEZXJpdmVkW119XG4gKi9cbmxldCBzdGFjayA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSB7RGVyaXZlZH0gZGVyaXZlZFxuICogQHJldHVybnMge0VmZmVjdCB8IG51bGx9XG4gKi9cbmZ1bmN0aW9uIGdldF9kZXJpdmVkX3BhcmVudF9lZmZlY3QoZGVyaXZlZCkge1xuXHR2YXIgcGFyZW50ID0gZGVyaXZlZC5wYXJlbnQ7XG5cdHdoaWxlIChwYXJlbnQgIT09IG51bGwpIHtcblx0XHRpZiAoKHBhcmVudC5mICYgREVSSVZFRCkgPT09IDApIHtcblx0XHRcdHJldHVybiAvKiogQHR5cGUge0VmZmVjdH0gKi8gKHBhcmVudCk7XG5cdFx0fVxuXHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7RGVyaXZlZH0gZGVyaXZlZFxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlX2Rlcml2ZWQoZGVyaXZlZCkge1xuXHR2YXIgdmFsdWU7XG5cdHZhciBwcmV2X2FjdGl2ZV9lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXG5cdHNldF9hY3RpdmVfZWZmZWN0KGdldF9kZXJpdmVkX3BhcmVudF9lZmZlY3QoZGVyaXZlZCkpO1xuXG5cdGlmIChERVYpIHtcblx0XHRsZXQgcHJldl9pbnNwZWN0X2VmZmVjdHMgPSBpbnNwZWN0X2VmZmVjdHM7XG5cdFx0c2V0X2luc3BlY3RfZWZmZWN0cyhuZXcgU2V0KCkpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoc3RhY2suaW5jbHVkZXMoZGVyaXZlZCkpIHtcblx0XHRcdFx0ZS5kZXJpdmVkX3JlZmVyZW5jZXNfc2VsZigpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGFjay5wdXNoKGRlcml2ZWQpO1xuXG5cdFx0XHRkZXN0cm95X2Rlcml2ZWRfY2hpbGRyZW4oZGVyaXZlZCk7XG5cdFx0XHR2YWx1ZSA9IHVwZGF0ZV9yZWFjdGlvbihkZXJpdmVkKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldl9hY3RpdmVfZWZmZWN0KTtcblx0XHRcdHNldF9pbnNwZWN0X2VmZmVjdHMocHJldl9pbnNwZWN0X2VmZmVjdHMpO1xuXHRcdFx0c3RhY2sucG9wKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRkZXN0cm95X2Rlcml2ZWRfY2hpbGRyZW4oZGVyaXZlZCk7XG5cdFx0XHR2YWx1ZSA9IHVwZGF0ZV9yZWFjdGlvbihkZXJpdmVkKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldl9hY3RpdmVfZWZmZWN0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEZXJpdmVkfSBkZXJpdmVkXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9kZXJpdmVkKGRlcml2ZWQpIHtcblx0dmFyIHZhbHVlID0gZXhlY3V0ZV9kZXJpdmVkKGRlcml2ZWQpO1xuXHR2YXIgc3RhdHVzID1cblx0XHQoc2tpcF9yZWFjdGlvbiB8fCAoZGVyaXZlZC5mICYgVU5PV05FRCkgIT09IDApICYmIGRlcml2ZWQuZGVwcyAhPT0gbnVsbCA/IE1BWUJFX0RJUlRZIDogQ0xFQU47XG5cblx0c2V0X3NpZ25hbF9zdGF0dXMoZGVyaXZlZCwgc3RhdHVzKTtcblxuXHRpZiAoIWRlcml2ZWQuZXF1YWxzKHZhbHVlKSkge1xuXHRcdGRlcml2ZWQudiA9IHZhbHVlO1xuXHRcdGRlcml2ZWQudmVyc2lvbiA9IGluY3JlbWVudF92ZXJzaW9uKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Rlcml2ZWR9IGRlcml2ZWRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveV9kZXJpdmVkKGRlcml2ZWQpIHtcblx0ZGVzdHJveV9kZXJpdmVkX2NoaWxkcmVuKGRlcml2ZWQpO1xuXHRyZW1vdmVfcmVhY3Rpb25zKGRlcml2ZWQsIDApO1xuXHRzZXRfc2lnbmFsX3N0YXR1cyhkZXJpdmVkLCBERVNUUk9ZRUQpO1xuXG5cdGRlcml2ZWQudiA9IGRlcml2ZWQuY2hpbGRyZW4gPSBkZXJpdmVkLmRlcHMgPSBkZXJpdmVkLmN0eCA9IGRlcml2ZWQucmVhY3Rpb25zID0gbnVsbDtcbn1cbiIsIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dCwgQ29tcG9uZW50Q29udGV4dExlZ2FjeSwgRGVyaXZlZCwgRWZmZWN0LCBUZW1wbGF0ZU5vZGUsIFRyYW5zaXRpb25NYW5hZ2VyIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7XG5cdGNoZWNrX2RpcnRpbmVzcyxcblx0Y29tcG9uZW50X2NvbnRleHQsXG5cdGFjdGl2ZV9lZmZlY3QsXG5cdGFjdGl2ZV9yZWFjdGlvbixcblx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uLFxuXHR1cGRhdGVfZWZmZWN0LFxuXHRnZXQsXG5cdGlzX2Rlc3Ryb3lpbmdfZWZmZWN0LFxuXHRpc19mbHVzaGluZ19lZmZlY3QsXG5cdHJlbW92ZV9yZWFjdGlvbnMsXG5cdHNjaGVkdWxlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvbixcblx0c2V0X2lzX2Rlc3Ryb3lpbmdfZWZmZWN0LFxuXHRzZXRfaXNfZmx1c2hpbmdfZWZmZWN0LFxuXHRzZXRfc2lnbmFsX3N0YXR1cyxcblx0dW50cmFjayxcblx0c2tpcF9yZWFjdGlvblxufSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7XG5cdERJUlRZLFxuXHRCUkFOQ0hfRUZGRUNULFxuXHRSRU5ERVJfRUZGRUNULFxuXHRFRkZFQ1QsXG5cdERFU1RST1lFRCxcblx0SU5FUlQsXG5cdEVGRkVDVF9SQU4sXG5cdEJMT0NLX0VGRkVDVCxcblx0Uk9PVF9FRkZFQ1QsXG5cdEVGRkVDVF9UUkFOU1BBUkVOVCxcblx0REVSSVZFRCxcblx0VU5PV05FRCxcblx0Q0xFQU4sXG5cdElOU1BFQ1RfRUZGRUNULFxuXHRIRUFEX0VGRkVDVCxcblx0TUFZQkVfRElSVFksXG5cdEVGRkVDVF9IQVNfREVSSVZFRFxufSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zb3VyY2VzLmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi4vZXJyb3JzLmpzJztcbmltcG9ydCB7IERFViB9IGZyb20gJ2VzbS1lbnYnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IGdldF9uZXh0X3NpYmxpbmcgfSBmcm9tICcuLi9kb20vb3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQgeyBkZXN0cm95X2Rlcml2ZWQgfSBmcm9tICcuL2Rlcml2ZWRzLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyckZWZmZWN0JyB8ICckZWZmZWN0LnByZScgfCAnJGluc3BlY3QnfSBydW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZV9lZmZlY3QocnVuZSkge1xuXHRpZiAoYWN0aXZlX2VmZmVjdCA9PT0gbnVsbCAmJiBhY3RpdmVfcmVhY3Rpb24gPT09IG51bGwpIHtcblx0XHRlLmVmZmVjdF9vcnBoYW4ocnVuZSk7XG5cdH1cblxuXHRpZiAoYWN0aXZlX3JlYWN0aW9uICE9PSBudWxsICYmIChhY3RpdmVfcmVhY3Rpb24uZiAmIFVOT1dORUQpICE9PSAwKSB7XG5cdFx0ZS5lZmZlY3RfaW5fdW5vd25lZF9kZXJpdmVkKCk7XG5cdH1cblxuXHRpZiAoaXNfZGVzdHJveWluZ19lZmZlY3QpIHtcblx0XHRlLmVmZmVjdF9pbl90ZWFyZG93bihydW5lKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7RWZmZWN0fSBwYXJlbnRfZWZmZWN0XG4gKi9cbmZ1bmN0aW9uIHB1c2hfZWZmZWN0KGVmZmVjdCwgcGFyZW50X2VmZmVjdCkge1xuXHR2YXIgcGFyZW50X2xhc3QgPSBwYXJlbnRfZWZmZWN0Lmxhc3Q7XG5cdGlmIChwYXJlbnRfbGFzdCA9PT0gbnVsbCkge1xuXHRcdHBhcmVudF9lZmZlY3QubGFzdCA9IHBhcmVudF9lZmZlY3QuZmlyc3QgPSBlZmZlY3Q7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50X2xhc3QubmV4dCA9IGVmZmVjdDtcblx0XHRlZmZlY3QucHJldiA9IHBhcmVudF9sYXN0O1xuXHRcdHBhcmVudF9lZmZlY3QubGFzdCA9IGVmZmVjdDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bGwgfCAoKCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKSl9IGZuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN5bmNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHVzaFxuICogQHJldHVybnMge0VmZmVjdH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlX2VmZmVjdCh0eXBlLCBmbiwgc3luYywgcHVzaCA9IHRydWUpIHtcblx0dmFyIGlzX3Jvb3QgPSAodHlwZSAmIFJPT1RfRUZGRUNUKSAhPT0gMDtcblx0dmFyIHBhcmVudF9lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXG5cdGlmIChERVYpIHtcblx0XHQvLyBFbnN1cmUgdGhlIHBhcmVudCBpcyBuZXZlciBhbiBpbnNwZWN0IGVmZmVjdFxuXHRcdHdoaWxlIChwYXJlbnRfZWZmZWN0ICE9PSBudWxsICYmIChwYXJlbnRfZWZmZWN0LmYgJiBJTlNQRUNUX0VGRkVDVCkgIT09IDApIHtcblx0XHRcdHBhcmVudF9lZmZlY3QgPSBwYXJlbnRfZWZmZWN0LnBhcmVudDtcblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge0VmZmVjdH0gKi9cblx0dmFyIGVmZmVjdCA9IHtcblx0XHRjdHg6IGNvbXBvbmVudF9jb250ZXh0LFxuXHRcdGRlcHM6IG51bGwsXG5cdFx0ZGVyaXZlZHM6IG51bGwsXG5cdFx0bm9kZXNfc3RhcnQ6IG51bGwsXG5cdFx0bm9kZXNfZW5kOiBudWxsLFxuXHRcdGY6IHR5cGUgfCBESVJUWSxcblx0XHRmaXJzdDogbnVsbCxcblx0XHRmbixcblx0XHRsYXN0OiBudWxsLFxuXHRcdG5leHQ6IG51bGwsXG5cdFx0cGFyZW50OiBpc19yb290ID8gbnVsbCA6IHBhcmVudF9lZmZlY3QsXG5cdFx0cHJldjogbnVsbCxcblx0XHR0ZWFyZG93bjogbnVsbCxcblx0XHR0cmFuc2l0aW9uczogbnVsbCxcblx0XHR2ZXJzaW9uOiAwXG5cdH07XG5cblx0aWYgKERFVikge1xuXHRcdGVmZmVjdC5jb21wb25lbnRfZnVuY3Rpb24gPSBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb247XG5cdH1cblxuXHRpZiAoc3luYykge1xuXHRcdHZhciBwcmV2aW91c2x5X2ZsdXNoaW5nX2VmZmVjdCA9IGlzX2ZsdXNoaW5nX2VmZmVjdDtcblxuXHRcdHRyeSB7XG5cdFx0XHRzZXRfaXNfZmx1c2hpbmdfZWZmZWN0KHRydWUpO1xuXHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0ZWZmZWN0LmYgfD0gRUZGRUNUX1JBTjtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0X2lzX2ZsdXNoaW5nX2VmZmVjdChwcmV2aW91c2x5X2ZsdXNoaW5nX2VmZmVjdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGZuICE9PSBudWxsKSB7XG5cdFx0c2NoZWR1bGVfZWZmZWN0KGVmZmVjdCk7XG5cdH1cblxuXHQvLyBpZiBhbiBlZmZlY3QgaGFzIG5vIGRlcGVuZGVuY2llcywgbm8gRE9NIGFuZCBubyB0ZWFyZG93biBmdW5jdGlvbixcblx0Ly8gZG9uJ3QgYm90aGVyIGFkZGluZyBpdCB0byB0aGUgZWZmZWN0IHRyZWVcblx0dmFyIGluZXJ0ID1cblx0XHRzeW5jICYmXG5cdFx0ZWZmZWN0LmRlcHMgPT09IG51bGwgJiZcblx0XHRlZmZlY3QuZmlyc3QgPT09IG51bGwgJiZcblx0XHRlZmZlY3Qubm9kZXNfc3RhcnQgPT09IG51bGwgJiZcblx0XHRlZmZlY3QudGVhcmRvd24gPT09IG51bGwgJiZcblx0XHQoZWZmZWN0LmYgJiBFRkZFQ1RfSEFTX0RFUklWRUQpID09PSAwO1xuXG5cdGlmICghaW5lcnQgJiYgIWlzX3Jvb3QgJiYgcHVzaCkge1xuXHRcdGlmIChwYXJlbnRfZWZmZWN0ICE9PSBudWxsKSB7XG5cdFx0XHRwdXNoX2VmZmVjdChlZmZlY3QsIHBhcmVudF9lZmZlY3QpO1xuXHRcdH1cblxuXHRcdC8vIGlmIHdlJ3JlIGluIGEgZGVyaXZlZCwgYWRkIHRoZSBlZmZlY3QgdGhlcmUgdG9vXG5cdFx0aWYgKGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJiAoYWN0aXZlX3JlYWN0aW9uLmYgJiBERVJJVkVEKSAhPT0gMCkge1xuXHRcdFx0dmFyIGRlcml2ZWQgPSAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChhY3RpdmVfcmVhY3Rpb24pO1xuXHRcdFx0KGRlcml2ZWQuY2hpbGRyZW4gPz89IFtdKS5wdXNoKGVmZmVjdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVmZmVjdDtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBgJGVmZmVjdC50cmFja2luZygpYFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3RfdHJhY2tpbmcoKSB7XG5cdGlmIChhY3RpdmVfcmVhY3Rpb24gPT09IG51bGwpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJZiBpdCdzIHNraXBwZWQsIHRoYXQncyBiZWNhdXNlIHdlJ3JlIGluc2lkZSBhbiB1bm93bmVkXG5cdC8vIHRoYXQgaXMgbm90IGJlaW5nIHRyYWNrZWQgYnkgYW5vdGhlciByZWFjdGlvblxuXHRyZXR1cm4gIXNraXBfcmVhY3Rpb247XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVhcmRvd24oZm4pIHtcblx0Y29uc3QgZWZmZWN0ID0gY3JlYXRlX2VmZmVjdChSRU5ERVJfRUZGRUNULCBudWxsLCBmYWxzZSk7XG5cdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgQ0xFQU4pO1xuXHRlZmZlY3QudGVhcmRvd24gPSBmbjtcblx0cmV0dXJuIGVmZmVjdDtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBgJGVmZmVjdCguLi4pYFxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlcl9lZmZlY3QoZm4pIHtcblx0dmFsaWRhdGVfZWZmZWN0KCckZWZmZWN0Jyk7XG5cblx0Ly8gTm9uLW5lc3RlZCBgJGVmZmVjdCguLi4pYCBpbiBhIGNvbXBvbmVudCBzaG91bGQgYmUgZGVmZXJyZWRcblx0Ly8gdW50aWwgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXG5cdHZhciBkZWZlciA9XG5cdFx0YWN0aXZlX2VmZmVjdCAhPT0gbnVsbCAmJlxuXHRcdChhY3RpdmVfZWZmZWN0LmYgJiBCUkFOQ0hfRUZGRUNUKSAhPT0gMCAmJlxuXHRcdGNvbXBvbmVudF9jb250ZXh0ICE9PSBudWxsICYmXG5cdFx0IWNvbXBvbmVudF9jb250ZXh0Lm07XG5cblx0aWYgKERFVikge1xuXHRcdGRlZmluZV9wcm9wZXJ0eShmbiwgJ25hbWUnLCB7XG5cdFx0XHR2YWx1ZTogJyRlZmZlY3QnXG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoZGVmZXIpIHtcblx0XHR2YXIgY29udGV4dCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dH0gKi8gKGNvbXBvbmVudF9jb250ZXh0KTtcblx0XHQoY29udGV4dC5lID8/PSBbXSkucHVzaCh7XG5cdFx0XHRmbixcblx0XHRcdGVmZmVjdDogYWN0aXZlX2VmZmVjdCxcblx0XHRcdHJlYWN0aW9uOiBhY3RpdmVfcmVhY3Rpb25cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR2YXIgc2lnbmFsID0gZWZmZWN0KGZuKTtcblx0XHRyZXR1cm4gc2lnbmFsO1xuXHR9XG59XG5cbi8qKlxuICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYCRlZmZlY3QucHJlKC4uLilgXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlcl9wcmVfZWZmZWN0KGZuKSB7XG5cdHZhbGlkYXRlX2VmZmVjdCgnJGVmZmVjdC5wcmUnKTtcblx0aWYgKERFVikge1xuXHRcdGRlZmluZV9wcm9wZXJ0eShmbiwgJ25hbWUnLCB7XG5cdFx0XHR2YWx1ZTogJyRlZmZlY3QucHJlJ1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiByZW5kZXJfZWZmZWN0KGZuKTtcbn1cblxuLyoqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNwZWN0X2VmZmVjdChmbikge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChJTlNQRUNUX0VGRkVDVCwgZm4sIHRydWUpO1xufVxuXG4vKipcbiAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGAkZWZmZWN0LnJvb3QoLi4uKWBcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0X3Jvb3QoZm4pIHtcblx0Y29uc3QgZWZmZWN0ID0gY3JlYXRlX2VmZmVjdChST09UX0VGRkVDVCwgZm4sIHRydWUpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0fTtcbn1cblxuLyoqXG4gKiBBbiBlZmZlY3Qgcm9vdCB3aG9zZSBjaGlsZHJlbiBjYW4gdHJhbnNpdGlvbiBvdXRcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gZm5cbiAqIEByZXR1cm5zIHsob3B0aW9ucz86IHsgb3V0cm8/OiBib29sZWFuIH0pID0+IFByb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRfcm9vdChmbikge1xuXHRjb25zdCBlZmZlY3QgPSBjcmVhdGVfZWZmZWN0KFJPT1RfRUZGRUNULCBmbiwgdHJ1ZSk7XG5cblx0cmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbCkgPT4ge1xuXHRcdFx0aWYgKG9wdGlvbnMub3V0cm8pIHtcblx0XHRcdFx0cGF1c2VfZWZmZWN0KGVmZmVjdCwgKCkgPT4ge1xuXHRcdFx0XHRcdGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCk7XG5cdFx0XHRcdFx0ZnVsZmlsKHVuZGVmaW5lZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0XHRcdFx0ZnVsZmlsKHVuZGVmaW5lZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkIHwgKCgpID0+IHZvaWQpfSBmblxuICogQHJldHVybnMge0VmZmVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdChmbikge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChFRkZFQ1QsIGZuLCBmYWxzZSk7XG59XG5cbi8qKlxuICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYCQ6IC4uYFxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGRlcHNcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlZ2FjeV9wcmVfZWZmZWN0KGRlcHMsIGZuKSB7XG5cdHZhciBjb250ZXh0ID0gLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0TGVnYWN5fSAqLyAoY29tcG9uZW50X2NvbnRleHQpO1xuXG5cdC8qKiBAdHlwZSB7eyBlZmZlY3Q6IG51bGwgfCBFZmZlY3QsIHJhbjogYm9vbGVhbiB9fSAqL1xuXHR2YXIgdG9rZW4gPSB7IGVmZmVjdDogbnVsbCwgcmFuOiBmYWxzZSB9O1xuXHRjb250ZXh0LmwucjEucHVzaCh0b2tlbik7XG5cblx0dG9rZW4uZWZmZWN0ID0gcmVuZGVyX2VmZmVjdCgoKSA9PiB7XG5cdFx0ZGVwcygpO1xuXG5cdFx0Ly8gSWYgdGhpcyBsZWdhY3kgcHJlIGVmZmVjdCBoYXMgYWxyZWFkeSBydW4gYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHJlc2V0LCB0aGVuXG5cdFx0Ly8gYmFpbCBvdXQgdG8gZW11bGF0ZSB0aGUgc2FtZSBiZWhhdmlvci5cblx0XHRpZiAodG9rZW4ucmFuKSByZXR1cm47XG5cblx0XHR0b2tlbi5yYW4gPSB0cnVlO1xuXHRcdHNldChjb250ZXh0LmwucjIsIHRydWUpO1xuXHRcdHVudHJhY2soZm4pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZ2FjeV9wcmVfZWZmZWN0X3Jlc2V0KCkge1xuXHR2YXIgY29udGV4dCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dExlZ2FjeX0gKi8gKGNvbXBvbmVudF9jb250ZXh0KTtcblxuXHRyZW5kZXJfZWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWdldChjb250ZXh0LmwucjIpKSByZXR1cm47XG5cblx0XHQvLyBSdW4gZGlydHkgYCQ6YCBzdGF0ZW1lbnRzXG5cdFx0Zm9yICh2YXIgdG9rZW4gb2YgY29udGV4dC5sLnIxKSB7XG5cdFx0XHR2YXIgZWZmZWN0ID0gdG9rZW4uZWZmZWN0O1xuXG5cdFx0XHQvLyBJZiB0aGUgZWZmZWN0IGlzIENMRUFOLCB0aGVuIG1ha2UgaXQgTUFZQkVfRElSVFkuIFRoaXMgZW5zdXJlcyB3ZSB0cmF2ZXJzZSB0aHJvdWdoXG5cdFx0XHQvLyB0aGUgZWZmZWN0cyBkZXBlbmRlbmNpZXMgYW5kIGNvcnJlY3RseSBlbnN1cmUgZWFjaCBkZXBlbmRlbmN5IGlzIHVwLXRvLWRhdGUuXG5cdFx0XHRpZiAoKGVmZmVjdC5mICYgQ0xFQU4pICE9PSAwKSB7XG5cdFx0XHRcdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgTUFZQkVfRElSVFkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKGVmZmVjdCkpIHtcblx0XHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2tlbi5yYW4gPSBmYWxzZTtcblx0XHR9XG5cblx0XHRjb250ZXh0LmwucjIudiA9IGZhbHNlOyAvLyBzZXQgZGlyZWN0bHkgdG8gYXZvaWQgcmVydW5uaW5nIHRoaXMgZWZmZWN0XG5cdH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZCB8ICgoKSA9PiB2b2lkKX0gZm5cbiAqIEByZXR1cm5zIHtFZmZlY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJfZWZmZWN0KGZuKSB7XG5cdHJldHVybiBjcmVhdGVfZWZmZWN0KFJFTkRFUl9FRkZFQ1QsIGZuLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWQgfCAoKCkgPT4gdm9pZCl9IGZuXG4gKiBAcmV0dXJucyB7RWZmZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVfZWZmZWN0KGZuKSB7XG5cdGlmIChERVYpIHtcblx0XHRkZWZpbmVfcHJvcGVydHkoZm4sICduYW1lJywge1xuXHRcdFx0dmFsdWU6ICd7ZXhwcmVzc2lvbn0nXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGJsb2NrKGZuKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygoKSA9PiB2b2lkKX0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmxvY2soZm4sIGZsYWdzID0gMCkge1xuXHRyZXR1cm4gY3JlYXRlX2VmZmVjdChSRU5ERVJfRUZGRUNUIHwgQkxPQ0tfRUZGRUNUIHwgZmxhZ3MsIGZuLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygoKSA9PiB2b2lkKX0gZm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1c2hdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBicmFuY2goZm4sIHB1c2ggPSB0cnVlKSB7XG5cdHJldHVybiBjcmVhdGVfZWZmZWN0KFJFTkRFUl9FRkZFQ1QgfCBCUkFOQ0hfRUZGRUNULCBmbiwgdHJ1ZSwgcHVzaCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24oZWZmZWN0KSB7XG5cdHZhciB0ZWFyZG93biA9IGVmZmVjdC50ZWFyZG93bjtcblx0aWYgKHRlYXJkb3duICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgcHJldmlvdXNseV9kZXN0cm95aW5nX2VmZmVjdCA9IGlzX2Rlc3Ryb3lpbmdfZWZmZWN0O1xuXHRcdGNvbnN0IHByZXZpb3VzX3JlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXHRcdHNldF9pc19kZXN0cm95aW5nX2VmZmVjdCh0cnVlKTtcblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKG51bGwpO1xuXHRcdHRyeSB7XG5cdFx0XHR0ZWFyZG93bi5jYWxsKG51bGwpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRfaXNfZGVzdHJveWluZ19lZmZlY3QocHJldmlvdXNseV9kZXN0cm95aW5nX2VmZmVjdCk7XG5cdFx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gc2lnbmFsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZWZmZWN0X2Rlcml2ZWRzKHNpZ25hbCkge1xuXHR2YXIgZGVyaXZlZHMgPSBzaWduYWwuZGVyaXZlZHM7XG5cblx0aWYgKGRlcml2ZWRzICE9PSBudWxsKSB7XG5cdFx0c2lnbmFsLmRlcml2ZWRzID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVyaXZlZHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGRlc3Ryb3lfZGVyaXZlZChkZXJpdmVkc1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IHNpZ25hbFxuICogQHBhcmFtIHtib29sZWFufSByZW1vdmVfZG9tXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZWZmZWN0X2NoaWxkcmVuKHNpZ25hbCwgcmVtb3ZlX2RvbSA9IGZhbHNlKSB7XG5cdHZhciBlZmZlY3QgPSBzaWduYWwuZmlyc3Q7XG5cdHNpZ25hbC5maXJzdCA9IHNpZ25hbC5sYXN0ID0gbnVsbDtcblxuXHR3aGlsZSAoZWZmZWN0ICE9PSBudWxsKSB7XG5cdFx0dmFyIG5leHQgPSBlZmZlY3QubmV4dDtcblx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QsIHJlbW92ZV9kb20pO1xuXHRcdGVmZmVjdCA9IG5leHQ7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VmZmVjdH0gc2lnbmFsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2tfZWZmZWN0X2NoaWxkcmVuKHNpZ25hbCkge1xuXHR2YXIgZWZmZWN0ID0gc2lnbmFsLmZpcnN0O1xuXG5cdHdoaWxlIChlZmZlY3QgIT09IG51bGwpIHtcblx0XHR2YXIgbmV4dCA9IGVmZmVjdC5uZXh0O1xuXHRcdGlmICgoZWZmZWN0LmYgJiBCUkFOQ0hfRUZGRUNUKSA9PT0gMCkge1xuXHRcdFx0ZGVzdHJveV9lZmZlY3QoZWZmZWN0KTtcblx0XHR9XG5cdFx0ZWZmZWN0ID0gbmV4dDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbW92ZV9kb21dXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lfZWZmZWN0KGVmZmVjdCwgcmVtb3ZlX2RvbSA9IHRydWUpIHtcblx0dmFyIHJlbW92ZWQgPSBmYWxzZTtcblxuXHRpZiAoKHJlbW92ZV9kb20gfHwgKGVmZmVjdC5mICYgSEVBRF9FRkZFQ1QpICE9PSAwKSAmJiBlZmZlY3Qubm9kZXNfc3RhcnQgIT09IG51bGwpIHtcblx0XHQvKiogQHR5cGUge1RlbXBsYXRlTm9kZSB8IG51bGx9ICovXG5cdFx0dmFyIG5vZGUgPSBlZmZlY3Qubm9kZXNfc3RhcnQ7XG5cdFx0dmFyIGVuZCA9IGVmZmVjdC5ub2Rlc19lbmQ7XG5cblx0XHR3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuXHRcdFx0LyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGUgfCBudWxsfSAqL1xuXHRcdFx0dmFyIG5leHQgPSBub2RlID09PSBlbmQgPyBudWxsIDogLyoqIEB0eXBlIHtUZW1wbGF0ZU5vZGV9ICovIChnZXRfbmV4dF9zaWJsaW5nKG5vZGUpKTtcblxuXHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRcdG5vZGUgPSBuZXh0O1xuXHRcdH1cblxuXHRcdHJlbW92ZWQgPSB0cnVlO1xuXHR9XG5cblx0ZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4oZWZmZWN0LCByZW1vdmVfZG9tICYmICFyZW1vdmVkKTtcblx0ZGVzdHJveV9lZmZlY3RfZGVyaXZlZHMoZWZmZWN0KTtcblx0cmVtb3ZlX3JlYWN0aW9ucyhlZmZlY3QsIDApO1xuXHRzZXRfc2lnbmFsX3N0YXR1cyhlZmZlY3QsIERFU1RST1lFRCk7XG5cblx0dmFyIHRyYW5zaXRpb25zID0gZWZmZWN0LnRyYW5zaXRpb25zO1xuXG5cdGlmICh0cmFuc2l0aW9ucyAhPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgdHJhbnNpdGlvbiBvZiB0cmFuc2l0aW9ucykge1xuXHRcdFx0dHJhbnNpdGlvbi5zdG9wKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24oZWZmZWN0KTtcblxuXHR2YXIgcGFyZW50ID0gZWZmZWN0LnBhcmVudDtcblxuXHQvLyBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGRyZW4sIHRoZW4gc2tpcCB0aGlzIHdvcmsgYWx0b2dldGhlclxuXHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5maXJzdCAhPT0gbnVsbCkge1xuXHRcdHVubGlua19lZmZlY3QoZWZmZWN0KTtcblx0fVxuXG5cdGlmIChERVYpIHtcblx0XHRlZmZlY3QuY29tcG9uZW50X2Z1bmN0aW9uID0gbnVsbDtcblx0fVxuXG5cdC8vIGBmaXJzdGAgYW5kIGBjaGlsZGAgYXJlIG51bGxlZCBvdXQgaW4gZGVzdHJveV9lZmZlY3RfY2hpbGRyZW5cblx0Ly8gd2UgZG9uJ3QgbnVsbCBvdXQgYHBhcmVudGAgc28gdGhhdCBlcnJvciBwcm9wYWdhdGlvbiBjYW4gd29yayBjb3JyZWN0bHlcblx0ZWZmZWN0Lm5leHQgPVxuXHRcdGVmZmVjdC5wcmV2ID1cblx0XHRlZmZlY3QudGVhcmRvd24gPVxuXHRcdGVmZmVjdC5jdHggPVxuXHRcdGVmZmVjdC5kZXBzID1cblx0XHRlZmZlY3QuZm4gPVxuXHRcdGVmZmVjdC5ub2Rlc19zdGFydCA9XG5cdFx0ZWZmZWN0Lm5vZGVzX2VuZCA9XG5cdFx0XHRudWxsO1xufVxuXG4vKipcbiAqIERldGFjaCBhbiBlZmZlY3QgZnJvbSB0aGUgZWZmZWN0IHRyZWUsIGZyZWVpbmcgdXAgbWVtb3J5IGFuZFxuICogcmVkdWNpbmcgdGhlIGFtb3VudCBvZiB3b3JrIHRoYXQgaGFwcGVucyBvbiBzdWJzZXF1ZW50IHRyYXZlcnNhbHNcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubGlua19lZmZlY3QoZWZmZWN0KSB7XG5cdHZhciBwYXJlbnQgPSBlZmZlY3QucGFyZW50O1xuXHR2YXIgcHJldiA9IGVmZmVjdC5wcmV2O1xuXHR2YXIgbmV4dCA9IGVmZmVjdC5uZXh0O1xuXG5cdGlmIChwcmV2ICE9PSBudWxsKSBwcmV2Lm5leHQgPSBuZXh0O1xuXHRpZiAobmV4dCAhPT0gbnVsbCkgbmV4dC5wcmV2ID0gcHJldjtcblxuXHRpZiAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0aWYgKHBhcmVudC5maXJzdCA9PT0gZWZmZWN0KSBwYXJlbnQuZmlyc3QgPSBuZXh0O1xuXHRcdGlmIChwYXJlbnQubGFzdCA9PT0gZWZmZWN0KSBwYXJlbnQubGFzdCA9IHByZXY7XG5cdH1cbn1cblxuLyoqXG4gKiBXaGVuIGEgYmxvY2sgZWZmZWN0IGlzIHJlbW92ZWQsIHdlIGRvbid0IGltbWVkaWF0ZWx5IGRlc3Ryb3kgaXQgb3IgeWFuayBpdFxuICogb3V0IG9mIHRoZSBET00sIGJlY2F1c2UgaXQgbWlnaHQgaGF2ZSB0cmFuc2l0aW9ucy4gSW5zdGVhZCwgd2UgJ3BhdXNlJyBpdC5cbiAqIEl0IHN0YXlzIGFyb3VuZCAoaW4gbWVtb3J5LCBhbmQgaW4gdGhlIERPTSkgdW50aWwgb3V0cm8gdHJhbnNpdGlvbnMgaGF2ZVxuICogY29tcGxldGVkLCBhbmQgaWYgdGhlIHN0YXRlIGNoYW5nZSBpcyByZXZlcnNlZCB0aGVuIHdlIF9yZXN1bWVfIGl0LlxuICogQSBwYXVzZWQgZWZmZWN0IGRvZXMgbm90IHVwZGF0ZSwgYW5kIHRoZSBET00gc3VidHJlZSBiZWNvbWVzIGluZXJ0LlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZV9lZmZlY3QoZWZmZWN0LCBjYWxsYmFjaykge1xuXHQvKiogQHR5cGUge1RyYW5zaXRpb25NYW5hZ2VyW119ICovXG5cdHZhciB0cmFuc2l0aW9ucyA9IFtdO1xuXG5cdHBhdXNlX2NoaWxkcmVuKGVmZmVjdCwgdHJhbnNpdGlvbnMsIHRydWUpO1xuXG5cdHJ1bl9vdXRfdHJhbnNpdGlvbnModHJhbnNpdGlvbnMsICgpID0+IHtcblx0XHRkZXN0cm95X2VmZmVjdChlZmZlY3QpO1xuXHRcdGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUcmFuc2l0aW9uTWFuYWdlcltdfSB0cmFuc2l0aW9uc1xuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuX291dF90cmFuc2l0aW9ucyh0cmFuc2l0aW9ucywgZm4pIHtcblx0dmFyIHJlbWFpbmluZyA9IHRyYW5zaXRpb25zLmxlbmd0aDtcblx0aWYgKHJlbWFpbmluZyA+IDApIHtcblx0XHR2YXIgY2hlY2sgPSAoKSA9PiAtLXJlbWFpbmluZyB8fCBmbigpO1xuXHRcdGZvciAodmFyIHRyYW5zaXRpb24gb2YgdHJhbnNpdGlvbnMpIHtcblx0XHRcdHRyYW5zaXRpb24ub3V0KGNoZWNrKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm4oKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbk1hbmFnZXJbXX0gdHJhbnNpdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9jYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlX2NoaWxkcmVuKGVmZmVjdCwgdHJhbnNpdGlvbnMsIGxvY2FsKSB7XG5cdGlmICgoZWZmZWN0LmYgJiBJTkVSVCkgIT09IDApIHJldHVybjtcblx0ZWZmZWN0LmYgXj0gSU5FUlQ7XG5cblx0aWYgKGVmZmVjdC50cmFuc2l0aW9ucyAhPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgdHJhbnNpdGlvbiBvZiBlZmZlY3QudHJhbnNpdGlvbnMpIHtcblx0XHRcdGlmICh0cmFuc2l0aW9uLmlzX2dsb2JhbCB8fCBsb2NhbCkge1xuXHRcdFx0XHR0cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHZhciBjaGlsZCA9IGVmZmVjdC5maXJzdDtcblxuXHR3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcblx0XHR2YXIgc2libGluZyA9IGNoaWxkLm5leHQ7XG5cdFx0dmFyIHRyYW5zcGFyZW50ID0gKGNoaWxkLmYgJiBFRkZFQ1RfVFJBTlNQQVJFTlQpICE9PSAwIHx8IChjaGlsZC5mICYgQlJBTkNIX0VGRkVDVCkgIT09IDA7XG5cdFx0Ly8gVE9ETyB3ZSBkb24ndCBuZWVkIHRvIGNhbGwgcGF1c2VfY2hpbGRyZW4gcmVjdXJzaXZlbHkgd2l0aCBhIGxpbmtlZCBsaXN0IGluIHBsYWNlXG5cdFx0Ly8gaXQncyBzbGlnaHRseSBtb3JlIGludm9sdmVkIHRob3VnaCBhcyB3ZSBoYXZlIHRvIGFjY291bnQgZm9yIGB0cmFuc3BhcmVudGAgY2hhbmdpbmdcblx0XHQvLyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRcdHBhdXNlX2NoaWxkcmVuKGNoaWxkLCB0cmFuc2l0aW9ucywgdHJhbnNwYXJlbnQgPyBsb2NhbCA6IGZhbHNlKTtcblx0XHRjaGlsZCA9IHNpYmxpbmc7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYHBhdXNlX2VmZmVjdGAuIFdlIGNhbGwgdGhpcyBpZiAoZm9yIGV4YW1wbGUpXG4gKiBgeGAgYmVjb21lcyBmYWxzeSB0aGVuIHRydXRoeTogYHsjaWYgeH0uLi57L2lmfWBcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3VtZV9lZmZlY3QoZWZmZWN0KSB7XG5cdHJlc3VtZV9jaGlsZHJlbihlZmZlY3QsIHRydWUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9jYWxcbiAqL1xuZnVuY3Rpb24gcmVzdW1lX2NoaWxkcmVuKGVmZmVjdCwgbG9jYWwpIHtcblx0aWYgKChlZmZlY3QuZiAmIElORVJUKSA9PT0gMCkgcmV0dXJuO1xuXG5cdC8vIElmIGEgZGVwZW5kZW5jeSBvZiB0aGlzIGVmZmVjdCBjaGFuZ2VkIHdoaWxlIGl0IHdhcyBwYXVzZWQsXG5cdC8vIGFwcGx5IHRoZSBjaGFuZ2Ugbm93XG5cdGlmIChjaGVja19kaXJ0aW5lc3MoZWZmZWN0KSkge1xuXHRcdHVwZGF0ZV9lZmZlY3QoZWZmZWN0KTtcblx0fVxuXG5cdC8vIEVuc3VyZSB3ZSB0b2dnbGUgdGhlIGZsYWcgYWZ0ZXIgcG9zc2libHkgdXBkYXRpbmcgdGhlIGVmZmVjdCBzbyB0aGF0XG5cdC8vIGVhY2ggYmxvY2sgbG9naWMgY2FuIGNvcnJlY3RseSBvcGVyYXRlIG9uIGluZXJ0IGl0ZW1zXG5cdGVmZmVjdC5mIF49IElORVJUO1xuXG5cdHZhciBjaGlsZCA9IGVmZmVjdC5maXJzdDtcblxuXHR3aGlsZSAoY2hpbGQgIT09IG51bGwpIHtcblx0XHR2YXIgc2libGluZyA9IGNoaWxkLm5leHQ7XG5cdFx0dmFyIHRyYW5zcGFyZW50ID0gKGNoaWxkLmYgJiBFRkZFQ1RfVFJBTlNQQVJFTlQpICE9PSAwIHx8IChjaGlsZC5mICYgQlJBTkNIX0VGRkVDVCkgIT09IDA7XG5cdFx0Ly8gVE9ETyB3ZSBkb24ndCBuZWVkIHRvIGNhbGwgcmVzdW1lX2NoaWxkcmVuIHJlY3Vyc2l2ZWx5IHdpdGggYSBsaW5rZWQgbGlzdCBpbiBwbGFjZVxuXHRcdC8vIGl0J3Mgc2xpZ2h0bHkgbW9yZSBpbnZvbHZlZCB0aG91Z2ggYXMgd2UgaGF2ZSB0byBhY2NvdW50IGZvciBgdHJhbnNwYXJlbnRgIGNoYW5naW5nXG5cdFx0Ly8gdGhyb3VnaCB0aGUgdHJlZS5cblx0XHRyZXN1bWVfY2hpbGRyZW4oY2hpbGQsIHRyYW5zcGFyZW50ID8gbG9jYWwgOiBmYWxzZSk7XG5cdFx0Y2hpbGQgPSBzaWJsaW5nO1xuXHR9XG5cblx0aWYgKGVmZmVjdC50cmFuc2l0aW9ucyAhPT0gbnVsbCkge1xuXHRcdGZvciAoY29uc3QgdHJhbnNpdGlvbiBvZiBlZmZlY3QudHJhbnNpdGlvbnMpIHtcblx0XHRcdGlmICh0cmFuc2l0aW9uLmlzX2dsb2JhbCB8fCBsb2NhbCkge1xuXHRcdFx0XHR0cmFuc2l0aW9uLmluKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBydW5fYWxsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuLy8gRmFsbGJhY2sgZm9yIHdoZW4gcmVxdWVzdElkbGVDYWxsYmFjayBpcyBub3QgYXZhaWxhYmxlXG5leHBvcnQgY29uc3QgcmVxdWVzdF9pZGxlX2NhbGxiYWNrID1cblx0dHlwZW9mIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPT09ICd1bmRlZmluZWQnXG5cdFx0PyAoLyoqIEB0eXBlIHsoKSA9PiB2b2lkfSAqLyBjYikgPT4gc2V0VGltZW91dChjYiwgMSlcblx0XHQ6IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cbmxldCBpc19taWNyb190YXNrX3F1ZXVlZCA9IGZhbHNlO1xubGV0IGlzX2lkbGVfdGFza19xdWV1ZWQgPSBmYWxzZTtcblxuLyoqIEB0eXBlIHtBcnJheTwoKSA9PiB2b2lkPn0gKi9cbmxldCBjdXJyZW50X3F1ZXVlZF9taWNyb190YXNrcyA9IFtdO1xuLyoqIEB0eXBlIHtBcnJheTwoKSA9PiB2b2lkPn0gKi9cbmxldCBjdXJyZW50X3F1ZXVlZF9pZGxlX3Rhc2tzID0gW107XG5cbmZ1bmN0aW9uIHByb2Nlc3NfbWljcm9fdGFza3MoKSB7XG5cdGlzX21pY3JvX3Rhc2tfcXVldWVkID0gZmFsc2U7XG5cdGNvbnN0IHRhc2tzID0gY3VycmVudF9xdWV1ZWRfbWljcm9fdGFza3Muc2xpY2UoKTtcblx0Y3VycmVudF9xdWV1ZWRfbWljcm9fdGFza3MgPSBbXTtcblx0cnVuX2FsbCh0YXNrcyk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NfaWRsZV90YXNrcygpIHtcblx0aXNfaWRsZV90YXNrX3F1ZXVlZCA9IGZhbHNlO1xuXHRjb25zdCB0YXNrcyA9IGN1cnJlbnRfcXVldWVkX2lkbGVfdGFza3Muc2xpY2UoKTtcblx0Y3VycmVudF9xdWV1ZWRfaWRsZV90YXNrcyA9IFtdO1xuXHRydW5fYWxsKHRhc2tzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWV1ZV9taWNyb190YXNrKGZuKSB7XG5cdGlmICghaXNfbWljcm9fdGFza19xdWV1ZWQpIHtcblx0XHRpc19taWNyb190YXNrX3F1ZXVlZCA9IHRydWU7XG5cdFx0cXVldWVNaWNyb3Rhc2socHJvY2Vzc19taWNyb190YXNrcyk7XG5cdH1cblx0Y3VycmVudF9xdWV1ZWRfbWljcm9fdGFza3MucHVzaChmbik7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVldWVfaWRsZV90YXNrKGZuKSB7XG5cdGlmICghaXNfaWRsZV90YXNrX3F1ZXVlZCkge1xuXHRcdGlzX2lkbGVfdGFza19xdWV1ZWQgPSB0cnVlO1xuXHRcdHJlcXVlc3RfaWRsZV9jYWxsYmFjayhwcm9jZXNzX2lkbGVfdGFza3MpO1xuXHR9XG5cdGN1cnJlbnRfcXVldWVkX2lkbGVfdGFza3MucHVzaChmbik7XG59XG5cbi8qKlxuICogU3luY2hyb25vdXNseSBydW4gYW55IHF1ZXVlZCB0YXNrcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoX3Rhc2tzKCkge1xuXHRpZiAoaXNfbWljcm9fdGFza19xdWV1ZWQpIHtcblx0XHRwcm9jZXNzX21pY3JvX3Rhc2tzKCk7XG5cdH1cblx0aWYgKGlzX2lkbGVfdGFza19xdWV1ZWQpIHtcblx0XHRwcm9jZXNzX2lkbGVfdGFza3MoKTtcblx0fVxufVxuIiwiLyoqIEBpbXBvcnQgeyBDb21wb25lbnRDb250ZXh0LCBEZXJpdmVkLCBFZmZlY3QsIFJlYWN0aW9uLCBTaWduYWwsIFNvdXJjZSwgVmFsdWUgfSBmcm9tICcjY2xpZW50JyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQgeyBkZWZpbmVfcHJvcGVydHksIGdldF9kZXNjcmlwdG9ycywgZ2V0X3Byb3RvdHlwZV9vZiB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQge1xuXHRkZXN0cm95X2Jsb2NrX2VmZmVjdF9jaGlsZHJlbixcblx0ZGVzdHJveV9lZmZlY3RfY2hpbGRyZW4sXG5cdGRlc3Ryb3lfZWZmZWN0X2Rlcml2ZWRzLFxuXHRlZmZlY3QsXG5cdGV4ZWN1dGVfZWZmZWN0X3RlYXJkb3duLFxuXHR1bmxpbmtfZWZmZWN0XG59IGZyb20gJy4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7XG5cdEVGRkVDVCxcblx0UkVOREVSX0VGRkVDVCxcblx0RElSVFksXG5cdE1BWUJFX0RJUlRZLFxuXHRDTEVBTixcblx0REVSSVZFRCxcblx0VU5PV05FRCxcblx0REVTVFJPWUVELFxuXHRJTkVSVCxcblx0QlJBTkNIX0VGRkVDVCxcblx0U1RBVEVfU1lNQk9MLFxuXHRCTE9DS19FRkZFQ1QsXG5cdFJPT1RfRUZGRUNULFxuXHRMRUdBQ1lfREVSSVZFRF9QUk9QLFxuXHRESVNDT05ORUNURUQsXG5cdEJPVU5EQVJZX0VGRkVDVFxufSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBmbHVzaF90YXNrcyB9IGZyb20gJy4vZG9tL3Rhc2suanMnO1xuaW1wb3J0IHsgYWRkX293bmVyIH0gZnJvbSAnLi9kZXYvb3duZXJzaGlwLmpzJztcbmltcG9ydCB7IGludGVybmFsX3NldCwgc2V0LCBzb3VyY2UgfSBmcm9tICcuL3JlYWN0aXZpdHkvc291cmNlcy5qcyc7XG5pbXBvcnQgeyBkZXN0cm95X2Rlcml2ZWQsIGV4ZWN1dGVfZGVyaXZlZCwgdXBkYXRlX2Rlcml2ZWQgfSBmcm9tICcuL3JlYWN0aXZpdHkvZGVyaXZlZHMuanMnO1xuaW1wb3J0ICogYXMgZSBmcm9tICcuL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvZXJyb3JzLmpzJztcbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGxlZ2FjeV9tb2RlX2ZsYWcsIHRyYWNpbmdfbW9kZV9mbGFnIH0gZnJvbSAnLi4vZmxhZ3MvaW5kZXguanMnO1xuaW1wb3J0IHsgdHJhY2luZ19leHByZXNzaW9ucywgZ2V0X3N0YWNrIH0gZnJvbSAnLi9kZXYvdHJhY2luZy5qcyc7XG5cbmNvbnN0IEZMVVNIX01JQ1JPVEFTSyA9IDA7XG5jb25zdCBGTFVTSF9TWU5DID0gMTtcbi8vIFVzZWQgZm9yIERFViB0aW1lIGVycm9yIGhhbmRsaW5nXG4vKiogQHBhcmFtIHtXZWFrU2V0PEVycm9yPn0gdmFsdWUgKi9cbmNvbnN0IGhhbmRsZWRfZXJyb3JzID0gbmV3IFdlYWtTZXQoKTtcbmV4cG9ydCBsZXQgaXNfdGhyb3dpbmdfZXJyb3IgPSBmYWxzZTtcblxuLy8gVXNlZCBmb3IgY29udHJvbGxpbmcgdGhlIGZsdXNoIG9mIGVmZmVjdHMuXG5sZXQgc2NoZWR1bGVyX21vZGUgPSBGTFVTSF9NSUNST1RBU0s7XG4vLyBVc2VkIGZvciBoYW5kbGluZyBzY2hlZHVsaW5nXG5sZXQgaXNfbWljcm9fdGFza19xdWV1ZWQgPSBmYWxzZTtcblxuLyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xubGV0IGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCA9IG51bGw7XG5cbmV4cG9ydCBsZXQgaXNfZmx1c2hpbmdfZWZmZWN0ID0gZmFsc2U7XG5leHBvcnQgbGV0IGlzX2Rlc3Ryb3lpbmdfZWZmZWN0ID0gZmFsc2U7XG5cbi8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2lzX2ZsdXNoaW5nX2VmZmVjdCh2YWx1ZSkge1xuXHRpc19mbHVzaGluZ19lZmZlY3QgPSB2YWx1ZTtcbn1cblxuLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfaXNfZGVzdHJveWluZ19lZmZlY3QodmFsdWUpIHtcblx0aXNfZGVzdHJveWluZ19lZmZlY3QgPSB2YWx1ZTtcbn1cblxuLy8gSGFuZGxlIGVmZmVjdCBxdWV1ZXNcblxuLyoqIEB0eXBlIHtFZmZlY3RbXX0gKi9cbmxldCBxdWV1ZWRfcm9vdF9lZmZlY3RzID0gW107XG5cbmxldCBmbHVzaF9jb3VudCA9IDA7XG4vKiogQHR5cGUge0VmZmVjdFtdfSBTdGFjayBvZiBlZmZlY3RzLCBkZXYgb25seSAqL1xubGV0IGRldl9lZmZlY3Rfc3RhY2sgPSBbXTtcbi8vIEhhbmRsZSBzaWduYWwgcmVhY3Rpdml0eSB0cmVlIGRlcGVuZGVuY2llcyBhbmQgcmVhY3Rpb25zXG5cbi8qKiBAdHlwZSB7bnVsbCB8IFJlYWN0aW9ufSAqL1xuZXhwb3J0IGxldCBhY3RpdmVfcmVhY3Rpb24gPSBudWxsO1xuXG4vKiogQHBhcmFtIHtudWxsIHwgUmVhY3Rpb259IHJlYWN0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2FjdGl2ZV9yZWFjdGlvbihyZWFjdGlvbikge1xuXHRhY3RpdmVfcmVhY3Rpb24gPSByZWFjdGlvbjtcbn1cblxuLyoqIEB0eXBlIHtudWxsIHwgRWZmZWN0fSAqL1xuZXhwb3J0IGxldCBhY3RpdmVfZWZmZWN0ID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7bnVsbCB8IEVmZmVjdH0gZWZmZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2FjdGl2ZV9lZmZlY3QoZWZmZWN0KSB7XG5cdGFjdGl2ZV9lZmZlY3QgPSBlZmZlY3Q7XG59XG5cbi8qKlxuICogV2hlbiBzb3VyY2VzIGFyZSBjcmVhdGVkIHdpdGhpbiBhIGRlcml2ZWQsIHdlIHJlY29yZCB0aGVtIHNvIHRoYXQgd2UgY2FuIHNhZmVseSBhbGxvd1xuICogbG9jYWwgbXV0YXRpb25zIHRvIHRoZXNlIHNvdXJjZXMgd2l0aG91dCB0aGUgc2lkZS1lZmZlY3QgZXJyb3IgYmVpbmcgaW52b2tlZCB1bm5lY2Vzc2FyaWx5LlxuICogQHR5cGUge251bGwgfCBTb3VyY2VbXX1cbiAqL1xuZXhwb3J0IGxldCBkZXJpdmVkX3NvdXJjZXMgPSBudWxsO1xuXG4vKipcbiAqIEBwYXJhbSB7U291cmNlW10gfCBudWxsfSBzb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGVyaXZlZF9zb3VyY2VzKHNvdXJjZXMpIHtcblx0ZGVyaXZlZF9zb3VyY2VzID0gc291cmNlcztcbn1cblxuLyoqXG4gKiBUaGUgZGVwZW5kZW5jaWVzIG9mIHRoZSByZWFjdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBleGVjdXRlZC4gSW4gbWFueSBjYXNlcyxcbiAqIHRoZSBkZXBlbmRlbmNpZXMgYXJlIHVuY2hhbmdlZCBiZXR3ZWVuIHJ1bnMsIGFuZCBzbyB0aGlzIHdpbGwgYmUgYG51bGxgIHVubGVzc1xuICogYW5kIHVudGlsIGEgbmV3IGRlcGVuZGVuY3kgaXMgYWNjZXNzZWQg4oCUIHdlIHRyYWNrIHRoaXMgdmlhIGBza2lwcGVkX2RlcHNgXG4gKiBAdHlwZSB7bnVsbCB8IFZhbHVlW119XG4gKi9cbmV4cG9ydCBsZXQgbmV3X2RlcHMgPSBudWxsO1xuXG5sZXQgc2tpcHBlZF9kZXBzID0gMDtcblxuLyoqXG4gKiBUcmFja3Mgd3JpdGVzIHRoYXQgdGhlIGVmZmVjdCBpdCdzIGV4ZWN1dGVkIGluIGRvZXNuJ3QgbGlzdGVuIHRvIHlldCxcbiAqIHNvIHRoYXQgdGhlIGRlcGVuZGVuY3kgY2FuIGJlIGFkZGVkIHRvIHRoZSBlZmZlY3QgbGF0ZXIgb24gaWYgaXQgdGhlbiByZWFkcyBpdFxuICogQHR5cGUge251bGwgfCBTb3VyY2VbXX1cbiAqL1xuZXhwb3J0IGxldCB1bnRyYWNrZWRfd3JpdGVzID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7bnVsbCB8IFNvdXJjZVtdfSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF91bnRyYWNrZWRfd3JpdGVzKHZhbHVlKSB7XG5cdHVudHJhY2tlZF93cml0ZXMgPSB2YWx1ZTtcbn1cblxuLyoqIEB0eXBlIHtudW1iZXJ9IFVzZWQgYnkgc291cmNlcyBhbmQgZGVyaXZlZHMgZm9yIGhhbmRsaW5nIHVwZGF0ZXMgdG8gdW5vd25lZCBkZXJpdmVkcyBpdCBzdGFydHMgZnJvbSAxIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBhIGNyZWF0ZWQgZWZmZWN0IGFuZCBhIHJ1biBvbmUgZm9yIHRyYWNpbmcgKi9cbmxldCBjdXJyZW50X3ZlcnNpb24gPSAxO1xuXG4vLyBJZiB3ZSBhcmUgd29ya2luZyB3aXRoIGEgZ2V0KCkgY2hhaW4gdGhhdCBoYXMgbm8gYWN0aXZlIGNvbnRhaW5lcixcbi8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLCB3ZSBza2lwIGFkZGluZyB0aGUgcmVhY3Rpb24uXG5leHBvcnQgbGV0IHNraXBfcmVhY3Rpb24gPSBmYWxzZTtcbi8vIEhhbmRsZSBjb2xsZWN0aW5nIGFsbCBzaWduYWxzIHdoaWNoIGFyZSByZWFkIGR1cmluZyBhIHNwZWNpZmljIHRpbWUgZnJhbWVcbi8qKiBAdHlwZSB7U2V0PFZhbHVlPiB8IG51bGx9ICovXG5leHBvcnQgbGV0IGNhcHR1cmVkX3NpZ25hbHMgPSBudWxsO1xuXG4vKiogQHBhcmFtIHtTZXQ8VmFsdWU+IHwgbnVsbH0gdmFsdWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY2FwdHVyZWRfc2lnbmFscyh2YWx1ZSkge1xuXHRjYXB0dXJlZF9zaWduYWxzID0gdmFsdWU7XG59XG5cbi8vIEhhbmRsaW5nIHJ1bnRpbWUgY29tcG9uZW50IGNvbnRleHRcbi8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dCB8IG51bGx9ICovXG5leHBvcnQgbGV0IGNvbXBvbmVudF9jb250ZXh0ID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7Q29tcG9uZW50Q29udGV4dCB8IG51bGx9IGNvbnRleHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfY29tcG9uZW50X2NvbnRleHQoY29udGV4dCkge1xuXHRjb21wb25lbnRfY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVGhlIGN1cnJlbnQgY29tcG9uZW50IGZ1bmN0aW9uLiBEaWZmZXJlbnQgZnJvbSBjdXJyZW50IGNvbXBvbmVudCBjb250ZXh0OlxuICogYGBgaHRtbFxuICogPCEtLSBBcHAuc3ZlbHRlIC0tPlxuICogPEZvbz5cbiAqICAgPEJhciAvPiA8IS0tIGNvbnRleHQgPT0gRm9vLnN2ZWx0ZSwgZnVuY3Rpb24gPT0gQXBwLnN2ZWx0ZSAtLT5cbiAqIDwvRm9vPlxuICogYGBgXG4gKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dFsnZnVuY3Rpb24nXX1cbiAqL1xuZXhwb3J0IGxldCBkZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24gPSBudWxsO1xuXG4vKiogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0WydmdW5jdGlvbiddfSBmbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kZXZfY3VycmVudF9jb21wb25lbnRfZnVuY3Rpb24oZm4pIHtcblx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnRfdmVyc2lvbigpIHtcblx0cmV0dXJuICsrY3VycmVudF92ZXJzaW9uO1xufVxuXG4vKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5leHBvcnQgZnVuY3Rpb24gaXNfcnVuZXMoKSB7XG5cdHJldHVybiAhbGVnYWN5X21vZGVfZmxhZyB8fCAoY29tcG9uZW50X2NvbnRleHQgIT09IG51bGwgJiYgY29tcG9uZW50X2NvbnRleHQubCA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZGVyaXZlZCBvciBlZmZlY3QgaXMgZGlydHkuXG4gKiBJZiBpdCBpcyBNQVlCRV9ESVJUWSwgd2lsbCBzZXQgdGhlIHN0YXR1cyB0byBDTEVBTlxuICogQHBhcmFtIHtSZWFjdGlvbn0gcmVhY3Rpb25cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfZGlydGluZXNzKHJlYWN0aW9uKSB7XG5cdHZhciBmbGFncyA9IHJlYWN0aW9uLmY7XG5cblx0aWYgKChmbGFncyAmIERJUlRZKSAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKChmbGFncyAmIE1BWUJFX0RJUlRZKSAhPT0gMCkge1xuXHRcdHZhciBkZXBlbmRlbmNpZXMgPSByZWFjdGlvbi5kZXBzO1xuXHRcdHZhciBpc191bm93bmVkID0gKGZsYWdzICYgVU5PV05FRCkgIT09IDA7XG5cblx0XHRpZiAoZGVwZW5kZW5jaWVzICE9PSBudWxsKSB7XG5cdFx0XHR2YXIgaTtcblxuXHRcdFx0aWYgKChmbGFncyAmIERJU0NPTk5FQ1RFRCkgIT09IDApIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdChkZXBlbmRlbmNpZXNbaV0ucmVhY3Rpb25zID8/PSBbXSkucHVzaChyZWFjdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZWFjdGlvbi5mIF49IERJU0NPTk5FQ1RFRDtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IGRlcGVuZGVuY2llc1tpXTtcblxuXHRcdFx0XHRpZiAoY2hlY2tfZGlydGluZXNzKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGRlcGVuZGVuY3kpKSkge1xuXHRcdFx0XHRcdHVwZGF0ZV9kZXJpdmVkKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKGRlcGVuZGVuY3kpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHdlIGFyZSB3b3JraW5nIHdpdGggYW4gdW5vd25lZCBzaWduYWwgYXMgcGFydCBvZiBhbiBlZmZlY3QgKGR1ZSB0byAhc2tpcF9yZWFjdGlvbilcblx0XHRcdFx0Ly8gYW5kIHRoZSB2ZXJzaW9uIGhhc24ndCBjaGFuZ2VkLCB3ZSBzdGlsbCBuZWVkIHRvIGNoZWNrIHRoYXQgdGhpcyByZWFjdGlvblxuXHRcdFx0XHQvLyBpcyBsaW5rZWQgdG8gdGhlIGRlcGVuZGVuY3kgc291cmNlIOKAkyBvdGhlcndpc2UgZnV0dXJlIHVwZGF0ZXMgd2lsbCBub3QgYmUgY2F1Z2h0LlxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNfdW5vd25lZCAmJlxuXHRcdFx0XHRcdGFjdGl2ZV9lZmZlY3QgIT09IG51bGwgJiZcblx0XHRcdFx0XHQhc2tpcF9yZWFjdGlvbiAmJlxuXHRcdFx0XHRcdCFkZXBlbmRlbmN5Py5yZWFjdGlvbnM/LmluY2x1ZGVzKHJlYWN0aW9uKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQoZGVwZW5kZW5jeS5yZWFjdGlvbnMgPz89IFtdKS5wdXNoKHJlYWN0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkZXBlbmRlbmN5LnZlcnNpb24gPiByZWFjdGlvbi52ZXJzaW9uKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVbm93bmVkIHNpZ25hbHMgc2hvdWxkIG5ldmVyIGJlIG1hcmtlZCBhcyBjbGVhbiB1bmxlc3MgdGhleVxuXHRcdC8vIGFyZSB1c2VkIHdpdGhpbiBhbiBhY3RpdmVfZWZmZWN0IHdpdGhvdXQgc2tpcF9yZWFjdGlvblxuXHRcdGlmICghaXNfdW5vd25lZCB8fCAoYWN0aXZlX2VmZmVjdCAhPT0gbnVsbCAmJiAhc2tpcF9yZWFjdGlvbikpIHtcblx0XHRcdHNldF9zaWduYWxfc3RhdHVzKHJlYWN0aW9uLCBDTEVBTik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bn0gZXJyb3JcbiAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3RcbiAqL1xuZnVuY3Rpb24gcHJvcGFnYXRlX2Vycm9yKGVycm9yLCBlZmZlY3QpIHtcblx0LyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xuXHR2YXIgY3VycmVudCA9IGVmZmVjdDtcblxuXHR3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuXHRcdGlmICgoY3VycmVudC5mICYgQk9VTkRBUllfRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHRjdXJyZW50LmZuKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8vIFJlbW92ZSBib3VuZGFyeSBmbGFnIGZyb20gZWZmZWN0XG5cdFx0XHRcdGN1cnJlbnQuZiBePSBCT1VOREFSWV9FRkZFQ1Q7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuXHR9XG5cblx0aXNfdGhyb3dpbmdfZXJyb3IgPSBmYWxzZTtcblx0dGhyb3cgZXJyb3I7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICovXG5mdW5jdGlvbiBzaG91bGRfcmV0aHJvd19lcnJvcihlZmZlY3QpIHtcblx0cmV0dXJuIChcblx0XHQoZWZmZWN0LmYgJiBERVNUUk9ZRUQpID09PSAwICYmXG5cdFx0KGVmZmVjdC5wYXJlbnQgPT09IG51bGwgfHwgKGVmZmVjdC5wYXJlbnQuZiAmIEJPVU5EQVJZX0VGRkVDVCkgPT09IDApXG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldF9pc190aHJvd2luZ19lcnJvcigpIHtcblx0aXNfdGhyb3dpbmdfZXJyb3IgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd259IGVycm9yXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKiBAcGFyYW0ge0VmZmVjdCB8IG51bGx9IHByZXZpb3VzX2VmZmVjdFxuICogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0IHwgbnVsbH0gY29tcG9uZW50X2NvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZV9lcnJvcihlcnJvciwgZWZmZWN0LCBwcmV2aW91c19lZmZlY3QsIGNvbXBvbmVudF9jb250ZXh0KSB7XG5cdGlmIChpc190aHJvd2luZ19lcnJvcikge1xuXHRcdGlmIChwcmV2aW91c19lZmZlY3QgPT09IG51bGwpIHtcblx0XHRcdGlzX3Rocm93aW5nX2Vycm9yID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZF9yZXRocm93X2Vycm9yKGVmZmVjdCkpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChwcmV2aW91c19lZmZlY3QgIT09IG51bGwpIHtcblx0XHRpc190aHJvd2luZ19lcnJvciA9IHRydWU7XG5cdH1cblxuXHRpZiAoXG5cdFx0IURFViB8fFxuXHRcdGNvbXBvbmVudF9jb250ZXh0ID09PSBudWxsIHx8XG5cdFx0IShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB8fFxuXHRcdGhhbmRsZWRfZXJyb3JzLmhhcyhlcnJvcilcblx0KSB7XG5cdFx0cHJvcGFnYXRlX2Vycm9yKGVycm9yLCBlZmZlY3QpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGhhbmRsZWRfZXJyb3JzLmFkZChlcnJvcik7XG5cblx0Y29uc3QgY29tcG9uZW50X3N0YWNrID0gW107XG5cblx0Y29uc3QgZWZmZWN0X25hbWUgPSBlZmZlY3QuZm4/Lm5hbWU7XG5cblx0aWYgKGVmZmVjdF9uYW1lKSB7XG5cdFx0Y29tcG9uZW50X3N0YWNrLnB1c2goZWZmZWN0X25hbWUpO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0IHwgbnVsbH0gKi9cblx0bGV0IGN1cnJlbnRfY29udGV4dCA9IGNvbXBvbmVudF9jb250ZXh0O1xuXG5cdHdoaWxlIChjdXJyZW50X2NvbnRleHQgIT09IG51bGwpIHtcblx0XHRpZiAoREVWKSB7XG5cdFx0XHQvKiogQHR5cGUge3N0cmluZ30gKi9cblx0XHRcdHZhciBmaWxlbmFtZSA9IGN1cnJlbnRfY29udGV4dC5mdW5jdGlvbj8uW0ZJTEVOQU1FXTtcblxuXHRcdFx0aWYgKGZpbGVuYW1lKSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBmaWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpO1xuXHRcdFx0XHRjb21wb25lbnRfc3RhY2sucHVzaChmaWxlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjdXJyZW50X2NvbnRleHQgPSBjdXJyZW50X2NvbnRleHQucDtcblx0fVxuXG5cdGNvbnN0IGluZGVudCA9IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJyAgJyA6ICdcXHQnO1xuXHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdtZXNzYWdlJywge1xuXHRcdHZhbHVlOiBlcnJvci5tZXNzYWdlICsgYFxcbiR7Y29tcG9uZW50X3N0YWNrLm1hcCgobmFtZSkgPT4gYFxcbiR7aW5kZW50fWluICR7bmFtZX1gKS5qb2luKCcnKX1cXG5gXG5cdH0pO1xuXHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdjb21wb25lbnRfc3RhY2snLCB7XG5cdFx0dmFsdWU6IGNvbXBvbmVudF9zdGFja1xuXHR9KTtcblxuXHRjb25zdCBzdGFjayA9IGVycm9yLnN0YWNrO1xuXG5cdC8vIEZpbHRlciBvdXQgaW50ZXJuYWwgZmlsZXMgZnJvbSBjYWxsc3RhY2tcblx0aWYgKHN0YWNrKSB7XG5cdFx0Y29uc3QgbGluZXMgPSBzdGFjay5zcGxpdCgnXFxuJyk7XG5cdFx0Y29uc3QgbmV3X2xpbmVzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbGluZSA9IGxpbmVzW2ldO1xuXHRcdFx0aWYgKGxpbmUuaW5jbHVkZXMoJ3N2ZWx0ZS9zcmMvaW50ZXJuYWwnKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdG5ld19saW5lcy5wdXNoKGxpbmUpO1xuXHRcdH1cblx0XHRkZWZpbmVfcHJvcGVydHkoZXJyb3IsICdzdGFjaycsIHtcblx0XHRcdHZhbHVlOiBuZXdfbGluZXMuam9pbignXFxuJylcblx0XHR9KTtcblx0fVxuXG5cdHByb3BhZ2F0ZV9lcnJvcihlcnJvciwgZWZmZWN0KTtcblxuXHRpZiAoc2hvdWxkX3JldGhyb3dfZXJyb3IoZWZmZWN0KSkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHJlYWN0aW9uXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9yZWFjdGlvbihyZWFjdGlvbikge1xuXHR2YXIgcHJldmlvdXNfZGVwcyA9IG5ld19kZXBzO1xuXHR2YXIgcHJldmlvdXNfc2tpcHBlZF9kZXBzID0gc2tpcHBlZF9kZXBzO1xuXHR2YXIgcHJldmlvdXNfdW50cmFja2VkX3dyaXRlcyA9IHVudHJhY2tlZF93cml0ZXM7XG5cdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0dmFyIHByZXZpb3VzX3NraXBfcmVhY3Rpb24gPSBza2lwX3JlYWN0aW9uO1xuXHR2YXIgcHJldl9kZXJpdmVkX3NvdXJjZXMgPSBkZXJpdmVkX3NvdXJjZXM7XG5cdHZhciBwcmV2aW91c19jb21wb25lbnRfY29udGV4dCA9IGNvbXBvbmVudF9jb250ZXh0O1xuXHR2YXIgZmxhZ3MgPSByZWFjdGlvbi5mO1xuXG5cdG5ld19kZXBzID0gLyoqIEB0eXBlIHtudWxsIHwgVmFsdWVbXX0gKi8gKG51bGwpO1xuXHRza2lwcGVkX2RlcHMgPSAwO1xuXHR1bnRyYWNrZWRfd3JpdGVzID0gbnVsbDtcblx0YWN0aXZlX3JlYWN0aW9uID0gKGZsYWdzICYgKEJSQU5DSF9FRkZFQ1QgfCBST09UX0VGRkVDVCkpID09PSAwID8gcmVhY3Rpb24gOiBudWxsO1xuXHRza2lwX3JlYWN0aW9uID0gIWlzX2ZsdXNoaW5nX2VmZmVjdCAmJiAoZmxhZ3MgJiBVTk9XTkVEKSAhPT0gMDtcblx0ZGVyaXZlZF9zb3VyY2VzID0gbnVsbDtcblx0Y29tcG9uZW50X2NvbnRleHQgPSByZWFjdGlvbi5jdHg7XG5cblx0dHJ5IHtcblx0XHR2YXIgcmVzdWx0ID0gLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi8gKDAsIHJlYWN0aW9uLmZuKSgpO1xuXHRcdHZhciBkZXBzID0gcmVhY3Rpb24uZGVwcztcblxuXHRcdGlmIChuZXdfZGVwcyAhPT0gbnVsbCkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdHJlbW92ZV9yZWFjdGlvbnMocmVhY3Rpb24sIHNraXBwZWRfZGVwcyk7XG5cblx0XHRcdGlmIChkZXBzICE9PSBudWxsICYmIHNraXBwZWRfZGVwcyA+IDApIHtcblx0XHRcdFx0ZGVwcy5sZW5ndGggPSBza2lwcGVkX2RlcHMgKyBuZXdfZGVwcy5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdfZGVwcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRlcHNbc2tpcHBlZF9kZXBzICsgaV0gPSBuZXdfZGVwc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhY3Rpb24uZGVwcyA9IGRlcHMgPSBuZXdfZGVwcztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFza2lwX3JlYWN0aW9uKSB7XG5cdFx0XHRcdGZvciAoaSA9IHNraXBwZWRfZGVwczsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQoZGVwc1tpXS5yZWFjdGlvbnMgPz89IFtdKS5wdXNoKHJlYWN0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGVwcyAhPT0gbnVsbCAmJiBza2lwcGVkX2RlcHMgPCBkZXBzLmxlbmd0aCkge1xuXHRcdFx0cmVtb3ZlX3JlYWN0aW9ucyhyZWFjdGlvbiwgc2tpcHBlZF9kZXBzKTtcblx0XHRcdGRlcHMubGVuZ3RoID0gc2tpcHBlZF9kZXBzO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0gZmluYWxseSB7XG5cdFx0bmV3X2RlcHMgPSBwcmV2aW91c19kZXBzO1xuXHRcdHNraXBwZWRfZGVwcyA9IHByZXZpb3VzX3NraXBwZWRfZGVwcztcblx0XHR1bnRyYWNrZWRfd3JpdGVzID0gcHJldmlvdXNfdW50cmFja2VkX3dyaXRlcztcblx0XHRhY3RpdmVfcmVhY3Rpb24gPSBwcmV2aW91c19yZWFjdGlvbjtcblx0XHRza2lwX3JlYWN0aW9uID0gcHJldmlvdXNfc2tpcF9yZWFjdGlvbjtcblx0XHRkZXJpdmVkX3NvdXJjZXMgPSBwcmV2X2Rlcml2ZWRfc291cmNlcztcblx0XHRjb21wb25lbnRfY29udGV4dCA9IHByZXZpb3VzX2NvbXBvbmVudF9jb250ZXh0O1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHNpZ25hbFxuICogQHBhcmFtIHtWYWx1ZTxWPn0gZGVwZW5kZW5jeVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZV9yZWFjdGlvbihzaWduYWwsIGRlcGVuZGVuY3kpIHtcblx0bGV0IHJlYWN0aW9ucyA9IGRlcGVuZGVuY3kucmVhY3Rpb25zO1xuXHRpZiAocmVhY3Rpb25zICE9PSBudWxsKSB7XG5cdFx0dmFyIGluZGV4ID0gcmVhY3Rpb25zLmluZGV4T2Yoc2lnbmFsKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHR2YXIgbmV3X2xlbmd0aCA9IHJlYWN0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0aWYgKG5ld19sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmVhY3Rpb25zID0gZGVwZW5kZW5jeS5yZWFjdGlvbnMgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU3dhcCB3aXRoIGxhc3QgZWxlbWVudCBhbmQgdGhlbiByZW1vdmUuXG5cdFx0XHRcdHJlYWN0aW9uc1tpbmRleF0gPSByZWFjdGlvbnNbbmV3X2xlbmd0aF07XG5cdFx0XHRcdHJlYWN0aW9ucy5wb3AoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gSWYgdGhlIGRlcml2ZWQgaGFzIG5vIHJlYWN0aW9ucywgdGhlbiB3ZSBjYW4gZGlzY29ubmVjdCBpdCBmcm9tIHRoZSBncmFwaCxcblx0Ly8gYWxsb3dpbmcgaXQgdG8gZWl0aGVyIHJlY29ubmVjdCBpbiB0aGUgZnV0dXJlLCBvciBiZSBHQydkIGJ5IHRoZSBWTS5cblx0aWYgKFxuXHRcdHJlYWN0aW9ucyA9PT0gbnVsbCAmJlxuXHRcdChkZXBlbmRlbmN5LmYgJiBERVJJVkVEKSAhPT0gMCAmJlxuXHRcdC8vIERlc3Ryb3lpbmcgYSBjaGlsZCBlZmZlY3Qgd2hpbGUgdXBkYXRpbmcgYSBwYXJlbnQgZWZmZWN0IGNhbiBjYXVzZSBhIGRlcGVuZGVuY3kgdG8gYXBwZWFyXG5cdFx0Ly8gdG8gYmUgdW51c2VkLCB3aGVuIGluIGZhY3QgaXQgaXMgdXNlZCBieSB0aGUgY3VycmVudGx5LXVwZGF0aW5nIHBhcmVudC4gQ2hlY2tpbmcgYG5ld19kZXBzYFxuXHRcdC8vIGFsbG93cyB1cyB0byBza2lwIHRoZSBleHBlbnNpdmUgd29yayBvZiBkaXNjb25uZWN0aW5nIGFuZCBpbW1lZGlhdGVseSByZWNvbm5lY3RpbmcgaXRcblx0XHQobmV3X2RlcHMgPT09IG51bGwgfHwgIW5ld19kZXBzLmluY2x1ZGVzKGRlcGVuZGVuY3kpKVxuXHQpIHtcblx0XHRzZXRfc2lnbmFsX3N0YXR1cyhkZXBlbmRlbmN5LCBNQVlCRV9ESVJUWSk7XG5cdFx0Ly8gSWYgd2UgYXJlIHdvcmtpbmcgd2l0aCBhIGRlcml2ZWQgdGhhdCBpcyBvd25lZCBieSBhbiBlZmZlY3QsIHRoZW4gbWFyayBpdCBhcyBiZWluZ1xuXHRcdC8vIGRpc2Nvbm5lY3RlZC5cblx0XHRpZiAoKGRlcGVuZGVuY3kuZiAmIChVTk9XTkVEIHwgRElTQ09OTkVDVEVEKSkgPT09IDApIHtcblx0XHRcdGRlcGVuZGVuY3kuZiBePSBESVNDT05ORUNURUQ7XG5cdFx0fVxuXHRcdHJlbW92ZV9yZWFjdGlvbnMoLyoqIEB0eXBlIHtEZXJpdmVkfSAqKi8gKGRlcGVuZGVuY3kpLCAwKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVhY3Rpb259IHNpZ25hbFxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0X2luZGV4XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZV9yZWFjdGlvbnMoc2lnbmFsLCBzdGFydF9pbmRleCkge1xuXHR2YXIgZGVwZW5kZW5jaWVzID0gc2lnbmFsLmRlcHM7XG5cdGlmIChkZXBlbmRlbmNpZXMgPT09IG51bGwpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gc3RhcnRfaW5kZXg7IGkgPCBkZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRyZW1vdmVfcmVhY3Rpb24oc2lnbmFsLCBkZXBlbmRlbmNpZXNbaV0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfZWZmZWN0KGVmZmVjdCkge1xuXHR2YXIgZmxhZ3MgPSBlZmZlY3QuZjtcblxuXHRpZiAoKGZsYWdzICYgREVTVFJPWUVEKSAhPT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldF9zaWduYWxfc3RhdHVzKGVmZmVjdCwgQ0xFQU4pO1xuXG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXHR2YXIgcHJldmlvdXNfY29tcG9uZW50X2NvbnRleHQgPSBjb21wb25lbnRfY29udGV4dDtcblxuXHRhY3RpdmVfZWZmZWN0ID0gZWZmZWN0O1xuXG5cdGlmIChERVYpIHtcblx0XHR2YXIgcHJldmlvdXNfY29tcG9uZW50X2ZuID0gZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uO1xuXHRcdGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiA9IGVmZmVjdC5jb21wb25lbnRfZnVuY3Rpb247XG5cdH1cblxuXHR0cnkge1xuXHRcdGlmICgoZmxhZ3MgJiBCTE9DS19FRkZFQ1QpICE9PSAwKSB7XG5cdFx0XHRkZXN0cm95X2Jsb2NrX2VmZmVjdF9jaGlsZHJlbihlZmZlY3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0cm95X2VmZmVjdF9jaGlsZHJlbihlZmZlY3QpO1xuXHRcdH1cblx0XHRkZXN0cm95X2VmZmVjdF9kZXJpdmVkcyhlZmZlY3QpO1xuXG5cdFx0ZXhlY3V0ZV9lZmZlY3RfdGVhcmRvd24oZWZmZWN0KTtcblx0XHR2YXIgdGVhcmRvd24gPSB1cGRhdGVfcmVhY3Rpb24oZWZmZWN0KTtcblx0XHRlZmZlY3QudGVhcmRvd24gPSB0eXBlb2YgdGVhcmRvd24gPT09ICdmdW5jdGlvbicgPyB0ZWFyZG93biA6IG51bGw7XG5cdFx0ZWZmZWN0LnZlcnNpb24gPSBjdXJyZW50X3ZlcnNpb247XG5cblx0XHRpZiAoREVWKSB7XG5cdFx0XHRkZXZfZWZmZWN0X3N0YWNrLnB1c2goZWZmZWN0KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aGFuZGxlX2Vycm9yKGVycm9yLCBlZmZlY3QsIHByZXZpb3VzX2VmZmVjdCwgcHJldmlvdXNfY29tcG9uZW50X2NvbnRleHQgfHwgZWZmZWN0LmN0eCk7XG5cdH0gZmluYWxseSB7XG5cdFx0YWN0aXZlX2VmZmVjdCA9IHByZXZpb3VzX2VmZmVjdDtcblxuXHRcdGlmIChERVYpIHtcblx0XHRcdGRldl9jdXJyZW50X2NvbXBvbmVudF9mdW5jdGlvbiA9IHByZXZpb3VzX2NvbXBvbmVudF9mbjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9nX2VmZmVjdF9zdGFjaygpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0Y29uc29sZS5lcnJvcihcblx0XHQnTGFzdCB0ZW4gZWZmZWN0cyB3ZXJlOiAnLFxuXHRcdGRldl9lZmZlY3Rfc3RhY2suc2xpY2UoLTEwKS5tYXAoKGQpID0+IGQuZm4pXG5cdCk7XG5cdGRldl9lZmZlY3Rfc3RhY2sgPSBbXTtcbn1cblxuZnVuY3Rpb24gaW5maW5pdGVfbG9vcF9ndWFyZCgpIHtcblx0aWYgKGZsdXNoX2NvdW50ID4gMTAwMCkge1xuXHRcdGZsdXNoX2NvdW50ID0gMDtcblx0XHR0cnkge1xuXHRcdFx0ZS5lZmZlY3RfdXBkYXRlX2RlcHRoX2V4Y2VlZGVkKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGlmIChERVYpIHtcblx0XHRcdFx0Ly8gc3RhY2sgaXMgZ2FyYmFnZSwgaWdub3JlLiBJbnN0ZWFkIGFkZCBhIGNvbnNvbGUuZXJyb3IgbWVzc2FnZS5cblx0XHRcdFx0ZGVmaW5lX3Byb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG5cdFx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVHJ5IGFuZCBoYW5kbGUgdGhlIGVycm9yIHNvIGl0IGNhbiBiZSBjYXVnaHQgYXQgYSBib3VuZGFyeSwgdGhhdCdzXG5cdFx0XHQvLyBpZiB0aGVyZSdzIGFuIGVmZmVjdCBhdmFpbGFibGUgZnJvbSB3aGVuIGl0IHdhcyBsYXN0IHNjaGVkdWxlZFxuXHRcdFx0aWYgKGxhc3Rfc2NoZWR1bGVkX2VmZmVjdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoREVWKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGhhbmRsZV9lcnJvcihlcnJvciwgbGFzdF9zY2hlZHVsZWRfZWZmZWN0LCBudWxsLCBudWxsKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGxvZyB0aGUgZWZmZWN0IHN0YWNrIGlmIHRoZSBlcnJvciBpcyByZS10aHJvd25cblx0XHRcdFx0XHRcdGxvZ19lZmZlY3Rfc3RhY2soKTtcblx0XHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhhbmRsZV9lcnJvcihlcnJvciwgbGFzdF9zY2hlZHVsZWRfZWZmZWN0LCBudWxsLCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKERFVikge1xuXHRcdFx0XHRcdGxvZ19lZmZlY3Rfc3RhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Zmx1c2hfY291bnQrKztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEVmZmVjdD59IHJvb3RfZWZmZWN0c1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGZsdXNoX3F1ZXVlZF9yb290X2VmZmVjdHMocm9vdF9lZmZlY3RzKSB7XG5cdHZhciBsZW5ndGggPSByb290X2VmZmVjdHMubGVuZ3RoO1xuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGluZmluaXRlX2xvb3BfZ3VhcmQoKTtcblxuXHR2YXIgcHJldmlvdXNseV9mbHVzaGluZ19lZmZlY3QgPSBpc19mbHVzaGluZ19lZmZlY3Q7XG5cdGlzX2ZsdXNoaW5nX2VmZmVjdCA9IHRydWU7XG5cblx0dHJ5IHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZWZmZWN0ID0gcm9vdF9lZmZlY3RzW2ldO1xuXG5cdFx0XHRpZiAoKGVmZmVjdC5mICYgQ0xFQU4pID09PSAwKSB7XG5cdFx0XHRcdGVmZmVjdC5mIF49IENMRUFOO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogQHR5cGUge0VmZmVjdFtdfSAqL1xuXHRcdFx0dmFyIGNvbGxlY3RlZF9lZmZlY3RzID0gW107XG5cblx0XHRcdHByb2Nlc3NfZWZmZWN0cyhlZmZlY3QsIGNvbGxlY3RlZF9lZmZlY3RzKTtcblx0XHRcdGZsdXNoX3F1ZXVlZF9lZmZlY3RzKGNvbGxlY3RlZF9lZmZlY3RzKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0aXNfZmx1c2hpbmdfZWZmZWN0ID0gcHJldmlvdXNseV9mbHVzaGluZ19lZmZlY3Q7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEVmZmVjdD59IGVmZmVjdHNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBmbHVzaF9xdWV1ZWRfZWZmZWN0cyhlZmZlY3RzKSB7XG5cdHZhciBsZW5ndGggPSBlZmZlY3RzLmxlbmd0aDtcblx0aWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZWZmZWN0ID0gZWZmZWN0c1tpXTtcblxuXHRcdGlmICgoZWZmZWN0LmYgJiAoREVTVFJPWUVEIHwgSU5FUlQpKSA9PT0gMCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGNoZWNrX2RpcnRpbmVzcyhlZmZlY3QpKSB7XG5cdFx0XHRcdFx0dXBkYXRlX2VmZmVjdChlZmZlY3QpO1xuXG5cdFx0XHRcdFx0Ly8gRWZmZWN0cyB3aXRoIG5vIGRlcGVuZGVuY2llcyBvciB0ZWFyZG93biBkbyBub3QgZ2V0IGFkZGVkIHRvIHRoZSBlZmZlY3QgdHJlZS5cblx0XHRcdFx0XHQvLyBEZWZlcnJlZCBlZmZlY3RzIChlLmcuIGAkZWZmZWN0KC4uLilgKSBfYXJlXyBhZGRlZCB0byB0aGUgdHJlZSBiZWNhdXNlIHdlXG5cdFx0XHRcdFx0Ly8gZG9uJ3Qga25vdyBpZiB3ZSBuZWVkIHRvIGtlZXAgdGhlbSB1bnRpbCB0aGV5IGFyZSBleGVjdXRlZC4gRG9pbmcgdGhlIGNoZWNrXG5cdFx0XHRcdFx0Ly8gaGVyZSAocmF0aGVyIHRoYW4gaW4gYHVwZGF0ZV9lZmZlY3RgKSBhbGxvd3MgdXMgdG8gc2tpcCB0aGUgd29yayBmb3Jcblx0XHRcdFx0XHQvLyBpbW1lZGlhdGUgZWZmZWN0cy5cblx0XHRcdFx0XHRpZiAoZWZmZWN0LmRlcHMgPT09IG51bGwgJiYgZWZmZWN0LmZpcnN0ID09PSBudWxsICYmIGVmZmVjdC5ub2Rlc19zdGFydCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aWYgKGVmZmVjdC50ZWFyZG93biA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHQvLyByZW1vdmUgdGhpcyBlZmZlY3QgZnJvbSB0aGUgZ3JhcGhcblx0XHRcdFx0XHRcdFx0dW5saW5rX2VmZmVjdChlZmZlY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8ga2VlcCB0aGUgZWZmZWN0IGluIHRoZSBncmFwaCwgYnV0IGZyZWUgdXAgc29tZSBtZW1vcnlcblx0XHRcdFx0XHRcdFx0ZWZmZWN0LmZuID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihlcnJvciwgZWZmZWN0LCBudWxsLCBlZmZlY3QuY3R4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc19kZWZlcnJlZCgpIHtcblx0aXNfbWljcm9fdGFza19xdWV1ZWQgPSBmYWxzZTtcblx0aWYgKGZsdXNoX2NvdW50ID4gMTAwMSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBwcmV2aW91c19xdWV1ZWRfcm9vdF9lZmZlY3RzID0gcXVldWVkX3Jvb3RfZWZmZWN0cztcblx0cXVldWVkX3Jvb3RfZWZmZWN0cyA9IFtdO1xuXHRmbHVzaF9xdWV1ZWRfcm9vdF9lZmZlY3RzKHByZXZpb3VzX3F1ZXVlZF9yb290X2VmZmVjdHMpO1xuXG5cdGlmICghaXNfbWljcm9fdGFza19xdWV1ZWQpIHtcblx0XHRmbHVzaF9jb3VudCA9IDA7XG5cdFx0bGFzdF9zY2hlZHVsZWRfZWZmZWN0ID0gbnVsbDtcblx0XHRpZiAoREVWKSB7XG5cdFx0XHRkZXZfZWZmZWN0X3N0YWNrID0gW107XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFZmZlY3R9IHNpZ25hbFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZV9lZmZlY3Qoc2lnbmFsKSB7XG5cdGlmIChzY2hlZHVsZXJfbW9kZSA9PT0gRkxVU0hfTUlDUk9UQVNLKSB7XG5cdFx0aWYgKCFpc19taWNyb190YXNrX3F1ZXVlZCkge1xuXHRcdFx0aXNfbWljcm9fdGFza19xdWV1ZWQgPSB0cnVlO1xuXHRcdFx0cXVldWVNaWNyb3Rhc2socHJvY2Vzc19kZWZlcnJlZCk7XG5cdFx0fVxuXHR9XG5cblx0bGFzdF9zY2hlZHVsZWRfZWZmZWN0ID0gc2lnbmFsO1xuXG5cdHZhciBlZmZlY3QgPSBzaWduYWw7XG5cblx0d2hpbGUgKGVmZmVjdC5wYXJlbnQgIT09IG51bGwpIHtcblx0XHRlZmZlY3QgPSBlZmZlY3QucGFyZW50O1xuXHRcdHZhciBmbGFncyA9IGVmZmVjdC5mO1xuXG5cdFx0aWYgKChmbGFncyAmIChST09UX0VGRkVDVCB8IEJSQU5DSF9FRkZFQ1QpKSAhPT0gMCkge1xuXHRcdFx0aWYgKChmbGFncyAmIENMRUFOKSA9PT0gMCkgcmV0dXJuO1xuXHRcdFx0ZWZmZWN0LmYgXj0gQ0xFQU47XG5cdFx0fVxuXHR9XG5cblx0cXVldWVkX3Jvb3RfZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG59XG5cbi8qKlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYm90aCBydW5zIHJlbmRlciBlZmZlY3RzIGFuZCBjb2xsZWN0cyB1c2VyIGVmZmVjdHMgaW4gdG9wb2xvZ2ljYWwgb3JkZXJcbiAqIGZyb20gdGhlIHN0YXJ0aW5nIGVmZmVjdCBwYXNzZWQgaW4uIEVmZmVjdHMgd2lsbCBiZSBjb2xsZWN0ZWQgd2hlbiB0aGV5IG1hdGNoIHRoZSBmaWx0ZXJlZFxuICogYml0d2lzZSBmbGFnIHBhc3NlZCBpbiBvbmx5LiBUaGUgY29sbGVjdGVkIGVmZmVjdHMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHVzZXJcbiAqIGVmZmVjdHMgdG8gYmUgZmx1c2hlZC5cbiAqXG4gKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0XG4gKiBAcGFyYW0ge0VmZmVjdFtdfSBjb2xsZWN0ZWRfZWZmZWN0c1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NfZWZmZWN0cyhlZmZlY3QsIGNvbGxlY3RlZF9lZmZlY3RzKSB7XG5cdHZhciBjdXJyZW50X2VmZmVjdCA9IGVmZmVjdC5maXJzdDtcblx0dmFyIGVmZmVjdHMgPSBbXTtcblxuXHRtYWluX2xvb3A6IHdoaWxlIChjdXJyZW50X2VmZmVjdCAhPT0gbnVsbCkge1xuXHRcdHZhciBmbGFncyA9IGN1cnJlbnRfZWZmZWN0LmY7XG5cdFx0dmFyIGlzX2JyYW5jaCA9IChmbGFncyAmIEJSQU5DSF9FRkZFQ1QpICE9PSAwO1xuXHRcdHZhciBpc19za2lwcGFibGVfYnJhbmNoID0gaXNfYnJhbmNoICYmIChmbGFncyAmIENMRUFOKSAhPT0gMDtcblx0XHR2YXIgc2libGluZyA9IGN1cnJlbnRfZWZmZWN0Lm5leHQ7XG5cblx0XHRpZiAoIWlzX3NraXBwYWJsZV9icmFuY2ggJiYgKGZsYWdzICYgSU5FUlQpID09PSAwKSB7XG5cdFx0XHRpZiAoKGZsYWdzICYgUkVOREVSX0VGRkVDVCkgIT09IDApIHtcblx0XHRcdFx0aWYgKGlzX2JyYW5jaCkge1xuXHRcdFx0XHRcdGN1cnJlbnRfZWZmZWN0LmYgXj0gQ0xFQU47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmIChjaGVja19kaXJ0aW5lc3MoY3VycmVudF9lZmZlY3QpKSB7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZV9lZmZlY3QoY3VycmVudF9lZmZlY3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVfZXJyb3IoZXJyb3IsIGN1cnJlbnRfZWZmZWN0LCBudWxsLCBjdXJyZW50X2VmZmVjdC5jdHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjaGlsZCA9IGN1cnJlbnRfZWZmZWN0LmZpcnN0O1xuXG5cdFx0XHRcdGlmIChjaGlsZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGN1cnJlbnRfZWZmZWN0ID0gY2hpbGQ7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoKGZsYWdzICYgRUZGRUNUKSAhPT0gMCkge1xuXHRcdFx0XHRlZmZlY3RzLnB1c2goY3VycmVudF9lZmZlY3QpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzaWJsaW5nID09PSBudWxsKSB7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudF9lZmZlY3QucGFyZW50O1xuXG5cdFx0XHR3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChlZmZlY3QgPT09IHBhcmVudCkge1xuXHRcdFx0XHRcdGJyZWFrIG1haW5fbG9vcDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcGFyZW50X3NpYmxpbmcgPSBwYXJlbnQubmV4dDtcblx0XHRcdFx0aWYgKHBhcmVudF9zaWJsaW5nICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y3VycmVudF9lZmZlY3QgPSBwYXJlbnRfc2libGluZztcblx0XHRcdFx0XHRjb250aW51ZSBtYWluX2xvb3A7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjdXJyZW50X2VmZmVjdCA9IHNpYmxpbmc7XG5cdH1cblxuXHQvLyBXZSBtaWdodCBiZSBkZWFsaW5nIHdpdGggbWFueSBlZmZlY3RzIGhlcmUsIGZhciBtb3JlIHRoYW4gY2FuIGJlIHNwcmVhZCBpbnRvXG5cdC8vIGFuIGFycmF5IHB1c2ggY2FsbCAoY2FsbHN0YWNrIG92ZXJmbG93KS4gU28gbGV0J3MgZGVhbCB3aXRoIGVhY2ggZWZmZWN0IGluIGEgbG9vcC5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZmZlY3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGQgPSBlZmZlY3RzW2ldO1xuXHRcdGNvbGxlY3RlZF9lZmZlY3RzLnB1c2goY2hpbGQpO1xuXHRcdHByb2Nlc3NfZWZmZWN0cyhjaGlsZCwgY29sbGVjdGVkX2VmZmVjdHMpO1xuXHR9XG59XG5cbi8qKlxuICogSW50ZXJuYWwgdmVyc2lvbiBvZiBgZmx1c2hTeW5jYCB3aXRoIHRoZSBvcHRpb24gdG8gbm90IGZsdXNoIHByZXZpb3VzIGVmZmVjdHMuXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBhc3NlZCBmdW5jdGlvbiwgaWYgZ2l2ZW4uXG4gKiBAcGFyYW0geygpID0+IGFueX0gW2ZuXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoX3N5bmMoZm4pIHtcblx0dmFyIHByZXZpb3VzX3NjaGVkdWxlcl9tb2RlID0gc2NoZWR1bGVyX21vZGU7XG5cdHZhciBwcmV2aW91c19xdWV1ZWRfcm9vdF9lZmZlY3RzID0gcXVldWVkX3Jvb3RfZWZmZWN0cztcblxuXHR0cnkge1xuXHRcdGluZmluaXRlX2xvb3BfZ3VhcmQoKTtcblxuXHRcdC8qKiBAdHlwZSB7RWZmZWN0W119ICovXG5cdFx0Y29uc3Qgcm9vdF9lZmZlY3RzID0gW107XG5cblx0XHRzY2hlZHVsZXJfbW9kZSA9IEZMVVNIX1NZTkM7XG5cdFx0cXVldWVkX3Jvb3RfZWZmZWN0cyA9IHJvb3RfZWZmZWN0cztcblx0XHRpc19taWNyb190YXNrX3F1ZXVlZCA9IGZhbHNlO1xuXG5cdFx0Zmx1c2hfcXVldWVkX3Jvb3RfZWZmZWN0cyhwcmV2aW91c19xdWV1ZWRfcm9vdF9lZmZlY3RzKTtcblxuXHRcdHZhciByZXN1bHQgPSBmbj8uKCk7XG5cblx0XHRmbHVzaF90YXNrcygpO1xuXHRcdGlmIChxdWV1ZWRfcm9vdF9lZmZlY3RzLmxlbmd0aCA+IDAgfHwgcm9vdF9lZmZlY3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZsdXNoX3N5bmMoKTtcblx0XHR9XG5cblx0XHRmbHVzaF9jb3VudCA9IDA7XG5cdFx0bGFzdF9zY2hlZHVsZWRfZWZmZWN0ID0gbnVsbDtcblx0XHRpZiAoREVWKSB7XG5cdFx0XHRkZXZfZWZmZWN0X3N0YWNrID0gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSBmaW5hbGx5IHtcblx0XHRzY2hlZHVsZXJfbW9kZSA9IHByZXZpb3VzX3NjaGVkdWxlcl9tb2RlO1xuXHRcdHF1ZXVlZF9yb290X2VmZmVjdHMgPSBwcmV2aW91c19xdWV1ZWRfcm9vdF9lZmZlY3RzO1xuXHR9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIGFueSBwZW5kaW5nIHN0YXRlIGNoYW5nZXMgaGF2ZSBiZWVuIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRpY2soKSB7XG5cdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHQvLyBCeSBjYWxsaW5nIGZsdXNoX3N5bmMgd2UgZ3VhcmFudGVlIHRoYXQgYW55IHBlbmRpbmcgc3RhdGUgY2hhbmdlcyBhcmUgYXBwbGllZCBhZnRlciBvbmUgdGljay5cblx0Ly8gVE9ETyBsb29rIGludG8gd2hldGhlciB3ZSBjYW4gbWFrZSBmbHVzaGluZyBzdWJzZXF1ZW50IHVwZGF0ZXMgc3luY2hyb25vdXNseSBpbiB0aGUgZnV0dXJlLlxuXHRmbHVzaF9zeW5jKCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7VmFsdWU8Vj59IHNpZ25hbFxuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoc2lnbmFsKSB7XG5cdHZhciBmbGFncyA9IHNpZ25hbC5mO1xuXHR2YXIgaXNfZGVyaXZlZCA9IChmbGFncyAmIERFUklWRUQpICE9PSAwO1xuXG5cdC8vIElmIHRoZSBkZXJpdmVkIGlzIGRlc3Ryb3llZCwganVzdCBleGVjdXRlIGl0IGFnYWluIHdpdGhvdXQgcmV0YWluaW5nXG5cdC8vIGl0cyBtZW1vaXNhdGlvbiBwcm9wZXJ0aWVzIGFzIHRoZSBkZXJpdmVkIGlzIHN0YWxlXG5cdGlmIChpc19kZXJpdmVkICYmIChmbGFncyAmIERFU1RST1lFRCkgIT09IDApIHtcblx0XHR2YXIgdmFsdWUgPSBleGVjdXRlX2Rlcml2ZWQoLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKSk7XG5cdFx0Ly8gRW5zdXJlIHRoZSBkZXJpdmVkIHJlbWFpbnMgZGVzdHJveWVkXG5cdFx0ZGVzdHJveV9kZXJpdmVkKC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHNpZ25hbCkpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmIChjYXB0dXJlZF9zaWduYWxzICE9PSBudWxsKSB7XG5cdFx0Y2FwdHVyZWRfc2lnbmFscy5hZGQoc2lnbmFsKTtcblx0fVxuXG5cdC8vIFJlZ2lzdGVyIHRoZSBkZXBlbmRlbmN5IG9uIHRoZSBjdXJyZW50IHJlYWN0aW9uIHNpZ25hbC5cblx0aWYgKGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCkge1xuXHRcdGlmIChkZXJpdmVkX3NvdXJjZXMgIT09IG51bGwgJiYgZGVyaXZlZF9zb3VyY2VzLmluY2x1ZGVzKHNpZ25hbCkpIHtcblx0XHRcdGUuc3RhdGVfdW5zYWZlX2xvY2FsX3JlYWQoKTtcblx0XHR9XG5cdFx0dmFyIGRlcHMgPSBhY3RpdmVfcmVhY3Rpb24uZGVwcztcblxuXHRcdC8vIElmIHRoZSBzaWduYWwgaXMgYWNjZXNzaW5nIHRoZSBzYW1lIGRlcGVuZGVuY2llcyBpbiB0aGUgc2FtZVxuXHRcdC8vIG9yZGVyIGFzIGl0IGRpZCBsYXN0IHRpbWUsIGluY3JlbWVudCBgc2tpcHBlZF9kZXBzYFxuXHRcdC8vIHJhdGhlciB0aGFuIHVwZGF0aW5nIGBuZXdfZGVwc2AsIHdoaWNoIGNyZWF0ZXMgR0MgY29zdFxuXHRcdGlmIChuZXdfZGVwcyA9PT0gbnVsbCAmJiBkZXBzICE9PSBudWxsICYmIGRlcHNbc2tpcHBlZF9kZXBzXSA9PT0gc2lnbmFsKSB7XG5cdFx0XHRza2lwcGVkX2RlcHMrKztcblx0XHR9IGVsc2UgaWYgKG5ld19kZXBzID09PSBudWxsKSB7XG5cdFx0XHRuZXdfZGVwcyA9IFtzaWduYWxdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdfZGVwcy5wdXNoKHNpZ25hbCk7XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0dW50cmFja2VkX3dyaXRlcyAhPT0gbnVsbCAmJlxuXHRcdFx0YWN0aXZlX2VmZmVjdCAhPT0gbnVsbCAmJlxuXHRcdFx0KGFjdGl2ZV9lZmZlY3QuZiAmIENMRUFOKSAhPT0gMCAmJlxuXHRcdFx0KGFjdGl2ZV9lZmZlY3QuZiAmIEJSQU5DSF9FRkZFQ1QpID09PSAwICYmXG5cdFx0XHR1bnRyYWNrZWRfd3JpdGVzLmluY2x1ZGVzKHNpZ25hbClcblx0XHQpIHtcblx0XHRcdHNldF9zaWduYWxfc3RhdHVzKGFjdGl2ZV9lZmZlY3QsIERJUlRZKTtcblx0XHRcdHNjaGVkdWxlX2VmZmVjdChhY3RpdmVfZWZmZWN0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoaXNfZGVyaXZlZCAmJiAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpLmRlcHMgPT09IG51bGwpIHtcblx0XHR2YXIgZGVyaXZlZCA9IC8qKiBAdHlwZSB7RGVyaXZlZH0gKi8gKHNpZ25hbCk7XG5cdFx0dmFyIHBhcmVudCA9IGRlcml2ZWQucGFyZW50O1xuXHRcdHZhciB0YXJnZXQgPSBkZXJpdmVkO1xuXG5cdFx0d2hpbGUgKHBhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gQXR0YWNoIHRoZSBkZXJpdmVkIHRvIHRoZSBuZWFyZXN0IHBhcmVudCBlZmZlY3QsIGlmIHRoZXJlIGFyZSBkZXJpdmVkc1xuXHRcdFx0Ly8gaW4gYmV0d2VlbiB0aGVuIHdlIGFsc28gbmVlZCB0byBhdHRhY2ggdGhlbSB0b29cblx0XHRcdGlmICgocGFyZW50LmYgJiBERVJJVkVEKSAhPT0gMCkge1xuXHRcdFx0XHR2YXIgcGFyZW50X2Rlcml2ZWQgPSAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChwYXJlbnQpO1xuXG5cdFx0XHRcdHRhcmdldCA9IHBhcmVudF9kZXJpdmVkO1xuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnRfZGVyaXZlZC5wYXJlbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgcGFyZW50X2VmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAocGFyZW50KTtcblxuXHRcdFx0XHRpZiAoIXBhcmVudF9lZmZlY3QuZGVyaXZlZHM/LmluY2x1ZGVzKHRhcmdldCkpIHtcblx0XHRcdFx0XHQocGFyZW50X2VmZmVjdC5kZXJpdmVkcyA/Pz0gW10pLnB1c2godGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoaXNfZGVyaXZlZCkge1xuXHRcdGRlcml2ZWQgPSAvKiogQHR5cGUge0Rlcml2ZWR9ICovIChzaWduYWwpO1xuXG5cdFx0aWYgKGNoZWNrX2RpcnRpbmVzcyhkZXJpdmVkKSkge1xuXHRcdFx0dXBkYXRlX2Rlcml2ZWQoZGVyaXZlZCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdERFViAmJlxuXHRcdHRyYWNpbmdfbW9kZV9mbGFnICYmXG5cdFx0dHJhY2luZ19leHByZXNzaW9ucyAhPT0gbnVsbCAmJlxuXHRcdGFjdGl2ZV9yZWFjdGlvbiAhPT0gbnVsbCAmJlxuXHRcdHRyYWNpbmdfZXhwcmVzc2lvbnMucmVhY3Rpb24gPT09IGFjdGl2ZV9yZWFjdGlvblxuXHQpIHtcblx0XHQvLyBVc2VkIHdoZW4gbWFwcGluZyBzdGF0ZSBiZXR3ZWVuIHNwZWNpYWwgYmxvY2tzIGxpa2UgYGVhY2hgXG5cdFx0aWYgKHNpZ25hbC5kZWJ1Zykge1xuXHRcdFx0c2lnbmFsLmRlYnVnKCk7XG5cdFx0fSBlbHNlIGlmIChzaWduYWwuY3JlYXRlZCkge1xuXHRcdFx0dmFyIGVudHJ5ID0gdHJhY2luZ19leHByZXNzaW9ucy5lbnRyaWVzLmdldChzaWduYWwpO1xuXG5cdFx0XHRpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbnRyeSA9IHsgcmVhZDogW10gfTtcblx0XHRcdFx0dHJhY2luZ19leHByZXNzaW9ucy5lbnRyaWVzLnNldChzaWduYWwsIGVudHJ5KTtcblx0XHRcdH1cblxuXHRcdFx0ZW50cnkucmVhZC5wdXNoKGdldF9zdGFjaygnVHJhY2VkQXQnKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHNpZ25hbC52O1xufVxuXG4vKipcbiAqIExpa2UgYGdldGAsIGJ1dCBjaGVja3MgZm9yIGB1bmRlZmluZWRgLiBVc2VkIGZvciBgdmFyYCBkZWNsYXJhdGlvbnMgYmVjYXVzZSB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBiZWZvcmUgYmVpbmcgZGVjbGFyZWRcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge1ZhbHVlPFY+IHwgdW5kZWZpbmVkfSBzaWduYWxcbiAqIEByZXR1cm5zIHtWIHwgdW5kZWZpbmVkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FmZV9nZXQoc2lnbmFsKSB7XG5cdHJldHVybiBzaWduYWwgJiYgZ2V0KHNpZ25hbCk7XG59XG5cbi8qKlxuICogQ2FwdHVyZSBhbiBhcnJheSBvZiBhbGwgdGhlIHNpZ25hbHMgdGhhdCBhcmUgcmVhZCB3aGVuIGBmbmAgaXMgY2FsbGVkXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZV9zaWduYWxzKGZuKSB7XG5cdHZhciBwcmV2aW91c19jYXB0dXJlZF9zaWduYWxzID0gY2FwdHVyZWRfc2lnbmFscztcblx0Y2FwdHVyZWRfc2lnbmFscyA9IG5ldyBTZXQoKTtcblxuXHR2YXIgY2FwdHVyZWQgPSBjYXB0dXJlZF9zaWduYWxzO1xuXHR2YXIgc2lnbmFsO1xuXG5cdHRyeSB7XG5cdFx0dW50cmFjayhmbik7XG5cdFx0aWYgKHByZXZpb3VzX2NhcHR1cmVkX3NpZ25hbHMgIT09IG51bGwpIHtcblx0XHRcdGZvciAoc2lnbmFsIG9mIGNhcHR1cmVkX3NpZ25hbHMpIHtcblx0XHRcdFx0cHJldmlvdXNfY2FwdHVyZWRfc2lnbmFscy5hZGQoc2lnbmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0Y2FwdHVyZWRfc2lnbmFscyA9IHByZXZpb3VzX2NhcHR1cmVkX3NpZ25hbHM7XG5cdH1cblxuXHRyZXR1cm4gY2FwdHVyZWQ7XG59XG5cbi8qKlxuICogSW52b2tlcyBhIGZ1bmN0aW9uIGFuZCBjYXB0dXJlcyBhbGwgc2lnbmFscyB0aGF0IGFyZSByZWFkIGR1cmluZyB0aGUgaW52b2NhdGlvbixcbiAqIHRoZW4gaW52YWxpZGF0ZXMgdGhlbS5cbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZV9pbm5lcl9zaWduYWxzKGZuKSB7XG5cdHZhciBjYXB0dXJlZCA9IGNhcHR1cmVfc2lnbmFscygoKSA9PiB1bnRyYWNrKGZuKSk7XG5cblx0Zm9yICh2YXIgc2lnbmFsIG9mIGNhcHR1cmVkKSB7XG5cdFx0Ly8gR28gb25lIGxldmVsIHVwIGJlY2F1c2UgZGVyaXZlZCBzaWduYWxzIGNyZWF0ZWQgYXMgcGFydCBvZiBwcm9wcyBpbiBsZWdhY3kgbW9kZVxuXHRcdGlmICgoc2lnbmFsLmYgJiBMRUdBQ1lfREVSSVZFRF9QUk9QKSAhPT0gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBkZXAgb2YgLyoqIEB0eXBlIHtEZXJpdmVkfSAqLyAoc2lnbmFsKS5kZXBzIHx8IFtdKSB7XG5cdFx0XHRcdGlmICgoZGVwLmYgJiBERVJJVkVEKSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFVzZSBpbnRlcm5hbF9zZXQgaW5zdGVhZCBvZiBzZXQgaGVyZSBhbmQgYmVsb3cgdG8gYXZvaWQgbXV0YXRpb24gdmFsaWRhdGlvblxuXHRcdFx0XHRcdGludGVybmFsX3NldChkZXAsIGRlcC52KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbnRlcm5hbF9zZXQoc2lnbmFsLCBzaWduYWwudik7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogV2hlbiB1c2VkIGluc2lkZSBhIFtgJGRlcml2ZWRgXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUvJGRlcml2ZWQpIG9yIFtgJGVmZmVjdGBdKGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS8kZWZmZWN0KSxcbiAqIGFueSBzdGF0ZSByZWFkIGluc2lkZSBgZm5gIHdpbGwgbm90IGJlIHRyZWF0ZWQgYXMgYSBkZXBlbmRlbmN5LlxuICpcbiAqIGBgYHRzXG4gKiAkZWZmZWN0KCgpID0+IHtcbiAqICAgLy8gdGhpcyB3aWxsIHJ1biB3aGVuIGBkYXRhYCBjaGFuZ2VzLCBidXQgbm90IHdoZW4gYHRpbWVgIGNoYW5nZXNcbiAqICAgc2F2ZShkYXRhLCB7XG4gKiAgICAgdGltZXN0YW1wOiB1bnRyYWNrKCgpID0+IHRpbWUpXG4gKiAgIH0pO1xuICogfSk7XG4gKiBgYGBcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZuXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVudHJhY2soZm4pIHtcblx0Y29uc3QgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdHRyeSB7XG5cdFx0YWN0aXZlX3JlYWN0aW9uID0gbnVsbDtcblx0XHRyZXR1cm4gZm4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHRhY3RpdmVfcmVhY3Rpb24gPSBwcmV2aW91c19yZWFjdGlvbjtcblx0fVxufVxuXG5jb25zdCBTVEFUVVNfTUFTSyA9IH4oRElSVFkgfCBNQVlCRV9ESVJUWSB8IENMRUFOKTtcblxuLyoqXG4gKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zaWduYWxfc3RhdHVzKHNpZ25hbCwgc3RhdHVzKSB7XG5cdHNpZ25hbC5mID0gKHNpZ25hbC5mICYgU1RBVFVTX01BU0spIHwgc3RhdHVzO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY29udGV4dCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYGtleWAuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2FueX0ga2V5XG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG5cdGNvbnN0IGNvbnRleHRfbWFwID0gZ2V0X29yX2luaXRfY29udGV4dF9tYXAoJ2dldENvbnRleHQnKTtcblx0Y29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHtUfSAqLyAoY29udGV4dF9tYXAuZ2V0KGtleSkpO1xuXG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBmbiA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dH0gKi8gKGNvbXBvbmVudF9jb250ZXh0KS5mdW5jdGlvbjtcblx0XHRpZiAoZm4pIHtcblx0XHRcdGFkZF9vd25lcihyZXN1bHQsIGZuLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc29jaWF0ZXMgYW4gYXJiaXRyYXJ5IGBjb250ZXh0YCBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBjb21wb25lbnQgYW5kIHRoZSBzcGVjaWZpZWQgYGtleWBcbiAqIGFuZCByZXR1cm5zIHRoYXQgb2JqZWN0LiBUaGUgY29udGV4dCBpcyB0aGVuIGF2YWlsYWJsZSB0byBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50XG4gKiAoaW5jbHVkaW5nIHNsb3R0ZWQgY29udGVudCkgd2l0aCBgZ2V0Q29udGV4dGAuXG4gKlxuICogTGlrZSBsaWZlY3ljbGUgZnVuY3Rpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEBwYXJhbSB7VH0gY29udGV4dFxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuXHRjb25zdCBjb250ZXh0X21hcCA9IGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdzZXRDb250ZXh0Jyk7XG5cdGNvbnRleHRfbWFwLnNldChrZXksIGNvbnRleHQpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIGdpdmVuIGBrZXlgIGhhcyBiZWVuIHNldCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBjb21wb25lbnQuXG4gKiBNdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7YW55fSBrZXlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcblx0Y29uc3QgY29udGV4dF9tYXAgPSBnZXRfb3JfaW5pdF9jb250ZXh0X21hcCgnaGFzQ29udGV4dCcpO1xuXHRyZXR1cm4gY29udGV4dF9tYXAuaGFzKGtleSk7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSB3aG9sZSBjb250ZXh0IG1hcCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uIFVzZWZ1bCwgZm9yIGV4YW1wbGUsIGlmIHlvdVxuICogcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSBjb21wb25lbnQgYW5kIHdhbnQgdG8gcGFzcyB0aGUgZXhpc3RpbmcgY29udGV4dCB0byBpdC5cbiAqXG4gKiBAdGVtcGxhdGUge01hcDxhbnksIGFueT59IFtUPU1hcDxhbnksIGFueT5dXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbENvbnRleHRzKCkge1xuXHRjb25zdCBjb250ZXh0X21hcCA9IGdldF9vcl9pbml0X2NvbnRleHRfbWFwKCdnZXRBbGxDb250ZXh0cycpO1xuXG5cdGlmIChERVYpIHtcblx0XHRjb25zdCBmbiA9IGNvbXBvbmVudF9jb250ZXh0Py5mdW5jdGlvbjtcblx0XHRpZiAoZm4pIHtcblx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgY29udGV4dF9tYXAudmFsdWVzKCkpIHtcblx0XHRcdFx0YWRkX293bmVyKHZhbHVlLCBmbiwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKGNvbnRleHRfbWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge01hcDx1bmtub3duLCB1bmtub3duPn1cbiAqL1xuZnVuY3Rpb24gZ2V0X29yX2luaXRfY29udGV4dF9tYXAobmFtZSkge1xuXHRpZiAoY29tcG9uZW50X2NvbnRleHQgPT09IG51bGwpIHtcblx0XHRsaWZlY3ljbGVfb3V0c2lkZV9jb21wb25lbnQobmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gKGNvbXBvbmVudF9jb250ZXh0LmMgPz89IG5ldyBNYXAoZ2V0X3BhcmVudF9jb250ZXh0KGNvbXBvbmVudF9jb250ZXh0KSB8fCB1bmRlZmluZWQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0NvbXBvbmVudENvbnRleHR9IGNvbXBvbmVudF9jb250ZXh0XG4gKiBAcmV0dXJucyB7TWFwPHVua25vd24sIHVua25vd24+IHwgbnVsbH1cbiAqL1xuZnVuY3Rpb24gZ2V0X3BhcmVudF9jb250ZXh0KGNvbXBvbmVudF9jb250ZXh0KSB7XG5cdGxldCBwYXJlbnQgPSBjb21wb25lbnRfY29udGV4dC5wO1xuXHR3aGlsZSAocGFyZW50ICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgY29udGV4dF9tYXAgPSBwYXJlbnQuYztcblx0XHRpZiAoY29udGV4dF9tYXAgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBjb250ZXh0X21hcDtcblx0XHR9XG5cdFx0cGFyZW50ID0gcGFyZW50LnA7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtudW1iZXIgfCBiaWdpbnR9IFRcbiAqIEBwYXJhbSB7VmFsdWU8VD59IHNpZ25hbFxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc2lnbmFsLCBkID0gMSkge1xuXHR2YXIgdmFsdWUgPSBnZXQoc2lnbmFsKTtcblx0dmFyIHJlc3VsdCA9IGQgPT09IDEgPyB2YWx1ZSsrIDogdmFsdWUtLTtcblxuXHRzZXQoc2lnbmFsLCB2YWx1ZSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7bnVtYmVyIHwgYmlnaW50fSBUXG4gKiBAcGFyYW0ge1ZhbHVlPFQ+fSBzaWduYWxcbiAqIEBwYXJhbSB7MSB8IC0xfSBbZF1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3ByZShzaWduYWwsIGQgPSAxKSB7XG5cdHZhciB2YWx1ZSA9IGdldChzaWduYWwpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0cmV0dXJuIHNldChzaWduYWwsIGQgPT09IDEgPyArK3ZhbHVlIDogLS12YWx1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGNsdWRlX2Zyb21fb2JqZWN0KG9iaiwga2V5cykge1xuXHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuXHR2YXIgcmVzdWx0ID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG9iaikge1xuXHRcdGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IG9ialtrZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gcHJvcHNcbiAqIEBwYXJhbSB7YW55fSBydW5lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKHByb3BzLCBydW5lcyA9IGZhbHNlLCBmbikge1xuXHRjb21wb25lbnRfY29udGV4dCA9IHtcblx0XHRwOiBjb21wb25lbnRfY29udGV4dCxcblx0XHRjOiBudWxsLFxuXHRcdGU6IG51bGwsXG5cdFx0bTogZmFsc2UsXG5cdFx0czogcHJvcHMsXG5cdFx0eDogbnVsbCxcblx0XHRsOiBudWxsXG5cdH07XG5cblx0aWYgKGxlZ2FjeV9tb2RlX2ZsYWcgJiYgIXJ1bmVzKSB7XG5cdFx0Y29tcG9uZW50X2NvbnRleHQubCA9IHtcblx0XHRcdHM6IG51bGwsXG5cdFx0XHR1OiBudWxsLFxuXHRcdFx0cjE6IFtdLFxuXHRcdFx0cjI6IHNvdXJjZShmYWxzZSlcblx0XHR9O1xuXHR9XG5cblx0aWYgKERFVikge1xuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGNvbXBvbmVudF9jb250ZXh0LmZ1bmN0aW9uID0gZm47XG5cdFx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gZm47XG5cdH1cbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge1JlY29yZDxzdHJpbmcsIGFueT59IFRcbiAqIEBwYXJhbSB7VH0gW2NvbXBvbmVudF1cbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9wKGNvbXBvbmVudCkge1xuXHRjb25zdCBjb250ZXh0X3N0YWNrX2l0ZW0gPSBjb21wb25lbnRfY29udGV4dDtcblx0aWYgKGNvbnRleHRfc3RhY2tfaXRlbSAhPT0gbnVsbCkge1xuXHRcdGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dF9zdGFja19pdGVtLnggPSBjb21wb25lbnQ7XG5cdFx0fVxuXHRcdGNvbnN0IGNvbXBvbmVudF9lZmZlY3RzID0gY29udGV4dF9zdGFja19pdGVtLmU7XG5cdFx0aWYgKGNvbXBvbmVudF9lZmZlY3RzICE9PSBudWxsKSB7XG5cdFx0XHR2YXIgcHJldmlvdXNfZWZmZWN0ID0gYWN0aXZlX2VmZmVjdDtcblx0XHRcdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0XHRcdGNvbnRleHRfc3RhY2tfaXRlbS5lID0gbnVsbDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50X2VmZmVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY29tcG9uZW50X2VmZmVjdCA9IGNvbXBvbmVudF9lZmZlY3RzW2ldO1xuXHRcdFx0XHRcdHNldF9hY3RpdmVfZWZmZWN0KGNvbXBvbmVudF9lZmZlY3QuZWZmZWN0KTtcblx0XHRcdFx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKGNvbXBvbmVudF9lZmZlY3QucmVhY3Rpb24pO1xuXHRcdFx0XHRcdGVmZmVjdChjb21wb25lbnRfZWZmZWN0LmZuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0XHRcdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbXBvbmVudF9jb250ZXh0ID0gY29udGV4dF9zdGFja19pdGVtLnA7XG5cdFx0aWYgKERFVikge1xuXHRcdFx0ZGV2X2N1cnJlbnRfY29tcG9uZW50X2Z1bmN0aW9uID0gY29udGV4dF9zdGFja19pdGVtLnA/LmZ1bmN0aW9uID8/IG51bGw7XG5cdFx0fVxuXHRcdGNvbnRleHRfc3RhY2tfaXRlbS5tID0gdHJ1ZTtcblx0fVxuXHQvLyBNaWNyby1vcHRpbWl6YXRpb246IERvbid0IHNldCAuYSBhYm92ZSB0byB0aGUgZW1wdHkgb2JqZWN0XG5cdC8vIHNvIGl0IGNhbiBiZSBnYXJiYWdlLWNvbGxlY3RlZCB3aGVuIHRoZSByZXR1cm4gaGVyZSBpcyB1bnVzZWRcblx0cmV0dXJuIGNvbXBvbmVudCB8fCAvKiogQHR5cGUge1R9ICovICh7fSk7XG59XG5cbi8qKlxuICogUG9zc2libHkgdHJhdmVyc2UgYW4gb2JqZWN0IGFuZCByZWFkIGFsbCBpdHMgcHJvcGVydGllcyBzbyB0aGF0IHRoZXkncmUgYWxsIHJlYWN0aXZlIGluIGNhc2UgdGhpcyBpcyBgJHN0YXRlYC5cbiAqIERvZXMgb25seSBjaGVjayBmaXJzdCBsZXZlbCBvZiBhbiBvYmplY3QgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKGhldXJpc3RpYyBzaG91bGQgYmUgZ29vZCBmb3IgOTklIG9mIGFsbCBjYXNlcykuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcF9yZWFkX3N0YXRlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICF2YWx1ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50VGFyZ2V0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFNUQVRFX1NZTUJPTCBpbiB2YWx1ZSkge1xuXHRcdGRlZXBfcmVhZCh2YWx1ZSk7XG5cdH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0Zm9yIChsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRjb25zdCBwcm9wID0gdmFsdWVba2V5XTtcblx0XHRcdGlmICh0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgJiYgcHJvcCAmJiBTVEFURV9TWU1CT0wgaW4gcHJvcCkge1xuXHRcdFx0XHRkZWVwX3JlYWQocHJvcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogRGVlcGx5IHRyYXZlcnNlIGFuIG9iamVjdCBhbmQgcmVhZCBhbGwgaXRzIHByb3BlcnRpZXNcbiAqIHNvIHRoYXQgdGhleSdyZSBhbGwgcmVhY3RpdmUgaW4gY2FzZSB0aGlzIGlzIGAkc3RhdGVgXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7U2V0PGFueT59IHZpc2l0ZWRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcF9yZWFkKHZhbHVlLCB2aXNpdGVkID0gbmV3IFNldCgpKSB7XG5cdGlmIChcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHQvLyBXZSBkb24ndCB3YW50IHRvIHRyYXZlcnNlIERPTSBlbGVtZW50c1xuXHRcdCEodmFsdWUgaW5zdGFuY2VvZiBFdmVudFRhcmdldCkgJiZcblx0XHQhdmlzaXRlZC5oYXModmFsdWUpXG5cdCkge1xuXHRcdHZpc2l0ZWQuYWRkKHZhbHVlKTtcblx0XHQvLyBXaGVuIHdvcmtpbmcgd2l0aCBhIHBvc3NpYmxlIFN2ZWx0ZURhdGUsIHRoaXNcblx0XHQvLyB3aWxsIGVuc3VyZSB3ZSBjYXB0dXJlIGNoYW5nZXMgdG8gaXQuXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0dmFsdWUuZ2V0VGltZSgpO1xuXHRcdH1cblx0XHRmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRlZXBfcmVhZCh2YWx1ZVtrZXldLCB2aXNpdGVkKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gY29udGludWVcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgcHJvdG8gPSBnZXRfcHJvdG90eXBlX29mKHZhbHVlKTtcblx0XHRpZiAoXG5cdFx0XHRwcm90byAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJlxuXHRcdFx0cHJvdG8gIT09IEFycmF5LnByb3RvdHlwZSAmJlxuXHRcdFx0cHJvdG8gIT09IE1hcC5wcm90b3R5cGUgJiZcblx0XHRcdHByb3RvICE9PSBTZXQucHJvdG90eXBlICYmXG5cdFx0XHRwcm90byAhPT0gRGF0ZS5wcm90b3R5cGVcblx0XHQpIHtcblx0XHRcdGNvbnN0IGRlc2NyaXB0b3JzID0gZ2V0X2Rlc2NyaXB0b3JzKHByb3RvKTtcblx0XHRcdGZvciAobGV0IGtleSBpbiBkZXNjcmlwdG9ycykge1xuXHRcdFx0XHRjb25zdCBnZXQgPSBkZXNjcmlwdG9yc1trZXldLmdldDtcblx0XHRcdFx0aWYgKGdldCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRnZXQuY2FsbCh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0Ly8gY29udGludWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaWYgKERFVikge1xuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJ1bmVcblx0ICovXG5cdGZ1bmN0aW9uIHRocm93X3J1bmVfZXJyb3IocnVuZSkge1xuXHRcdGlmICghKHJ1bmUgaW4gZ2xvYmFsVGhpcykpIHtcblx0XHRcdC8vIFRPRE8gaWYgcGVvcGxlIHN0YXJ0IGFkanVzdGluZyB0aGUgXCJ0aGlzIGNhbiBjb250YWluIHJ1bmVzXCIgY29uZmlnIHRocm91Z2ggdi1wLXMgbW9yZSwgYWRqdXN0IHRoaXMgbWVzc2FnZVxuXHRcdFx0LyoqIEB0eXBlIHthbnl9ICovXG5cdFx0XHRsZXQgdmFsdWU7IC8vIGxldCdzIGhvcGUgbm9vbmUgbW9kaWZpZXMgdGhpcyBnbG9iYWwsIGJ1dCBiZWx0cyBhbmQgYnJhY2VzXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgcnVuZSwge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnZXR0ZXItcmV0dXJuXG5cdFx0XHRcdGdldDogKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZS5ydW5lX291dHNpZGVfc3ZlbHRlKHJ1bmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6ICh2KSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR0aHJvd19ydW5lX2Vycm9yKCckc3RhdGUnKTtcblx0dGhyb3dfcnVuZV9lcnJvcignJGVmZmVjdCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckZGVyaXZlZCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckaW5zcGVjdCcpO1xuXHR0aHJvd19ydW5lX2Vycm9yKCckcHJvcHMnKTtcblx0dGhyb3dfcnVuZV9lcnJvcignJGJpbmRhYmxlJyk7XG59XG4iLCIvKiogQGltcG9ydCB7IFNvdXJjZUxvY2F0aW9uIH0gZnJvbSAnI3NoYXJlZCcgKi9cbmltcG9ydCB7IEhZRFJBVElPTl9FTkQsIEhZRFJBVElPTl9TVEFSVCwgSFlEUkFUSU9OX1NUQVJUX0VMU0UgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgaHlkcmF0aW5nIH0gZnJvbSAnLi4vZG9tL2h5ZHJhdGlvbi5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGZuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U291cmNlTG9jYXRpb25bXX0gbG9jYXRpb25zXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkX2xvY2F0aW9ucyhmbiwgZmlsZW5hbWUsIGxvY2F0aW9ucykge1xuXHRyZXR1cm4gKC8qKiBAdHlwZSB7YW55W119ICovIC4uLmFyZ3MpID0+IHtcblx0XHRjb25zdCBkb20gPSBmbiguLi5hcmdzKTtcblxuXHRcdHZhciBub2RlID0gaHlkcmF0aW5nID8gZG9tIDogZG9tLm5vZGVUeXBlID09PSAxMSA/IGRvbS5maXJzdENoaWxkIDogZG9tO1xuXHRcdGFzc2lnbl9sb2NhdGlvbnMobm9kZSwgZmlsZW5hbWUsIGxvY2F0aW9ucyk7XG5cblx0XHRyZXR1cm4gZG9tO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1NvdXJjZUxvY2F0aW9ufSBsb2NhdGlvblxuICovXG5mdW5jdGlvbiBhc3NpZ25fbG9jYXRpb24oZWxlbWVudCwgZmlsZW5hbWUsIGxvY2F0aW9uKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0ZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuXHRcdGxvYzogeyBmaWxlOiBmaWxlbmFtZSwgbGluZTogbG9jYXRpb25bMF0sIGNvbHVtbjogbG9jYXRpb25bMV0gfVxuXHR9O1xuXG5cdGlmIChsb2NhdGlvblsyXSkge1xuXHRcdGFzc2lnbl9sb2NhdGlvbnMoZWxlbWVudC5maXJzdENoaWxkLCBmaWxlbmFtZSwgbG9jYXRpb25bMl0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlIHwgbnVsbH0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1NvdXJjZUxvY2F0aW9uW119IGxvY2F0aW9uc1xuICovXG5mdW5jdGlvbiBhc3NpZ25fbG9jYXRpb25zKG5vZGUsIGZpbGVuYW1lLCBsb2NhdGlvbnMpIHtcblx0dmFyIGkgPSAwO1xuXHR2YXIgZGVwdGggPSAwO1xuXG5cdHdoaWxlIChub2RlICYmIGkgPCBsb2NhdGlvbnMubGVuZ3RoKSB7XG5cdFx0aWYgKGh5ZHJhdGluZyAmJiBub2RlLm5vZGVUeXBlID09PSA4KSB7XG5cdFx0XHR2YXIgY29tbWVudCA9IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKG5vZGUpO1xuXHRcdFx0aWYgKGNvbW1lbnQuZGF0YSA9PT0gSFlEUkFUSU9OX1NUQVJUIHx8IGNvbW1lbnQuZGF0YSA9PT0gSFlEUkFUSU9OX1NUQVJUX0VMU0UpIGRlcHRoICs9IDE7XG5cdFx0XHRlbHNlIGlmIChjb21tZW50LmRhdGFbMF0gPT09IEhZRFJBVElPTl9FTkQpIGRlcHRoIC09IDE7XG5cdFx0fVxuXG5cdFx0aWYgKGRlcHRoID09PSAwICYmIG5vZGUubm9kZVR5cGUgPT09IDEpIHtcblx0XHRcdGFzc2lnbl9sb2NhdGlvbigvKiogQHR5cGUge0VsZW1lbnR9ICovIChub2RlKSwgZmlsZW5hbWUsIGxvY2F0aW9uc1tpKytdKTtcblx0XHR9XG5cblx0XHRub2RlID0gbm9kZS5uZXh0U2libGluZztcblx0fVxufVxuIiwiaW1wb3J0IHsgdGVhcmRvd24gfSBmcm9tICcuLi8uLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvblxufSBmcm9tICcuLi8uLi8uLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGFkZF9mb3JtX3Jlc2V0X2xpc3RlbmVyIH0gZnJvbSAnLi4vbWlzYy5qcyc7XG5cbi8qKlxuICogRmlyZXMgdGhlIGhhbmRsZXIgb25jZSBpbW1lZGlhdGVseSAodW5sZXNzIGNvcnJlc3BvbmRpbmcgYXJnIGlzIHNldCB0byBgZmFsc2VgKSxcbiAqIHRoZW4gbGlzdGVucyB0byB0aGUgZ2l2ZW4gZXZlbnRzIHVudGlsIHRoZSByZW5kZXIgZWZmZWN0IGNvbnRleHQgaXMgZGVzdHJveWVkXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZXZlbnRzXG4gKiBAcGFyYW0geyhldmVudD86IEV2ZW50KSA9PiB2b2lkfSBoYW5kbGVyXG4gKiBAcGFyYW0ge2FueX0gY2FsbF9oYW5kbGVyX2ltbWVkaWF0ZWx5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCBldmVudHMsIGhhbmRsZXIsIGNhbGxfaGFuZGxlcl9pbW1lZGlhdGVseSA9IHRydWUpIHtcblx0aWYgKGNhbGxfaGFuZGxlcl9pbW1lZGlhdGVseSkge1xuXHRcdGhhbmRsZXIoKTtcblx0fVxuXG5cdGZvciAodmFyIG5hbWUgb2YgZXZlbnRzKSB7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XG5cdH1cblxuXHR0ZWFyZG93bigoKSA9PiB7XG5cdFx0Zm9yICh2YXIgbmFtZSBvZiBldmVudHMpIHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhvdXRfcmVhY3RpdmVfY29udGV4dChmbikge1xuXHR2YXIgcHJldmlvdXNfcmVhY3Rpb24gPSBhY3RpdmVfcmVhY3Rpb247XG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXHRzZXRfYWN0aXZlX3JlYWN0aW9uKG51bGwpO1xuXHRzZXRfYWN0aXZlX2VmZmVjdChudWxsKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZm4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHRzZXRfYWN0aXZlX2VmZmVjdChwcmV2aW91c19lZmZlY3QpO1xuXHR9XG59XG5cbi8qKlxuICogTGlzdGVuIHRvIHRoZSBnaXZlbiBldmVudCwgYW5kIHRoZW4gaW5zdGFudGlhdGUgYSBnbG9iYWwgZm9ybSByZXNldCBsaXN0ZW5lciBpZiBub3QgYWxyZWFkeSBkb25lLFxuICogdG8gbm90aWZ5IGFsbCBiaW5kaW5ncyB3aGVuIHRoZSBmb3JtIGlzIHJlc2V0XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7KGlzX3Jlc2V0PzogdHJ1ZSkgPT4gdm9pZH0gaGFuZGxlclxuICogQHBhcmFtIHsoaXNfcmVzZXQ/OiB0cnVlKSA9PiB2b2lkfSBbb25fcmVzZXRdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5fdG9fZXZlbnRfYW5kX3Jlc2V0X2V2ZW50KGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBvbl9yZXNldCA9IGhhbmRsZXIpIHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB3aXRob3V0X3JlYWN0aXZlX2NvbnRleHQoaGFuZGxlcikpO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGNvbnN0IHByZXYgPSBlbGVtZW50Ll9fb25fcjtcblx0aWYgKHByZXYpIHtcblx0XHQvLyBzcGVjaWFsIGNhc2UgZm9yIGNoZWNrYm94IHRoYXQgY2FuIGhhdmUgbXVsdGlwbGUgYmluZHMgKGdyb3VwICYgY2hlY2tlZClcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudC5fX29uX3IgPSAoKSA9PiB7XG5cdFx0XHRwcmV2KCk7XG5cdFx0XHRvbl9yZXNldCh0cnVlKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50Ll9fb25fciA9ICgpID0+IG9uX3Jlc2V0KHRydWUpO1xuXHR9XG5cblx0YWRkX2Zvcm1fcmVzZXRfbGlzdGVuZXIoKTtcbn1cbiIsIi8qKiBAaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdsb2NhdGUtY2hhcmFjdGVyJyAqL1xuaW1wb3J0IHsgdGVhcmRvd24gfSBmcm9tICcuLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgZGVmaW5lX3Byb3BlcnR5LCBpc19hcnJheSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBoeWRyYXRpbmcgfSBmcm9tICcuLi9oeWRyYXRpb24uanMnO1xuaW1wb3J0IHsgcXVldWVfbWljcm9fdGFzayB9IGZyb20gJy4uL3Rhc2suanMnO1xuaW1wb3J0IHsgRklMRU5BTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi8uLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVfZWZmZWN0LFxuXHRhY3RpdmVfcmVhY3Rpb24sXG5cdHNldF9hY3RpdmVfZWZmZWN0LFxuXHRzZXRfYWN0aXZlX3JlYWN0aW9uXG59IGZyb20gJy4uLy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgd2l0aG91dF9yZWFjdGl2ZV9jb250ZXh0IH0gZnJvbSAnLi9iaW5kaW5ncy9zaGFyZWQuanMnO1xuXG4vKiogQHR5cGUge1NldDxzdHJpbmc+fSAqL1xuZXhwb3J0IGNvbnN0IGFsbF9yZWdpc3RlcmVkX2V2ZW50cyA9IG5ldyBTZXQoKTtcblxuLyoqIEB0eXBlIHtTZXQ8KGV2ZW50czogQXJyYXk8c3RyaW5nPikgPT4gdm9pZD59ICovXG5leHBvcnQgY29uc3Qgcm9vdF9ldmVudF9oYW5kbGVzID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIFNTUiBhZGRzIG9ubG9hZCBhbmQgb25lcnJvciBhdHRyaWJ1dGVzIHRvIGNhdGNoIHRob3NlIGV2ZW50cyBiZWZvcmUgdGhlIGh5ZHJhdGlvbi5cbiAqIFRoaXMgZnVuY3Rpb24gZGV0ZWN0cyB0aG9zZSBjYXNlcywgcmVtb3ZlcyB0aGUgYXR0cmlidXRlcyBhbmQgcmVwbGF5cyB0aGUgZXZlbnRzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYXlfZXZlbnRzKGRvbSkge1xuXHRpZiAoIWh5ZHJhdGluZykgcmV0dXJuO1xuXG5cdGlmIChkb20ub25sb2FkKSB7XG5cdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgnb25sb2FkJyk7XG5cdH1cblx0aWYgKGRvbS5vbmVycm9yKSB7XG5cdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgnb25lcnJvcicpO1xuXHR9XG5cdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0Y29uc3QgZXZlbnQgPSBkb20uX19lO1xuXHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRkb20uX19lID0gdW5kZWZpbmVkO1xuXHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdGlmIChkb20uaXNDb25uZWN0ZWQpIHtcblx0XHRcdFx0ZG9tLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50X25hbWVcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGRvbVxuICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBoYW5kbGVyXG4gKiBAcGFyYW0ge0FkZEV2ZW50TGlzdGVuZXJPcHRpb25zfSBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfZXZlbnQoZXZlbnRfbmFtZSwgZG9tLCBoYW5kbGVyLCBvcHRpb25zKSB7XG5cdC8qKlxuXHQgKiBAdGhpcyB7RXZlbnRUYXJnZXR9XG5cdCAqL1xuXHRmdW5jdGlvbiB0YXJnZXRfaGFuZGxlcigvKiogQHR5cGUge0V2ZW50fSAqLyBldmVudCkge1xuXHRcdGlmICghb3B0aW9ucy5jYXB0dXJlKSB7XG5cdFx0XHQvLyBPbmx5IGNhbGwgaW4gdGhlIGJ1YmJsZSBwaGFzZSwgZWxzZSBkZWxlZ2F0ZWQgZXZlbnRzIHdvdWxkIGJlIGNhbGxlZCBiZWZvcmUgdGhlIGNhcHR1cmluZyBldmVudHNcblx0XHRcdGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbi5jYWxsKGRvbSwgZXZlbnQpO1xuXHRcdH1cblx0XHRpZiAoIWV2ZW50LmNhbmNlbEJ1YmJsZSkge1xuXHRcdFx0cmV0dXJuIHdpdGhvdXRfcmVhY3RpdmVfY29udGV4dCgoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hyb21lIGhhcyBhIGJ1ZyB3aGVyZSBwb2ludGVyIGV2ZW50cyBkb24ndCB3b3JrIHdoZW4gYXR0YWNoZWQgdG8gYSBET00gZWxlbWVudCB0aGF0IGhhcyBiZWVuIGNsb25lZFxuXHQvLyB3aXRoIGNsb25lTm9kZSgpIGFuZCB0aGUgRE9NIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIGRvY3VtZW50LiBUbyBlbnN1cmUgdGhlIGV2ZW50IHdvcmtzLCB3ZVxuXHQvLyBkZWZlciB0aGUgYXR0YWNobWVudCB0aWxsIGFmdGVyIGl0J3MgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuIFRPRE86IHJlbW92ZSB0aGlzIG9uY2UgQ2hyb21lIGZpeGVzXG5cdC8vIHRoaXMgYnVnLiBUaGUgc2FtZSBhcHBsaWVzIHRvIHdoZWVsIGV2ZW50cyBhbmQgdG91Y2ggZXZlbnRzLlxuXHRpZiAoXG5cdFx0ZXZlbnRfbmFtZS5zdGFydHNXaXRoKCdwb2ludGVyJykgfHxcblx0XHRldmVudF9uYW1lLnN0YXJ0c1dpdGgoJ3RvdWNoJykgfHxcblx0XHRldmVudF9uYW1lID09PSAnd2hlZWwnXG5cdCkge1xuXHRcdHF1ZXVlX21pY3JvX3Rhc2soKCkgPT4ge1xuXHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgdGFyZ2V0X2hhbmRsZXIsIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIHRhcmdldF9oYW5kbGVyLCBvcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXRfaGFuZGxlcjtcbn1cblxuLyoqXG4gKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIHRvIGFuIGVsZW1lbnQgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGhhbmRsZXIuIFVzaW5nIHRoaXNcbiAqIHJhdGhlciB0aGFuIGBhZGRFdmVudExpc3RlbmVyYCB3aWxsIHByZXNlcnZlIHRoZSBjb3JyZWN0IG9yZGVyIHJlbGF0aXZlIHRvIGhhbmRsZXJzIGFkZGVkIGRlY2xhcmF0aXZlbHlcbiAqICh3aXRoIGF0dHJpYnV0ZXMgbGlrZSBgb25jbGlja2ApLCB3aGljaCB1c2UgZXZlbnQgZGVsZWdhdGlvbiBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICpcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGhhbmRsZXJcbiAqIEBwYXJhbSB7QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN9IFtvcHRpb25zXVxuICovXG5leHBvcnQgZnVuY3Rpb24gb24oZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG5cdHZhciB0YXJnZXRfaGFuZGxlciA9IGNyZWF0ZV9ldmVudCh0eXBlLCBlbGVtZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCB0YXJnZXRfaGFuZGxlciwgb3B0aW9ucyk7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50X25hbWVcbiAqIEBwYXJhbSB7RWxlbWVudH0gZG9tXG4gKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGhhbmRsZXJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZVxuICogQHBhcmFtIHtib29sZWFufSBbcGFzc2l2ZV1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnQoZXZlbnRfbmFtZSwgZG9tLCBoYW5kbGVyLCBjYXB0dXJlLCBwYXNzaXZlKSB7XG5cdHZhciBvcHRpb25zID0geyBjYXB0dXJlLCBwYXNzaXZlIH07XG5cdHZhciB0YXJnZXRfaGFuZGxlciA9IGNyZWF0ZV9ldmVudChldmVudF9uYW1lLCBkb20sIGhhbmRsZXIsIG9wdGlvbnMpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0aWYgKGRvbSA9PT0gZG9jdW1lbnQuYm9keSB8fCBkb20gPT09IHdpbmRvdyB8fCBkb20gPT09IGRvY3VtZW50KSB7XG5cdFx0dGVhcmRvd24oKCkgPT4ge1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgdGFyZ2V0X2hhbmRsZXIsIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBldmVudHNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZWdhdGUoZXZlbnRzKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0YWxsX3JlZ2lzdGVyZWRfZXZlbnRzLmFkZChldmVudHNbaV0pO1xuXHR9XG5cblx0Zm9yICh2YXIgZm4gb2Ygcm9vdF9ldmVudF9oYW5kbGVzKSB7XG5cdFx0Zm4oZXZlbnRzKTtcblx0fVxufVxuXG4vKipcbiAqIEB0aGlzIHtFdmVudFRhcmdldH1cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZV9ldmVudF9wcm9wYWdhdGlvbihldmVudCkge1xuXHR2YXIgaGFuZGxlcl9lbGVtZW50ID0gdGhpcztcblx0dmFyIG93bmVyX2RvY3VtZW50ID0gLyoqIEB0eXBlIHtOb2RlfSAqLyAoaGFuZGxlcl9lbGVtZW50KS5vd25lckRvY3VtZW50O1xuXHR2YXIgZXZlbnRfbmFtZSA9IGV2ZW50LnR5cGU7XG5cdHZhciBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoPy4oKSB8fCBbXTtcblx0dmFyIGN1cnJlbnRfdGFyZ2V0ID0gLyoqIEB0eXBlIHtudWxsIHwgRWxlbWVudH0gKi8gKHBhdGhbMF0gfHwgZXZlbnQudGFyZ2V0KTtcblxuXHQvLyBjb21wb3NlZFBhdGggY29udGFpbnMgbGlzdCBvZiBub2RlcyB0aGUgZXZlbnQgaGFzIHByb3BhZ2F0ZWQgdGhyb3VnaC5cblx0Ly8gV2UgY2hlY2sgX19yb290IHRvIHNraXAgYWxsIG5vZGVzIGJlbG93IGl0IGluIGNhc2UgdGhpcyBpcyBhXG5cdC8vIHBhcmVudCBvZiB0aGUgX19yb290IG5vZGUsIHdoaWNoIGluZGljYXRlcyB0aGF0IHRoZXJlJ3MgbmVzdGVkXG5cdC8vIG1vdW50ZWQgYXBwcy4gSW4gdGhpcyBjYXNlIHdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciBldmVudHMgbXVsdGlwbGUgdGltZXMuXG5cdHZhciBwYXRoX2lkeCA9IDA7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBpcyBhZGRlZCBiZWxvd1xuXHR2YXIgaGFuZGxlZF9hdCA9IGV2ZW50Ll9fcm9vdDtcblxuXHRpZiAoaGFuZGxlZF9hdCkge1xuXHRcdHZhciBhdF9pZHggPSBwYXRoLmluZGV4T2YoaGFuZGxlZF9hdCk7XG5cdFx0aWYgKFxuXHRcdFx0YXRfaWR4ICE9PSAtMSAmJlxuXHRcdFx0KGhhbmRsZXJfZWxlbWVudCA9PT0gZG9jdW1lbnQgfHwgaGFuZGxlcl9lbGVtZW50ID09PSAvKiogQHR5cGUge2FueX0gKi8gKHdpbmRvdykpXG5cdFx0KSB7XG5cdFx0XHQvLyBUaGlzIGlzIHRoZSBmYWxsYmFjayBkb2N1bWVudCBsaXN0ZW5lciBvciBhIHdpbmRvdyBsaXN0ZW5lciwgYnV0IHRoZSBldmVudCB3YXMgYWxyZWFkeSBoYW5kbGVkXG5cdFx0XHQvLyAtPiBpZ25vcmUsIGJ1dCBzZXQgaGFuZGxlX2F0IHRvIGRvY3VtZW50L3dpbmRvdyBzbyB0aGF0IHdlJ3JlIHJlc2V0dGluZyB0aGUgZXZlbnRcblx0XHRcdC8vIGNoYWluIGluIGNhc2Ugc29tZW9uZSBtYW51YWxseSBkaXNwYXRjaGVzIHRoZSBzYW1lIGV2ZW50IG9iamVjdCBhZ2Fpbi5cblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGV2ZW50Ll9fcm9vdCA9IGhhbmRsZXJfZWxlbWVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXZSdyZSBkZWxpYmVyYXRlbHkgbm90IHNraXBwaW5nIGlmIHRoZSBpbmRleCBpcyBoaWdoZXIsIGJlY2F1c2Vcblx0XHQvLyBzb21lb25lIGNvdWxkIGNyZWF0ZSBhbiBldmVudCBwcm9ncmFtbWF0aWNhbGx5IGFuZCBlbWl0IGl0IG11bHRpcGxlIHRpbWVzLFxuXHRcdC8vIGluIHdoaWNoIGNhc2Ugd2Ugd2FudCB0byBoYW5kbGUgdGhlIHdob2xlIHByb3BhZ2F0aW9uIGNoYWluIHByb3Blcmx5IGVhY2ggdGltZS5cblx0XHQvLyAodGhpcyB3aWxsIG9ubHkgYmUgYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGUgZXZlbnQgaXMgZGlzcGF0Y2hlZCBtdWx0aXBsZSB0aW1lcyBhbmRcblx0XHQvLyB0aGUgZmFsbGJhY2sgZG9jdW1lbnQgbGlzdGVuZXIgaXNuJ3QgcmVhY2hlZCBpbiBiZXR3ZWVuLCBidXQgdGhhdCdzIHN1cGVyIHJhcmUpXG5cdFx0dmFyIGhhbmRsZXJfaWR4ID0gcGF0aC5pbmRleE9mKGhhbmRsZXJfZWxlbWVudCk7XG5cdFx0aWYgKGhhbmRsZXJfaWR4ID09PSAtMSkge1xuXHRcdFx0Ly8gaGFuZGxlX2lkeCBjYW4gdGhlb3JldGljYWxseSBiZSAtMSAoaGFwcGVuZWQgaW4gc29tZSBKU0RPTSB0ZXN0aW5nIHNjZW5hcmlvcyB3aXRoIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSB3aW5kb3cgb2JqZWN0KVxuXHRcdFx0Ly8gc28gZ3VhcmQgYWdhaW5zdCB0aGF0LCB0b28sIGFuZCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIHdhcyBoYW5kbGVkIGF0IHRoaXMgcG9pbnQuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGF0X2lkeCA8PSBoYW5kbGVyX2lkeCkge1xuXHRcdFx0cGF0aF9pZHggPSBhdF9pZHg7XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudF90YXJnZXQgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChwYXRoW3BhdGhfaWR4XSB8fCBldmVudC50YXJnZXQpO1xuXHQvLyB0aGVyZSBjYW4gb25seSBiZSBvbmUgZGVsZWdhdGVkIGV2ZW50IHBlciBlbGVtZW50LCBhbmQgd2UgZWl0aGVyIGFscmVhZHkgaGFuZGxlZCB0aGUgY3VycmVudCB0YXJnZXQsXG5cdC8vIG9yIHRoaXMgaXMgdGhlIHZlcnkgZmlyc3QgdGFyZ2V0IGluIHRoZSBjaGFpbiB3aGljaCBoYXMgYSBub24tZGVsZWdhdGVkIGxpc3RlbmVyLCBpbiB3aGljaCBjYXNlIGl0J3Mgc2FmZVxuXHQvLyB0byBoYW5kbGUgYSBwb3NzaWJsZSBkZWxlZ2F0ZWQgZXZlbnQgb24gaXQgbGF0ZXIgKHRocm91Z2ggdGhlIHJvb3QgZGVsZWdhdGlvbiBsaXN0ZW5lciBmb3IgZXhhbXBsZSkuXG5cdGlmIChjdXJyZW50X3RhcmdldCA9PT0gaGFuZGxlcl9lbGVtZW50KSByZXR1cm47XG5cblx0Ly8gUHJveHkgY3VycmVudFRhcmdldCB0byBjb3JyZWN0IHRhcmdldFxuXHRkZWZpbmVfcHJvcGVydHkoZXZlbnQsICdjdXJyZW50VGFyZ2V0Jywge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gY3VycmVudF90YXJnZXQgfHwgb3duZXJfZG9jdW1lbnQ7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBUaGlzIHN0YXJ0ZWQgYmVjYXVzZSBvZiBDaHJvbWl1bSBpc3N1ZSBodHRwczovL2Nocm9tZXN0YXR1cy5jb20vZmVhdHVyZS81MTI4Njk2ODIzNTQ1ODU2LFxuXHQvLyB3aGVyZSByZW1vdmFsIG9yIG1vdmluZyBvZiBvZiB0aGUgRE9NIGNhbiBjYXVzZSBzeW5jIGBibHVyYCBldmVudHMgdG8gZmlyZSwgd2hpY2ggY2FuIGNhdXNlIGxvZ2ljXG5cdC8vIHRvIHJ1biBpbnNpZGUgdGhlIGN1cnJlbnQgYGFjdGl2ZV9yZWFjdGlvbmAsIHdoaWNoIGlzbid0IHdoYXQgd2Ugd2FudCBhdCBhbGwuIEhvd2V2ZXIsIG9uIHJlZmxlY3Rpb24sXG5cdC8vIGl0J3MgcHJvYmFibHkgYmVzdCB0aGF0IGFsbCBldmVudCBoYW5kbGVkIGJ5IFN2ZWx0ZSBoYXZlIHRoaXMgYmVoYXZpb3VyLCBhcyB3ZSBkb24ndCByZWFsbHkgd2FudFxuXHQvLyBhbiBldmVudCBoYW5kbGVyIHRvIHJ1biBpbiB0aGUgY29udGV4dCBvZiBhbm90aGVyIHJlYWN0aW9uIG9yIGVmZmVjdC5cblx0dmFyIHByZXZpb3VzX3JlYWN0aW9uID0gYWN0aXZlX3JlYWN0aW9uO1xuXHR2YXIgcHJldmlvdXNfZWZmZWN0ID0gYWN0aXZlX2VmZmVjdDtcblx0c2V0X2FjdGl2ZV9yZWFjdGlvbihudWxsKTtcblx0c2V0X2FjdGl2ZV9lZmZlY3QobnVsbCk7XG5cblx0dHJ5IHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7dW5rbm93bn1cblx0XHQgKi9cblx0XHR2YXIgdGhyb3dfZXJyb3I7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3Vua25vd25bXX1cblx0XHQgKi9cblx0XHR2YXIgb3RoZXJfZXJyb3JzID0gW107XG5cblx0XHR3aGlsZSAoY3VycmVudF90YXJnZXQgIT09IG51bGwpIHtcblx0XHRcdC8qKiBAdHlwZSB7bnVsbCB8IEVsZW1lbnR9ICovXG5cdFx0XHR2YXIgcGFyZW50X2VsZW1lbnQgPVxuXHRcdFx0XHRjdXJyZW50X3RhcmdldC5hc3NpZ25lZFNsb3QgfHxcblx0XHRcdFx0Y3VycmVudF90YXJnZXQucGFyZW50Tm9kZSB8fFxuXHRcdFx0XHQvKiogQHR5cGUge2FueX0gKi8gKGN1cnJlbnRfdGFyZ2V0KS5ob3N0IHx8XG5cdFx0XHRcdG51bGw7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0dmFyIGRlbGVnYXRlZCA9IGN1cnJlbnRfdGFyZ2V0WydfXycgKyBldmVudF9uYW1lXTtcblxuXHRcdFx0XHRpZiAoZGVsZWdhdGVkICE9PSB1bmRlZmluZWQgJiYgISgvKiogQHR5cGUge2FueX0gKi8gKGN1cnJlbnRfdGFyZ2V0KS5kaXNhYmxlZCkpIHtcblx0XHRcdFx0XHRpZiAoaXNfYXJyYXkoZGVsZWdhdGVkKSkge1xuXHRcdFx0XHRcdFx0dmFyIFtmbiwgLi4uZGF0YV0gPSBkZWxlZ2F0ZWQ7XG5cdFx0XHRcdFx0XHRmbi5hcHBseShjdXJyZW50X3RhcmdldCwgW2V2ZW50LCAuLi5kYXRhXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlbGVnYXRlZC5jYWxsKGN1cnJlbnRfdGFyZ2V0LCBldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRpZiAodGhyb3dfZXJyb3IpIHtcblx0XHRcdFx0XHRvdGhlcl9lcnJvcnMucHVzaChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3dfZXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSB8fCBwYXJlbnRfZWxlbWVudCA9PT0gaGFuZGxlcl9lbGVtZW50IHx8IHBhcmVudF9lbGVtZW50ID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y3VycmVudF90YXJnZXQgPSBwYXJlbnRfZWxlbWVudDtcblx0XHR9XG5cblx0XHRpZiAodGhyb3dfZXJyb3IpIHtcblx0XHRcdGZvciAobGV0IGVycm9yIG9mIG90aGVyX2Vycm9ycykge1xuXHRcdFx0XHQvLyBUaHJvdyB0aGUgcmVzdCBvZiB0aGUgZXJyb3JzLCBvbmUtYnktb25lIG9uIGEgbWljcm90YXNrXG5cdFx0XHRcdHF1ZXVlTWljcm90YXNrKCgpID0+IHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyB0aHJvd19lcnJvcjtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBpcyB1c2VkIGFib3ZlXG5cdFx0ZXZlbnQuX19yb290ID0gaGFuZGxlcl9lbGVtZW50O1xuXHRcdC8vIEB0cy1pZ25vcmUgcmVtb3ZlIHByb3h5IG9uIGN1cnJlbnRUYXJnZXRcblx0XHRkZWxldGUgZXZlbnQuY3VycmVudFRhcmdldDtcblx0XHRzZXRfYWN0aXZlX3JlYWN0aW9uKHByZXZpb3VzX3JlYWN0aW9uKTtcblx0XHRzZXRfYWN0aXZlX2VmZmVjdChwcmV2aW91c19lZmZlY3QpO1xuXHR9XG59XG5cbi8qKlxuICogSW4gZGV2LCB3YXJuIGlmIGFuIGV2ZW50IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24sIGFzIGl0IG1lYW5zIHRoZVxuICogdXNlciBwcm9iYWJseSBjYWxsZWQgdGhlIGhhbmRsZXIgb3IgZm9yZ290IHRvIGFkZCBhIGAoKSA9PmBcbiAqIEBwYXJhbSB7KCkgPT4gKGV2ZW50OiBFdmVudCwgLi4uYXJnczogYW55KSA9PiB2b2lkfSB0aHVua1xuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWxlbWVudFxuICogQHBhcmFtIHtbRXZlbnQsIC4uLmFueV19IGFyZ3NcbiAqIEBwYXJhbSB7YW55fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7W251bWJlciwgbnVtYmVyXX0gW2xvY11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbW92ZV9wYXJlbnNdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShcblx0dGh1bmssXG5cdGVsZW1lbnQsXG5cdGFyZ3MsXG5cdGNvbXBvbmVudCxcblx0bG9jLFxuXHRoYXNfc2lkZV9lZmZlY3RzID0gZmFsc2UsXG5cdHJlbW92ZV9wYXJlbnMgPSBmYWxzZVxuKSB7XG5cdGxldCBoYW5kbGVyO1xuXHRsZXQgZXJyb3I7XG5cblx0dHJ5IHtcblx0XHRoYW5kbGVyID0gdGh1bmsoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGVycm9yID0gZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncyk7XG5cdH0gZWxzZSBpZiAoaGFzX3NpZGVfZWZmZWN0cyB8fCBoYW5kbGVyICE9IG51bGwgfHwgZXJyb3IpIHtcblx0XHRjb25zdCBmaWxlbmFtZSA9IGNvbXBvbmVudD8uW0ZJTEVOQU1FXTtcblx0XHRjb25zdCBsb2NhdGlvbiA9IGxvYyA/IGAgYXQgJHtmaWxlbmFtZX06JHtsb2NbMF19OiR7bG9jWzFdfWAgOiBgIGluICR7ZmlsZW5hbWV9YDtcblxuXHRcdGNvbnN0IGV2ZW50X25hbWUgPSBhcmdzWzBdLnR5cGU7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBgXFxgJHtldmVudF9uYW1lfVxcYCBoYW5kbGVyJHtsb2NhdGlvbn1gO1xuXHRcdGNvbnN0IHN1Z2dlc3Rpb24gPSByZW1vdmVfcGFyZW5zID8gJ3JlbW92ZSB0aGUgdHJhaWxpbmcgYCgpYCcgOiAnYWRkIGEgbGVhZGluZyBgKCkgPT5gJztcblxuXHRcdHcuZXZlbnRfaGFuZGxlcl9pbnZhbGlkKGRlc2NyaXB0aW9uLCBzdWdnZXN0aW9uKTtcblxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG4iLCIvKiogQHBhcmFtIHtzdHJpbmd9IGh0bWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnRfZnJvbV9odG1sKGh0bWwpIHtcblx0dmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHRlbGVtLmlubmVySFRNTCA9IGh0bWw7XG5cdHJldHVybiBlbGVtLmNvbnRlbnQ7XG59XG4iLCIvKiogQGltcG9ydCB7IEVmZmVjdCwgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IGh5ZHJhdGVfbmV4dCwgaHlkcmF0ZV9ub2RlLCBoeWRyYXRpbmcsIHNldF9oeWRyYXRlX25vZGUgfSBmcm9tICcuL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVfdGV4dCwgZ2V0X2ZpcnN0X2NoaWxkIH0gZnJvbSAnLi9vcGVyYXRpb25zLmpzJztcbmltcG9ydCB7IGNyZWF0ZV9mcmFnbWVudF9mcm9tX2h0bWwgfSBmcm9tICcuL3JlY29uY2lsZXIuanMnO1xuaW1wb3J0IHsgYWN0aXZlX2VmZmVjdCB9IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgVEVNUExBVEVfRlJBR01FTlQsIFRFTVBMQVRFX1VTRV9JTVBPUlRfTk9ERSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IHN0YXJ0XG4gKiBAcGFyYW0ge1RlbXBsYXRlTm9kZSB8IG51bGx9IGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpIHtcblx0dmFyIGVmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCk7XG5cdGlmIChlZmZlY3Qubm9kZXNfc3RhcnQgPT09IG51bGwpIHtcblx0XHRlZmZlY3Qubm9kZXNfc3RhcnQgPSBzdGFydDtcblx0XHRlZmZlY3Qubm9kZXNfZW5kID0gZW5kO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKGNvbnRlbnQsIGZsYWdzKSB7XG5cdHZhciBpc19mcmFnbWVudCA9IChmbGFncyAmIFRFTVBMQVRFX0ZSQUdNRU5UKSAhPT0gMDtcblx0dmFyIHVzZV9pbXBvcnRfbm9kZSA9IChmbGFncyAmIFRFTVBMQVRFX1VTRV9JTVBPUlRfTk9ERSkgIT09IDA7XG5cblx0LyoqIEB0eXBlIHtOb2RlfSAqL1xuXHR2YXIgbm9kZTtcblxuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdGhlIGZpcnN0IGl0ZW0gaXMgYSB0ZXh0L2VsZW1lbnQgbm9kZS4gSWYgbm90LCB3ZSBuZWVkIHRvXG5cdCAqIGNyZWF0ZSBhbiBhZGRpdGlvbmFsIGNvbW1lbnQgbm9kZSB0byBhY3QgYXMgYGVmZmVjdC5ub2Rlcy5zdGFydGBcblx0ICovXG5cdHZhciBoYXNfc3RhcnQgPSAhY29udGVudC5zdGFydHNXaXRoKCc8IT4nKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmIChoeWRyYXRpbmcpIHtcblx0XHRcdGFzc2lnbl9ub2RlcyhoeWRyYXRlX25vZGUsIG51bGwpO1xuXHRcdFx0cmV0dXJuIGh5ZHJhdGVfbm9kZTtcblx0XHR9XG5cblx0XHRpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRub2RlID0gY3JlYXRlX2ZyYWdtZW50X2Zyb21faHRtbChoYXNfc3RhcnQgPyBjb250ZW50IDogJzwhPicgKyBjb250ZW50KTtcblx0XHRcdGlmICghaXNfZnJhZ21lbnQpIG5vZGUgPSAvKiogQHR5cGUge05vZGV9ICovIChnZXRfZmlyc3RfY2hpbGQobm9kZSkpO1xuXHRcdH1cblxuXHRcdHZhciBjbG9uZSA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoXG5cdFx0XHR1c2VfaW1wb3J0X25vZGUgPyBkb2N1bWVudC5pbXBvcnROb2RlKG5vZGUsIHRydWUpIDogbm9kZS5jbG9uZU5vZGUodHJ1ZSlcblx0XHQpO1xuXG5cdFx0aWYgKGlzX2ZyYWdtZW50KSB7XG5cdFx0XHR2YXIgc3RhcnQgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZChjbG9uZSkpO1xuXHRcdFx0dmFyIGVuZCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoY2xvbmUubGFzdENoaWxkKTtcblxuXHRcdFx0YXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoY2xvbmUsIGNsb25lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlX3dpdGhfc2NyaXB0KGNvbnRlbnQsIGZsYWdzKSB7XG5cdHZhciBmbiA9IHRlbXBsYXRlKGNvbnRlbnQsIGZsYWdzKTtcblx0cmV0dXJuICgpID0+IHJ1bl9zY3JpcHRzKC8qKiBAdHlwZSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9ICovIChmbigpKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHBhcmFtIHsnc3ZnJyB8ICdtYXRoJ30gbnNcbiAqIEByZXR1cm5zIHsoKSA9PiBOb2RlIHwgTm9kZVtdfVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBuc190ZW1wbGF0ZShjb250ZW50LCBmbGFncywgbnMgPSAnc3ZnJykge1xuXHQvKipcblx0ICogV2hldGhlciBvciBub3QgdGhlIGZpcnN0IGl0ZW0gaXMgYSB0ZXh0L2VsZW1lbnQgbm9kZS4gSWYgbm90LCB3ZSBuZWVkIHRvXG5cdCAqIGNyZWF0ZSBhbiBhZGRpdGlvbmFsIGNvbW1lbnQgbm9kZSB0byBhY3QgYXMgYGVmZmVjdC5ub2Rlcy5zdGFydGBcblx0ICovXG5cdHZhciBoYXNfc3RhcnQgPSAhY29udGVudC5zdGFydHNXaXRoKCc8IT4nKTtcblxuXHR2YXIgaXNfZnJhZ21lbnQgPSAoZmxhZ3MgJiBURU1QTEFURV9GUkFHTUVOVCkgIT09IDA7XG5cdHZhciB3cmFwcGVkID0gYDwke25zfT4ke2hhc19zdGFydCA/IGNvbnRlbnQgOiAnPCE+JyArIGNvbnRlbnR9PC8ke25zfT5gO1xuXG5cdC8qKiBAdHlwZSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9ICovXG5cdHZhciBub2RlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKGh5ZHJhdGluZykge1xuXHRcdFx0YXNzaWduX25vZGVzKGh5ZHJhdGVfbm9kZSwgbnVsbCk7XG5cdFx0XHRyZXR1cm4gaHlkcmF0ZV9ub2RlO1xuXHRcdH1cblxuXHRcdGlmICghbm9kZSkge1xuXHRcdFx0dmFyIGZyYWdtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudEZyYWdtZW50fSAqLyAoY3JlYXRlX2ZyYWdtZW50X2Zyb21faHRtbCh3cmFwcGVkKSk7XG5cdFx0XHR2YXIgcm9vdCA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGdldF9maXJzdF9jaGlsZChmcmFnbWVudCkpO1xuXG5cdFx0XHRpZiAoaXNfZnJhZ21lbnQpIHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0d2hpbGUgKGdldF9maXJzdF9jaGlsZChyb290KSkge1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoLyoqIEB0eXBlIHtOb2RlfSAqLyAoZ2V0X2ZpcnN0X2NoaWxkKHJvb3QpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChnZXRfZmlyc3RfY2hpbGQocm9vdCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjbG9uZSA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuXG5cdFx0aWYgKGlzX2ZyYWdtZW50KSB7XG5cdFx0XHR2YXIgc3RhcnQgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZChjbG9uZSkpO1xuXHRcdFx0dmFyIGVuZCA9IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoY2xvbmUubGFzdENoaWxkKTtcblxuXHRcdFx0YXNzaWduX25vZGVzKHN0YXJ0LCBlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhc3NpZ25fbm9kZXMoY2xvbmUsIGNsb25lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2xvbmU7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHJldHVybnMgeygpID0+IE5vZGUgfCBOb2RlW119XG4gKi9cbi8qI19fTk9fU0lERV9FRkZFQ1RTX18qL1xuZXhwb3J0IGZ1bmN0aW9uIHN2Z190ZW1wbGF0ZV93aXRoX3NjcmlwdChjb250ZW50LCBmbGFncykge1xuXHR2YXIgZm4gPSBuc190ZW1wbGF0ZShjb250ZW50LCBmbGFncyk7XG5cdHJldHVybiAoKSA9PiBydW5fc2NyaXB0cygvKiogQHR5cGUge0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSAqLyAoZm4oKSkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge251bWJlcn0gZmxhZ3NcbiAqIEByZXR1cm5zIHsoKSA9PiBOb2RlIHwgTm9kZVtdfVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRobWxfdGVtcGxhdGUoY29udGVudCwgZmxhZ3MpIHtcblx0cmV0dXJuIG5zX3RlbXBsYXRlKGNvbnRlbnQsIGZsYWdzLCAnbWF0aCcpO1xufVxuXG4vKipcbiAqIENyZWF0aW5nIGEgZG9jdW1lbnQgZnJhZ21lbnQgZnJvbSBIVE1MIHRoYXQgY29udGFpbnMgc2NyaXB0IHRhZ3Mgd2lsbCBub3QgZXhlY3V0ZVxuICogdGhlIHNjcmlwdHMuIFdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgc2NyaXB0IHRhZ3Mgd2l0aCBuZXcgb25lcyBzbyB0aGF0IHRoZXkgYXJlIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gbm9kZVxuICogQHJldHVybnMge05vZGUgfCBOb2RlW119XG4gKi9cbmZ1bmN0aW9uIHJ1bl9zY3JpcHRzKG5vZGUpIHtcblx0Ly8gc2NyaXB0cyB3ZXJlIFNTUidkLCBpbiB3aGljaCBjYXNlIHRoZXkgd2lsbCBydW5cblx0aWYgKGh5ZHJhdGluZykgcmV0dXJuIG5vZGU7XG5cblx0Y29uc3QgaXNfZnJhZ21lbnQgPSBub2RlLm5vZGVUeXBlID09PSAxMTtcblx0Y29uc3Qgc2NyaXB0cyA9XG5cdFx0LyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8gKG5vZGUpLnRhZ05hbWUgPT09ICdTQ1JJUFQnXG5cdFx0XHQ/IFsvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqLyAobm9kZSldXG5cdFx0XHQ6IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG5cdGNvbnN0IGVmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCk7XG5cblx0Zm9yIChjb25zdCBzY3JpcHQgb2Ygc2NyaXB0cykge1xuXHRcdGNvbnN0IGNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0Zm9yICh2YXIgYXR0cmlidXRlIG9mIHNjcmlwdC5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRjbG9uZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG5cdFx0fVxuXG5cdFx0Y2xvbmUudGV4dENvbnRlbnQgPSBzY3JpcHQudGV4dENvbnRlbnQ7XG5cblx0XHQvLyBUaGUgc2NyaXB0IGhhcyBjaGFuZ2VkIC0gaWYgaXQncyBhdCB0aGUgZWRnZXMsIHRoZSBlZmZlY3Qgbm93IHBvaW50cyBhdCBkZWFkIG5vZGVzXG5cdFx0aWYgKGlzX2ZyYWdtZW50ID8gbm9kZS5maXJzdENoaWxkID09PSBzY3JpcHQgOiBub2RlID09PSBzY3JpcHQpIHtcblx0XHRcdGVmZmVjdC5ub2Rlc19zdGFydCA9IGNsb25lO1xuXHRcdH1cblx0XHRpZiAoaXNfZnJhZ21lbnQgPyBub2RlLmxhc3RDaGlsZCA9PT0gc2NyaXB0IDogbm9kZSA9PT0gc2NyaXB0KSB7XG5cdFx0XHRlZmZlY3Qubm9kZXNfZW5kID0gY2xvbmU7XG5cdFx0fVxuXG5cdFx0c2NyaXB0LnJlcGxhY2VXaXRoKGNsb25lKTtcblx0fVxuXHRyZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBEb24ndCBtYXJrIHRoaXMgYXMgc2lkZS1lZmZlY3QtZnJlZSwgaHlkcmF0aW9uIG5lZWRzIHRvIHdhbGsgYWxsIG5vZGVzXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRleHQodmFsdWUgPSAnJykge1xuXHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdHZhciB0ID0gY3JlYXRlX3RleHQodmFsdWUgKyAnJyk7XG5cdFx0YXNzaWduX25vZGVzKHQsIHQpO1xuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0dmFyIG5vZGUgPSBoeWRyYXRlX25vZGU7XG5cblx0aWYgKG5vZGUubm9kZVR5cGUgIT09IDMpIHtcblx0XHQvLyBpZiBhbiB7ZXhwcmVzc2lvbn0gaXMgZW1wdHkgZHVyaW5nIFNTUiwgd2UgbmVlZCB0byBpbnNlcnQgYW4gZW1wdHkgdGV4dCBub2RlXG5cdFx0bm9kZS5iZWZvcmUoKG5vZGUgPSBjcmVhdGVfdGV4dCgpKSk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZShub2RlKTtcblx0fVxuXG5cdGFzc2lnbl9ub2Rlcyhub2RlLCBub2RlKTtcblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50KCkge1xuXHQvLyB3ZSdyZSBub3QgZGVsZWdhdGluZyB0byBgdGVtcGxhdGVgIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdGFzc2lnbl9ub2RlcyhoeWRyYXRlX25vZGUsIG51bGwpO1xuXHRcdHJldHVybiBoeWRyYXRlX25vZGU7XG5cdH1cblxuXHR2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0dmFyIHN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdHZhciBhbmNob3IgPSBjcmVhdGVfdGV4dCgpO1xuXHRmcmFnLmFwcGVuZChzdGFydCwgYW5jaG9yKTtcblxuXHRhc3NpZ25fbm9kZXMoc3RhcnQsIGFuY2hvcik7XG5cblx0cmV0dXJuIGZyYWc7XG59XG5cbi8qKlxuICogQXNzaWduIHRoZSBjcmVhdGVkIChvciBpbiBoeWRyYXRpb24gbW9kZSwgdHJhdmVyc2VkKSBkb20gZWxlbWVudHMgdG8gdGhlIGN1cnJlbnQgYmxvY2tcbiAqIGFuZCBpbnNlcnQgdGhlIGVsZW1lbnRzIGludG8gdGhlIGRvbSAoaW4gY2xpZW50IG1vZGUpLlxuICogQHBhcmFtIHtUZXh0IHwgQ29tbWVudCB8IEVsZW1lbnR9IGFuY2hvclxuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50IHwgRWxlbWVudH0gZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoYW5jaG9yLCBkb20pIHtcblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCkubm9kZXNfZW5kID0gaHlkcmF0ZV9ub2RlO1xuXHRcdGh5ZHJhdGVfbmV4dCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChhbmNob3IgPT09IG51bGwpIHtcblx0XHQvLyBlZGdlIGNhc2Ug4oCUIHZvaWQgYDxzdmVsdGU6ZWxlbWVudD5gIHdpdGggY29udGVudFxuXHRcdHJldHVybjtcblx0fVxuXG5cdGFuY2hvci5iZWZvcmUoLyoqIEB0eXBlIHtOb2RlfSAqLyAoZG9tKSk7XG59XG4iLCIvKiogQGltcG9ydCB7IENvbXBvbmVudENvbnRleHQsIEVmZmVjdCwgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlLCBTdmVsdGVDb21wb25lbnQsIE1vdW50T3B0aW9ucyB9IGZyb20gJy4uLy4uL2luZGV4LmpzJyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQge1xuXHRjbGVhcl90ZXh0X2NvbnRlbnQsXG5cdGNyZWF0ZV90ZXh0LFxuXHRnZXRfZmlyc3RfY2hpbGQsXG5cdGdldF9uZXh0X3NpYmxpbmcsXG5cdGluaXRfb3BlcmF0aW9uc1xufSBmcm9tICcuL2RvbS9vcGVyYXRpb25zLmpzJztcbmltcG9ydCB7IEhZRFJBVElPTl9FTkQsIEhZRFJBVElPTl9FUlJPUiwgSFlEUkFUSU9OX1NUQVJUIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHB1c2gsIHBvcCwgY29tcG9uZW50X2NvbnRleHQsIGFjdGl2ZV9lZmZlY3QgfSBmcm9tICcuL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X3Jvb3QsIGJyYW5jaCB9IGZyb20gJy4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7XG5cdGh5ZHJhdGVfbmV4dCxcblx0aHlkcmF0ZV9ub2RlLFxuXHRoeWRyYXRpbmcsXG5cdHNldF9oeWRyYXRlX25vZGUsXG5cdHNldF9oeWRyYXRpbmdcbn0gZnJvbSAnLi9kb20vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IGFycmF5X2Zyb20gfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHtcblx0YWxsX3JlZ2lzdGVyZWRfZXZlbnRzLFxuXHRoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24sXG5cdHJvb3RfZXZlbnRfaGFuZGxlc1xufSBmcm9tICcuL2RvbS9lbGVtZW50cy9ldmVudHMuanMnO1xuaW1wb3J0IHsgcmVzZXRfaGVhZF9hbmNob3IgfSBmcm9tICcuL2RvbS9ibG9ja3Mvc3ZlbHRlLWhlYWQuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuL3dhcm5pbmdzLmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgYXNzaWduX25vZGVzIH0gZnJvbSAnLi9kb20vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHsgaXNfcGFzc2l2ZV9ldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBUaGlzIGlzIG5vcm1hbGx5IHRydWUg4oCUIGJsb2NrIGVmZmVjdHMgc2hvdWxkIHJ1biB0aGVpciBpbnRybyB0cmFuc2l0aW9ucyDigJRcbiAqIGJ1dCBpcyBmYWxzZSBkdXJpbmcgaHlkcmF0aW9uICh1bmxlc3MgYG9wdGlvbnMuaW50cm9gIGlzIGB0cnVlYCkgYW5kXG4gKiB3aGVuIGNyZWF0aW5nIHRoZSBjaGlsZHJlbiBvZiBhIGA8c3ZlbHRlOmVsZW1lbnQ+YCB0aGF0IGp1c3QgY2hhbmdlZCB0YWdcbiAqL1xuZXhwb3J0IGxldCBzaG91bGRfaW50cm8gPSB0cnVlO1xuXG4vKiogQHBhcmFtIHtib29sZWFufSB2YWx1ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9zaG91bGRfaW50cm8odmFsdWUpIHtcblx0c2hvdWxkX2ludHJvID0gdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3RleHQodGV4dCwgdmFsdWUpIHtcblx0Ly8gRm9yIG9iamVjdHMsIHdlIGFwcGx5IHN0cmluZyBjb2VyY2lvbiAod2hpY2ggbWlnaHQgbWFrZSB0aGluZ3MgbGlrZSAkc3RhdGUgYXJyYXkgcmVmZXJlbmNlcyBpbiB0aGUgdGVtcGxhdGUgcmVhY3RpdmUpIGJlZm9yZSBkaWZmaW5nXG5cdHZhciBzdHIgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgKyAnJyA6IHZhbHVlO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGlmIChzdHIgIT09ICh0ZXh0Ll9fdCA/Pz0gdGV4dC5ub2RlVmFsdWUpKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdHRleHQuX190ID0gc3RyO1xuXHRcdHRleHQubm9kZVZhbHVlID0gc3RyID09IG51bGwgPyAnJyA6IHN0ciArICcnO1xuXHR9XG59XG5cbi8qKlxuICogTW91bnRzIGEgY29tcG9uZW50IHRvIHRoZSBnaXZlbiB0YXJnZXQgYW5kIHJldHVybnMgdGhlIGV4cG9ydHMgYW5kIHBvdGVudGlhbGx5IHRoZSBwcm9wcyAoaWYgY29tcGlsZWQgd2l0aCBgYWNjZXNzb3JzOiB0cnVlYCkgb2YgdGhlIGNvbXBvbmVudC5cbiAqIFRyYW5zaXRpb25zIHdpbGwgcGxheSBkdXJpbmcgdGhlIGluaXRpYWwgcmVuZGVyIHVubGVzcyB0aGUgYGludHJvYCBvcHRpb24gaXMgc2V0IHRvIGBmYWxzZWAuXG4gKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBQcm9wc1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFeHBvcnRzXG4gKiBAcGFyYW0ge0NvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PFByb3BzPj4gfCBDb21wb25lbnQ8UHJvcHMsIEV4cG9ydHMsIGFueT59IGNvbXBvbmVudFxuICogQHBhcmFtIHtNb3VudE9wdGlvbnM8UHJvcHM+fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RXhwb3J0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRyZXR1cm4gX21vdW50KGNvbXBvbmVudCwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogSHlkcmF0ZXMgYSBjb21wb25lbnQgb24gdGhlIGdpdmVuIHRhcmdldCBhbmQgcmV0dXJucyB0aGUgZXhwb3J0cyBhbmQgcG90ZW50aWFsbHkgdGhlIHByb3BzIChpZiBjb21waWxlZCB3aXRoIGBhY2Nlc3NvcnM6IHRydWVgKSBvZiB0aGUgY29tcG9uZW50XG4gKlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBQcm9wc1xuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBFeHBvcnRzXG4gKiBAcGFyYW0ge0NvbXBvbmVudFR5cGU8U3ZlbHRlQ29tcG9uZW50PFByb3BzPj4gfCBDb21wb25lbnQ8UHJvcHMsIEV4cG9ydHMsIGFueT59IGNvbXBvbmVudFxuICogQHBhcmFtIHt7fSBleHRlbmRzIFByb3BzID8ge1xuICogXHRcdHRhcmdldDogRG9jdW1lbnQgfCBFbGVtZW50IHwgU2hhZG93Um9vdDtcbiAqIFx0XHRwcm9wcz86IFByb3BzO1xuICogXHRcdGV2ZW50cz86IFJlY29yZDxzdHJpbmcsIChlOiBhbnkpID0+IGFueT47XG4gKiAgXHRjb250ZXh0PzogTWFwPGFueSwgYW55PjtcbiAqIFx0XHRpbnRybz86IGJvb2xlYW47XG4gKiBcdFx0cmVjb3Zlcj86IGJvb2xlYW47XG4gKiBcdH0gOiB7XG4gKiBcdFx0dGFyZ2V0OiBEb2N1bWVudCB8IEVsZW1lbnQgfCBTaGFkb3dSb290O1xuICogXHRcdHByb3BzOiBQcm9wcztcbiAqIFx0XHRldmVudHM/OiBSZWNvcmQ8c3RyaW5nLCAoZTogYW55KSA9PiBhbnk+O1xuICogIFx0Y29udGV4dD86IE1hcDxhbnksIGFueT47XG4gKiBcdFx0aW50cm8/OiBib29sZWFuO1xuICogXHRcdHJlY292ZXI/OiBib29sZWFuO1xuICogXHR9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RXhwb3J0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGluaXRfb3BlcmF0aW9ucygpO1xuXHRvcHRpb25zLmludHJvID0gb3B0aW9ucy5pbnRybyA/PyBmYWxzZTtcblx0Y29uc3QgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG5cdGNvbnN0IHdhc19oeWRyYXRpbmcgPSBoeWRyYXRpbmc7XG5cdGNvbnN0IHByZXZpb3VzX2h5ZHJhdGVfbm9kZSA9IGh5ZHJhdGVfbm9kZTtcblxuXHR0cnkge1xuXHRcdHZhciBhbmNob3IgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9maXJzdF9jaGlsZCh0YXJnZXQpKTtcblx0XHR3aGlsZSAoXG5cdFx0XHRhbmNob3IgJiZcblx0XHRcdChhbmNob3Iubm9kZVR5cGUgIT09IDggfHwgLyoqIEB0eXBlIHtDb21tZW50fSAqLyAoYW5jaG9yKS5kYXRhICE9PSBIWURSQVRJT05fU1RBUlQpXG5cdFx0KSB7XG5cdFx0XHRhbmNob3IgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcoYW5jaG9yKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFhbmNob3IpIHtcblx0XHRcdHRocm93IEhZRFJBVElPTl9FUlJPUjtcblx0XHR9XG5cblx0XHRzZXRfaHlkcmF0aW5nKHRydWUpO1xuXHRcdHNldF9oeWRyYXRlX25vZGUoLyoqIEB0eXBlIHtDb21tZW50fSAqLyAoYW5jaG9yKSk7XG5cdFx0aHlkcmF0ZV9uZXh0KCk7XG5cblx0XHRjb25zdCBpbnN0YW5jZSA9IF9tb3VudChjb21wb25lbnQsIHsgLi4ub3B0aW9ucywgYW5jaG9yIH0pO1xuXG5cdFx0aWYgKFxuXHRcdFx0aHlkcmF0ZV9ub2RlID09PSBudWxsIHx8XG5cdFx0XHRoeWRyYXRlX25vZGUubm9kZVR5cGUgIT09IDggfHxcblx0XHRcdC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGh5ZHJhdGVfbm9kZSkuZGF0YSAhPT0gSFlEUkFUSU9OX0VORFxuXHRcdCkge1xuXHRcdFx0dy5oeWRyYXRpb25fbWlzbWF0Y2goKTtcblx0XHRcdHRocm93IEhZRFJBVElPTl9FUlJPUjtcblx0XHR9XG5cblx0XHRzZXRfaHlkcmF0aW5nKGZhbHNlKTtcblxuXHRcdHJldHVybiAvKiogIEB0eXBlIHtFeHBvcnRzfSAqLyAoaW5zdGFuY2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvciA9PT0gSFlEUkFUSU9OX0VSUk9SKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5yZWNvdmVyID09PSBmYWxzZSkge1xuXHRcdFx0XHRlLmh5ZHJhdGlvbl9mYWlsZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYW4gZXJyb3Igb2NjdXJlZCBhYm92ZSwgdGhlIG9wZXJhdGlvbnMgbWlnaHQgbm90IHlldCBoYXZlIGJlZW4gaW5pdGlhbGlzZWQuXG5cdFx0XHRpbml0X29wZXJhdGlvbnMoKTtcblx0XHRcdGNsZWFyX3RleHRfY29udGVudCh0YXJnZXQpO1xuXG5cdFx0XHRzZXRfaHlkcmF0aW5nKGZhbHNlKTtcblx0XHRcdHJldHVybiBtb3VudChjb21wb25lbnQsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdHRocm93IGVycm9yO1xuXHR9IGZpbmFsbHkge1xuXHRcdHNldF9oeWRyYXRpbmcod2FzX2h5ZHJhdGluZyk7XG5cdFx0c2V0X2h5ZHJhdGVfbm9kZShwcmV2aW91c19oeWRyYXRlX25vZGUpO1xuXHRcdHJlc2V0X2hlYWRfYW5jaG9yKCk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBudW1iZXI+fSAqL1xuY29uc3QgZG9jdW1lbnRfbGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gRXhwb3J0c1xuICogQHBhcmFtIHtDb21wb25lbnRUeXBlPFN2ZWx0ZUNvbXBvbmVudDxhbnk+PiB8IENvbXBvbmVudDxhbnk+fSBDb21wb25lbnRcbiAqIEBwYXJhbSB7TW91bnRPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RXhwb3J0c31cbiAqL1xuZnVuY3Rpb24gX21vdW50KENvbXBvbmVudCwgeyB0YXJnZXQsIGFuY2hvciwgcHJvcHMgPSB7fSwgZXZlbnRzLCBjb250ZXh0LCBpbnRybyA9IHRydWUgfSkge1xuXHRpbml0X29wZXJhdGlvbnMoKTtcblxuXHR2YXIgcmVnaXN0ZXJlZF9ldmVudHMgPSBuZXcgU2V0KCk7XG5cblx0LyoqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZXZlbnRzICovXG5cdHZhciBldmVudF9oYW5kbGUgPSAoZXZlbnRzKSA9PiB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBldmVudF9uYW1lID0gZXZlbnRzW2ldO1xuXG5cdFx0XHRpZiAocmVnaXN0ZXJlZF9ldmVudHMuaGFzKGV2ZW50X25hbWUpKSBjb250aW51ZTtcblx0XHRcdHJlZ2lzdGVyZWRfZXZlbnRzLmFkZChldmVudF9uYW1lKTtcblxuXHRcdFx0dmFyIHBhc3NpdmUgPSBpc19wYXNzaXZlX2V2ZW50KGV2ZW50X25hbWUpO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGJvdGggdGhlIGNvbnRhaW5lciBhbmQgdGhlIGRvY3VtZW50LlxuXHRcdFx0Ly8gVGhlIGNvbnRhaW5lciBsaXN0ZW5lciBlbnN1cmVzIHdlIGNhdGNoIGV2ZW50cyBmcm9tIHdpdGhpbiBpbiBjYXNlXG5cdFx0XHQvLyB0aGUgb3V0ZXIgY29udGVudCBzdG9wcyBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQuXG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24sIHsgcGFzc2l2ZSB9KTtcblxuXHRcdFx0dmFyIG4gPSBkb2N1bWVudF9saXN0ZW5lcnMuZ2V0KGV2ZW50X25hbWUpO1xuXG5cdFx0XHRpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIFRoZSBkb2N1bWVudCBsaXN0ZW5lciBlbnN1cmVzIHdlIGNhdGNoIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZSBmcm9tIGVsZW1lbnRzIHRoYXQgd2VyZVxuXHRcdFx0XHQvLyBtYW51YWxseSBtb3ZlZCBvdXRzaWRlIG9mIHRoZSBjb250YWluZXIgKGUuZy4gdmlhIG1hbnVhbCBwb3J0YWxzKS5cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBoYW5kbGVfZXZlbnRfcHJvcGFnYXRpb24sIHsgcGFzc2l2ZSB9KTtcblx0XHRcdFx0ZG9jdW1lbnRfbGlzdGVuZXJzLnNldChldmVudF9uYW1lLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50X2xpc3RlbmVycy5zZXQoZXZlbnRfbmFtZSwgbiArIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRldmVudF9oYW5kbGUoYXJyYXlfZnJvbShhbGxfcmVnaXN0ZXJlZF9ldmVudHMpKTtcblx0cm9vdF9ldmVudF9oYW5kbGVzLmFkZChldmVudF9oYW5kbGUpO1xuXG5cdC8qKiBAdHlwZSB7RXhwb3J0c30gKi9cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciB3aWxsIGJlIGRlZmluZWQgYmVjYXVzZSB0aGUgcmVuZGVyIGVmZmVjdCBydW5zIHN5bmNocm9ub3VzbHlcblx0dmFyIGNvbXBvbmVudCA9IHVuZGVmaW5lZDtcblxuXHR2YXIgdW5tb3VudCA9IGNvbXBvbmVudF9yb290KCgpID0+IHtcblx0XHR2YXIgYW5jaG9yX25vZGUgPSBhbmNob3IgPz8gdGFyZ2V0LmFwcGVuZENoaWxkKGNyZWF0ZV90ZXh0KCkpO1xuXG5cdFx0YnJhbmNoKCgpID0+IHtcblx0XHRcdGlmIChjb250ZXh0KSB7XG5cdFx0XHRcdHB1c2goe30pO1xuXHRcdFx0XHR2YXIgY3R4ID0gLyoqIEB0eXBlIHtDb21wb25lbnRDb250ZXh0fSAqLyAoY29tcG9uZW50X2NvbnRleHQpO1xuXHRcdFx0XHRjdHguYyA9IGNvbnRleHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChldmVudHMpIHtcblx0XHRcdFx0Ly8gV2UgY2FuJ3Qgc3ByZWFkIHRoZSBvYmplY3Qgb3IgZWxzZSB3ZSdkIGxvc2UgdGhlIHN0YXRlIHByb3h5IHN0dWZmLCBpZiBpdCBpcyBvbmVcblx0XHRcdFx0LyoqIEB0eXBlIHthbnl9ICovIChwcm9wcykuJCRldmVudHMgPSBldmVudHM7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChoeWRyYXRpbmcpIHtcblx0XHRcdFx0YXNzaWduX25vZGVzKC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoYW5jaG9yX25vZGUpLCBudWxsKTtcblx0XHRcdH1cblxuXHRcdFx0c2hvdWxkX2ludHJvID0gaW50cm87XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIHRoZSBwdWJsaWMgdHlwaW5ncyBhcmUgbm90IHdoYXQgdGhlIGFjdHVhbCBmdW5jdGlvbiBsb29rcyBsaWtlXG5cdFx0XHRjb21wb25lbnQgPSBDb21wb25lbnQoYW5jaG9yX25vZGUsIHByb3BzKSB8fCB7fTtcblx0XHRcdHNob3VsZF9pbnRybyA9IHRydWU7XG5cblx0XHRcdGlmIChoeWRyYXRpbmcpIHtcblx0XHRcdFx0LyoqIEB0eXBlIHtFZmZlY3R9ICovIChhY3RpdmVfZWZmZWN0KS5ub2Rlc19lbmQgPSBoeWRyYXRlX25vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb250ZXh0KSB7XG5cdFx0XHRcdHBvcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGZvciAodmFyIGV2ZW50X25hbWUgb2YgcmVnaXN0ZXJlZF9ldmVudHMpIHtcblx0XHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgaGFuZGxlX2V2ZW50X3Byb3BhZ2F0aW9uKTtcblxuXHRcdFx0XHR2YXIgbiA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoZG9jdW1lbnRfbGlzdGVuZXJzLmdldChldmVudF9uYW1lKSk7XG5cblx0XHRcdFx0aWYgKC0tbiA9PT0gMCkge1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgaGFuZGxlX2V2ZW50X3Byb3BhZ2F0aW9uKTtcblx0XHRcdFx0XHRkb2N1bWVudF9saXN0ZW5lcnMuZGVsZXRlKGV2ZW50X25hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvY3VtZW50X2xpc3RlbmVycy5zZXQoZXZlbnRfbmFtZSwgbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cm9vdF9ldmVudF9oYW5kbGVzLmRlbGV0ZShldmVudF9oYW5kbGUpO1xuXG5cdFx0XHRpZiAoYW5jaG9yX25vZGUgIT09IGFuY2hvcikge1xuXHRcdFx0XHRhbmNob3Jfbm9kZS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChhbmNob3Jfbm9kZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG5cblx0bW91bnRlZF9jb21wb25lbnRzLnNldChjb21wb25lbnQsIHVubW91bnQpO1xuXHRyZXR1cm4gY29tcG9uZW50O1xufVxuXG4vKipcbiAqIFJlZmVyZW5jZXMgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCB3ZXJlIG1vdW50ZWQgb3IgaHlkcmF0ZWQuXG4gKiBVc2VzIGEgYFdlYWtNYXBgIHRvIGF2b2lkIG1lbW9yeSBsZWFrcy5cbiAqL1xubGV0IG1vdW50ZWRfY29tcG9uZW50cyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogVW5tb3VudHMgYSBjb21wb25lbnQgdGhhdCB3YXMgcHJldmlvdXNseSBtb3VudGVkIHVzaW5nIGBtb3VudGAgb3IgYGh5ZHJhdGVgLlxuICpcbiAqIFNpbmNlIDUuMTMuMCwgaWYgYG9wdGlvbnMub3V0cm9gIGlzIGB0cnVlYCwgW3RyYW5zaXRpb25zXShodHRwczovL3N2ZWx0ZS5kZXYvZG9jcy9zdmVsdGUvdHJhbnNpdGlvbikgd2lsbCBwbGF5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxuICpcbiAqIFJldHVybnMgYSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyBhZnRlciB0cmFuc2l0aW9ucyBoYXZlIGNvbXBsZXRlZCBpZiBgb3B0aW9ucy5vdXRyb2AgaXMgdHJ1ZSwgb3IgaW1tZWRpYXRlbHkgb3RoZXJ3aXNlIChwcmlvciB0byA1LjEzLjAsIHJldHVybnMgYHZvaWRgKS5cbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgbW91bnQsIHVubW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICogaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5zdmVsdGUnO1xuICpcbiAqIGNvbnN0IGFwcCA9IG1vdW50KEFwcCwgeyB0YXJnZXQ6IGRvY3VtZW50LmJvZHkgfSk7XG4gKlxuICogLy8gbGF0ZXIuLi5cbiAqIHVubW91bnQoYXBwLCB7IG91dHJvOiB0cnVlIH0pO1xuICogYGBgXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IGNvbXBvbmVudFxuICogQHBhcmFtIHt7IG91dHJvPzogYm9vbGVhbiB9fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudChjb21wb25lbnQsIG9wdGlvbnMpIHtcblx0Y29uc3QgZm4gPSBtb3VudGVkX2NvbXBvbmVudHMuZ2V0KGNvbXBvbmVudCk7XG5cblx0aWYgKGZuKSB7XG5cdFx0bW91bnRlZF9jb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuXHRcdHJldHVybiBmbihvcHRpb25zKTtcblx0fVxuXG5cdGlmIChERVYpIHtcblx0XHR3LmxpZmVjeWNsZV9kb3VibGVfdW5tb3VudCgpO1xuXHR9XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuIiwiaW1wb3J0ICogYXMgZSBmcm9tICcuLi9lcnJvcnMuanMnO1xuaW1wb3J0IHsgY29tcG9uZW50X2NvbnRleHQgfSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IEZJTEVOQU1FIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGdldF9jb21wb25lbnQgfSBmcm9tICcuL293bmVyc2hpcC5qcyc7XG5cbi8qKiBAcGFyYW0ge0Z1bmN0aW9uICYgeyBbRklMRU5BTUVdOiBzdHJpbmcgfX0gdGFyZ2V0ICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfdGFyZ2V0KHRhcmdldCkge1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0ZS5jb21wb25lbnRfYXBpX2ludmFsaWRfbmV3KHRhcmdldFtGSUxFTkFNRV0gPz8gJ2EgY29tcG9uZW50JywgdGFyZ2V0Lm5hbWUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lfYXBpKCkge1xuXHRjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRfY29udGV4dD8uZnVuY3Rpb247XG5cblx0LyoqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgKi9cblx0ZnVuY3Rpb24gZXJyb3IobWV0aG9kKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdGNvbnN0IHBhcmVudCA9IGdldF9jb21wb25lbnQoKT8uW0ZJTEVOQU1FXSA/PyAnU29tZXRoaW5nJztcblx0XHRlLmNvbXBvbmVudF9hcGlfY2hhbmdlZChwYXJlbnQsIG1ldGhvZCwgY29tcG9uZW50W0ZJTEVOQU1FXSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdCRkZXN0cm95OiAoKSA9PiBlcnJvcignJGRlc3Ryb3koKScpLFxuXHRcdCRvbjogKCkgPT4gZXJyb3IoJyRvbiguLi4pJyksXG5cdFx0JHNldDogKCkgPT4gZXJyb3IoJyRzZXQoLi4uKScpXG5cdH07XG59XG4iLCIvKiogQGltcG9ydCB7IEVmZmVjdCwgVGVtcGxhdGVOb2RlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7IEVGRkVDVF9UUkFOU1BBUkVOVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge1xuXHRoeWRyYXRlX25leHQsXG5cdGh5ZHJhdGVfbm9kZSxcblx0aHlkcmF0aW5nLFxuXHRyZW1vdmVfbm9kZXMsXG5cdHNldF9oeWRyYXRlX25vZGUsXG5cdHNldF9oeWRyYXRpbmdcbn0gZnJvbSAnLi4vaHlkcmF0aW9uLmpzJztcbmltcG9ydCB7IGJsb2NrLCBicmFuY2gsIHBhdXNlX2VmZmVjdCwgcmVzdW1lX2VmZmVjdCB9IGZyb20gJy4uLy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBIWURSQVRJT05fU1RBUlRfRUxTRSwgVU5JTklUSUFMSVpFRCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtUZW1wbGF0ZU5vZGV9IG5vZGVcbiAqIEBwYXJhbSB7KGJyYW5jaDogKGZuOiAoYW5jaG9yOiBOb2RlKSA9PiB2b2lkLCBmbGFnPzogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZH0gZm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Vsc2VpZl0gVHJ1ZSBpZiB0aGlzIGlzIGFuIGB7OmVsc2UgaWYgLi4ufWAgYmxvY2sgcmF0aGVyIHRoYW4gYW4gYHsjaWYgLi4ufWAsIGFzIHRoYXQgYWZmZWN0cyB3aGljaCB0cmFuc2l0aW9ucyBhcmUgY29uc2lkZXJlZCAnbG9jYWwnXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlmX2Jsb2NrKG5vZGUsIGZuLCBlbHNlaWYgPSBmYWxzZSkge1xuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0aHlkcmF0ZV9uZXh0KCk7XG5cdH1cblxuXHR2YXIgYW5jaG9yID0gbm9kZTtcblxuXHQvKiogQHR5cGUge0VmZmVjdCB8IG51bGx9ICovXG5cdHZhciBjb25zZXF1ZW50X2VmZmVjdCA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHtFZmZlY3QgfCBudWxsfSAqL1xuXHR2YXIgYWx0ZXJuYXRlX2VmZmVjdCA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHtVTklOSVRJQUxJWkVEIHwgYm9vbGVhbiB8IG51bGx9ICovXG5cdHZhciBjb25kaXRpb24gPSBVTklOSVRJQUxJWkVEO1xuXG5cdHZhciBmbGFncyA9IGVsc2VpZiA/IEVGRkVDVF9UUkFOU1BBUkVOVCA6IDA7XG5cblx0dmFyIGhhc19icmFuY2ggPSBmYWxzZTtcblxuXHRjb25zdCBzZXRfYnJhbmNoID0gKC8qKiBAdHlwZSB7KGFuY2hvcjogTm9kZSkgPT4gdm9pZH0gKi8gZm4sIGZsYWcgPSB0cnVlKSA9PiB7XG5cdFx0aGFzX2JyYW5jaCA9IHRydWU7XG5cdFx0dXBkYXRlX2JyYW5jaChmbGFnLCBmbik7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlX2JyYW5jaCA9IChcblx0XHQvKiogQHR5cGUge2Jvb2xlYW4gfCBudWxsfSAqLyBuZXdfY29uZGl0aW9uLFxuXHRcdC8qKiBAdHlwZSB7bnVsbCB8ICgoYW5jaG9yOiBOb2RlKSA9PiB2b2lkKX0gKi8gZm5cblx0KSA9PiB7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gKGNvbmRpdGlvbiA9IG5ld19jb25kaXRpb24pKSByZXR1cm47XG5cblx0XHQvKiogV2hldGhlciBvciBub3QgdGhlcmUgd2FzIGEgaHlkcmF0aW9uIG1pc21hdGNoLiBOZWVkcyB0byBiZSBhIGBsZXRgIG9yIGVsc2UgaXQgaXNuJ3QgdHJlZXNoYWtlbiBvdXQgKi9cblx0XHRsZXQgbWlzbWF0Y2ggPSBmYWxzZTtcblxuXHRcdGlmIChoeWRyYXRpbmcpIHtcblx0XHRcdGNvbnN0IGlzX2Vsc2UgPSAvKiogQHR5cGUge0NvbW1lbnR9ICovIChhbmNob3IpLmRhdGEgPT09IEhZRFJBVElPTl9TVEFSVF9FTFNFO1xuXG5cdFx0XHRpZiAoISFjb25kaXRpb24gPT09IGlzX2Vsc2UpIHtcblx0XHRcdFx0Ly8gSHlkcmF0aW9uIG1pc21hdGNoOiByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGhlIGFuY2hvciBhbmQgc3RhcnQgZnJlc2guXG5cdFx0XHRcdC8vIFRoaXMgY291bGQgaGFwcGVuIHdpdGggYHsjaWYgYnJvd3Nlcn0uLi57L2lmfWAsIGZvciBleGFtcGxlXG5cdFx0XHRcdGFuY2hvciA9IHJlbW92ZV9ub2RlcygpO1xuXG5cdFx0XHRcdHNldF9oeWRyYXRlX25vZGUoYW5jaG9yKTtcblx0XHRcdFx0c2V0X2h5ZHJhdGluZyhmYWxzZSk7XG5cdFx0XHRcdG1pc21hdGNoID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY29uZGl0aW9uKSB7XG5cdFx0XHRpZiAoY29uc2VxdWVudF9lZmZlY3QpIHtcblx0XHRcdFx0cmVzdW1lX2VmZmVjdChjb25zZXF1ZW50X2VmZmVjdCk7XG5cdFx0XHR9IGVsc2UgaWYgKGZuKSB7XG5cdFx0XHRcdGNvbnNlcXVlbnRfZWZmZWN0ID0gYnJhbmNoKCgpID0+IGZuKGFuY2hvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWx0ZXJuYXRlX2VmZmVjdCkge1xuXHRcdFx0XHRwYXVzZV9lZmZlY3QoYWx0ZXJuYXRlX2VmZmVjdCwgKCkgPT4ge1xuXHRcdFx0XHRcdGFsdGVybmF0ZV9lZmZlY3QgPSBudWxsO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFsdGVybmF0ZV9lZmZlY3QpIHtcblx0XHRcdFx0cmVzdW1lX2VmZmVjdChhbHRlcm5hdGVfZWZmZWN0KTtcblx0XHRcdH0gZWxzZSBpZiAoZm4pIHtcblx0XHRcdFx0YWx0ZXJuYXRlX2VmZmVjdCA9IGJyYW5jaCgoKSA9PiBmbihhbmNob3IpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbnNlcXVlbnRfZWZmZWN0KSB7XG5cdFx0XHRcdHBhdXNlX2VmZmVjdChjb25zZXF1ZW50X2VmZmVjdCwgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNlcXVlbnRfZWZmZWN0ID0gbnVsbDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1pc21hdGNoKSB7XG5cdFx0XHQvLyBjb250aW51ZSBpbiBoeWRyYXRpb24gbW9kZVxuXHRcdFx0c2V0X2h5ZHJhdGluZyh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0YmxvY2soKCkgPT4ge1xuXHRcdGhhc19icmFuY2ggPSBmYWxzZTtcblx0XHRmbihzZXRfYnJhbmNoKTtcblx0XHRpZiAoIWhhc19icmFuY2gpIHtcblx0XHRcdHVwZGF0ZV9icmFuY2gobnVsbCwgbnVsbCk7XG5cdFx0fVxuXHR9LCBmbGFncyk7XG5cblx0aWYgKGh5ZHJhdGluZykge1xuXHRcdGFuY2hvciA9IGh5ZHJhdGVfbm9kZTtcblx0fVxufVxuIiwiLyoqIEBpbXBvcnQgeyBFYWNoSXRlbSwgRWFjaFN0YXRlLCBFZmZlY3QsIE1heWJlU291cmNlLCBTb3VyY2UsIFRlbXBsYXRlTm9kZSwgVHJhbnNpdGlvbk1hbmFnZXIsIFZhbHVlIH0gZnJvbSAnI2NsaWVudCcgKi9cbmltcG9ydCB7XG5cdEVBQ0hfSU5ERVhfUkVBQ1RJVkUsXG5cdEVBQ0hfSVNfQU5JTUFURUQsXG5cdEVBQ0hfSVNfQ09OVFJPTExFRCxcblx0RUFDSF9JVEVNX0lNTVVUQUJMRSxcblx0RUFDSF9JVEVNX1JFQUNUSVZFLFxuXHRIWURSQVRJT05fRU5ELFxuXHRIWURSQVRJT05fU1RBUlRfRUxTRVxufSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtcblx0aHlkcmF0ZV9uZXh0LFxuXHRoeWRyYXRlX25vZGUsXG5cdGh5ZHJhdGluZyxcblx0cmVtb3ZlX25vZGVzLFxuXHRzZXRfaHlkcmF0ZV9ub2RlLFxuXHRzZXRfaHlkcmF0aW5nXG59IGZyb20gJy4uL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQge1xuXHRjbGVhcl90ZXh0X2NvbnRlbnQsXG5cdGNyZWF0ZV90ZXh0LFxuXHRnZXRfZmlyc3RfY2hpbGQsXG5cdGdldF9uZXh0X3NpYmxpbmdcbn0gZnJvbSAnLi4vb3BlcmF0aW9ucy5qcyc7XG5pbXBvcnQge1xuXHRibG9jayxcblx0YnJhbmNoLFxuXHRkZXN0cm95X2VmZmVjdCxcblx0cnVuX291dF90cmFuc2l0aW9ucyxcblx0cGF1c2VfY2hpbGRyZW4sXG5cdHBhdXNlX2VmZmVjdCxcblx0cmVzdW1lX2VmZmVjdFxufSBmcm9tICcuLi8uLi9yZWFjdGl2aXR5L2VmZmVjdHMuanMnO1xuaW1wb3J0IHsgc291cmNlLCBtdXRhYmxlX3NvdXJjZSwgaW50ZXJuYWxfc2V0IH0gZnJvbSAnLi4vLi4vcmVhY3Rpdml0eS9zb3VyY2VzLmpzJztcbmltcG9ydCB7IGFycmF5X2Zyb20sIGlzX2FycmF5IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IElORVJUIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHF1ZXVlX21pY3JvX3Rhc2sgfSBmcm9tICcuLi90YXNrLmpzJztcbmltcG9ydCB7IGFjdGl2ZV9lZmZlY3QsIGFjdGl2ZV9yZWFjdGlvbiB9IGZyb20gJy4uLy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5cbi8qKlxuICogVGhlIHJvdyBvZiBhIGtleWVkIGVhY2ggYmxvY2sgdGhhdCBpcyBjdXJyZW50bHkgdXBkYXRpbmcuIFdlIHRyYWNrIHRoaXNcbiAqIHNvIHRoYXQgYGFuaW1hdGU6YCBkaXJlY3RpdmVzIGhhdmUgc29tZXRoaW5nIHRvIGF0dGFjaCB0aGVtc2VsdmVzIHRvXG4gKiBAdHlwZSB7RWFjaEl0ZW0gfCBudWxsfVxuICovXG5leHBvcnQgbGV0IGN1cnJlbnRfZWFjaF9pdGVtID0gbnVsbDtcblxuLyoqIEBwYXJhbSB7RWFjaEl0ZW0gfCBudWxsfSBpdGVtICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1cnJlbnRfZWFjaF9pdGVtKGl0ZW0pIHtcblx0Y3VycmVudF9lYWNoX2l0ZW0gPSBpdGVtO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBfXG4gKiBAcGFyYW0ge251bWJlcn0gaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXgoXywgaSkge1xuXHRyZXR1cm4gaTtcbn1cblxuLyoqXG4gKiBQYXVzZSBtdWx0aXBsZSBlZmZlY3RzIHNpbXVsdGFuZW91c2x5LCBhbmQgY29vcmRpbmF0ZSB0aGVpclxuICogc3Vic2VxdWVudCBkZXN0cnVjdGlvbi4gVXNlZCBpbiBlYWNoIGJsb2Nrc1xuICogQHBhcmFtIHtFYWNoU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge0VhY2hJdGVtW119IGl0ZW1zXG4gKiBAcGFyYW0ge251bGwgfCBOb2RlfSBjb250cm9sbGVkX2FuY2hvclxuICogQHBhcmFtIHtNYXA8YW55LCBFYWNoSXRlbT59IGl0ZW1zX21hcFxuICovXG5mdW5jdGlvbiBwYXVzZV9lZmZlY3RzKHN0YXRlLCBpdGVtcywgY29udHJvbGxlZF9hbmNob3IsIGl0ZW1zX21hcCkge1xuXHQvKiogQHR5cGUge1RyYW5zaXRpb25NYW5hZ2VyW119ICovXG5cdHZhciB0cmFuc2l0aW9ucyA9IFtdO1xuXHR2YXIgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRwYXVzZV9jaGlsZHJlbihpdGVtc1tpXS5lLCB0cmFuc2l0aW9ucywgdHJ1ZSk7XG5cdH1cblxuXHR2YXIgaXNfY29udHJvbGxlZCA9IGxlbmd0aCA+IDAgJiYgdHJhbnNpdGlvbnMubGVuZ3RoID09PSAwICYmIGNvbnRyb2xsZWRfYW5jaG9yICE9PSBudWxsO1xuXHQvLyBJZiB3ZSBoYXZlIGEgY29udHJvbGxlZCBhbmNob3IsIGl0IG1lYW5zIHRoYXQgdGhlIGVhY2ggYmxvY2sgaXMgaW5zaWRlIGEgc2luZ2xlXG5cdC8vIERPTSBlbGVtZW50LCBzbyB3ZSBjYW4gYXBwbHkgYSBmYXN0LXBhdGggZm9yIGNsZWFyaW5nIHRoZSBjb250ZW50cyBvZiB0aGUgZWxlbWVudC5cblx0aWYgKGlzX2NvbnRyb2xsZWQpIHtcblx0XHR2YXIgcGFyZW50X25vZGUgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChcblx0XHRcdC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGNvbnRyb2xsZWRfYW5jaG9yKS5wYXJlbnROb2RlXG5cdFx0KTtcblx0XHRjbGVhcl90ZXh0X2NvbnRlbnQocGFyZW50X25vZGUpO1xuXHRcdHBhcmVudF9ub2RlLmFwcGVuZCgvKiogQHR5cGUge0VsZW1lbnR9ICovIChjb250cm9sbGVkX2FuY2hvcikpO1xuXHRcdGl0ZW1zX21hcC5jbGVhcigpO1xuXHRcdGxpbmsoc3RhdGUsIGl0ZW1zWzBdLnByZXYsIGl0ZW1zW2xlbmd0aCAtIDFdLm5leHQpO1xuXHR9XG5cblx0cnVuX291dF90cmFuc2l0aW9ucyh0cmFuc2l0aW9ucywgKCkgPT4ge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoIWlzX2NvbnRyb2xsZWQpIHtcblx0XHRcdFx0aXRlbXNfbWFwLmRlbGV0ZShpdGVtLmspO1xuXHRcdFx0XHRsaW5rKHN0YXRlLCBpdGVtLnByZXYsIGl0ZW0ubmV4dCk7XG5cdFx0XHR9XG5cdFx0XHRkZXN0cm95X2VmZmVjdChpdGVtLmUsICFpc19jb250cm9sbGVkKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBDb21tZW50fSBub2RlIFRoZSBuZXh0IHNpYmxpbmcgbm9kZSwgb3IgdGhlIHBhcmVudCBub2RlIGlmIHRoaXMgaXMgYSAnY29udHJvbGxlZCcgYmxvY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHBhcmFtIHsoKSA9PiBWW119IGdldF9jb2xsZWN0aW9uXG4gKiBAcGFyYW0geyh2YWx1ZTogViwgaW5kZXg6IG51bWJlcikgPT4gYW55fSBnZXRfa2V5XG4gKiBAcGFyYW0geyhhbmNob3I6IE5vZGUsIGl0ZW06IE1heWJlU291cmNlPFY+LCBpbmRleDogTWF5YmVTb3VyY2U8bnVtYmVyPikgPT4gdm9pZH0gcmVuZGVyX2ZuXG4gKiBAcGFyYW0ge251bGwgfCAoKGFuY2hvcjogTm9kZSkgPT4gdm9pZCl9IGZhbGxiYWNrX2ZuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhY2gobm9kZSwgZmxhZ3MsIGdldF9jb2xsZWN0aW9uLCBnZXRfa2V5LCByZW5kZXJfZm4sIGZhbGxiYWNrX2ZuID0gbnVsbCkge1xuXHR2YXIgYW5jaG9yID0gbm9kZTtcblxuXHQvKiogQHR5cGUge0VhY2hTdGF0ZX0gKi9cblx0dmFyIHN0YXRlID0geyBmbGFncywgaXRlbXM6IG5ldyBNYXAoKSwgZmlyc3Q6IG51bGwgfTtcblxuXHR2YXIgaXNfY29udHJvbGxlZCA9IChmbGFncyAmIEVBQ0hfSVNfQ09OVFJPTExFRCkgIT09IDA7XG5cblx0aWYgKGlzX2NvbnRyb2xsZWQpIHtcblx0XHR2YXIgcGFyZW50X25vZGUgPSAvKiogQHR5cGUge0VsZW1lbnR9ICovIChub2RlKTtcblxuXHRcdGFuY2hvciA9IGh5ZHJhdGluZ1xuXHRcdFx0PyBzZXRfaHlkcmF0ZV9ub2RlKC8qKiBAdHlwZSB7Q29tbWVudCB8IFRleHR9ICovIChnZXRfZmlyc3RfY2hpbGQocGFyZW50X25vZGUpKSlcblx0XHRcdDogcGFyZW50X25vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlX3RleHQoKSk7XG5cdH1cblxuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0aHlkcmF0ZV9uZXh0KCk7XG5cdH1cblxuXHQvKiogQHR5cGUge0VmZmVjdCB8IG51bGx9ICovXG5cdHZhciBmYWxsYmFjayA9IG51bGw7XG5cblx0dmFyIHdhc19lbXB0eSA9IGZhbHNlO1xuXG5cdGJsb2NrKCgpID0+IHtcblx0XHR2YXIgY29sbGVjdGlvbiA9IGdldF9jb2xsZWN0aW9uKCk7XG5cblx0XHR2YXIgYXJyYXkgPSBpc19hcnJheShjb2xsZWN0aW9uKVxuXHRcdFx0PyBjb2xsZWN0aW9uXG5cdFx0XHQ6IGNvbGxlY3Rpb24gPT0gbnVsbFxuXHRcdFx0XHQ/IFtdXG5cdFx0XHRcdDogYXJyYXlfZnJvbShjb2xsZWN0aW9uKTtcblxuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cblx0XHRpZiAod2FzX2VtcHR5ICYmIGxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Ly8gaWdub3JlIHVwZGF0ZXMgaWYgdGhlIGFycmF5IGlzIGVtcHR5LFxuXHRcdFx0Ly8gYW5kIGl0IGFscmVhZHkgd2FzIGVtcHR5IG9uIHByZXZpb3VzIHJ1blxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR3YXNfZW1wdHkgPSBsZW5ndGggPT09IDA7XG5cblx0XHQvKiogYHRydWVgIGlmIHRoZXJlIHdhcyBhIGh5ZHJhdGlvbiBtaXNtYXRjaC4gTmVlZHMgdG8gYmUgYSBgbGV0YCBvciBlbHNlIGl0IGlzbid0IHRyZWVzaGFrZW4gb3V0ICovXG5cdFx0bGV0IG1pc21hdGNoID0gZmFsc2U7XG5cblx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHR2YXIgaXNfZWxzZSA9IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGFuY2hvcikuZGF0YSA9PT0gSFlEUkFUSU9OX1NUQVJUX0VMU0U7XG5cblx0XHRcdGlmIChpc19lbHNlICE9PSAobGVuZ3RoID09PSAwKSkge1xuXHRcdFx0XHQvLyBoeWRyYXRpb24gbWlzbWF0Y2gg4oCUIHJlbW92ZSB0aGUgc2VydmVyLXJlbmRlcmVkIERPTSBhbmQgc3RhcnQgb3ZlclxuXHRcdFx0XHRhbmNob3IgPSByZW1vdmVfbm9kZXMoKTtcblxuXHRcdFx0XHRzZXRfaHlkcmF0ZV9ub2RlKGFuY2hvcik7XG5cdFx0XHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRtaXNtYXRjaCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcyBpcyBzZXBhcmF0ZSB0byB0aGUgcHJldmlvdXMgYmxvY2sgYmVjYXVzZSBgaHlkcmF0aW5nYCBtaWdodCBjaGFuZ2Vcblx0XHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0XHQvKiogQHR5cGUge0VhY2hJdGVtIHwgbnVsbH0gKi9cblx0XHRcdHZhciBwcmV2ID0gbnVsbDtcblxuXHRcdFx0LyoqIEB0eXBlIHtFYWNoSXRlbX0gKi9cblx0XHRcdHZhciBpdGVtO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRoeWRyYXRlX25vZGUubm9kZVR5cGUgPT09IDggJiZcblx0XHRcdFx0XHQvKiogQHR5cGUge0NvbW1lbnR9ICovIChoeWRyYXRlX25vZGUpLmRhdGEgPT09IEhZRFJBVElPTl9FTkRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gVGhlIHNlcnZlciByZW5kZXJlZCBmZXdlciBpdGVtcyB0aGFuIGV4cGVjdGVkLFxuXHRcdFx0XHRcdC8vIHNvIGJyZWFrIG91dCBhbmQgY29udGludWUgYXBwZW5kaW5nIG5vbi1oeWRyYXRlZCBpdGVtc1xuXHRcdFx0XHRcdGFuY2hvciA9IC8qKiBAdHlwZSB7Q29tbWVudH0gKi8gKGh5ZHJhdGVfbm9kZSk7XG5cdFx0XHRcdFx0bWlzbWF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdHNldF9oeWRyYXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZhbHVlID0gYXJyYXlbaV07XG5cdFx0XHRcdHZhciBrZXkgPSBnZXRfa2V5KHZhbHVlLCBpKTtcblx0XHRcdFx0aXRlbSA9IGNyZWF0ZV9pdGVtKFxuXHRcdFx0XHRcdGh5ZHJhdGVfbm9kZSxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRwcmV2LFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0cmVuZGVyX2ZuLFxuXHRcdFx0XHRcdGZsYWdzLFxuXHRcdFx0XHRcdGdldF9jb2xsZWN0aW9uXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHN0YXRlLml0ZW1zLnNldChrZXksIGl0ZW0pO1xuXG5cdFx0XHRcdHByZXYgPSBpdGVtO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgZXhjZXNzIG5vZGVzXG5cdFx0XHRpZiAobGVuZ3RoID4gMCkge1xuXHRcdFx0XHRzZXRfaHlkcmF0ZV9ub2RlKHJlbW92ZV9ub2RlcygpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWh5ZHJhdGluZykge1xuXHRcdFx0dmFyIGVmZmVjdCA9IC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX3JlYWN0aW9uKTtcblx0XHRcdHJlY29uY2lsZShcblx0XHRcdFx0YXJyYXksXG5cdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRhbmNob3IsXG5cdFx0XHRcdHJlbmRlcl9mbixcblx0XHRcdFx0ZmxhZ3MsXG5cdFx0XHRcdChlZmZlY3QuZiAmIElORVJUKSAhPT0gMCxcblx0XHRcdFx0Z2V0X2tleSxcblx0XHRcdFx0Z2V0X2NvbGxlY3Rpb25cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZhbGxiYWNrX2ZuICE9PSBudWxsKSB7XG5cdFx0XHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmIChmYWxsYmFjaykge1xuXHRcdFx0XHRcdHJlc3VtZV9lZmZlY3QoZmFsbGJhY2spO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZhbGxiYWNrID0gYnJhbmNoKCgpID0+IGZhbGxiYWNrX2ZuKGFuY2hvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdHBhdXNlX2VmZmVjdChmYWxsYmFjaywgKCkgPT4ge1xuXHRcdFx0XHRcdGZhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1pc21hdGNoKSB7XG5cdFx0XHQvLyBjb250aW51ZSBpbiBoeWRyYXRpb24gbW9kZVxuXHRcdFx0c2V0X2h5ZHJhdGluZyh0cnVlKTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIHdlIG1vdW50IHRoZSBlYWNoIGJsb2NrIGZvciB0aGUgZmlyc3QgdGltZSwgdGhlIGNvbGxlY3Rpb24gd29uJ3QgYmVcblx0XHQvLyBjb25uZWN0ZWQgdG8gdGhpcyBlZmZlY3QgYXMgdGhlIGVmZmVjdCBoYXNuJ3QgZmluaXNoZWQgcnVubmluZyB5ZXQgYW5kIGl0cyBkZXBzXG5cdFx0Ly8gd29uJ3QgYmUgYXNzaWduZWQuIEhvd2V2ZXIsIGl0J3MgcG9zc2libGUgdGhhdCB3aGVuIHJlY29uY2lsaW5nIHRoZSBlYWNoIGJsb2NrXG5cdFx0Ly8gdGhhdCBhIG11dGF0aW9uIG9jY3VycmVkIGFuZCBpdCdzIG1hZGUgdGhlIGNvbGxlY3Rpb24gTUFZQkVfRElSVFksIHNvIHJlYWRpbmcgdGhlXG5cdFx0Ly8gY29sbGVjdGlvbiBhZ2FpbiBjYW4gcHJvdmlkZSBjb25zaXN0ZW5jeSB0byB0aGUgcmVhY3RpdmUgZ3JhcGggYWdhaW4gYXMgdGhlIGRlcml2ZWRzXG5cdFx0Ly8gd2lsbCBub3cgYmUgYENMRUFOYC5cblx0XHRnZXRfY29sbGVjdGlvbigpO1xuXHR9KTtcblxuXHRpZiAoaHlkcmF0aW5nKSB7XG5cdFx0YW5jaG9yID0gaHlkcmF0ZV9ub2RlO1xuXHR9XG59XG5cbi8qKlxuICogQWRkLCByZW1vdmUsIG9yIHJlb3JkZXIgaXRlbXMgb3V0cHV0IGJ5IGFuIGVhY2ggYmxvY2sgYXMgaXRzIGlucHV0IGNoYW5nZXNcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge0FycmF5PFY+fSBhcnJheVxuICogQHBhcmFtIHtFYWNoU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBDb21tZW50IHwgVGV4dH0gYW5jaG9yXG4gKiBAcGFyYW0geyhhbmNob3I6IE5vZGUsIGl0ZW06IE1heWJlU291cmNlPFY+LCBpbmRleDogbnVtYmVyIHwgU291cmNlPG51bWJlcj4pID0+IHZvaWR9IHJlbmRlcl9mblxuICogQHBhcmFtIHtudW1iZXJ9IGZsYWdzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzX2luZXJ0XG4gKiBAcGFyYW0geyh2YWx1ZTogViwgaW5kZXg6IG51bWJlcikgPT4gYW55fSBnZXRfa2V5XG4gKiBAcGFyYW0geygpID0+IFZbXX0gZ2V0X2NvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZWNvbmNpbGUoYXJyYXksIHN0YXRlLCBhbmNob3IsIHJlbmRlcl9mbiwgZmxhZ3MsIGlzX2luZXJ0LCBnZXRfa2V5LCBnZXRfY29sbGVjdGlvbikge1xuXHR2YXIgaXNfYW5pbWF0ZWQgPSAoZmxhZ3MgJiBFQUNIX0lTX0FOSU1BVEVEKSAhPT0gMDtcblx0dmFyIHNob3VsZF91cGRhdGUgPSAoZmxhZ3MgJiAoRUFDSF9JVEVNX1JFQUNUSVZFIHwgRUFDSF9JTkRFWF9SRUFDVElWRSkpICE9PSAwO1xuXG5cdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdHZhciBpdGVtcyA9IHN0YXRlLml0ZW1zO1xuXHR2YXIgZmlyc3QgPSBzdGF0ZS5maXJzdDtcblx0dmFyIGN1cnJlbnQgPSBmaXJzdDtcblxuXHQvKiogQHR5cGUge3VuZGVmaW5lZCB8IFNldDxFYWNoSXRlbT59ICovXG5cdHZhciBzZWVuO1xuXG5cdC8qKiBAdHlwZSB7RWFjaEl0ZW0gfCBudWxsfSAqL1xuXHR2YXIgcHJldiA9IG51bGw7XG5cblx0LyoqIEB0eXBlIHt1bmRlZmluZWQgfCBTZXQ8RWFjaEl0ZW0+fSAqL1xuXHR2YXIgdG9fYW5pbWF0ZTtcblxuXHQvKiogQHR5cGUge0VhY2hJdGVtW119ICovXG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0LyoqIEB0eXBlIHtFYWNoSXRlbVtdfSAqL1xuXHR2YXIgc3Rhc2hlZCA9IFtdO1xuXG5cdC8qKiBAdHlwZSB7Vn0gKi9cblx0dmFyIHZhbHVlO1xuXG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHR2YXIga2V5O1xuXG5cdC8qKiBAdHlwZSB7RWFjaEl0ZW0gfCB1bmRlZmluZWR9ICovXG5cdHZhciBpdGVtO1xuXG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHR2YXIgaTtcblxuXHRpZiAoaXNfYW5pbWF0ZWQpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhbHVlID0gYXJyYXlbaV07XG5cdFx0XHRrZXkgPSBnZXRfa2V5KHZhbHVlLCBpKTtcblx0XHRcdGl0ZW0gPSBpdGVtcy5nZXQoa2V5KTtcblxuXHRcdFx0aWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpdGVtLmE/Lm1lYXN1cmUoKTtcblx0XHRcdFx0KHRvX2FuaW1hdGUgPz89IG5ldyBTZXQoKSkuYWRkKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhbHVlID0gYXJyYXlbaV07XG5cdFx0a2V5ID0gZ2V0X2tleSh2YWx1ZSwgaSk7XG5cdFx0aXRlbSA9IGl0ZW1zLmdldChrZXkpO1xuXG5cdFx0aWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGNoaWxkX2FuY2hvciA9IGN1cnJlbnQgPyAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGN1cnJlbnQuZS5ub2Rlc19zdGFydCkgOiBhbmNob3I7XG5cblx0XHRcdHByZXYgPSBjcmVhdGVfaXRlbShcblx0XHRcdFx0Y2hpbGRfYW5jaG9yLFxuXHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0cHJldixcblx0XHRcdFx0cHJldiA9PT0gbnVsbCA/IHN0YXRlLmZpcnN0IDogcHJldi5uZXh0LFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRpLFxuXHRcdFx0XHRyZW5kZXJfZm4sXG5cdFx0XHRcdGZsYWdzLFxuXHRcdFx0XHRnZXRfY29sbGVjdGlvblxuXHRcdFx0KTtcblxuXHRcdFx0aXRlbXMuc2V0KGtleSwgcHJldik7XG5cblx0XHRcdG1hdGNoZWQgPSBbXTtcblx0XHRcdHN0YXNoZWQgPSBbXTtcblxuXHRcdFx0Y3VycmVudCA9IHByZXYubmV4dDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRfdXBkYXRlKSB7XG5cdFx0XHR1cGRhdGVfaXRlbShpdGVtLCB2YWx1ZSwgaSwgZmxhZ3MpO1xuXHRcdH1cblxuXHRcdGlmICgoaXRlbS5lLmYgJiBJTkVSVCkgIT09IDApIHtcblx0XHRcdHJlc3VtZV9lZmZlY3QoaXRlbS5lKTtcblx0XHRcdGlmIChpc19hbmltYXRlZCkge1xuXHRcdFx0XHRpdGVtLmE/LnVuZml4KCk7XG5cdFx0XHRcdCh0b19hbmltYXRlID8/PSBuZXcgU2V0KCkpLmRlbGV0ZShpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXRlbSAhPT0gY3VycmVudCkge1xuXHRcdFx0aWYgKHNlZW4gIT09IHVuZGVmaW5lZCAmJiBzZWVuLmhhcyhpdGVtKSkge1xuXHRcdFx0XHRpZiAobWF0Y2hlZC5sZW5ndGggPCBzdGFzaGVkLmxlbmd0aCkge1xuXHRcdFx0XHRcdC8vIG1vcmUgZWZmaWNpZW50IHRvIG1vdmUgbGF0ZXIgaXRlbXMgdG8gdGhlIGZyb250XG5cdFx0XHRcdFx0dmFyIHN0YXJ0ID0gc3Rhc2hlZFswXTtcblx0XHRcdFx0XHR2YXIgajtcblxuXHRcdFx0XHRcdHByZXYgPSBzdGFydC5wcmV2O1xuXG5cdFx0XHRcdFx0dmFyIGEgPSBtYXRjaGVkWzBdO1xuXHRcdFx0XHRcdHZhciBiID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1hdGNoZWQubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdG1vdmUobWF0Y2hlZFtqXSwgc3RhcnQsIGFuY2hvcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IHN0YXNoZWQubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdHNlZW4uZGVsZXRlKHN0YXNoZWRbal0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxpbmsoc3RhdGUsIGEucHJldiwgYi5uZXh0KTtcblx0XHRcdFx0XHRsaW5rKHN0YXRlLCBwcmV2LCBhKTtcblx0XHRcdFx0XHRsaW5rKHN0YXRlLCBiLCBzdGFydCk7XG5cblx0XHRcdFx0XHRjdXJyZW50ID0gc3RhcnQ7XG5cdFx0XHRcdFx0cHJldiA9IGI7XG5cdFx0XHRcdFx0aSAtPSAxO1xuXG5cdFx0XHRcdFx0bWF0Y2hlZCA9IFtdO1xuXHRcdFx0XHRcdHN0YXNoZWQgPSBbXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBtb3JlIGVmZmljaWVudCB0byBtb3ZlIGVhcmxpZXIgaXRlbXMgdG8gdGhlIGJhY2tcblx0XHRcdFx0XHRzZWVuLmRlbGV0ZShpdGVtKTtcblx0XHRcdFx0XHRtb3ZlKGl0ZW0sIGN1cnJlbnQsIGFuY2hvcik7XG5cblx0XHRcdFx0XHRsaW5rKHN0YXRlLCBpdGVtLnByZXYsIGl0ZW0ubmV4dCk7XG5cdFx0XHRcdFx0bGluayhzdGF0ZSwgaXRlbSwgcHJldiA9PT0gbnVsbCA/IHN0YXRlLmZpcnN0IDogcHJldi5uZXh0KTtcblx0XHRcdFx0XHRsaW5rKHN0YXRlLCBwcmV2LCBpdGVtKTtcblxuXHRcdFx0XHRcdHByZXYgPSBpdGVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG1hdGNoZWQgPSBbXTtcblx0XHRcdHN0YXNoZWQgPSBbXTtcblxuXHRcdFx0d2hpbGUgKGN1cnJlbnQgIT09IG51bGwgJiYgY3VycmVudC5rICE9PSBrZXkpIHtcblx0XHRcdFx0Ly8gSWYgdGhlIGVhY2ggYmxvY2sgaXNuJ3QgaW5lcnQgYW5kIGFuIGl0ZW0gaGFzIGFuIGVmZmVjdCB0aGF0IGlzIGFscmVhZHkgaW5lcnQsXG5cdFx0XHRcdC8vIHNraXAgb3ZlciBhZGRpbmcgaXQgdG8gb3VyIHNlZW4gU2V0IGFzIHRoZSBpdGVtIGlzIGFscmVhZHkgYmVpbmcgaGFuZGxlZFxuXHRcdFx0XHRpZiAoaXNfaW5lcnQgfHwgKGN1cnJlbnQuZS5mICYgSU5FUlQpID09PSAwKSB7XG5cdFx0XHRcdFx0KHNlZW4gPz89IG5ldyBTZXQoKSkuYWRkKGN1cnJlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXNoZWQucHVzaChjdXJyZW50KTtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnQubmV4dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGN1cnJlbnQgPT09IG51bGwpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW0gPSBjdXJyZW50O1xuXHRcdH1cblxuXHRcdG1hdGNoZWQucHVzaChpdGVtKTtcblx0XHRwcmV2ID0gaXRlbTtcblx0XHRjdXJyZW50ID0gaXRlbS5uZXh0O1xuXHR9XG5cblx0aWYgKGN1cnJlbnQgIT09IG51bGwgfHwgc2VlbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHRvX2Rlc3Ryb3kgPSBzZWVuID09PSB1bmRlZmluZWQgPyBbXSA6IGFycmF5X2Zyb20oc2Vlbik7XG5cblx0XHR3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gSWYgdGhlIGVhY2ggYmxvY2sgaXNuJ3QgaW5lcnQsIHRoZW4gaW5lcnQgZWZmZWN0cyBhcmUgY3VycmVudGx5IG91dHJvaW5nIGFuZCB3aWxsIGJlIHJlbW92ZWQgb25jZSB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZFxuXHRcdFx0aWYgKGlzX2luZXJ0IHx8IChjdXJyZW50LmUuZiAmIElORVJUKSA9PT0gMCkge1xuXHRcdFx0XHR0b19kZXN0cm95LnB1c2goY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuXHRcdH1cblxuXHRcdHZhciBkZXN0cm95X2xlbmd0aCA9IHRvX2Rlc3Ryb3kubGVuZ3RoO1xuXG5cdFx0aWYgKGRlc3Ryb3lfbGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIGNvbnRyb2xsZWRfYW5jaG9yID0gKGZsYWdzICYgRUFDSF9JU19DT05UUk9MTEVEKSAhPT0gMCAmJiBsZW5ndGggPT09IDAgPyBhbmNob3IgOiBudWxsO1xuXG5cdFx0XHRpZiAoaXNfYW5pbWF0ZWQpIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlc3Ryb3lfbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHR0b19kZXN0cm95W2ldLmE/Lm1lYXN1cmUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZXN0cm95X2xlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0dG9fZGVzdHJveVtpXS5hPy5maXgoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRwYXVzZV9lZmZlY3RzKHN0YXRlLCB0b19kZXN0cm95LCBjb250cm9sbGVkX2FuY2hvciwgaXRlbXMpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChpc19hbmltYXRlZCkge1xuXHRcdHF1ZXVlX21pY3JvX3Rhc2soKCkgPT4ge1xuXHRcdFx0aWYgKHRvX2FuaW1hdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdFx0Zm9yIChpdGVtIG9mIHRvX2FuaW1hdGUpIHtcblx0XHRcdFx0aXRlbS5hPy5hcHBseSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqIEB0eXBlIHtFZmZlY3R9ICovIChhY3RpdmVfZWZmZWN0KS5maXJzdCA9IHN0YXRlLmZpcnN0ICYmIHN0YXRlLmZpcnN0LmU7XG5cdC8qKiBAdHlwZSB7RWZmZWN0fSAqLyAoYWN0aXZlX2VmZmVjdCkubGFzdCA9IHByZXYgJiYgcHJldi5lO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWFjaEl0ZW19IGl0ZW1cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZV9pdGVtKGl0ZW0sIHZhbHVlLCBpbmRleCwgdHlwZSkge1xuXHRpZiAoKHR5cGUgJiBFQUNIX0lURU1fUkVBQ1RJVkUpICE9PSAwKSB7XG5cdFx0aW50ZXJuYWxfc2V0KGl0ZW0udiwgdmFsdWUpO1xuXHR9XG5cblx0aWYgKCh0eXBlICYgRUFDSF9JTkRFWF9SRUFDVElWRSkgIT09IDApIHtcblx0XHRpbnRlcm5hbF9zZXQoLyoqIEB0eXBlIHtWYWx1ZTxudW1iZXI+fSAqLyAoaXRlbS5pKSwgaW5kZXgpO1xuXHR9IGVsc2Uge1xuXHRcdGl0ZW0uaSA9IGluZGV4O1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Tm9kZX0gYW5jaG9yXG4gKiBAcGFyYW0ge0VhY2hTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7RWFjaEl0ZW0gfCBudWxsfSBwcmV2XG4gKiBAcGFyYW0ge0VhY2hJdGVtIHwgbnVsbH0gbmV4dFxuICogQHBhcmFtIHtWfSB2YWx1ZVxuICogQHBhcmFtIHt1bmtub3dufSBrZXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsoYW5jaG9yOiBOb2RlLCBpdGVtOiBWIHwgU291cmNlPFY+LCBpbmRleDogbnVtYmVyIHwgVmFsdWU8bnVtYmVyPikgPT4gdm9pZH0gcmVuZGVyX2ZuXG4gKiBAcGFyYW0ge251bWJlcn0gZmxhZ3NcbiAqIEBwYXJhbSB7KCkgPT4gVltdfSBnZXRfY29sbGVjdGlvblxuICogQHJldHVybnMge0VhY2hJdGVtfVxuICovXG5mdW5jdGlvbiBjcmVhdGVfaXRlbShcblx0YW5jaG9yLFxuXHRzdGF0ZSxcblx0cHJldixcblx0bmV4dCxcblx0dmFsdWUsXG5cdGtleSxcblx0aW5kZXgsXG5cdHJlbmRlcl9mbixcblx0ZmxhZ3MsXG5cdGdldF9jb2xsZWN0aW9uXG4pIHtcblx0dmFyIHByZXZpb3VzX2VhY2hfaXRlbSA9IGN1cnJlbnRfZWFjaF9pdGVtO1xuXHR2YXIgcmVhY3RpdmUgPSAoZmxhZ3MgJiBFQUNIX0lURU1fUkVBQ1RJVkUpICE9PSAwO1xuXHR2YXIgbXV0YWJsZSA9IChmbGFncyAmIEVBQ0hfSVRFTV9JTU1VVEFCTEUpID09PSAwO1xuXG5cdHZhciB2ID0gcmVhY3RpdmUgPyAobXV0YWJsZSA/IG11dGFibGVfc291cmNlKHZhbHVlKSA6IHNvdXJjZSh2YWx1ZSkpIDogdmFsdWU7XG5cdHZhciBpID0gKGZsYWdzICYgRUFDSF9JTkRFWF9SRUFDVElWRSkgPT09IDAgPyBpbmRleCA6IHNvdXJjZShpbmRleCk7XG5cblx0aWYgKERFViAmJiByZWFjdGl2ZSkge1xuXHRcdC8vIEZvciB0cmFjaW5nIHB1cnBvc2VzLCB3ZSBuZWVkIHRvIGxpbmsgdGhlIHNvdXJjZSBzaWduYWwgd2UgY3JlYXRlIHdpdGggdGhlXG5cdFx0Ly8gY29sbGVjdGlvbiArIGluZGV4IHNvIHRoYXQgdHJhY2luZyB3b3JrcyBhcyBpbnRlbmRlZFxuXHRcdC8qKiBAdHlwZSB7VmFsdWV9ICovICh2KS5kZWJ1ZyA9ICgpID0+IHtcblx0XHRcdHZhciBjb2xsZWN0aW9uX2luZGV4ID0gdHlwZW9mIGkgPT09ICdudW1iZXInID8gaW5kZXggOiBpLnY7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdFx0Z2V0X2NvbGxlY3Rpb24oKVtjb2xsZWN0aW9uX2luZGV4XTtcblx0XHR9O1xuXHR9XG5cblx0LyoqIEB0eXBlIHtFYWNoSXRlbX0gKi9cblx0dmFyIGl0ZW0gPSB7XG5cdFx0aSxcblx0XHR2LFxuXHRcdGs6IGtleSxcblx0XHRhOiBudWxsLFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlOiBudWxsLFxuXHRcdHByZXYsXG5cdFx0bmV4dFxuXHR9O1xuXG5cdGN1cnJlbnRfZWFjaF9pdGVtID0gaXRlbTtcblxuXHR0cnkge1xuXHRcdGl0ZW0uZSA9IGJyYW5jaCgoKSA9PiByZW5kZXJfZm4oYW5jaG9yLCB2LCBpKSwgaHlkcmF0aW5nKTtcblxuXHRcdGl0ZW0uZS5wcmV2ID0gcHJldiAmJiBwcmV2LmU7XG5cdFx0aXRlbS5lLm5leHQgPSBuZXh0ICYmIG5leHQuZTtcblxuXHRcdGlmIChwcmV2ID09PSBudWxsKSB7XG5cdFx0XHRzdGF0ZS5maXJzdCA9IGl0ZW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByZXYubmV4dCA9IGl0ZW07XG5cdFx0XHRwcmV2LmUubmV4dCA9IGl0ZW0uZTtcblx0XHR9XG5cblx0XHRpZiAobmV4dCAhPT0gbnVsbCkge1xuXHRcdFx0bmV4dC5wcmV2ID0gaXRlbTtcblx0XHRcdG5leHQuZS5wcmV2ID0gaXRlbS5lO1xuXHRcdH1cblxuXHRcdHJldHVybiBpdGVtO1xuXHR9IGZpbmFsbHkge1xuXHRcdGN1cnJlbnRfZWFjaF9pdGVtID0gcHJldmlvdXNfZWFjaF9pdGVtO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFYWNoSXRlbX0gaXRlbVxuICogQHBhcmFtIHtFYWNoSXRlbSB8IG51bGx9IG5leHRcbiAqIEBwYXJhbSB7VGV4dCB8IEVsZW1lbnQgfCBDb21tZW50fSBhbmNob3JcbiAqL1xuZnVuY3Rpb24gbW92ZShpdGVtLCBuZXh0LCBhbmNob3IpIHtcblx0dmFyIGVuZCA9IGl0ZW0ubmV4dCA/IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAoaXRlbS5uZXh0LmUubm9kZXNfc3RhcnQpIDogYW5jaG9yO1xuXG5cdHZhciBkZXN0ID0gbmV4dCA/IC8qKiBAdHlwZSB7VGVtcGxhdGVOb2RlfSAqLyAobmV4dC5lLm5vZGVzX3N0YXJ0KSA6IGFuY2hvcjtcblx0dmFyIG5vZGUgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGl0ZW0uZS5ub2Rlc19zdGFydCk7XG5cblx0d2hpbGUgKG5vZGUgIT09IGVuZCkge1xuXHRcdHZhciBuZXh0X25vZGUgPSAvKiogQHR5cGUge1RlbXBsYXRlTm9kZX0gKi8gKGdldF9uZXh0X3NpYmxpbmcobm9kZSkpO1xuXHRcdGRlc3QuYmVmb3JlKG5vZGUpO1xuXHRcdG5vZGUgPSBuZXh0X25vZGU7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VhY2hTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7RWFjaEl0ZW0gfCBudWxsfSBwcmV2XG4gKiBAcGFyYW0ge0VhY2hJdGVtIHwgbnVsbH0gbmV4dFxuICovXG5mdW5jdGlvbiBsaW5rKHN0YXRlLCBwcmV2LCBuZXh0KSB7XG5cdGlmIChwcmV2ID09PSBudWxsKSB7XG5cdFx0c3RhdGUuZmlyc3QgPSBuZXh0O1xuXHR9IGVsc2Uge1xuXHRcdHByZXYubmV4dCA9IG5leHQ7XG5cdFx0cHJldi5lLm5leHQgPSBuZXh0ICYmIG5leHQuZTtcblx0fVxuXG5cdGlmIChuZXh0ICE9PSBudWxsKSB7XG5cdFx0bmV4dC5wcmV2ID0gcHJldjtcblx0XHRuZXh0LmUucHJldiA9IHByZXYgJiYgcHJldi5lO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBERVYgfSBmcm9tICdlc20tZW52JztcbmltcG9ydCB7IGh5ZHJhdGluZyB9IGZyb20gJy4uL2h5ZHJhdGlvbi5qcyc7XG5pbXBvcnQgeyBnZXRfZGVzY3JpcHRvcnMsIGdldF9wcm90b3R5cGVfb2YgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgY3JlYXRlX2V2ZW50LCBkZWxlZ2F0ZSB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGFkZF9mb3JtX3Jlc2V0X2xpc3RlbmVyLCBhdXRvZm9jdXMgfSBmcm9tICcuL21pc2MuanMnO1xuaW1wb3J0ICogYXMgdyBmcm9tICcuLi8uLi93YXJuaW5ncy5qcyc7XG5pbXBvcnQgeyBMT0FESU5HX0FUVFJfU1lNQk9MIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHF1ZXVlX2lkbGVfdGFzayB9IGZyb20gJy4uL3Rhc2suanMnO1xuaW1wb3J0IHsgaXNfY2FwdHVyZV9ldmVudCwgaXNfZGVsZWdhdGVkLCBub3JtYWxpemVfYXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0YWN0aXZlX3JlYWN0aW9uLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0c2V0X2FjdGl2ZV9yZWFjdGlvblxufSBmcm9tICcuLi8uLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IGNsc3ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvYXR0cmlidXRlcy5qcyc7XG5cbi8qKlxuICogVGhlIHZhbHVlL2NoZWNrZWQgYXR0cmlidXRlIGluIHRoZSB0ZW1wbGF0ZSBhY3R1YWxseSBjb3JyZXNwb25kcyB0byB0aGUgZGVmYXVsdFZhbHVlIHByb3BlcnR5LCBzbyB3ZSBuZWVkXG4gKiB0byByZW1vdmUgaXQgdXBvbiBoeWRyYXRpb24gdG8gYXZvaWQgYSBidWcgd2hlbiBzb21lb25lIHJlc2V0cyB0aGUgZm9ybSB2YWx1ZS5cbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlX2lucHV0X2RlZmF1bHRzKGlucHV0KSB7XG5cdGlmICghaHlkcmF0aW5nKSByZXR1cm47XG5cblx0dmFyIGFscmVhZHlfcmVtb3ZlZCA9IGZhbHNlO1xuXG5cdC8vIFdlIHRyeSBhbmQgcmVtb3ZlIHRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgbGF0ZXIsIHJhdGhlciB0aGFuIHN5bmMgZHVyaW5nIGh5ZHJhdGlvbi5cblx0Ly8gRG9pbmcgaXQgc3luYyBkdXJpbmcgaHlkcmF0aW9uIGhhcyBhIG5lZ2F0aXZlIGltcGFjdCBvbiBwZXJmb3JtYW5jZSwgYnV0IGRlZmVycmluZyB0aGVcblx0Ly8gd29yayBpbiBhbiBpZGxlIHRhc2sgYWxsZXZpYXRlcyB0aGlzIGdyZWF0bHkuIElmIGEgZm9ybSByZXNldCBldmVudCBjb21lcyBpbiBiZWZvcmVcblx0Ly8gdGhlIGlkbGUgY2FsbGJhY2ssIHRoZW4gd2UgZW5zdXJlIHRoZSBpbnB1dCBkZWZhdWx0cyBhcmUgY2xlYXJlZCBqdXN0IGJlZm9yZS5cblx0dmFyIHJlbW92ZV9kZWZhdWx0cyA9ICgpID0+IHtcblx0XHRpZiAoYWxyZWFkeV9yZW1vdmVkKSByZXR1cm47XG5cdFx0YWxyZWFkeV9yZW1vdmVkID0gdHJ1ZTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgYXR0cmlidXRlcyBidXQgcHJlc2VydmUgdGhlIHZhbHVlc1xuXHRcdGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuXHRcdFx0c2V0X2F0dHJpYnV0ZShpbnB1dCwgJ3ZhbHVlJywgbnVsbCk7XG5cdFx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuXHRcdFx0dmFyIGNoZWNrZWQgPSBpbnB1dC5jaGVja2VkO1xuXHRcdFx0c2V0X2F0dHJpYnV0ZShpbnB1dCwgJ2NoZWNrZWQnLCBudWxsKTtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSBjaGVja2VkO1xuXHRcdH1cblx0fTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGlucHV0Ll9fb25fciA9IHJlbW92ZV9kZWZhdWx0cztcblx0cXVldWVfaWRsZV90YXNrKHJlbW92ZV9kZWZhdWx0cyk7XG5cdGFkZF9mb3JtX3Jlc2V0X2xpc3RlbmVyKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF92YWx1ZShlbGVtZW50LCB2YWx1ZSkge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHZhciBhdHRyaWJ1dGVzID0gKGVsZW1lbnQuX19hdHRyaWJ1dGVzID8/PSB7fSk7XG5cblx0aWYgKFxuXHRcdGF0dHJpYnV0ZXMudmFsdWUgPT09XG5cdFx0XHQoYXR0cmlidXRlcy52YWx1ZSA9XG5cdFx0XHRcdC8vIHRyZWF0IG51bGwgYW5kIHVuZGVmaW5lZCB0aGUgc2FtZSBmb3IgdGhlIGluaXRpYWwgdmFsdWVcblx0XHRcdFx0dmFsdWUgPz8gdW5kZWZpbmVkKSB8fFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHQvLyBgcHJvZ3Jlc3NgIGVsZW1lbnRzIGFsd2F5cyBuZWVkIHRoZWlyIHZhbHVlIHNldCB3aGVuIGl0cyBgMGBcblx0XHQoZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSAwIHx8IGVsZW1lbnQubm9kZU5hbWUgIT09ICdQUk9HUkVTUycpKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2NoZWNrZWQoZWxlbWVudCwgY2hlY2tlZCkge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdHZhciBhdHRyaWJ1dGVzID0gKGVsZW1lbnQuX19hdHRyaWJ1dGVzID8/PSB7fSk7XG5cblx0aWYgKFxuXHRcdGF0dHJpYnV0ZXMuY2hlY2tlZCA9PT1cblx0XHQoYXR0cmlidXRlcy5jaGVja2VkID1cblx0XHRcdC8vIHRyZWF0IG51bGwgYW5kIHVuZGVmaW5lZCB0aGUgc2FtZSBmb3IgdGhlIGluaXRpYWwgdmFsdWVcblx0XHRcdGNoZWNrZWQgPz8gdW5kZWZpbmVkKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdGVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgYHNlbGVjdGVkYCBhdHRyaWJ1dGUgb24gYW4gYG9wdGlvbmAgZWxlbWVudC5cbiAqIE5vdCBzZXQgdGhyb3VnaCB0aGUgcHJvcGVydHkgYmVjYXVzZSB0aGF0IGRvZXNuJ3QgcmVmbGVjdCB0byB0aGUgRE9NLFxuICogd2hpY2ggbWVhbnMgaXQgd291bGRuJ3QgYmUgdGFrZW4gaW50byBhY2NvdW50IHdoZW4gYSBmb3JtIGlzIHJlc2V0LlxuICogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3NlbGVjdGVkKGVsZW1lbnQsIHNlbGVjdGVkKSB7XG5cdGlmIChzZWxlY3RlZCkge1xuXHRcdC8vIFRoZSBzZWxlY3RlZCBvcHRpb24gY291bGQndmUgY2hhbmdlZCB2aWEgdXNlciBzZWxlY3Rpb24sIGFuZFxuXHRcdC8vIHNldHRpbmcgdGhlIHZhbHVlIHdpdGhvdXQgdGhpcyBjaGVjayB3b3VsZCBzZXQgaXQgYmFjay5cblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuXHR9XG59XG5cbi8qKlxuICogQXBwbGllcyB0aGUgZGVmYXVsdCBjaGVja2VkIHByb3BlcnR5IHdpdGhvdXQgaW5mbHVlbmNpbmcgdGhlIGN1cnJlbnQgY2hlY2tlZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtib29sZWFufSBjaGVja2VkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRfZGVmYXVsdF9jaGVja2VkKGVsZW1lbnQsIGNoZWNrZWQpIHtcblx0Y29uc3QgZXhpc3RpbmdfdmFsdWUgPSBlbGVtZW50LmNoZWNrZWQ7XG5cdGVsZW1lbnQuZGVmYXVsdENoZWNrZWQgPSBjaGVja2VkO1xuXHRlbGVtZW50LmNoZWNrZWQgPSBleGlzdGluZ192YWx1ZTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IHdpdGhvdXQgaW5mbHVlbmNpbmcgdGhlIGN1cnJlbnQgdmFsdWUgcHJvcGVydHkuXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9kZWZhdWx0X3ZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7XG5cdGNvbnN0IGV4aXN0aW5nX3ZhbHVlID0gZWxlbWVudC52YWx1ZTtcblx0ZWxlbWVudC5kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcblx0ZWxlbWVudC52YWx1ZSA9IGV4aXN0aW5nX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcF93YXJuaW5nXVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlLCBza2lwX3dhcm5pbmcpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHR2YXIgYXR0cmlidXRlcyA9IChlbGVtZW50Ll9fYXR0cmlidXRlcyA/Pz0ge30pO1xuXG5cdGlmIChoeWRyYXRpbmcpIHtcblx0XHRhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXG5cdFx0aWYgKFxuXHRcdFx0YXR0cmlidXRlID09PSAnc3JjJyB8fFxuXHRcdFx0YXR0cmlidXRlID09PSAnc3Jjc2V0JyB8fFxuXHRcdFx0KGF0dHJpYnV0ZSA9PT0gJ2hyZWYnICYmIGVsZW1lbnQubm9kZU5hbWUgPT09ICdMSU5LJylcblx0XHQpIHtcblx0XHRcdGlmICghc2tpcF93YXJuaW5nKSB7XG5cdFx0XHRcdGNoZWNrX3NyY19pbl9kZXZfaHlkcmF0aW9uKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUgPz8gJycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSByZXNldCB0aGVzZSBhdHRyaWJ1dGVzLCB0aGV5IHdvdWxkIHJlc3VsdCBpbiBhbm90aGVyIG5ldHdvcmsgcmVxdWVzdCwgd2hpY2ggd2Ugd2FudCB0byBhdm9pZC5cblx0XHRcdC8vIFdlIGFzc3VtZSB0aGV5IGFyZSB0aGUgc2FtZSBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGFzIGNoZWNraW5nIGlmIHRoZXkgYXJlIGVxdWFsIGlzIGV4cGVuc2l2ZVxuXHRcdFx0Ly8gKHdlIGNhbid0IGp1c3QgY29tcGFyZSB0aGUgc3RyaW5ncyBhcyB0aGV5IGNhbiBiZSBkaWZmZXJlbnQgYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciBidXQgcmVzdWx0IGluIHRoZVxuXHRcdFx0Ly8gc2FtZSB1cmwsIHNvIHdlIHdvdWxkIG5lZWQgdG8gY3JlYXRlIGhpZGRlbiBhbmNob3IgZWxlbWVudHMgdG8gY29tcGFyZSB0aGVtKVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT09IChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSB2YWx1ZSkpIHJldHVybjtcblxuXHRpZiAoYXR0cmlidXRlID09PSAnc3R5bGUnICYmICdfX3N0eWxlcycgaW4gZWxlbWVudCkge1xuXHRcdC8vIHJlc2V0IHN0eWxlcyB0byBmb3JjZSBzdHlsZTogZGlyZWN0aXZlIHRvIHVwZGF0ZVxuXHRcdGVsZW1lbnQuX19zdHlsZXMgPSB7fTtcblx0fVxuXG5cdGlmIChhdHRyaWJ1dGUgPT09ICdsb2FkaW5nJykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRlbGVtZW50W0xPQURJTkdfQVRUUl9TWU1CT0xdID0gdmFsdWU7XG5cdH1cblxuXHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiBnZXRfc2V0dGVycyhlbGVtZW50KS5pbmNsdWRlcyhhdHRyaWJ1dGUpKSB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGVsZW1lbnRbYXR0cmlidXRlXSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBkb21cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3hsaW5rX2F0dHJpYnV0ZShkb20sIGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0ZG9tLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0Ly8gV2UgbmVlZCB0byBlbnN1cmUgdGhhdCBzZXR0aW5nIGN1c3RvbSBlbGVtZW50IHByb3BzLCB3aGljaCBjYW5cblx0Ly8gaW52b2tlIGxpZmVjeWNsZSBtZXRob2RzIG9uIG90aGVyIGN1c3RvbSBlbGVtZW50cywgZG9lcyBub3QgYWxzb1xuXHQvLyBhc3NvY2lhdGUgdGhvc2UgbGlmZWN5Y2xlIG1ldGhvZHMgd2l0aCB0aGUgY3VycmVudCBhY3RpdmUgcmVhY3Rpb25cblx0Ly8gb3IgZWZmZWN0XG5cdHZhciBwcmV2aW91c19yZWFjdGlvbiA9IGFjdGl2ZV9yZWFjdGlvbjtcblx0dmFyIHByZXZpb3VzX2VmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cblx0c2V0X2FjdGl2ZV9yZWFjdGlvbihudWxsKTtcblx0c2V0X2FjdGl2ZV9lZmZlY3QobnVsbCk7XG5cdHRyeSB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8gRG9uJ3QgY29tcHV0ZSBzZXR0ZXJzIGZvciBjdXN0b20gZWxlbWVudHMgd2hpbGUgdGhleSBhcmVuJ3QgcmVnaXN0ZXJlZCB5ZXQsXG5cdFx0XHQvLyBiZWNhdXNlIGR1cmluZyB0aGVpciB1cGdyYWRlL2luc3RhbnRpYXRpb24gdGhleSBtaWdodCBhZGQgbW9yZSBzZXR0ZXJzLlxuXHRcdFx0Ly8gSW5zdGVhZCwgZmFsbCBiYWNrIHRvIGEgc2ltcGxlIFwiYW4gb2JqZWN0LCB0aGVuIHNldCBhcyBwcm9wZXJ0eVwiIGhldXJpc3RpYy5cblx0XHRcdHNldHRlcnNfY2FjaGUuaGFzKG5vZGUubm9kZU5hbWUpIHx8IGN1c3RvbUVsZW1lbnRzLmdldChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0PyBnZXRfc2V0dGVycyhub2RlKS5pbmNsdWRlcyhwcm9wKVxuXHRcdFx0XHQ6IHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0XHQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdG5vZGVbcHJvcF0gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gV2UgZGlkIGdldHRlcnMgZXRjIGNoZWNrcyBhbHJlYWR5LCBzdHJpbmdpZnkgYmVmb3JlIHBhc3NpbmcgdG8gc2V0X2F0dHJpYnV0ZVxuXHRcdFx0Ly8gdG8gZW5zdXJlIGl0IGRvZXNuJ3QgaW52b2tlIHRoZSBzYW1lIGxvZ2ljIGFnYWluLCBhbmQgcG90ZW50aWFsbHkgcG9wdWxhdGluZ1xuXHRcdFx0Ly8gdGhlIHNldHRlcnMgY2FjaGUgdG9vIGVhcmx5LlxuXHRcdFx0c2V0X2F0dHJpYnV0ZShub2RlLCBwcm9wLCB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0c2V0X2FjdGl2ZV9yZWFjdGlvbihwcmV2aW91c19yZWFjdGlvbik7XG5cdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0fVxufVxuXG4vKipcbiAqIFNwcmVhZHMgYXR0cmlidXRlcyBvbnRvIGEgRE9NIGVsZW1lbnQsIHRha2luZyBpbnRvIGFjY291bnQgdGhlIGN1cnJlbnRseSBzZXQgYXR0cmlidXRlc1xuICogQHBhcmFtIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlfSBlbGVtZW50XG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWR9IHByZXZcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gbmV4dCBOZXcgYXR0cmlidXRlcyAtIHRoaXMgZnVuY3Rpb24gbXV0YXRlcyB0aGlzIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IFtjc3NfaGFzaF1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXNlcnZlX2F0dHJpYnV0ZV9jYXNlXVxuICogQHBhcmFtIHtib29sZWFufSBbaXNfY3VzdG9tX2VsZW1lbnRdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwX3dhcm5pbmddXG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgYW55Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKFxuXHRlbGVtZW50LFxuXHRwcmV2LFxuXHRuZXh0LFxuXHRjc3NfaGFzaCxcblx0cHJlc2VydmVfYXR0cmlidXRlX2Nhc2UgPSBmYWxzZSxcblx0aXNfY3VzdG9tX2VsZW1lbnQgPSBmYWxzZSxcblx0c2tpcF93YXJuaW5nID0gZmFsc2Vcbikge1xuXHR2YXIgY3VycmVudCA9IHByZXYgfHwge307XG5cdHZhciBpc19vcHRpb25fZWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ09QVElPTic7XG5cblx0Zm9yICh2YXIga2V5IGluIHByZXYpIHtcblx0XHRpZiAoIShrZXkgaW4gbmV4dCkpIHtcblx0XHRcdG5leHRba2V5XSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG5leHQuY2xhc3MpIHtcblx0XHRuZXh0LmNsYXNzID0gY2xzeChuZXh0LmNsYXNzKTtcblx0fVxuXG5cdGlmIChjc3NfaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0bmV4dC5jbGFzcyA9IG5leHQuY2xhc3MgPyBuZXh0LmNsYXNzICsgJyAnICsgY3NzX2hhc2ggOiBjc3NfaGFzaDtcblx0fVxuXG5cdHZhciBzZXR0ZXJzID0gZ2V0X3NldHRlcnMoZWxlbWVudCk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHR2YXIgYXR0cmlidXRlcyA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICoqLyAoZWxlbWVudC5fX2F0dHJpYnV0ZXMgPz89IHt9KTtcblxuXHQvLyBzaW5jZSBrZXkgaXMgY2FwdHVyZWQgd2UgdXNlIGNvbnN0XG5cdGZvciAoY29uc3Qga2V5IGluIG5leHQpIHtcblx0XHQvLyBsZXQgaW5zdGVhZCBvZiB2YXIgYmVjYXVzZSByZWZlcmVuY2VkIGluIGEgY2xvc3VyZVxuXHRcdGxldCB2YWx1ZSA9IG5leHRba2V5XTtcblxuXHRcdC8vIFVwIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGRvIHRoaXMgZm9yIHRoZSBpbml0aWFsIHZhbHVlLCB0b28sIGV2ZW4gaWYgaXQncyB1bmRlZmluZWQsXG5cdFx0Ly8gYW5kIHRoaXMgd291bGRuJ3QgYmUgcmVhY2hlZCBpbiBjYXNlIG9mIHVuZGVmaW5lZCBiZWNhdXNlIG9mIHRoZSBlcXVhbGl0eSBjaGVjayBiZWxvd1xuXHRcdGlmIChpc19vcHRpb25fZWxlbWVudCAmJiBrZXkgPT09ICd2YWx1ZScgJiYgdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhlIDxvcHRpb24+IGVsZW1lbnQgaXMgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSByZW1vdmluZyB0aGUgdmFsdWUgYXR0cmlidXRlIG1lYW5zXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgc2V0IHRvIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG9wdGlvbiBlbGVtZW50LCBhbmQgc2V0dGluZyB0aGUgdmFsdWVcblx0XHRcdC8vIHRvIG51bGwgb3IgdW5kZWZpbmVkIG1lYW5zIHRoZSB2YWx1ZSBpcyBzZXQgdG8gdGhlIHN0cmluZyBcIm51bGxcIiBvciBcInVuZGVmaW5lZFwiLlxuXHRcdFx0Ly8gVG8gYWxpZ24gd2l0aCBob3cgd2UgaGFuZGxlIHRoaXMgY2FzZSBpbiBub24tc3ByZWFkLXNjZW5hcmlvcywgdGhpcyBsb2dpYyBpcyBuZWVkZWQuXG5cdFx0XHQvLyBUaGVyZSdzIGEgc3VwZXItZWRnZS1jYXNlIGJ1ZyBoZXJlIHRoYXQgaXMgbGVmdCBpbiBpbiBmYXZvciBvZiBzbWFsbGVyIGNvZGUgc2l6ZTpcblx0XHRcdC8vIEJlY2F1c2Ugb2YgdGhlIFwic2V0IG1pc3NpbmcgcHJvcHMgdG8gbnVsbFwiIGxvZ2ljIGFib3ZlLCB3ZSBjYW4ndCBkaWZmZXJlbnRpYXRlXG5cdFx0XHQvLyBiZXR3ZWVuIGEgbWlzc2luZyB2YWx1ZSBhbmQgYW4gZXhwbGljaXRseSBzZXQgdmFsdWUgb2YgbnVsbCBvciB1bmRlZmluZWQuIFRoYXQgbWVhbnNcblx0XHRcdC8vIHRoYXQgb25jZSBzZXQsIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgYW4gPG9wdGlvbj4gZWxlbWVudCBjYW4ndCBiZSByZW1vdmVkLiBUaGlzIGlzXG5cdFx0XHQvLyBhIHZlcnkgcmFyZSBlZGdlIGNhc2UsIGFuZCByZW1vdmluZyB0aGUgYXR0cmlidXRlIGFsdG9nZXRoZXIgaXNuJ3QgcG9zc2libGUgZWl0aGVyXG5cdFx0XHQvLyBmb3IgdGhlIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0+IGNhc2UsIHNvIHdlJ3JlIG5vdCBsb3NpbmcgYW55IGZ1bmN0aW9uYWxpdHkgaGVyZS5cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGVsZW1lbnQudmFsdWUgPSBlbGVtZW50Ll9fdmFsdWUgPSAnJztcblx0XHRcdGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHByZXZfdmFsdWUgPSBjdXJyZW50W2tleV07XG5cdFx0aWYgKHZhbHVlID09PSBwcmV2X3ZhbHVlKSBjb250aW51ZTtcblxuXHRcdGN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXG5cdFx0dmFyIHByZWZpeCA9IGtleVswXSArIGtleVsxXTsgLy8gdGhpcyBpcyBmYXN0ZXIgdGhhbiBrZXkuc2xpY2UoMCwgMilcblx0XHRpZiAocHJlZml4ID09PSAnJCQnKSBjb250aW51ZTtcblxuXHRcdGlmIChwcmVmaXggPT09ICdvbicpIHtcblx0XHRcdC8qKiBAdHlwZSB7eyBjYXB0dXJlPzogdHJ1ZSB9fSAqL1xuXHRcdFx0Y29uc3Qgb3B0cyA9IHt9O1xuXHRcdFx0Y29uc3QgZXZlbnRfaGFuZGxlX2tleSA9ICckJCcgKyBrZXk7XG5cdFx0XHRsZXQgZXZlbnRfbmFtZSA9IGtleS5zbGljZSgyKTtcblx0XHRcdHZhciBkZWxlZ2F0ZWQgPSBpc19kZWxlZ2F0ZWQoZXZlbnRfbmFtZSk7XG5cblx0XHRcdGlmIChpc19jYXB0dXJlX2V2ZW50KGV2ZW50X25hbWUpKSB7XG5cdFx0XHRcdGV2ZW50X25hbWUgPSBldmVudF9uYW1lLnNsaWNlKDAsIC03KTtcblx0XHRcdFx0b3B0cy5jYXB0dXJlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZWxlZ2F0ZWQgJiYgcHJldl92YWx1ZSkge1xuXHRcdFx0XHQvLyBMaXN0ZW5pbmcgdG8gc2FtZSBldmVudCBidXQgZGlmZmVyZW50IGhhbmRsZXIgLT4gb3VyIGhhbmRsZSBmdW5jdGlvbiBiZWxvdyB0YWtlcyBjYXJlIG9mIHRoaXNcblx0XHRcdFx0Ly8gSWYgd2Ugd2VyZSB0byByZW1vdmUgYW5kIGFkZCBsaXN0ZW5lcnMgaW4gdGhpcyBjYXNlLCBpdCBjb3VsZCBoYXBwZW4gdGhhdCB0aGUgZXZlbnQgaXMgXCJzd2FsbG93ZWRcIlxuXHRcdFx0XHQvLyAodGhlIGJyb3dzZXIgc2VlbXMgdG8gbm90IGtub3cgeWV0IHRoYXQgYSBuZXcgb25lIGV4aXN0cyBub3cpIGFuZCBkb2Vzbid0IHJlYWNoIHRoZSBoYW5kbGVyXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzExOTAzXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSBjb250aW51ZTtcblxuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRfbmFtZSwgY3VycmVudFtldmVudF9oYW5kbGVfa2V5XSwgb3B0cyk7XG5cdFx0XHRcdGN1cnJlbnRbZXZlbnRfaGFuZGxlX2tleV0gPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoIWRlbGVnYXRlZCkge1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIEB0aGlzIHthbnl9XG5cdFx0XHRcdFx0ICogQHBhcmFtIHtFdmVudH0gZXZ0XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0ZnVuY3Rpb24gaGFuZGxlKGV2dCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudFtrZXldLmNhbGwodGhpcywgZXZ0KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjdXJyZW50W2V2ZW50X2hhbmRsZV9rZXldID0gY3JlYXRlX2V2ZW50KGV2ZW50X25hbWUsIGVsZW1lbnQsIGhhbmRsZSwgb3B0cyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdGVsZW1lbnRbYF9fJHtldmVudF9uYW1lfWBdID0gdmFsdWU7XG5cdFx0XHRcdFx0ZGVsZWdhdGUoW2V2ZW50X25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChkZWxlZ2F0ZWQpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRlbGVtZW50W2BfXyR7ZXZlbnRfbmFtZX1gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJyAmJiB2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSB2YWx1ZSArICcnO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnYXV0b2ZvY3VzJykge1xuXHRcdFx0YXV0b2ZvY3VzKC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChlbGVtZW50KSwgQm9vbGVhbih2YWx1ZSkpO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScgfHwgKGtleSA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZSAhPSBudWxsKSkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0ZWxlbWVudC52YWx1ZSA9IGVsZW1lbnRba2V5XSA9IGVsZW1lbnQuX192YWx1ZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnc2VsZWN0ZWQnICYmIGlzX29wdGlvbl9lbGVtZW50KSB7XG5cdFx0XHRzZXRfc2VsZWN0ZWQoLyoqIEB0eXBlIHtIVE1MT3B0aW9uRWxlbWVudH0gKi8gKGVsZW1lbnQpLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuYW1lID0ga2V5O1xuXHRcdFx0aWYgKCFwcmVzZXJ2ZV9hdHRyaWJ1dGVfY2FzZSkge1xuXHRcdFx0XHRuYW1lID0gbm9ybWFsaXplX2F0dHJpYnV0ZShuYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGlzX2RlZmF1bHQgPSBuYW1lID09PSAnZGVmYXVsdFZhbHVlJyB8fCBuYW1lID09PSAnZGVmYXVsdENoZWNrZWQnO1xuXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCAmJiAhaXNfY3VzdG9tX2VsZW1lbnQgJiYgIWlzX2RlZmF1bHQpIHtcblx0XHRcdFx0YXR0cmlidXRlc1trZXldID0gbnVsbDtcblxuXHRcdFx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJyB8fCBuYW1lID09PSAnY2hlY2tlZCcpIHtcblx0XHRcdFx0XHQvLyByZW1vdmluZyB2YWx1ZS9jaGVja2VkIGFsc28gcmVtb3ZlcyBkZWZhdWx0VmFsdWUvZGVmYXVsdENoZWNrZWQg4oCUIHByZXNlcnZlXG5cdFx0XHRcdFx0bGV0IGlucHV0ID0gLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyAoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykge1xuXHRcdFx0XHRcdFx0bGV0IHByZXYgPSBpbnB1dC5kZWZhdWx0VmFsdWU7XG5cdFx0XHRcdFx0XHRpbnB1dC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0XHRcdFx0XHRpbnB1dC5kZWZhdWx0VmFsdWUgPSBwcmV2O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgcHJldiA9IGlucHV0LmRlZmF1bHRDaGVja2VkO1xuXHRcdFx0XHRcdFx0aW5wdXQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRcdFx0aW5wdXQuZGVmYXVsdENoZWNrZWQgPSBwcmV2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpc19kZWZhdWx0IHx8XG5cdFx0XHRcdChzZXR0ZXJzLmluY2x1ZGVzKG5hbWUpICYmIChpc19jdXN0b21fZWxlbWVudCB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdGVsZW1lbnRbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmIChoeWRyYXRpbmcgJiYgKG5hbWUgPT09ICdzcmMnIHx8IG5hbWUgPT09ICdocmVmJyB8fCBuYW1lID09PSAnc3Jjc2V0JykpIHtcblx0XHRcdFx0XHRpZiAoIXNraXBfd2FybmluZykgY2hlY2tfc3JjX2luX2Rldl9oeWRyYXRpb24oZWxlbWVudCwgbmFtZSwgdmFsdWUgPz8gJycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNldF9hdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChrZXkgPT09ICdzdHlsZScgJiYgJ19fc3R5bGVzJyBpbiBlbGVtZW50KSB7XG5cdFx0XHQvLyByZXNldCBzdHlsZXMgdG8gZm9yY2Ugc3R5bGU6IGRpcmVjdGl2ZSB0byB1cGRhdGVcblx0XHRcdGVsZW1lbnQuX19zdHlsZXMgPSB7fTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxuLyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBzdHJpbmdbXT59ICovXG52YXIgc2V0dGVyc19jYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAqL1xuZnVuY3Rpb24gZ2V0X3NldHRlcnMoZWxlbWVudCkge1xuXHR2YXIgc2V0dGVycyA9IHNldHRlcnNfY2FjaGUuZ2V0KGVsZW1lbnQubm9kZU5hbWUpO1xuXHRpZiAoc2V0dGVycykgcmV0dXJuIHNldHRlcnM7XG5cdHNldHRlcnNfY2FjaGUuc2V0KGVsZW1lbnQubm9kZU5hbWUsIChzZXR0ZXJzID0gW10pKTtcblxuXHR2YXIgZGVzY3JpcHRvcnM7XG5cdHZhciBwcm90byA9IGVsZW1lbnQ7IC8vIEluIHRoZSBjYXNlIG9mIGN1c3RvbSBlbGVtZW50cyB0aGVyZSBtaWdodCBiZSBzZXR0ZXJzIG9uIHRoZSBpbnN0YW5jZVxuXHR2YXIgZWxlbWVudF9wcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG5cdC8vIFN0b3AgYXQgRWxlbWVudCwgZnJvbSB0aGVyZSBvbiB0aGVyZSdzIG9ubHkgdW5uZWNlc3Nhcnkgc2V0dGVycyB3ZSdyZSBub3QgaW50ZXJlc3RlZCBpblxuXHQvLyBEbyBub3QgdXNlIGNvbnRydWN0b3IubmFtZSBoZXJlIGFzIHRoYXQncyB1bnJlbGlhYmxlIGluIHNvbWUgYnJvd3NlciBlbnZpcm9ubWVudHNcblx0d2hpbGUgKGVsZW1lbnRfcHJvdG8gIT09IHByb3RvKSB7XG5cdFx0ZGVzY3JpcHRvcnMgPSBnZXRfZGVzY3JpcHRvcnMocHJvdG8pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGRlc2NyaXB0b3JzKSB7XG5cdFx0XHRpZiAoZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcblx0XHRcdFx0c2V0dGVycy5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvdG8gPSBnZXRfcHJvdG90eXBlX29mKHByb3RvKTtcblx0fVxuXG5cdHJldHVybiBzZXR0ZXJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZnVuY3Rpb24gY2hlY2tfc3JjX2luX2Rldl9oeWRyYXRpb24oZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRpZiAoIURFVikgcmV0dXJuO1xuXHRpZiAoYXR0cmlidXRlID09PSAnc3Jjc2V0JyAmJiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnQsIHZhbHVlKSkgcmV0dXJuO1xuXHRpZiAoc3JjX3VybF9lcXVhbChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpID8/ICcnLCB2YWx1ZSkpIHJldHVybjtcblxuXHR3Lmh5ZHJhdGlvbl9hdHRyaWJ1dGVfY2hhbmdlZChcblx0XHRhdHRyaWJ1dGUsXG5cdFx0ZWxlbWVudC5vdXRlckhUTUwucmVwbGFjZShlbGVtZW50LmlubmVySFRNTCwgZWxlbWVudC5pbm5lckhUTUwgJiYgJy4uLicpLFxuXHRcdFN0cmluZyh2YWx1ZSlcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudF9zcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzcmNfdXJsX2VxdWFsKGVsZW1lbnRfc3JjLCB1cmwpIHtcblx0aWYgKGVsZW1lbnRfc3JjID09PSB1cmwpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gbmV3IFVSTChlbGVtZW50X3NyYywgZG9jdW1lbnQuYmFzZVVSSSkuaHJlZiA9PT0gbmV3IFVSTCh1cmwsIGRvY3VtZW50LmJhc2VVUkkpLmhyZWY7XG59XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3Jjc2V0ICovXG5mdW5jdGlvbiBzcGxpdF9zcmNzZXQoc3Jjc2V0KSB7XG5cdHJldHVybiBzcmNzZXQuc3BsaXQoJywnKS5tYXAoKHNyYykgPT4gc3JjLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MU291cmNlRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmNzZXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBzcmNzZXRfdXJsX2VxdWFsKGVsZW1lbnQsIHNyY3NldCkge1xuXHR2YXIgZWxlbWVudF91cmxzID0gc3BsaXRfc3Jjc2V0KGVsZW1lbnQuc3Jjc2V0KTtcblx0dmFyIHVybHMgPSBzcGxpdF9zcmNzZXQoc3Jjc2V0KTtcblxuXHRyZXR1cm4gKFxuXHRcdHVybHMubGVuZ3RoID09PSBlbGVtZW50X3VybHMubGVuZ3RoICYmXG5cdFx0dXJscy5ldmVyeShcblx0XHRcdChbdXJsLCB3aWR0aF0sIGkpID0+XG5cdFx0XHRcdHdpZHRoID09PSBlbGVtZW50X3VybHNbaV1bMV0gJiZcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byB0ZXN0IGJvdGggd2F5cyBiZWNhdXNlIFZpdGUgd2lsbCBjcmVhdGUgYW4gYSBmdWxsIFVSTCB3aXRoXG5cdFx0XHRcdC8vIGBuZXcgVVJMKGFzc2V0LCBpbXBvcnQubWV0YS51cmwpLmhyZWZgIGZvciB0aGUgY2xpZW50IHdoZW4gYGJhc2U6ICcuLydgLCBhbmQgdGhlXG5cdFx0XHRcdC8vIHJlbGF0aXZlIFVSTHMgaW5zaWRlIHNyY3NldCBhcmUgbm90IGF1dG9tYXRpY2FsbHkgcmVzb2x2ZWQgdG8gYWJzb2x1dGUgVVJMcyBieVxuXHRcdFx0XHQvLyBicm93c2VycyAoaW4gY29udHJhc3QgdG8gaW1nLnNyYykuIFRoaXMgbWVhbnMgYm90aCBTU1IgYW5kIERPTSBjb2RlIGNvdWxkXG5cdFx0XHRcdC8vIGNvbnRhaW4gcmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMcy5cblx0XHRcdFx0KHNyY191cmxfZXF1YWwoZWxlbWVudF91cmxzW2ldWzBdLCB1cmwpIHx8IHNyY191cmxfZXF1YWwodXJsLCBlbGVtZW50X3VybHNbaV1bMF0pKVxuXHRcdClcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlX2xhenlfaW1nKGVsZW1lbnQpIHtcblx0Ly8gSWYgd2UncmUgdXNpbmcgYW4gaW1hZ2UgdGhhdCBoYXMgYSBsYXp5IGxvYWRpbmcgYXR0cmlidXRlLCB3ZSBuZWVkIHRvIGFwcGx5XG5cdC8vIHRoZSBsb2FkaW5nIGFuZCBzcmMgYWZ0ZXIgdGhlIGltZyBlbGVtZW50IGhhcyBiZWVuIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC5cblx0Ly8gT3RoZXJ3aXNlIHRoZSBsYXp5IGJlaGF2aW91ciB3aWxsIG5vdCB3b3JrIGR1ZSB0byBvdXIgY2xvbmVOb2RlIGhldXJpc3RpYyBmb3Jcblx0Ly8gdGVtcGxhdGVzLlxuXHRpZiAoIWh5ZHJhdGluZyAmJiBlbGVtZW50LmxvYWRpbmcgPT09ICdsYXp5Jykge1xuXHRcdHZhciBzcmMgPSBlbGVtZW50LnNyYztcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0ZWxlbWVudFtMT0FESU5HX0FUVFJfU1lNQk9MXSA9IG51bGw7XG5cdFx0ZWxlbWVudC5sb2FkaW5nID0gJ2VhZ2VyJztcblx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdGlmIChlbGVtZW50W0xPQURJTkdfQVRUUl9TWU1CT0xdICE9PSAnZWFnZXInKSB7XG5cdFx0XHRcdGVsZW1lbnQubG9hZGluZyA9ICdsYXp5Jztcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQuc3JjID0gc3JjO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBoeWRyYXRpbmcgfSBmcm9tICcuLi9oeWRyYXRpb24uanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7U1ZHRWxlbWVudH0gZG9tXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X3N2Z19jbGFzcyhkb20sIHZhbHVlLCBoYXNoKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgbmVlZCB0byBhZGQgX19jbGFzc05hbWUgdG8gcGF0Y2hlZCBwcm90b3R5cGVcblx0dmFyIHByZXZfY2xhc3NfbmFtZSA9IGRvbS5fX2NsYXNzTmFtZTtcblx0dmFyIG5leHRfY2xhc3NfbmFtZSA9IHRvX2NsYXNzKHZhbHVlLCBoYXNoKTtcblxuXHRpZiAoaHlkcmF0aW5nICYmIGRvbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09IG5leHRfY2xhc3NfbmFtZSkge1xuXHRcdC8vIEluIGNhc2Ugb2YgaHlkcmF0aW9uIGRvbid0IHJlc2V0IHRoZSBjbGFzcyBhcyBpdCdzIGFscmVhZHkgY29ycmVjdC5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIG5lZWQgdG8gYWRkIF9fY2xhc3NOYW1lIHRvIHBhdGNoZWQgcHJvdG90eXBlXG5cdFx0ZG9tLl9fY2xhc3NOYW1lID0gbmV4dF9jbGFzc19uYW1lO1xuXHR9IGVsc2UgaWYgKFxuXHRcdHByZXZfY2xhc3NfbmFtZSAhPT0gbmV4dF9jbGFzc19uYW1lIHx8XG5cdFx0KGh5ZHJhdGluZyAmJiBkb20uZ2V0QXR0cmlidXRlKCdjbGFzcycpICE9PSBuZXh0X2NsYXNzX25hbWUpXG5cdCkge1xuXHRcdGlmIChuZXh0X2NsYXNzX25hbWUgPT09ICcnKSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKCdjbGFzcycsIG5leHRfY2xhc3NfbmFtZSk7XG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBuZWVkIHRvIGFkZCBfX2NsYXNzTmFtZSB0byBwYXRjaGVkIHByb3RvdHlwZVxuXHRcdGRvbS5fX2NsYXNzTmFtZSA9IG5leHRfY2xhc3NfbmFtZTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TWF0aE1MRWxlbWVudH0gZG9tXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0X21hdGhtbF9jbGFzcyhkb20sIHZhbHVlLCBoYXNoKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgbmVlZCB0byBhZGQgX19jbGFzc05hbWUgdG8gcGF0Y2hlZCBwcm90b3R5cGVcblx0dmFyIHByZXZfY2xhc3NfbmFtZSA9IGRvbS5fX2NsYXNzTmFtZTtcblx0dmFyIG5leHRfY2xhc3NfbmFtZSA9IHRvX2NsYXNzKHZhbHVlLCBoYXNoKTtcblxuXHRpZiAoaHlkcmF0aW5nICYmIGRvbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09IG5leHRfY2xhc3NfbmFtZSkge1xuXHRcdC8vIEluIGNhc2Ugb2YgaHlkcmF0aW9uIGRvbid0IHJlc2V0IHRoZSBjbGFzcyBhcyBpdCdzIGFscmVhZHkgY29ycmVjdC5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIG5lZWQgdG8gYWRkIF9fY2xhc3NOYW1lIHRvIHBhdGNoZWQgcHJvdG90eXBlXG5cdFx0ZG9tLl9fY2xhc3NOYW1lID0gbmV4dF9jbGFzc19uYW1lO1xuXHR9IGVsc2UgaWYgKFxuXHRcdHByZXZfY2xhc3NfbmFtZSAhPT0gbmV4dF9jbGFzc19uYW1lIHx8XG5cdFx0KGh5ZHJhdGluZyAmJiBkb20uZ2V0QXR0cmlidXRlKCdjbGFzcycpICE9PSBuZXh0X2NsYXNzX25hbWUpXG5cdCkge1xuXHRcdGlmIChuZXh0X2NsYXNzX25hbWUgPT09ICcnKSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKCdjbGFzcycsIG5leHRfY2xhc3NfbmFtZSk7XG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBuZWVkIHRvIGFkZCBfX2NsYXNzTmFtZSB0byBwYXRjaGVkIHByb3RvdHlwZVxuXHRcdGRvbS5fX2NsYXNzTmFtZSA9IG5leHRfY2xhc3NfbmFtZTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldF9jbGFzcyhkb20sIHZhbHVlLCBoYXNoKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgbmVlZCB0byBhZGQgX19jbGFzc05hbWUgdG8gcGF0Y2hlZCBwcm90b3R5cGVcblx0dmFyIHByZXZfY2xhc3NfbmFtZSA9IGRvbS5fX2NsYXNzTmFtZTtcblx0dmFyIG5leHRfY2xhc3NfbmFtZSA9IHRvX2NsYXNzKHZhbHVlLCBoYXNoKTtcblxuXHRpZiAoaHlkcmF0aW5nICYmIGRvbS5jbGFzc05hbWUgPT09IG5leHRfY2xhc3NfbmFtZSkge1xuXHRcdC8vIEluIGNhc2Ugb2YgaHlkcmF0aW9uIGRvbid0IHJlc2V0IHRoZSBjbGFzcyBhcyBpdCdzIGFscmVhZHkgY29ycmVjdC5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIG5lZWQgdG8gYWRkIF9fY2xhc3NOYW1lIHRvIHBhdGNoZWQgcHJvdG90eXBlXG5cdFx0ZG9tLl9fY2xhc3NOYW1lID0gbmV4dF9jbGFzc19uYW1lO1xuXHR9IGVsc2UgaWYgKFxuXHRcdHByZXZfY2xhc3NfbmFtZSAhPT0gbmV4dF9jbGFzc19uYW1lIHx8XG5cdFx0KGh5ZHJhdGluZyAmJiBkb20uY2xhc3NOYW1lICE9PSBuZXh0X2NsYXNzX25hbWUpXG5cdCkge1xuXHRcdC8vIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgd2hlbiB0aGUgdmFsdWUgaXMgb25seSBhbiBlbXB0eSBzdHJpbmcgY2F1c2VzXG5cdFx0Ly8gcGVmb3JtYW5jZSBpc3N1ZXMgdnMgc2ltcGx5IG1ha2luZyB0aGUgY2xhc3NOYW1lIGFuIGVtcHR5IHN0cmluZy4gU29cblx0XHQvLyB3ZSBzaG91bGQgb25seSByZW1vdmUgdGhlIGNsYXNzIGlmIHRoZSB0aGUgdmFsdWUgaXMgbnVsbGlzaC5cblx0XHRpZiAodmFsdWUgPT0gbnVsbCAmJiAhaGFzaCkge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLmNsYXNzTmFtZSA9IG5leHRfY2xhc3NfbmFtZTtcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIG5lZWQgdG8gYWRkIF9fY2xhc3NOYW1lIHRvIHBhdGNoZWQgcHJvdG90eXBlXG5cdFx0ZG9tLl9fY2xhc3NOYW1lID0gbmV4dF9jbGFzc19uYW1lO1xuXHR9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBWfVxuICovXG5mdW5jdGlvbiB0b19jbGFzcyh2YWx1ZSwgaGFzaCkge1xuXHRyZXR1cm4gKHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlKSArIChoYXNoID8gJyAnICsgaGFzaCA6ICcnKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGRvbVxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzX25hbWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGRvbSwgY2xhc3NfbmFtZSwgdmFsdWUpIHtcblx0aWYgKHZhbHVlKSB7XG5cdFx0aWYgKGRvbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NfbmFtZSkpIHJldHVybjtcblx0XHRkb20uY2xhc3NMaXN0LmFkZChjbGFzc19uYW1lKTtcblx0fSBlbHNlIHtcblx0XHRpZiAoIWRvbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NfbmFtZSkpIHJldHVybjtcblx0XHRkb20uY2xhc3NMaXN0LnJlbW92ZShjbGFzc19uYW1lKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgZWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vcmVhY3Rpdml0eS9lZmZlY3RzLmpzJztcbmltcG9ydCB7IGxpc3Rlbl90b19ldmVudF9hbmRfcmVzZXRfZXZlbnQgfSBmcm9tICcuL3NoYXJlZC5qcyc7XG5pbXBvcnQgeyB1bnRyYWNrIH0gZnJvbSAnLi4vLi4vLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBpcyB9IGZyb20gJy4uLy4uLy4uL3Byb3h5LmpzJztcblxuLyoqXG4gKiBTZWxlY3RzIHRoZSBjb3JyZWN0IG9wdGlvbihzKSAoZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhpcyBpcyBhIG11bHRpcGxlIHNlbGVjdClcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vdW50aW5nXVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlLCBtb3VudGluZykge1xuXHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XG5cdFx0cmV0dXJuIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpO1xuXHR9XG5cblx0Zm9yICh2YXIgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XG5cdFx0dmFyIG9wdGlvbl92YWx1ZSA9IGdldF9vcHRpb25fdmFsdWUob3B0aW9uKTtcblx0XHRpZiAoaXMob3B0aW9uX3ZhbHVlLCB2YWx1ZSkpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFtb3VudGluZyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2VsZWN0LnNlbGVjdGVkSW5kZXggPSAtMTsgLy8gbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuXHR9XG59XG5cbi8qKlxuICogU2VsZWN0cyB0aGUgY29ycmVjdCBvcHRpb24ocykgaWYgYHZhbHVlYCBpcyBnaXZlbixcbiAqIGFuZCB0aGVuIHNldHMgdXAgYSBtdXRhdGlvbiBvYnNlcnZlciB0byBzeW5jIHRoZVxuICogY3VycmVudCBzZWxlY3Rpb24gdG8gdGhlIGRvbSB3aGVuIGl0IGNoYW5nZXMuIFN1Y2hcbiAqIGNoYW5nZXMgY291bGQgZm9yIGV4YW1wbGUgb2NjdXIgd2hlbiBvcHRpb25zIGFyZVxuICogaW5zaWRlIGFuIGAjZWFjaGAgYmxvY2suXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0XG4gKiBAcGFyYW0geygpID0+IFZ9IFtnZXRfdmFsdWVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X3NlbGVjdChzZWxlY3QsIGdldF92YWx1ZSkge1xuXHRsZXQgbW91bnRpbmcgPSB0cnVlO1xuXHRlZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChnZXRfdmFsdWUpIHtcblx0XHRcdHNlbGVjdF9vcHRpb24oc2VsZWN0LCB1bnRyYWNrKGdldF92YWx1ZSksIG1vdW50aW5nKTtcblx0XHR9XG5cdFx0bW91bnRpbmcgPSBmYWxzZTtcblxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdHZhciB2YWx1ZSA9IHNlbGVjdC5fX3ZhbHVlO1xuXHRcdFx0c2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKTtcblx0XHRcdC8vIERlbGliZXJhdGVseSBkb24ndCB1cGRhdGUgdGhlIHBvdGVudGlhbCBiaW5kaW5nIHZhbHVlLFxuXHRcdFx0Ly8gdGhlIG1vZGVsIHNob3VsZCBiZSBwcmVzZXJ2ZWQgdW5sZXNzIGV4cGxpY2l0bHkgY2hhbmdlZFxuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShzZWxlY3QsIHtcblx0XHRcdC8vIExpc3RlbiB0byBvcHRpb24gZWxlbWVudCBjaGFuZ2VzXG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLCAvLyBiZWNhdXNlIG9mIDxvcHRncm91cD5cblx0XHRcdC8vIExpc3RlbiB0byBvcHRpb24gZWxlbWVudCB2YWx1ZSBhdHRyaWJ1dGUgY2hhbmdlc1xuXHRcdFx0Ly8gKGRvZXNuJ3QgZ2V0IG5vdGlmaWVkIG9mIHNlbGVjdCB2YWx1ZSBjaGFuZ2VzLFxuXHRcdFx0Ly8gYmVjYXVzZSB0aGF0IHByb3BlcnR5IGlzIG5vdCByZWZsZWN0ZWQgYXMgYW4gYXR0cmlidXRlKVxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZUZpbHRlcjogWyd2YWx1ZSddXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH07XG5cdH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdFxuICogQHBhcmFtIHsoKSA9PiB1bmtub3dufSBnZXRcbiAqIEBwYXJhbSB7KHZhbHVlOiB1bmtub3duKSA9PiB2b2lkfSBzZXRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZF9zZWxlY3RfdmFsdWUoc2VsZWN0LCBnZXQsIHNldCA9IGdldCkge1xuXHR2YXIgbW91bnRpbmcgPSB0cnVlO1xuXG5cdGxpc3Rlbl90b19ldmVudF9hbmRfcmVzZXRfZXZlbnQoc2VsZWN0LCAnY2hhbmdlJywgKGlzX3Jlc2V0KSA9PiB7XG5cdFx0dmFyIHF1ZXJ5ID0gaXNfcmVzZXQgPyAnW3NlbGVjdGVkXScgOiAnOmNoZWNrZWQnO1xuXHRcdC8qKiBAdHlwZSB7dW5rbm93bn0gKi9cblx0XHR2YXIgdmFsdWU7XG5cblx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XG5cdFx0XHR2YWx1ZSA9IFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSwgZ2V0X29wdGlvbl92YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8qKiBAdHlwZSB7SFRNTE9wdGlvbkVsZW1lbnQgfCBudWxsfSAqL1xuXHRcdFx0dmFyIHNlbGVjdGVkX29wdGlvbiA9XG5cdFx0XHRcdHNlbGVjdC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KSA/P1xuXHRcdFx0XHQvLyB3aWxsIGZhbGwgYmFjayB0byBmaXJzdCBub24tZGlzYWJsZWQgb3B0aW9uIGlmIG5vIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRcdFx0XHRzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uOm5vdChbZGlzYWJsZWRdKScpO1xuXHRcdFx0dmFsdWUgPSBzZWxlY3RlZF9vcHRpb24gJiYgZ2V0X29wdGlvbl92YWx1ZShzZWxlY3RlZF9vcHRpb24pO1xuXHRcdH1cblxuXHRcdHNldCh2YWx1ZSk7XG5cdH0pO1xuXG5cdC8vIE5lZWRzIHRvIGJlIGFuIGVmZmVjdCwgbm90IGEgcmVuZGVyX2VmZmVjdCwgc28gdGhhdCBpbiBjYXNlIG9mIGVhY2ggbG9vcHMgdGhlIGxvZ2ljIHJ1bnMgYWZ0ZXIgdGhlIGVhY2ggYmxvY2sgaGFzIHVwZGF0ZWRcblx0ZWZmZWN0KCgpID0+IHtcblx0XHR2YXIgdmFsdWUgPSBnZXQoKTtcblx0XHRzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUsIG1vdW50aW5nKTtcblxuXHRcdC8vIE1vdW50aW5nIGFuZCB2YWx1ZSB1bmRlZmluZWQgLT4gdGFrZSBzZWxlY3Rpb24gZnJvbSBkb21cblx0XHRpZiAobW91bnRpbmcgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0LyoqIEB0eXBlIHtIVE1MT3B0aW9uRWxlbWVudCB8IG51bGx9ICovXG5cdFx0XHR2YXIgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG5cdFx0XHRpZiAoc2VsZWN0ZWRfb3B0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdHZhbHVlID0gZ2V0X29wdGlvbl92YWx1ZShzZWxlY3RlZF9vcHRpb24pO1xuXHRcdFx0XHRzZXQodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRzZWxlY3QuX192YWx1ZSA9IHZhbHVlO1xuXHRcdG1vdW50aW5nID0gZmFsc2U7XG5cdH0pO1xuXG5cdC8vIGRvbid0IHBhc3MgZ2V0X3ZhbHVlLCB3ZSBhbHJlYWR5IGluaXRpYWxpemUgaXQgaW4gdGhlIGVmZmVjdCBhYm92ZVxuXHRpbml0X3NlbGVjdChzZWxlY3QpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBWXG4gKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcbiAqIEBwYXJhbSB7Vn0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2YoZ2V0X29wdGlvbl92YWx1ZShvcHRpb24pKTtcblx0fVxufVxuXG4vKiogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gb3B0aW9uICovXG5mdW5jdGlvbiBnZXRfb3B0aW9uX3ZhbHVlKG9wdGlvbikge1xuXHQvLyBfX3ZhbHVlIG9ubHkgZXhpc3RzIGlmIHRoZSA8b3B0aW9uPiBoYXMgYSB2YWx1ZSBhdHRyaWJ1dGVcblx0aWYgKCdfX3ZhbHVlJyBpbiBvcHRpb24pIHtcblx0XHRyZXR1cm4gb3B0aW9uLl9fdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9wdGlvbi52YWx1ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgU1RBVEVfU1lNQk9MIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGVmZmVjdCwgcmVuZGVyX2VmZmVjdCB9IGZyb20gJy4uLy4uLy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyB1bnRyYWNrIH0gZnJvbSAnLi4vLi4vLi4vcnVudGltZS5qcyc7XG5pbXBvcnQgeyBxdWV1ZV9taWNyb190YXNrIH0gZnJvbSAnLi4vLi4vdGFzay5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGJvdW5kX3ZhbHVlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRfb3JfY29tcG9uZW50XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNfYm91bmRfdGhpcyhib3VuZF92YWx1ZSwgZWxlbWVudF9vcl9jb21wb25lbnQpIHtcblx0cmV0dXJuIChcblx0XHRib3VuZF92YWx1ZSA9PT0gZWxlbWVudF9vcl9jb21wb25lbnQgfHwgYm91bmRfdmFsdWU/LltTVEFURV9TWU1CT0xdID09PSBlbGVtZW50X29yX2NvbXBvbmVudFxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBlbGVtZW50X29yX2NvbXBvbmVudFxuICogQHBhcmFtIHsodmFsdWU6IHVua25vd24sIC4uLnBhcnRzOiB1bmtub3duW10pID0+IHZvaWR9IHVwZGF0ZVxuICogQHBhcmFtIHsoLi4ucGFydHM6IHVua25vd25bXSkgPT4gdW5rbm93bn0gZ2V0X3ZhbHVlXG4gKiBAcGFyYW0geygpID0+IHVua25vd25bXX0gW2dldF9wYXJ0c10gU2V0IGlmIHRoZSB0aGlzIGJpbmRpbmcgaXMgdXNlZCBpbnNpZGUgYW4gZWFjaCBibG9jayxcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJucyBhbGwgdGhlIHBhcnRzIG9mIHRoZSBlYWNoIGJsb2NrIGNvbnRleHQgdGhhdCBhcmUgdXNlZCBpbiB0aGUgZXhwcmVzc2lvblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kX3RoaXMoZWxlbWVudF9vcl9jb21wb25lbnQgPSB7fSwgdXBkYXRlLCBnZXRfdmFsdWUsIGdldF9wYXJ0cykge1xuXHRlZmZlY3QoKCkgPT4ge1xuXHRcdC8qKiBAdHlwZSB7dW5rbm93bltdfSAqL1xuXHRcdHZhciBvbGRfcGFydHM7XG5cblx0XHQvKiogQHR5cGUge3Vua25vd25bXX0gKi9cblx0XHR2YXIgcGFydHM7XG5cblx0XHRyZW5kZXJfZWZmZWN0KCgpID0+IHtcblx0XHRcdG9sZF9wYXJ0cyA9IHBhcnRzO1xuXHRcdFx0Ly8gV2Ugb25seSB0cmFjayBjaGFuZ2VzIHRvIHRoZSBwYXJ0cywgbm90IHRoZSB2YWx1ZSBpdHNlbGYgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcmVydW5zLlxuXHRcdFx0cGFydHMgPSBnZXRfcGFydHM/LigpIHx8IFtdO1xuXG5cdFx0XHR1bnRyYWNrKCgpID0+IHtcblx0XHRcdFx0aWYgKGVsZW1lbnRfb3JfY29tcG9uZW50ICE9PSBnZXRfdmFsdWUoLi4ucGFydHMpKSB7XG5cdFx0XHRcdFx0dXBkYXRlKGVsZW1lbnRfb3JfY29tcG9uZW50LCAuLi5wYXJ0cyk7XG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBpcyBhbiBlZmZlY3QgcmVydW4gKGNhdXNlOiBlYWNoIGJsb2NrIGNvbnRleHQgY2hhbmdlcyksIHRoZW4gbnVsbGZpeSB0aGUgYmluZGluZyBhdFxuXHRcdFx0XHRcdC8vIHRoZSBwcmV2aW91cyBwb3NpdGlvbiBpZiBpdCBpc24ndCBhbHJlYWR5IHRha2VuIG92ZXIgYnkgYSBkaWZmZXJlbnQgZWZmZWN0LlxuXHRcdFx0XHRcdGlmIChvbGRfcGFydHMgJiYgaXNfYm91bmRfdGhpcyhnZXRfdmFsdWUoLi4ub2xkX3BhcnRzKSwgZWxlbWVudF9vcl9jb21wb25lbnQpKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGUobnVsbCwgLi4ub2xkX3BhcnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdC8vIFdlIGNhbm5vdCB1c2UgZWZmZWN0cyBpbiB0aGUgdGVhcmRvd24gcGhhc2UsIHdlIHdlIHVzZSBhIG1pY3JvdGFzayBpbnN0ZWFkLlxuXHRcdFx0cXVldWVfbWljcm9fdGFzaygoKSA9PiB7XG5cdFx0XHRcdGlmIChwYXJ0cyAmJiBpc19ib3VuZF90aGlzKGdldF92YWx1ZSguLi5wYXJ0cyksIGVsZW1lbnRfb3JfY29tcG9uZW50KSkge1xuXHRcdFx0XHRcdHVwZGF0ZShudWxsLCAuLi5wYXJ0cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cdH0pO1xuXG5cdHJldHVybiBlbGVtZW50X29yX2NvbXBvbmVudDtcbn1cbiIsIi8qKiBAaW1wb3J0IHsgQ29tcG9uZW50Q29udGV4dExlZ2FjeSB9IGZyb20gJyNjbGllbnQnICovXG5pbXBvcnQgeyBydW4sIHJ1bl9hbGwgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgZGVyaXZlZCB9IGZyb20gJy4uLy4uL3JlYWN0aXZpdHkvZGVyaXZlZHMuanMnO1xuaW1wb3J0IHsgdXNlcl9wcmVfZWZmZWN0LCB1c2VyX2VmZmVjdCB9IGZyb20gJy4uLy4uL3JlYWN0aXZpdHkvZWZmZWN0cy5qcyc7XG5pbXBvcnQgeyBjb21wb25lbnRfY29udGV4dCwgZGVlcF9yZWFkX3N0YXRlLCBnZXQsIHVudHJhY2sgfSBmcm9tICcuLi8uLi9ydW50aW1lLmpzJztcblxuLyoqXG4gKiBMZWdhY3ktbW9kZSBvbmx5OiBDYWxsIGBvbk1vdW50YCBjYWxsYmFja3MgYW5kIHNldCB1cCBgYmVmb3JlVXBkYXRlYC9gYWZ0ZXJVcGRhdGVgIGVmZmVjdHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbXV0YWJsZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoaW1tdXRhYmxlID0gZmFsc2UpIHtcblx0Y29uc3QgY29udGV4dCA9IC8qKiBAdHlwZSB7Q29tcG9uZW50Q29udGV4dExlZ2FjeX0gKi8gKGNvbXBvbmVudF9jb250ZXh0KTtcblxuXHRjb25zdCBjYWxsYmFja3MgPSBjb250ZXh0LmwudTtcblx0aWYgKCFjYWxsYmFja3MpIHJldHVybjtcblxuXHRsZXQgcHJvcHMgPSAoKSA9PiBkZWVwX3JlYWRfc3RhdGUoY29udGV4dC5zKTtcblxuXHRpZiAoaW1tdXRhYmxlKSB7XG5cdFx0bGV0IHZlcnNpb24gPSAwO1xuXHRcdGxldCBwcmV2ID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqLyAoe30pO1xuXG5cdFx0Ly8gSW4gbGVnYWN5IGltbXV0YWJsZSBtb2RlLCBiZWZvcmUvYWZ0ZXJVcGRhdGUgb25seSBmaXJlIGlmIHRoZSBvYmplY3QgaWRlbnRpdHkgb2YgYSBwcm9wIGNoYW5nZXNcblx0XHRjb25zdCBkID0gZGVyaXZlZCgoKSA9PiB7XG5cdFx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcHJvcHMgPSBjb250ZXh0LnM7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuXHRcdFx0XHRpZiAocHJvcHNba2V5XSAhPT0gcHJldltrZXldKSB7XG5cdFx0XHRcdFx0cHJldltrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZWQpIHZlcnNpb24rKztcblx0XHRcdHJldHVybiB2ZXJzaW9uO1xuXHRcdH0pO1xuXG5cdFx0cHJvcHMgPSAoKSA9PiBnZXQoZCk7XG5cdH1cblxuXHQvLyBiZWZvcmVVcGRhdGVcblx0aWYgKGNhbGxiYWNrcy5iLmxlbmd0aCkge1xuXHRcdHVzZXJfcHJlX2VmZmVjdCgoKSA9PiB7XG5cdFx0XHRvYnNlcnZlX2FsbChjb250ZXh0LCBwcm9wcyk7XG5cdFx0XHRydW5fYWxsKGNhbGxiYWNrcy5iKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIG9uTW91bnQgKG11c3QgcnVuIGJlZm9yZSBhZnRlclVwZGF0ZSlcblx0dXNlcl9lZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZucyA9IHVudHJhY2soKCkgPT4gY2FsbGJhY2tzLm0ubWFwKHJ1bikpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGZuIG9mIGZucykge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdC8vIGFmdGVyVXBkYXRlXG5cdGlmIChjYWxsYmFja3MuYS5sZW5ndGgpIHtcblx0XHR1c2VyX2VmZmVjdCgoKSA9PiB7XG5cdFx0XHRvYnNlcnZlX2FsbChjb250ZXh0LCBwcm9wcyk7XG5cdFx0XHRydW5fYWxsKGNhbGxiYWNrcy5hKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEludm9rZSB0aGUgZ2V0dGVyIG9mIGFsbCBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudFxuICogc28gdGhleSBjYW4gYmUgcmVnaXN0ZXJlZCB0byB0aGUgZWZmZWN0IHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGluLlxuICogQHBhcmFtIHtDb21wb25lbnRDb250ZXh0TGVnYWN5fSBjb250ZXh0XG4gKiBAcGFyYW0geygoKSA9PiB2b2lkKX0gcHJvcHNcbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZV9hbGwoY29udGV4dCwgcHJvcHMpIHtcblx0aWYgKGNvbnRleHQubC5zKSB7XG5cdFx0Zm9yIChjb25zdCBzaWduYWwgb2YgY29udGV4dC5sLnMpIGdldChzaWduYWwpO1xuXHR9XG5cblx0cHJvcHMoKTtcbn1cbiIsIi8qKiBAaW1wb3J0IHsgU3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyIH0gZnJvbSAnI2NsaWVudCcgKi9cbi8qKiBAaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcjc2hhcmVkJyAqL1xuaW1wb3J0IHsgc3Vic2NyaWJlX3RvX3N0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXRpbHMuanMnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9ydW50aW1lLmpzJztcbmltcG9ydCB7IHRlYXJkb3duIH0gZnJvbSAnLi9lZmZlY3RzLmpzJztcbmltcG9ydCB7IG11dGFibGVfc291cmNlLCBzZXQgfSBmcm9tICcuL3NvdXJjZXMuanMnO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9wIGN1cnJlbnRseSBiZWluZyByZWFkIGlzIGEgc3RvcmUgYmluZGluZywgYXMgaW5cbiAqIGA8Q2hpbGQgYmluZDp4PXskeX0gLz5gLiBJZiBpdCBpcywgd2UgdHJlYXQgdGhlIHByb3AgYXMgbXV0YWJsZSBldmVuIGluXG4gKiBydW5lcyBtb2RlLCBhbmQgc2tpcCBgYmluZGluZ19wcm9wZXJ0eV9ub25fcmVhY3RpdmVgIHZhbGlkYXRpb25cbiAqL1xubGV0IGlzX3N0b3JlX2JpbmRpbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50IHZhbHVlIG9mIGEgc3RvcmUuIElmIHRoZSBzdG9yZSBpc24ndCBzdWJzY3JpYmVkIHRvIHlldCwgaXQgd2lsbCBjcmVhdGUgYSBwcm94eVxuICogc2lnbmFsIHRoYXQgd2lsbCBiZSB1cGRhdGVkIHdoZW4gdGhlIHN0b3JlIGlzLiBUaGUgc3RvcmUgcmVmZXJlbmNlcyBjb250YWluZXIgaXMgbmVlZGVkIHRvXG4gKiB0cmFjayByZWFzc2lnbm1lbnRzIHRvIHN0b3JlcyBhbmQgdG8gdHJhY2sgdGhlIGNvcnJlY3QgY29tcG9uZW50IGNvbnRleHQuXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtTdG9yZTxWPiB8IG51bGwgfCB1bmRlZmluZWR9IHN0b3JlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVfbmFtZVxuICogQHBhcmFtIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJ9IHN0b3Jlc1xuICogQHJldHVybnMge1Z9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZV9nZXQoc3RvcmUsIHN0b3JlX25hbWUsIHN0b3Jlcykge1xuXHRjb25zdCBlbnRyeSA9IChzdG9yZXNbc3RvcmVfbmFtZV0gPz89IHtcblx0XHRzdG9yZTogbnVsbCxcblx0XHRzb3VyY2U6IG11dGFibGVfc291cmNlKHVuZGVmaW5lZCksXG5cdFx0dW5zdWJzY3JpYmU6IG5vb3Bcblx0fSk7XG5cblx0aWYgKGVudHJ5LnN0b3JlICE9PSBzdG9yZSkge1xuXHRcdGVudHJ5LnVuc3Vic2NyaWJlKCk7XG5cdFx0ZW50cnkuc3RvcmUgPSBzdG9yZSA/PyBudWxsO1xuXG5cdFx0aWYgKHN0b3JlID09IG51bGwpIHtcblx0XHRcdGVudHJ5LnNvdXJjZS52ID0gdW5kZWZpbmVkOyAvLyBzZWUgc3luY2hyb25vdXMgY2FsbGJhY2sgY29tbWVudCBiZWxvd1xuXHRcdFx0ZW50cnkudW5zdWJzY3JpYmUgPSBub29wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaXNfc3luY2hyb25vdXNfY2FsbGJhY2sgPSB0cnVlO1xuXG5cdFx0XHRlbnRyeS51bnN1YnNjcmliZSA9IHN1YnNjcmliZV90b19zdG9yZShzdG9yZSwgKHYpID0+IHtcblx0XHRcdFx0aWYgKGlzX3N5bmNocm9ub3VzX2NhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGZpcnN0IHVwZGF0ZXMgdG8gdGhlIHN0b3JlIHZhbHVlIChwb3NzaWJseSBtdWx0aXBsZSBvZiB0aGVtKSBhcmUgc3luY2hyb25vdXNseVxuXHRcdFx0XHRcdC8vIGluc2lkZSBhIGRlcml2ZWQsIHdlIHdpbGwgaGl0IHRoZSBgc3RhdGVfdW5zYWZlX211dGF0aW9uYCBlcnJvciBpZiB3ZSBgc2V0YCB0aGUgdmFsdWVcblx0XHRcdFx0XHRlbnRyeS5zb3VyY2UudiA9IHY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0KGVudHJ5LnNvdXJjZSwgdik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpc19zeW5jaHJvbm91c19jYWxsYmFjayA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBnZXQoZW50cnkuc291cmNlKTtcbn1cblxuLyoqXG4gKiBVbnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgaWYgaXQncyBub3QgdGhlIHNhbWUgYXMgdGhlIG9uZSBpbiB0aGUgc3RvcmUgcmVmZXJlbmNlcyBjb250YWluZXIuXG4gKiBXZSBuZWVkIHRoaXMgaW4gYWRkaXRpb24gdG8gYHN0b3JlX2dldGAgYmVjYXVzZSBzb21lb25lIGNvdWxkIHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBidXRcbiAqIHRoZW4gbmV2ZXIgc3Vic2NyaWJlIHRvIHRoZSBuZXcgb25lIChpZiBhbnkpLCBjYXVzaW5nIHRoZSBzdWJzY3JpcHRpb24gdG8gc3RheSBvcGVuIHdyb25nZnVsbHkuXG4gKiBAcGFyYW0ge1N0b3JlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkfSBzdG9yZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlX25hbWVcbiAqIEBwYXJhbSB7U3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyfSBzdG9yZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3Vuc3ViKHN0b3JlLCBzdG9yZV9uYW1lLCBzdG9yZXMpIHtcblx0LyoqIEB0eXBlIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJbJyddIHwgdW5kZWZpbmVkfSAqL1xuXHRsZXQgZW50cnkgPSBzdG9yZXNbc3RvcmVfbmFtZV07XG5cblx0aWYgKGVudHJ5ICYmIGVudHJ5LnN0b3JlICE9PSBzdG9yZSkge1xuXHRcdC8vIERvbid0IHJlc2V0IHN0b3JlIHlldCwgc28gdGhhdCBzdG9yZV9nZXQgYWJvdmUgY2FuIHJlc3Vic2NyaWJlIHRvIG5ldyBzdG9yZSBpZiBuZWNlc3Nhcnlcblx0XHRlbnRyeS51bnN1YnNjcmliZSgpO1xuXHRcdGVudHJ5LnVuc3Vic2NyaWJlID0gbm9vcDtcblx0fVxuXG5cdHJldHVybiBzdG9yZTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBuZXcgdmFsdWUgb2YgYSBzdG9yZSBhbmQgcmV0dXJucyB0aGF0IHZhbHVlLlxuICogQHRlbXBsYXRlIFZcbiAqIEBwYXJhbSB7U3RvcmU8Vj59IHN0b3JlXG4gKiBAcGFyYW0ge1Z9IHZhbHVlXG4gKiBAcmV0dXJucyB7Vn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX3NldChzdG9yZSwgdmFsdWUpIHtcblx0c3RvcmUuc2V0KHZhbHVlKTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RvcmVSZWZlcmVuY2VzQ29udGFpbmVyfSBzdG9yZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZV9uYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlX3N0b3JlKHN0b3Jlcywgc3RvcmVfbmFtZSkge1xuXHR2YXIgZW50cnkgPSBzdG9yZXNbc3RvcmVfbmFtZV07XG5cdGlmIChlbnRyeS5zdG9yZSAhPT0gbnVsbCkge1xuXHRcdHN0b3JlX3NldChlbnRyeS5zdG9yZSwgZW50cnkuc291cmNlLnYpO1xuXHR9XG59XG5cbi8qKlxuICogVW5zdWJzY3JpYmVzIGZyb20gYWxsIGF1dG8tc3Vic2NyaWJlZCBzdG9yZXMgb24gZGVzdHJveVxuICogQHJldHVybnMge1N0b3JlUmVmZXJlbmNlc0NvbnRhaW5lcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwX3N0b3JlcygpIHtcblx0LyoqIEB0eXBlIHtTdG9yZVJlZmVyZW5jZXNDb250YWluZXJ9ICovXG5cdGNvbnN0IHN0b3JlcyA9IHt9O1xuXG5cdHRlYXJkb3duKCgpID0+IHtcblx0XHRmb3IgKHZhciBzdG9yZV9uYW1lIGluIHN0b3Jlcykge1xuXHRcdFx0Y29uc3QgcmVmID0gc3RvcmVzW3N0b3JlX25hbWVdO1xuXHRcdFx0cmVmLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gc3RvcmVzO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYSBzdG9yZSB3aXRoIGEgbmV3IHZhbHVlLlxuICogQHBhcmFtIHtTdG9yZTxWPn0gc3RvcmUgIHRoZSBzdG9yZSB0byB1cGRhdGVcbiAqIEBwYXJhbSB7YW55fSBleHByZXNzaW9uICB0aGUgZXhwcmVzc2lvbiB0aGF0IG11dGF0ZXMgdGhlIHN0b3JlXG4gKiBAcGFyYW0ge1Z9IG5ld192YWx1ZSAgdGhlIG5ldyBzdG9yZSB2YWx1ZVxuICogQHRlbXBsYXRlIFZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlX211dGF0ZShzdG9yZSwgZXhwcmVzc2lvbiwgbmV3X3ZhbHVlKSB7XG5cdHN0b3JlLnNldChuZXdfdmFsdWUpO1xuXHRyZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0b3JlPG51bWJlcj59IHN0b3JlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RvcmVfdmFsdWVcbiAqIEBwYXJhbSB7MSB8IC0xfSBbZF1cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfc3RvcmUoc3RvcmUsIHN0b3JlX3ZhbHVlLCBkID0gMSkge1xuXHRzdG9yZS5zZXQoc3RvcmVfdmFsdWUgKyBkKTtcblx0cmV0dXJuIHN0b3JlX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RvcmU8bnVtYmVyPn0gc3RvcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdG9yZV92YWx1ZVxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9wcmVfc3RvcmUoc3RvcmUsIHN0b3JlX3ZhbHVlLCBkID0gMSkge1xuXHRjb25zdCB2YWx1ZSA9IHN0b3JlX3ZhbHVlICsgZDtcblx0c3RvcmUuc2V0KHZhbHVlKTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxlZCBpbnNpZGUgcHJvcCBnZXR0ZXJzIHRvIGNvbW11bmljYXRlIHRoYXQgdGhlIHByb3AgaXMgYSBzdG9yZSBiaW5kaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrX3N0b3JlX2JpbmRpbmcoKSB7XG5cdGlzX3N0b3JlX2JpbmRpbmcgPSB0cnVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB0dXBsZSB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGBmbigpYCByZWFkcyBhIHByb3AgdGhhdCBpcyBhIHN0b3JlIGJpbmRpbmcuXG4gKiBVc2VkIHRvIHByZXZlbnQgYGJpbmRpbmdfcHJvcGVydHlfbm9uX3JlYWN0aXZlYCB2YWxpZGF0aW9uIGZhbHNlIHBvc2l0aXZlcyBhbmRcbiAqIGVuc3VyZSB0aGF0IHRoZXNlIHByb3BzIGFyZSB0cmVhdGVkIGFzIG11dGFibGUgZXZlbiBpbiBydW5lcyBtb2RlXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmblxuICogQHJldHVybnMge1tULCBib29sZWFuXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVfc3RvcmVfYmluZGluZyhmbikge1xuXHR2YXIgcHJldmlvdXNfaXNfc3RvcmVfYmluZGluZyA9IGlzX3N0b3JlX2JpbmRpbmc7XG5cblx0dHJ5IHtcblx0XHRpc19zdG9yZV9iaW5kaW5nID0gZmFsc2U7XG5cdFx0cmV0dXJuIFtmbigpLCBpc19zdG9yZV9iaW5kaW5nXTtcblx0fSBmaW5hbGx5IHtcblx0XHRpc19zdG9yZV9iaW5kaW5nID0gcHJldmlvdXNfaXNfc3RvcmVfYmluZGluZztcblx0fVxufVxuIiwiLyoqIEBpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3R5cGVzLmpzJyAqL1xuaW1wb3J0IHsgREVWIH0gZnJvbSAnZXNtLWVudic7XG5pbXBvcnQge1xuXHRQUk9QU19JU19CSU5EQUJMRSxcblx0UFJPUFNfSVNfSU1NVVRBQkxFLFxuXHRQUk9QU19JU19MQVpZX0lOSVRJQUwsXG5cdFBST1BTX0lTX1JVTkVTLFxuXHRQUk9QU19JU19VUERBVEVEXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyBnZXRfZGVzY3JpcHRvciwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgbXV0YWJsZV9zb3VyY2UsIHNldCwgc291cmNlIH0gZnJvbSAnLi9zb3VyY2VzLmpzJztcbmltcG9ydCB7IGRlcml2ZWQsIGRlcml2ZWRfc2FmZV9lcXVhbCB9IGZyb20gJy4vZGVyaXZlZHMuanMnO1xuaW1wb3J0IHtcblx0YWN0aXZlX2VmZmVjdCxcblx0Z2V0LFxuXHRjYXB0dXJlZF9zaWduYWxzLFxuXHRzZXRfYWN0aXZlX2VmZmVjdCxcblx0dW50cmFjayxcblx0dXBkYXRlXG59IGZyb20gJy4uL3J1bnRpbWUuanMnO1xuaW1wb3J0IHsgc2FmZV9lcXVhbHMgfSBmcm9tICcuL2VxdWFsaXR5LmpzJztcbmltcG9ydCAqIGFzIGUgZnJvbSAnLi4vZXJyb3JzLmpzJztcbmltcG9ydCB7XG5cdEJSQU5DSF9FRkZFQ1QsXG5cdExFR0FDWV9ERVJJVkVEX1BST1AsXG5cdExFR0FDWV9QUk9QUyxcblx0Uk9PVF9FRkZFQ1QsXG5cdFNUQVRFX1NZTUJPTFxufSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgcHJveHkgfSBmcm9tICcuLi9wcm94eS5qcyc7XG5pbXBvcnQgeyBjYXB0dXJlX3N0b3JlX2JpbmRpbmcgfSBmcm9tICcuL3N0b3JlLmpzJztcbmltcG9ydCB7IGxlZ2FjeV9tb2RlX2ZsYWcgfSBmcm9tICcuLi8uLi9mbGFncy9pbmRleC5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHsoKHZhbHVlPzogbnVtYmVyKSA9PiBudW1iZXIpfSBmblxuICogQHBhcmFtIHsxIHwgLTF9IFtkXVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9wcm9wKGZuLCBkID0gMSkge1xuXHRjb25zdCB2YWx1ZSA9IGZuKCk7XG5cdGZuKHZhbHVlICsgZCk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygodmFsdWU/OiBudW1iZXIpID0+IG51bWJlcil9IGZuXG4gKiBAcGFyYW0gezEgfCAtMX0gW2RdXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX3ByZV9wcm9wKGZuLCBkID0gMSkge1xuXHRjb25zdCB2YWx1ZSA9IGZuKCkgKyBkO1xuXHRmbih2YWx1ZSk7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGUgcHJveHkgaGFuZGxlciBmb3IgcmVzdCBwcm9wcyAoaS5lLiBgY29uc3QgeyB4LCAuLi5yZXN0IH0gPSAkcHJvcHMoKWApLlxuICogSXMgcGFzc2VkIHRoZSBmdWxsIGAkJHByb3BzYCBvYmplY3QgYW5kIGV4Y2x1ZGVzIHRoZSBuYW1lZCBwcm9wcy5cbiAqIEB0eXBlIHtQcm94eUhhbmRsZXI8eyBwcm9wczogUmVjb3JkPHN0cmluZyB8IHN5bWJvbCwgdW5rbm93bj4sIGV4Y2x1ZGU6IEFycmF5PHN0cmluZyB8IHN5bWJvbD4sIG5hbWU/OiBzdHJpbmcgfT59fVxuICovXG5jb25zdCByZXN0X3Byb3BzX2hhbmRsZXIgPSB7XG5cdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdGlmICh0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSByZXR1cm47XG5cdFx0cmV0dXJuIHRhcmdldC5wcm9wc1trZXldO1xuXHR9LFxuXHRzZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRpZiAoREVWKSB7XG5cdFx0XHQvLyBUT0RPIHNob3VsZCB0aGlzIGhhcHBlbiBpbiBwcm9kIHRvbz9cblx0XHRcdGUucHJvcHNfcmVzdF9yZWFkb25seShgJHt0YXJnZXQubmFtZX0uJHtTdHJpbmcoa2V5KX1gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuXHRcdGlmICh0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSByZXR1cm47XG5cdFx0aWYgKGtleSBpbiB0YXJnZXQucHJvcHMpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0dmFsdWU6IHRhcmdldC5wcm9wc1trZXldXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0aGFzKHRhcmdldCwga2V5KSB7XG5cdFx0aWYgKHRhcmdldC5leGNsdWRlLmluY2x1ZGVzKGtleSkpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4ga2V5IGluIHRhcmdldC5wcm9wcztcblx0fSxcblx0b3duS2V5cyh0YXJnZXQpIHtcblx0XHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm9wcykuZmlsdGVyKChrZXkpID0+ICF0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKTtcblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZXhjbHVkZVxuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXVxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG4vKiNfX05PX1NJREVfRUZGRUNUU19fKi9cbmV4cG9ydCBmdW5jdGlvbiByZXN0X3Byb3BzKHByb3BzLCBleGNsdWRlLCBuYW1lKSB7XG5cdHJldHVybiBuZXcgUHJveHkoXG5cdFx0REVWID8geyBwcm9wcywgZXhjbHVkZSwgbmFtZSwgb3RoZXI6IHt9LCB0b19wcm94eTogW10gfSA6IHsgcHJvcHMsIGV4Y2x1ZGUgfSxcblx0XHRyZXN0X3Byb3BzX2hhbmRsZXJcblx0KTtcbn1cblxuLyoqXG4gKiBUaGUgcHJveHkgaGFuZGxlciBmb3IgbGVnYWN5ICQkcmVzdFByb3BzIGFuZCAkJHByb3BzXG4gKiBAdHlwZSB7UHJveHlIYW5kbGVyPHsgcHJvcHM6IFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+LCBleGNsdWRlOiBBcnJheTxzdHJpbmcgfCBzeW1ib2w+LCBzcGVjaWFsOiBSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCAodj86IHVua25vd24pID0+IHVua25vd24+LCB2ZXJzaW9uOiBTb3VyY2U8bnVtYmVyPiB9Pn19XG4gKi9cbmNvbnN0IGxlZ2FjeV9yZXN0X3Byb3BzX2hhbmRsZXIgPSB7XG5cdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdGlmICh0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSByZXR1cm47XG5cdFx0Z2V0KHRhcmdldC52ZXJzaW9uKTtcblx0XHRyZXR1cm4ga2V5IGluIHRhcmdldC5zcGVjaWFsID8gdGFyZ2V0LnNwZWNpYWxba2V5XSgpIDogdGFyZ2V0LnByb3BzW2tleV07XG5cdH0sXG5cdHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAoIShrZXkgaW4gdGFyZ2V0LnNwZWNpYWwpKSB7XG5cdFx0XHQvLyBIYW5kbGUgcHJvcHMgdGhhdCBjYW4gdGVtcG9yYXJpbHkgZ2V0IG91dCBvZiBzeW5jIHdpdGggdGhlIHBhcmVudFxuXHRcdFx0LyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCAodj86IHVua25vd24pID0+IHVua25vd24+fSAqL1xuXHRcdFx0dGFyZ2V0LnNwZWNpYWxba2V5XSA9IHByb3AoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRnZXQgW2tleV0oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFyZ2V0LnByb3BzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiogQHR5cGUge3N0cmluZ30gKi8gKGtleSksXG5cdFx0XHRcdFBST1BTX0lTX1VQREFURURcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LnNwZWNpYWxba2V5XSh2YWx1ZSk7XG5cdFx0dXBkYXRlKHRhcmdldC52ZXJzaW9uKTsgLy8gJCRwcm9wcyBpcyBjb2Fyc2UtZ3JhaW5lZDogd2hlbiAkJHByb3BzLnggaXMgdXBkYXRlZCwgdXNhZ2VzIG9mICQkcHJvcHMueSBldGMgYXJlIGFsc28gcmVydW5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSB7XG5cdFx0aWYgKHRhcmdldC5leGNsdWRlLmluY2x1ZGVzKGtleSkpIHJldHVybjtcblx0XHRpZiAoa2V5IGluIHRhcmdldC5wcm9wcykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogdGFyZ2V0LnByb3BzW2tleV1cblx0XHRcdH07XG5cdFx0fVxuXHR9LFxuXHRkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuXHRcdC8vIFN2ZWx0ZSA0IGFsbG93ZWQgZm9yIGRlbGV0aW9ucyBvbiAkJHJlc3RQcm9wc1xuXHRcdGlmICh0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSByZXR1cm4gdHJ1ZTtcblx0XHR0YXJnZXQuZXhjbHVkZS5wdXNoKGtleSk7XG5cdFx0dXBkYXRlKHRhcmdldC52ZXJzaW9uKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0aGFzKHRhcmdldCwga2V5KSB7XG5cdFx0aWYgKHRhcmdldC5leGNsdWRlLmluY2x1ZGVzKGtleSkpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4ga2V5IGluIHRhcmdldC5wcm9wcztcblx0fSxcblx0b3duS2V5cyh0YXJnZXQpIHtcblx0XHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm9wcykuZmlsdGVyKChrZXkpID0+ICF0YXJnZXQuZXhjbHVkZS5pbmNsdWRlcyhrZXkpKTtcblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZXhjbHVkZVxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVnYWN5X3Jlc3RfcHJvcHMocHJvcHMsIGV4Y2x1ZGUpIHtcblx0cmV0dXJuIG5ldyBQcm94eSh7IHByb3BzLCBleGNsdWRlLCBzcGVjaWFsOiB7fSwgdmVyc2lvbjogc291cmNlKDApIH0sIGxlZ2FjeV9yZXN0X3Byb3BzX2hhbmRsZXIpO1xufVxuXG4vKipcbiAqIFRoZSBwcm94eSBoYW5kbGVyIGZvciBzcHJlYWQgcHJvcHMuIEhhbmRsZXMgdGhlIGluY29taW5nIGFycmF5IG9mIHByb3BzXG4gKiB0aGF0IGxvb2tzIGxpa2UgYCgpID0+IHsgZHluYW1pYzogcHJvcHMgfSwgeyBzdGF0aWM6IHByb3AgfSwgLi5gIGFuZCB3cmFwc1xuICogdGhlbSBzbyB0aGF0IHRoZSB3aG9sZSB0aGluZyBpcyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBhcyB0aGUgYCQkcHJvcHNgIGFyZ3VtZW50LlxuICogQHRlbXBsYXRlIHtSZWNvcmQ8c3RyaW5nIHwgc3ltYm9sLCB1bmtub3duPn0gVFxuICogQHR5cGUge1Byb3h5SGFuZGxlcjx7IHByb3BzOiBBcnJheTxUIHwgKCgpID0+IFQpPiB9Pn19XG4gKi9cbmNvbnN0IHNwcmVhZF9wcm9wc19oYW5kbGVyID0ge1xuXHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRsZXQgaSA9IHRhcmdldC5wcm9wcy5sZW5ndGg7XG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0bGV0IHAgPSB0YXJnZXQucHJvcHNbaV07XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24ocCkpIHAgPSBwKCk7XG5cdFx0XHRpZiAodHlwZW9mIHAgPT09ICdvYmplY3QnICYmIHAgIT09IG51bGwgJiYga2V5IGluIHApIHJldHVybiBwW2tleV07XG5cdFx0fVxuXHR9LFxuXHRzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG5cdFx0bGV0IGkgPSB0YXJnZXQucHJvcHMubGVuZ3RoO1xuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGxldCBwID0gdGFyZ2V0LnByb3BzW2ldO1xuXHRcdFx0aWYgKGlzX2Z1bmN0aW9uKHApKSBwID0gcCgpO1xuXHRcdFx0Y29uc3QgZGVzYyA9IGdldF9kZXNjcmlwdG9yKHAsIGtleSk7XG5cdFx0XHRpZiAoZGVzYyAmJiBkZXNjLnNldCkge1xuXHRcdFx0XHRkZXNjLnNldCh2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuXHRcdGxldCBpID0gdGFyZ2V0LnByb3BzLmxlbmd0aDtcblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRsZXQgcCA9IHRhcmdldC5wcm9wc1tpXTtcblx0XHRcdGlmIChpc19mdW5jdGlvbihwKSkgcCA9IHAoKTtcblx0XHRcdGlmICh0eXBlb2YgcCA9PT0gJ29iamVjdCcgJiYgcCAhPT0gbnVsbCAmJiBrZXkgaW4gcCkge1xuXHRcdFx0XHRjb25zdCBkZXNjcmlwdG9yID0gZ2V0X2Rlc2NyaXB0b3IocCwga2V5KTtcblx0XHRcdFx0aWYgKGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gUHJldmVudCBhIFwiTm9uLWNvbmZpZ3VyYWJpbGl0eSBSZXBvcnQgRXJyb3JcIjogVGhlIHRhcmdldCBpcyBhbiBhcnJheSwgaXQgZG9lc1xuXHRcdFx0XHRcdC8vIG5vdCBhY3R1YWxseSBjb250YWluIHRoaXMgcHJvcGVydHkuIElmIGl0IGlzIG5vdyBkZXNjcmliZWQgYXMgbm9uLWNvbmZpZ3VyYWJsZSxcblx0XHRcdFx0XHQvLyB0aGUgcHJveHkgdGhyb3dzIGEgdmFsaWRhdGlvbiBlcnJvci4gU2V0dGluZyBpdCB0byB0cnVlIGF2b2lkcyB0aGF0LlxuXHRcdFx0XHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZGVzY3JpcHRvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGhhcyh0YXJnZXQsIGtleSkge1xuXHRcdC8vIFRvIHByZXZlbnQgYSBmYWxzZSBwb3NpdGl2ZSBgaXNfZW50cnlfcHJvcHNgIGluIHRoZSBgcHJvcGAgZnVuY3Rpb25cblx0XHRpZiAoa2V5ID09PSBTVEFURV9TWU1CT0wgfHwga2V5ID09PSBMRUdBQ1lfUFJPUFMpIHJldHVybiBmYWxzZTtcblxuXHRcdGZvciAobGV0IHAgb2YgdGFyZ2V0LnByb3BzKSB7XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24ocCkpIHAgPSBwKCk7XG5cdFx0XHRpZiAocCAhPSBudWxsICYmIGtleSBpbiBwKSByZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdG93bktleXModGFyZ2V0KSB7XG5cdFx0LyoqIEB0eXBlIHtBcnJheTxzdHJpbmcgfCBzeW1ib2w+fSAqL1xuXHRcdGNvbnN0IGtleXMgPSBbXTtcblxuXHRcdGZvciAobGV0IHAgb2YgdGFyZ2V0LnByb3BzKSB7XG5cdFx0XHRpZiAoaXNfZnVuY3Rpb24ocCkpIHAgPSBwKCk7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBwKSB7XG5cdFx0XHRcdGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSBrZXlzLnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5cztcblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgKCgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+KT59IHByb3BzXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByZWFkX3Byb3BzKC4uLnByb3BzKSB7XG5cdHJldHVybiBuZXcgUHJveHkoeyBwcm9wcyB9LCBzcHJlYWRfcHJvcHNfaGFuZGxlcik7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZm5cbiAqIEByZXR1cm5zIHtUfVxuICovXG5mdW5jdGlvbiB3aXRoX3BhcmVudF9icmFuY2goZm4pIHtcblx0dmFyIGVmZmVjdCA9IGFjdGl2ZV9lZmZlY3Q7XG5cdHZhciBwcmV2aW91c19lZmZlY3QgPSBhY3RpdmVfZWZmZWN0O1xuXG5cdHdoaWxlIChlZmZlY3QgIT09IG51bGwgJiYgKGVmZmVjdC5mICYgKEJSQU5DSF9FRkZFQ1QgfCBST09UX0VGRkVDVCkpID09PSAwKSB7XG5cdFx0ZWZmZWN0ID0gZWZmZWN0LnBhcmVudDtcblx0fVxuXHR0cnkge1xuXHRcdHNldF9hY3RpdmVfZWZmZWN0KGVmZmVjdCk7XG5cdFx0cmV0dXJuIGZuKCk7XG5cdH0gZmluYWxseSB7XG5cdFx0c2V0X2FjdGl2ZV9lZmZlY3QocHJldmlvdXNfZWZmZWN0KTtcblx0fVxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHN5bmNocm9uaXppbmcgYSBwb3NzaWJseSBib3VuZCBwcm9wIHdpdGggdGhlIGlubmVyIGNvbXBvbmVudCBzdGF0ZS5cbiAqIEl0IGlzIHVzZWQgd2hlbmV2ZXIgdGhlIGNvbXBpbGVyIHNlZXMgdGhhdCB0aGUgY29tcG9uZW50IHdyaXRlcyB0byB0aGUgcHJvcCwgb3Igd2hlbiBpdCBoYXMgYSBkZWZhdWx0IHByb3BfdmFsdWUuXG4gKiBAdGVtcGxhdGUgVlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBmbGFnc1xuICogQHBhcmFtIHtWIHwgKCgpID0+IFYpfSBbZmFsbGJhY2tdXG4gKiBAcmV0dXJucyB7KCgpID0+IFYgfCAoKGFyZzogVikgPT4gVikgfCAoKGFyZzogViwgbXV0YXRpb246IGJvb2xlYW4pID0+IFYpKX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3AocHJvcHMsIGtleSwgZmxhZ3MsIGZhbGxiYWNrKSB7XG5cdHZhciBpbW11dGFibGUgPSAoZmxhZ3MgJiBQUk9QU19JU19JTU1VVEFCTEUpICE9PSAwO1xuXHR2YXIgcnVuZXMgPSAhbGVnYWN5X21vZGVfZmxhZyB8fCAoZmxhZ3MgJiBQUk9QU19JU19SVU5FUykgIT09IDA7XG5cdHZhciBiaW5kYWJsZSA9IChmbGFncyAmIFBST1BTX0lTX0JJTkRBQkxFKSAhPT0gMDtcblx0dmFyIGxhenkgPSAoZmxhZ3MgJiBQUk9QU19JU19MQVpZX0lOSVRJQUwpICE9PSAwO1xuXHR2YXIgaXNfc3RvcmVfc3ViID0gZmFsc2U7XG5cdHZhciBwcm9wX3ZhbHVlO1xuXG5cdGlmIChiaW5kYWJsZSkge1xuXHRcdFtwcm9wX3ZhbHVlLCBpc19zdG9yZV9zdWJdID0gY2FwdHVyZV9zdG9yZV9iaW5kaW5nKCgpID0+IC8qKiBAdHlwZSB7Vn0gKi8gKHByb3BzW2tleV0pKTtcblx0fSBlbHNlIHtcblx0XHRwcm9wX3ZhbHVlID0gLyoqIEB0eXBlIHtWfSAqLyAocHJvcHNba2V5XSk7XG5cdH1cblxuXHQvLyBDYW4gYmUgdGhlIGNhc2Ugd2hlbiBzb21lb25lIGRvZXMgYG1vdW50KENvbXBvbmVudCwgcHJvcHMpYCB3aXRoIGBsZXQgcHJvcHMgPSAkc3RhdGUoey4uLn0pYFxuXHQvLyBvciBgY3JlYXRlQ2xhc3NDb21wb25lbnQoQ29tcG9uZW50LCBwcm9wcylgXG5cdHZhciBpc19lbnRyeV9wcm9wcyA9IFNUQVRFX1NZTUJPTCBpbiBwcm9wcyB8fCBMRUdBQ1lfUFJPUFMgaW4gcHJvcHM7XG5cblx0dmFyIHNldHRlciA9XG5cdFx0Z2V0X2Rlc2NyaXB0b3IocHJvcHMsIGtleSk/LnNldCA/P1xuXHRcdChpc19lbnRyeV9wcm9wcyAmJiBiaW5kYWJsZSAmJiBrZXkgaW4gcHJvcHMgPyAodikgPT4gKHByb3BzW2tleV0gPSB2KSA6IHVuZGVmaW5lZCk7XG5cblx0dmFyIGZhbGxiYWNrX3ZhbHVlID0gLyoqIEB0eXBlIHtWfSAqLyAoZmFsbGJhY2spO1xuXHR2YXIgZmFsbGJhY2tfZGlydHkgPSB0cnVlO1xuXHR2YXIgZmFsbGJhY2tfdXNlZCA9IGZhbHNlO1xuXG5cdHZhciBnZXRfZmFsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ZmFsbGJhY2tfdXNlZCA9IHRydWU7XG5cdFx0aWYgKGZhbGxiYWNrX2RpcnR5KSB7XG5cdFx0XHRmYWxsYmFja19kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0aWYgKGxhenkpIHtcblx0XHRcdFx0ZmFsbGJhY2tfdmFsdWUgPSB1bnRyYWNrKC8qKiBAdHlwZSB7KCkgPT4gVn0gKi8gKGZhbGxiYWNrKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmYWxsYmFja192YWx1ZSA9IC8qKiBAdHlwZSB7Vn0gKi8gKGZhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsbGJhY2tfdmFsdWU7XG5cdH07XG5cblx0aWYgKHByb3BfdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKHNldHRlciAmJiBydW5lcykge1xuXHRcdFx0ZS5wcm9wc19pbnZhbGlkX3ZhbHVlKGtleSk7XG5cdFx0fVxuXG5cdFx0cHJvcF92YWx1ZSA9IGdldF9mYWxsYmFjaygpO1xuXHRcdGlmIChzZXR0ZXIpIHNldHRlcihwcm9wX3ZhbHVlKTtcblx0fVxuXG5cdC8qKiBAdHlwZSB7KCkgPT4gVn0gKi9cblx0dmFyIGdldHRlcjtcblx0aWYgKHJ1bmVzKSB7XG5cdFx0Z2V0dGVyID0gKCkgPT4ge1xuXHRcdFx0dmFyIHZhbHVlID0gLyoqIEB0eXBlIHtWfSAqLyAocHJvcHNba2V5XSk7XG5cdFx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGdldF9mYWxsYmFjaygpO1xuXHRcdFx0ZmFsbGJhY2tfZGlydHkgPSB0cnVlO1xuXHRcdFx0ZmFsbGJhY2tfdXNlZCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gU3ZlbHRlIDQgZGlkIG5vdCB0cmlnZ2VyIHVwZGF0ZXMgd2hlbiBhIHByaW1pdGl2ZSB2YWx1ZSB3YXMgdXBkYXRlZCB0byB0aGUgc2FtZSB2YWx1ZS5cblx0XHQvLyBSZXBsaWNhdGUgdGhhdCBiZWhhdmlvciB0aHJvdWdoIHVzaW5nIGEgZGVyaXZlZFxuXHRcdHZhciBkZXJpdmVkX2dldHRlciA9IHdpdGhfcGFyZW50X2JyYW5jaCgoKSA9PlxuXHRcdFx0KGltbXV0YWJsZSA/IGRlcml2ZWQgOiBkZXJpdmVkX3NhZmVfZXF1YWwpKCgpID0+IC8qKiBAdHlwZSB7Vn0gKi8gKHByb3BzW2tleV0pKVxuXHRcdCk7XG5cdFx0ZGVyaXZlZF9nZXR0ZXIuZiB8PSBMRUdBQ1lfREVSSVZFRF9QUk9QO1xuXHRcdGdldHRlciA9ICgpID0+IHtcblx0XHRcdHZhciB2YWx1ZSA9IGdldChkZXJpdmVkX2dldHRlcik7XG5cdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgZmFsbGJhY2tfdmFsdWUgPSAvKiogQHR5cGUge1Z9ICovICh1bmRlZmluZWQpO1xuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBmYWxsYmFja192YWx1ZSA6IHZhbHVlO1xuXHRcdH07XG5cdH1cblxuXHQvLyBlYXN5IG1vZGUg4oCUIHByb3AgaXMgbmV2ZXIgd3JpdHRlbiB0b1xuXHRpZiAoKGZsYWdzICYgUFJPUFNfSVNfVVBEQVRFRCkgPT09IDApIHtcblx0XHRyZXR1cm4gZ2V0dGVyO1xuXHR9XG5cblx0Ly8gaW50ZXJtZWRpYXRlIG1vZGUg4oCUIHByb3AgaXMgd3JpdHRlbiB0bywgYnV0IHRoZSBwYXJlbnQgY29tcG9uZW50IGhhZFxuXHQvLyBgYmluZDpmb29gIHdoaWNoIG1lYW5zIHdlIGNhbiBqdXN0IGNhbGwgYCQkcHJvcHMuZm9vID0gdmFsdWVgIGRpcmVjdGx5XG5cdGlmIChzZXR0ZXIpIHtcblx0XHR2YXIgbGVnYWN5X3BhcmVudCA9IHByb3BzLiQkbGVnYWN5O1xuXHRcdHJldHVybiBmdW5jdGlvbiAoLyoqIEB0eXBlIHthbnl9ICovIHZhbHVlLCAvKiogQHR5cGUge2Jvb2xlYW59ICovIG11dGF0aW9uKSB7XG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBub3RpZnkgaWYgdGhlIHZhbHVlIHdhcyBtdXRhdGVkIGFuZCB0aGUgcGFyZW50IGlzIGluIHJ1bmVzIG1vZGUuXG5cdFx0XHRcdC8vIEluIHRoYXQgY2FzZSB0aGUgc3RhdGUgcHJveHkgKGlmIGl0IGV4aXN0cykgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGUgbm90aWZpY2F0aW9uLlxuXHRcdFx0XHQvLyBJZiB0aGUgcGFyZW50IGlzIG5vdCBpbiBydW5lcyBtb2RlLCB3ZSBuZWVkIHRvIG5vdGlmeSBvbiBtdXRhdGlvbiwgdG9vLCB0aGF0IHRoZSBwcm9wXG5cdFx0XHRcdC8vIGhhcyBjaGFuZ2VkIGJlY2F1c2UgdGhlIHBhcmVudCB3aWxsIG5vdCBiZSBhYmxlIHRvIGRldGVjdCB0aGUgY2hhbmdlIG90aGVyd2lzZS5cblx0XHRcdFx0aWYgKCFydW5lcyB8fCAhbXV0YXRpb24gfHwgbGVnYWN5X3BhcmVudCB8fCBpc19zdG9yZV9zdWIpIHtcblx0XHRcdFx0XHQvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyAoc2V0dGVyKShtdXRhdGlvbiA/IGdldHRlcigpIDogdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBnZXR0ZXIoKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Ly8gaGFyZCBtb2RlLiB0aGlzIGlzIHdoZXJlIGl0IGdldHMgdWdseSDigJQgdGhlIHZhbHVlIGluIHRoZSBjaGlsZCBzaG91bGRcblx0Ly8gc3luY2hyb25pemUgd2l0aCB0aGUgcGFyZW50LCBidXQgaXQgc2hvdWxkIGFsc28gYmUgcG9zc2libGUgdG8gdGVtcG9yYXJpbHlcblx0Ly8gc2V0IHRoZSB2YWx1ZSB0byBzb21ldGhpbmcgZWxzZSBsb2NhbGx5LlxuXHR2YXIgZnJvbV9jaGlsZCA9IGZhbHNlO1xuXHR2YXIgd2FzX2Zyb21fY2hpbGQgPSBmYWxzZTtcblxuXHQvLyBUaGUgZGVyaXZlZCByZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlLiBUaGUgdW5kZXJseWluZyBtdXRhYmxlXG5cdC8vIHNvdXJjZSBpcyB3cml0dGVuIHRvIGZyb20gdmFyaW91cyBwbGFjZXMgdG8gcGVyc2lzdCB0aGlzIHZhbHVlLlxuXHR2YXIgaW5uZXJfY3VycmVudF92YWx1ZSA9IG11dGFibGVfc291cmNlKHByb3BfdmFsdWUpO1xuXHR2YXIgY3VycmVudF92YWx1ZSA9IHdpdGhfcGFyZW50X2JyYW5jaCgoKSA9PlxuXHRcdGRlcml2ZWQoKCkgPT4ge1xuXHRcdFx0dmFyIHBhcmVudF92YWx1ZSA9IGdldHRlcigpO1xuXHRcdFx0dmFyIGNoaWxkX3ZhbHVlID0gZ2V0KGlubmVyX2N1cnJlbnRfdmFsdWUpO1xuXG5cdFx0XHRpZiAoZnJvbV9jaGlsZCkge1xuXHRcdFx0XHRmcm9tX2NoaWxkID0gZmFsc2U7XG5cdFx0XHRcdHdhc19mcm9tX2NoaWxkID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIGNoaWxkX3ZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3YXNfZnJvbV9jaGlsZCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIChpbm5lcl9jdXJyZW50X3ZhbHVlLnYgPSBwYXJlbnRfdmFsdWUpO1xuXHRcdH0pXG5cdCk7XG5cblx0aWYgKCFpbW11dGFibGUpIGN1cnJlbnRfdmFsdWUuZXF1YWxzID0gc2FmZV9lcXVhbHM7XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgvKiogQHR5cGUge2FueX0gKi8gdmFsdWUsIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gbXV0YXRpb24pIHtcblx0XHQvLyBsZWdhY3kgbm9uc2Vuc2Ug4oCUIG5lZWQgdG8gZW5zdXJlIHRoZSBzb3VyY2UgaXMgaW52YWxpZGF0ZWQgd2hlbiBuZWNlc3Nhcnlcblx0XHQvLyBhbHNvIG5lZWRlZCBmb3Igd2hlbiBoYW5kbGluZyBpbnNwZWN0IGxvZ2ljIHNvIHdlIGNhbiBpbnNwZWN0IHRoZSBjb3JyZWN0IHNvdXJjZSBzaWduYWxcblx0XHRpZiAoY2FwdHVyZWRfc2lnbmFscyAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gc2V0IHRoaXMgc28gdGhhdCB3ZSBkb24ndCByZXNldCB0byB0aGUgcGFyZW50IHZhbHVlIGlmIGBkYFxuXHRcdFx0Ly8gaXMgaW52YWxpZGF0ZWQgYmVjYXVzZSBvZiBgaW52YWxpZGF0ZV9pbm5lcl9zaWduYWxzYCAocmF0aGVyXG5cdFx0XHQvLyB0aGFuIGJlY2F1c2UgdGhlIHBhcmVudCBvciBjaGlsZCB2YWx1ZSBjaGFuZ2VkKVxuXHRcdFx0ZnJvbV9jaGlsZCA9IHdhc19mcm9tX2NoaWxkO1xuXHRcdFx0Ly8gaW52b2tlIGdldHRlcnMgc28gdGhhdCBzaWduYWxzIGFyZSBwaWNrZWQgdXAgYnkgYGludmFsaWRhdGVfaW5uZXJfc2lnbmFsc2Bcblx0XHRcdGdldHRlcigpO1xuXHRcdFx0Z2V0KGlubmVyX2N1cnJlbnRfdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbmV3X3ZhbHVlID0gbXV0YXRpb24gPyBnZXQoY3VycmVudF92YWx1ZSkgOiBydW5lcyAmJiBiaW5kYWJsZSA/IHByb3h5KHZhbHVlKSA6IHZhbHVlO1xuXG5cdFx0XHRpZiAoIWN1cnJlbnRfdmFsdWUuZXF1YWxzKG5ld192YWx1ZSkpIHtcblx0XHRcdFx0ZnJvbV9jaGlsZCA9IHRydWU7XG5cdFx0XHRcdHNldChpbm5lcl9jdXJyZW50X3ZhbHVlLCBuZXdfdmFsdWUpO1xuXHRcdFx0XHQvLyBUbyBlbnN1cmUgdGhlIGZhbGxiYWNrIHZhbHVlIGlzIGNvbnNpc3RlbnQgd2hlbiB1c2VkIHdpdGggcHJveGllcywgd2Vcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBsb2NhbCBmYWxsYmFja192YWx1ZSwgYnV0IG9ubHkgaWYgdGhlIGZhbGxiYWNrIGlzIGFjdGl2ZWx5IHVzZWRcblx0XHRcdFx0aWYgKGZhbGxiYWNrX3VzZWQgJiYgZmFsbGJhY2tfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGZhbGxiYWNrX3ZhbHVlID0gbmV3X3ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVudHJhY2soKCkgPT4gZ2V0KGN1cnJlbnRfdmFsdWUpKTsgLy8gZm9yY2UgYSBzeW5jaHJvbmlzYXRpb24gaW1tZWRpYXRlbHlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2V0KGN1cnJlbnRfdmFsdWUpO1xuXHR9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsLCBiYXNlVXJsKSB7XG4gICAgLy8gdXJsIGlzIGFic29sdXRlIGFscmVhZHlcbiAgICBpZiAodXJsLm1hdGNoKC9eW2Etel0rOlxcL1xcLy9pKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICAvLyB1cmwgaXMgYWJzb2x1dGUgYWxyZWFkeSwgd2l0aG91dCBwcm90b2NvbFxuICAgIGlmICh1cmwubWF0Y2goL15cXC9cXC8vKSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgdXJsO1xuICAgIH1cbiAgICAvLyBkYXRhVVJJLCBtYWlsdG86LCB0ZWw6LCBldGMuXG4gICAgaWYgKHVybC5tYXRjaCgvXlthLXpdKzovaSkpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG4gICAgY29uc3QgYmFzZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgY29uc3QgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgaWYgKGJhc2VVcmwpIHtcbiAgICAgICAgYmFzZS5ocmVmID0gYmFzZVVybDtcbiAgICB9XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhyZWY7XG59XG5leHBvcnQgY29uc3QgdXVpZCA9ICgoKSA9PiB7XG4gICAgLy8gZ2VuZXJhdGUgdXVpZCBmb3IgY2xhc3NOYW1lIG9mIHBzZXVkbyBlbGVtZW50cy5cbiAgICAvLyBXZSBzaG91bGQgbm90IHVzZSBHVUlEcywgb3RoZXJ3aXNlIHBzZXVkbyBlbGVtZW50cyBzb21ldGltZXMgY2Fubm90IGJlIGNhcHR1cmVkLlxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAvLyByZWY6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNDg3MjIvMjUxOTM3M1xuICAgIGNvbnN0IHJhbmRvbSA9ICgpID0+IFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgYDAwMDAkeygoTWF0aC5yYW5kb20oKSAqIDM2ICoqIDQpIDw8IDApLnRvU3RyaW5nKDM2KX1gLnNsaWNlKC00KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIHJldHVybiBgdSR7cmFuZG9tKCl9JHtjb3VudGVyfWA7XG4gICAgfTtcbn0pKCk7XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShhcmdzKSwgbXMpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoYXJyYXlMaWtlKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnJheUxpa2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGFycmF5TGlrZVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBweChub2RlLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3Qgd2luID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgICBjb25zdCB2YWwgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgIHJldHVybiB2YWwgPyBwYXJzZUZsb2F0KHZhbC5yZXBsYWNlKCdweCcsICcnKSkgOiAwO1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVdpZHRoKG5vZGUpIHtcbiAgICBjb25zdCBsZWZ0Qm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci1sZWZ0LXdpZHRoJyk7XG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgcmV0dXJuIG5vZGUuY2xpZW50V2lkdGggKyBsZWZ0Qm9yZGVyICsgcmlnaHRCb3JkZXI7XG59XG5mdW5jdGlvbiBnZXROb2RlSGVpZ2h0KG5vZGUpIHtcbiAgICBjb25zdCB0b3BCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgIGNvbnN0IGJvdHRvbUJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItYm90dG9tLXdpZHRoJyk7XG4gICAgcmV0dXJuIG5vZGUuY2xpZW50SGVpZ2h0ICsgdG9wQm9yZGVyICsgYm90dG9tQm9yZGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlU2l6ZSh0YXJnZXROb2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0Tm9kZVdpZHRoKHRhcmdldE5vZGUpO1xuICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldE5vZGVIZWlnaHQodGFyZ2V0Tm9kZSk7XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBpeGVsUmF0aW8oKSB7XG4gICAgbGV0IHJhdGlvO1xuICAgIGxldCBGSU5BTF9QUk9DRVNTO1xuICAgIHRyeSB7XG4gICAgICAgIEZJTkFMX1BST0NFU1MgPSBwcm9jZXNzO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBwYXNzXG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IEZJTkFMX1BST0NFU1MgJiYgRklOQUxfUFJPQ0VTUy5lbnZcbiAgICAgICAgPyBGSU5BTF9QUk9DRVNTLmVudi5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgIDogbnVsbDtcbiAgICBpZiAodmFsKSB7XG4gICAgICAgIHJhdGlvID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4ocmF0aW8pKSB7XG4gICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJhdGlvIHx8IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG59XG4vLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9jYW52YXMjbWF4aW11bV9jYW52YXNfc2l6ZVxuY29uc3QgY2FudmFzRGltZW5zaW9uTGltaXQgPSAxNjM4NDtcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NhbnZhc0RpbWVuc2lvbnMoY2FudmFzKSB7XG4gICAgaWYgKGNhbnZhcy53aWR0aCA+IGNhbnZhc0RpbWVuc2lvbkxpbWl0IHx8XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPiBjYW52YXNEaW1lbnNpb25MaW1pdCkge1xuICAgICAgICBpZiAoY2FudmFzLndpZHRoID4gY2FudmFzRGltZW5zaW9uTGltaXQgJiZcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPiBjYW52YXNEaW1lbnNpb25MaW1pdCkge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ICo9IGNhbnZhc0RpbWVuc2lvbkxpbWl0IC8gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhc0RpbWVuc2lvbkxpbWl0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoICo9IGNhbnZhc0RpbWVuc2lvbkxpbWl0IC8gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uTGltaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLndpZHRoID4gY2FudmFzRGltZW5zaW9uTGltaXQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgKj0gY2FudmFzRGltZW5zaW9uTGltaXQgLyBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXNEaW1lbnNpb25MaW1pdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCAqPSBjYW52YXNEaW1lbnNpb25MaW1pdCAvIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzRGltZW5zaW9uTGltaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FudmFzVG9CbG9iKGNhbnZhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKHJlc29sdmUsIG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6ICdpbWFnZS9wbmcnLCBvcHRpb25zLnF1YWxpdHkgPyBvcHRpb25zLnF1YWxpdHkgOiAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSB3aW5kb3cuYXRvYihjYW52YXNcbiAgICAgICAgICAgIC50b0RhdGFVUkwob3B0aW9ucy50eXBlID8gb3B0aW9ucy50eXBlIDogdW5kZWZpbmVkLCBvcHRpb25zLnF1YWxpdHkgPyBvcHRpb25zLnF1YWxpdHkgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJpbmFyeUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgYmluYXJ5QXJyYXlbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKG5ldyBCbG9iKFtiaW5hcnlBcnJheV0sIHtcbiAgICAgICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6ICdpbWFnZS9wbmcnLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5kZWNvZGUgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgaW1nLmRlY29kaW5nID0gJ2FzeW5jJztcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdmdUb0RhdGFVUkwoc3ZnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKSlcbiAgICAgICAgLnRoZW4oZW5jb2RlVVJJQ29tcG9uZW50KVxuICAgICAgICAudGhlbigoaHRtbCkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCR7aHRtbH1gKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub2RlVG9EYXRhVVJMKG5vZGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgY29uc3QgZm9yZWlnbk9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ2ZvcmVpZ25PYmplY3QnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3dpZHRofWApO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCd4JywgJzAnKTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgneScsICcwJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGUoJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChmb3JlaWduT2JqZWN0KTtcbiAgICBmb3JlaWduT2JqZWN0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBzdmdUb0RhdGFVUkwoc3ZnKTtcbn1cbmV4cG9ydCBjb25zdCBpc0luc3RhbmNlT2ZFbGVtZW50ID0gKG5vZGUsIGluc3RhbmNlKSA9PiB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBpbnN0YW5jZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgY29uc3Qgbm9kZVByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihub2RlKTtcbiAgICBpZiAobm9kZVByb3RvdHlwZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAobm9kZVByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBpbnN0YW5jZS5uYW1lIHx8XG4gICAgICAgIGlzSW5zdGFuY2VPZkVsZW1lbnQobm9kZVByb3RvdHlwZSwgaW5zdGFuY2UpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsImltcG9ydCB7IHV1aWQsIHRvQXJyYXkgfSBmcm9tICcuL3V0aWwnO1xuZnVuY3Rpb24gZm9ybWF0Q1NTVGV4dChzdHlsZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgcmV0dXJuIGAke3N0eWxlLmNzc1RleHR9IGNvbnRlbnQ6ICcke2NvbnRlbnQucmVwbGFjZSgvJ3xcIi9nLCAnJyl9JztgO1xufVxuZnVuY3Rpb24gZm9ybWF0Q1NTUHJvcGVydGllcyhzdHlsZSkge1xuICAgIHJldHVybiB0b0FycmF5KHN0eWxlKVxuICAgICAgICAubWFwKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KG5hbWUpO1xuICAgICAgICByZXR1cm4gYCR7bmFtZX06ICR7dmFsdWV9JHtwcmlvcml0eSA/ICcgIWltcG9ydGFudCcgOiAnJ307YDtcbiAgICB9KVxuICAgICAgICAuam9pbignICcpO1xufVxuZnVuY3Rpb24gZ2V0UHNldWRvRWxlbWVudFN0eWxlKGNsYXNzTmFtZSwgcHNldWRvLCBzdHlsZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYC4ke2NsYXNzTmFtZX06JHtwc2V1ZG99YDtcbiAgICBjb25zdCBjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dFxuICAgICAgICA/IGZvcm1hdENTU1RleHQoc3R5bGUpXG4gICAgICAgIDogZm9ybWF0Q1NTUHJvcGVydGllcyhzdHlsZSk7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3NlbGVjdG9yfXske2Nzc1RleHR9fWApO1xufVxuZnVuY3Rpb24gY2xvbmVQc2V1ZG9FbGVtZW50KG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUsIHBzZXVkbykge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlTm9kZSwgcHNldWRvKTtcbiAgICBjb25zdCBjb250ZW50ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgIGlmIChjb250ZW50ID09PSAnJyB8fCBjb250ZW50ID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSB1dWlkKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgY2xvbmVkTm9kZS5jbGFzc05hbWUgPSBgJHtjbG9uZWROb2RlLmNsYXNzTmFtZX0gJHtjbGFzc05hbWV9YDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldFBzZXVkb0VsZW1lbnRTdHlsZShjbGFzc05hbWUsIHBzZXVkbywgc3R5bGUpKTtcbiAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQc2V1ZG9FbGVtZW50cyhuYXRpdmVOb2RlLCBjbG9uZWROb2RlKSB7XG4gICAgY2xvbmVQc2V1ZG9FbGVtZW50KG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUsICc6YmVmb3JlJyk7XG4gICAgY2xvbmVQc2V1ZG9FbGVtZW50KG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUsICc6YWZ0ZXInKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb25lLXBzZXVkb3MuanMubWFwIiwiY29uc3QgV09GRiA9ICdhcHBsaWNhdGlvbi9mb250LXdvZmYnO1xuY29uc3QgSlBFRyA9ICdpbWFnZS9qcGVnJztcbmNvbnN0IG1pbWVzID0ge1xuICAgIHdvZmY6IFdPRkYsXG4gICAgd29mZjI6IFdPRkYsXG4gICAgdHRmOiAnYXBwbGljYXRpb24vZm9udC10cnVldHlwZScsXG4gICAgZW90OiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgIHBuZzogJ2ltYWdlL3BuZycsXG4gICAganBnOiBKUEVHLFxuICAgIGpwZWc6IEpQRUcsXG4gICAgZ2lmOiAnaW1hZ2UvZ2lmJyxcbiAgICB0aWZmOiAnaW1hZ2UvdGlmZicsXG4gICAgc3ZnOiAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgd2VicDogJ2ltYWdlL3dlYnAnLFxufTtcbmZ1bmN0aW9uIGdldEV4dGVuc2lvbih1cmwpIHtcbiAgICBjb25zdCBtYXRjaCA9IC9cXC4oW14uL10qPykkL2cuZXhlYyh1cmwpO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWltZVR5cGUodXJsKSB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKHVybCkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbWltZXNbZXh0ZW5zaW9uXSB8fCAnJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pbWVzLmpzLm1hcCIsImZ1bmN0aW9uIGdldENvbnRlbnRGcm9tRGF0YVVybChkYXRhVVJMKSB7XG4gICAgcmV0dXJuIGRhdGFVUkwuc3BsaXQoLywvKVsxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGFVcmwodXJsKSB7XG4gICAgcmV0dXJuIHVybC5zZWFyY2goL14oZGF0YTopLykgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRhVXJsKGNvbnRlbnQsIG1pbWVUeXBlKSB7XG4gICAgcmV0dXJuIGBkYXRhOiR7bWltZVR5cGV9O2Jhc2U2NCwke2NvbnRlbnR9YDtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFzRGF0YVVSTCh1cmwsIGluaXQsIHByb2Nlc3MpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNvdXJjZSBcIiR7cmVzLnVybH1cIiBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocHJvY2Vzcyh7IHJlcywgcmVzdWx0OiByZWFkZXIucmVzdWx0IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pO1xufVxuY29uc3QgY2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlS2V5KHVybCwgY29udGVudFR5cGUsIGluY2x1ZGVRdWVyeVBhcmFtcykge1xuICAgIGxldCBrZXkgPSB1cmwucmVwbGFjZSgvXFw/LiovLCAnJyk7XG4gICAgaWYgKGluY2x1ZGVRdWVyeVBhcmFtcykge1xuICAgICAgICBrZXkgPSB1cmw7XG4gICAgfVxuICAgIC8vIGZvbnQgcmVzb3VyY2VcbiAgICBpZiAoL3R0ZnxvdGZ8ZW90fHdvZmYyPy9pLnRlc3Qoa2V5KSkge1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvLipcXC8vLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50VHlwZSA/IGBbJHtjb250ZW50VHlwZX1dJHtrZXl9YCA6IGtleTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvdXJjZVRvRGF0YVVSTChyZXNvdXJjZVVybCwgY29udGVudFR5cGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KHJlc291cmNlVXJsLCBjb250ZW50VHlwZSwgb3B0aW9ucy5pbmNsdWRlUXVlcnlQYXJhbXMpO1xuICAgIGlmIChjYWNoZVtjYWNoZUtleV0gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2FjaGVbY2FjaGVLZXldO1xuICAgIH1cbiAgICAvLyByZWY6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9Vc2luZ19YTUxIdHRwUmVxdWVzdCNCeXBhc3NpbmdfdGhlX2NhY2hlXG4gICAgaWYgKG9wdGlvbnMuY2FjaGVCdXN0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICByZXNvdXJjZVVybCArPSAoL1xcPy8udGVzdChyZXNvdXJjZVVybCkgPyAnJicgOiAnPycpICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGxldCBkYXRhVVJMO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaEFzRGF0YVVSTChyZXNvdXJjZVVybCwgb3B0aW9ucy5mZXRjaFJlcXVlc3RJbml0LCAoeyByZXMsIHJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldENvbnRlbnRGcm9tRGF0YVVybChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGF0YVVSTCA9IG1ha2VEYXRhVXJsKGNvbnRlbnQsIGNvbnRlbnRUeXBlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRhdGFVUkwgPSBvcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgICAgIGxldCBtc2cgPSBgRmFpbGVkIHRvIGZldGNoIHJlc291cmNlOiAke3Jlc291cmNlVXJsfWA7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbXNnID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXNnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZVtjYWNoZUtleV0gPSBkYXRhVVJMO1xuICAgIHJldHVybiBkYXRhVVJMO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YXVybC5qcy5tYXAiLCJpbXBvcnQgeyBjbG9uZVBzZXVkb0VsZW1lbnRzIH0gZnJvbSAnLi9jbG9uZS1wc2V1ZG9zJztcbmltcG9ydCB7IGNyZWF0ZUltYWdlLCB0b0FycmF5LCBpc0luc3RhbmNlT2ZFbGVtZW50IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGdldE1pbWVUeXBlIH0gZnJvbSAnLi9taW1lcyc7XG5pbXBvcnQgeyByZXNvdXJjZVRvRGF0YVVSTCB9IGZyb20gJy4vZGF0YXVybCc7XG5hc3luYyBmdW5jdGlvbiBjbG9uZUNhbnZhc0VsZW1lbnQoY2FudmFzKSB7XG4gICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBpZiAoZGF0YVVSTCA9PT0gJ2RhdGE6LCcpIHtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5jbG9uZU5vZGUoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2UoZGF0YVVSTCk7XG59XG5hc3luYyBmdW5jdGlvbiBjbG9uZVZpZGVvRWxlbWVudCh2aWRlbywgb3B0aW9ucykge1xuICAgIGlmICh2aWRlby5jdXJyZW50U3JjKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbWFnZShkYXRhVVJMKTtcbiAgICB9XG4gICAgY29uc3QgcG9zdGVyID0gdmlkZW8ucG9zdGVyO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gZ2V0TWltZVR5cGUocG9zdGVyKTtcbiAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgcmVzb3VyY2VUb0RhdGFVUkwocG9zdGVyLCBjb250ZW50VHlwZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNyZWF0ZUltYWdlKGRhdGFVUkwpO1xufVxuYXN5bmMgZnVuY3Rpb24gY2xvbmVJRnJhbWVFbGVtZW50KGlmcmFtZSkge1xuICAgIHZhciBfYTtcbiAgICB0cnkge1xuICAgICAgICBpZiAoKF9hID0gaWZyYW1lID09PSBudWxsIHx8IGlmcmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWZyYW1lLmNvbnRlbnREb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgY2xvbmVOb2RlKGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSwge30sIHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgLy8gRmFpbGVkIHRvIGNsb25lIGlmcmFtZVxuICAgIH1cbiAgICByZXR1cm4gaWZyYW1lLmNsb25lTm9kZShmYWxzZSk7XG59XG5hc3luYyBmdW5jdGlvbiBjbG9uZVNpbmdsZU5vZGUobm9kZSwgb3B0aW9ucykge1xuICAgIGlmIChpc0luc3RhbmNlT2ZFbGVtZW50KG5vZGUsIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVDYW52YXNFbGVtZW50KG5vZGUpO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChub2RlLCBIVE1MVmlkZW9FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVWaWRlb0VsZW1lbnQobm9kZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZFbGVtZW50KG5vZGUsIEhUTUxJRnJhbWVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVJRnJhbWVFbGVtZW50KG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xufVxuY29uc3QgaXNTbG90RWxlbWVudCA9IChub2RlKSA9PiBub2RlLnRhZ05hbWUgIT0gbnVsbCAmJiBub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NMT1QnO1xuYXN5bmMgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihuYXRpdmVOb2RlLCBjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAoaXNTbG90RWxlbWVudChuYXRpdmVOb2RlKSAmJiBuYXRpdmVOb2RlLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgY2hpbGRyZW4gPSB0b0FycmF5KG5hdGl2ZU5vZGUuYXNzaWduZWROb2RlcygpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MSUZyYW1lRWxlbWVudCkgJiZcbiAgICAgICAgKChfYSA9IG5hdGl2ZU5vZGUuY29udGVudERvY3VtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm9keSkpIHtcbiAgICAgICAgY2hpbGRyZW4gPSB0b0FycmF5KG5hdGl2ZU5vZGUuY29udGVudERvY3VtZW50LmJvZHkuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGlsZHJlbiA9IHRvQXJyYXkoKChfYiA9IG5hdGl2ZU5vZGUuc2hhZG93Um9vdCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbmF0aXZlTm9kZSkuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MVmlkZW9FbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gY2xvbmVkTm9kZTtcbiAgICB9XG4gICAgYXdhaXQgY2hpbGRyZW4ucmVkdWNlKChkZWZlcnJlZCwgY2hpbGQpID0+IGRlZmVycmVkXG4gICAgICAgIC50aGVuKCgpID0+IGNsb25lTm9kZShjaGlsZCwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKChjbG9uZWRDaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2xvbmVkQ2hpbGQpIHtcbiAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVkQ2hpbGQpO1xuICAgICAgICB9XG4gICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICByZXR1cm4gY2xvbmVkTm9kZTtcbn1cbmZ1bmN0aW9uIGNsb25lQ1NTU3R5bGUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSkge1xuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY2xvbmVkTm9kZS5zdHlsZTtcbiAgICBpZiAoIXRhcmdldFN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuYXRpdmVOb2RlKTtcbiAgICBpZiAoc291cmNlU3R5bGUuY3NzVGV4dCkge1xuICAgICAgICB0YXJnZXRTdHlsZS5jc3NUZXh0ID0gc291cmNlU3R5bGUuY3NzVGV4dDtcbiAgICAgICAgdGFyZ2V0U3R5bGUudHJhbnNmb3JtT3JpZ2luID0gc291cmNlU3R5bGUudHJhbnNmb3JtT3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9BcnJheShzb3VyY2VTdHlsZSkuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc291cmNlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnZm9udC1zaXplJyAmJiB2YWx1ZS5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRGb250ID0gTWF0aC5mbG9vcihwYXJzZUZsb2F0KHZhbHVlLnN1YnN0cmluZygwLCB2YWx1ZS5sZW5ndGggLSAyKSkpIC0gMC4xO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7cmVkdWNlZEZvbnR9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzSW5zdGFuY2VPZkVsZW1lbnQobmF0aXZlTm9kZSwgSFRNTElGcmFtZUVsZW1lbnQpICYmXG4gICAgICAgICAgICAgICAgbmFtZSA9PT0gJ2Rpc3BsYXknICYmXG4gICAgICAgICAgICAgICAgdmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdkJyAmJiBjbG9uZWROb2RlLmdldEF0dHJpYnV0ZSgnZCcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgcGF0aCgke2Nsb25lZE5vZGUuZ2V0QXR0cmlidXRlKCdkJyl9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRTdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSwgc291cmNlU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb25lSW5wdXRWYWx1ZShuYXRpdmVOb2RlLCBjbG9uZWROb2RlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkVsZW1lbnQobmF0aXZlTm9kZSwgSFRNTFRleHRBcmVhRWxlbWVudCkpIHtcbiAgICAgICAgY2xvbmVkTm9kZS5pbm5lckhUTUwgPSBuYXRpdmVOb2RlLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgICBjbG9uZWROb2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuYXRpdmVOb2RlLnZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbG9uZVNlbGVjdFZhbHVlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChuYXRpdmVOb2RlLCBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkU2VsZWN0ID0gY2xvbmVkTm9kZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBBcnJheS5mcm9tKGNsb25lZFNlbGVjdC5jaGlsZHJlbikuZmluZCgoY2hpbGQpID0+IG5hdGl2ZU5vZGUudmFsdWUgPT09IGNoaWxkLmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRlY29yYXRlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mRWxlbWVudChjbG9uZWROb2RlLCBFbGVtZW50KSkge1xuICAgICAgICBjbG9uZUNTU1N0eWxlKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpO1xuICAgICAgICBjbG9uZVBzZXVkb0VsZW1lbnRzKG5hdGl2ZU5vZGUsIGNsb25lZE5vZGUpO1xuICAgICAgICBjbG9uZUlucHV0VmFsdWUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSk7XG4gICAgICAgIGNsb25lU2VsZWN0VmFsdWUobmF0aXZlTm9kZSwgY2xvbmVkTm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZWROb2RlO1xufVxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlU1ZHU3ltYm9scyhjbG9uZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHVzZXMgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsID8gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgndXNlJykgOiBbXTtcbiAgICBpZiAodXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgICBjb25zdCBwcm9jZXNzZWREZWZzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHVzZSA9IHVzZXNbaV07XG4gICAgICAgIGNvbnN0IGlkID0gdXNlLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gY2xvbmUucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICBpZiAoIWV4aXN0ICYmIGRlZmluaXRpb24gJiYgIXByb2Nlc3NlZERlZnNbaWRdKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREZWZzW2lkXSA9IChhd2FpdCBjbG9uZU5vZGUoZGVmaW5pdGlvbiwgb3B0aW9ucywgdHJ1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5vZGVzID0gT2JqZWN0LnZhbHVlcyhwcm9jZXNzZWREZWZzKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCBucyk7XG4gICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9ICcwJztcbiAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgc3ZnLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHN2Zy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCAnZGVmcycpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQobm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgb3B0aW9ucywgaXNSb290KSB7XG4gICAgaWYgKCFpc1Jvb3QgJiYgb3B0aW9ucy5maWx0ZXIgJiYgIW9wdGlvbnMuZmlsdGVyKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBjbG9uZVNpbmdsZU5vZGUoY2xvbmVkTm9kZSwgb3B0aW9ucykpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBjbG9uZUNoaWxkcmVuKG5vZGUsIGNsb25lZE5vZGUsIG9wdGlvbnMpKVxuICAgICAgICAudGhlbigoY2xvbmVkTm9kZSkgPT4gZGVjb3JhdGUobm9kZSwgY2xvbmVkTm9kZSkpXG4gICAgICAgIC50aGVuKChjbG9uZWROb2RlKSA9PiBlbnN1cmVTVkdTeW1ib2xzKGNsb25lZE5vZGUsIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb25lLW5vZGUuanMubWFwIiwiaW1wb3J0IHsgcmVzb2x2ZVVybCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBnZXRNaW1lVHlwZSB9IGZyb20gJy4vbWltZXMnO1xuaW1wb3J0IHsgaXNEYXRhVXJsLCBtYWtlRGF0YVVybCwgcmVzb3VyY2VUb0RhdGFVUkwgfSBmcm9tICcuL2RhdGF1cmwnO1xuY29uc3QgVVJMX1JFR0VYID0gL3VybFxcKChbJ1wiXT8pKFteJ1wiXSs/KVxcMVxcKS9nO1xuY29uc3QgVVJMX1dJVEhfRk9STUFUX1JFR0VYID0gL3VybFxcKFteKV0rXFwpXFxzKmZvcm1hdFxcKChbXCInXT8pKFteXCInXSspXFwxXFwpL2c7XG5jb25zdCBGT05UX1NSQ19SRUdFWCA9IC9zcmM6XFxzKig/OnVybFxcKFteKV0rXFwpXFxzKmZvcm1hdFxcKFteKV0rXFwpWyw7XVxccyopKy9nO1xuZnVuY3Rpb24gdG9SZWdleCh1cmwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICBjb25zdCBlc2NhcGVkID0gdXJsLnJlcGxhY2UoLyhbLiorP14ke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGAodXJsXFxcXChbJ1wiXT8pKCR7ZXNjYXBlZH0pKFsnXCJdP1xcXFwpKWAsICdnJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVUkxzKGNzc1RleHQpIHtcbiAgICBjb25zdCB1cmxzID0gW107XG4gICAgY3NzVGV4dC5yZXBsYWNlKFVSTF9SRUdFWCwgKHJhdywgcXVvdGF0aW9uLCB1cmwpID0+IHtcbiAgICAgICAgdXJscy5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiByYXc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVybHMuZmlsdGVyKCh1cmwpID0+ICFpc0RhdGFVcmwodXJsKSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1iZWQoY3NzVGV4dCwgcmVzb3VyY2VVUkwsIGJhc2VVUkwsIG9wdGlvbnMsIGdldENvbnRlbnRGcm9tVXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRVUkwgPSBiYXNlVVJMID8gcmVzb2x2ZVVybChyZXNvdXJjZVVSTCwgYmFzZVVSTCkgOiByZXNvdXJjZVVSTDtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBnZXRNaW1lVHlwZShyZXNvdXJjZVVSTCk7XG4gICAgICAgIGxldCBkYXRhVVJMO1xuICAgICAgICBpZiAoZ2V0Q29udGVudEZyb21VcmwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRDb250ZW50RnJvbVVybChyZXNvbHZlZFVSTCk7XG4gICAgICAgICAgICBkYXRhVVJMID0gbWFrZURhdGFVcmwoY29udGVudCwgY29udGVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YVVSTCA9IGF3YWl0IHJlc291cmNlVG9EYXRhVVJMKHJlc29sdmVkVVJMLCBjb250ZW50VHlwZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzc1RleHQucmVwbGFjZSh0b1JlZ2V4KHJlc291cmNlVVJMKSwgYCQxJHtkYXRhVVJMfSQzYCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBwYXNzXG4gICAgfVxuICAgIHJldHVybiBjc3NUZXh0O1xufVxuZnVuY3Rpb24gZmlsdGVyUHJlZmVycmVkRm9udEZvcm1hdChzdHIsIHsgcHJlZmVycmVkRm9udEZvcm1hdCB9KSB7XG4gICAgcmV0dXJuICFwcmVmZXJyZWRGb250Rm9ybWF0XG4gICAgICAgID8gc3RyXG4gICAgICAgIDogc3RyLnJlcGxhY2UoRk9OVF9TUkNfUkVHRVgsIChtYXRjaCkgPT4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbc3JjLCAsIGZvcm1hdF0gPSBVUkxfV0lUSF9GT1JNQVRfUkVHRVguZXhlYyhtYXRjaCkgfHwgW107XG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBwcmVmZXJyZWRGb250Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgc3JjOiAke3NyY307YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEVtYmVkKHVybCkge1xuICAgIHJldHVybiB1cmwuc2VhcmNoKFVSTF9SRUdFWCkgIT09IC0xO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYmVkUmVzb3VyY2VzKGNzc1RleHQsIGJhc2VVcmwsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXNob3VsZEVtYmVkKGNzc1RleHQpKSB7XG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZENTU1RleHQgPSBmaWx0ZXJQcmVmZXJyZWRGb250Rm9ybWF0KGNzc1RleHQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHVybHMgPSBwYXJzZVVSTHMoZmlsdGVyZWRDU1NUZXh0KTtcbiAgICByZXR1cm4gdXJscy5yZWR1Y2UoKGRlZmVycmVkLCB1cmwpID0+IGRlZmVycmVkLnRoZW4oKGNzcykgPT4gZW1iZWQoY3NzLCB1cmwsIGJhc2VVcmwsIG9wdGlvbnMpKSwgUHJvbWlzZS5yZXNvbHZlKGZpbHRlcmVkQ1NTVGV4dCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1iZWQtcmVzb3VyY2VzLmpzLm1hcCIsImltcG9ydCB7IGVtYmVkUmVzb3VyY2VzIH0gZnJvbSAnLi9lbWJlZC1yZXNvdXJjZXMnO1xuaW1wb3J0IHsgdG9BcnJheSwgaXNJbnN0YW5jZU9mRWxlbWVudCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBpc0RhdGFVcmwsIHJlc291cmNlVG9EYXRhVVJMIH0gZnJvbSAnLi9kYXRhdXJsJztcbmltcG9ydCB7IGdldE1pbWVUeXBlIH0gZnJvbSAnLi9taW1lcyc7XG5hc3luYyBmdW5jdGlvbiBlbWJlZFByb3AocHJvcE5hbWUsIG5vZGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcHJvcFZhbHVlID0gKF9hID0gbm9kZS5zdHlsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuICAgIGlmIChwcm9wVmFsdWUpIHtcbiAgICAgICAgY29uc3QgY3NzU3RyaW5nID0gYXdhaXQgZW1iZWRSZXNvdXJjZXMocHJvcFZhbHVlLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wTmFtZSwgY3NzU3RyaW5nLCBub2RlLnN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkocHJvcE5hbWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGVtYmVkQmFja2dyb3VuZChjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCEoYXdhaXQgZW1iZWRQcm9wKCdiYWNrZ3JvdW5kJywgY2xvbmVkTm9kZSwgb3B0aW9ucykpKSB7XG4gICAgICAgIGF3YWl0IGVtYmVkUHJvcCgnYmFja2dyb3VuZC1pbWFnZScsIGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIShhd2FpdCBlbWJlZFByb3AoJ21hc2snLCBjbG9uZWROb2RlLCBvcHRpb25zKSkpIHtcbiAgICAgICAgYXdhaXQgZW1iZWRQcm9wKCdtYXNrLWltYWdlJywgY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZW1iZWRJbWFnZU5vZGUoY2xvbmVkTm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlzSW1hZ2VFbGVtZW50ID0gaXNJbnN0YW5jZU9mRWxlbWVudChjbG9uZWROb2RlLCBIVE1MSW1hZ2VFbGVtZW50KTtcbiAgICBpZiAoIShpc0ltYWdlRWxlbWVudCAmJiAhaXNEYXRhVXJsKGNsb25lZE5vZGUuc3JjKSkgJiZcbiAgICAgICAgIShpc0luc3RhbmNlT2ZFbGVtZW50KGNsb25lZE5vZGUsIFNWR0ltYWdlRWxlbWVudCkgJiZcbiAgICAgICAgICAgICFpc0RhdGFVcmwoY2xvbmVkTm9kZS5ocmVmLmJhc2VWYWwpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGlzSW1hZ2VFbGVtZW50ID8gY2xvbmVkTm9kZS5zcmMgOiBjbG9uZWROb2RlLmhyZWYuYmFzZVZhbDtcbiAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgcmVzb3VyY2VUb0RhdGFVUkwodXJsLCBnZXRNaW1lVHlwZSh1cmwpLCBvcHRpb25zKTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNsb25lZE5vZGUub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgY2xvbmVkTm9kZS5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBjb25zdCBpbWFnZSA9IGNsb25lZE5vZGU7XG4gICAgICAgIGlmIChpbWFnZS5kZWNvZGUpIHtcbiAgICAgICAgICAgIGltYWdlLmRlY29kZSA9IHJlc29sdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltYWdlLmxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgaW1hZ2UubG9hZGluZyA9ICdlYWdlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLnNyY3NldCA9ICcnO1xuICAgICAgICAgICAgY2xvbmVkTm9kZS5zcmMgPSBkYXRhVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvbmVkTm9kZS5ocmVmLmJhc2VWYWwgPSBkYXRhVVJMO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBlbWJlZENoaWxkcmVuKGNsb25lZE5vZGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRvQXJyYXkoY2xvbmVkTm9kZS5jaGlsZE5vZGVzKTtcbiAgICBjb25zdCBkZWZlcnJlZHMgPSBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBlbWJlZEltYWdlcyhjaGlsZCwgb3B0aW9ucykpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGRlZmVycmVkcykudGhlbigoKSA9PiBjbG9uZWROb2RlKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWJlZEltYWdlcyhjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkVsZW1lbnQoY2xvbmVkTm9kZSwgRWxlbWVudCkpIHtcbiAgICAgICAgYXdhaXQgZW1iZWRCYWNrZ3JvdW5kKGNsb25lZE5vZGUsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCBlbWJlZEltYWdlTm9kZShjbG9uZWROb2RlLCBvcHRpb25zKTtcbiAgICAgICAgYXdhaXQgZW1iZWRDaGlsZHJlbihjbG9uZWROb2RlLCBvcHRpb25zKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJlZC1pbWFnZXMuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5U3R5bGUobm9kZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IG5vZGU7XG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53aWR0aCkge1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke29wdGlvbnMud2lkdGh9cHhgO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7b3B0aW9ucy5oZWlnaHR9cHhgO1xuICAgIH1cbiAgICBjb25zdCBtYW51YWwgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmIChtYW51YWwgIT0gbnVsbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhtYW51YWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVba2V5XSA9IG1hbnVhbFtrZXldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBseS1zdHlsZS5qcy5tYXAiLCJpbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGZldGNoQXNEYXRhVVJMIH0gZnJvbSAnLi9kYXRhdXJsJztcbmltcG9ydCB7IHNob3VsZEVtYmVkLCBlbWJlZFJlc291cmNlcyB9IGZyb20gJy4vZW1iZWQtcmVzb3VyY2VzJztcbmNvbnN0IGNzc0ZldGNoQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ1NTKHVybCkge1xuICAgIGxldCBjYWNoZSA9IGNzc0ZldGNoQ2FjaGVbdXJsXTtcbiAgICBpZiAoY2FjaGUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgY3NzVGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgY2FjaGUgPSB7IHVybCwgY3NzVGV4dCB9O1xuICAgIGNzc0ZldGNoQ2FjaGVbdXJsXSA9IGNhY2hlO1xuICAgIHJldHVybiBjYWNoZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGVtYmVkRm9udHMoZGF0YSwgb3B0aW9ucykge1xuICAgIGxldCBjc3NUZXh0ID0gZGF0YS5jc3NUZXh0O1xuICAgIGNvbnN0IHJlZ2V4VXJsID0gL3VybFxcKFtcIiddPyhbXlwiJyldKylbXCInXT9cXCkvZztcbiAgICBjb25zdCBmb250TG9jcyA9IGNzc1RleHQubWF0Y2goL3VybFxcKFteKV0rXFwpL2cpIHx8IFtdO1xuICAgIGNvbnN0IGxvYWRGb250cyA9IGZvbnRMb2NzLm1hcChhc3luYyAobG9jKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBsb2MucmVwbGFjZShyZWdleFVybCwgJyQxJyk7XG4gICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcbiAgICAgICAgICAgIHVybCA9IG5ldyBVUkwodXJsLCBkYXRhLnVybCkuaHJlZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hBc0RhdGFVUkwodXJsLCBvcHRpb25zLmZldGNoUmVxdWVzdEluaXQsICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKGxvYywgYHVybCgke3Jlc3VsdH0pYCk7XG4gICAgICAgICAgICByZXR1cm4gW2xvYywgcmVzdWx0XTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGxvYWRGb250cykudGhlbigoKSA9PiBjc3NUZXh0KTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ1NTKHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGNvbW1lbnRzUmVnZXggPSAvKFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pL2dpO1xuICAgIC8vIHN0cmlwIG91dCBjb21tZW50c1xuICAgIGxldCBjc3NUZXh0ID0gc291cmNlLnJlcGxhY2UoY29tbWVudHNSZWdleCwgJycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVnZXgtbGl0ZXJhbHNcbiAgICBjb25zdCBrZXlmcmFtZXNSZWdleCA9IG5ldyBSZWdFeHAoJygoQC4qP2tleWZyYW1lcyBbXFxcXHNcXFxcU10qPyl7KFtcXFxcc1xcXFxTXSo/fVxcXFxzKj8pfSknLCAnZ2knKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGtleWZyYW1lc1JlZ2V4LmV4ZWMoY3NzVGV4dCk7XG4gICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtYXRjaGVzWzBdKTtcbiAgICB9XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShrZXlmcmFtZXNSZWdleCwgJycpO1xuICAgIGNvbnN0IGltcG9ydFJlZ2V4ID0gL0BpbXBvcnRbXFxzXFxTXSo/dXJsXFwoW14pXSpcXClbXFxzXFxTXSo/Oy9naTtcbiAgICAvLyB0byBtYXRjaCBjc3MgJiBtZWRpYSBxdWVyaWVzIHRvZ2V0aGVyXG4gICAgY29uc3QgY29tYmluZWRDU1NSZWdleCA9ICcoKFxcXFxzKj8oPzpcXFxcL1xcXFwqW1xcXFxzXFxcXFNdKj9cXFxcKlxcXFwvKT9cXFxccyo/QG1lZGlhW1xcXFxzXFxcXFNdJyArXG4gICAgICAgICcqPyl7KFtcXFxcc1xcXFxTXSo/KX1cXFxccyo/fSl8KChbXFxcXHNcXFxcU10qPyl7KFtcXFxcc1xcXFxTXSo/KX0pJztcbiAgICAvLyB1bmlmaWVkIHJlZ2V4XG4gICAgY29uc3QgdW5pZmllZFJlZ2V4ID0gbmV3IFJlZ0V4cChjb21iaW5lZENTU1JlZ2V4LCAnZ2knKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBpbXBvcnRSZWdleC5leGVjKGNzc1RleHQpO1xuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHVuaWZpZWRSZWdleC5leGVjKGNzc1RleHQpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcG9ydFJlZ2V4Lmxhc3RJbmRleCA9IHVuaWZpZWRSZWdleC5sYXN0SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bmlmaWVkUmVnZXgubGFzdEluZGV4ID0gaW1wb3J0UmVnZXgubGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKG1hdGNoZXNbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0Q1NTUnVsZXMoc3R5bGVTaGVldHMsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBjb25zdCBkZWZlcnJlZHMgPSBbXTtcbiAgICAvLyBGaXJzdCBsb29wIGlubGluZXMgaW1wb3J0c1xuICAgIHN0eWxlU2hlZXRzLmZvckVhY2goKHNoZWV0KSA9PiB7XG4gICAgICAgIGlmICgnY3NzUnVsZXMnIGluIHNoZWV0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRvQXJyYXkoc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IENTU1J1bGUuSU1QT1JUX1JVTEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbXBvcnRJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGl0ZW0uaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gZmV0Y2hDU1ModXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChtZXRhZGF0YSkgPT4gZW1iZWRGb250cyhtZXRhZGF0YSwgb3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGNzc1RleHQpID0+IHBhcnNlQ1NTKGNzc1RleHQpLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHJ1bGUuc3RhcnRzV2l0aCgnQGltcG9ydCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChpbXBvcnRJbmRleCArPSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIHJ1bGUgZnJvbSByZW1vdGUgY3NzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHJlbW90ZSBjc3MnLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5saW5lID0gc3R5bGVTaGVldHMuZmluZCgoYSkgPT4gYS5ocmVmID09IG51bGwpIHx8IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChzaGVldC5ocmVmICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRzLnB1c2goZmV0Y2hDU1Moc2hlZXQuaHJlZilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChtZXRhZGF0YSkgPT4gZW1iZWRGb250cyhtZXRhZGF0YSwgb3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoY3NzVGV4dCkgPT4gcGFyc2VDU1MoY3NzVGV4dCkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lLmluc2VydFJ1bGUocnVsZSwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyByZW1vdGUgc3R5bGVzaGVldCcsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5saW5pbmcgcmVtb3RlIGNzcyBmaWxlJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZGVmZXJyZWRzKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gU2Vjb25kIGxvb3AgcGFyc2VzIHJ1bGVzXG4gICAgICAgIHN0eWxlU2hlZXRzLmZvckVhY2goKHNoZWV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2Nzc1J1bGVzJyBpbiBzaGVldCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRvQXJyYXkoc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hpbGUgcmVhZGluZyBDU1MgcnVsZXMgZnJvbSAke3NoZWV0LmhyZWZ9YCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFdlYkZvbnRSdWxlcyhjc3NSdWxlcykge1xuICAgIHJldHVybiBjc3NSdWxlc1xuICAgICAgICAuZmlsdGVyKChydWxlKSA9PiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEUpXG4gICAgICAgIC5maWx0ZXIoKHJ1bGUpID0+IHNob3VsZEVtYmVkKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnc3JjJykpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlV2ViRm9udFJ1bGVzKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobm9kZS5vd25lckRvY3VtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlZCBlbGVtZW50IGlzIG5vdCB3aXRoaW4gYSBEb2N1bWVudCcpO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IHRvQXJyYXkobm9kZS5vd25lckRvY3VtZW50LnN0eWxlU2hlZXRzKTtcbiAgICBjb25zdCBjc3NSdWxlcyA9IGF3YWl0IGdldENTU1J1bGVzKHN0eWxlU2hlZXRzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gZ2V0V2ViRm9udFJ1bGVzKGNzc1J1bGVzKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWJGb250Q1NTKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBydWxlcyA9IGF3YWl0IHBhcnNlV2ViRm9udFJ1bGVzKG5vZGUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGNzc1RleHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBydWxlLnBhcmVudFN0eWxlU2hlZXQgPyBydWxlLnBhcmVudFN0eWxlU2hlZXQuaHJlZiA6IG51bGw7XG4gICAgICAgIHJldHVybiBlbWJlZFJlc291cmNlcyhydWxlLmNzc1RleHQsIGJhc2VVcmwsIG9wdGlvbnMpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gY3NzVGV4dHMuam9pbignXFxuJyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1iZWRXZWJGb250cyhjbG9uZWROb2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY3NzVGV4dCA9IG9wdGlvbnMuZm9udEVtYmVkQ1NTICE9IG51bGxcbiAgICAgICAgPyBvcHRpb25zLmZvbnRFbWJlZENTU1xuICAgICAgICA6IG9wdGlvbnMuc2tpcEZvbnRzXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogYXdhaXQgZ2V0V2ViRm9udENTUyhjbG9uZWROb2RlLCBvcHRpb25zKTtcbiAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgICBjb25zdCBzdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBjb25zdCBzeXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KTtcbiAgICAgICAgc3R5bGVOb2RlLmFwcGVuZENoaWxkKHN5dGxlQ29udGVudCk7XG4gICAgICAgIGlmIChjbG9uZWROb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNsb25lZE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlTm9kZSwgY2xvbmVkTm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmVkLXdlYmZvbnRzLmpzLm1hcCIsImltcG9ydCB7IGNsb25lTm9kZSB9IGZyb20gJy4vY2xvbmUtbm9kZSc7XG5pbXBvcnQgeyBlbWJlZEltYWdlcyB9IGZyb20gJy4vZW1iZWQtaW1hZ2VzJztcbmltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuL2FwcGx5LXN0eWxlJztcbmltcG9ydCB7IGVtYmVkV2ViRm9udHMsIGdldFdlYkZvbnRDU1MgfSBmcm9tICcuL2VtYmVkLXdlYmZvbnRzJztcbmltcG9ydCB7IGdldEltYWdlU2l6ZSwgZ2V0UGl4ZWxSYXRpbywgY3JlYXRlSW1hZ2UsIGNhbnZhc1RvQmxvYiwgbm9kZVRvRGF0YVVSTCwgY2hlY2tDYW52YXNEaW1lbnNpb25zLCB9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9Tdmcobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRJbWFnZVNpemUobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgY2xvbmVkTm9kZSA9IChhd2FpdCBjbG9uZU5vZGUobm9kZSwgb3B0aW9ucywgdHJ1ZSkpO1xuICAgIGF3YWl0IGVtYmVkV2ViRm9udHMoY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgYXdhaXQgZW1iZWRJbWFnZXMoY2xvbmVkTm9kZSwgb3B0aW9ucyk7XG4gICAgYXBwbHlTdHlsZShjbG9uZWROb2RlLCBvcHRpb25zKTtcbiAgICBjb25zdCBkYXRhdXJpID0gYXdhaXQgbm9kZVRvRGF0YVVSTChjbG9uZWROb2RlLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gZGF0YXVyaTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b0NhbnZhcyhub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGdldEltYWdlU2l6ZShub2RlLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdmcgPSBhd2FpdCB0b1N2Zyhub2RlLCBvcHRpb25zKTtcbiAgICBjb25zdCBpbWcgPSBhd2FpdCBjcmVhdGVJbWFnZShzdmcpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCByYXRpbyA9IG9wdGlvbnMucGl4ZWxSYXRpbyB8fCBnZXRQaXhlbFJhdGlvKCk7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBvcHRpb25zLmNhbnZhc1dpZHRoIHx8IHdpZHRoO1xuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IG9wdGlvbnMuY2FudmFzSGVpZ2h0IHx8IGhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIHJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiByYXRpbztcbiAgICBpZiAoIW9wdGlvbnMuc2tpcEF1dG9TY2FsZSkge1xuICAgICAgICBjaGVja0NhbnZhc0RpbWVuc2lvbnMoY2FudmFzKTtcbiAgICB9XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7Y2FudmFzV2lkdGh9YDtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7Y2FudmFzSGVpZ2h0fWA7XG4gICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHJldHVybiBjYW52YXM7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9QaXhlbERhdGEobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRJbWFnZVNpemUobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgdG9DYW52YXMobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b1BuZyhub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBjYW52YXMgPSBhd2FpdCB0b0NhbnZhcyhub2RlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvSnBlZyhub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBjYW52YXMgPSBhd2FpdCB0b0NhbnZhcyhub2RlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIG9wdGlvbnMucXVhbGl0eSB8fCAxKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b0Jsb2Iobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgdG9DYW52YXMobm9kZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGNhbnZhc1RvQmxvYihjYW52YXMpO1xuICAgIHJldHVybiBibG9iO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvbnRFbWJlZENTUyhub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gZ2V0V2ViRm9udENTUyhub2RlLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cdGltcG9ydCB7IHRvUG5nIH0gZnJvbSAnaHRtbC10by1pbWFnZSc7XG5cblx0ZXhwb3J0IGxldCBzY2hlZHVsZTtcblx0ZXhwb3J0IGxldCBkYXRhO1xuXHRleHBvcnQgbGV0IG9sZFRhYmxlOiBIVE1MRGl2RWxlbWVudDtcblxuXHRsZXQgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuXHRsZXQgdGFibGU6IEhUTUxEaXZFbGVtZW50O1xuXHRsZXQgZG93bmxvYWRpbmcgPSBmYWxzZTtcblx0bGV0IHVzZU5ld0Rlc2lnbiA9IHRydWU7XG5cblx0Y29uc3QgZG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0ZG93bmxvYWRpbmcgPSB0cnVlO1xuXHRcdGNvbnN0IGRhdGFVcmwgPSBhd2FpdCB0b1BuZyh0YWJsZSk7XG5cdFx0ZG93bmxvYWRpbmcgPSBmYWxzZTtcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGxpbmsuZG93bmxvYWQgPSAnaW1hZ2UucG5nJztcblx0XHRsaW5rLmhyZWYgPSBkYXRhVXJsO1xuXHRcdGxpbmsuY2xpY2soKTtcblx0fTtcbjwvc2NyaXB0PlxuXG57I2lmIHVzZU5ld0Rlc2lnbn1cblx0PGRpdlxuXHRcdGNsYXNzPVwiZmxleCBtaW4taC1zY3JlZW4gdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDBcIlxuXHQ+XG5cdFx0PGRpdiBjbGFzcz1cInctMTAvMTIgYmctc2xhdGUtMTAwXCIgYmluZDp0aGlzPXt0YWJsZX0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIGJvcmRlciBwLTQgdGV4dC1zbGF0ZS05MDBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPntkYXRhLmZhY3VsdHl9PC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+e2RhdGEuZGVwYXJ0bWVudEFuZFByb2dyYW1tZX08L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57ZGF0YS5zZW1lc3RlckFuZFllYXJ9PC9wPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+e2RhdGEuc3R1ZGVudEluZm99PC9wPlxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGJpbmQ6dGhpcz17Zm9ybX1cblx0XHRcdFx0XHRvbjpjaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdGZvcm0uc3VibWl0KCk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRhY3Rpb249XCJyZXBvcnRfZXhhbXRhYmxlX3Nob3cucGhwXCJcblx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInllYXJcIiBpZD1cInllYXJcIiB2YWx1ZT17ZGF0YS55ZWFyfSAvPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNlbWVzdGVyXCIgaWQ9XCJzZW1lc3RlclwiIHZhbHVlPXtkYXRhLnNlbWVzdGVyfSAvPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInN0dWRlbnRfaWRcIiBpZD1cInN0dWRlbnRfaWRcIiB2YWx1ZT17ZGF0YS5zdHVkZW50X2lkfSAvPlxuXHRcdFx0XHRcdHsjaWYgIWRvd25sb2FkaW5nfVxuXHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwibWlkX29yX2ZpbmFsXCIgY2xhc3M9XCJiZy1zbGF0ZS0xMDBcIiB2YWx1ZT17ZGF0YS50ZXJtfT5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIk1cIj5NaWQgVGVybTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiRlwiPkZpbmFsPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHR7OmVsc2V9XG5cdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0e2RhdGEudGVybSA9PT0gJ00nID8gJ01pZCBUZXJtJyA6ICdGaW5hbCd9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0ey9pZn1cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJ3LWZ1bGxcIj5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdHsjZWFjaCBzY2hlZHVsZSBhcyBkYXksIGluZGV4RGF5fVxuXHRcdFx0XHRcdFx0eyNlYWNoIGRheS5zdWJqZWN0IGFzIHN1YmplY3QsIGluZGV4fVxuXHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3M9XCJib3JkZXIgdGV4dC1zbSBmb250LWxpZ2h0XCIgY2xhc3M6Ymctc2xhdGUtMjAwPXtpbmRleERheSAlIDIgPT0gMX0+XG5cdFx0XHRcdFx0XHRcdFx0eyNpZiBpbmRleCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwIHAtMlwiIHJvd3NwYW49e2RheS5zdWJqZWN0Lmxlbmd0aH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsjaWYgZGF5LmRhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25ldyBEYXRlKGRheS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoWyd0aC1USCddLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3ZWVrZGF5OiAnc2hvcnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF5OiAnbnVtZXJpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb250aDogJ3Nob3J0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHllYXI6ICdudW1lcmljJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7OmVsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+4LmE4Lih4LmI4LiX4Lij4Liy4LiaPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7L2lmfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHR7L2lmfVxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwIHAtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyNpZiBzdWJqZWN0LnN0YXJ0VGltZSAmJiBzdWJqZWN0LmVuZFRpbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtuZXcgRGF0ZShzdWJqZWN0LnN0YXJ0VGltZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFsnZW4tRU4nXSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhvdXI6ICcyLWRpZ2l0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW51dGU6ICcyLWRpZ2l0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRob3VyMTI6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pfSAtIHtuZXcgRGF0ZShzdWJqZWN0LmVuZFRpbWUpLnRvTG9jYWxlVGltZVN0cmluZyhbJ2VuLUVOJ10sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRob3VyOiAnMi1kaWdpdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aG91cjEyOiBmYWxzZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdHs6ZWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+4LmE4Lih4LmI4LiX4Lij4Liy4LiaPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey9pZn1cblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwIHAtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3N1YmplY3Quc3ViamVjdENvZGV9XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBwLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzdWJqZWN0LnN1YmplY3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwid2hpdGVzcGFjZS1ub3dyYXAgcC0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c3ViamVjdC5zZWN9XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBwLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzdWJqZWN0LmNyZWRpdH1cblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIndoaXRlc3BhY2Utbm93cmFwIHAtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3N1YmplY3QuZXhhbVR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJwLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzdWJqZWN0LnJvb219XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdHsvZWFjaH1cblx0XHRcdFx0XHR7L2VhY2h9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbnsvaWZ9XG57I2lmICF1c2VOZXdEZXNpZ259XG5cdCxcblx0PGRpdiBiaW5kOnRoaXM9e29sZFRhYmxlfT48L2Rpdj5cbnsvaWZ9XG5cbjxkaXYgY2xhc3M9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGZsZXggZ2FwLTJcIj5cblx0PGJ1dHRvblxuXHRcdGNsYXNzPVwiYm9yZGVyIGJnLXNsYXRlLTEwMCBwLTIgb3V0bGluZSBvdXRsaW5lLTAgb3V0bGluZS1zbGF0ZS0yMDAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LWxnIGhvdmVyOm91dGxpbmUtMiBhY3RpdmU6Ymctc2xhdGUtMjAwXCJcblx0XHRvbjpjbGljaz17ZG93bmxvYWR9XG5cdFx0YXJpYS1sYWJlbD1cImRvd25sb2FkXCJcblx0PlxuXHRcdDxzdmdcblx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRzdHJva2Utd2lkdGg9XCIxLjVcIlxuXHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdGNsYXNzPVwiaC02IHctNlwiXG5cdFx0PlxuXHRcdFx0PHBhdGhcblx0XHRcdFx0c3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0ZD1cIk0zIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwMDUuMjUgMjFoMTMuNUEyLjI1IDIuMjUgMCAwMDIxIDE4Ljc1VjE2LjVNMTYuNSAxMkwxMiAxNi41bTAgMEw3LjUgMTJtNC41IDQuNVYzXCJcblx0XHRcdC8+XG5cdFx0PC9zdmc+XG5cdDwvYnV0dG9uPlxuXHQ8YnV0dG9uXG5cdFx0Y2xhc3M9XCJib3JkZXIgYmctc2xhdGUtMTAwIHAtMiBvdXRsaW5lIG91dGxpbmUtMCBvdXRsaW5lLXNsYXRlLTIwMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6b3V0bGluZS0yIGFjdGl2ZTpiZy1zbGF0ZS0yMDBcIlxuXHRcdG9uOmNsaWNrPXsoKSA9PiAodXNlTmV3RGVzaWduID0gIXVzZU5ld0Rlc2lnbil9XG5cdD5cblx0XHR7dXNlTmV3RGVzaWduID8gJ05ldyBEZXNpZ24nIDogJ09sZCBEZXNpZ24nfVxuXHQ8L2J1dHRvbj5cbjwvZGl2PlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRhcHBOYW1lOiAnS01JVEwgRExDJyxcblx0dXRjT2Zmc2V0OiA3LFxuXHRtZXNzYWdlczoge1xuXHRcdHNjcmFwZUVycm9yOiAnU2NyYXBpbmcgZXJyb3IuJ1xuXHR9LFxuXHRzY3JhcGVyOiB7XG5cdFx0Y2xhc3NUeXBlczoge1xuXHRcdFx0bGVjdHVyZTogWyfguJcnLCAnTCddLFxuXHRcdFx0bGFiOiBbJ+C4mycsICdQJ11cblx0XHR9LFxuXHRcdGRheXM6IHtcblx0XHRcdCfguK3guLIuJzogMCxcblx0XHRcdCfguIguJzogMSxcblx0XHRcdCfguK0uJzogMixcblx0XHRcdCfguJ4uJzogMyxcblx0XHRcdCfguJ7guKQuJzogNCxcblx0XHRcdCfguKguJzogNSxcblx0XHRcdCfguKouJzogNixcblx0XHRcdFN1bjogMCxcblx0XHRcdE1vbjogMSxcblx0XHRcdFR1ZTogMixcblx0XHRcdFdlZDogMyxcblx0XHRcdFRodTogNCxcblx0XHRcdEZyaTogNSxcblx0XHRcdFNhdDogNlxuXHRcdH1cblx0fSxcblx0YXBpUGF0aHM6IHtcblx0XHRuZXdSZWc6ICdodHRwczovL2s4cy5yZWcua21pdGwuYWMudGgvcmVnL2FwaS8/bGV2ZWxfaWQ9MSZmdW5jdGlvbj0nXG5cdH1cbn07XG4iLCJpbXBvcnQgRXhhbVNjaGVkdWxlIGZyb20gJyRsaWIvY29tcG9uZW50cy9leGFtLXNjaGVkdWxlLnN2ZWx0ZSc7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJyRsaWIvY29uc3RhbnRzJztcbmltcG9ydCAnJGxpYi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFeGFtU2NoZWR1bGUoKSB7XG5cbiAgbGV0IHN0YXJ0ID0gMTc7XG5cbiAgbGV0IGdldFN1YmplY3QgPSBbXTtcbiAgY29uc3Qgb2xkVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb2xkVGFibGUuaW5uZXJIVE1MID0gZG9jdW1lbnQuYm9keS5pbm5lckhUTUw7XG5cbiAgY29uc3QgbW9udGhUeHQyTnVtID0ge1xuICAgICfguKEu4LiELic6ICcxJyxcbiAgICAn4LiBLuC4ni4nOiAnMicsXG4gICAgJ+C4oeC4tS7guIQuJzogJzMnLFxuICAgICfguYDguKEu4LiiLic6ICc0JyxcbiAgICAn4LieLuC4hC4nOiAnNScsXG4gICAgJ+C4oeC4tC7guKIuJzogJzYnLFxuICAgICfguIEu4LiELic6ICc3JyxcbiAgICAn4LiqLuC4hC4nOiAnOCcsXG4gICAgJ+C4gS7guKIuJzogJzknLFxuICAgICfguJUu4LiELic6ICcxMCcsXG4gICAgJ+C4ni7guKIuJzogJzExJyxcbiAgICAn4LiYLuC4hC4nOiAnMTInLFxuICAgIEphbjogJzEnLFxuICAgIEZlYjogJzInLFxuICAgIE1hcjogJzMnLFxuICAgIEFwcjogJzQnLFxuICAgIE1heTogJzUnLFxuICAgIEp1bjogJzYnLFxuICAgIEp1bDogJzcnLFxuICAgIEF1ZzogJzgnLFxuICAgIFNlcDogJzknLFxuICAgIE9jdDogJzEwJyxcbiAgICBOb3Y6ICcxMScsXG4gICAgRGVjOiAnMTInXG4gIH07XG5cbiAgaW50ZXJmYWNlIFBlcnNvbmFsSW5mbyB7XG4gICAgZGVwYXJ0bWVudEFuZFByb2dyYW1tZTogc3RyaW5nO1xuICAgIGZhY3VsdHk6IHN0cmluZztcbiAgICBzZW1lc3Rlcjogc3RyaW5nO1xuICAgIHNlbWVzdGVyQW5kWWVhcjogc3RyaW5nO1xuICAgIHN0dWRlbnRJZDogc3RyaW5nO1xuICAgIGlkQW5kTmFtZTogc3RyaW5nO1xuICAgIHRlcm06IHN0cmluZztcbiAgICB5ZWFyOiBzdHJpbmc7XG4gIH1cblxuICBpbnRlcmZhY2UgRXhhbVNjaGVkdWxlSXRlbSB7XG4gICAgb3JkZXI6IHN0cmluZztcbiAgICBzdWJqZWN0Q29kZTogc3RyaW5nO1xuICAgIHN1YmplY3ROYW1lOiBzdHJpbmc7XG4gICAgc2VjOiBzdHJpbmc7XG4gICAgY3JlZGl0OiBzdHJpbmc7XG4gICAgZXhhbVR5cGU6IHN0cmluZztcbiAgICByb29tOiBzdHJpbmc7XG4gICAgc3RhcnRUaW1lOiBEYXRlO1xuICAgIGVuZFRpbWU6IERhdGU7XG4gICAgZGF0ZTogRGF0ZTtcbiAgfVxuXG4gIGludGVyZmFjZSBFeGFtU2NoZWR1bGVEYXRhIHtcbiAgICBkYXRlOiBEYXRlO1xuICAgIHN1YmplY3Q6IEV4YW1TY2hlZHVsZUl0ZW1bXTtcbiAgfVxuXG4gIGNvbnN0IGZvbnRQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBmb250UHJvbXB0LmlubmVySFRNTCA9IGBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250UHJvbXB0KTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHJhd0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYGJvZHkgPiBjZW50ZXIgPiBmb3JtID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg1KSA+IHRkID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgke3N0YXJ0fSlgXG4gICAgKTtcbiAgICBpZiAoIXJhd0RhdGEpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBnZXRTdWJqZWN0SW5mbzogKHN0cmluZyB8IG51bGwpW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSByYXdEYXRhLmNoaWxkcmVuW2ldO1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBnZXRTdWJqZWN0SW5mby5wdXNoKHRleHQpO1xuICAgIH1cbiAgICBjb25zdCBpc0V4aXN0ID0gZ2V0U3ViamVjdC5maW5kKChlKSA9PiBlLm9yZGVyID09PSBnZXRTdWJqZWN0SW5mb1swXSk7XG4gICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgIGlzRXhpc3QuZXhhbVR5cGUgPVxuICAgICAgICBpc0V4aXN0LmV4YW1UeXBlICsgKGdldFN1YmplY3RJbmZvWzVdID8gYC8ke1N0cmluZyhnZXRTdWJqZWN0SW5mb1s1XSkudHJpbSgpfWAgOiAnJyk7XG4gICAgICBzdGFydCArPSAyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGRhdGVTY3JhcGUgPSBnZXRTdWJqZWN0SW5mb1s2XT8uc3BsaXQoJyAnKTtcbiAgICBjb25zdCBkYXRlID1cbiAgICAgIGRhdGVTY3JhcGUgJiYgZGF0ZVNjcmFwZS5sZW5ndGggPiAxXG4gICAgICAgID8gbmV3IERhdGUoXG4gICAgICAgICAgICBgMjAke051bWJlcihkYXRlU2NyYXBlWzNdKX0tJHttb250aFR4dDJOdW1bZGF0ZVNjcmFwZVsyXSBhcyBrZXlvZiB0eXBlb2YgbW9udGhUeHQyTnVtXX0tJHtkYXRlU2NyYXBlWzFdfWBcbiAgICAgICAgICApXG4gICAgICAgIDogbmV3IERhdGUoMCk7XG4gICAgY29uc3QgdGltZVNjcmFwZSA9IGdldFN1YmplY3RJbmZvWzddXG4gICAgICA/LnJlcGxhY2UoJ+C4mS4nLCAnJylcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnLScpXG4gICAgICAubWFwKChlKSA9PiBlLnNwbGl0KCc6JykpO1xuICAgIGxldCBzdGFydFRpbWU7XG4gICAgbGV0IGVuZFRpbWU7XG4gICAgaWYgKHRpbWVTY3JhcGUgJiYgdGltZVNjcmFwZS5sZW5ndGggPT0gMikge1xuICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZGF0ZSkuc2V0SG91cnMocGFyc2VJbnQodGltZVNjcmFwZVswXVswXSksIHBhcnNlSW50KHRpbWVTY3JhcGVbMF1bMV0pKTtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycyhwYXJzZUludCh0aW1lU2NyYXBlWzFdWzBdKSwgcGFyc2VJbnQodGltZVNjcmFwZVsxXVsxXSkpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhOiBFeGFtU2NoZWR1bGVJdGVtID0ge1xuICAgICAgb3JkZXI6IGdldFN1YmplY3RJbmZvWzBdID8gZ2V0U3ViamVjdEluZm9bMF0gOiAnJyxcbiAgICAgIHN1YmplY3RDb2RlOiBnZXRTdWJqZWN0SW5mb1sxXSA/IGdldFN1YmplY3RJbmZvWzFdIDogJycsXG4gICAgICBzdWJqZWN0TmFtZTogZ2V0U3ViamVjdEluZm9bMl0gPyBnZXRTdWJqZWN0SW5mb1syXSA6ICcnLFxuICAgICAgc2VjOiBnZXRTdWJqZWN0SW5mb1szXSA/IGdldFN1YmplY3RJbmZvWzNdIDogJycsXG4gICAgICBjcmVkaXQ6IGdldFN1YmplY3RJbmZvWzRdID8gZ2V0U3ViamVjdEluZm9bNF0gOiAnJyxcbiAgICAgIGV4YW1UeXBlOiBnZXRTdWJqZWN0SW5mb1s1XSA/IFN0cmluZyhnZXRTdWJqZWN0SW5mb1s1XSkudHJpbSgpIDogJycsXG4gICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSA/IG5ldyBEYXRlKHN0YXJ0VGltZSkgOiBuZXcgRGF0ZSgwKSxcbiAgICAgIGVuZFRpbWU6IGVuZFRpbWUgPyBuZXcgRGF0ZShlbmRUaW1lKSA6IG5ldyBEYXRlKDApLFxuICAgICAgZGF0ZSxcbiAgICAgIHJvb206IGdldFN1YmplY3RJbmZvWzhdID8gZ2V0U3ViamVjdEluZm9bOF0gOiAnJ1xuICAgIH07XG4gICAgZ2V0U3ViamVjdC5wdXNoKGRhdGEpO1xuICAgIHN0YXJ0ICs9IDI7XG4gIH1cblxuICBnZXRTdWJqZWN0ID0gZ2V0U3ViamVjdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuc3RhcnRUaW1lICYmIGIuc3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gYS5zdGFydFRpbWU/LmdldFRpbWUoKSAtIGIuc3RhcnRUaW1lPy5nZXRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhLnN0YXJ0VGltZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGIuc3RhcnRUaW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZWR1bGU6IEV4YW1TY2hlZHVsZURhdGFbXSA9IFtdO1xuICBnZXRTdWJqZWN0LmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCBpc0V4aXN0ID0gc2NoZWR1bGUuZmluZCgoZikgPT4gZi5kYXRlPy5nZXRUaW1lKCkgPT09IGUuZGF0ZT8uZ2V0VGltZSgpKTtcbiAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgaXNFeGlzdC5zdWJqZWN0LnB1c2goZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlLnB1c2goeyBkYXRlOiBlLmRhdGUsIHN1YmplY3Q6IFtlXSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHBlcnNvbmFsSW5mbzogUGVyc29uYWxJbmZvID0ge1xuICAgIHRlcm06XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignI21pZF9vcl9maW5hbCcpPy52YWx1ZSB8fFxuICAgICAgY29uc3RhbnRzLm1lc3NhZ2VzLnNjcmFwZUVycm9yLFxuICAgIGZhY3VsdHk6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYm9keSA+IGNlbnRlciA+IGZvcm0gPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDUpID4gdGQgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDQpID4gdGQgPiBzdHJvbmcnXG4gICAgICApPy50ZXh0Q29udGVudCB8fCBjb25zdGFudHMubWVzc2FnZXMuc2NyYXBlRXJyb3IsXG4gICAgZGVwYXJ0bWVudEFuZFByb2dyYW1tZTpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdib2R5ID4gY2VudGVyID4gZm9ybSA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoNSkgPiB0ZCA+IHRhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoNikgPiB0ZCdcbiAgICAgICk/LnRleHRDb250ZW50IHx8IGNvbnN0YW50cy5tZXNzYWdlcy5zY3JhcGVFcnJvcixcbiAgICBzZW1lc3RlckFuZFllYXI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYm9keSA+IGNlbnRlciA+IGZvcm0gPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDUpID4gdGQgPiB0YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDgpID4gdGQnXG4gICAgICApPy50ZXh0Q29udGVudCB8fCBjb25zdGFudHMubWVzc2FnZXMuc2NyYXBlRXJyb3IsXG4gICAgaWRBbmROYW1lOlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2JvZHkgPiBjZW50ZXIgPiBmb3JtID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg1KSA+IHRkID4gdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgxMCkgPiB0ZCdcbiAgICAgICk/LnRleHRDb250ZW50IHx8IGNvbnN0YW50cy5tZXNzYWdlcy5zY3JhcGVFcnJvcixcbiAgICB5ZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjeWVhcicpPy52YWx1ZSB8fCBjb25zdGFudHMubWVzc2FnZXMuc2NyYXBlRXJyb3IsXG4gICAgc2VtZXN0ZXI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjc2VtZXN0ZXInKT8udmFsdWUgfHwgY29uc3RhbnRzLm1lc3NhZ2VzLnNjcmFwZUVycm9yLFxuICAgIHN0dWRlbnRJZDpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNzdHVkZW50X2lkJyk/LnZhbHVlIHx8IGNvbnN0YW50cy5tZXNzYWdlcy5zY3JhcGVFcnJvclxuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3Qgb2xkU3R5bGVzID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwibGlua1t0eXBlPSd0ZXh0L2NzcyddXCIpO1xuICBpZiAob2xkU3R5bGVzKSBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKG9sZFN0eWxlcyk7XG5cbiAgY29uc29sZS5sb2coc2NoZWR1bGUpO1xuICBjb25zb2xlLmxvZyhwZXJzb25hbEluZm8pO1xuXG4gIG1vdW50KEV4YW1TY2hlZHVsZSwge1xuICAgIHRhcmdldDogZG9jdW1lbnQuYm9keSxcbiAgICBwcm9wczoge1xuICAgICAgc2NoZWR1bGUsXG4gICAgICBkYXRhOiBwZXJzb25hbEluZm8sXG4gICAgICBvbGRUYWJsZTogb2xkVGFibGVcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyRXhhbVNjaGVkdWxlIH0gZnJvbSAnJGxpYi91dGlsL3JlbmRlcmVyL2V4YW0tc2NoZWR1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb250ZW50U2NyaXB0KHtcblx0bWF0Y2hlczogWycqOi8vKi5yZWcua21pdGwuYWMudGgvdV9zdHVkZW50L3JlcG9ydF9leGFtdGFibGVfc2hvdy5waHAnXSxcblx0bWFpbigpIHtcblx0XHRyZW5kZXJFeGFtU2NoZWR1bGUoKTtcblx0fVxufSk7XG4iLCJleHBvcnQgY29uc3QgYnJvd3NlciA9IChcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkID09IG51bGwgPyBnbG9iYWxUaGlzLmNocm9tZSA6IChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgZ2xvYmFsVGhpcy5icm93c2VyXG4gIClcbik7XG4iLCJmdW5jdGlvbiBwcmludChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFID09PSBcInByb2R1Y3Rpb25cIikgcmV0dXJuO1xuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXJncy5zaGlmdCgpO1xuICAgIG1ldGhvZChgW3d4dF0gJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZChcIlt3eHRdXCIsIC4uLmFyZ3MpO1xuICB9XG59XG5leHBvcnQgY29uc3QgbG9nZ2VyID0ge1xuICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZGVidWcsIC4uLmFyZ3MpLFxuICBsb2c6ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLmxvZywgLi4uYXJncyksXG4gIHdhcm46ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLndhcm4sIC4uLmFyZ3MpLFxuICBlcnJvcjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZXJyb3IsIC4uLmFyZ3MpXG59O1xuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuZXhwb3J0IGNsYXNzIFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5ld1VybCwgb2xkVXJsKSB7XG4gICAgc3VwZXIoV3h0TG9jYXRpb25DaGFuZ2VFdmVudC5FVkVOVF9OQU1FLCB7fSk7XG4gICAgdGhpcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgdGhpcy5vbGRVcmwgPSBvbGRVcmw7XG4gIH1cbiAgc3RhdGljIEVWRU5UX05BTUUgPSBnZXRVbmlxdWVFdmVudE5hbWUoXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICByZXR1cm4gYCR7YnJvd3Nlcj8ucnVudGltZT8uaWR9OiR7aW1wb3J0Lm1ldGEuZW52LkVOVFJZUE9JTlR9OiR7ZXZlbnROYW1lfWA7XG59XG4iLCJpbXBvcnQgeyBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4vY3VzdG9tLWV2ZW50cy5tanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbldhdGNoZXIoY3R4KSB7XG4gIGxldCBpbnRlcnZhbDtcbiAgbGV0IG9sZFVybDtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBFbnN1cmUgdGhlIGxvY2F0aW9uIHdhdGNoZXIgaXMgYWN0aXZlbHkgbG9va2luZyBmb3IgVVJMIGNoYW5nZXMuIElmIGl0J3MgYWxyZWFkeSB3YXRjaGluZyxcbiAgICAgKiB0aGlzIGlzIGEgbm9vcC5cbiAgICAgKi9cbiAgICBydW4oKSB7XG4gICAgICBpZiAoaW50ZXJ2YWwgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgb2xkVXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgIGludGVydmFsID0gY3R4LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGV0IG5ld1VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChuZXdVcmwuaHJlZiAhPT0gb2xkVXJsLmhyZWYpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgV3h0TG9jYXRpb25DaGFuZ2VFdmVudChuZXdVcmwsIG9sZFVybCkpO1xuICAgICAgICAgIG9sZFVybCA9IG5ld1VybDtcbiAgICAgICAgfVxuICAgICAgfSwgMWUzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcInd4dC9icm93c2VyXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vLi4vc2FuZGJveC91dGlscy9sb2dnZXIubWpzXCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVFdmVudE5hbWUgfSBmcm9tIFwiLi9jdXN0b20tZXZlbnRzLm1qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTG9jYXRpb25XYXRjaGVyIH0gZnJvbSBcIi4vbG9jYXRpb24td2F0Y2hlci5tanNcIjtcbmV4cG9ydCBjbGFzcyBDb250ZW50U2NyaXB0Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRTY3JpcHROYW1lLCBvcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZW50U2NyaXB0TmFtZSA9IGNvbnRlbnRTY3JpcHROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgaWYgKHRoaXMuaXNUb3BGcmFtZSkge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JOZXdlclNjcmlwdHMoeyBpZ25vcmVGaXJzdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgdGhpcy5zdG9wT2xkU2NyaXB0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbkZvck5ld2VyU2NyaXB0cygpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFID0gZ2V0VW5pcXVlRXZlbnROYW1lKFxuICAgIFwid3h0OmNvbnRlbnQtc2NyaXB0LXN0YXJ0ZWRcIlxuICApO1xuICBpc1RvcEZyYW1lID0gd2luZG93LnNlbGYgPT09IHdpbmRvdy50b3A7XG4gIGFib3J0Q29udHJvbGxlcjtcbiAgbG9jYXRpb25XYXRjaGVyID0gY3JlYXRlTG9jYXRpb25XYXRjaGVyKHRoaXMpO1xuICByZWNlaXZlZE1lc3NhZ2VJZHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBnZXQgc2lnbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIH1cbiAgYWJvcnQocmVhc29uKSB7XG4gICAgcmV0dXJuIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KHJlYXNvbik7XG4gIH1cbiAgZ2V0IGlzSW52YWxpZCgpIHtcbiAgICBpZiAoYnJvd3Nlci5ydW50aW1lLmlkID09IG51bGwpIHtcbiAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2lnbmFsLmFib3J0ZWQ7XG4gIH1cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW52YWxpZDtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29udGVudCBzY3JpcHQncyBjb250ZXh0IGlzIGludmFsaWRhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoY2IpO1xuICAgKiBjb25zdCByZW1vdmVJbnZhbGlkYXRlZExpc3RlbmVyID0gY3R4Lm9uSW52YWxpZGF0ZWQoKCkgPT4ge1xuICAgKiAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIoY2IpO1xuICAgKiB9KVxuICAgKiAvLyAuLi5cbiAgICogcmVtb3ZlSW52YWxpZGF0ZWRMaXN0ZW5lcigpO1xuICAgKi9cbiAgb25JbnZhbGlkYXRlZChjYikge1xuICAgIHRoaXMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhIHByb21pc2UgdGhhdCBuZXZlciByZXNvbHZlcy4gVXNlZnVsIGlmIHlvdSBoYXZlIGFuIGFzeW5jIGZ1bmN0aW9uIHRoYXQgc2hvdWxkbid0IHJ1blxuICAgKiBhZnRlciB0aGUgY29udGV4dCBpcyBleHBpcmVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBnZXRWYWx1ZUZyb21TdG9yYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgKiAgIGlmIChjdHguaXNJbnZhbGlkKSByZXR1cm4gY3R4LmJsb2NrKCk7XG4gICAqXG4gICAqICAgLy8gLi4uXG4gICAqIH1cbiAgICovXG4gIGJsb2NrKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cuc2V0SW50ZXJ2YWxgIHRoYXQgYXV0b21hdGljYWxseSBjbGVhcnMgdGhlIGludGVydmFsIHdoZW4gaW52YWxpZGF0ZWQuXG4gICAqL1xuICBzZXRJbnRlcnZhbChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSBoYW5kbGVyKCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNsZWFySW50ZXJ2YWwoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cuc2V0VGltZW91dGAgdGhhdCBhdXRvbWF0aWNhbGx5IGNsZWFycyB0aGUgaW50ZXJ2YWwgd2hlbiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSBoYW5kbGVyKCk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNsZWFyVGltZW91dChpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRoYXQgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSByZXF1ZXN0IHdoZW5cbiAgICogaW52YWxpZGF0ZWQuXG4gICAqL1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2tgIHRoYXQgYXV0b21hdGljYWxseSBjYW5jZWxzIHRoZSByZXF1ZXN0IHdoZW5cbiAgICogaW52YWxpZGF0ZWQuXG4gICAqL1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2lnbmFsLmFib3J0ZWQpIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIikge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgdGhpcy5sb2NhdGlvbldhdGNoZXIucnVuKCk7XG4gICAgfVxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyPy4oXG4gICAgICB0eXBlLnN0YXJ0c1dpdGgoXCJ3eHQ6XCIpID8gZ2V0VW5pcXVlRXZlbnROYW1lKHR5cGUpIDogdHlwZSxcbiAgICAgIGhhbmRsZXIsXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHNpZ25hbDogdGhpcy5zaWduYWxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQWJvcnQgdGhlIGFib3J0IGNvbnRyb2xsZXIgYW5kIGV4ZWN1dGUgYWxsIGBvbkludmFsaWRhdGVkYCBsaXN0ZW5lcnMuXG4gICAqL1xuICBub3RpZnlJbnZhbGlkYXRlZCgpIHtcbiAgICB0aGlzLmFib3J0KFwiQ29udGVudCBzY3JpcHQgY29udGV4dCBpbnZhbGlkYXRlZFwiKTtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgQ29udGVudCBzY3JpcHQgXCIke3RoaXMuY29udGVudFNjcmlwdE5hbWV9XCIgY29udGV4dCBpbnZhbGlkYXRlZGBcbiAgICApO1xuICB9XG4gIHN0b3BPbGRTY3JpcHRzKCkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogQ29udGVudFNjcmlwdENvbnRleHQuU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFLFxuICAgICAgICBjb250ZW50U2NyaXB0TmFtZTogdGhpcy5jb250ZW50U2NyaXB0TmFtZSxcbiAgICAgICAgbWVzc2FnZUlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxuICAgICAgfSxcbiAgICAgIFwiKlwiXG4gICAgKTtcbiAgfVxuICB2ZXJpZnlTY3JpcHRTdGFydGVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1NjcmlwdFN0YXJ0ZWRFdmVudCA9IGV2ZW50LmRhdGE/LnR5cGUgPT09IENvbnRlbnRTY3JpcHRDb250ZXh0LlNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRTtcbiAgICBjb25zdCBpc1NhbWVDb250ZW50U2NyaXB0ID0gZXZlbnQuZGF0YT8uY29udGVudFNjcmlwdE5hbWUgPT09IHRoaXMuY29udGVudFNjcmlwdE5hbWU7XG4gICAgY29uc3QgaXNOb3REdXBsaWNhdGUgPSAhdGhpcy5yZWNlaXZlZE1lc3NhZ2VJZHMuaGFzKGV2ZW50LmRhdGE/Lm1lc3NhZ2VJZCk7XG4gICAgcmV0dXJuIGlzU2NyaXB0U3RhcnRlZEV2ZW50ICYmIGlzU2FtZUNvbnRlbnRTY3JpcHQgJiYgaXNOb3REdXBsaWNhdGU7XG4gIH1cbiAgbGlzdGVuRm9yTmV3ZXJTY3JpcHRzKG9wdGlvbnMpIHtcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgY29uc3QgY2IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnZlcmlmeVNjcmlwdFN0YXJ0ZWRFdmVudChldmVudCkpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlZE1lc3NhZ2VJZHMuYWRkKGV2ZW50LmRhdGEubWVzc2FnZUlkKTtcbiAgICAgICAgY29uc3Qgd2FzRmlyc3QgPSBpc0ZpcnN0O1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh3YXNGaXJzdCAmJiBvcHRpb25zPy5pZ25vcmVGaXJzdEV2ZW50KSByZXR1cm47XG4gICAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNiKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpKTtcbiAgfVxufVxuIiwiY29uc3QgbnVsbEtleSA9IFN5bWJvbCgnbnVsbCcpOyAvLyBgb2JqZWN0SGFzaGVzYCBrZXkgZm9yIG51bGxcblxubGV0IGtleUNvdW50ZXIgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW55S2V5c01hcCBleHRlbmRzIE1hcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLl9vYmplY3RIYXNoZXMgPSBuZXcgV2Vha01hcCgpO1xuXHRcdHRoaXMuX3N5bWJvbEhhc2hlcyA9IG5ldyBNYXAoKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9pc3N1ZXMvMTE5NFxuXHRcdHRoaXMuX3B1YmxpY0tleXMgPSBuZXcgTWFwKCk7XG5cblx0XHRjb25zdCBbcGFpcnNdID0gYXJndW1lbnRzOyAvLyBNYXAgY29tcGF0XG5cdFx0aWYgKHBhaXJzID09PSBudWxsIHx8IHBhaXJzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHBhaXJzW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IodHlwZW9mIHBhaXJzICsgJyBpcyBub3QgaXRlcmFibGUgKGNhbm5vdCByZWFkIHByb3BlcnR5IFN5bWJvbChTeW1ib2wuaXRlcmF0b3IpKScpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgW2tleXMsIHZhbHVlXSBvZiBwYWlycykge1xuXHRcdFx0dGhpcy5zZXQoa2V5cywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRQdWJsaWNLZXlzKGtleXMsIGNyZWF0ZSA9IGZhbHNlKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUga2V5cyBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByaXZhdGVLZXkgPSB0aGlzLl9nZXRQcml2YXRlS2V5KGtleXMsIGNyZWF0ZSk7XG5cblx0XHRsZXQgcHVibGljS2V5O1xuXHRcdGlmIChwcml2YXRlS2V5ICYmIHRoaXMuX3B1YmxpY0tleXMuaGFzKHByaXZhdGVLZXkpKSB7XG5cdFx0XHRwdWJsaWNLZXkgPSB0aGlzLl9wdWJsaWNLZXlzLmdldChwcml2YXRlS2V5KTtcblx0XHR9IGVsc2UgaWYgKGNyZWF0ZSkge1xuXHRcdFx0cHVibGljS2V5ID0gWy4uLmtleXNdOyAvLyBSZWdlbmVyYXRlIGtleXMgYXJyYXkgdG8gYXZvaWQgZXh0ZXJuYWwgaW50ZXJhY3Rpb25cblx0XHRcdHRoaXMuX3B1YmxpY0tleXMuc2V0KHByaXZhdGVLZXksIHB1YmxpY0tleSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtwcml2YXRlS2V5LCBwdWJsaWNLZXl9O1xuXHR9XG5cblx0X2dldFByaXZhdGVLZXkoa2V5cywgY3JlYXRlID0gZmFsc2UpIHtcblx0XHRjb25zdCBwcml2YXRlS2V5cyA9IFtdO1xuXHRcdGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRpZiAoa2V5ID09PSBudWxsKSB7XG5cdFx0XHRcdGtleSA9IG51bGxLZXk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhc2hlcyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicgPyAnX29iamVjdEhhc2hlcycgOiAodHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyAnX3N5bWJvbEhhc2hlcycgOiBmYWxzZSk7XG5cblx0XHRcdGlmICghaGFzaGVzKSB7XG5cdFx0XHRcdHByaXZhdGVLZXlzLnB1c2goa2V5KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpc1toYXNoZXNdLmhhcyhrZXkpKSB7XG5cdFx0XHRcdHByaXZhdGVLZXlzLnB1c2godGhpc1toYXNoZXNdLmdldChrZXkpKTtcblx0XHRcdH0gZWxzZSBpZiAoY3JlYXRlKSB7XG5cdFx0XHRcdGNvbnN0IHByaXZhdGVLZXkgPSBgQEBta20tcmVmLSR7a2V5Q291bnRlcisrfUBAYDtcblx0XHRcdFx0dGhpc1toYXNoZXNdLnNldChrZXksIHByaXZhdGVLZXkpO1xuXHRcdFx0XHRwcml2YXRlS2V5cy5wdXNoKHByaXZhdGVLZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShwcml2YXRlS2V5cyk7XG5cdH1cblxuXHRzZXQoa2V5cywgdmFsdWUpIHtcblx0XHRjb25zdCB7cHVibGljS2V5fSA9IHRoaXMuX2dldFB1YmxpY0tleXMoa2V5cywgdHJ1ZSk7XG5cdFx0cmV0dXJuIHN1cGVyLnNldChwdWJsaWNLZXksIHZhbHVlKTtcblx0fVxuXG5cdGdldChrZXlzKSB7XG5cdFx0Y29uc3Qge3B1YmxpY0tleX0gPSB0aGlzLl9nZXRQdWJsaWNLZXlzKGtleXMpO1xuXHRcdHJldHVybiBzdXBlci5nZXQocHVibGljS2V5KTtcblx0fVxuXG5cdGhhcyhrZXlzKSB7XG5cdFx0Y29uc3Qge3B1YmxpY0tleX0gPSB0aGlzLl9nZXRQdWJsaWNLZXlzKGtleXMpO1xuXHRcdHJldHVybiBzdXBlci5oYXMocHVibGljS2V5KTtcblx0fVxuXG5cdGRlbGV0ZShrZXlzKSB7XG5cdFx0Y29uc3Qge3B1YmxpY0tleSwgcHJpdmF0ZUtleX0gPSB0aGlzLl9nZXRQdWJsaWNLZXlzKGtleXMpO1xuXHRcdHJldHVybiBCb29sZWFuKHB1YmxpY0tleSAmJiBzdXBlci5kZWxldGUocHVibGljS2V5KSAmJiB0aGlzLl9wdWJsaWNLZXlzLmRlbGV0ZShwcml2YXRlS2V5KSk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRzdXBlci5jbGVhcigpO1xuXHRcdHRoaXMuX3N5bWJvbEhhc2hlcy5jbGVhcigpO1xuXHRcdHRoaXMuX3B1YmxpY0tleXMuY2xlYXIoKTtcblx0fVxuXG5cdGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcblx0XHRyZXR1cm4gJ01hbnlLZXlzTWFwJztcblx0fVxuXG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiBzdXBlci5zaXplO1xuXHR9XG59XG4iLCJpbXBvcnQgTWFueUtleXNNYXAgZnJvbSAnbWFueS1rZXlzLW1hcCc7XG5pbXBvcnQgeyBkZWZ1IH0gZnJvbSAnZGVmdSc7XG5pbXBvcnQgeyBpc0V4aXN0IH0gZnJvbSAnLi9kZXRlY3RvcnMubWpzJztcblxuY29uc3QgZ2V0RGVmYXVsdE9wdGlvbnMgPSAoKSA9PiAoe1xuICB0YXJnZXQ6IGdsb2JhbFRoaXMuZG9jdW1lbnQsXG4gIHVuaWZ5UHJvY2VzczogdHJ1ZSxcbiAgZGV0ZWN0b3I6IGlzRXhpc3QsXG4gIG9ic2VydmVDb25maWdzOiB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWUsXG4gICAgYXR0cmlidXRlczogdHJ1ZVxuICB9LFxuICBzaWduYWw6IHZvaWQgMCxcbiAgY3VzdG9tTWF0Y2hlcjogdm9pZCAwXG59KTtcbmNvbnN0IG1lcmdlT3B0aW9ucyA9ICh1c2VyU2lkZU9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSA9PiB7XG4gIHJldHVybiBkZWZ1KHVzZXJTaWRlT3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xufTtcblxuY29uc3QgdW5pZnlDYWNoZSA9IG5ldyBNYW55S2V5c01hcCgpO1xuZnVuY3Rpb24gY3JlYXRlV2FpdEVsZW1lbnQoaW5zdGFuY2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgZGVmYXVsdE9wdGlvbnMgfSA9IGluc3RhbmNlT3B0aW9ucztcbiAgcmV0dXJuIChzZWxlY3Rvciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIHVuaWZ5UHJvY2VzcyxcbiAgICAgIG9ic2VydmVDb25maWdzLFxuICAgICAgZGV0ZWN0b3IsXG4gICAgICBzaWduYWwsXG4gICAgICBjdXN0b21NYXRjaGVyXG4gICAgfSA9IG1lcmdlT3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgY29uc3QgdW5pZnlQcm9taXNlS2V5ID0gW1xuICAgICAgc2VsZWN0b3IsXG4gICAgICB0YXJnZXQsXG4gICAgICB1bmlmeVByb2Nlc3MsXG4gICAgICBvYnNlcnZlQ29uZmlncyxcbiAgICAgIGRldGVjdG9yLFxuICAgICAgc2lnbmFsLFxuICAgICAgY3VzdG9tTWF0Y2hlclxuICAgIF07XG4gICAgY29uc3QgY2FjaGVkUHJvbWlzZSA9IHVuaWZ5Q2FjaGUuZ2V0KHVuaWZ5UHJvbWlzZUtleSk7XG4gICAgaWYgKHVuaWZ5UHJvY2VzcyAmJiBjYWNoZWRQcm9taXNlKSB7XG4gICAgICByZXR1cm4gY2FjaGVkUHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgZGV0ZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKFxuICAgICAgLy8gYmlvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0FzeW5jUHJvbWlzZUV4ZWN1dG9yOiBhdm9pZCBuZXN0aW5nIHByb21pc2VcbiAgICAgIGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbD8uYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3Qoc2lnbmFsLnJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihcbiAgICAgICAgICBhc3luYyAobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IF8gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgIGlmIChzaWduYWw/LmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgZGV0ZWN0UmVzdWx0MiA9IGF3YWl0IGRldGVjdEVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICBkZXRlY3RvcixcbiAgICAgICAgICAgICAgICBjdXN0b21NYXRjaGVyXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoZGV0ZWN0UmVzdWx0Mi5pc0RldGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGV0ZWN0UmVzdWx0Mi5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBzaWduYWw/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJhYm9ydFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Qoc2lnbmFsLnJlYXNvbik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkZXRlY3RSZXN1bHQgPSBhd2FpdCBkZXRlY3RFbGVtZW50KHtcbiAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgZGV0ZWN0b3IsXG4gICAgICAgICAgY3VzdG9tTWF0Y2hlclxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRldGVjdFJlc3VsdC5pc0RldGVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGV0ZWN0UmVzdWx0LnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIG9ic2VydmVDb25maWdzKTtcbiAgICAgIH1cbiAgICApLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgdW5pZnlDYWNoZS5kZWxldGUodW5pZnlQcm9taXNlS2V5KTtcbiAgICB9KTtcbiAgICB1bmlmeUNhY2hlLnNldCh1bmlmeVByb21pc2VLZXksIGRldGVjdFByb21pc2UpO1xuICAgIHJldHVybiBkZXRlY3RQcm9taXNlO1xuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZGV0ZWN0RWxlbWVudCh7XG4gIHRhcmdldCxcbiAgc2VsZWN0b3IsXG4gIGRldGVjdG9yLFxuICBjdXN0b21NYXRjaGVyXG59KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjdXN0b21NYXRjaGVyID8gY3VzdG9tTWF0Y2hlcihzZWxlY3RvcikgOiB0YXJnZXQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBhd2FpdCBkZXRlY3RvcihlbGVtZW50KTtcbn1cbmNvbnN0IHdhaXRFbGVtZW50ID0gY3JlYXRlV2FpdEVsZW1lbnQoe1xuICBkZWZhdWx0T3B0aW9uczogZ2V0RGVmYXVsdE9wdGlvbnMoKVxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVdhaXRFbGVtZW50LCBnZXREZWZhdWx0T3B0aW9ucywgd2FpdEVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6WyJkZWZpbml0aW9uIiwiZXF1YWxzIiwic3RhY2siLCJfYSIsInNvdXJjZSIsImUuc3RhdGVfdW5zYWZlX211dGF0aW9uIiwiZWZmZWN0IiwiX2IiLCJ3Lm93bmVyc2hpcF9pbnZhbGlkX211dGF0aW9uIiwicHJvcCIsImUuc3RhdGVfZGVzY3JpcHRvcnNfZml4ZWQiLCJ2YWx1ZSIsImtleSIsImUuc3RhdGVfcHJvdG90eXBlX2ZpeGVkIiwiYXJyYXlfcHJvdG90eXBlIiwiaW5kZXgiLCJ3LnN0YXRlX3Byb3h5X2VxdWFsaXR5X21pc21hdGNoIiwiZGVyaXZlZCIsImNoaWxkIiwiZS5kZXJpdmVkX3JlZmVyZW5jZXNfc2VsZiIsImUuZWZmZWN0X29ycGhhbiIsImUuZWZmZWN0X2luX3Vub3duZWRfZGVyaXZlZCIsImUuZWZmZWN0X2luX3RlYXJkb3duIiwicHVzaCIsInRlYXJkb3duIiwic2libGluZyIsImlzX21pY3JvX3Rhc2tfcXVldWVkIiwiY29tcG9uZW50X2NvbnRleHQiLCJyZXN1bHQiLCJlLmVmZmVjdF91cGRhdGVfZGVwdGhfZXhjZWVkZWQiLCJlLnN0YXRlX3Vuc2FmZV9sb2NhbF9yZWFkIiwiZ2V0IiwiZS5ydW5lX291dHNpZGVfc3ZlbHRlIiwibG9jYXRpb24iLCJldmVudCIsInRleHQiLCJldmVudHMiLCJlLmNvbXBvbmVudF9hcGlfaW52YWxpZF9uZXciLCJlLmNvbXBvbmVudF9hcGlfY2hhbmdlZCIsImZuIiwiaSIsInByb3BzIiwiaW5pdCIsInByb2Nlc3MiLCJkYXRhVVJMIiwiY2FjaGUiLCIkLnByb3AiLCIkLm11dGFibGVfc3RhdGUiLCIkLnNldCIsIiQuZ2V0IiwibGluayIsIiQuaW5pdF9zZWxlY3QiLCIkLnNlbGVjdF9vcHRpb24iLCIkLnRlbXBsYXRlX2VmZmVjdCIsIiQuc2V0X3RleHQiLCIkLnN0cmljdF9lcXVhbHMiLCIkLmJpbmRfdGhpcyIsIiQuZWFjaCIsIiQuaW5kZXgiLCIkJGFuY2hvciIsIiQuZGVyaXZlZF9zYWZlX2VxdWFsIiwiJC5zZXRfdmFsdWUiLCIkLmV2ZW50IiwiRXhhbVNjaGVkdWxlIiwicHJpbnQiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFdBQVMsb0JBQW9CQSxhQUFZO0FBQzlDLFdBQU9BO0FBQUEsRUFDVDtBQ09PLFFBQU0saUJBQWlCO0FDUDlCLE1BQUksT0FBTyxX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LElBRUMsT0FBTyxNQUFNO0FBQ1osWUFBTSxFQUFDLFdBQVcsV0FBVSxJQUFJLEtBQUssZUFBZSxJQUFJO0FBQ3hELGFBQU8sUUFBUSxhQUFhLE1BQU0sT0FBTyxTQUFTLEtBQUssS0FBSyxZQUFZLE9BQU8sVUFBVSxDQUFDO0FBQUEsSUFDNUY7QUFBQSxJQUVDLFFBQVE7QUFDUCxZQUFNLE1BQU87QUFDYixXQUFLLGNBQWMsTUFBTztBQUMxQixXQUFLLFlBQVksTUFBTztBQUFBLElBQzFCO0FBQUEsSUFFQyxLQUFLLE9BQU8sV0FBVyxJQUFJO0FBQzFCLGFBQU87QUFBQSxJQUNUO0FBQUEsSUFFQyxJQUFJLE9BQU87QUFDVixhQUFPLE1BQU07QUFBQSxJQUNmO0FBQUEsRUFDQTtBQ2xGbUIsTUFBSSxZQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNTMsNTQsNTUsNTYsNTcsNTgsNTldfQ==
