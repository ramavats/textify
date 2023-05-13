import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [hex, setHex] = useState('#000000');
  const [rgb, setRgb] = useState('rgb(0, 0, 0)');
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0 });
  const [cmyk, setCmyk] = useState({c:0, m:0, y:0, k:0})
  const [showAlert, setShowAlert] = useState(false);

  const [displayPicker, setDisplayPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color.rgb);
    setHex(color.hex);
    setRgb(`rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`);
    setHsl(convertRgbToHsl(color.rgb.r, color.rgb.g, color.rgb.b));
    
    setCmyk(convertRgbToCmyk(color.rgb.r, color.rgb.g, color.rgb.b))
  }

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const convertRgbToCmyk = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
  
    const k = 1 - Math.max(r, g, b);
    const c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    const m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    const y = k === 1 ? 0 : (1 - b - k) / (1 - k);
  
    return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) };
  }
  

  const convertRgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0; 
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  

  return (
    <div className='container'>

    <h1>Pick a color</h1>
    <div className='container my-2'><div onClick={handleClick}>
        <div style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`, width: '100px', height: '100px', borderRadius: '10px', border: '1px solid #999', cursor: 'pointer' }} />
      </div>
      {displayPicker ? (
        <div style={{ position: 'absolute', zIndex: '2' }}>
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}</div>
      
            
<div class="input-group flex-nowrap py-1">
  <span class="input-group-text" id="addon-wrapping">RGB :</span>
  <input onClick={() => copyToClipboard(rgb)} type="text" value={rgb} class="form-control" placeholder="Select Color" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap py-1">
  <span class="input-group-text" id="addon-wrapping">HEX :</span>
  <input onClick={() => copyToClipboard(hex)} type="text" value={hex} class="form-control" placeholder="Select Color" aria-label="Username" aria-describedby="addon-wrapping" />
</div>

<div class="input-group flex-nowrap py-1">
  <span class="input-group-text" id="addon-wrapping">HSL :</span>
  <input onClick={() => copyToClipboard(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)} type="text" value={`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`} class="form-control" placeholder="Select Color" aria-label="Username" aria-describedby="addon-wrapping" />
</div>

<div class="input-group flex-nowrap py-1">
  <span class="input-group-text" id="addon-wrapping">CMYK :</span>
  <input onClick={() => copyToClipboard(`cmyk(${cmyk.c}, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`)} type="text" value={`cmyk(${cmyk.c}, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`} class="form-control" placeholder="Select Color" aria-label="Username" aria-describedby="addon-wrapping" />
</div>

{showAlert && <p class="alert alert-success p-2 text-center" role="alert">
  Copied!
</p>}

</div>
  );
}

export default ColorPicker;
