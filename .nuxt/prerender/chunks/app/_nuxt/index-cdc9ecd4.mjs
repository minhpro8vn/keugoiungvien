import { b as buildAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file:///home/minht/Documents/docu/insense/insense/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file:///home/minht/Documents/docu/insense/insense/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/h3/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/devalue/index.js';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/ufo/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/ofetch/dist/node.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/destr/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/hookable/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/scule/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/klona/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/defu/dist/defu.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/ohash/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unstorage/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unstorage/drivers/memory.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/pathe/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unhead/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/unctx/dist/index.mjs';
import 'file:///home/minht/Documents/docu/insense/insense/node_modules/vue-router/dist/vue-router.node.mjs';

const smoke = "" + buildAssetsURL("smoke.ccdaa024.gif");
const music = "" + buildAssetsURL("music.0efc6244.mp3");
const burn = "" + buildAssetsURL("burn.98664424.gif");
const oilLamp = "" + buildAssetsURL("oillamp.723bcfda.png");
const _sfc_main = {
  name: "insence",
  data() {
    return {
      smoke,
      music,
      burn,
      oilLamp,
      burnOn: false,
      smokeOn: true,
      classSmoke: "smoke",
      heightWax: 220,
      cal: 220,
      turnAudio: true
    };
  },
  mounted() {
    this.burnWax();
  },
  methods: {
    burnWax() {
      if (this.$refs.burnWax) {
        if (this.heightWax > 0) {
          setTimeout(() => {
            this.$refs.burnWax.style.height = `${this.heightWax}px`;
            this.heightWax = this.heightWax - this.cal / 3600;
            this.burnWax();
          }, 1e3);
        }
      } else {
        console.error("Ref 'burnWax' not found.");
      }
    },
    turnBurn() {
      if (!this.burnOn) {
        this.burnOn = true;
        const audio = new Audio(music);
        if (this.turnAudio) {
          audio.play();
          this.turnAudio = false;
        }
        setTimeout(() => {
          this.burnOn = false;
          this.turnOn();
        }, 3e3);
      } else {
        this.burnOn = false;
      }
    },
    turnOn() {
      this.classSmoke = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="center"><div class="incense"><div class="d-flex flex-row">`);
  if ($data.burnOn) {
    _push(`<img${ssrRenderAttr("src", $data.burn)} class="burn">`);
  } else {
    _push(`<!---->`);
  }
  if ($data.smokeOn) {
    _push(`<img${ssrRenderAttr("src", $data.smoke)} class="${ssrRenderClass($data.classSmoke)}">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.smokeOn) {
    _push(`<div class="${ssrRenderClass([$data.classSmoke, "flame"])}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="wax" id="burn-wax"></div><div class="stand"></div></div></div> ${ssrInterpolate(_ctx.turnAudioFunction)} <img class="oil-lamp"${ssrRenderAttr("src", $data.oilLamp)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-cdc9ecd4.mjs.map
