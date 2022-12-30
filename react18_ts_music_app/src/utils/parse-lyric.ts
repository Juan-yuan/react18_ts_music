export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  if (!lyricString) return

  const lines: string[] = lyricString.split('\n')
  const lyrics: ILyric[] = []

  for (const line of lines) {
    const results = timeRegExp.exec(line)
    if (!results) continue

    const hours = Number(results[1]) * 60 * 1000
    const seconds = Number(results[2]) * 1000
    const minutes =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10
    const time = hours + seconds + minutes

    const text = line.replace(timeRegExp, '')
    lyrics.push({ time, text })
  }
  return lyrics
}
