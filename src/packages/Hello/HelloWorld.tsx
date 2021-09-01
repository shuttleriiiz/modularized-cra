import { greet } from "@packages/greet"
// import { greet } from "../greet" //failed

export const HelloWorld = () => {
  return (
    <h1>{greet()}</h1>
  )
}