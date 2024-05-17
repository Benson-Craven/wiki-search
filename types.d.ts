// easy way to organise types, in tsconfig.json, it has it named with this type of naming convention

type Result = {
  pageid: string
  title: string
  extract: string
  thumbnail?: {
    source: string
    width: number
    height: number
  }
}

type SearchResult = {
  query?: {
    pages?: Result[]
  }
}
