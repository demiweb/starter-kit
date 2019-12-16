export const {
  isAndroid,
  isCordova,
  isEdge,
  isFirefox,
  isChrome,
  isChromeIOS,
  isChromiumBased,
  isIE,
  isIOS,
  isOpera,
  isSafari,
} = {
  isAndroid: /Android/.test(navigator.userAgent),
  isCordova: !!window.cordova,
  isEdge: /Edge/.test(navigator.userAgent),
  isFirefox: /Firefox/.test(navigator.userAgent),
  isChrome: /Google Inc/.test(navigator.vendor),
  isChromeIOS: /CriOS/.test(navigator.userAgent),
  isChromiumBased: !!window.chrome && !/Edge/.test(navigator.userAgent),
  isIE: /Trident/.test(navigator.userAgent),
  isIOS: /(iPhone|iPad|iPod)/.test(navigator.platform),
  isOpera: /OPR/.test(navigator.userAgent),
  isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
}

export const isWebkit = isChrome || isChromiumBased || isChromeIOS || isSafari || isAndroid || isIOS

export const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints

export const BEMblock = (block, name) => {
  const addMod = mod => {
    block.classList.add(`${name}--${mod}`)
  }
  const removeMod = mod => {
    block.classList.remove(`${name}--${mod}`)
  }
  const toggleMod = mod => {
    block.classList.toggle(`${name}--${mod}`)
  }
  const containsMod = mod => block.classList.contains(`${name}--${mod}`)

  return {
    name,
    block,
    addMod,
    toggleMod,
    removeMod,
    containsMod,
  }
}
