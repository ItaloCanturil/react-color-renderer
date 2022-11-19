type Color = {
  hex: string,
  name: string
}

export default function Colors ({hex, name}: Color) {
  return (
    <div className="color-square" style={{ backgroundColor: hex}}>
      <h2>{ name }</h2>
    </div>
  )
}