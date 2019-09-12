import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated as a, interpolate } from 'react-spring'
import './animation.scss' // Icon made by Freepik from www.flaticon.com

export default function App() {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [100, 100] }))
  const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)
  const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
  const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 + o / 2}) scale(0.8)`)
  const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`)
  const interpSpot = interpolate([st, xy], (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`)
  const interpMouth = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 + o / 1.7}) scale(0.8)`)
  const interpHair = st.interpolate(o => `translate(79,${o / 4})`)
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x -(( window.innerWidth / 2 )- 0.25 * window.innerWidth) ,y - window.innerHeight / 2] }), [])
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])
  return (
    <div class="container" onMouseMove={onMove} onScroll={onScroll}>
      <div style={{ height: '200%', overflow: 'hidden' }}>
      <div className="header-container">
                <div className="name-container">
                    <p className="name">Jean Labed</p>
                    
                    <p className="name2">Developpeur web and mobile Fullstack Junior</p>


                </div>
            </div>

      </div>
      <a.svg style={{ transform: interpBg }} viewBox="0 0 490 512">
        <g id="bg">
          <path d="M490,267 C490,402.308594 380.308594,512 245,512 C109.691406,512 0,402.308594 0,267 C0,131.691406 109.691406,22 245,22 C380.308594,22 490,131.691406 490,267 Z" />
        </g>
        <g id="sweater" transform="translate(94.000000, 361.000000)">
          <path d="M282,0 L251.722656,0 C224.347656,23.640625 188.875,37.5 151,37.5 C113.128906,37.5 77.65625,23.640625 50.277344,0 L20,0 C9,0 2.84217094e-14,9 2.84217094e-14,20 L2.84217094e-14,98.945312 C41.609375,131.554688 94.035156,151 151,151 C207.964844,151 260.390625,131.554688 302,98.945312 L302,20 C302,9 293,0 282,0 Z" />
          <path d="M0,20 L0,98.945312 C9.464844,106.359375 19.492188,113.089844 30,119.066406 L30,20 C30,9 39,0 50,0 L20,0 C9,0 0,9 0,20 Z" />
          <path d="M151,151 C175.925781,151 199.984375,147.277344 222.648438,140.355469 C217.285156,105.605469 187.25,79 151,79 C114.75,79 84.714844,105.605469 79.355469,140.355469 C102.015625,147.277344 126.074219,151 151,151 Z" />
        </g>
        <a.g id="face" transform={interpFace}>
          <path d="M155,294 C69.746094,294 0.382812,224.640625 0.382812,139.382812 C0.382812,124.1875 2.59375,109.15625 6.949219,94.707031 C7.535156,92.765625 9.230469,91.371094 11.246094,91.175781 C25.488281,89.773438 54.296875,85.5 87.210938,72.605469 C127.386719,56.867188 162.125,33.175781 190.460938,2.191406 C191.414062,1.148438 192.753906,0.566406 194.148438,0.566406 C194.351562,0.566406 194.554688,0.578125 194.761719,0.601562 C196.367188,0.800781 197.777344,1.765625 198.546875,3.1875 C231.648438,64.441406 280.03125,84.359375 299.296875,90.082031 C300.894531,90.558594 302.152344,91.796875 302.648438,93.390625 C307.269531,108.242188 309.613281,123.714844 309.613281,139.382812 C309.613281,224.640625 240.257812,294 155,294 Z" />
          <path d="M24.769531,128.816406 C24.1468237,115.207898 26.566406,101.660156 30.085938,88.578125 C22.433594,89.910156 16.019531,90.707031 11.246094,91.175781 C9.230469,91.371094 7.535156,92.769531 6.949219,94.707031 C2.59375,109.15625 0.382812,124.1875 0.382812,139.382812 C0.382812,215.429688 55.570312,278.828125 128,291.636719 C62.7239587,260.545573 28.3138023,206.272135 24.769531,128.816406 Z" />
        </a.g>
        <a.g id="eye" transform={interpEye}>
          <circle fill="#FFFFFF" cx="105" cy="104" r="104" />
          <path d="M32.5516247,104.414062 C32.5516247,52.4323881 70.6809824,9.35662037 120.492188,1.64794037 C115.264973,0.835536211 109.915627,0.414062 104.46247,0.414062 C47.0424901,0.414062 0.492188,46.9776706 0.492188,104.414062 C0.492188,161.850453 47.0424901,208.414062 104.46247,208.414062 C109.915627,208.414062 115.264973,207.992588 120.492188,207.180184 C70.6809824,199.471504 32.5516247,156.395736 32.5516247,104.414062 Z" />
          <a.g transform={interpIris}>
            <path d="M171.507812,103.921875 C171.507812,140.652344 141.730469,170.429688 105,170.429688 C68.269531,170.429688 38.492188,140.652344 38.492188,103.921875 C38.492188,67.191406 68.269531,37.414062 105,37.414062 C141.730469,37.414062 171.507812,67.191406 171.507812,103.921875 Z" />
            <path d="M59,103.921875 C59,70.679688 83.390625,43.132812 115.253906,38.203125 C111.910156,37.683594 108.488281,37.414062 105,37.414062 C68.269531,37.414062 38.492188,67.191406 38.492188,103.921875 C38.492188,140.652344 68.269531,170.429688 105,170.429688 C108.488281,170.429688 111.910156,170.160156 115.253906,169.640625 C83.390625,164.710938 59,137.164062 59,103.921875 Z" />
          </a.g>
          <a.g transform={interpPupil} fill="#FFFFFF">
            <circle fill="#333031" cx="105" cy="104" r="36" />
            <path d="M83,103.921875 C83,86.402344 95.484375,71.804688 112.042969,68.527344 C109.765625,68.078125 107.410156,67.835938 105,67.835938 C85.070312,67.835938 68.914062,83.992188 68.914062,103.921875 C68.914062,123.851562 85.070312,140.007812 105,140.007812 C107.410156,140.007812 109.765625,139.765625 112.042969,139.316406 C95.484375,136.039062 83,121.441406 83,103.921875 Z" />
            <a.path
              transform={interpSpot}
              d="M148.335938,81.246094 C148.335938,92.210938 139.445312,101.101562 128.480469,101.101562 C117.511719,101.101562 108.625,92.210938 108.625,81.246094 C108.625,70.277344 117.515625,61.386719 128.480469,61.386719 C139.445312,61.386719 148.335938,70.277344 148.335938,81.246094 Z"
            />
          </a.g>
        </a.g>
        <a.g id="mouth" transform={interpMouth}>
          <path d="M119.707031,0.621094 L24.292969,0.621094 C17.183594,0.621094 10.476562,3.738281 5.894531,9.167969 C1.304688,14.601562 -0.636719,21.738281 0.558594,28.75 C4.910156,54.292969 22.171875,74.695312 45,83.816406 C53,86.6054687 62.3333333,88 73,88 C83.6666667,88 92.3333333,86.6054687 99,83.816406 C121.828125,74.695312 139.089844,54.292969 143.441406,28.753906 C144.640625,21.738281 142.695312,14.601562 138.109375,9.171875 C133.523438,3.738281 126.816406,0.621094 119.707031,0.621094 Z" />
          <path d="M119.707031,17.253906 L24.292969,17.253906 C22.09375,17.253906 20.019531,18.21875 18.597656,19.898438 C17.183594,21.578125 16.578125,23.785156 16.953125,25.957031 C19.902344,43.246094 30.53125,57.480469 45,65.445312 C53.6666667,69.1484373 63,71 73,71 C83,71 91.6666667,69.1484373 99,65.445312 C113.46875,57.480469 124.101562,43.246094 127.046875,25.953125 C127.417969,23.78125 126.816406,21.578125 125.398438,19.898438 C123.980469,18.21875 121.90625,17.253906 119.707031,17.253906 Z" />
          <path d="M41.132812,63.109375 C46,67 57,70.470421 64,70.470421 C55.667969,62.450889 39.871094,38.113281 37.796875,25.953125 C37.632812,24.988281 37.671875,24.019531 37.875,23.089844 L22.136719,41.734375 C26.53125,50.46875 33.121094,57.804688 41.132812,63.109375 Z" />
          <path d="M127.046875,25.953125 C127.417969,23.78125 126.816406,21.578125 125.398438,19.894531 C123.980469,18.214844 121.90625,17.253906 119.710938,17.253906 L24.296875,17.253906 C22.09375,17.253906 20.019531,18.214844 18.601562,19.898438 C17.183594,21.578125 16.582031,23.78125 16.953125,25.953125 C17.910156,31.574219 19.6875,36.867188 22.140625,41.730469 L38.152344,22.761719 C39.019531,21.730469 40.449219,21.730469 41.316406,22.761719 L54.285156,38.121094 C55.15625,39.148438 56.582031,39.148438 57.453125,38.121094 L70.421875,22.761719 C71.289062,21.730469 72.714844,21.730469 73.585938,22.761719 L86.550781,38.121094 C87.425781,39.148438 88.847656,39.148438 89.71875,38.121094 L102.6875,22.761719 C103.554688,21.730469 104.984375,21.730469 105.851562,22.761719 L121.863281,41.730469 C124.308594,36.863281 126.089844,31.574219 127.046875,25.953125 Z" />
        </a.g>
        <a.g id="hair" transform={interpHair}>
          <g id="ears" transform="translate(-20.000000, 203.000000)" fill="#EFB06C">
            <path d="M31.382812,41.382812 C31.382812,27.445312 33.277344,13.65625 36.96875,0.320312 L33.878906,0.320312 C15.6875,0.320312 0.941406,15.066406 0.941406,33.261719 L0.941406,58.445312 C0.941406,76.636719 15.6875,91.382812 33.878906,91.382812 L39.792969,91.382812 C34.289062,75.457031 31.382812,58.585938 31.382812,41.382812 Z" />
            <path d="M336.121094,0.320312 L333.042969,0.320312 C336.730469,13.652344 338.613281,27.4375 338.613281,41.382812 C338.613281,58.585938 335.710938,75.457031 330.207031,91.382812 L336.121094,91.382812 C354.3125,91.382812 369.058594,76.636719 369.058594,58.445312 L369.058594,33.261719 C369.058594,15.066406 354.3125,0.320312 336.121094,0.320312 Z" />
          </g>
          <g fill="#794091">
            <path d="M14.878906,203.820312 L17.3125,203.820312 L17.589844,202.820312 C17.859375,201.828125 18.132812,200.835938 18.429688,199.851562 C18.957031,198.097656 20.476562,196.847656 22.296875,196.671875 C36.566406,195.269531 65.425781,190.984375 98.394531,178.070312 C138.640625,162.304688 173.441406,138.570312 201.828125,107.527344 C202.679688,106.597656 203.890625,106.0625 205.148438,106.0625 C205.335938,106.0625 205.519531,106.074219 205.703125,106.097656 C207.144531,106.273438 208.417969,107.144531 209.109375,108.425781 C242.300781,169.84375 290.832031,189.820312 310.15625,195.558594 C311.597656,195.988281 312.726562,197.097656 313.171875,198.535156 C313.625,199.988281 314.078125,201.550781 314.601562,203.453125 L314.703125,203.820312 L317.125,203.820312 C322.40625,203.820312 327.390625,205.097656 331.804688,207.347656 L331.804688,103.625 C331.800781,46.394531 285.40625,0 228.175781,0 L103.824219,0 C46.59375,0 0.199219,46.394531 0.199219,103.625 L0.199219,207.347656 C4.609375,205.101562 9.597656,203.820312 14.878906,203.820312 Z" />
            <path d="M20.15625,294.222656 L20.042969,293.882812 L14.878906,293.882812 C9.597656,293.882812 4.609375,292.605469 0.199219,290.359375 L0.199219,398.382812 C0.199219,418.59375 5.992188,437.453125 16,453.394531 L16,381 C16,370.523438 24.523438,362 35,362 L66.449219,362 C45.660156,344.40625 29.414062,321.234375 20.15625,294.222656 Z" />
            <path d="M317.121094,293.882812 L311.957031,293.882812 L311.84375,294.222656 C302.585938,321.234375 286.339844,344.40625 265.550781,362 L297,362 C307.476562,362 316,370.523438 316,381 L316,453.386719 C326.007812,437.445312 331.800781,418.59375 331.800781,398.382812 L331.800781,290.355469 C327.390625,292.605469 322.402344,293.882812 317.121094,293.882812 Z" />
          </g>
          <path d="M14.878906,203.820312 L17.3125,203.820312 L17.589844,202.820312 C17.859375,201.828125 18.132812,200.835938 18.429688,199.851562 C18.957031,198.097656 20.476562,196.847656 22.296875,196.671875 C24.871094,196.417969 27.933594,196.066406 31.398438,195.59375 L31.398438,103.625 C31.398438,46.394531 77.792969,0 135.023438,0 L103.824219,0 C46.59375,0 0.199219,46.394531 0.199219,103.625 L0.199219,207.347656 C4.609375,205.101562 9.597656,203.820312 14.878906,203.820312 Z" />
          <path d="M20.15625,294.222656 L20.042969,293.882812 L14.878906,293.882812 C9.597656,293.882812 4.609375,292.605469 0.199219,290.359375 L0.199219,398.382812 C0.199219,418.59375 5.992188,437.453125 16,453.394531 L16,381 C16,371.757812 22.640625,364.039062 31.398438,362.351562 L31.398438,319.433594 C26.960938,311.480469 23.1875,303.058594 20.15625,294.222656 Z" />
          <path d="M26.144531,466.957031 C27.078125,468.011719 28.027344,469.050781 29,470.066406 L29,468.941406 C28.042969,468.289062 27.09375,467.621094 26.144531,466.957031 Z" />
        </a.g>
      </a.svg>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))