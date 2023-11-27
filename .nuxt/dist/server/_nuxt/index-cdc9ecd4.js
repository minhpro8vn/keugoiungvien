import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const smoke = "" + __buildAssetsURL("smoke.ccdaa024.gif");
const music = "" + __buildAssetsURL("music.0efc6244.mp3");
const burn = "" + __buildAssetsURL("burn.98664424.gif");
const oilLamp = "" + __buildAssetsURL("oillamp.723bcfda.png");
const index_vue_vue_type_style_index_0_lang = "";
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
export {
  index as default
};
//# sourceMappingURL=index-cdc9ecd4.js.map
