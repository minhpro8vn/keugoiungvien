<template>
  <div class="container">
    <div class="center">
      <div class="incense">
        <div class="d-flex flex-row">
          <img v-if="burnOn" :src="burn" class="burn" />
          <img v-if="smokeOn" :src="smoke" :class="classSmoke" />
        </div>
        <div v-if="smokeOn" class="flame" :class="classSmoke"></div>
        <div class="wax" id="burn-wax" ref="burnWax"></div>
        <div class="stand"></div>
      </div>
    </div>
    {{ turnAudioFunction }}
    <img class="oil-lamp" :src="oilLamp" @click="turnBurn()" />
  </div>
</template>
<script>
import smoke from "../public/smoke.gif";
import music from "../public/music.mp3";
import burn from "../public/burn.gif";
import oilLamp from "../public/oillamp.png";
export default {
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
      turnAudio: true,
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
          }, 1000);
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
        }, 3000);
      } else {
        this.burnOn = false;
      }
    },
    turnOn() {
      this.classSmoke = "";
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2d3d50;
}
.smoke {
  visibility: hidden;
}
.burn {
  margin: 4.5rem 0 0 1rem;
  position: fixed;
  transform: rotate(50deg);
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #2d3d50;
  box-shadow: 4px 8px 16px #000010;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 4px;
  overflow: hidden;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.incense {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.oil-lamp {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 10px;
}
.flame {
  height: 0.5rem;
  width: 0.6rem;
  background-image: linear-gradient(#fe0000, #776b5d);
  border-radius: 8px 8px 8px 8px/20px 20px 8px 8px;
  box-shadow: 0 0 20px 0 #fe0000;
  animation: animate 15s ease-in-out infinite, glow 2s infinite ease;
}
.wax {
  width: 10px;
  height: 200px;
  background-image: linear-gradient(to right, #994d1c, #6b240c);
  border-radius: 4px;
}
.stand {
  width: 100px;
  height: 8px;
  background-color: #1c233e;
  border-radius: 3px;
}
@keyframes animate {
  0%,
  22%,
  49%,
  62%,
  81%,
  100% {
    border-radius: 2px 14px 8px 8px/20px 20px 8px 8px;
  }
  14%,
  32%,
  56%,
  70%,
  89% {
    border-radius: 14px 2px 8px 8px/20px 20px 8px 8px;
  }
}
@keyframes glow {
  0%,
  30%,
  60%,
  80%,
  100% {
    box-shadow: 0 0 20px #495e57;
  }
  20%,
  0%,
  70% {
    box-shadow: 0 0 40px #f99417;
  }
}
</style>
