# Vue Color Blender/Shader/Converter

Lightweight color shader/blender/converter plugin implemented for Vue 2.

[![dependencies Status](https://david-dm.org/arthurvasconcelos/vue-cbsc/status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-cbsc) 
[![devDependencies Status](https://david-dm.org/arthurvasconcelos/vue-cbsc/dev-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-cbsc?type=dev) 
[![peerDependencies Status](https://david-dm.org/arthurvasconcelos/vue-cbsc/peer-status.svg?style=flat-square)](https://david-dm.org/arthurvasconcelos/vue-cbsc?type=peer)

[![Latest GH Latest Release](https://img.shields.io/github/release/arthurvasconcelos/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/releases/latest)
[![Total GH Latest Release Downloads](https://img.shields.io/github/downloads/arthurvasconcelos/vue-cbsc/latest/total.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/releases/latest)
[![Commits since latest GH release](https://img.shields.io/github/commits-since/arthurvasconcelos/vue-cbsc/latest.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/commits/master)
[![GH Forks](https://img.shields.io/github/forks/arthurvasconcelos/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/network)
[![GH Starts](https://img.shields.io/github/stars/arthurvasconcelos/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/stargazers)
[![GH Watchers](https://img.shields.io/github/watchers/arthurvasconcelos/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/watchers)

[![NPM Latest Package Release](https://img.shields.io/npm/v/vue-cbsc.svg?style=flat-square)](https://www.npmjs.com/package/vue-cbsc)
[![NPM Package Downloads](https://img.shields.io/npm/dt/vue-cbsc.svg?style=flat-square)](https://www.npmjs.com/package/vue-cbsc)
[![License](https://img.shields.io/github/license/arthurvasconcelos/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/blob/master/LICENSE)
[![Compatible Node Version](https://img.shields.io/node/v/vue-cbsc.svg?style=flat-square)](https://github.com/arthurvasconcelos/vue-cbsc/blob/master/package.json#L36)

[![bitHound Overall Score](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/badges/score.svg)](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc)
[![bitHound Dependencies](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/badges/dependencies.svg)](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/badges/devDependencies.svg)](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc/badges/code.svg)](https://www.bithound.io/github/arthurvasconcelos/vue-cbsc)

## Disclaimer

The algoritmn used in this plugin was not developed by me, I am just wrapping it for Vue. <a href="https://stackoverflow.com/users/693927/pimp-trizkit" target="_blank">Pimp Trizkit</a> is the algoritmn author, for more information visit <a href="https://stackoverflow.com/a/13542669/3130385" target="_blank"><img src="stack.webp" alt="stack" style="width: 20px;"/>Programmatically Lighten or Darken a hex color (or rgb, and blend colors)</a>.

## Requirements

- **Vue:** _^2.0.0_

## Install
```sh
$ npm install vue-cbsc --save

$ yarn add vue-cbsc
```

## Configuration

```javascript
import Vue from 'vue';
import VueCBSC from 'vue-cbsc';

Vue.use(VueCBSC);
```

## Usage

```javascript
new Vue({
    el: '#app',
    mounted: function() {
        let color1 = 'rgb(114,93,20)';
        let color2 = 'rgb(114,93,20,0.37423)';
        let color3 = '#67DAF0';
        let color4 = '#5567DAF0';
        let color5 = '#F3A';
        let color6 = '#DF3A';
        let color7 = 'rgb(75,200,112)';
        let color8 = 'rgb(75,200,112,0.98631)';

        // Shade (Lighten or Darken) (percentage between 0 ~ 1)
        console.log(this.$cbsc.lighten(color1, 0.3)); // Output: rgb(114,93,20) + [30% Lighter] => rgb(156,142,91)
        console.log(this.$cbsc.darken(color5, 0.13)); // Output: #F3A + [13% Darker]  => #de2c94

        // Shade with Conversion (use 'c' as your 'to' color)
        console.log(this.$cbsc.blend(color2, 'c', 0.42)); // Output: rgb(114,93,20,0.37423) + [42% Lighter] + [Convert] => #5fada177
        
        // RGB2Hex & Hex2RGB Conversion Only
        console.log(this.$cbsc.convert(color6)); // Output: #DF3A + [Convert] => rgb(255,51,170,0.8667)
        
        // Blending (percentage between -1 ~ 1)
        console.log(this.$cbsc.blend(color2, color8, -0.13)); // Output: rgb(114,93,20,0.37423) + rgb(75,200,112,0.98631) + [13% Blend] => rgb(109,107,32,0.4538)
        console.log(this.$cbsc.blend(color2, color7, 0.65)); // Output: rgb(114,93,20,0.37423) + rgb(75,200,112) + [65% Blend] => rgb(89,163,80,0.37423)
        
        // Blending with Conversion  (result is in the 'to' color format)
        console.log(this.$cbsc.blend(color1, color3, 0.3)); // Output: rgb(114,93,20) + #67DAF0 + [30% Blend] + [Convert] => #6f8356
        console.log(this.$cbsc.blend(color4, color2, -0.13)); // Output: #5567DAF0 + rgb(114,93,20,0.37423) + [13% Blend] + [Convert] => rgb(104,202,211,0.3386)
        
        // Error Checking
        console.log(this.$cbsc.lighten('#FFBAA', 0.3)); // Output: #FFBAA + [30% Lighter] => null
        console.log(this.$cbsc.blend(color1, color5, 30)); // Output: rgb(114,93,20) + #F3A + [3000% Blend] => null
        
        // A pound of salt is jibberish  (Error Check Fail)
        console.log(this.$cbsc.lighten('#salt', 0.3));  // #salt + [30% Lighter] => #004d4d4d
        
        // Ripping
        console.log(this.$cbsc.rip(color4)); // Output: {0: 103, 1: 218, 2: 240, 3: 0.3333}
    }
})
```

## Contributing
- vue-cbsc Issues: https://github.com/arthurvasconcelos/vue-cbsc/issues

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

![Live Long and Prosper](http://i.imgur.com/wtGmSKO.png)