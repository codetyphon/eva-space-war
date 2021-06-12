import { GameObject } from "@eva/eva.js"
import { Text } from '@eva/plugin-renderer-text'
// import ScoreComponent from "../Components/Score";
const Score = () => {
    const text = new GameObject('score', {
        position: {
            x: 60,
            y: 60
        },
        origin: {
            x: 0.5,
            y: 0.5
        },
        anchor: {
            x: 0.5,
            y: 0.5
        }
    })
    text.addComponent(
        new Text({
            text: 0,
            style: {
                fontFamily: 'Arial',
                fontSize: 80,
                fontWeight: 'bold',
                fill: ['#fff'], // gradient
            }
        })
    )
    return text
}
export default Score