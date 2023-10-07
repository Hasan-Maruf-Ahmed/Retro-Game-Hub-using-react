import "./styles/tetrispage.css"
import Game from './gameComponents/Game'

export const TetrisPage = () => {
  return (
    <div className="wrapper">
        <Game rows={20} columns={10} />
    </div>
  )
}
