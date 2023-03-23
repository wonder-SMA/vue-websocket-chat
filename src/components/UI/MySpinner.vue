<script>
export default {
  name: 'MySpinner',

  data() {
    return {
      ref: null,
      interval: null,
      colors: [
        '#F56565',
        '#ED8936',
        '#ECC94B',
        '#48BB78',
        '#38B2AC',
        '#4299E1',
        '#667EEA',
        '#9F7AEA',
        '#008b8b'
      ]
    };
  },

  mounted() {
    let idx = 0;
    this.$refs.circle.style.stroke = this.colors.at(-1);
    this.interval = setInterval(() => {
      this.$refs.circle.style.stroke = this.colors[idx++];
      if (idx === this.colors.length) {
        idx = 0;
      }
    }, 1400);
  },

  unmounted() {
    clearInterval(this.interval);
  }
};
</script>

<template>
  <div class="spinner">
    <svg
        class="spinner__image"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle ref="circle" cx="50" cy="50" r="45" />
    </svg>
  </div>
</template>

<style scoped>
.spinner {
  width: 50%;
  height: 50%;
  max-width: 200px;
  max-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner__image {
  width: 90%;
  height: 90%;
  animation: 1.4s linear infinite svg-animation;
}

@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.spinner circle {
  animation: 1.4s ease-in-out infinite both circle-animation;
  -webkit-transition: stroke 0.3s linear;
  -moz-transition: stroke 0.3s linear;
  -o-transition: stroke 0.3s linear;
  transition: stroke 0.3s linear;
  display: block;
  fill: transparent;
  stroke-linecap: round;
  stroke-dasharray: 280;
  stroke-dashoffset: 280;
  stroke-width: 6px;
  transform-origin: 50% 50%;
}

@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
</style>
