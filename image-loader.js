export default function imageOptimizer({ src, width, quality }) {
  return `https://mndcoin.io/${src}?w=${width}&q=${quality || 75}`
}
