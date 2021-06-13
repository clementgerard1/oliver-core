import { OliverNode } from "@utils/interfaces/OliverObjects"

// Documentation à afficher

export default class Plus_ extends OliverNode {
  // Need to be defined
  processor = 'plus_-processor'
  input = 'audio'
  output = 'audio'

  // All other properties are available in process function
  sum = 0

  // Typescript
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
