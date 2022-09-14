export default interface TweetModel {
  user: {
    name: string
    image: string
    handle: string
  }
  timestamp: string
  message: string
}
