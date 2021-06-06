import { AudioToAudioObject } from "@utils/interfaces/OliverObjects"

export default class Plus_ extends AudioToAudioObject {
  processor = 'plus_-processor'
  input = 'audio'
  output = 'audio'

  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach(channel => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1
      }
    })
    return true
  }
}
