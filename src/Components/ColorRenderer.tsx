import Colors from "./Colors"

export default function ColorRenderer() {
  const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink'
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green'
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange'
  }]
  return (
    <div>
      {colors.map(color => (
        <Colors hex={color.hex} name={color.name}/>
      ))}
    </div>
  )
}