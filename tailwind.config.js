module.exports = {
  purge: [
    './src/components/Home',
    './src/components/About',
    './src/components/Blog',
    './src/components/Contact',
    './src/components/Portfolio',
    './src/components/Pricing',
    './src/components/Post',
    './src/components/SinglePost',
    './src/components/Navbar'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        spinOnce: {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        spinOnce: 'spin .5s linear',
        wiggle: 'wiggle .5s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
